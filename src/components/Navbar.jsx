import { useState } from 'react';

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
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .nav-link-btn {
          padding: 8px 14px; border-radius: 8px; font-size: .82rem;
          color: #9ca3af; background: rgba(26,36,36,0.7);
          border: 1px solid rgba(42,58,58,0.5); cursor: pointer;
          font-family: inherit; transition: all .2s; white-space: nowrap;
        }
        .nav-link-btn:hover { color: #10b981; border-color: rgba(16,185,129,0.4); background: rgba(16,185,129,0.07); }
      `}</style>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.85rem 1.5rem',
        background: 'rgba(10,15,15,0.92)', backdropFilter: 'blur(20px)',
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

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="desktop-nav">
          {navLinks.map(link => (
            <button key={link.label} onClick={() => scrollTo(link.href)} className="nav-link-btn">{link.label}</button>
          ))}
        </div>

        {/* Desktop auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
          <button style={{ padding: '8px 18px', borderRadius: 8, fontSize: '.82rem', fontWeight: 500, color: '#10b981', border: '1px solid rgba(16,185,129,0.25)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >Sign In</button>
          <button style={{ padding: '8px 18px', borderRadius: 8, fontSize: '.82rem', fontWeight: 600, color: '#fff', background: '#10b981', border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#059669'}
            onMouseLeave={e => e.currentTarget.style.background = '#10b981'}
          >Sign Up</button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(v => !v)} className="mobile-menu-btn" style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
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
          <div style={{ display: 'flex', gap: '.75rem' }}>
            <button style={{ flex: 1, padding: '.85rem', borderRadius: 8, fontSize: '.9rem', fontWeight: 500, color: '#10b981', border: '1px solid rgba(16,185,129,0.25)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}>Sign In</button>
            <button style={{ flex: 1, padding: '.85rem', borderRadius: 8, fontSize: '.9rem', fontWeight: 600, color: '#fff', background: '#10b981', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Sign Up</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
