import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Features',  href: '#features'  },
  { label: 'Services',  href: '#services'  },
  { label: 'Impacts',   href: '#impacts'   },
  { label: 'Team',      href: '#team'      },
  { label: 'FAQ',       href: '#faq'       },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5%', height: 68,
        background: scrolled ? 'rgba(10,11,14,0.92)' : 'rgba(10,11,14,0.82)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s',
      }}>
        {/* Logo */}
        <a href="#hero" onClick={e => scrollTo(e, '#hero')} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, background: 'var(--accent)', borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2C8.5 6 6 9 6 13c0 3.31 2.69 6 6 6s6-2.69 6-6c0-4-2.5-7-6-11zm0 15c-2.21 0-4-1.79-4-4 0-2 1.5-4.5 4-7 2.5 2.5 4 5 4 7 0 2.21-1.79 4-4 4z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 17, color: 'var(--text)', letterSpacing: '-0.3px' }}>
              HydroDefendSolution
            </div>
            <div style={{ fontSize: 10, color: 'var(--text2)', letterSpacing: '0.5px', marginTop: -2 }}>
              Fire Safety & Hazard Management
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={e => scrollTo(e, href)} style={{
                textDecoration: 'none', color: 'var(--text2)', fontSize: 14,
                fontWeight: 500, letterSpacing: '0.2px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={e => scrollTo(e, '#contact')} style={{
              background: 'var(--accent)', color: '#fff', padding: '9px 22px',
              borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s', display: 'inline-block',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent2)'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)'; }}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
          className="hamburger"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2,
              background: 'var(--text)', margin: '5px 0', borderRadius: 2,
              transition: 'all 0.3s',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99,
          background: 'var(--bg)', borderBottom: '1px solid var(--border)',
          padding: '8px 0',
        }}>
          {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map(({ label, href }) => (
            <a key={label} href={href} onClick={e => scrollTo(e, href)} style={{
              display: 'block', padding: '14px 6%', color: 'var(--text)',
              textDecoration: 'none', fontSize: 15, fontWeight: 500,
              borderBottom: '1px solid var(--border)',
            }}>
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
