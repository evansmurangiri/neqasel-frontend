import { useState, useEffect } from 'react';

const phrases = [
  'Forex Trading',
  'Crypto Trading',
  'Stocks Trading',
  'Synthetic Indices',
];

function useTypewriter() {
  const [text, setText] = useState('');
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const phrase = phrases[pi];
    let t;

    if (!del) {
      if (ci < phrase.length) {
        t = setTimeout(() => {
          setText(phrase.slice(0, ci + 1));
          setCi((c) => c + 1);
        }, 90);
      } else {
        t = setTimeout(() => setDel(true), 1600);
      }
    } else {
      if (ci > 0) {
        t = setTimeout(() => {
          setText(phrase.slice(0, ci - 1));
          setCi((c) => c - 1);
        }, 55);
      } else {
        setDel(false);
        setPi((p) => (p + 1) % phrases.length);
      }
    }

    return () => clearTimeout(t);
  }, [ci, del, pi]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '5rem 1.25rem 3rem',
        overflow: 'hidden',
        background:
          'linear-gradient(to bottom,#0a0f0f 0%,#0d1a1a 50%,#0a0f0f 100%)',
      }}
    >
      <style>{`
        @keyframes cur-blink {
          50% { opacity: 0; }
        }

        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: .65rem;
          margin-bottom: .65rem;
        }

        .hero-pill {
          padding: .65rem 1.2rem;
          border-radius: 2rem;
          font-size: .78rem;
          font-weight: 500;
          color: #fff;
          background: rgba(17,28,28,.82);
          border: 1px solid #2a3a3a;
          cursor: pointer;
          font-family: inherit;
          white-space: nowrap;
          transition: all .2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .35rem;
          text-decoration: none;
        }

        .hero-pill:hover {
          border-color: rgba(16,185,129,0.45);
          background: rgba(26,46,46,1);
        }

        .hero-pill.solid {
          background: #10b981;
          font-weight: 700;
          border-color: #10b981;
        }

        .hero-pill.solid:hover {
          background: #34d399;
        }

        @media (max-width: 480px) {
          .hero-pill {
            font-size: .74rem;
            padding: .6rem 1rem;
          }
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      >
        <img
          src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom,rgba(10,15,15,.55) 0%,rgba(13,26,26,.35) 50%,rgba(10,15,15,.75) 100%)',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 820,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.2rem,6vw,4.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '1.2rem',
            letterSpacing: '-.04em',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(to right,#34d399,#22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Automating
          </span>

          <br />

          <span
            style={{ color: '#fff', display: 'inline-block', minWidth: 10 }}
          >
            {typed}
            <span
              style={{
                color: '#10b981',
                animation: 'cur-blink 1s step-end infinite',
              }}
            >
              |
            </span>
          </span>
        </h1>

        <p
          style={{
            color: '#9ca3af',
            fontSize: 'clamp(.88rem,2.5vw,.95rem)',
            maxWidth: 560,
            margin: '0 auto 2.2rem',
            lineHeight: 1.7,
          }}
        >
          At Neqasel, we make trading simple for everyone. Our smart tools and
          automated systems work for Forex, Crypto, Stocks, and Synthetic
          Indices. Trade yourself or let us handle it.
        </p>

        {/* MAIN ACTION BUTTONS */}
        <div className="hero-btns">
          <a
            href="https://wa.me/254746155245?text=Hello%20Neqasel%2C%20how%20do%20I%20get%20started%20with%20trading%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-pill"
          >
            Start your journey
          </a>

          <button className="hero-pill">Create Account</button>
        </div>

        {/* SECONDARY BUTTON */}
        <div className="hero-btns">
          <button
            className="hero-pill solid"
            onClick={() => scrollTo('#products')}
          >
            Explore Products →
          </button>
        </div>
      </div>
    </section>
  );
}
