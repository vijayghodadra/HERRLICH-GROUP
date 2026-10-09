export interface IndustryItem {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  keyChallenges: string[];
  engagementTypes: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: 'financial-services',
    title: 'Banking & Financial Services',
    iconName: 'Landmark',
    tagline: 'Capital preservation and strict anti-financial crime safeguards.',
    description: 'Financial institutions operate under intensifying scrutiny from central banks and enforcement authorities. We deliver forensic support for NPA accounts, borrower due diligence, trade finance verification, and AML compliance audits.',
    keyChallenges: [
      'Wilful defaulter asset obfuscation',
      'Complex layered trade finance discrepancies',
      'Fintech vendor data integrity & insider threats',
      'Regulatory compliance under PMLA and international AML directives'
    ],
    engagementTypes: [
      'Borrower entity forensic reviews',
      'Anti-Money Laundering diagnostic stress testing',
      'Pre-sanction high-value credit investigations',
      'Digital payment leak inquiries'
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Digital Platforms',
    iconName: 'Server',
    tagline: 'Safeguarding proprietary intellectual property and platform governance.',
    description: 'High-growth technology companies face rapid workforce expansion, proprietary source-code leak risks, and intricate third-party contractor networks. Our advisory safeguards trade secrets and verifies cross-border development partner integrity.',
    keyChallenges: [
      'Unauthorized extraction of source code and proprietary algorithms',
      'Ghost developer billing and offshore contractor fraud',
      'Cryptocurrency and digital asset movement tracing',
      'Platform abuse, syndication rings, and identity spoofing'
    ],
    engagementTypes: [
      'Digital artifact and code repository forensics',
      'Offshore vendor integrity audits',
      'Key engineering hire deep-vetting',
      'Cryptographic transaction tracing'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Infrastructure',
    iconName: 'Factory',
    tagline: 'Securing multi-tier supply chains, raw material logistics, and plant integrity.',
    description: 'Industrial enterprises maintain sprawling procurement operations vulnerable to scrap diversion, supplier cartels, kickback arrangements, and warranty counterfeiting.',
    keyChallenges: [
      'Vendor collusion and rigged bid submissions',
      'Theft and diversion of raw material in transit',
      'Spurious and substandard parts in the replacement supply chain',
      'Channel partner margin siphon schemes'
    ],
    engagementTypes: [
      'Procure-to-pay forensic audits',
      'Field surveillance and logistics monitoring',
      'Grey market and counterfeit product tracking',
      'Factory floor security and inventory audit'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    iconName: 'Activity',
    tagline: 'Regulatory defensibility, distributor ethics, and clinical compliance.',
    description: 'Pharmaceutical, medical device, and healthcare provider organizations require adherence to anti-bribery standards, distributor oversight, and protection against counterfeit therapeutics.',
    keyChallenges: [
      'Distributor marketing practice compliance (UCPMP / FCPA)',
      'Clinical trial data validation and ethical protocol adherence',
      'Spurious pharmaceutical products in downstream distribution',
      'Billing anomalies and insurance third-party administrator fraud'
    ],
    engagementTypes: [
      'Distributor and marketing spend audits',
      'Supply chain authenticity testing',
      'Healthcare provider conflict-of-interest reviews',
      'Whistleblower triage on regulatory disclosures'
    ]
  },
  {
    id: 'private-equity',
    title: 'Private Equity & Venture Capital',
    iconName: 'TrendingUp',
    tagline: 'Pre-investment clarity and portfolio company governance oversight.',
    description: 'Investment committees need unvarnished ground intelligence on founder track records, real revenue generation vs fictitious customer bookings, and post-investment governance hygiene.',
    keyChallenges: [
      'Fictitious revenue inflation and related-party round-tripping',
      'Founder track record omissions and prior undisclosed litigations',
      'Channel stuffing prior to funding milestones',
      'Portfolio company key employee integrity'
    ],
    engagementTypes: [
      'Pre-term sheet founder reputation profiling',
      'Customer and distributor channel reference audits',
      'Post-acquisition board governance audits',
      'Special situations dispute investigations'
    ]
  },
  {
    id: 'professional-services',
    title: 'Legal & Professional Services',
    iconName: 'Scale',
    tagline: 'Litigation support, independent expert fact-finding, and arbitration research.',
    description: 'Partnering with general counsels and dispute resolution law firms to establish lawful, documented evidence for courtroom proceedings and international arbitration tribunals.',
    keyChallenges: [
      'Gathering court-admissible electronic and physical evidence',
      'Locating hidden counterparty assets in cross-border enforcement',
      'Witness identification and credibility vetting',
      'Maintaining unbroken chain of custody'
    ],
    engagementTypes: [
      'Commercial litigation intelligence dossiers',
      'International arbitration enforcement support',
      'Independent expert witness evidence preparation',
      'Anti-counterfeiting enforcement logistics'
    ]
  }
];
