import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('neqasel_token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get(`${API_URL}/auth/me`)
        .then(res => setUser(res.data.user))
        .catch(() => {
          localStorage.removeItem('neqasel_token');
          setToken(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);

  const saveAuth = (token, user) => {
    localStorage.setItem('neqasel_token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setToken(token);
    setUser(user);
  };

  const register = async (data) => {
    const res = await axios.post(`${API_URL}/auth/register`, data);
    saveAuth(res.data.token, res.data.user);
    return res.data.user;
  };

  const login = async (data) => {
    const res = await axios.post(`${API_URL}/auth/login`, data);
    saveAuth(res.data.token, res.data.user);
    return res.data.user;
  };

  const googleLogin = async (credential) => {
    const res = await axios.post(`${API_URL}/auth/google`, { credential });
    saveAuth(res.data.token, res.data.user);
    return res.data.user;
  };

  const logout = () => {
    localStorage.removeItem('neqasel_token');
    delete axios.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);