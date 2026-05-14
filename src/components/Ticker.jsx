const ticks = [
  { p: 'EUR/USD', v: '1.08412', c: '+0.11%', u: true },
  { p: 'GBP/USD', v: '1.26834', c: '+0.08%', u: true },
  { p: 'USD/JPY', v: '149.231', c: '-0.14%', u: false },
  { p: 'XAU/USD', v: '2,312.80', c: '+0.32%', u: true },
  { p: 'GBP/JPY', v: '192.345', c: '+0.21%', u: true },
  { p: 'BTC/USD', v: '62,841', c: '-0.54%', u: false },
  { p: 'NAS100', v: '17,842', c: '+0.19%', u: true },
  { p: 'AUD/USD', v: '0.64502', c: '+0.06%', u: true },
];

const doubled = [...ticks, ...ticks];

export default function Ticker() {
  return (
    <div style={{ borderTop:'1px solid rgba(42,58,58,.6)',borderBottom:'1px solid rgba(42,58,58,.6)',background:'rgba(13,20,20,.55)',padding:'.45rem 0',overflow:'hidden' }}>
      <style>{`@keyframes ticker-scroll{to{transform:translateX(-50%)}}.ticker-track{display:flex;gap:1.75rem;animation:ticker-scroll 28s linear infinite;width:max-content}`}</style>
      <div className="ticker-track">
        {doubled.map((t, i) => (
          <div key={i} style={{ display:'flex',alignItems:'center',gap:'.45rem',whiteSpace:'nowrap',fontSize:'.73rem' }}>
            <span style={{ color:'#6b7280',fontSize:'.68rem',fontWeight:500 }}>{t.p}</span>
            <span style={{ color:'#fff',fontWeight:600 }}>{t.v}</span>
            <span style={{ color:t.u?'#10b981':'#f87171' }}>{t.u?'▲':'▼'} {t.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
