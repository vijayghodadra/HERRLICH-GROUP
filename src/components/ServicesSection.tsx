import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  SearchCheck, 
  UserCheck, 
  AlertTriangle, 
  Compass, 
  Cpu, 
  ArrowRight, 
  Layers,
  ChevronRight
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

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService: _onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Forensic & Evidence', 'Strategic Transactions', 'Risk & Governance', 'Workplace & Talent'];

  const filteredServices = activeFilter === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category.includes(activeFilter) || activeFilter.includes(s.category));

  return (
    <section className="section section-lg" id="services" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <Layers size={14} color="#0071E3" />
            <span>PRACTICE CAPABILITIES</span>
          </div>
          <h2 id="services-heading" className="section-title">
            Forensic Depth. Strategic Direction.
          </h2>
          <p className="section-subtitle">
            Specialized investigative solutions tailored to protect enterprise integrity, satisfy compliance mandates, and empower informed commercial decisions.
          </p>

          {/* Interactive Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '8px', 
              marginTop: '28px' 
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '13px',
                  fontWeight: activeFilter === cat ? 600 : 500,
                  background: activeFilter === cat ? '#1D1D1F' : 'rgba(255, 255, 255, 0.8)',
                  color: activeFilter === cat ? '#FFFFFF' : '#6E6E73',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? '#1D1D1F' : 'rgba(0,0,0,0.08)',
                  transition: 'all 200ms ease',
                  boxShadow: activeFilter === cat ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid-3">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || ShieldAlert;

            return (
              <article 
                key={service.id} 
                className="service-card"
                id={service.id}
              >
                <div>
                  <div className="service-icon-box" aria-hidden="true">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868B', marginBottom: '8px' }}>
                    {service.category}
                  </div>

                  <h3 className="service-card-title">
                    {service.title}
                  </h3>

                  <p className="service-card-desc">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="service-card-footer">
                  <Link 
                    to={`/services#${service.id}`}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      color: '#1D1D1F',
                      fontSize: '13.5px',
                      fontWeight: 600
                    }}
                  >
                    <span>Detailed Scope</span>
                    <ChevronRight size={14} />
                  </Link>
                  <span style={{ fontSize: '12px', color: '#86868B' }}>
                    {service.deliverables.length} Deliverables
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/services" className="btn-secondary">
            <span>View Full Service Catalog & Methodologies</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
