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
          to { background-position: 200% center; }
        }

        .shine-word {
          display: inline-block;
          background: linear-gradient(90deg,#34d399 0%,#22d3ee 40%,#fff 55%,#22d3ee 70%,#34d399 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2.8s linear infinite;
        }

        .prod-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 700px) {
          .prod-grid { grid-template-columns: 1fr; }
        }

        .prod-card-ai, .prod-card-master {
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .prod-card-ai {
          background: #111c1c;
          border: 1px solid #1e2e2e;
        }

        .prod-card-master {
          background: #0d1a1a;
          border: 2px solid rgba(16,185,129,0.5);
          position: relative;
        }

        .product-logo {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .ai-logo {
          background: linear-gradient(135deg,#3b82f6,#1d4ed8);
        }

        .master-logo {
          background: linear-gradient(135deg,#ec4899,#9333ea);
        }

        .feat-li {
          display: flex;
          gap: .7rem;
          margin-bottom: 1rem;
          color: #d1d5db;
          font-size: .9rem;
        }

        .feat-icon { color: #10b981; }

        .btn-access {
          background: linear-gradient(to right,#3b82f6,#1d4ed8);
          color: white;
          padding: .8rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
        }

        .btn-purchase {
          background: linear-gradient(to right,#34d399,#22d3ee);
          color: white;
          padding: .8rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          margin-bottom: .8rem;
        }

        .compare-card {
          margin-top: 2rem;
          padding: 1.5rem;
          border-radius: 16px;
          background: #111c1c;
          border: 1px solid #1e2e2e;
          text-align: center;
        }

        .compare-btn {
          margin-top: 1rem;
          padding: .8rem 1.4rem;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          color: white;
          background: linear-gradient(90deg,#10b981,#22d3ee);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.8);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-box {
          background: #0d1a1a;
          padding: 2rem;
          border-radius: 20px;
          width: 90%;
          max-width: 600px;
        }

        .cmp-table {
          width: 100%;
          margin-top: 1rem;
          border-collapse: collapse;
        }

        .cmp-table th {
          color: #10b981;
          text-align: left;
          padding: .6rem;
        }

        .cmp-table td {
          padding: .6rem;
          border-bottom: 1px solid #2a3a3a;
          color: #9ca3af;
          text-align: center;
        }

        .check-yes { color: #10b981; }
        .check-no { color: #6b7280; }
      `}</style>

      <div className="prod-grid">
        {/* Product 1 */}
        <div className="prod-card-ai">

          {/* RESTORED LOGO */}
          <div className="product-logo ai-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>

          <h3 style={{ color: 'white' }}>Comrades Masterset</h3>
          <p style={{ color: '#9ca3af' }}>High-speed EA trading system.</p>

          <h2 style={{ color: 'white' }}>5,000 Ksh</h2>

          <ul>
            {aiFeatures.map((f, i) => (
              <li key={i} className="feat-li">
                <span className="feat-icon">{f.icon}</span>
                {f.label}
              </li>
            ))}
          </ul>

          <button className="btn-access">Access Now</button>
        </div>

        {/* Product 2 */}
        <div className="prod-card-master">

          {/* RESTORED LOGO */}
          <div className="product-logo master-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>

          <span
            style={{
              position: 'absolute',
              top: '-10px',
              right: '20px',
              background: '#10b981',
              padding: '5px 15px',
              borderRadius: '20px',
              color: 'white',
              fontSize: '12px',
            }}
          >
            Most Popular
          </span>

          <h3 style={{ color: 'white' }}>MasterSet Majiq</h3>
          <p style={{ color: '#9ca3af' }}>
            Complete trading solution: Neqaset EA + MasterSet Majiq.
          </p>

          <h2 style={{ color: 'white' }}>14,499 Ksh</h2>

          <ul>
            {masterFeatures.map((f, i) => (
              <li key={i} className="feat-li">
                <span className="feat-icon">{f.icon}</span>
                {f.label}
              </li>
            ))}
          </ul>

          <button className="btn-purchase">Purchase Now</button>
        </div>
      </div>

      {/* Compare Card */}
      <div className="compare-card">
        <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
          Neqaset is an EA robot with AI settings. Master Set includes Neqaset
          plus premium indicators and templates.
        </p>

        <button className="compare-btn" onClick={() => setModal(true)}>
          View Detailed Comparison
        </button>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModal(false);
          }}
        >
          <div className="modal-box">
            <h2 style={{ color: 'white', textAlign: 'center' }}>
              Compare Versions
            </h2>

            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Comrades</th>
                  <th>Master</th>
                </tr>
              </thead>

              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ textAlign: 'left' }}>{row.feature}</td>
                    <td>{row.neqaset ? <span className="check-yes">✓</span> : <span className="check-no">—</span>}</td>
                    <td>{row.master ? <span className="check-yes">✓</span> : <span className="check-no">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={() => setModal(false)}
              style={{
                marginTop: '1rem',
                width: '100%',
                padding: '.8rem',
                borderRadius: '12px',
                border: 'none',
                background: '#10b981',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}