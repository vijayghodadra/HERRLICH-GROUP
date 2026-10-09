import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileSearch, 
  Sliders, 
  MessageSquare, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      title: 'Uncompromising Confidentiality',
      desc: 'All communications, work products, and client identities are safeguarded behind strict air-gapped forensic protocols and legal non-disclosure frameworks.',
      icon: Lock,
    },
    {
      title: 'Evidence-Based Intelligence',
      desc: 'We deliver primary-source verified findings and documented evidence trails rather than speculative hearsay or automated data-scraping.',
      icon: FileSearch,
    },
    {
      title: 'Structured, Defensible Processes',
      desc: 'Every inquiry observes established procedural standards designed to withstand scrutiny by board audit committees, legal regulators, and judiciary bodies.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Partner Communication',
      desc: 'Direct, unfiltered briefings with senior engagement partners ensure leadership receives clarity in real-time as material facts develop.',
      icon: MessageSquare,
    },
    {
      title: 'Tailored Scope Execution',
      desc: 'Engagements are custom-architected around specific commercial objectives, risk tolerances, and budgetary parameters rather than generic off-the-shelf audits.',
      icon: Sliders,
    },
    {
      title: 'Objective Independence',
      desc: 'Our sole mandate is uncovering factual reality, free from commercial conflicts of interest or organizational predispositions.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="section" aria-labelledby="why-choose-heading">
      <div className="container">
        <div className="section-header center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <HelpCircle size={14} color="#0071E3" />
            <span>INSTITUTIONAL DIFFERENTIATION</span>
          </div>
          <h2 id="why-choose-heading" className="section-title">
            The Principles Behind Our Counsel.
          </h2>
          <p className="section-subtitle">
            How we approach sensitive investigations, forensic audits, and transactional due diligence with uncompromising professional standards.
          </p>
        </div>

        {/* 6 Differentiators in 2-row / 3-col Apple Cards */}
        <div className="grid-3">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <div 
                key={diff.title}
                className="glass-card"
                style={{
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.82)'
                }}
              >
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: '#1D1D1F',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={20} />
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 650, color: '#1D1D1F' }}>
                  {diff.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#6E6E73', lineHeight: 1.55 }}>
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
