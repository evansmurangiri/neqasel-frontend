import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// ===============================
// CLEAN ENV SWITCH (LOCAL + PROD)
// ===============================
// Uses .env for both environments
const API_URL = import.meta.env.VITE_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() =>
    localStorage.getItem('neqasel_token')
  );
  const [loading, setLoading] = useState(true);

  // ===============================
  // LOAD USER ON REFRESH
  // ===============================
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const res = await axios.get(`${API_URL}/auth/me`);

        setUser(res.data.user);
      } catch (err) {
        console.log('Auth error:', err.message);

        localStorage.removeItem('neqasel_token');
        delete axios.defaults.headers.common['Authorization'];

        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  // ===============================
  // SAVE AUTH
  // ===============================
  const saveAuth = (token, user) => {
    localStorage.setItem('neqasel_token', token);

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setToken(token);
    setUser(user);
  };

  // ===============================
  // REGISTER
  // ===============================
  const register = async (data) => {
    const res = await axios.post(`${API_URL}/auth/register`, data);
    saveAuth(res.data.token, res.data.user);
    return res.data.user;
  };

  // ===============================
  // LOGIN
  // ===============================
  const login = async (data) => {
    const res = await axios.post(`${API_URL}/auth/login`, data);
    saveAuth(res.data.token, res.data.user);
    return res.data.user;
  };

  // ===============================
  // GOOGLE LOGIN
  // ===============================
  const googleLogin = async (credential) => {
    const res = await axios.post(`${API_URL}/auth/google`, {
      credential,
    });

    saveAuth(res.data.token, res.data.user);
    return res.data.user;
  };

  // ===============================
  // LOGOUT
  // ===============================
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