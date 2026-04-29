import useScrollReveal from './useScrollReveal';

const FEATURES = [
  {
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#e85c2c" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    title: 'Certified Audit Process',
    desc: 'Fully accredited fire safety audits following IS/NBC and NFPA standards, ensuring every risk is identified and documented.',
    bullets: ['NBC & NFPA compliant inspections', 'Detailed risk documentation', 'Actionable audit reports'],
  },
  {
    icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#e85c2c" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    title: 'Real-Time Hazard Monitoring',
    desc: 'Continuous monitoring of fire hazard indicators with live alerts and periodic review cycles for ongoing facility protection.',
    bullets: ['Live risk alerts & notifications', 'Periodic hazard review cycles', 'Digital hazard dashboards'],
  },
  {
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" stroke="#e85c2c" strokeWidth="2" fill="none"/><path d="M8 21h8M12 17v4" stroke="#e85c2c" strokeWidth="2"/></>,
    title: 'Regulatory Compliance',
    desc: 'Expert guidance through India\'s fire NOC process, local municipal fire regulations, and industrial safety compliance frameworks.',
    bullets: ['Fire NOC application support', 'Industrial safety frameworks', 'Legal compliance advisory'],
  },
  {
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#e85c2c" strokeWidth="2" fill="none"/><circle cx="9" cy="7" r="4" stroke="#e85c2c" strokeWidth="2" fill="none"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#e85c2c" strokeWidth="2" fill="none"/></>,
    title: 'Safety Training Programs',
    desc: 'Customized fire drill coordination, evacuation planning, and staff training programs built for your facility\'s unique needs.',
    bullets: ['Fire drill coordination', 'Evacuation plan design', 'Staff awareness workshops'],
  },
  {
    icon: <><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" stroke="#e85c2c" strokeWidth="2" fill="none"/><polyline points="14 2 14 8 20 8" stroke="#e85c2c" strokeWidth="2" fill="none"/><line x1="16" y1="13" x2="8" y2="13" stroke="#e85c2c" strokeWidth="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="#e85c2c" strokeWidth="2"/></>,
    title: 'Comprehensive Reporting',
    desc: 'Detailed digital reports with photographic evidence, risk ratings, priority matrices, and corrective action timelines.',
    bullets: ['Photographic evidence reports', 'Priority risk matrices', 'Corrective action timelines'],
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#e85c2c" strokeWidth="2" fill="none"/>,
    title: 'Post-Audit Support',
    desc: 'Dedicated follow-up consultations, re-inspection services, and ongoing advisory to close all identified hazards effectively.',
    bullets: ['Follow-up re-inspections', 'Hazard closure verification', 'Ongoing safety advisory'],
  },
];

export default function Features() {
  const headerRef = useScrollReveal();

  return (
    <section id="features" style={{ background: 'var(--bg2)' }}>
      <div ref={headerRef} className="section-header">
        <span className="section-tag">Why Choose Us</span>
        <h2 className="section-title">Why teams choose<br />HydroDefendSolution</h2>
        <p className="section-sub">Everything you need to assess, manage, and eliminate fire hazards — delivered by certified experts.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 64 }}>
        {FEATURES.map(({ icon, title, desc, bullets }) => (
          <FeatureCard key={title} icon={icon} title={title} desc={desc} bullets={bullets} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, bullets }) {
  const ref = useScrollReveal(0.05);
  return (
    <div ref={ref} style={{
      background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 16,
      padding: 32, transition: 'border-color 0.25s, transform 0.25s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,92,44,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{
        width: 48, height: 48, background: 'var(--accent-glow)',
        border: '1px solid rgba(232,92,44,0.3)', borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24">{icon}</svg>
      </div>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 19, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>{title}</h3>
      <p style={{ fontSize: 14.5, color: 'var(--text2)', lineHeight: 1.65 }}>{desc}</p>
      <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {bullets.map(b => (
          <li key={b} style={{ fontSize: 13.5, color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', flexShrink: 0 }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
