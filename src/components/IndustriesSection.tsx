import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, 
  Server, 
  Factory, 
  Activity, 
  TrendingUp, 
  Scale, 
  ArrowRight,
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

export const IndustriesSection: React.FC = () => {
  return (
    <section className="section" id="industries" style={{ background: '#FFFFFF' }} aria-labelledby="industries-heading">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <Briefcase size={14} color="#0071E3" />
            <span>SECTOR SPECIALIZATION</span>
          </div>
          <h2 id="industries-heading" className="section-title">
            Sector-Specific Forensic Acumen.
          </h2>
          <p className="section-subtitle">
            Every market sector possesses distinct regulatory pressure points, financial flows, and threat vectors. We deploy tailored investigative frameworks calibrated to your industry.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid-3">
          {industriesData.map((ind) => {
            const Icon = industryIconMap[ind.iconName] || Briefcase;

            return (
              <div 
                key={ind.id}
                className="solid-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-primary)',
                  border: '1px solid rgba(0, 0, 0, 0.07)'
                }}
              >
                <div>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(0, 0, 0, 0.05)',
                      color: '#1D1D1F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 style={{ fontSize: '19px', fontWeight: 650, color: '#1D1D1F', marginBottom: '8px' }}>
                    {ind.title}
                  </h3>

                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#0071E3', marginBottom: '14px', lineHeight: 1.4 }}>
                    {ind.tagline}
                  </p>

                  <p style={{ fontSize: '14px', color: '#6E6E73', lineHeight: 1.55, marginBottom: '20px' }}>
                    {ind.description}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <Link 
                    to={`/industries#${ind.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: '#1D1D1F'
                    }}
                  >
                    <span>Industry Profile</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
