import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

export default function AuthModal({ mode, onClose, onSwitch }) {
  const { login, register, googleLogin } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password });
      } else {
        await register({
          name: form.name,
          email: form.email,
          password: form.password,
          phone: form.phone,
        });
      }
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async (credentialResponse) => {
    setError('');
    try {
      await googleLogin(credentialResponse.credential);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Google sign in failed.');
    }
  };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.82)',
        zIndex: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          background: '#0d1a1a',
          border: '1px solid rgba(16,185,129,.35)',
          borderRadius: 20,
          padding: 'clamp(1rem, 4vw, 2.5rem)',
          maxWidth: 440,
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(42,58,58,.5)',
            border: '1px solid #2a3a3a',
            borderRadius: '50%',
            width: 32,
            height: 32,
            color: '#9ca3af',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#fff', fontSize: '1.3rem' }}>
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '.85rem' }}>
            {mode === 'login'
              ? 'Sign in to your account'
              : 'Join Neqasel today'}
          </p>
        </div>

        {/* GOOGLE */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <GoogleLogin
            onSuccess={handleGoogle}
            onError={() => setError('Google sign in failed')}
          />
        </div>

        {/* DIVIDER */}
        <div style={{ textAlign: 'center', color: '#6b7280', margin: '1rem 0' }}>
          or continue with email
        </div>

        {/* FORM */}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>

          {mode === 'register' && (
            <input
              name="name"
              value={form.name}
              onChange={handle}
              placeholder="Full Name"
              style={inputStyle}
              required
            />
          )}

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="Email Address"
            style={inputStyle}
            required
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handle}
            placeholder="Password"
            style={inputStyle}
            required
          />

          {mode === 'register' && (
            <input
              name="phone"
              value={form.phone}
              onChange={handle}
              placeholder="Phone (optional)"
              style={inputStyle}
            />
          )}

          {error && (
            <div style={{ color: 'salmon', fontSize: '.85rem' }}>
              {error}
            </div>
          )}

          <button
            disabled={loading}
            style={{
              padding: '0.9rem',
              borderRadius: 12,
              border: 'none',
              background: 'linear-gradient(to right,#10b981,#06b6d4)',
              color: '#fff',
              fontWeight: 700,
              cursor: 'pointer',
              width: '100%',
            }}
          >
            {loading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* SWITCH */}
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#9ca3af' }}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <span
            onClick={onSwitch}
            style={{ color: '#10b981', cursor: 'pointer' }}
          >
            {mode === 'login' ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.85rem',
  borderRadius: 10,
  border: '1px solid #2a4a48',
  background: '#1a2e2c',
  color: '#fff',
  fontSize: '0.95rem',
};