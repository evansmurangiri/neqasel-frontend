import { useState } from 'react';

const aiFeatures = [
  { icon: '🎨', label: 'Binary Bot Blocks' },
  { icon: '⚡', label: 'Lightning Fast Execution' },
  { icon: '🤖', label: 'Automated Binary Options' },
  { icon: '🎯', label: 'Smart Block Strategy' },
  { icon: '🚀', label: 'High-Frequency Ready' },
  { icon: '🖼️', label: 'Visual Block Editor' },
];

const masterFeatures = [
  { icon: '📊', label: 'Dual confirmation trading (Signals + EA direction)' },
  { icon: '🤖', label: 'AI-assisted entries & exits' },
  { icon: '📈', label: 'High-precision indicator system' },
  { icon: '🛡️', label: 'Built-in risk control approach' },
  { icon: '📱', label: 'Beginner-friendly + step-by-step guidance' },
  { icon: '🎓', label: 'Includes a full class on installation, setup & how to trade using the system' },
  { icon: '🎯', label: 'Backed by institutional-grade strategies' },
];

const compareRows = [
  { feature: 'Neqaset Robot (EA)', neqaset: true, master: true },
  { feature: 'AI Grid Settings', neqaset: true, master: true },
  { feature: 'Automated Trading', neqaset: true, master: true },
  { feature: 'Neqasel Premium Indicator', neqaset: false, master: true },
  { feature: 'Entry Sports Templates', neqaset: false, master: true },
  { feature: 'Master Strategy Setup', neqaset: false, master: true },
  { feature: 'Priority Support', neqaset: false, master: true },
];

export default function Products() {
  const [modal, setModal] = useState(false);

  return (
    <section
      id="products"
      style={{
        padding: 'clamp(3rem,6vw,4.5rem) 1.25rem',
        background: 'linear-gradient(to bottom,#0a0f0f,#081212)',
      }}
    >
      <style>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        .shine-word {
          display: inline-block;
          background: linear-gradient(
            90deg,
            #34d399 0%,
            #22d3ee 40%,
            #fff 55%,
            #22d3ee 70%,
            #34d399 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine 2.8s linear infinite;
        }

        .prod-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }

        @media (max-width: 680px) {
          .prod-grid {
            grid-template-columns: 1fr;
          }
        }

        .prod-card-ai {
          background: #111c1c;
          border: 1px solid #1e2e2e;
          border-radius: 16px;
          padding: clamp(1.5rem,4vw,2rem);
          display: flex;
          flex-direction: column;
          transition: all 0.25s;
        }

        .prod-card-ai:hover {
          border-color: rgba(16,185,129,0.3);
          transform: translateY(-2px);
        }

        .prod-card-master {
          position: relative;
          background: #0d1a1a;
          border: 2px solid rgba(16,185,129,0.5);
          border-radius: 16px;
          padding: clamp(1.5rem,4vw,2rem);
          display: flex;
          flex-direction: column;
        }

        .feat-li,
        .feat-li-top {
          display: flex;
          gap: 0.75rem;
          color: #d1d5db;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .feat-li {
          align-items: center;
        }

        .feat-li-top {
          align-items: flex-start;
        }

        .feat-icon {
          color: #10b981;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .btn-access,
        .btn-purchase {
          display: block;
          width: 100%;
          padding: 0.875rem;
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          font-size: 0.92rem;
          text-align: center;
          border: none;
          cursor: pointer;
          font-family: inherit;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .btn-access {
          background: linear-gradient(to right,#3b82f6,#1d4ed8);
        }

        .btn-purchase {
          background: linear-gradient(to right,#34d399,#22d3ee);
          margin-bottom: 0.75rem;
        }

        .btn-access:hover,
        .btn-purchase:hover {
          opacity: 0.88;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          z-index: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-box {
          background: #0d1a1a;
          border: 1px solid rgba(16,185,129,0.4);
          border-radius: 20px;
          padding: clamp(1.5rem,5vw,2.5rem);
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .cmp-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }

        .cmp-table th {
          padding: 0.75rem 1rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          background: rgba(16,185,129,0.08);
          color: #10b981;
          text-align: left;
        }

        .cmp-table th:not(:first-child) {
          text-align: center;
        }

        .cmp-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(42,58,58,0.4);
          color: #9ca3af;
          font-size: 0.88rem;
        }

        .cmp-table td:not(:first-child) {
          text-align: center;
        }

        .check-yes {
          color: #10b981;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .check-no {
          color: #6b7280;
          font-size: 1.1rem;
        }
      `}</style>

      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(2rem,5vw,4rem)',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.8rem,4vw,3rem)',
              fontWeight: 700,
              marginBottom: '.75rem',
              color: '#fff',
            }}
          >
            Trading <span className="shine-word">Products</span>
          </h2>

          <p
            style={{
              color: '#9ca3af',
              fontSize: 'clamp(.88rem,2.5vw,1.05rem)',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Choose the perfect trading solution that matches your experience level and trading goals.
          </p>
        </div>

        <div className="prod-grid">
          <div className="prod-card-ai">
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              ⚡
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.2rem,3vw,1.5rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '.75rem',
              }}
            >
              Masterset Comrades
            </h3>

            <p
              style={{
                color: '#9ca3af',
                fontSize: '.9rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}
            >
              High-speed binary bot using trading blocks. Execute ultra-fast trades automatically.
            </p>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p
                style={{
                  fontSize: 'clamp(2rem,5vw,2.8rem)',
                  fontWeight: 800,
                  color: '#fff',
                }}
              >
                5,000 <span style={{ fontSize: '1.1rem' }}>Ksh</span>
              </p>
            </div>

            <ul style={{ flex: 1, paddingLeft: 0 }}>
              {aiFeatures.map((f, i) => (
                <li key={i} className="feat-li">
                  <span className="feat-icon">{f.icon}</span>
                  {f.label}
                </li>
              ))}
            </ul>

            <button className="btn-access">Access Now</button>
          </div>

          <div className="prod-card-master">
            <h3
              style={{
                fontSize: 'clamp(1.2rem,3vw,1.5rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '.75rem',
              }}
            >
              MasterSet Majiq
            </h3>

            <p
              style={{
                color: '#9ca3af',
                fontSize: '.9rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}
            >
              Complete trading solution: Neqaset EA + MasterSet Majiq.
            </p>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ color: '#6b7280', fontSize: '.82rem' }}>
                Was <s>24,499 Ksh</s>
              </p>

              <p
                style={{
                  fontSize: 'clamp(2.5rem,6vw,3.2rem)',
                  fontWeight: 800,
                  color: '#fff',
                }}
              >
                14,499 <span style={{ fontSize: '1.2rem' }}>Ksh</span>
              </p>
            </div>

            <ul style={{ flex: 1, paddingLeft: 0 }}>
              {masterFeatures.map((f, i) => (
                <li key={i} className="feat-li-top">
                  <span className="feat-icon">{f.icon}</span>
                  {f.label}
                </li>
              ))}
            </ul>

            <button className="btn-purchase">Purchase Now</button>

            <button
              onClick={() => setModal(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#10b981',
                cursor: 'pointer',
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModal(false);
          }}
        >
          <div className="modal-box">
            <button
              onClick={() => setModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#111',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                cursor: 'pointer',
              }}
            >
              ✕
            </button>

            <h2
              style={{
                color: '#fff',
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              Compare Versions
            </h2>

            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Neqaset</th>
                  <th>Master Set</th>
                </tr>
              </thead>

              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td>
                      {row.neqaset ? (
                        <span className="check-yes">✓</span>
                      ) : (
                        <span className="check-no">—</span>
                      )}
                    </td>

                    <td>
                      {row.master ? (
                        <span className="check-yes">✓</span>
                      ) : (
                        <span className="check-no">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}