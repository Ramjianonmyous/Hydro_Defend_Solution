import { useState } from 'react';
import useScrollReveal from './useScrollReveal';

const FAQS = [
  {
    q: 'What does a fire safety audit include?',
    a: 'A comprehensive audit covers inspection of all fire detection and alarm systems, suppression equipment, emergency exits and signage, electrical hazard points, housekeeping practices, and fire load assessment. We deliver a detailed report with prioritized corrective actions.',
  },
  {
    q: 'How long does a fire safety audit take?',
    a: 'Duration depends on facility size. A small commercial unit typically takes 1 day, while a large industrial complex or multi-building campus may require 2–5 days of on-site inspection, followed by report preparation within 7 working days.',
  },
  {
    q: 'Can you help obtain a Fire NOC?',
    a: 'Yes — we provide complete end-to-end support for the Fire NOC process, from pre-application gap assessment and document preparation to coordination with the local fire department and follow-up until the certificate is issued.',
  },
  {
    q: 'Which industries do you serve?',
    a: 'We serve manufacturing and chemical plants, hospitals and healthcare facilities, warehouses and logistics hubs, educational institutions, hospitality (hotels/resorts), IT parks and commercial complexes, and food processing units.',
  },
  {
    q: 'Do you conduct fire safety training?',
    a: 'Absolutely. We offer customized fire safety awareness workshops, fire warden training, hands-on fire extinguisher training, and full-scale mock evacuation drills coordinated by our certified specialists.',
  },
  {
    q: 'How often should a fire safety audit be done?',
    a: 'As per Indian standards and best practices, a full fire safety audit should be conducted annually. High-risk facilities such as chemical plants or hospitals may require semi-annual audits. Post any renovation or major layout change, an immediate re-audit is strongly recommended.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const headerRef = useScrollReveal();

  return (
    <section id="faq" style={{ background: 'var(--bg2)' }}>
      <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 64 }}>
        <span className="section-tag">FAQ</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>Everything you need to know about our fire safety audit and hazard management services.</p>
      </div>

      <div style={{
        maxWidth: 760, margin: '0 auto',
        display: 'flex', flexDirection: 'column', gap: 1,
        background: 'var(--border)', border: '1px solid var(--border)',
        borderRadius: 18, overflow: 'hidden',
      }}>
        {FAQS.map(({ q, a }, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} style={{ background: 'var(--bg2)' }}>
              <button onClick={() => setOpenIdx(isOpen ? null : i)} style={{
                width: '100%', background: 'none', border: 'none', textAlign: 'left',
                padding: '24px 28px', color: 'var(--text)', fontFamily: 'var(--font-body)',
                fontSize: 15.5, fontWeight: 500, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
              >
                {q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke={isOpen ? 'var(--accent)' : 'var(--text2)'} strokeWidth="2"
                  style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s, stroke 0.2s' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div style={{
                maxHeight: isOpen ? 300 : 0, overflow: 'hidden',
                transition: 'max-height 0.3s ease',
                padding: isOpen ? '0 28px 24px' : '0 28px',
                color: 'var(--text2)', fontSize: 14.5, lineHeight: 1.7,
              }}>
                {a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
