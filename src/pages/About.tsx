import React, { useEffect } from 'react';
import { Shield, Lock, CheckCircle2, Globe2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutProps {
  onOpenConsultation?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'About Us | HERRLICH GROUP';
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: 'Evidentiary Rigor',
      desc: 'We operate on substantiated facts. Speculation and unverified hearsay have no place in our work product. Every factual assertion is traced to corroborating documentary, digital, or primary-source verification.',
    },
    {
      title: 'Institutional Discretion',
      desc: 'Our investigations frequently touch high-stakes executive reputations, boardroom disputes, and multi-jurisdictional acquisitions. We operate within impenetrable boundaries of professional secrecy.',
    },
    {
      title: 'Uncompromised Independence',
      desc: 'We maintain complete editorial and operational independence in our inquiry findings. We do not modify factual conclusions to suit organizational convenience.',
    },
    {
      title: 'Statutory Defensibility',
      desc: 'All inquiries strictly adhere to applicable data privacy frameworks, telecommunications laws, and corporate compliance standards to ensure evidentiary integrity in arbitral and judicial settings.',
    },
  ];

  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Header Breadcrumb / Eyebrow */}
        <div className="section-header">
          <div className="eyebrow">
            <Shield size={14} color="#0071E3" />
            <span>ORGANIZATIONAL PROFILE</span>
          </div>
          <h1 className="section-title">
            Objective Intelligence for High-Stakes Governance.
          </h1>
          <p className="section-subtitle">
            Herrlich Group was founded to provide corporate leadership, special board committees, and general counsels with unvarnished factual clarity during complex business situations.
          </p>
        </div>

        {/* Two-Column Editorial Profile */}
        <div className="editorial-split" style={{ marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1D1D1F', marginBottom: '18px', letterSpacing: '-0.02em' }}>
              Bridging Field Investigation and Boardroom Advisory
            </h2>
            <p style={{ fontSize: '16px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '20px' }}>
              Modern corporate disputes and integrity risks rarely exist in isolation. A procurement fraud scheme often involves off-the-books entities, electronic record destruction, and cross-border kickbacks. Traditional auditing verifies invoices; investigative forensics traces money, relationships, and digital footprints.
            </p>
            <p style={{ fontSize: '15.5px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '28px' }}>
              We bring together career forensic accountants, intelligence analysts, digital evidence practitioners, and corporate governance specialists to assemble an unassailable factual narrative.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenConsultation}
              >
                <span>Request Partner Discussion</span>
                <ArrowUpRight size={14} />
              </button>
              <Link to="/services" className="btn-secondary">
                <span>Explore Capabilities</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: '#FFFFFF'
              }}
            >
              <img
                src="/corporate_editorial_glass.jpg"
                alt="Executive corporate boardroom designed for confidential strategic advisory"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                width="640"
                height="360"
              />
            </div>
            <div 
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '14px 18px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div style={{ fontSize: '13.5px', fontWeight: 650, color: '#1D1D1F' }}>
                Multi-Disciplinary Forensic Teams
              </div>
              <div style={{ fontSize: '11.5px', color: '#6E6E73' }}>
                Accountants • Technologists • Field Analysts • Legal Specialists
              </div>
            </div>
          </div>
        </div>

        {/* Operating Pillars */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              Our Operating Standards
            </h2>
            <p className="section-subtitle">
              The ethical and operational commitments that govern every engagement we undertake.
            </p>
          </div>

          <div className="grid-2">
            {coreValues.map((v) => (
              <div 
                key={v.title}
                className="solid-card"
                style={{ padding: '36px 32px', background: '#FFFFFF' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CheckCircle2 size={20} color="#0071E3" />
                  <h3 style={{ fontSize: '20px', fontWeight: 650, color: '#1D1D1F' }}>
                    {v.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14.5px', color: '#6E6E73', lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Coordination & Confidentiality Assurance */}
        <div 
          className="glass-card editorial-split-wide" 
          style={{ 
            padding: '44px 36px', 
            background: 'rgba(255, 255, 255, 0.85)',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="eyebrow">
              <Globe2 size={14} color="#0071E3" />
              <span>PRESENCE & REACH</span>
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              Pan-Regional Field Capabilities
            </h3>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.6, marginBottom: '16px' }}>
              From operational hubs in New Delhi, Mumbai, and Bengaluru, our investigative reach extends across tier-1 and tier-2 industrial clusters in India, coupled with correspondent networks in Singapore, Dubai, and London for cross-border inquiries.
            </p>
            <div style={{ fontSize: '13px', color: '#86868B' }}>
              Strict legal firewall between investigative research and third-party disclosure.
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Lock size={18} color="#0071E3" />
              <strong style={{ fontSize: '15px', color: '#1D1D1F' }}>Privileged Inquiry Protocol</strong>
            </div>
            <p style={{ fontSize: '13px', color: '#6E6E73', lineHeight: 1.5, margin: 0 }}>
              Direct partner retention enables counsel to structure engagements under formal legal privilege, safeguarding preliminary work product during ongoing dispute resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
