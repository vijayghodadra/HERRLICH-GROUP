import React from 'react';
import { GitBranch } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Define the inquiry perimeter, underlying risk scenario, and commercial sensitivities under privileged NDA.',
    },
    {
      num: '02',
      title: 'Assess',
      desc: 'Audit initial documentation, map key stakeholders, and formulate a targeted, lawful investigation plan.',
    },
    {
      num: '03',
      title: 'Execute',
      desc: 'Deploy field intelligence, forensic electronic discovery, accounting audits, and primary interviews.',
    },
    {
      num: '04',
      title: 'Report',
      desc: 'Synthesize verifiable facts into an objective, executive-ready report supported by full evidentiary appendices.',
    },
    {
      num: '05',
      title: 'Support',
      desc: 'Provide strategic debriefings for board committees, legal counsel, and remediation governance.',
    },
  ];

  return (
    <section className="section" style={{ background: '#FFFFFF' }} aria-labelledby="process-heading">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <GitBranch size={14} color="#0071E3" />
            <span>STRUCTURED METHODOLOGY</span>
          </div>
          <h2 id="process-heading" className="section-title">
            From Initial Brief to Defensible Findings.
          </h2>
          <p className="section-subtitle">
            A transparent five-stage engagement protocol engineered for precision, speed, and evidentiary integrity.
          </p>
        </div>

        {/* 5 Process Step Cards */}
        <div className="process-grid">
          {steps.map((s) => (
            <div key={s.num} className="process-step-card">
              <span className="process-step-number">{s.num}</span>
              <h3 className="process-step-title">{s.title}</h3>
              <p className="process-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
