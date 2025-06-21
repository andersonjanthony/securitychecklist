export interface ChecklistItemData {
  id: string;
  section: string;
  subsection: string;
  title: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
}

export const checklistData: ChecklistItemData[] = [
  // Section 1: User Authentication & Access Control
  {
    id: 'auth-1',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Enable MFA for all administrator accounts without exception',
    priority: 'critical'
  },
  {
    id: 'auth-2',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Configure MFA at the permission set level rather than profile level for granular control',
    priority: 'critical'
  },
  {
    id: 'auth-3',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Set up MFA exemptions only for service accounts with documented business justification',
    priority: 'medium'
  },
  {
    id: 'auth-4',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Enable "Require MFA for API logins" for all users handling sensitive data',
    priority: 'medium'
  },
  {
    id: 'auth-5',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Configure backup verification methods (SMS, email) for MFA recovery scenarios',
    priority: 'low'
  },
  {
    id: 'auth-6',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Set minimum password length to 12 characters (Setup → Security → Password Policies)',
    priority: 'high'
  },
  {
    id: 'auth-7',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Enable password complexity requirements including numbers, letters, and special characters',
    priority: 'medium'
  },
  {
    id: 'auth-8',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Configure password expiration to 90 days for privileged users',
    priority: 'medium'
  },
  {
    id: 'auth-9',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Enable password history to prevent reuse of last 12 passwords',
    priority: 'medium'
  },
  {
    id: 'auth-10',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Set account lockout after 5 failed login attempts with 30-minute lockout duration',
    priority: 'medium'
  },
  {
    id: 'auth-11',
    section: 'User Authentication & Access Control',
    subsection: 'Single Sign-On (SSO)',
    title: 'Implement SAML-based SSO with your corporate identity provider',
    priority: 'medium'
  },
  {
    id: 'auth-12',
    section: 'User Authentication & Access Control',
    subsection: 'Single Sign-On (SSO)',
    title: 'Configure Just-In-Time (JIT) provisioning for automated user creation',
    priority: 'medium'
  },
  {
    id: 'auth-13',
    section: 'User Authentication & Access Control',
    subsection: 'Single Sign-On (SSO)',
    title: 'Set up SSO error handling and fallback authentication methods',
    priority: 'medium'
  },
  {
    id: 'auth-14',
    section: 'User Authentication & Access Control',
    subsection: 'Single Sign-On (SSO)',
    title: 'Enable "Prevent login from login.salesforce.com" to enforce SSO usage',
    priority: 'low'
  },
  {
    id: 'auth-15',
    section: 'User Authentication & Access Control',
    subsection: 'Single Sign-On (SSO)',
    title: 'Configure SSO certificate rotation procedures and expiration monitoring',
    priority: 'low'
  },
  {
    id: 'auth-16',
    section: 'User Authentication & Access Control',
    subsection: 'Login Access Policies',
    title: 'Restrict login hours for non-critical users to business hours only',
    priority: 'critical'
  },
  {
    id: 'auth-17',
    section: 'User Authentication & Access Control',
    subsection: 'Login Access Policies',
    title: 'Configure IP range restrictions for all user profiles (trusted IP ranges only)',
    priority: 'critical'
  },
  {
    id: 'auth-18',
    section: 'User Authentication & Access Control',
    subsection: 'Login Access Policies',
    title: 'Enable "Login IP Ranges" enforcement on all profiles handling sensitive data',
    priority: 'medium'
  },
  {
    id: 'auth-19',
    section: 'User Authentication & Access Control',
    subsection: 'Login Access Policies',
    title: 'Set up login forensics monitoring for suspicious authentication patterns',
    priority: 'medium'
  },
  {
    id: 'auth-20',
    section: 'User Authentication & Access Control',
    subsection: 'Login Access Policies',
    title: 'Configure device activation requirements for new device logins',
    priority: 'low'
  },
  // Section 2: Permission Sets & Access Management
  {
    id: 'perm-1',
    section: 'Permission Sets & Access Management',
    subsection: 'Permission Set Architecture',
    title: 'Create baseline permission sets for each major role (Sales, Service, Marketing)',
    priority: 'critical'
  },
  {
    id: 'perm-2',
    section: 'Permission Sets & Access Management',
    subsection: 'Permission Set Architecture',
    title: 'Implement permission set groups for role combinations instead of individual assignments',
    priority: 'critical'
  },
  {
    id: 'perm-3',
    section: 'Permission Sets & Access Management',
    subsection: 'Permission Set Architecture',
    title: 'Document all permission sets with clear naming conventions and descriptions',
    priority: 'medium'
  },
  {
    id: 'perm-4',
    section: 'Permission Sets & Access Management',
    subsection: 'Permission Set Architecture',
    title: 'Remove all permissions from base profiles (minimal access principle)',
    priority: 'medium'
  },
  {
    id: 'perm-5',
    section: 'Permission Sets & Access Management',
    subsection: 'Permission Set Architecture',
    title: 'Create separate permission sets for temporary elevated access with expiration dates',
    priority: 'medium'
  },
  {
    id: 'perm-6',
    section: 'Permission Sets & Access Management',
    subsection: 'Administrative Access Control',
    title: 'Limit "Modify All Data" permission to absolute minimum users (ideally < 3)',
    priority: 'critical'
  },
  {
    id: 'perm-7',
    section: 'Permission Sets & Access Management',
    subsection: 'Administrative Access Control',
    title: 'Restrict "View All Data" permission to authorized personnel only',
    priority: 'critical'
  },
  {
    id: 'perm-8',
    section: 'Permission Sets & Access Management',
    subsection: 'Administrative Access Control',
    title: 'Remove "Manage Users" permission from non-administrative roles',
    priority: 'high'
  },
  {
    id: 'perm-9',
    section: 'Permission Sets & Access Management',
    subsection: 'Administrative Access Control',
    title: 'Disable "API Enabled" permission for users who don\'t require programmatic access',
    priority: 'medium'
  },
  {
    id: 'perm-10',
    section: 'Permission Sets & Access Management',
    subsection: 'Administrative Access Control',
    title: 'Implement separate permission sets for production vs sandbox access',
    priority: 'medium'
  },
  {
    id: 'perm-11',
    section: 'Permission Sets & Access Management',
    subsection: 'Field-Level Security',
    title: 'Implement field-level security for all sensitive data fields (PII, financial data)',
    priority: 'high'
  },
  {
    id: 'perm-12',
    section: 'Permission Sets & Access Management',
    subsection: 'Field-Level Security',
    title: 'Review and remove unnecessary field permissions from all profiles',
    priority: 'medium'
  },
  {
    id: 'perm-13',
    section: 'Permission Sets & Access Management',
    subsection: 'Field-Level Security',
    title: 'Set up automated field security audits and reporting',
    priority: 'medium'
  },
  {
    id: 'perm-14',
    section: 'Permission Sets & Access Management',
    subsection: 'Field-Level Security',
    title: 'Document field security decisions and business justifications',
    priority: 'low'
  },
  {
    id: 'perm-15',
    section: 'Permission Sets & Access Management',
    subsection: 'Field-Level Security',
    title: 'Implement field history tracking for audit-critical fields',
    priority: 'low'
  },
  {
    id: 'perm-16',
    section: 'Permission Sets & Access Management',
    subsection: 'Object-Level Security',
    title: 'Configure CRUD permissions appropriately for each user role',
    priority: 'medium'
  },
  {
    id: 'perm-17',
    section: 'Permission Sets & Access Management',
    subsection: 'Object-Level Security',
    title: 'Implement sharing rules for sensitive objects requiring additional access control',
    priority: 'medium'
  },
  {
    id: 'perm-18',
    section: 'Permission Sets & Access Management',
    subsection: 'Object-Level Security',
    title: 'Review and minimize object permissions regularly (quarterly reviews)',
    priority: 'medium'
  },
  {
    id: 'perm-19',
    section: 'Permission Sets & Access Management',
    subsection: 'Object-Level Security',
    title: 'Set up object-level access monitoring and alerting',
    priority: 'low'
  },
  {
    id: 'perm-20',
    section: 'Permission Sets & Access Management',
    subsection: 'Object-Level Security',
    title: 'Document object access patterns and security requirements',
    priority: 'low'
  },
  // Additional sections - Data Security & Encryption
  {
    id: 'data-1',
    section: 'Data Security & Encryption',
    subsection: 'Platform Encryption',
    title: 'Enable Platform Encryption for all sensitive data fields',
    priority: 'critical'
  },
  {
    id: 'data-2',
    section: 'Data Security & Encryption',
    subsection: 'Platform Encryption',
    title: 'Implement key rotation policies for encryption keys',
    priority: 'high'
  },
  {
    id: 'data-3',
    section: 'Data Security & Encryption',
    subsection: 'Platform Encryption',
    title: 'Configure encryption for attachments and files',
    priority: 'high'
  },
  {
    id: 'data-4',
    section: 'Data Security & Encryption',
    subsection: 'Platform Encryption',
    title: 'Set up HSM-based key management for enhanced security',
    priority: 'medium'
  },
  {
    id: 'data-5',
    section: 'Data Security & Encryption',
    subsection: 'Platform Encryption',
    title: 'Document encryption key management procedures',
    priority: 'medium'
  },
  {
    id: 'data-6',
    section: 'Data Security & Encryption',
    subsection: 'Data Classification',
    title: 'Implement data classification labels for all sensitive information',
    priority: 'high'
  },
  {
    id: 'data-7',
    section: 'Data Security & Encryption',
    subsection: 'Data Classification',
    title: 'Create data handling policies based on classification levels',
    priority: 'medium'
  },
  {
    id: 'data-8',
    section: 'Data Security & Encryption',
    subsection: 'Data Classification',
    title: 'Train users on data classification requirements',
    priority: 'medium'
  },
  {
    id: 'data-9',
    section: 'Data Security & Encryption',
    subsection: 'Data Classification',
    title: 'Set up automated data classification scanning',
    priority: 'low'
  },
  {
    id: 'data-10',
    section: 'Data Security & Encryption',
    subsection: 'Data Classification',
    title: 'Regular review and update of classification policies',
    priority: 'low'
  },
  {
    id: 'data-11',
    section: 'Data Security & Encryption',
    subsection: 'Data Loss Prevention',
    title: 'Configure Shield Platform Encryption for PII fields',
    priority: 'critical'
  },
  {
    id: 'data-12',
    section: 'Data Security & Encryption',
    subsection: 'Data Loss Prevention',
    title: 'Set up data export monitoring and restrictions',
    priority: 'high'
  },
  {
    id: 'data-13',
    section: 'Data Security & Encryption',
    subsection: 'Data Loss Prevention',
    title: 'Implement email security and attachment restrictions',
    priority: 'medium'
  },
  {
    id: 'data-14',
    section: 'Data Security & Encryption',
    subsection: 'Data Loss Prevention',
    title: 'Configure print and download restrictions for sensitive data',
    priority: 'medium'
  },
  {
    id: 'data-15',
    section: 'Data Security & Encryption',
    subsection: 'Data Loss Prevention',
    title: 'Set up alerts for unusual data access patterns',
    priority: 'medium'
  },
  {
    id: 'data-16',
    section: 'Data Security & Encryption',
    subsection: 'Backup & Recovery',
    title: 'Implement automated daily data backups',
    priority: 'high'
  },
  {
    id: 'data-17',
    section: 'Data Security & Encryption',
    subsection: 'Backup & Recovery',
    title: 'Test backup restoration procedures quarterly',
    priority: 'high'
  },
  {
    id: 'data-18',
    section: 'Data Security & Encryption',
    subsection: 'Backup & Recovery',
    title: 'Configure metadata backup and version control',
    priority: 'medium'
  },
  {
    id: 'data-19',
    section: 'Data Security & Encryption',
    subsection: 'Backup & Recovery',
    title: 'Document disaster recovery procedures',
    priority: 'medium'
  },
  {
    id: 'data-20',
    section: 'Data Security & Encryption',
    subsection: 'Backup & Recovery',
    title: 'Set up cross-region backup replication',
    priority: 'low'
  },
  // Network & Session Security
  {
    id: 'network-1',
    section: 'Network & Session Security',
    subsection: 'Session Management',
    title: 'Configure session timeout policies for different user types',
    priority: 'high'
  },
  {
    id: 'network-2',
    section: 'Network & Session Security',
    subsection: 'Session Management',
    title: 'Enable session security settings (Lock sessions to IP, Require HTTPS)',
    priority: 'high'
  },
  {
    id: 'network-3',
    section: 'Network & Session Security',
    subsection: 'Session Management',
    title: 'Implement concurrent session limits per user',
    priority: 'medium'
  },
  {
    id: 'network-4',
    section: 'Network & Session Security',
    subsection: 'Session Management',
    title: 'Configure session invalidation on browser close',
    priority: 'medium'
  },
  {
    id: 'network-5',
    section: 'Network & Session Security',
    subsession: 'Session Management',
    title: 'Set up session monitoring and anomaly detection',
    priority: 'low'
  },
  {
    id: 'network-6',
    section: 'Network & Session Security',
    subsection: 'Network Access',
    title: 'Implement IP allowlisting for all production environments',
    priority: 'critical'
  },
  {
    id: 'network-7',
    section: 'Network & Session Security',
    subsection: 'Network Access',
    title: 'Configure VPN requirements for remote access',
    priority: 'high'
  },
  {
    id: 'network-8',
    section: 'Network & Session Security',
    subsection: 'Network Access',
    title: 'Set up network-based conditional access policies',
    priority: 'medium'
  },
  {
    id: 'network-9',
    section: 'Network & Session Security',
    subsection: 'Network Access',
    title: 'Monitor and log all network access attempts',
    priority: 'medium'
  },
  {
    id: 'network-10',
    section: 'Network & Session Security',
    subsection: 'Network Access',
    title: 'Implement geo-blocking for high-risk regions',
    priority: 'low'
  },
  {
    id: 'network-11',
    section: 'Network & Session Security',
    subsection: 'API Security',
    title: 'Secure all API endpoints with proper authentication',
    priority: 'critical'
  },
  {
    id: 'network-12',
    section: 'Network & Session Security',
    subsection: 'API Security',
    title: 'Implement API rate limiting and throttling',
    priority: 'high'
  },
  {
    id: 'network-13',
    section: 'Network & Session Security',
    subsection: 'API Security',
    title: 'Configure API access logging and monitoring',
    priority: 'high'
  },
  {
    id: 'network-14',
    section: 'Network & Session Security',
    subsection: 'API Security',
    title: 'Use OAuth 2.0 for third-party API integrations',
    priority: 'medium'
  },
  {
    id: 'network-15',
    section: 'Network & Session Security',
    subsection: 'API Security',
    title: 'Regular API security testing and vulnerability assessments',
    priority: 'medium'
  },
  {
    id: 'network-16',
    section: 'Network & Session Security',
    subsection: 'HTTPS & Certificates',
    title: 'Enforce HTTPS for all Salesforce communications',
    priority: 'critical'
  },
  {
    id: 'network-17',
    section: 'Network & Session Security',
    subsection: 'HTTPS & Certificates',
    title: 'Configure SSL certificate monitoring and renewal alerts',
    priority: 'high'
  },
  {
    id: 'network-18',
    section: 'Network & Session Security',
    subsection: 'HTTPS & Certificates',
    title: 'Implement HSTS (HTTP Strict Transport Security)',
    priority: 'medium'
  },
  {
    id: 'network-19',
    section: 'Network & Session Security',
    subsection: 'HTTPS & Certificates',
    title: 'Use strong cipher suites and disable weak protocols',
    priority: 'medium'
  },
  {
    id: 'network-20',
    section: 'Network & Session Security',
    subsection: 'HTTPS & Certificates',
    title: 'Regular SSL/TLS configuration security assessments',
    priority: 'low'
  }
];

export const getSectionItems = (sectionName: string) => {
  return checklistData.filter(item => item.section === sectionName);
};

export const getSubsectionItems = (sectionName: string, subsectionName: string) => {
  return checklistData.filter(item => 
    item.section === sectionName && item.subsection === subsectionName
  );
};

export const getAllSections = () => {
  return [...new Set(checklistData.map(item => item.section))];
};

export const getSubsections = (sectionName: string) => {
  return [...new Set(checklistData
    .filter(item => item.section === sectionName)
    .map(item => item.subsection)
  )];
};
