import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

export default function AuthModal({ mode, onClose, onSwitch }) {
  const { login, register, googleLogin } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password });
      } else {
        await register({ name: form.name, email: form.email, password: form.password, phone: form.phone });
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
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.82)', zIndex: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      <div style={{ background: '#0d1a1a', border: '1px solid rgba(16,185,129,.35)', borderRadius: 20, padding: 'clamp(1.5rem,4vw,2.5rem)', maxWidth: 440, width: '100%', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>

        {/* Close */}
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(42,58,58,.5)', border: '1px solid #2a3a3a', borderRadius: '50%', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#9ca3af', fontSize: '.9rem', fontFamily: 'inherit' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(16,185,129,.15)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(42,58,58,.5)'; e.currentTarget.style.color = '#9ca3af'; }}
        >✕</button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(16,185,129,.15)', border: '1px solid rgba(16,185,129,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto .75rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.35rem', marginBottom: '.3rem' }}>
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '.85rem' }}>
            {mode === 'login' ? 'Sign in to your Neqasel account' : 'Join thousands of traders today'}
          </p>
        </div>

        {/* Google Login Button */}
        <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}>
          <GoogleLogin
            onSuccess={handleGoogle}
            onError={() => setError('Google sign in failed. Try again.')}
            theme="filled_black"
            shape="rectangular"
            text={mode === 'login' ? 'signin_with' : 'signup_with'}
            width="360"
          />
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ flex: 1, height: 1, background: '#2a3a3a' }} />
          <span style={{ color: '#6b7280', fontSize: '.78rem' }}>or continue with email</span>
          <div style={{ flex: 1, height: 1, background: '#2a3a3a' }} />
        </div>

        {/* Form */}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 600, color: '#9ca3af', marginBottom: '.4rem', letterSpacing: '.04em' }}>FULL NAME</label>
              <input
                name="name" value={form.name} onChange={handle} required
                placeholder="John Doe"
                style={{ width: '100%', padding: '.8rem 1rem', borderRadius: 10, background: '#1a2e2c', border: '1px solid #2a4a48', color: '#fff', fontSize: '.9rem', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = 'rgba(16,185,129,.5)'}
                onBlur={e => e.target.style.borderColor = '#2a4a48'}
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 600, color: '#9ca3af', marginBottom: '.4rem', letterSpacing: '.04em' }}>EMAIL ADDRESS</label>
            <input
              name="email" type="email" value={form.email} onChange={handle} required
              placeholder="you@example.com"
              style={{ width: '100%', padding: '.8rem 1rem', borderRadius: 10, background: '#1a2e2c', border: '1px solid #2a4a48', color: '#fff', fontSize: '.9rem', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
              onFocus={e => e.target.style.borderColor = 'rgba(16,185,129,.5)'}
              onBlur={e => e.target.style.borderColor = '#2a4a48'}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 600, color: '#9ca3af', marginBottom: '.4rem', letterSpacing: '.04em' }}>PASSWORD</label>
            <input
              name="password" type="password" value={form.password} onChange={handle} required
              placeholder="Min. 6 characters"
              style={{ width: '100%', padding: '.8rem 1rem', borderRadius: 10, background: '#1a2e2c', border: '1px solid #2a4a48', color: '#fff', fontSize: '.9rem', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
              onFocus={e => e.target.style.borderColor = 'rgba(16,185,129,.5)'}
              onBlur={e => e.target.style.borderColor = '#2a4a48'}
            />
          </div>

          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 600, color: '#9ca3af', marginBottom: '.4rem', letterSpacing: '.04em' }}>PHONE NUMBER (optional)</label>
              <input
                name="phone" value={form.phone} onChange={handle}
                placeholder="0712 345 678"
                style={{ width: '100%', padding: '.8rem 1rem', borderRadius: 10, background: '#1a2e2c', border: '1px solid #2a4a48', color: '#fff', fontSize: '.9rem', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = 'rgba(16,185,129,.5)'}
                onBlur={e => e.target.style.borderColor = '#2a4a48'}
              />
            </div>
          )}

          {error && (
            <div style={{ background: 'rgba(248,113,113,.1)', border: '1px solid rgba(248,113,113,.3)', borderRadius: 8, padding: '.75rem 1rem', color: '#f87171', fontSize: '.83rem' }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} style={{ width: '100%', padding: '.9rem', borderRadius: 12, background: loading ? 'rgba(16,185,129,.5)' : 'linear-gradient(to right,#10b981,#06b6d4)', color: '#fff', fontWeight: 700, fontSize: '.95rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: 'opacity .2s', marginTop: '.25rem' }}>
            {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '.85rem', marginTop: '1.25rem' }}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={onSwitch} style={{ color: '#10b981', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }}>
            {mode === 'login' ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
      </div>
    </div>
  );
}