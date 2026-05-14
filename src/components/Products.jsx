import { useState } from 'react';

const aiFeatures = ['Binary Bot Blocks','Lightning Fast Execution','Automated Binary Options','Smart Block Strategy','High-Frequency Ready','Visual Block Editor'];
const masterFeatures = ['Dual confirmation trading (Signals + EA)','AI-assisted entries & exits','High-precision indicator system','Built-in risk control approach','Beginner-friendly + step-by-step guidance','Full class: installation, setup & how to trade','Backed by institutional-grade strategies'];
const cmpRows = [
  ['EA Robot with AI Settings','✓ Included','✓ Included',true,true],
  ['Entry Point Visual Signals','✓ Yes','✓ Yes',true,true],
  ['Premium Indicators','✗ No','✓ Included',false,true],
  ['Premium Templates','✗ No','✓ Included',false,true],
  ['Dual Confirmation','✗ No','✓ Yes',false,true],
  ['AI-Assisted Entries','Basic','✓ Advanced',false,true],
  ['Installation Class','✗ No','✓ Full video',false,true],
  ['Risk Control','✓ Basic','✓ Advanced',true,true],
  ['Beginner Friendly','Intermediate','✓ Step-by-step',false,true],
  ['Price','Standard','14,499 Ksh (41% OFF)',null,true],
];

export default function Products() {
  const [modal, setModal] = useState(false);

  return (
    <section id="products" style={{ padding: 'clamp(3rem,6vw,4.5rem) 1.25rem', background: 'linear-gradient(to bottom,#0a0f0f,#081212)' }}>
      <style>{`
        @keyframes shine{to{background-position:200% center}}
        .shine-word{display:inline-block;background:linear-gradient(90deg,#34d399 0%,#22d3ee 40%,#fff 55%,#22d3ee 70%,#34d399 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shine 2.8s linear infinite}
        .prod-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }
        @media (max-width: 680px) { .prod-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 700, marginBottom: '.75rem', letterSpacing: '-.03em', color: '#fff' }}>
            Trading <span className="shine-word">Products</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '.88rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>Choose the perfect trading solution that matches your experience level and goals.</p>
        </div>

        <div className="prod-grid">
          {/* AI Majiq X */}
          <div style={{ background: '#0f1a1a', border: '1px solid #2a3a3a', borderRadius: 18, padding: '1.75rem', display: 'flex', flexDirection: 'column', transition: 'all .25s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(16,185,129,0.28)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='#2a3a3a'; e.currentTarget.style.transform='none'; }}
          >
            <div style={{ width:56,height:56,borderRadius:14,background:'linear-gradient(135deg,#3b82f6,#1d4ed8)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 style={{ fontSize:'1.2rem',fontWeight:700,color:'#fff',marginBottom:'.5rem',textAlign:'center' }}>AI Majiq X</h3>
            <p style={{ color:'#9ca3af',fontSize:'.82rem',lineHeight:1.65,marginBottom:'1rem',textAlign:'center' }}>High-speed binary bot using trading blocks. Execute ultra-fast trades automatically.</p>
            <div style={{ display:'flex',justifyContent:'center',marginBottom:'.4rem' }}>
              <span style={{ color:'#10b981',fontSize:'1.1rem',fontWeight:700,border:'1px solid rgba(16,185,129,.28)',borderRadius:'2rem',padding:'.35rem 1.6rem',background:'rgba(16,185,129,.08)' }}>Free</span>
            </div>
            <p style={{ color:'#6b7280',fontSize:'.75rem',textAlign:'center',marginBottom:'1.25rem' }}>No payment required</p>
            <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:'.65rem',marginBottom:'1.5rem',flex:1 }}>
              {aiFeatures.map(f=><li key={f} style={{ display:'flex',alignItems:'center',gap:'.6rem',color:'#9ca3af',fontSize:'.8rem' }}><span style={{ color:'#10b981',flexShrink:0 }}>✓</span>{f}</li>)}
            </ul>
            <button style={{ display:'block',width:'100%',padding:'.8rem',borderRadius:12,fontWeight:700,fontSize:'.83rem',border:'none',cursor:'pointer',background:'linear-gradient(to right,#3b82f6,#1d4ed8)',color:'#fff',fontFamily:'inherit',transition:'opacity .2s' }}
              onMouseEnter={e=>e.currentTarget.style.opacity='.88'} onMouseLeave={e=>e.currentTarget.style.opacity='1'}
            >Access Now</button>
          </div>

          {/* MasterSet Majiq */}
          <div style={{ background:'#0f1a1a',border:'1px solid rgba(16,185,129,0.5)',borderRadius:18,padding:'1.75rem',position:'relative',display:'flex',flexDirection:'column',transition:'all .25s' }}>
            <span style={{ position:'absolute',top:'-1rem',right:'1.25rem',background:'#10b981',color:'#fff',fontSize:'.68rem',fontWeight:700,padding:'.28rem 1rem',borderRadius:'2rem' }}>Most Popular</span>
            <div style={{ width:56,height:56,borderRadius:14,background:'linear-gradient(135deg,#ec4899,#9333ea)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3 style={{ fontSize:'1.2rem',fontWeight:700,color:'#fff',marginBottom:'.5rem',textAlign:'center' }}>MasterSet Majiq</h3>
            <p style={{ color:'#9ca3af',fontSize:'.82rem',lineHeight:1.65,marginBottom:'1rem',textAlign:'center' }}>Complete trading solution: Neqaset EA + MasterSet Majiq.</p>
            <div style={{ display:'flex',justifyContent:'center',marginBottom:'.75rem' }}>
              <span style={{ background:'rgba(127,29,29,.45)',border:'1px solid rgba(185,28,28,.35)',color:'#fca5a5',fontSize:'.72rem',fontWeight:600,padding:'.35rem 1rem',borderRadius:'2rem' }}>🔥 41% OFF – LIMITED OFFER</span>
            </div>
            <div style={{ textAlign:'center',marginBottom:'1.25rem' }}>
              <p style={{ color:'#6b7280',fontSize:'.78rem',marginBottom:'.2rem' }}>Was <s>24,499 Ksh</s></p>
              <div style={{ fontSize:'clamp(2rem,5vw,2.8rem)',fontWeight:800,color:'#fff',lineHeight:1 }}>14,499 <span style={{ fontSize:'.88rem',fontWeight:400,color:'#9ca3af' }}>Ksh</span></div>
            </div>
            <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:'.65rem',marginBottom:'1.5rem',flex:1 }}>
              {masterFeatures.map(f=><li key={f} style={{ display:'flex',alignItems:'flex-start',gap:'.6rem',color:'#9ca3af',fontSize:'.8rem',lineHeight:1.5 }}><span style={{ color:'#10b981',flexShrink:0 }}>✓</span>{f}</li>)}
            </ul>
            <button style={{ display:'block',width:'100%',padding:'.8rem',borderRadius:12,fontWeight:700,fontSize:'.83rem',border:'none',cursor:'pointer',background:'linear-gradient(to right,#34d399,#22d3ee)',color:'#fff',fontFamily:'inherit',marginBottom:'.6rem',transition:'opacity .2s' }}
              onMouseEnter={e=>e.currentTarget.style.opacity='.88'} onMouseLeave={e=>e.currentTarget.style.opacity='1'}
            >Purchase Now</button>
            <a href="#" style={{ textAlign:'center',color:'#10b981',fontSize:'.8rem',textDecoration:'underline',display:'block' }}>Learn More</a>
          </div>
        </div>

        <div style={{ marginTop:'1.75rem',background:'#0f1a1a',border:'1px solid #2a3a3a',borderRadius:16,padding:'1.5rem',textAlign:'center' }}>
          <p style={{ color:'#9ca3af',marginBottom:'.75rem',fontSize:'.85rem' }}>Neqaset is an EA robot with AI settings. Master Set includes Neqaset plus premium indicators and templates.</p>
          <button onClick={()=>setModal(true)} style={{ padding:'.5rem 1.2rem',borderRadius:'2rem',border:'1px solid rgba(16,185,129,.45)',color:'#10b981',fontSize:'.8rem',cursor:'pointer',background:'transparent',fontFamily:'inherit',fontWeight:600,transition:'all .2s' }}
            onMouseEnter={e=>e.currentTarget.style.background='rgba(16,185,129,.09)'}
            onMouseLeave={e=>e.currentTarget.style.background='transparent'}
          >View detailed comparison →</button>
        </div>
      </div>

      {modal && (
        <div onClick={e=>{if(e.target===e.currentTarget)setModal(false)}} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,.78)',zIndex:500,display:'flex',alignItems:'center',justifyContent:'center',padding:'1rem' }}>
          <div style={{ background:'#0d1a1a',border:'1px solid rgba(16,185,129,.45)',borderRadius:20,padding:'1.75rem',maxWidth:680,width:'100%',maxHeight:'90vh',overflowY:'auto',position:'relative' }}>
            <button onClick={()=>setModal(false)} style={{ position:'absolute',top:'.85rem',right:'.85rem',background:'rgba(42,58,58,.5)',border:'1px solid #2a3a3a',borderRadius:'50%',width:28,height:28,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'#9ca3af',fontSize:'.9rem',fontFamily:'inherit' }}>✕</button>
            <h2 style={{ fontSize:'clamp(1.1rem,4vw,1.4rem)',fontWeight:700,color:'#fff',marginBottom:'1.25rem',textAlign:'center' }}>Neqaset EA vs MasterSet Majiq</h2>
            <div style={{ overflowX:'auto' }}>
              <table style={{ width:'100%',borderCollapse:'collapse',fontSize:'.8rem',minWidth:400 }}>
                <thead><tr>{['Feature','Neqaset EA','MasterSet Majiq'].map(h=><th key={h} style={{ padding:'.6rem .85rem',fontSize:'.7rem',fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',background:'rgba(16,185,129,.08)',color:'#10b981',textAlign:'left',whiteSpace:'nowrap' }}>{h}</th>)}</tr></thead>
                <tbody>
                  {cmpRows.map(([feat,a,b,ag,bg],i)=>(
                    <tr key={i}>
                      <td style={{ padding:'.6rem .85rem',borderBottom:'1px solid rgba(42,58,58,.4)',color:'#fff',fontWeight:500 }}>{feat}</td>
                      <td style={{ padding:'.6rem .85rem',borderBottom:'1px solid rgba(42,58,58,.4)',color:ag===true?'#10b981':'#6b7280',fontWeight:ag===true?600:400 }}>{a}</td>
                      <td style={{ padding:'.6rem .85rem',borderBottom:'1px solid rgba(42,58,58,.4)',color:bg?'#10b981':'#fff',fontWeight:bg?600:400 }}>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
