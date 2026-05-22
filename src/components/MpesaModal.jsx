import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const PRODUCTS = {
  comrades: { name: 'Comrades Masterset', price: 5000 },
  majiq: { name: 'MasterSet Majiq', price: 14499 },
};

function formatPhone(raw) {
  const digits = raw.replace(/\D/g, '');
  if (digits.startsWith('0') && digits.length === 10) return '254' + digits.slice(1);
  if (digits.startsWith('254') && digits.length === 12) return digits;
  if (digits.startsWith('7') && digits.length === 9) return '254' + digits;
  return digits;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function MpesaModal({ productKey, onClose, onOpenAuth }) {
  const { user, token: contextToken } = useAuth();
  const product = PRODUCTS[productKey];

  const [phone, setPhone] = useState(user?.phone || '');
  const [step, setStep] = useState('form');
  const [errorMsg, setErrorMsg] = useState('');
  const [checkoutRequestId, setCheckoutRequestId] = useState(null);
  const [downloadToken, setDownloadToken] = useState(null);
  const [polling, setPolling] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;

  // ================= NOT LOGGED IN =================
  if (!user) {
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
          padding: '1rem'
        }}
      >
        <div style={{
          background: '#0d1a1a',
          border: '1px solid rgba(16,185,129,.4)',
          borderRadius: 20,
          padding: '2.5rem',
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
          position: 'relative'
        }}>
          <button onClick={onClose} style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(42,58,58,.5)',
            border: '1px solid #2a3a3a',
            borderRadius: '50%',
            width: 30,
            height: 30,
            color: '#9ca3af',
            cursor: 'pointer'
          }}>✕</button>

          <h3 style={{ color: '#fff', fontWeight: 700 }}>
            Sign in to Purchase
          </h3>

          <p style={{ color: '#9ca3af', fontSize: '.9rem', marginTop: 10 }}>
            You need an account to purchase <strong style={{ color: '#fff' }}>{product.name}</strong>
          </p>

          <button
            onClick={() => { onClose(); onOpenAuth('register'); }}
            style={{
              width: '100%',
              padding: '.9rem',
              borderRadius: 12,
              background: 'linear-gradient(to right,#10b981,#06b6d4)',
              color: '#fff',
              fontWeight: 700,
              border: 'none',
              marginTop: 20,
              cursor: 'pointer'
            }}
          >
            Create Free Account
          </button>

          <button
            onClick={() => { onClose(); onOpenAuth('login'); }}
            style={{
              width: '100%',
              padding: '.85rem',
              marginTop: 10,
              borderRadius: 12,
              background: 'transparent',
              border: '1px solid rgba(16,185,129,.3)',
              color: '#10b981',
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  // ================= PAYMENT =================
  const handlePay = async () => {
    if (loading) return;

    const formatted = formatPhone(phone);

    if (formatted.length !== 12) {
      setErrorMsg('Enter valid M-Pesa number (e.g. 0712345678)');
      return;
    }

    // ✅ FIX: unified token source
    const token =
      contextToken || localStorage.getItem('neqasel_token');

    if (!token) {
      setErrorMsg('Session expired. Please login again.');
      onOpenAuth('login');
      return;
    }

    setErrorMsg('');
    setLoading(true);
    setMessage('Sending STK push...');
    setStep('waiting');

    let lastError = null;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        setMessage(`Sending STK push... (${attempt}/3)`);

        const res = await axios.post(
          `${API_URL}/mpesa/pay`,
          { phone: formatted, productKey },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            timeout: 20000,
          }
        );

        const checkoutId = res.data.checkoutRequestId;
        setCheckoutRequestId(checkoutId);

        setMessage('📱 STK sent! Check phone and enter PIN');

        setPolling(true);

        const interval = setInterval(async () => {
          try {
            const statusRes = await axios.get(
              `${API_URL}/mpesa/status/${checkoutId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            const { status, downloadToken } = statusRes.data;

            if (status === 'completed') {
              clearInterval(interval);
              setPolling(false);
              setDownloadToken(downloadToken);
              setStep('success');
              setMessage('Payment successful 🎉');
              setLoading(false);
            }

            if (status === 'failed') {
              clearInterval(interval);
              setPolling(false);
              setErrorMsg('Payment failed');
              setStep('error');
              setLoading(false);
            }
          } catch (err) {
            console.log('Status error:', err.message);
          }
        }, 4000);

        return;

      } catch (err) {
        lastError = err;

        const status = err.response?.status;

        if (status === 401 || status === 400) {
          setErrorMsg(err.response?.data?.message || 'Payment failed');
          setLoading(false);
          return;
        }

        setMessage(`Retrying... (${attempt}/3)`);
        await sleep(attempt * 2000);
      }
    }

    setErrorMsg(
      lastError?.response?.data?.message ||
      'Payment failed after multiple attempts'
    );

    setLoading(false);
    setMessage('');
  };

  const handleDownload = () => {
    window.open(`${API_URL}/download/${downloadToken}`, '_blank');
  };

  const reset = () => {
    setStep('form');
    setErrorMsg('');
    setPhone(user?.phone || '');
    setMessage('');
  };

  // ================= UI (UNCHANGED) =================
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
        padding: '1rem'
      }}
    >
      <div style={{
        background: '#0d1a1a',
        border: '1px solid rgba(16,185,129,.4)',
        borderRadius: 20,
        padding: '2.5rem',
        maxWidth: 440,
        width: '100%',
        position: 'relative'
      }}>

        <button onClick={onClose} style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(42,58,58,.5)',
          border: '1px solid #2a3a3a',
          borderRadius: '50%',
          width: 30,
          height: 30,
          color: '#9ca3af',
          cursor: 'pointer'
        }}>✕</button>

        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <h2 style={{ color: '#fff', fontWeight: 700 }}>
            Pay with M-Pesa
          </h2>
          <p style={{ color: '#9ca3af' }}>{product.name}</p>
        </div>

        <div style={{
          background: 'rgba(16,185,129,.06)',
          border: '1px solid rgba(16,185,129,.15)',
          borderRadius: 12,
          padding: '1rem',
          textAlign: 'center',
          marginBottom: 20
        }}>
          <div style={{ color: '#9ca3af', fontSize: 12 }}>Amount</div>
          <div style={{ color: '#fff', fontSize: 28, fontWeight: 800 }}>
            Ksh {product.price.toLocaleString()}
          </div>
        </div>

        <label style={{ color: '#9ca3af', fontSize: 12 }}>
          M-PESA PHONE NUMBER
        </label>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#1a2e2c',
          border: '1px solid #2a4a48',
          borderRadius: 10,
          padding: '0.75rem',
          marginTop: 5
        }}>
          <span style={{ color: '#10b981', marginRight: 10 }}>🇰🇪 +254</span>

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0793582095"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff'
            }}
          />
        </div>

        {errorMsg && <p style={{ color: 'red', fontSize: 12 }}>{errorMsg}</p>}
        {message && <p style={{ color: '#10b981', fontSize: 12 }}>{message}</p>}

        <button
          onClick={handlePay}
          disabled={loading}
          style={{
            width: '100%',
            marginTop: 15,
            padding: '0.9rem',
            borderRadius: 12,
            background: loading
              ? '#065f46'
              : 'linear-gradient(to right,#10b981,#06b6d4)',
            color: '#fff',
            fontWeight: 700,
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Processing...' : 'Send Payment Request'}
        </button>

        <p style={{
          textAlign: 'center',
          fontSize: 11,
          color: '#6b7280',
          marginTop: 10
        }}>
          Secured by Safaricom M-Pesa STK Push
        </p>
      </div>
    </div>
  );
}