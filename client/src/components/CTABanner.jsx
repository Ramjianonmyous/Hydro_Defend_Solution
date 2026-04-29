import useScrollReveal from './useScrollReveal';

export default function CTABanner() {
  const ref = useScrollReveal();

  const scrollToContact = e => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={ref} style={{
      background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 20,
      padding: '64px 48px', textAlign: 'center',
      margin: '0 6% 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 200,
        background: 'radial-gradient(ellipse, rgba(232,92,44,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <h2 style={{
        fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-1px',
        marginBottom: 12, position: 'relative',
        fontSize: 'clamp(26px, 4vw, 42px)',
      }}>
        Ready to Secure Your Facility?
      </h2>
      <p style={{ color: 'var(--text2)', marginBottom: 32, position: 'relative' }}>
        Get a comprehensive fire safety audit and protect what matters most.
      </p>
      <a href="#contact" onClick={scrollToContact} style={{
        display: 'inline-block', padding: '14px 36px',
        background: 'var(--accent)', color: '#fff', textDecoration: 'none',
        borderRadius: 10, fontWeight: 600, fontSize: 15,
        transition: 'background 0.2s, transform 0.15s', position: 'relative',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        Book a Free Consultation
      </a>
    </div>
  );
}
