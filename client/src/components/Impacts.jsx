import useScrollReveal from './useScrollReveal';

const IMPACT_NUMS = [
  { big: '500+', label: 'Safety Audits Conducted' },
  { big: '₹2B+', label: 'Assets Protected' },
  { big: '0',    label: 'Post-Audit Fire Incidents' },
  { big: '12',   label: 'Industries Served' },
];

const PROJECTS = [
  {
    bg: '#1a0f08', type: 'Industrial Facility',
    title: 'Nashik Chemical Manufacturing Plant',
    desc: 'Full fire safety audit and MSIHC compliance review for a 4-hectare chemical plant. Identified 37 critical hazards, designed new suppression layout, achieved NOC in 60 days.',
    meta: [{ val: '37', key: 'Hazards Resolved' }, { val: '60 Days', key: 'NOC Obtained' }, { val: '100%', key: 'Compliance' }],
    emoji: '🏭',
  },
  {
    bg: '#0a1018', type: 'Healthcare Facility',
    title: 'Aurangabad Multi-Specialty Hospital',
    desc: 'Comprehensive fire safety audit for a 350-bed hospital. Designed zone-based evacuation system, upgraded fire detection across 8 floors, trained 200+ staff members.',
    meta: [{ val: '8 Floors', key: 'Fully Covered' }, { val: '200+', key: 'Staff Trained' }, { val: 'A+', key: 'Safety Rating' }],
    emoji: '🏥',
  },
  {
    bg: '#0c180a', type: 'Logistics & Warehousing',
    title: 'Pune Logistics Warehouse Complex',
    desc: 'High-rack warehouse fire hazard assessment for 25,000 sq.m. facility storing flammable goods. Designed ESFR sprinkler system layout and fire compartmentalization strategy.',
    meta: [{ val: '25,000 m²', key: 'Area Covered' }, { val: 'ESFR', key: 'System Designed' }, { val: 'Zero', key: 'Incidents Since' }],
    emoji: '🏗️',
  },
  {
    bg: '#150a16', type: 'Educational Institution',
    title: 'Jalgaon Engineering College Campus',
    desc: 'Campus-wide fire safety overhaul covering 12 buildings, 3 hostels, and a 5,000-student capacity. Full NOC compliance achieved with annual drill program established.',
    meta: [{ val: '15', key: 'Buildings Audited' }, { val: '5,000+', key: 'Students Protected' }, { val: 'Annual', key: 'Drill Program' }],
    emoji: '🎓',
  },
  {
    bg: '#0f0f18', type: 'Commercial Real Estate',
    title: 'Mumbai IT Park — Tower A & B',
    desc: 'Fire safety compliance for twin 18-story commercial towers. Designed integrated fire alarm system, pressurization for staircases, and obtained BCC fire clearance.',
    meta: [{ val: '36 Floors', key: 'Total Coverage' }, { val: 'BCC', key: 'Clearance Obtained' }, { val: '2,400+', key: 'Occupants Safe' }],
    emoji: '🏢',
  },
  {
    bg: '#150a0a', type: 'Food & Beverage Industry',
    title: 'Solapur Food Processing Unit',
    desc: 'Fire and explosion hazard assessment for a large food processing plant with high dust concentration areas. Implemented dust explosion prevention systems and zone classification.',
    meta: [{ val: 'ATEX', key: 'Zone Classification' }, { val: '100%', key: 'Dust Hazard Control' }, { val: 'PESO', key: 'Approved' }],
    emoji: '🏭',
  },
];

export default function Impacts() {
  const headerRef = useScrollReveal();
  const numsRef = useScrollReveal();

  return (
    <section id="impacts" style={{ background: 'var(--bg2)' }}>
      {/* Intro row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 64 }}
        className="impacts-intro">
        <div ref={headerRef}>
          <span className="section-tag">Our Impact</span>
          <h2 className="section-title">Real Projects,<br />Real Safety</h2>
          <p className="section-sub">Proven results across industries — from manufacturing plants to hospitals, protecting hundreds of lives and billions in assets.</p>
        </div>
        <div ref={numsRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {IMPACT_NUMS.map(({ big, label }) => (
            <div key={label} style={{
              background: 'var(--bg3)', border: '1px solid var(--border)',
              borderRadius: 14, padding: 24,
            }}>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 40, fontWeight: 800, color: 'var(--accent)', letterSpacing: '-1px', lineHeight: 1 }}>{big}</div>
              <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>

      <style>{`
        @media (max-width: 768px) { .impacts-intro { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  );
}

function ProjectCard({ bg, type, title, desc, meta, emoji }) {
  const ref = useScrollReveal(0.05);
  return (
    <div ref={ref} style={{
      background: 'var(--bg3)', border: '1px solid var(--border)',
      borderRadius: 16, overflow: 'hidden',
      transition: 'border-color 0.25s, transform 0.25s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,92,44,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ height: 130, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56, position: 'relative' }}>
        {emoji}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, var(--bg3) 100%)' }} />
      </div>
      <div style={{ padding: '24px 28px 28px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>{type}</div>
        <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 19, fontWeight: 700, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 18 }}>{desc}</p>
        <div style={{ display: 'flex', gap: 20, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
          {meta.map(({ val, key }) => (
            <div key={key} style={{ fontSize: 12.5, color: 'var(--text2)' }}>
              <span style={{ display: 'block', fontWeight: 600, color: 'var(--text)', fontSize: 14 }}>{val}</span>
              {key}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
