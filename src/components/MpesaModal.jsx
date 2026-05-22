import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../context/AuthContext';

const PRODUCTS = {
  comrades: { name: 'Comrades Masterset', price: 5000 },
  majiq:    { name: 'MasterSet Majiq',    price: 14499 },
};

function formatPhone(raw) {
  const digits = raw.replace(/\D/g, '');
  if (digits.startsWith('0') && digits.length === 10) return '254' + digits.slice(1);
  if (digits.startsWith('254') && digits.length === 12) return digits;
  if (digits.startsWith('7') && digits.length === 9) return '254' + digits;
  return digits;
}

export default function MpesaModal({ productKey, onClose, onOpenAuth }) {
  const { user } = useAuth();
  const product = PRODUCTS[productKey];

  const [phone, setPhone] = useState(user?.phone || '');
  const [step, setStep] = useState('form');
  const [errorMsg, setErrorMsg] = useState('');
  const [checkoutRequestId, setCheckoutRequestId] = useState(null);
  const [downloadToken, setDownloadToken] = useState(null);
  const [polling, setPolling] = useState(false);

  // If not logged in — prompt to sign in
  if (!user) {
    return (
      <div onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.82)', zIndex: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      >
        <div style={{ background: '#0d1a1a', border: '1px solid rgba(16,185,129,.4)', borderRadius: 20, padding: '2.5rem', maxWidth: 400, width: '100%', textAlign: 'center', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(42,58,58,.5)', border: '1px solid #2a3a3a', borderRadius: '50%', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#9ca3af', fontSize: '.9rem', fontFamily: 'inherit' }}>✕</button>
          <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(16,185,129,.1)', border: '1px solid rgba(16,185,129,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '.5rem' }}>Sign in to Purchase</h3>
          <p style={{ color: '#9ca3af', fontSize: '.88rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            You need an account to purchase <strong style={{ color: '#fff' }}>{product.name}</strong>. It only takes 30 seconds!
          </p>
          <button onClick={() => { onClose(); onOpenAuth('register'); }} style={{ width: '100%', padding: '.9rem', borderRadius: 12, background: 'linear-gradient(to right,#10b981,#06b6d4)', color: '#fff', fontWeight: 700, fontSize: '.92rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', marginBottom: '.75rem' }}>
            Create Free Account
          </button>
          <button onClick={() => { onClose(); onOpenAuth('login'); }} style={{ width: '100%', padding: '.85rem', borderRadius: 12, background: 'transparent', color: '#10b981', fontWeight: 600, fontSize: '.9rem', border: '1px solid rgba(16,185,129,.3)', cursor: 'pointer', fontFamily: 'inherit' }}>
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const handlePay = async () => {
    const formatted = formatPhone(phone);
    if (formatted.length !== 12) {
      setErrorMsg('Please enter a valid Kenyan phone number (e.g. 0712345678)');
      return;
    }
    setErrorMsg('');
    setStep('waiting');

    try {
      const res = await axios.post(`${API_URL}/mpesa/pay`, {
        phone: formatted,
        productKey,
      });

      setCheckoutRequestId(res.data.checkoutRequestId);

      // Poll for payment status every 4 seconds
      setPolling(true);
      const interval = setInterval(async () => {
        try {
          const statusRes = await axios.get(`${API_URL}/mpesa/status/${res.data.checkoutRequestId}`);
          const { status, downloadToken: token } = statusRes.data;

          if (status === 'completed') {
            clearInterval(interval);
            setPolling(false);
            setDownloadToken(token);
            setStep('success');
          } else if (status === 'failed') {
            clearInterval(interval);
            setPolling(false);
            setErrorMsg('Payment failed or was cancelled. Please try again.');
            setStep('error');
          }
        } catch (err) {
          // keep polling
        }
      }, 4000);

      // Stop polling after 2 minutes
      setTimeout(() => {
        clearInterval(interval);
        if (polling) {
          setPolling(false);
          setStep('error');
          setErrorMsg('Payment timed out. If you paid, contact support.');
        }
      }, 120000);

    } catch (err) {
      setStep('error');
      setErrorMsg(err.response?.data?.message || 'Payment initiation failed. Try again.');
    }
  };

  const handleDownload = () => {
    window.open(`${API_URL}/download/${downloadToken}`, '_blank');
  };

  const reset = () => {
    setStep('form');
    setPhone(user?.phone || '');
    setErrorMsg('');
    setCheckoutRequestId(null);
    setDownloadToken(null);
  };

  return (
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.82)', zIndex: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      <div style={{ background: '#0d1a1a', border: '1px solid rgba(16,185,129,.4)', borderRadius: 20, padding: 'clamp(1.5rem,4vw,2.5rem)', maxWidth: 440, width: '100%', position: 'relative' }}>

        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(42,58,58,.5)', border: '1px solid #2a3a3a', borderRadius: '50%', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#9ca3af', fontSize: '.9rem', fontFamily: 'inherit' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(16,185,129,.15)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(42,58,58,.5)'; e.currentTarget.style.color = '#9ca3af'; }}
        >✕</button>

        {/* FORM */}
        {step === 'form' && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(16,185,129,.15)', border: '1px solid rgba(16,185,129,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto .75rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '.3rem' }}>Pay with M-Pesa</h2>
              <p style={{ color: '#9ca3af', fontSize: '.85rem' }}>{product.name}</p>
            </div>

            <div style={{ background: 'rgba(16,185,129,.06)', border: '1px solid rgba(16,185,129,.15)', borderRadius: 12, padding: '1rem', textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '.72rem', color: '#6b7280', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '.25rem' }}>Amount</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Ksh {product.price.toLocaleString()}</div>
            </div>

            <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 600, color: '#9ca3af', marginBottom: '.5rem', letterSpacing: '.04em' }}>M-PESA PHONE NUMBER</label>
            <div style={{ display: 'flex', alignItems: 'center', background: '#1a2e2c', border: `1.5px solid ${errorMsg ? '#f87171' : '#2a4a48'}`, borderRadius: 10, padding: '.75rem 1rem', marginBottom: '.5rem', gap: '.6rem' }}>
              <span style={{ color: '#10b981', fontWeight: 600, fontSize: '.9rem', flexShrink: 0 }}>🇰🇪 +254</span>
              <input
                type="tel"
                value={phone}
                onChange={e => { setPhone(e.target.value); setErrorMsg(''); }}
                placeholder="712 345 678"
                maxLength={10}
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '.95rem', fontFamily: 'inherit' }}
              />
            </div>
            {errorMsg && <p style={{ color: '#f87171', fontSize: '.78rem', marginBottom: '.75rem' }}>{errorMsg}</p>}
            <p style={{ color: '#6b7280', fontSize: '.76rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Enter the phone number registered with M-Pesa. You will receive a prompt to enter your PIN.
            </p>

            <button onClick={handlePay} style={{ width: '100%', padding: '.9rem', borderRadius: 12, background: 'linear-gradient(to right,#10b981,#06b6d4)', color: '#fff', fontWeight: 700, fontSize: '.9rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'opacity .2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Send Payment Request</button>

            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '.73rem', marginTop: '1rem' }}>
              Secured by Safaricom M-Pesa STK Push
            </p>
          </>
        )}

        {/* WAITING */}
        {step === 'waiting' && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <div style={{ width: 64, height: 64, borderRadius: '50%', border: '3px solid rgba(16,185,129,.2)', borderTop: '3px solid #10b981', margin: '0 auto 1.5rem', animation: 'spin 1s linear infinite' }} />
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '.6rem' }}>Check Your Phone</h3>
            <p style={{ color: '#9ca3af', fontSize: '.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              A payment prompt has been sent to <strong style={{ color: '#10b981' }}>{phone}</strong>.<br />
              Enter your M-Pesa PIN to complete the payment.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', background: 'rgba(16,185,129,.05)', border: '1px solid rgba(16,185,129,.15)', borderRadius: 12, padding: '1rem', textAlign: 'left', fontSize: '.82rem', color: '#9ca3af' }}>
              <div>📱 Open the M-Pesa prompt on your phone</div>
              <div>🔐 Enter your 4-digit M-Pesa PIN</div>
              <div>✅ Your download will start automatically</div>
            </div>
            <button onClick={reset} style={{ marginTop: '1.5rem', background: 'transparent', border: '1px solid #2a3a3a', borderRadius: 10, padding: '.65rem 1.5rem', color: '#9ca3af', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.82rem' }}>
              ← Use a different number
            </button>
          </div>
        )}

        {/* SUCCESS */}
        {step === 'success' && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'rgba(16,185,129,.15)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '.5rem' }}>Payment Confirmed!</h3>
            <p style={{ color: '#9ca3af', fontSize: '.88rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Thank you! Your purchase of <strong style={{ color: '#fff' }}>{product.name}</strong> is complete. Click below to download.
            </p>
            <button onClick={handleDownload} style={{ width: '100%', padding: '1rem', borderRadius: 12, background: 'linear-gradient(to right,#10b981,#06b6d4)', color: '#fff', fontWeight: 700, fontSize: '.95rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download {product.name}
            </button>
            <p style={{ color: '#6b7280', fontSize: '.75rem', marginTop: '.85rem' }}>
              Receipt sent to your M-Pesa registered number.
            </p>
          </div>
        )}

        {/* ERROR */}
        {step === 'error' && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(248,113,113,.1)', border: '2px solid #f87171', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '.5rem' }}>Payment Failed</h3>
            <p style={{ color: '#9ca3af', fontSize: '.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{errorMsg}</p>
            <button onClick={reset} style={{ width: '100%', padding: '.9rem', borderRadius: 12, background: '#10b981', color: '#fff', fontWeight: 700, fontSize: '.9rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}