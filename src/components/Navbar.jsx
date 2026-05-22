import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'How It Works', href: '#how' },
  { label: 'About', href: '#welcome' },
  { label: 'FAQ', href: '#faq' },
];

export function CandleLogo({ size = 34 }) {
  return (
    <svg width={size} height={Math.round(size * 0.88)} viewBox="0 0 34 30" fill="none">
      <line x1="21" y1="0" x2="21" y2="3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="17" y="3" width="8" height="15" rx="1.5" fill="#10b981" />
      <rect x="18.5" y="5" width="2.5" height="5" rx="0.8" fill="rgba(255,255,255,0.22)" />
      <line x1="21" y1="18" x2="21" y2="21" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="0,26 5,20 10,25 16,20 21,20" stroke="#34d399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null); // 'login' | 'register'

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.85rem 1.5rem',
        background: 'rgba(10,15,15,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(30,46,46,0.5)',
      }}>
        {/* Logo */}
        <div onClick={() => scrollTo('#hero')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#111c1c', border: '1px solid #2a3a3a', borderRadius: 8, padding: '8px 16px', cursor: 'pointer', transition: 'border-color .2s', flexShrink: 0 }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#2a3a3a'}
        >
          <CandleLogo size={28} />
          <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: 2, background: 'linear-gradient(135deg,#10b981,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>neqasel</span>
        </div>

        {/* Desktop nav links */}
        <div className="desktop-nav" style={{ alignItems: 'center', gap: 6 }}>
          {navLinks.map(link => (
            <button key={link.label} onClick={() => scrollTo(link.href)} style={{ padding: '8px 14px', borderRadius: 8, fontSize: '.82rem', color: '#9ca3af', background: 'rgba(26,36,36,0.7)', border: '1px solid rgba(42,58,58,0.5)', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#10b981'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.background = 'rgba(16,185,129,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(42,58,58,0.5)'; e.currentTarget.style.background = 'rgba(26,36,36,0.7)'; }}
            >{link.label}</button>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="desktop-nav" style={{ alignItems: 'center', gap: 10 }}>
          {user ? (
            <>
              <span style={{ color: '#10b981', fontSize: '.84rem', fontWeight: 500 }}>👋 {user.name.split(' ')[0]}</span>
              <button onClick={logout} style={{ padding: '8px 18px', borderRadius: 8, fontSize: '.82rem', fontWeight: 500, color: '#f87171', border: '1px solid rgba(248,113,113,0.25)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(248,113,113,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >Sign Out</button>
            </>
          ) : (
            <>
              <button onClick={() => setAuthModal('login')} style={{ padding: '8px 18px', borderRadius: 8, fontSize: '.82rem', fontWeight: 500, color: '#10b981', border: '1px solid rgba(16,185,129,0.25)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >Sign In</button>
              <button onClick={() => setAuthModal('register')} style={{ padding: '8px 18px', borderRadius: 8, fontSize: '.82rem', fontWeight: 600, color: '#fff', background: '#10b981', border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#059669'}
                onMouseLeave={e => e.currentTarget.style.background = '#10b981'}
              >Sign Up</button>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(v => !v)} className="mobile-menu-btn" style={{ flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
          <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? '#10b981' : '#9ca3af', borderRadius: 2, transition: 'all .2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? 'transparent' : '#9ca3af', borderRadius: 2, transition: 'all .2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? '#10b981' : '#9ca3af', borderRadius: 2, transition: 'all .2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 62, left: 0, right: 0, bottom: 0, background: 'rgba(8,12,12,0.98)', backdropFilter: 'blur(20px)', zIndex: 190, overflowY: 'auto', padding: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.5rem' }}>
            {navLinks.map(link => (
              <button key={link.label} onClick={() => scrollTo(link.href)} style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: 10, fontSize: '.95rem', fontWeight: 500, color: '#9ca3af', background: 'rgba(26,36,36,0.7)', border: '1px solid rgba(42,58,58,0.5)', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#10b981'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(42,58,58,0.5)'; }}
              >{link.label}</button>
            ))}
          </div>
          {user ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <span style={{ color: '#10b981', fontSize: '.9rem', textAlign: 'center' }}>👋 {user.name}</span>
              <button onClick={() => { logout(); setMenuOpen(false); }} style={{ padding: '.85rem', borderRadius: 8, fontSize: '.9rem', fontWeight: 500, color: '#f87171', border: '1px solid rgba(248,113,113,0.25)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}>Sign Out</button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '.75rem' }}>
              <button onClick={() => { setAuthModal('login'); setMenuOpen(false); }} style={{ flex: 1, padding: '.85rem', borderRadius: 8, fontSize: '.9rem', fontWeight: 500, color: '#10b981', border: '1px solid rgba(16,185,129,0.25)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}>Sign In</button>
              <button onClick={() => { setAuthModal('register'); setMenuOpen(false); }} style={{ flex: 1, padding: '.85rem', borderRadius: 8, fontSize: '.9rem', fontWeight: 600, color: '#fff', background: '#10b981', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Sign Up</button>
            </div>
          )}
        </div>
      )}

      {/* Auth Modal */}
      {authModal && (
        <AuthModal
          mode={authModal}
          onClose={() => setAuthModal(null)}
          onSwitch={() => setAuthModal(authModal === 'login' ? 'register' : 'login')}
        />
      )}
    </>
  );
}