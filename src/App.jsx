import { useState } from 'react';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Products from './components/Products';
import { HowItWorks, ChoosePath, Welcome, Features } from './components/Sections';
import { Newsletter, FAQ, Footer, WAFloat } from './components/FooterFAQ';
import AuthModal from './components/AuthModal';

export default function App() {
  const [authModal, setAuthModal] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
        background: '#0a0f0f',
        color: '#d1fae5',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Ticker />
      <Hero />

      {/* UPDATED */}
      <Products onOpenAuth={(mode) => setAuthModal(mode)} />

      <HowItWorks />
      <ChoosePath />
      <Welcome />
      <Features />
      <Newsletter />
      <FAQ />
      <Footer />
      <WAFloat />

      {/* AUTH MODAL */}
      {authModal && (
        <AuthModal
          mode={authModal}
          onClose={() => setAuthModal(null)}
          onSwitch={() =>
            setAuthModal(authModal === 'login' ? 'register' : 'login')
          }
        />
      )}
    </div>
  );
}