import useScrollReveal from './useScrollReveal';

const TEAM = [
  {
    initials: 'RK',
    name: 'Ram Kaithwas',
    role: 'Founder & Lead Safety Auditor',
    bio: '12+ years in fire safety audits. Certified under NFPA 1031, specializing in industrial and high-rise fire safety systems across Maharashtra.',
  },
  {
    initials: 'SB',
    name: 'Shrihit Bandawar',
    role: 'Hazard Risk Assessment Expert',
    bio: 'Chemical & process hazard specialist with expertise in HAZOP studies, MSIHC compliance, and quantitative risk analysis for industrial facilities.',
  },
  {
    initials: 'SW',
    name: 'Sujal Wadhankar',
    role: 'Fire Systems Design Engineer',
    bio: 'Specializes in suppression system design — sprinklers, hydrant networks, and detection system layouts for complex commercial and industrial facilities.',
  },
  {
    initials: 'PJ',
    name: 'Pranam Jadhav',
    role: 'Compliance & NOC Consultant',
    bio: 'Expert in navigating fire NOC processes, BCC clearances, and factory safety act compliance across Maharashtra and other states.',
  },
];

export default function Team() {
  const headerRef = useScrollReveal();

  return (
    <section id="team">
      <div ref={headerRef} className="section-header">
        <span className="section-tag">Our Team</span>
        <h2 className="section-title">Expert Safety<br />Professionals</h2>
        <p className="section-sub">A dedicated team of certified fire safety engineers and hazard management specialists with decades of combined field experience.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {TEAM.map(member => <TeamCard key={member.name} {...member} />)}
      </div>
    </section>
  );
}

function TeamCard({ initials, name, role, bio }) {
  const ref = useScrollReveal(0.05);
  return (
    <div ref={ref} style={{
      background: 'var(--bg2)', border: '1px solid var(--border)',
      borderRadius: 16, padding: '32px 24px', textAlign: 'center',
      transition: 'border-color 0.25s, transform 0.25s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,92,44,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: 'var(--accent-glow)', border: '2px solid rgba(232,92,44,0.35)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 22, color: 'var(--accent2)',
        margin: '0 auto 18px',
      }}>{initials}</div>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{name}</h3>
      <div style={{ fontSize: 13, color: 'var(--accent2)', fontWeight: 500, marginBottom: 10 }}>{role}</div>
      <p style={{ fontSize: 13.5, color: 'var(--text2)', lineHeight: 1.6 }}>{bio}</p>
    </div>
  );
}
