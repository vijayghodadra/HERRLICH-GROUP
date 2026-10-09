import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, Lock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="section hero-wrapper" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Typography */}
          <div>
            <div className="eyebrow-badge">
              <Sparkles size={13} color="#0071E3" />
              <span>TRUST. INTELLIGENCE. STRATEGY.</span>
            </div>

            <h1 className="hero-headline">
              Clarity for Decisions That Matter.
            </h1>

            <p className="hero-subhead">
              Discover a smarter approach to complex business challenges through informed insights, professional expertise, and solutions designed around your objectives.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="btn-primary">
                <span>Explore Our Services</span>
                <ArrowRight size={15} />
              </Link>

              <button
                type="button"
                className="btn-secondary"
                onClick={onOpenConsultation}
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div 
              style={{ 
                marginTop: '36px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '24px', 
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <div style={{ color: '#0071E3' }}>
                  <Lock size={15} />
                </div>
                <span>Strict Non-Disclosure Guarantee</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <div style={{ color: '#0071E3' }}>
                  <ShieldCheck size={15} />
                </div>
                <span>Evidentiary-Grade Forensics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Apple-inspired Liquid Glass Visual Monolith */}
          <div style={{ position: 'relative' }}>
            <div className="hero-visual-card">
              <img
                src="/hero_glass_sculpture.jpg"
                alt="Liquid glass and titanium monolithic composition representing clarity and structural integrity"
                className="hero-visual-image"
                width="640"
                height="480"
                loading="eager"
              />

              {/* Floating Glass Pill Overlay 1 */}
              <div 
                className="hero-floating-pill"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.82)',
                  backdropFilter: 'blur(24px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '8px 16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1D1D1F'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '999px', background: '#34C759' }} />
                <span>Forensic Integrity Protocol</span>
              </div>

              {/* Floating Glass Stat Overlay 2 */}
              <div 
                className="hero-floating-stat"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.86)',
                  backdropFilter: 'blur(28px) saturate(190%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(190%)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '16px 20px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 650, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#86868B' }}>
                    Advisory Discipline
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 650, color: '#1D1D1F' }}>
                    Uncompromising Factual Rigor
                  </div>
                </div>
                <div 
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '999px',
                    background: '#1D1D1F',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
