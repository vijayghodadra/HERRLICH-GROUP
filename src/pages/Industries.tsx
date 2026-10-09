import React, { useEffect } from 'react';
import { 
  Landmark, 
  Server, 
  Factory, 
  Activity, 
  TrendingUp, 
  Scale, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight,
  Briefcase
} from 'lucide-react';
import { industriesData } from '../data/industries';

const industryIconMap: Record<string, React.ElementType> = {
  Landmark,
  Server,
  Factory,
  Activity,
  TrendingUp,
  Scale,
};

interface IndustriesPageProps {
  onOpenConsultation?: () => void;
}

export const Industries: React.FC<IndustriesPageProps> = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'Industries We Serve | HERRLICH GROUP';
    window.scrollTo(0, 0);

    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow">
            <Briefcase size={14} color="#0071E3" />
            <span>INDUSTRY EXPERTISE</span>
          </div>
          <h1 className="section-title">
            Sector-Calibrated Forensic Intelligence.
          </h1>
          <p className="section-subtitle">
            Every industry presents a distinctive mosaic of fraud vectors, supply chain dependencies, and regulatory exposures. We bring domain-specific investigative depth to each sector.
          </p>
        </div>

        {/* Detailed Industry Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {industriesData.map((ind) => {
            const Icon = industryIconMap[ind.iconName] || Briefcase;

            return (
              <section 
                key={ind.id} 
                id={ind.id} 
                className="solid-card"
                style={{ 
                  padding: '44px 36px', 
                  background: '#FFFFFF',
                  borderRadius: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px', 
                      background: 'rgba(0, 0, 0, 0.05)',
                      color: '#1D1D1F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.02em' }}>
                      {ind.title}
                    </h2>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#0071E3' }}>
                      {ind.tagline}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '15.5px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '32px' }}>
                  {ind.description}
                </p>

                <div className="editorial-split" style={{ gap: '32px', marginBottom: '28px' }}>
                  {/* Challenges Box */}
                  <div style={{ background: 'var(--bg-primary)', borderRadius: '18px', padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                      <AlertCircle size={16} color="#FF3B30" />
                      <h3 style={{ fontSize: '13.5px', fontWeight: 700, color: '#1D1D1F', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Typical Vulnerabilities & Threat Vectors
                      </h3>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.keyChallenges.map((ch, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: '#48484A', display: 'flex', gap: '8px', lineHeight: 1.45 }}>
                          <span style={{ color: '#FF3B30', fontWeight: 700 }}>•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engagements Box */}
                  <div style={{ background: 'var(--bg-primary)', borderRadius: '18px', padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                      <CheckCircle2 size={16} color="#34C759" />
                      <h3 style={{ fontSize: '13.5px', fontWeight: 700, color: '#1D1D1F', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Representative Engagement Formats
                      </h3>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.engagementTypes.map((eng, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: '#48484A', display: 'flex', gap: '8px', lineHeight: 1.45 }}>
                          <span style={{ color: '#0071E3', fontWeight: 700 }}>•</span>
                          <span>{eng}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={onOpenConsultation}
                    style={{ fontSize: '13px', padding: '8px 18px' }}
                  >
                    <span>Request {ind.title} Briefing</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
