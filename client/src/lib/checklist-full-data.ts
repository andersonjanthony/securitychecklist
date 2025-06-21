export interface ChecklistItemData {
  id: string;
  section: string;
  subsection: string;
  title: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  instructions: string;
  references: string[];
}

export const checklistData: ChecklistItemData[] = [
  // Section 1: User Authentication & Access Control
  {
    id: 'auth-1',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Enable MFA for all administrator accounts without exception',
    priority: 'critical',
    instructions: '1. Navigate to Setup → Security → Multi-Factor Authentication\n2. Enable "Require MFA for all system administrators"\n3. Go to User Management → Users\n4. For each admin user, edit their profile\n5. Check "Multi-Factor Authentication for User Interface Logins"\n6. Verify MFA is working by having each admin log out and back in',
    references: [
      'Salesforce Help: Multi-Factor Authentication',
      'Trailhead: Multi-Factor Authentication Basics',
      'Security Implementation Guide Chapter 3'
    ]
  },
  {
    id: 'auth-2',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Configure MFA at the permission set level rather than profile level for granular control',
    priority: 'critical',
    instructions: '1. Go to Setup → Permission Sets\n2. Create new permission set for MFA users\n3. Enable "Multi-Factor Authentication for User Interface Logins"\n4. Assign this permission set to specific users\n5. Remove MFA requirements from profiles\n6. Test login with assigned users',
    references: [
      'Salesforce Help: Permission Sets and MFA',
      'Best Practices: Granular Security Controls'
    ]
  },
  {
    id: 'auth-3',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Set up MFA exemptions only for service accounts with documented business justification',
    priority: 'medium',
    instructions: '1. Document business justification for each service account\n2. Create a dedicated profile for service accounts\n3. Disable MFA requirements on service account profile\n4. Monitor service account login activities\n5. Review exemptions quarterly\n6. Maintain exemption documentation',
    references: [
      'Service Account Security Guidelines',
      'Compliance Documentation Standards'
    ]
  },
  {
    id: 'auth-4',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Enable "Require MFA for API logins" for all users handling sensitive data',
    priority: 'medium',
    instructions: '1. Go to Setup → Security → Session Settings\n2. Enable "Require MFA for API logins"\n3. Create permission set for sensitive data handlers\n4. Apply this setting to relevant user profiles\n5. Update API integration documentation\n6. Test API connections after implementation',
    references: [
      'API Security Best Practices',
      'Salesforce Session Management Guide'
    ]
  },
  {
    id: 'auth-5',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Configure backup verification methods (SMS, email) for MFA recovery scenarios',
    priority: 'low',
    instructions: '1. Navigate to Setup → Security → Multi-Factor Authentication\n2. Enable backup verification methods\n3. Configure SMS settings with valid phone numbers\n4. Set up email verification as secondary backup\n5. Test recovery scenarios with test users\n6. Document recovery procedures for help desk',
    references: [
      'MFA Recovery Procedures',
      'Help Desk Security Protocols'
    ]
  },

  // Password Policies
  {
    id: 'auth-6',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Set minimum password length to 12 characters (Setup → Security → Password Policies)',
    priority: 'high',
    instructions: '1. Navigate to Setup → Security → Password Policies\n2. Set "Minimum password length" to 12 characters\n3. Click Save\n4. Notify all users of the new requirement\n5. Plan grace period for existing users\n6. Monitor compliance through login reports',
    references: [
      'NIST Password Guidelines 2023',
      'Salesforce Password Policy Configuration'
    ]
  },
  {
    id: 'auth-7',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Enable password complexity requirements including numbers, letters, and special characters',
    priority: 'medium',
    instructions: '1. Go to Setup → Security → Password Policies\n2. Set "Password complexity requirement" to "Must mix alpha and numeric"\n3. Enable "Must contain special character"\n4. Check "Cannot contain username"\n5. Save settings\n6. Communicate changes to users before enforcement',
    references: [
      'Password Complexity Standards',
      'User Security Training Materials'
    ]
  },
  {
    id: 'auth-8',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Configure password expiration to 90 days for privileged users',
    priority: 'medium',
    instructions: '1. Create separate profile for privileged users\n2. Set "Password expires in" to 90 days for this profile\n3. Assign privileged users to this profile\n4. Set up automated password expiration notifications\n5. Create password reset procedures\n6. Monitor compliance through user management reports',
    references: [
      'Privileged Account Management',
      'Compliance Password Requirements'
    ]
  },
  {
    id: 'auth-9',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Enable password history to prevent reuse of last 12 passwords',
    priority: 'medium',
    instructions: '1. Navigate to Setup → Security → Password Policies\n2. Set "Enforce password history" to 12 passwords remembered\n3. Save the configuration\n4. Test with a test user account\n5. Document the policy in security procedures\n6. Train help desk on password history requirements',
    references: [
      'Password History Best Practices',
      'Security Policy Documentation'
    ]
  },
  {
    id: 'auth-10',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Set account lockout after 5 failed login attempts with 30-minute lockout duration',
    priority: 'medium',
    instructions: '1. Go to Setup → Security → Password Policies\n2. Set "Maximum invalid login attempts" to 5\n3. Set "Lockout effective period" to 30 minutes\n4. Enable "Lockout effective period" checkbox\n5. Save settings\n6. Create account unlock procedures for administrators',
    references: [
      'Account Lockout Policies',
      'Administrator Unlock Procedures'
    ]
  },

  // Continue with remaining sections...
  // Section 6: Monitoring & Compliance
  {
    id: 'monitor-1',
    section: 'Monitoring & Compliance',
    subsection: 'Audit Trail Configuration',
    title: 'Enable Setup Audit Trail for all configuration changes',
    priority: 'critical',
    instructions: '1. Navigate to Setup → Security → View Setup Audit Trail\n2. Verify audit trail is automatically enabled\n3. Review current audit trail entries\n4. Set up regular audit trail reviews (weekly)\n5. Export audit trail data monthly for compliance\n6. Configure alerts for critical configuration changes',
    references: [
      'Salesforce Audit Trail Documentation',
      'Compliance Monitoring Best Practices',
      'SOX Audit Requirements'
    ]
  },
  {
    id: 'monitor-2',
    section: 'Monitoring & Compliance',
    subsection: 'Audit Trail Configuration',
    title: 'Configure field history tracking for sensitive data fields',
    priority: 'high',
    instructions: '1. Go to Setup → Object Manager\n2. Select objects containing sensitive data\n3. Go to Fields & Relationships\n4. Edit sensitive fields and enable "Track Field History"\n5. Set up custom reports for field history\n6. Schedule regular field history reviews',
    references: [
      'Field History Tracking Guide',
      'Data Change Monitoring',
      'Compliance Audit Trails'
    ]
  },
  {
    id: 'monitor-3',
    section: 'Monitoring & Compliance',
    subsection: 'Security Monitoring',
    title: 'Set up login forensics monitoring and alerting',
    priority: 'high',
    instructions: '1. Navigate to Setup → Security → Login Forensics\n2. Review login anomaly patterns\n3. Set up Event Monitoring (if available)\n4. Configure alerts for suspicious login patterns\n5. Create automated reports for security team\n6. Establish incident response procedures',
    references: [
      'Login Forensics Configuration',
      'Event Monitoring Setup Guide',
      'Security Incident Response Plan'
    ]
  },
  {
    id: 'monitor-4',
    section: 'Monitoring & Compliance',
    subsection: 'Security Monitoring',
    title: 'Implement real-time security dashboards for administrators',
    priority: 'medium',
    instructions: '1. Create custom reports for security metrics\n2. Build dashboard showing login activities\n3. Add components for failed login attempts\n4. Include data export monitoring\n5. Set up automatic dashboard refresh\n6. Configure dashboard sharing with security team',
    references: [
      'Security Dashboard Design',
      'Real-time Monitoring Best Practices'
    ]
  },
  {
    id: 'monitor-5',
    section: 'Monitoring & Compliance',
    subsection: 'Compliance Reporting',
    title: 'Configure automated compliance reports (SOX, GDPR, HIPAA)',
    priority: 'critical',
    instructions: '1. Identify compliance requirements for your organization\n2. Create custom report types for compliance data\n3. Build reports for data access patterns\n4. Set up automated report scheduling\n5. Configure secure report delivery\n6. Establish compliance review procedures',
    references: [
      'GDPR Compliance Guide',
      'SOX Control Documentation',
      'HIPAA Security Requirements'
    ]
  },

  // Section 7: Mobile & External Access
  {
    id: 'mobile-1',
    section: 'Mobile & External Access',
    subsection: 'Salesforce Mobile App',
    title: 'Configure mobile app security policies and restrictions',
    priority: 'high',
    instructions: '1. Go to Setup → Mobile Apps → Salesforce\n2. Configure mobile session timeout\n3. Enable mobile app PIN requirements\n4. Set up mobile app access restrictions\n5. Configure offline data encryption\n6. Test mobile security settings',
    references: [
      'Salesforce Mobile Security Guide',
      'Mobile App Configuration Best Practices'
    ]
  },
  {
    id: 'mobile-2',
    section: 'Mobile & External Access',
    subsection: 'Connected Apps',
    title: 'Secure all connected app configurations with proper OAuth scopes',
    priority: 'critical',
    instructions: '1. Navigate to Setup → Apps → App Manager\n2. Review all connected apps\n3. Audit OAuth scopes for each app\n4. Remove unnecessary permissions\n5. Enable IP restrictions where possible\n6. Set up connected app monitoring',
    references: [
      'Connected Apps Security Guide',
      'OAuth Best Practices',
      'API Security Standards'
    ]
  },
  {
    id: 'mobile-3',
    section: 'Mobile & External Access',
    subsection: 'External Sites',
    title: 'Implement security controls for Sites and Experience Cloud',
    priority: 'high',
    instructions: '1. Go to Setup → Sites or Digital Experiences\n2. Configure site security settings\n3. Enable HTTPS enforcement\n4. Set up proper authentication methods\n5. Configure session security\n6. Review guest user permissions',
    references: [
      'Sites Security Configuration',
      'Experience Cloud Security Guide'
    ]
  },

  // Section 8: Third-Party Apps & AppExchange
  {
    id: 'appex-1',
    section: 'Third-Party Apps & AppExchange',
    subsection: 'Package Security',
    title: 'Establish AppExchange package security review process',
    priority: 'critical',
    instructions: '1. Create package evaluation criteria\n2. Review package permissions and data access\n3. Test packages in sandbox environment\n4. Validate vendor security credentials\n5. Document package approval process\n6. Set up regular package security reviews',
    references: [
      'AppExchange Security Guide',
      'Third-Party Risk Assessment',
      'Package Installation Best Practices'
    ]
  },
  {
    id: 'appex-2',
    section: 'Third-Party Apps & AppExchange',
    subsection: 'Vendor Management',
    title: 'Implement vendor security assessment procedures',
    priority: 'high',
    instructions: '1. Create vendor security questionnaire\n2. Require security certifications from vendors\n3. Review vendor data handling practices\n4. Establish vendor access monitoring\n5. Set up vendor security incident procedures\n6. Schedule regular vendor security reviews',
    references: [
      'Vendor Security Assessment Guide',
      'Third-Party Risk Management',
      'Vendor Compliance Requirements'
    ]
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