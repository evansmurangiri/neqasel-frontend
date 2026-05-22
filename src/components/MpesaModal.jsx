import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const PRODUCTS = {
  comrades: { name: 'Comrades Masterset', price: 5000 },
  majiq: { name: 'MasterSet Majiq', price: 14499 },
};

function formatPhone(raw) {
  const digits = raw.replace(/\D/g, '');

  if (digits.startsWith('0') && digits.length === 10) {
    return '254' + digits.slice(1);
  }

  if (digits.startsWith('7') && digits.length === 9) {
    return '254' + digits;
  }

  if (digits.startsWith('254') && digits.length === 12) {
    return digits;
  }

  return digits;
}

export default function MpesaModal({ productKey, onClose, onOpenAuth }) {
  const { user } = useAuth();
  const product = PRODUCTS[productKey];

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:10000";

  const [phone, setPhone] = useState(user?.phone || '');
  const [step, setStep] = useState('form');
  const [errorMsg, setErrorMsg] = useState('');
  const [checkoutRequestId, setCheckoutRequestId] = useState(null);
  const [downloadToken, setDownloadToken] = useState(null);
  const [polling, setPolling] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  let intervalRef = null;

  // ================= NOT LOGGED IN =================
  if (!user) {
    return (
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
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
            border: '1px solid rgba(16,185,129,.4)',
            borderRadius: 20,
            padding: '2.5rem',
            maxWidth: 400,
            width: '100%',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(42,58,58,.5)',
              border: '1px solid #2a3a3a',
              borderRadius: '50%',
              width: 30,
              height: 30,
              color: '#9ca3af',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>

          <h3 style={{ color: '#fff' }}>Sign in to Purchase</h3>

          <p style={{ color: '#9ca3af' }}>
            You need an account to buy <b>{product?.name}</b>
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenAuth('register');
            }}
            style={{
              width: '100%',
              padding: '.9rem',
              borderRadius: 12,
              background: 'linear-gradient(to right,#10b981,#06b6d4)',
              color: '#fff',
              fontWeight: 700,
              border: 'none',
              marginTop: 20,
              cursor: 'pointer',
            }}
          >
            Create Account
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenAuth('login');
            }}
            style={{
              width: '100%',
              padding: '.85rem',
              marginTop: 10,
              borderRadius: 12,
              background: 'transparent',
              border: '1px solid rgba(16,185,129,.3)',
              color: '#10b981',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ================= PAYMENT =================
  const handlePay = async () => {
    if (loading) return;

    const formatted = formatPhone(phone);

    console.log("📱 Formatted phone:", formatted);

    if (formatted.length !== 12) {
      setErrorMsg('Enter valid M-Pesa number (e.g. 0712345678)');
      return;
    }

    setLoading(true);
    setStep('waiting');
    setMessage('Sending STK push...');
    setErrorMsg('');

    try {
      console.log("📤 STK REQUEST:", {
        url: `${API_URL}/api/mpesa/pay`,
        phone: formatted,
        productKey,
      });

      const res = await axios.post(`${API_URL}/api/mpesa/pay`, {
        phone: formatted,
        productKey,
      });

      console.log("📲 STK RESPONSE:", res.data);

      setCheckoutRequestId(res.data.checkoutRequestId);

      setMessage('📱 STK sent! Check your phone');

      setPolling(true);

      intervalRef = setInterval(async () => {
        try {
          const statusRes = await axios.get(
            `${API_URL}/api/mpesa/status/${res.data.checkoutRequestId}`
          );

          const { status, downloadToken } = statusRes.data;

          console.log("🔄 STATUS CHECK:", statusRes.data);

          if (status === 'completed') {
            clearInterval(intervalRef);
            setPolling(false);
            setDownloadToken(downloadToken);
            setStep('success');
            setMessage('Payment successful 🎉');
            setLoading(false);
          }

          if (status === 'failed') {
            clearInterval(intervalRef);
            setPolling(false);
            setStep('error');
            setErrorMsg('Payment failed');
            setLoading(false);
          }
        } catch (err) {
          console.log("❌ STATUS ERROR:", err.message);
        }
      }, 4000);

      setTimeout(() => {
        if (intervalRef) clearInterval(intervalRef);
        setLoading(false);
      }, 120000);

    } catch (err) {
      console.log("❌ MPESA ERROR FULL:", err.response?.data || err.message);

      setStep('error');
      setErrorMsg(err.response?.data?.message || 'Payment failed');
      setLoading(false);
      setMessage('');
    }
  };

  const handleDownload = () => {
    window.open(`${API_URL}/api/download/${downloadToken}`, '_blank');
  };

  const reset = () => {
    setStep('form');
    setErrorMsg('');
    setMessage('');
    setPhone(user?.phone || '');
  };

  // ================= UI =================
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
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
          border: '1px solid rgba(16,185,129,.4)',
          borderRadius: 20,
          padding: '2.5rem',
          maxWidth: 440,
          width: '100%',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(42,58,58,.5)',
            border: '1px solid #2a3a3a',
            borderRadius: '50%',
            width: 30,
            height: 30,
            color: '#9ca3af',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        <h2 style={{ color: '#fff' }}>Pay with M-Pesa</h2>

        <p style={{ color: '#9ca3af' }}>{product?.name}</p>

        <div
          style={{
            background: 'rgba(16,185,129,.08)',
            padding: 15,
            borderRadius: 10,
            textAlign: 'center',
            marginTop: 15,
          }}
        >
          <div style={{ color: '#9ca3af' }}>Amount</div>
          <div style={{ color: '#fff', fontSize: 28 }}>
            Ksh {product?.price}
          </div>
        </div>

        <label style={{ color: '#9ca3af', fontSize: 12 }}>
          M-PESA PHONE
        </label>

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="0793582095"
          style={{
            width: '100%',
            padding: 10,
            marginTop: 5,
            borderRadius: 8,
            border: '1px solid #2a4a48',
            background: '#1a2e2c',
            color: '#fff',
          }}
        />

        {errorMsg && (
          <p style={{ color: 'red', fontSize: 12 }}>{errorMsg}</p>
        )}

        {message && (
          <p style={{ color: '#10b981', fontSize: 12 }}>{message}</p>
        )}

        <button
          onClick={handlePay}
          disabled={loading}
          style={{
            width: '100%',
            marginTop: 15,
            padding: 12,
            borderRadius: 10,
            background: loading
              ? '#065f46'
              : 'linear-gradient(to right,#10b981,#06b6d4)',
            color: '#fff',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
}