export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  keyCapabilities: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'corporate-investigations',
    title: 'Corporate Investigations',
    category: 'Forensic & Evidence',
    shortDesc: 'Objective, evidence-based inquiry into suspected irregularities, conflicts of interest, and breach of trust.',
    fullDesc: 'When internal anomalies or allegations emerge, institutional leaders require rigorous fact-finding conducted with total discretion. Our investigative methodologies assemble evidentiary trails, interview witnesses, analyze electronic records, and deliver verified findings.',
    iconName: 'ShieldAlert',
    deliverables: [
      'Comprehensive factual investigation report',
      'Chain-of-custody evidentiary dossier',
      'Root-cause analysis and operational vulnerability audit',
      'Executive briefing and litigation-ready documentation'
    ],
    keyCapabilities: [
      'Procurement and tender irregularity reviews',
      'Management collusion and conflict-of-interest probes',
      'Theft of intellectual property and trade secrets',
      'Executive misconduct and policy violation inquiries'
    ]
  },
  {
    id: 'due-diligence',
    title: 'Forensic Due Diligence',
    category: 'Strategic Transactions',
    shortDesc: 'Multi-jurisdictional intelligence on commercial partners, acquisition targets, and executive leadership.',
    fullDesc: 'Going beyond standard balance-sheet audits, our investigative due diligence evaluates undisclosed liabilities, beneficial ownership structures, regulatory enforcement history, and adverse reputational affiliations.',
    iconName: 'SearchCheck',
    deliverables: [
      'Pre-transaction integrity & background dossier',
      'Ultimate beneficial ownership (UBO) trace',
      'Adverse regulatory & legal litigation matrix',
      'Reputational risk heat-map across market stakeholders'
    ],
    keyCapabilities: [
      'Cross-border corporate structure mapping',
      'Political exposure (PEP) & sanctions compliance checks',
      'Joint venture partner integrity screening',
      'Vendor and supplier network verification'
    ]
  },
  {
    id: 'background-verification',
    title: 'Background Verification',
    category: 'Workplace & Talent',
    shortDesc: 'Thorough screening for key appointments, board members, and mission-critical personnel.',
    fullDesc: 'Senior leadership appointments carry existential reputational stakes. We provide ethical, compliant, and multi-layered verification of executive histories, academic credentials, professional standing, and public domain records.',
    iconName: 'UserCheck',
    deliverables: [
      'Confidential executive credential audit',
      'Direct primary-source qualification confirmation',
      'Directorship and external business interest declaration check',
      'Criminal and civil litigation docket search'
    ],
    keyCapabilities: [
      'C-Suite & Non-Executive Director vetting',
      'Key managerial personnel (KMP) integrity audits',
      'High-security clearance personnel screening',
      'Pre-merger key talent retention assessments'
    ]
  },
  {
    id: 'fraud-risk',
    title: 'Fraud Risk Assessment',
    category: 'Risk & Governance',
    shortDesc: 'Proactive diagnostic assessments to identify internal control gaps before financial exposure occurs.',
    fullDesc: 'An institutional evaluation of your operational and financial architecture to identify points of exposure to misappropriation, kickbacks, supply-chain leakage, and falsified reporting.',
    iconName: 'AlertTriangle',
    deliverables: [
      'Enterprise fraud risk diagnostic matrix',
      'Internal control weakness remediation plan',
      'Anti-fraud policy framework enhancements',
      'Whistleblower triage protocol design'
    ],
    keyCapabilities: [
      'Procure-to-pay leak analysis',
      'Inventory and logistical diversion mapping',
      'Financial statement manipulation risk testing',
      'Third-party intermediary monitoring framework'
    ]
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Asset Tracing',
    category: 'Strategic Advisory',
    shortDesc: 'Discreet market intelligence and asset location to support dispute resolution and strategic positioning.',
    fullDesc: 'Supporting complex commercial disputes, enforcement of arbitration awards, and strategic decision-making with lawful, defensible open-source intelligence and public registry tracing across international jurisdictions.',
    iconName: 'Compass',
    deliverables: [
      'Asset identification and encumbrance profile',
      'Corporate registry and shareholding trajectory map',
      'Jurisdictional asset recoverability assessment',
      'Competitive intelligence briefing'
    ],
    keyCapabilities: [
      'Commercial arbitration award enforcement research',
      'Debtor asset profiling and entity linking',
      'Market entry risk analysis in high-scrutiny regions',
      'Counterparty supply chain dependency mapping'
    ]
  },
  {
    id: 'risk-advisory',
    title: 'Risk Advisory & Digital Forensics',
    category: 'Digital & Compliance',
    shortDesc: 'Forensic data preservation, crisis response, and regulatory compliance advisory.',
    fullDesc: 'From preserving court-admissible digital evidence following a data incident to structuring defensible compliance regimes, our team bridges technical forensics with senior board advisory.',
    iconName: 'Cpu',
    deliverables: [
      'Forensic imaging and digital timeline reconstruction',
      'Regulatory compliance audit and gap analysis',
      'Incident containment and board reporting package',
      'Internal investigation policy blueprint'
    ],
    keyCapabilities: [
      'Data breach and unauthorized access fact-finding',
      'Forensic email and file system artifact extraction',
      'Regulatory remediation (Anti-Bribery / FCPA / PMLA)',
      'Independent ethics hotline governance'
    ]
  }
];
