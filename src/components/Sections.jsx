export function HowItWorks() {
  const steps = [
    { title:'Create Account', desc:'Use secure magic link sign-in', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> },
    { title:'Choose Service', desc:'Automated trading or Account Management', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
    { title:'Purchase or Submit', desc:'Buy products or provide MT4/MT5', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
    { title:'Verification', desc:'$500 min for managed accounts', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg> },
    { title:'Start Trading', desc:'Download or we manage for you', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> },
  ];
  return (
    <section id="how" style={{ padding:'clamp(3rem,6vw,4.5rem) 1.25rem',background:'#06100f' }}>
      <style>{`.steps-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem}@media(max-width:900px){.steps-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:560px){.steps-grid{grid-template-columns:1fr 1fr}}`}</style>
      <div style={{ maxWidth:1100,margin:'0 auto' }}>
        <div style={{ textAlign:'center',marginBottom:'2.5rem' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,4vw,2.8rem)',fontWeight:700,marginBottom:'.75rem',letterSpacing:'-.03em',background:'linear-gradient(to right,#34d399,#22d3ee)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent' }}>How It Works</h2>
          <p style={{ color:'#9ca3af',fontSize:'.88rem',maxWidth:500,margin:'0 auto',lineHeight:1.7 }}>Get started in minutes. Choose automated trading or let our team manage your account with a 50/50 profit share.</p>
        </div>
        <div className="steps-grid">
          {steps.map(s=>(
            <div key={s.title} style={{ background:'#0f1a1a',border:'1px solid #2a3a3a',borderRadius:14,padding:'1.25rem',display:'flex',flexDirection:'column',gap:'.75rem',transition:'border-color .2s' }}
              onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(16,185,129,.28)'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='#2a3a3a'}
            >
              <div style={{ width:46,height:46,borderRadius:10,background:'#0d2020',border:'1px solid rgba(16,185,129,.2)',display:'flex',alignItems:'center',justifyContent:'center',color:'#10b981',flexShrink:0 }}>{s.icon}</div>
              <div><h3 style={{ fontSize:'.85rem',fontWeight:600,color:'#fff',marginBottom:'.25rem' }}>{s.title}</h3><p style={{ fontSize:'.75rem',color:'#6b7280',lineHeight:1.5 }}>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChoosePath() {
  const scrollTo = id=>{ const el=document.querySelector(id); if(el)el.scrollIntoView({behavior:'smooth'}); };
  return (
    <section style={{ padding:'clamp(3rem,6vw,4.5rem) 1.25rem',background:'linear-gradient(to bottom,#0a0f0f,#081212)' }}>
      <style>{`.path-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}@media(max-width:600px){.path-grid{grid-template-columns:1fr}}`}</style>
      <div style={{ maxWidth:1100,margin:'0 auto' }}>
        <div style={{ textAlign:'center',marginBottom:'2.5rem' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,4vw,2.8rem)',fontWeight:700,marginBottom:'.75rem',letterSpacing:'-.03em',background:'linear-gradient(to right,#34d399,#22d3ee)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent' }}>Choose Your Path</h2>
          <p style={{ color:'#9ca3af',fontSize:'.88rem',maxWidth:480,margin:'0 auto',lineHeight:1.7 }}>Trade yourself and keep 100% profits, or let us manage your account with a 50/50 profit share.</p>
        </div>
        <div className="path-grid">
          <div style={{ background:'#0f1a1a',border:'1px solid #2a3a3a',borderRadius:18,padding:'1.75rem',transition:'border-color .2s' }}
            onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(16,185,129,.28)'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='#2a3a3a'}
          >
            <div style={{ width:48,height:48,borderRadius:12,background:'rgba(16,185,129,.1)',border:'1px solid rgba(16,185,129,.28)',display:'flex',alignItems:'center',justifyContent:'center',color:'#10b981',marginBottom:'1.1rem' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10" strokeWidth="2.5"/></svg>
            </div>
            <h3 style={{ fontSize:'1.15rem',fontWeight:700,color:'#fff',marginBottom:'.9rem' }}>Automated Trading</h3>
            <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:'.6rem',marginBottom:'1.5rem' }}>
              {['Buy Neqaset or Master Set','Install and trade yourself','Keep 100% of profits'].map(li=><li key={li} style={{ color:'#9ca3af',fontSize:'.88rem' }}>{li}</li>)}
            </ul>
            <button onClick={()=>scrollTo('#products')} style={{ display:'block',width:'100%',padding:'.78rem',borderRadius:'2rem',fontWeight:700,fontSize:'.85rem',background:'#10b981',color:'#fff',border:'none',cursor:'pointer',fontFamily:'inherit',transition:'all .2s' }}
              onMouseEnter={e=>e.currentTarget.style.background='#34d399'} onMouseLeave={e=>e.currentTarget.style.background='#10b981'}
            >Explore Products</button>
          </div>
          <div style={{ background:'#0f1a1a',border:'1px solid #2a3a3a',borderRadius:18,padding:'1.75rem',transition:'border-color .2s' }}
            onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(16,185,129,.28)'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='#2a3a3a'}
          >
            <div style={{ width:48,height:48,borderRadius:12,background:'rgba(6,182,212,.1)',border:'1px solid rgba(6,182,212,.3)',display:'flex',alignItems:'center',justifyContent:'center',color:'#22d3ee',marginBottom:'1.1rem' }}>
              <svg width="28" height="26" viewBox="0 0 30 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="15" cy="6" r="4"/><path d="M2 22c0-3 5-5.5 13-5.5S28 19 28 22"/><path d="M6 26h18l2-4H4l2 4z"/></svg>
            </div>
            <h3 style={{ fontSize:'1.15rem',fontWeight:700,color:'#fff',marginBottom:'.9rem' }}>Account Management</h3>
            <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:'.6rem',marginBottom:'1.5rem' }}>
              {['We trade your account','50/50 profit share','$500 minimum balance'].map(li=><li key={li} style={{ color:'#9ca3af',fontSize:'.88rem' }}>{li}</li>)}
            </ul>
            <button style={{ display:'block',width:'100%',padding:'.78rem',borderRadius:'2rem',fontWeight:700,fontSize:'.85rem',background:'#06b6d4',color:'#fff',border:'none',cursor:'pointer',fontFamily:'inherit',transition:'all .2s' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='#22d3ee'; e.currentTarget.style.color='#0a0f0f'; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='#06b6d4'; e.currentTarget.style.color='#fff'; }}
            >Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Welcome() {
  const stats = [
    { num:'88%',lbl:'Win Rate',em:true,rings:true },
    { num:'5K+',lbl:'Active Traders',em:false,icon:<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
    { num:'$1.5M',lbl:'Daily Volume',em:true,icon:<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><line x1="3" y1="21" x2="3" y2="3"/><line x1="21" y1="21" x2="21" y2="3"/><line x1="3" y1="21" x2="21" y2="21"/><path d="M5 16l4-6 3 4 5-7"/></svg> },
    { num:'25+',lbl:'EA Indicators',em:false,icon:<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  ];
  return (
    <section id="welcome" style={{ padding:'clamp(3rem,6vw,4.5rem) 1.25rem',background:'#06100f' }}>
      <style>{`.wlc-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem}@media(max-width:700px){.wlc-grid{grid-template-columns:1fr}}.wlc-stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}`}</style>
      <div style={{ maxWidth:1100,margin:'0 auto' }}>
        <div style={{ textAlign:'center',marginBottom:'2.5rem' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,4vw,2.8rem)',fontWeight:700,marginBottom:'.75rem',letterSpacing:'-.03em',background:'linear-gradient(to right,#34d399,#22d3ee)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent' }}>Welcome to Neqasel</h2>
          <p style={{ color:'#9ca3af',fontSize:'.88rem',maxWidth:640,margin:'0 auto',lineHeight:1.7 }}>At Neqasel, we're revolutionizing the way traders approach the forex market. With cutting-edge technology and a passion for financial success, we've created a platform that empowers both beginners and seasoned traders to excel in automated trading and forex signals.</p>
        </div>
        <div className="wlc-grid">
          <div style={{ background:'#0f1a1a',border:'1px solid rgba(16,185,129,.3)',borderRadius:20,padding:'clamp(1.5rem,4vw,3rem)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center' }}>
            <div style={{ width:112,height:112,borderRadius:22,background:'rgba(16,185,129,.2)',border:'1px solid rgba(16,185,129,.4)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1.75rem',color:'#34d399' }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-3.14z"/>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-3.14z"/>
              </svg>
            </div>
            <h3 style={{ fontSize:'clamp(1.2rem,3vw,1.6rem)',fontWeight:700,color:'#fff',marginBottom:'1rem' }}>AI-Powered Trading</h3>
            <p style={{ color:'#9ca3af',lineHeight:1.7,fontSize:'.88rem' }}>Our Neqaset EA indicator and Master Set trading bot use advanced algorithms to provide entry point signals with <span style={{ color:'#10b981',fontWeight:600 }}>88% success rate</span>, delivering consistent results across forex, crypto, and synthetics.</p>
          </div>
          <div style={{ display:'flex',flexDirection:'column',gap:'1.5rem' }}>
            <div style={{ background:'#0f1a1a',border:'1px solid #1e2e2e',borderRadius:20,padding:'1.75rem' }}>
              <h3 style={{ fontSize:'1.15rem',fontWeight:700,color:'#fff',marginBottom:'.85rem' }}>Empowering Traders Worldwide</h3>
              <p style={{ color:'#9ca3af',lineHeight:1.7,fontSize:'.84rem',marginBottom:'.75rem' }}>Neqasel represents the next generation of forex trading platforms. We specialize in creating sophisticated EA indicators like Neqaset and automated trading bots like Master Set that leverage advanced algorithms to give our users a competitive edge in global forex markets.</p>
              <p style={{ color:'#9ca3af',lineHeight:1.7,fontSize:'.84rem' }}>Our mission is to democratize access to professional-grade trading tools, making sophisticated forex trading strategies accessible to traders of all levels.</p>
            </div>
            <div className="wlc-stats-grid">
              {stats.map(s=>(
                <div key={s.lbl} style={{ background:'#0f1a1a',border:'1px solid #1e2e2e',borderRadius:14,padding:'1.25rem',textAlign:'center',transition:'border-color .2s' }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=s.em?'rgba(16,185,129,.3)':'rgba(6,182,212,.3)'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='#1e2e2e'}
                >
                  <div style={{ width:56,height:56,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto .85rem',border:'1px solid',background:s.em?'rgba(16,185,129,.2)':'rgba(6,182,212,.2)',borderColor:s.em?'rgba(16,185,129,.4)':'rgba(6,182,212,.4)' }}>
                    {s.rings?(
                      <div style={{ position:'relative',width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <div style={{ position:'absolute',width:36,height:36,borderRadius:'50%',border:'2px solid rgba(16,185,129,.6)' }}/>
                        <div style={{ position:'absolute',width:24,height:24,borderRadius:'50%',border:'2px solid #10b981' }}/>
                        <div style={{ width:10,height:10,borderRadius:'50%',background:'#10b981' }}/>
                      </div>
                    ):s.icon}
                  </div>
                  <div style={{ fontSize:'1.75rem',fontWeight:700,color:'#fff',lineHeight:1,marginBottom:'.2rem' }}>{s.num}</div>
                  <div style={{ fontSize:'.75rem',color:'#9ca3af' }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const feats = [
    { title:'Real-time Analysis', desc:'Advanced algorithms analyze market conditions 24/7, providing instant insights and trend predictions for optimal entry and exit points.', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
    { title:'Automated Trading', desc:'Let our sophisticated EA trading bots execute trades with precision and efficiency, eliminating emotional trading decisions.', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
    { title:'AI Predictions', desc:'Leverage machine learning algorithms to predict market movements with high accuracy, giving you a competitive edge.', icon:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-3.14z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-3.14z"/></svg> },
    { title:'24/7 Automation', desc:'Never miss a trading opportunity with round-the-clock automated monitoring and execution across all time zones.', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
    { title:'Risk Management', desc:'Intelligent systems protect your investments with advanced risk assessment tools and automated stop-loss mechanisms.', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
    { title:'Market Insights', desc:'Data-driven predictions and comprehensive trend analysis help you make informed trading decisions with confidence.', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
  ];
  return (
    <section id="services" style={{ padding:'clamp(3rem,6vw,4.5rem) 1.25rem',background:'linear-gradient(to bottom,#06100f,#0a0f0f)' }}>
      <style>{`.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}@media(max-width:760px){.feat-grid{grid-template-columns:1fr 1fr}}@media(max-width:480px){.feat-grid{grid-template-columns:1fr}}`}</style>
      <div style={{ maxWidth:1100,margin:'0 auto' }}>
        <div style={{ textAlign:'center',marginBottom:'2.5rem' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,4vw,2.8rem)',fontWeight:700,marginBottom:'.75rem',letterSpacing:'-.03em',background:'linear-gradient(to right,#34d399,#22d3ee)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent' }}>Premium Features</h2>
          <p style={{ color:'#9ca3af',fontSize:'.88rem',maxWidth:500,margin:'0 auto',lineHeight:1.7 }}>Experience the future of forex trading with our comprehensive suite of EA indicators and automated trading solutions.</p>
        </div>
        <div className="feat-grid">
          {feats.map(f=>(
            <div key={f.title} style={{ background:'#0f1a1a',border:'1px solid #2a3a3a',borderRadius:14,padding:'1.5rem',transition:'border-color .2s' }}
              onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(16,185,129,.28)'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='#2a3a3a'}
            >
              <div style={{ width:48,height:48,borderRadius:11,background:'#0d2020',border:'1px solid rgba(16,185,129,.2)',display:'flex',alignItems:'center',justifyContent:'center',color:'#10b981',marginBottom:'1rem' }}>{f.icon}</div>
              <h3 style={{ fontSize:'.95rem',fontWeight:700,color:'#fff',marginBottom:'.4rem' }}>{f.title}</h3>
              <p style={{ color:'#9ca3af',fontSize:'.8rem',lineHeight:1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
