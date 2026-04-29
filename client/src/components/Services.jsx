import useScrollReveal from './useScrollReveal';

const SERVICES = [
  {
    num: '01', title: 'Fire Safety Audits',
    desc: 'Comprehensive on-site audits examining all fire safety systems, emergency exits, suppression equipment, detection systems, and structural vulnerabilities.',
    tags: ['On-site Inspection', 'NBC Compliant', 'Full Report'],
  },
  {
    num: '02', title: 'Hazard Risk Assessment',
    desc: 'Systematic identification and analysis of all fire and chemical hazards within your premises, with quantified risk ratings and prioritized mitigation plans.',
    tags: ['Risk Quantification', 'Mitigation Plans', 'Chemical Hazards'],
  },
  {
    num: '03', title: 'Fire NOC Consultancy',
    desc: 'Complete end-to-end support for obtaining Fire No Objection Certificates from municipal authorities, handling documentation, liaison, and compliance verification.',
    tags: ['NOC Application', 'Documentation', 'Govt Liaison'],
  },
  {
    num: '04', title: 'Fire Suppression Design Review',
    desc: 'Technical review of sprinkler systems, hydrant networks, fire extinguisher placements, and suppression system designs for industrial and commercial buildings.',
    tags: ['Sprinkler Systems', 'Hydrant Review', 'Design Validation'],
  },
  {
    num: '05', title: 'Emergency Evacuation Planning',
    desc: 'Design and validation of emergency evacuation routes, assembly points, warden systems, and signage for multi-story buildings and industrial complexes.',
    tags: ['Route Design', 'Warden System', 'Drills & Testing'],
  },
  {
    num: '06', title: 'Industrial Safety Compliance',
    desc: 'Specialized compliance consulting for factories, warehouses, and industrial units under the Factories Act, MSIHC Rules, and PESO regulations.',
    tags: ['Factories Act', 'MSIHC Rules', 'PESO Compliance'],
  },
];

export default function Services() {
  const headerRef = useScrollReveal();

  return (
    <section id="services">
      <div ref={headerRef} className="section-header">
        <span className="section-tag">Our Services</span>
        <h2 className="section-title">End-to-End Fire<br />Safety Solutions</h2>
        <p className="section-sub">From initial assessment to final certification — we cover every aspect of your fire safety needs.</p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 1, background: 'var(--border)',
        border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden', marginTop: 64,
      }}>
        {SERVICES.map(s => <ServiceItem key={s.num} {...s} />)}
      </div>
    </section>
  );
}

function ServiceItem({ num, title, desc, tags }) {
  const ref = useScrollReveal(0.05);
  return (
    <div ref={ref}
      style={{ background: 'var(--bg)', padding: '36px 32px', transition: 'background 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg2)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
    >
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, color: 'var(--accent)', letterSpacing: 1, marginBottom: 16 }}>{num}</div>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 14.5, color: 'var(--text2)', lineHeight: 1.65 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
        {tags.map(t => (
          <span key={t} style={{
            fontSize: 11.5, padding: '4px 12px',
            background: 'var(--accent-glow)', border: '1px solid rgba(232,92,44,0.25)',
            color: 'var(--accent2)', borderRadius: 100, fontWeight: 500,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
