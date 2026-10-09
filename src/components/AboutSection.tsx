import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Eye } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="section" id="about" aria-labelledby="about-section-heading">
      <div className="container">
        <div className="editorial-split">
          {/* Editorial Visual */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{ 
                borderRadius: 'var(--radius-xl)', 
                overflow: 'hidden', 
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.07)',
                background: '#FFFFFF'
              }}
            >
              <img
                src="/corporate_editorial_glass.jpg"
                alt="Executive conference boardroom with architectural frosted glass partition"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
                width="640"
                height="360"
              />
            </div>

            {/* Subtle Glass Callout */}
            <div 
              className="about-glass-badge"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '24px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '18px',
                padding: '16px 20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                maxWidth: '280px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Shield size={16} color="#1D1D1F" />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1D1D1F' }}>
                  Institutional Independence
                </span>
              </div>
              <p style={{ fontSize: '11.5px', color: '#6E6E73', margin: 0, lineHeight: 1.4 }}>
                Unbiased evidence gathering structured to withstand board, judicial, and regulatory examination.
              </p>
            </div>
          </div>

          {/* Editorial Copy */}
          <div>
            <div className="eyebrow">
              <Eye size={14} color="#0071E3" />
              <span>WHO WE ARE</span>
            </div>

            <h2 id="about-section-heading" className="section-title">
              Strategic Intelligence Grounded in Unshakable Truth.
            </h2>

            <p style={{ fontSize: '16.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Valence Risk & Forensic Advisory operates at the intersection of investigative field intelligence, forensic financial analysis, and board-level risk management.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              We assist general counsels, special audit committees, institutional investors, and leadership teams in uncovering factual clarity during critical situations—from multi-million-dollar contractual disputes to sensitive internal whistleblower revelations.
            </p>

            {/* Core Capability Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Legally Defensible Methodologies: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>All data collection strictly observes ethical, privacy, and evidentiary standards.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Senior Partner Oversight: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Every engagement is directed personally by seasoned investigative leaders.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Absolute Operational Discretion: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Secure encrypted environments protect client identity and work product.</span>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-secondary">
              <span>Read About Our Practice & Leadership</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
