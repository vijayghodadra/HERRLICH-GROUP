import React, { useEffect } from 'react';
import { Lock } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Governance & Client Confidentiality | HERRLICH GROUP';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-header">
          <div className="eyebrow">
            <Lock size={14} color="#0071E3" />
            <span>DATA GOVERNANCE & COMPLIANCE</span>
          </div>
          <h1 className="section-title">
            Privacy Governance & Confidentiality Covenant.
          </h1>
          <p className="section-subtitle">
            How Herrlich Group safeguards engagement communications, electronic work products, and client identity under statutory data protection frameworks.
          </p>
        </div>

        <div className="solid-card" style={{ padding: '48px 40px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              1. Non-Disclosure & Privileged Engagement Standard
            </h2>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65 }}>
              All client engagements are conducted under binding mutual non-disclosure covenants. Preliminary inquiries transmitted through this website or directly to our practice partners are treated with strict confidentiality. Valence Advisory never commercializes, resells, or aggregates client data for marketing or advertising purposes.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              2. Lawful Basis of Investigative Processing
            </h2>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '12px' }}>
              In executing forensic due diligence, fraud risk assessments, and corporate investigations, Valence Advisory operates exclusively within the bounds of applicable statutory law, including the Digital Personal Data Protection Act (DPDP), Indian Information Technology Act, and relevant international data privacy principles.
            </p>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65 }}>
              Our evidentiary methodologies rely strictly upon lawful public domain records, regulatory filings, corporate registries, consensual disclosures, and verifiable primary human intelligence.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              3. Data Retention & Secure Destruction Protocols
            </h2>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65 }}>
              Work product dossiers, digital evidence images, and client communications are stored in air-gapped, AES-256 encrypted repositories. Upon conclusion of an engagement or formal expiration of statutory litigation hold periods, case materials are either returned to client custody or purged using verified Department of Defense (DoD 5220.22-M) data destruction protocols.
            </p>
          </section>

          <section id="terms">
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              4. Terms of Engagement & Scope Delimitation
            </h2>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '12px' }}>
              Informational materials and analytical briefings published on this website are prepared for general professional orientation only and do not constitute formal legal counsel or statutory audit certificates.
            </p>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65 }}>
              A formal advisory relationship is created solely upon the mutual execution of an Engagement Letter specifying the scope of inquiry, reporting deliverables, and professional fees.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              5. Data Protection Officer (DPO) Contact
            </h2>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65 }}>
              For queries regarding institutional data handling or privileged communication protocols, contact our Compliance & Privacy Counsel at <strong>compliance@valence-risk.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
