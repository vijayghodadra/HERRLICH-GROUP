import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowUpRight } from 'lucide-react';
import { mainNavItems, servicesDropdownItems } from '../data/navigation';
import logoImg from '../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div>
            <div className="brand-mark" style={{ marginBottom: '16px' }}>
              <img 
                src={logoImg} 
                alt="Herrlich Group" 
                style={{ height: '68px', width: 'auto', objectFit: 'contain', display: 'block' }} 
              />
            </div>

            <p style={{ fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.6, maxWidth: '320px', marginBottom: '20px' }}>
              Herrlich Group delivers institutional corporate intelligence, multi-jurisdictional due diligence, and fraud risk consulting for corporate leadership and audit committees.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#1D1D1F', fontWeight: 550 }}>
              <Lock size={14} color="#0071E3" />
              <span>Privileged & Strictly Confidential Practice</span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="footer-title">Practice Areas</h4>
            <ul className="footer-links">
              {servicesDropdownItems.map((s) => (
                <li key={s.name}>
                  <Link to={s.href} className="footer-link">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-title">Organization</h4>
            <ul className="footer-links">
              {mainNavItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  Privacy & Data Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Advisory Inquiries */}
          <div>
            <h4 className="footer-title">Consultation Channels</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: '#6E6E73' }}>
              <div>
                <div style={{ fontWeight: 600, color: '#1D1D1F', marginBottom: '2px' }}>Corporate Enquiries</div>
                <div>advisory@valence-risk.com</div>
              </div>
              <div style={{ marginTop: '6px' }}>
                <div style={{ fontWeight: 600, color: '#1D1D1F', marginBottom: '2px' }}>Operational Desks</div>
                <div>New Delhi • Mumbai • Bengaluru</div>
              </div>
              <div style={{ marginTop: '10px' }}>
                <Link 
                  to="/contact" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '4px', 
                    fontSize: '13px', 
                    fontWeight: 600, 
                    color: '#0071E3' 
                  }}
                >
                  <span>Transmit Confidential Scope</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Herrlich Group. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link to="/privacy-policy" className="footer-link" style={{ fontSize: '12.5px' }}>
              Privacy Statement
            </Link>
            <Link to="/privacy-policy#terms" className="footer-link" style={{ fontSize: '12.5px' }}>
              Terms of Engagement
            </Link>
            <span style={{ fontSize: '12px', color: '#86868B' }}>
              Institutional Forensic Standards
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
