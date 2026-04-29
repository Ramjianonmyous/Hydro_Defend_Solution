import { useEffect, useRef } from 'react';

const STATS = [
  { num: '500+', label: 'Audits Completed' },
  { num: '98%',  label: 'Compliance Rate'  },
  { num: '12+',  label: 'Years of Experience' },
  { num: '200+', label: 'Clients Protected' },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.hero-anim');
    els?.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 80);
    });
  }, []);

  const scrollToContact = e => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '120px 6% 80px',
      position: 'relative', textAlign: 'center', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(232,92,44,0.13) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div className="hero-anim" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 16px',
        background: 'var(--accent-glow)',
        border: '1px solid rgba(232,92,44,0.35)',
        borderRadius: 100, fontSize: 12.5, color: 'var(--accent2)',
        fontWeight: 500, letterSpacing: '0.5px', marginBottom: 32,
        position: 'relative',
      }}>
        <span style={{ width: 6, height: 6, background: 'var(--accent2)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
        Certified Fire Safety Professionals
      </div>

      {/* Title */}
      <h1 className="hero-anim" style={{
        fontFamily: 'var(--font-head)', fontWeight: 800, lineHeight: 1.0,
        letterSpacing: '-2px', color: 'var(--text)', marginBottom: 24,
        fontSize: 'clamp(44px, 7vw, 88px)', position: 'relative',
      }}>
        Protecting Lives<br />Through{' '}
        <span style={{ color: 'var(--accent)' }}>Expert</span><br />
        Fire Safety
      </h1>

      {/* Subtitle */}
      <p className="hero-anim" style={{
        fontSize: 18, color: 'var(--text2)', maxWidth: 560, margin: '0 auto 48px',
        fontWeight: 400, lineHeight: 1.7, position: 'relative',
      }}>
        Comprehensive fire safety audits, hazard risk assessments, and regulatory compliance solutions — keeping your facility safe and fully compliant.
      </p>

      {/* Stats */}
      <div className="hero-anim" style={{
        display: 'flex', gap: 48, justifyContent: 'center',
        marginTop: 72, paddingTop: 48,
        borderTop: '1px solid var(--border)',
        position: 'relative', flexWrap: 'wrap',
      }}>
        {STATS.map(({ num, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-head)', fontSize: 38, fontWeight: 800,
              color: 'var(--text)', letterSpacing: '-1px', lineHeight: 1,
            }}>
              {num.replace(/[+%]/g, '')}
              <span style={{ color: 'var(--accent)' }}>
                {num.includes('+') ? '+' : num.includes('%') ? '%' : ''}
              </span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
