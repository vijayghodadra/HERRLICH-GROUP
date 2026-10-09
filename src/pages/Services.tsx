import React, { useEffect, useState } from 'react';
import { 
  ShieldAlert, 
  SearchCheck, 
  UserCheck, 
  AlertTriangle, 
  Compass, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight,
  FileText,
  Layers
} from 'lucide-react';
import { servicesData, type ServiceItem } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  SearchCheck,
  UserCheck,
  AlertTriangle,
  Compass,
  Cpu,
};

interface ServicesPageProps {
  onOpenConsultation?: () => void;
}

export const Services: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);

  useEffect(() => {
    document.title = 'Practice Areas & Services | HERRLICH GROUP';
    window.scrollTo(0, 0);

    // Check hash for specific service
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const match = servicesData.find(s => s.id === hash);
      if (match) setSelectedService(match);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow">
            <Layers size={14} color="#0071E3" />
            <span>PRACTICE AREAS</span>
          </div>
          <h1 className="section-title">
            Specialized Forensic & Advisory Services.
          </h1>
          <p className="section-subtitle">
            Rigorous factual intelligence and structured risk evaluations designed for corporate boards, general counsels, special investigation committees, and institutional investors.
          </p>
        </div>

        {/* Quick Nav / Jump Selector */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '8px', 
            overflowX: 'auto', 
            paddingBottom: '16px', 
            marginBottom: '48px',
            scrollbarWidth: 'none'
          }}
        >
          {servicesData.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setSelectedService(s);
                const el = document.getElementById(s.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13.5px',
                fontWeight: selectedService.id === s.id ? 600 : 500,
                background: selectedService.id === s.id ? '#1D1D1F' : '#FFFFFF',
                color: selectedService.id === s.id ? '#FFFFFF' : '#6E6E73',
                border: '1px solid',
                borderColor: selectedService.id === s.id ? '#1D1D1F' : 'rgba(0, 0, 0, 0.08)',
                whiteSpace: 'nowrap',
                transition: 'all 160ms ease',
                boxShadow: selectedService.id === s.id ? '0 4px 12px rgba(0,0,0,0.1)' : 'var(--shadow-sm)'
              }}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Full Service Breakdown List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || ShieldAlert;

            return (
              <section 
                key={service.id} 
                id={service.id} 
                className="solid-card"
                style={{ 
                  padding: '48px 40px', 
                  background: '#FFFFFF',
                  borderRadius: '24px'
                }}
              >
                <div className="editorial-split-wide">
                  {/* Left Column: Description & Capabilities */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div 
                        style={{ 
                          width: '44px', 
                          height: '44px', 
                          borderRadius: '12px', 
                          background: 'rgba(0, 0, 0, 0.04)',
                          color: '#1D1D1F',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <span style={{ fontSize: '11.5px', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0071E3' }}>
                          {service.category}
                        </span>
                        <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.02em' }}>
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p style={{ fontSize: '16px', color: '#1D1D1F', fontWeight: 500, lineHeight: 1.6, marginBottom: '16px' }}>
                      {service.shortDesc}
                    </p>

                    <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '28px' }}>
                      {service.fullDesc}
                    </p>

                    <div>
                      <h3 style={{ fontSize: '14.5px', fontWeight: 650, color: '#1D1D1F', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
                        Typical Engagement Capabilities:
                      </h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                        {service.keyCapabilities.map((cap, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <CheckCircle2 size={16} color="#0071E3" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span style={{ fontSize: '14px', color: '#48484A', lineHeight: 1.5 }}>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables Box & CTA */}
                  <div 
                    style={{ 
                      background: 'var(--bg-primary)', 
                      borderRadius: '20px', 
                      padding: '28px',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                        <FileText size={16} color="#1D1D1F" />
                        <h4 style={{ fontSize: '14.5px', fontWeight: 650, color: '#1D1D1F', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Client Deliverables
                        </h4>
                      </div>

                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} style={{ fontSize: '13px', color: '#48484A', display: 'flex', gap: '8px', lineHeight: 1.45 }}>
                            <span style={{ color: '#0071E3', fontWeight: 700 }}>•</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={onOpenConsultation}
                        style={{ width: '100%', fontSize: '13.5px' }}
                      >
                        <span>Discuss {service.title}</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
