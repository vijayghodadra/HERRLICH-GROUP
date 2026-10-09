import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShieldCheck, Briefcase, MessageSquare } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const location = useLocation();

  const tabs = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: ShieldCheck },
    { name: 'Industries', href: '/industries', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  return (
    <nav className="mobile-dock" aria-label="Quick Access Dock">
      <div className="mobile-dock-inner">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.href === '/' 
            ? location.pathname === '/' 
            : location.pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.name}
              to={tab.href}
              className={`mobile-dock-btn ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: isActive ? '#0071E3' : '#6E6E73',
                  transition: 'color 150ms ease'
                }}
              >
                <Icon size={19} strokeWidth={isActive ? 2.3 : 1.9} />
              </div>
              <span style={{ fontSize: '10.5px' }}>{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
