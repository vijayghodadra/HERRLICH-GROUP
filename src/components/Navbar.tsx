import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowUpRight, 
  Search, 
  FileCheck, 
  ShieldAlert, 
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { mainNavItems, servicesDropdownItems } from '../data/navigation';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  onOpenConsultation?: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change or outside click
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`glass-navbar-wrapper ${scrolled ? 'scrolled' : 'unscrolled'}`} role="banner">
      <nav 
        className={`glass-navbar ${scrolled ? 'scrolled' : 'unscrolled'}`}
        aria-label="Main Navigation"
      >
        {/* Apple iOS Liquid Glass Substrate & Refraction Layers */}
        <div className="liquid-glass-substrate" aria-hidden="true" />

        {/* Brand Logo / Mark */}
        <Link 
          to="/" 
          className="brand-mark" 
          aria-label="Herrlich Group Homepage"
        >
          <img 
            src={logoImg} 
            alt="Herrlich Group - Uncovering Truths. Ensuring Justice" 
            className="brand-logo-img"
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <ul className="nav-links" role="menubar">
          {mainNavItems.map((item) => {
            if (item.name === 'Services') {
              return (
                <li 
                  key={item.name} 
                  className="nav-item" 
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    id="services-menu-button"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={14} 
                      style={{ 
                        transition: 'transform 200ms ease',
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                      }} 
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div 
                    className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
                    role="menu"
                    aria-labelledby="services-menu-button"
                  >
                    <div style={{ padding: '6px 8px 10px', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '6px' }}>
                      <Link 
                        to="/services" 
                        className="dropdown-item-title" 
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#1D1D1F' }}
                      >
                        <span>All Capabilities & Services</span>
                        <ArrowUpRight size={13} color="var(--text-secondary)" />
                      </Link>
                    </div>

                    {servicesDropdownItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="dropdown-item"
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div style={{ marginTop: '2px', color: 'var(--text-secondary)' }}>
                          {subItem.name.includes('Investigations') && <ShieldAlert size={15} />}
                          {subItem.name.includes('Due Diligence') && <Search size={15} />}
                          {subItem.name.includes('Background') && <FileCheck size={15} />}
                          {subItem.name.includes('Fraud') && <AlertCircle size={15} />}
                          {subItem.name.includes('Intelligence') && <Briefcase size={15} />}
                          {subItem.name.includes('Risk') && <Shield size={15} />}
                        </div>
                        <div>
                          <div className="dropdown-item-title">{subItem.name}</div>
                          <div className="dropdown-item-desc">{subItem.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </li>
              );
            }

            const isActive = location.pathname === item.href;
            return (
              <li key={item.name} className="nav-item" role="none">
                <Link
                  to={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            className="btn-primary desktop-cta"
            onClick={onOpenConsultation}
            style={{ padding: '8px 18px', fontSize: '13.5px' }}
          >
            <span>Request Consultation</span>
            <ArrowUpRight size={14} />
          </button>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};
