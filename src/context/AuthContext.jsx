import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Always use env API
const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('neqasel_token'));
  const [loading, setLoading] = useState(true);

  // Attach token + fetch user
  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const res = await axios.get(`${API_URL}/auth/me`);
        setUser(res.data.user);
      } catch (err) {
        console.log('Auth check failed:', err.response?.data || err.message);

        localStorage.removeItem('neqasel_token');
        delete axios.defaults.headers.common['Authorization'];

        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  // Save auth helper
  const saveAuth = (token, user) => {
    localStorage.setItem('neqasel_token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setToken(token);
    setUser(user);
  };

  // REGISTER
  const register = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/auth/register`, data);
      saveAuth(res.data.token, res.data.user);
      return res.data.user;
    } catch (err) {
      console.log('Register error:', err.response?.data || err.message);
      throw err;
    }
  };

  // LOGIN
  const login = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/auth/login`, data);
      saveAuth(res.data.token, res.data.user);
      return res.data.user;
    } catch (err) {
      console.log('Login error:', err.response?.data || err.message);
      throw err;
    }
  };

  // GOOGLE LOGIN (FIXED + DEBUG READY)
  const googleLogin = async (credential) => {
    try {
      const res = await axios.post(`${API_URL}/auth/google`, {
        credential,
      });

      if (!res.data?.token) {
        throw new Error('No token returned from server');
      }

      saveAuth(res.data.token, res.data.user);
      return res.data.user;
    } catch (err) {
      console.log(
        'Google login error:',
        err.response?.data || err.message
      );

      throw err;
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem('neqasel_token');
    delete axios.defaults.headers.common['Authorization'];

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        googleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);