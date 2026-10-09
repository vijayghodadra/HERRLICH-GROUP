export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
}

export const mainNavItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

export const servicesDropdownItems: NavItem[] = [
  {
    name: 'Corporate Investigations',
    href: '/services#corporate-investigations',
    description: 'Discreet fact-finding, internal irregularities, and asset tracing.',
  },
  {
    name: 'Forensic Due Diligence',
    href: '/services#due-diligence',
    description: 'Pre-M&A intelligence, vendor integrity, and reputational audits.',
  },
  {
    name: 'Fraud Risk Assessment',
    href: '/services#fraud-risk',
    description: 'Vulnerability mapping, control evaluations, and compliance stress tests.',
  },
  {
    name: 'Background Verification',
    href: '/services#background-verification',
    description: 'Executive screening, credentials validation, and workplace checks.',
  },
  {
    name: 'Business Intelligence',
    href: '/services#business-intelligence',
    description: 'Competitor footprint, supply-chain risks, and market integrity data.',
  },
  {
    name: 'Risk Advisory',
    href: '/services#risk-advisory',
    description: 'Crisis governance, whistleblowing protocols, and remediation.',
  },
];
