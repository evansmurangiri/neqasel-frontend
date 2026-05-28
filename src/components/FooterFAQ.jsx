import { useState } from 'react';
import { CandleLogo } from './Navbar';

export function Newsletter() {
  const [email, setEmail] = useState('');
  return (
    <section id="newsletter" style={{ padding:'clamp(3rem,6vw,4.5rem) 1.25rem',background:'#06100f' }}>
      <div style={{ background:'linear-gradient(to bottom,#0f2a28,#0a1a1a)',border:'1px solid rgba(6,182,212,.2)',borderRadius:24,padding:'clamp(1.75rem,5vw,3rem)',maxWidth:1100,margin:'0 auto',textAlign:'center' }}>
        <div style={{ width:72,height:72,borderRadius:14,background:'#06b6d4',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.75rem' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <h2 style={{ fontSize:'clamp(1.6rem,4vw,3rem)',fontWeight:700,marginBottom:'1rem',background:'linear-gradient(to right,#22d3ee,#34d399)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:'-.03em' }}>Stay Updated</h2>
        <p style={{ color:'#9ca3af',fontSize:'clamp(.88rem,2.5vw,1rem)',maxWidth:520,margin:'0 auto 1.75rem',lineHeight:1.7 }}>Get the latest insights, market analysis, and trading tips delivered straight to your inbox. Join our community of successful traders.</p>
        <div style={{ display:'flex',gap:'.75rem',maxWidth:420,margin:'0 auto 1rem',flexWrap:'wrap',justifyContent:'center' }}>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email address"
            style={{ flex:1,minWidth:180,padding:'.85rem 1.2rem',borderRadius:'2rem',background:'#1a2e2c',border:'1px solid #2a4a48',color:'#fff',fontSize:'.88rem',outline:'none',fontFamily:'inherit' }}
            onFocus={e=>e.target.style.borderColor='rgba(6,182,212,.5)'}
            onBlur={e=>e.target.style.borderColor='#2a4a48'}
          />
          <button style={{ padding:'.85rem 1.6rem',borderRadius:'2rem',background:'#06b6d4',color:'#fff',fontWeight:600,fontSize:'.88rem',border:'none',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:'.5rem',whiteSpace:'nowrap',fontFamily:'inherit',transition:'all .2s' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='#22d3ee'; e.currentTarget.style.color='#0a0f0f'; }}
            onMouseLeave={e=>{ e.currentTarget.style.background='#06b6d4'; e.currentTarget.style.color='#fff'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Subscribe
          </button>
        </div>
        <p style={{ fontSize:'.8rem',color:'#6b7280' }}>No spam, unsubscribe at any time. We respect your privacy.</p>
      </div>
    </section>
  );
}

const faqs = [
  { q:'What is automated trading?', a:'Automated trading uses EA (Expert Advisor) indicators and trading bots to execute trades automatically based on predefined algorithms and market conditions. Our EA indicators analyze market patterns and our trading bots execute trades without human intervention, operating 24/7 to capture profitable opportunities.' },
  { q:'Do I need trading experience to use Neqasel products?', a:"No prior trading experience is required! Our Neqaset indicator provides clear entry point signals with visual drawing, making it perfect for beginners. The Master Set includes both the indicator and automated trading bot, so you can start with manual trading using signals or let the bot trade automatically for you." },
  { q:'How do I access my purchased products?', a:"After purchase, you'll receive immediate access to your EA indicators and trading bots through our secure download portal. You'll also get detailed installation guides, video tutorials, and access to our support team to help you set up everything correctly on your MT4/MT5 platform." },
  { q:'Are your trading bots compatible with my broker?', a:'Our EA indicators and trading bots are designed to work with most major brokers that support MT4 and MT5 platforms. We provide compatibility lists and can help you verify if your broker is supported. If you have a specific broker, contact our support team for compatibility confirmation.' },
  { q:'What is Neqasel?', a:'Neqasel is an advanced trading platform offering EA indicators and automated trading bots designed to help traders maximize profits in forex, crypto, and synthetic indices markets.' },
  { q:'What is the minimum deposit for Account Management?', a:'The minimum balance required for our Account Management service is $500. We trade your account and share profits 50/50 with you.' },
  { q:'What markets can I trade with Neqasel?', a:'Neqasel supports trading in Forex, Cryptocurrency, Stocks, and Synthetic Indices. Our tools work across all these markets seamlessly.' },
  { q:'Is my account secure?', a:'Yes, security is our top priority. We use advanced encryption and secure connections. Our Account Management service includes intelligent risk management systems to protect your capital at all times.' },
];

export function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding:'clamp(3rem,6vw,4.5rem) 1.25rem',background:'#0a0f0f' }}>
      <div style={{ maxWidth:1100,margin:'0 auto' }}>
        <div style={{ textAlign:'center',marginBottom:'2.5rem' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,4vw,2.8rem)',fontWeight:700,marginBottom:'.75rem',letterSpacing:'-.03em',background:'linear-gradient(to right,#34d399,#22d3ee)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent' }}>Got Questions?</h2>
          <p style={{ color:'#9ca3af',fontSize:'.88rem',maxWidth:460,margin:'0 auto',lineHeight:1.7 }}>Find answers to common questions about Neqasel and our trading solutions.</p>
        </div>
        <div style={{ maxWidth:780,margin:'0 auto',display:'flex',flexDirection:'column',gap:'.6rem',marginBottom:'3rem' }}>
          {faqs.map((faq,i)=>(
            <div key={i} style={{ background:'#0f1a1a',border:`1px solid ${open===i?'rgba(16,185,129,.28)':'#2a3a3a'}`,borderRadius:12,overflow:'hidden',transition:'border-color .2s' }}>
              <div onClick={()=>setOpen(open===i?null:i)} style={{ display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 1.2rem',cursor:'pointer',gap:'.75rem' }}>
                <div style={{ display:'flex',alignItems:'center',gap:'.75rem',flex:1,minWidth:0 }}>
                  <div style={{ width:28,height:28,borderRadius:'50%',background:'rgba(16,185,129,.1)',border:'1px solid rgba(16,185,129,.28)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.68rem',fontWeight:700,color:'#10b981',flexShrink:0 }}>{i+1}</div>
                  <h3 style={{ fontSize:'clamp(.82rem,2.5vw,.9rem)',fontWeight:600,color:'#fff',lineHeight:1.4 }}>{faq.q}</h3>
                </div>
                <div style={{ width:26,height:26,flexShrink:0,borderRadius:'50%',border:`1px solid ${open===i?'rgba(16,185,129,.4)':'rgba(42,58,58,.6)'}`,display:'flex',alignItems:'center',justifyContent:'center',color:'#10b981',fontSize:'.78rem',transform:open===i?'rotate(180deg)':'none',transition:'transform .3s,background .2s',background:open===i?'rgba(16,185,129,.1)':'transparent' }}>▾</div>
              </div>
              {open===i&&(
                <div style={{ padding:'0 1.2rem 1rem',borderTop:'1px solid #2a3a3a' }}>
                  <p style={{ paddingTop:'.85rem',fontSize:'clamp(.8rem,2.2vw,.83rem)',color:'#9ca3af',lineHeight:1.72 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div style={{ background:'linear-gradient(to bottom,#0f2a28,#0a1a1a)',border:'1px solid rgba(6,182,212,.2)',borderRadius:24,padding:'clamp(1.75rem,5vw,3rem)',maxWidth:780,margin:'0 auto',textAlign:'center' }}>
          <div style={{ width:60,height:60,borderRadius:'50%',background:'#06b6d4',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.25rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h2 style={{ fontSize:'clamp(1.4rem,3.5vw,2.2rem)',fontWeight:700,color:'#fff',marginBottom:'1rem' }}>Still have questions?</h2>
          <p style={{ color:'#9ca3af',fontSize:'clamp(.85rem,2.5vw,.95rem)',maxWidth:500,margin:'0 auto 1.75rem',lineHeight:1.7 }}>Our support team is here to help you get the most out of our EA indicators and trading bots. Contact us anytime for personalized assistance.</p>
          <div style={{ display:'flex',gap:'.85rem',justifyContent:'center',flexWrap:'wrap' }}>
            <button style={{ padding:'.8rem 1.75rem',borderRadius:'2rem',background:'#06b6d4',color:'#fff',fontWeight:600,fontSize:'.88rem',border:'none',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:'.5rem',fontFamily:'inherit',transition:'all .2s' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='#22d3ee'; e.currentTarget.style.color='#0a0f0f'; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='#06b6d4'; e.currentTarget.style.color='#fff'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Chat with Support
            </button>
            <button style={{ padding:'.8rem 1.75rem',borderRadius:'2rem',background:'transparent',border:'2px solid #06b6d4',color:'#22d3ee',fontWeight:600,fontSize:'.88rem',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:'.5rem',fontFamily:'inherit',transition:'all .2s' }}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(6,182,212,.1)'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const scrollTo = id=>{ const el=document.querySelector(id); if(el)el.scrollIntoView({behavior:'smooth'}); };
  const cols = [
    { title:'Product', links:[{l:'Features',id:'#services'},{l:'Products',id:'#products'},{l:'Trading Hub',id:null}] },
    { title:'Company', links:[{l:'About Us',id:'#welcome'}] },
    { title:'Support & Legal', links:[{l:'Contact Support',id:null},{l:'Help Center',id:'#faq'},{l:'Privacy Policy',id:null},{l:'Terms of Service',id:null},{l:'Risk Disclosure',id:null}] },
  ];
  return (
    <footer style={{ background:'#06100f',borderTop:'1px solid #1e2e2e',padding:'clamp(2.5rem,6vw,4.5rem) 1.5rem 2rem' }}>
      <style>{`.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:2.5rem}@media(max-width:760px){.footer-grid{grid-template-columns:1fr 1fr}}@media(max-width:440px){.footer-grid{grid-template-columns:1fr}}.footer-bottom-row{display:flex;justify-content:space-between;align-items:center}@media(max-width:480px){.footer-bottom-row{flex-direction:column;gap:.5rem;text-align:center}}`}</style>
      <div style={{ maxWidth:1100,margin:'0 auto' }}>
        <div className="footer-grid" style={{ marginBottom:'2.5rem' }}>
          <div>
            <div style={{ display:'flex',alignItems:'center',gap:5,marginBottom:'1rem' }}>
              <CandleLogo size={28} />
              <span style={{ fontWeight:800,fontSize:'1.3rem',letterSpacing:2,background:'linear-gradient(135deg,#10b981,#06b6d4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent' }}>neqasel</span>
            </div>
            <p style={{ color:'#9ca3af',fontSize:'.83rem',lineHeight:1.7,maxWidth:260,marginBottom:'1rem' }}>Revolutionizing forex trading through AI-powered automation and intelligent market analysis. Empowering traders worldwide.</p>
            <div style={{ color:'#9ca3af',fontSize:'.8rem',lineHeight:2 }}>
              <div>📧 support@neqasel.com</div>
              <div>📍 Nairobi, Kenya</div>
            </div>
          </div>
          {cols.map(col=>(
            <div key={col.title}>
              <div style={{ fontSize:'.72rem',fontWeight:700,letterSpacing:'.8px',textTransform:'uppercase',color:'#fff',marginBottom:'1rem' }}>{col.title}</div>
              <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:'.65rem' }}>
                {col.links.map(link=>(
                  <li key={link.l}>
                    <span onClick={()=>link.id&&scrollTo(link.id)} style={{ color:'#9ca3af',fontSize:'.83rem',transition:'color .2s',cursor:'pointer' }}
                      onMouseEnter={e=>e.currentTarget.style.color='#10b981'}
                      onMouseLeave={e=>e.currentTarget.style.color='#9ca3af'}
                    >{link.l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ background:'rgba(251,191,36,0.04)',border:'1px solid rgba(251,191,36,0.12)',borderRadius:12,padding:'1.1rem 1.25rem',fontSize:'.76rem',color:'#92836a',lineHeight:1.65,marginBottom:'1.75rem' }}>
          <strong style={{ color:'#c4a040' }}>⚠️ Risk Disclaimer:</strong> Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Neqasel's EA indicators and trading bots are tools designed to assist with analysis and automation — they do not guarantee profits. Trade responsibly. Your capital is at risk.
        </div>
        <div className="footer-bottom-row" style={{ borderTop:'1px solid #1e2e2e',paddingTop:'1.25rem' }}>
          <span style={{ color:'#6b7280',fontSize:'.78rem' }}>© {new Date().getFullYear()} Neqasel. All rights reserved.</span>
          <span style={{ color:'#6b7280',fontSize:'.78rem',cursor:'pointer',transition:'color .2s' }}
            onMouseEnter={e=>e.currentTarget.style.color='#10b981'}
            onMouseLeave={e=>e.currentTarget.style.color='#6b7280'}
          >Instagram ↗</span>
        </div>
      </div>
    </footer>
  );
}

export function WAFloat() {
  return (
    <a
      href="https://wa.me/254746155245"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        zIndex: 500,
        width: 52,
        height: 52,
        background: '#10b981',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 18px rgba(16,185,129,.35)',
        transition: 'all .2s',
        textDecoration: 'none'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#34d399';
        e.currentTarget.style.transform = 'scale(1.07)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#10b981';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}
