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
    instructions: '1. Navigate to Setup → Security → Multi-Factor Authentication\n2. Enable "Require MFA for all system administrators"\n3. Go to User Management → Users\n4. For each admin user, edit their profile\n5. Check "Multi-Factor Authentication for User Interface Logins"\n6. Verify MFA is working by having each admin log out and back in\n7. Document the implementation and create user training materials\n8. Test MFA with different devices and browsers\n9. Set up backup administrators with MFA enabled',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_mfa.htm',
      'https://trailhead.salesforce.com/content/learn/modules/multi_factor_authentication',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/'
    ]
  },
  {
    id: 'auth-2',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Configure MFA at the permission set level rather than profile level for granular control',
    priority: 'critical',
    instructions: '1. Go to Setup → Permission Sets\n2. Create new permission set named "MFA Required Users"\n3. Enable "Multi-Factor Authentication for User Interface Logins"\n4. Assign this permission set to specific users requiring MFA\n5. Remove MFA requirements from standard profiles\n6. Test login with assigned users to verify MFA requirement\n7. Create documentation for permission set assignment process\n8. Set up automated reporting for MFA compliance',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm',
      'https://help.salesforce.com/s/articleView?id=sf.security_mfa_permission_sets.htm'
    ]
  },
  {
    id: 'auth-3',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Set up MFA exemptions only for service accounts with documented business justification',
    priority: 'medium',
    instructions: '1. Document business justification for each service account requiring MFA exemption\n2. Create a dedicated profile named "Service Account Profile"\n3. Disable MFA requirements on the service account profile\n4. Apply profile only to legitimate service accounts\n5. Monitor service account login activities through reports\n6. Review exemptions quarterly with security team\n7. Maintain exemption documentation for audit purposes\n8. Set up alerts for service account logins outside business hours',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_overview_service_accounts.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_service_accounts.htm'
    ]
  },
  {
    id: 'auth-4',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Enable "Require MFA for API logins" for all users handling sensitive data',
    priority: 'medium',
    instructions: '1. Go to Setup → Security → Session Settings\n2. Enable "Require MFA for API logins"\n3. Create permission set for sensitive data handlers\n4. Apply this setting to relevant user profiles handling PII or financial data\n5. Update API integration documentation to reflect MFA requirements\n6. Test API connections after implementation\n7. Coordinate with development teams for API authentication updates\n8. Monitor API login activities for compliance',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_api_authentication.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm'
    ]
  },
  {
    id: 'auth-5',
    section: 'User Authentication & Access Control',
    subsection: 'Multi-Factor Authentication (MFA)',
    title: 'Configure backup verification methods (SMS, email) for MFA recovery scenarios',
    priority: 'low',
    instructions: '1. Navigate to Setup → Security → Multi-Factor Authentication\n2. Enable backup verification methods in organization settings\n3. Configure SMS settings with valid corporate phone numbers\n4. Set up email verification as secondary backup method\n5. Test recovery scenarios with test users in sandbox\n6. Document recovery procedures for help desk team\n7. Train help desk staff on MFA recovery process\n8. Create user guides for self-service MFA recovery',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_mfa_backup_methods.htm',
      'https://help.salesforce.com/s/articleView?id=sf.security_mfa_troubleshooting.htm'
    ]
  },

  // Password Policies
  {
    id: 'auth-6',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Set minimum password length to 12 characters',
    priority: 'high',
    instructions: '1. Navigate to Setup → Security → Password Policies\n2. Set "Minimum password length" to 12 characters\n3. Click Save to apply changes\n4. Notify all users of the new requirement via email\n5. Plan a grace period for existing users to update passwords\n6. Monitor compliance through login reports\n7. Document the policy change for compliance records\n8. Create user training materials about strong passwords',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_password.htm',
      'https://www.nist.gov/itl/applied-cybersecurity/iad/list-projects/special-publication-800-63'
    ]
  },
  {
    id: 'auth-7',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Enable password complexity requirements including numbers, letters, and special characters',
    priority: 'medium',
    instructions: '1. Go to Setup → Security → Password Policies\n2. Set "Password complexity requirement" to "Must mix alpha and numeric"\n3. Enable "Must contain special character" checkbox\n4. Check "Cannot contain username" for additional security\n5. Save settings and test with a new user account\n6. Communicate changes to users before enforcement date\n7. Update user onboarding documentation\n8. Create password complexity guidelines for users',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_password.htm',
      'https://owasp.org/www-community/Authentication_and_Session_Management'
    ]
  },
  {
    id: 'auth-8',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Configure password expiration policies (90-180 days maximum)',
    priority: 'medium',
    instructions: '1. Navigate to Setup → Security → Password Policies\n2. Set "User passwords expire in" to 90 days for high-security environments\n3. Or set to 180 days for standard business environments\n4. Enable "Enforce password history" to prevent password reuse\n5. Set password history to remember last 5-10 passwords\n6. Configure advance warning notifications (7-14 days)\n7. Test expiration notifications with test accounts\n8. Document password rotation procedures',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_password.htm',
      'https://www.sans.org/white-papers/36022/'
    ]
  },
  {
    id: 'auth-9',
    section: 'User Authentication & Access Control',
    subsection: 'Password Policies',
    title: 'Implement account lockout policies after failed login attempts',
    priority: 'high',
    instructions: '1. Go to Setup → Security → Password Policies\n2. Set "Maximum invalid login attempts" to 5 attempts\n3. Set "Lockout effective period" to 15-30 minutes\n4. Enable "Obscure secret answer for password resets"\n5. Configure "Minimum password lifetime" to prevent frequent changes\n6. Test lockout functionality with test accounts\n7. Document unlock procedures for administrators\n8. Train help desk on account unlock process',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_password.htm',
      'https://www.cisa.gov/sites/default/files/publications/guide-multi-factor-authentication_508.pdf'
    ]
  },

  // Single Sign-On
  {
    id: 'auth-10',
    section: 'User Authentication & Access Control',
    subsection: 'Single Sign-On (SSO)',
    title: 'Configure SAML-based SSO with enterprise identity provider',
    priority: 'high',
    instructions: '1. Navigate to Setup → Security → Single Sign-On Settings\n2. Enable SAML and configure identity provider settings\n3. Download Salesforce metadata and provide to IdP team\n4. Upload IdP certificate and configure assertion settings\n5. Map SAML attributes to Salesforce user fields\n6. Test SSO with pilot user group in sandbox\n7. Configure just-in-time (JIT) provisioning if needed\n8. Implement gradual rollout to all users\n9. Set up SSO monitoring and error reporting',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.sso_saml.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.sso.meta/sso/',
      'https://trailhead.salesforce.com/content/learn/modules/identity_login'
    ]
  },

  // Section 2: User Permissions & Profiles
  {
    id: 'perm-1',
    section: 'User Permissions & Profiles',
    subsection: 'Profile Management',
    title: 'Implement principle of least privilege for all user profiles',
    priority: 'critical',
    instructions: '1. Audit all existing profiles and their permissions\n2. Create role-specific profiles with minimal required permissions\n3. Remove unnecessary object and field permissions\n4. Disable administrative permissions unless required\n5. Use permission sets for additional access rather than modifying profiles\n6. Document the business justification for each permission\n7. Regular quarterly reviews of profile permissions\n8. Implement approval process for permission changes',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_userprofiles.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_profiles_best_practices.htm'
    ]
  },
  {
    id: 'perm-2',
    section: 'User Permissions & Profiles',
    subsection: 'Profile Management',
    title: 'Regularly audit and clean up unused or dormant user profiles',
    priority: 'medium',
    instructions: '1. Generate report of all profiles and their usage\n2. Identify profiles with no active users assigned\n3. Review profiles not used in last 90 days\n4. Check for duplicate or similar profiles that can be consolidated\n5. Remove or merge unused profiles after stakeholder approval\n6. Document profile cleanup activities\n7. Schedule quarterly profile audits\n8. Implement profile usage monitoring',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_userprofiles.htm',
      'https://help.salesforce.com/s/articleView?id=sf.users_license_types_available.htm'
    ]
  },
  {
    id: 'perm-3',
    section: 'User Permissions & Profiles',
    subsection: 'Field-Level Security',
    title: 'Configure field-level security for sensitive data fields',
    priority: 'critical',
    instructions: '1. Identify all fields containing sensitive data (PII, financial, etc.)\n2. Go to Setup → Object Manager → Select Object → Fields & Relationships\n3. For each sensitive field, click "Set Field-Level Security"\n4. Restrict field visibility and editability by profile\n5. Apply principle of least privilege for field access\n6. Test field access with different user profiles\n7. Document field security decisions and business justifications\n8. Regular review of field-level security settings',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_fls.htm'
    ]
  },
  {
    id: 'perm-4',
    section: 'User Permissions & Profiles',
    subsection: 'Field-Level Security',
    title: 'Implement data classification and protection based on sensitivity levels',
    priority: 'high',
    instructions: '1. Create data classification schema (Public, Internal, Confidential, Restricted)\n2. Classify all data fields according to sensitivity levels\n3. Implement field-level security based on classification\n4. Create custom fields to track data classification if needed\n5. Develop access control matrix mapping roles to data classifications\n6. Train users on data classification requirements\n7. Implement regular data classification reviews\n8. Create compliance reports for data protection',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm',
      'https://www.salesforce.com/resources/articles/data-governance/'
    ]
  },
  {
    id: 'perm-5',
    section: 'User Permissions & Profiles',
    instructions: '1. Create data classification schema (Public, Internal, Confidential, Restricted)\n2. Classify all data fields according to sensitivity levels\n3. Implement field-level security based on classification\n4. Create custom fields to track data classification if needed\n5. Develop access control matrix mapping roles to data classifications\n6. Train users on data classification requirements\n7. Implement regular data classification reviews\n8. Create compliance reports for data protection',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm',
      'https://www.salesforce.com/resources/articles/data-governance/'
    ]
  },
  {
    id: 'perm-5',
    section: 'User Permissions & Profiles',
    subsection: 'Role Hierarchy',
    title: 'Design and implement proper role hierarchy structure',
    priority: 'high',
    instructions: '1. Map organizational structure to Salesforce role hierarchy\n2. Navigate to Setup → Roles → Role Hierarchy\n3. Create roles that reflect actual business reporting structure\n4. Ensure proper data access inheritance through hierarchy\n5. Avoid creating overly complex or deep hierarchies\n6. Test data visibility with users at different hierarchy levels\n7. Document role hierarchy design decisions\n8. Regular review and updates to reflect org changes',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_roles.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_data_access.htm'
    ]
  },
  {
    id: 'perm-6',
    section: 'User Permissions & Profiles',
    subsection: 'Permission Sets',
    title: 'Use permission sets instead of modifying standard profiles',
    priority: 'medium',
    instructions: '1. Create role-specific permission sets for additional access needs\n2. Keep standard profiles as minimal baseline permissions\n3. Use permission sets for temporary or project-based access\n4. Implement permission set assignment review process\n5. Document business justification for each permission set\n6. Regular audit of permission set assignments\n7. Remove permission sets when no longer needed\n8. Train administrators on permission set best practices',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm',
      'https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_perms'
    ]
  },
  {
    id: 'perm-7',
    section: 'User Permissions & Profiles',
    subsection: 'Sharing Settings',
    title: 'Configure organization-wide defaults to most restrictive settings',
    priority: 'critical',
    instructions: '1. Navigate to Setup → Security → Sharing Settings\n2. Set organization-wide defaults to Private for sensitive objects\n3. Use Public Read Only only when business justification exists\n4. Never use Public Read/Write unless absolutely necessary\n5. Document rationale for each sharing setting\n6. Test data access with users in different roles\n7. Implement sharing rules only when OWD is too restrictive\n8. Regular review of sharing settings and their business need',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_owd.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_owd.htm'
    ]
    instructions: '1. Map organizational structure to Salesforce role hierarchy\n2. Navigate to Setup → Roles → Role Hierarchy\n3. Create roles that reflect actual business reporting structure\n4. Ensure proper data access inheritance through hierarchy\n5. Avoid creating overly complex or deep hierarchies\n6. Test data visibility with users at different hierarchy levels\n7. Document role hierarchy design decisions\n8. Regular review and updates to reflect org changes',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_roles.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_data_access.htm'
    ]
  },
  {
    id: 'perm-6',
    section: 'User Permissions & Profiles',
    subsection: 'Permission Sets',
    title: 'Use permission sets instead of modifying standard profiles',
    priority: 'medium',
    instructions: '1. Create role-specific permission sets for additional access needs\n2. Keep standard profiles as minimal baseline permissions\n3. Use permission sets for temporary or project-based access\n4. Implement permission set assignment review process\n5. Document business justification for each permission set\n6. Regular audit of permission set assignments\n7. Remove permission sets when no longer needed\n8. Train administrators on permission set best practices',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm',
      'https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_perms'
    ]
  },
  {
    id: 'perm-7',
    section: 'User Permissions & Profiles',
    subsection: 'Sharing Settings',
    title: 'Configure organization-wide defaults to most restrictive settings',
    priority: 'critical',
    instructions: '1. Navigate to Setup → Security → Sharing Settings\n2. Set organization-wide defaults to Private for sensitive objects\n3. Use Public Read Only only when business justification exists\n4. Never use Public Read/Write unless absolutely necessary\n5. Document rationale for each sharing setting\n6. Test data access with users in different roles\n7. Implement sharing rules only when OWD is too restrictive\n8. Regular review of sharing settings and their business need',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_owd.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_owd.htm'
    ]
  },

  // Section 3: Data Security & Encryption
  {
    id: 'data-1',
    section: 'Data Security & Encryption',
    subsection: 'Platform Encryption',
    title: 'Enable Platform Encryption for sensitive data fields',
    priority: 'critical',
    instructions: '1. Purchase and enable Platform Encryption in your org\n2. Generate or upload encryption keys\n3. Navigate to Setup → Platform Encryption → Encryption Policy\n4. Identify sensitive fields requiring encryption (PII, SSN, credit card data)\n5. Enable encryption for selected fields\n6. Test encrypted field functionality with user workflows\n7. Update SOQL queries to handle encrypted data\n8. Monitor encryption performance impact\n9. Implement key rotation schedule\n10. Train developers on encrypted field limitations',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_pe_overview.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.platform_encryption.meta/platform_encryption/',
      'https://trailhead.salesforce.com/content/learn/modules/platform_encryption'
    ]
  },
  {
    id: 'data-2',
    section: 'Data Security & Encryption',
    subsection: 'Platform Encryption',
    title: 'Configure encryption key management and rotation policies',
    priority: 'high',
    instructions: '1. Establish encryption key rotation schedule (annually or bi-annually)\n2. Generate tenant secrets for additional security layer\n3. Configure key derivation settings\n4. Implement key backup and recovery procedures\n5. Document key management processes\n6. Train authorized personnel on key rotation procedures\n7. Test key rotation in sandbox environment first\n8. Monitor encryption key usage and health\n9. Establish incident response for key compromise',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_pe_key_management.htm',
      'https://help.salesforce.com/s/articleView?id=sf.security_pe_rotate_keys.htm'
    ]
  },
  {
    id: 'data-3',
    section: 'Data Security & Encryption',
    subsection: 'Data Loss Prevention',
    title: 'Implement data classification and handling policies',
    priority: 'high',
    instructions: '1. Define data classification levels (Public, Internal, Confidential, Restricted)\n2. Create custom fields to track data classification\n3. Implement validation rules to enforce data handling policies\n4. Configure workflow rules for data classification automation\n5. Create reports to monitor data classification compliance\n6. Train users on data classification requirements\n7. Implement data handling procedures for each classification level\n8. Regular audit of data classification accuracy',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_data_classification.htm',
      'https://www.salesforce.com/resources/articles/data-governance/'
    ]
  },
  {
    id: 'data-4',
    section: 'Data Security & Encryption',
    subsection: 'Data Loss Prevention',
    title: 'Configure data export restrictions and monitoring',
    priority: 'critical',
    instructions: '1. Navigate to Setup → Data Export\n2. Restrict data export permissions to authorized users only\n3. Implement approval process for data export requests\n4. Configure export monitoring and alerting\n5. Set up weekly/monthly export limits\n6. Create audit trail for all data exports\n7. Implement encrypted export procedures\n8. Train authorized users on secure export practices\n9. Regular review of export activities and access',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_exportdata.htm',
      'https://help.salesforce.com/s/articleView?id=sf.security_data_export.htm'
    ]
  },
  {
    id: 'data-5',
    section: 'Data Security & Encryption',
    subsection: 'Data Backup & Recovery',
    title: 'Implement comprehensive data backup and recovery procedures',
    priority: 'high',
    instructions: '1. Set up weekly data exports for critical data\n2. Configure automated backup scheduling\n3. Implement metadata backup procedures\n4. Test data recovery procedures regularly\n5. Document backup and recovery processes\n6. Store backups in secure, encrypted location\n7. Implement version control for metadata backups\n8. Create disaster recovery plan including data restoration\n9. Train administrators on recovery procedures',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_exportdata.htm',
      'https://help.salesforce.com/s/articleView?id=sf.admin_backup_overview.htm'
    ]
  },
  {
    id: 'data-6',
    section: 'Data Security & Encryption',
    subsection: 'Data Anonymization',
    title: 'Configure data masking for non-production environments',
    priority: 'medium',
    instructions: '1. Identify sensitive data fields requiring masking\n2. Use Data Mask (if available) or manual masking procedures\n3. Create masking rules for different data types\n4. Test masked data maintains referential integrity\n5. Implement automated masking for sandbox refreshes\n6. Document masking procedures and rules\n7. Train development teams on working with masked data\n8. Regular audit of masking effectiveness',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.data_mask_overview.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sandbox_data_mask.htm'
    ]
  },

  // Section 4: Network Security & Access
  {
    id: 'network-1',
    section: 'Network Security & Access',
    subsection: 'IP Restrictions',
    title: 'Configure IP address restrictions for all profiles accessing sensitive data',
    priority: 'critical',
    instructions: '1. Navigate to Setup → Profiles → Select Profile → Login IP Ranges\n2. Define allowed IP ranges for each profile\n3. Use corporate network IP ranges for standard users\n4. Allow VPN IP ranges for remote workers\n5. Test IP restrictions with users from different locations\n6. Document IP range assignments and justifications\n7. Implement process for temporary IP range requests\n8. Regular review and update of IP restrictions\n9. Monitor login attempts from outside allowed ranges',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_loginrestrict.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_ip_restrict.htm'
    ]
  },
  {
    id: 'network-2',
    section: 'Network Security & Access',
    subsection: 'Session Management',
    title: 'Configure session timeout and concurrent session policies',
    priority: 'high',
    instructions: '1. Go to Setup → Security → Session Settings\n2. Set appropriate session timeout (2-8 hours based on role)\n3. Configure "Disable session timeout warning popup" appropriately\n4. Set concurrent session limits per user\n5. Enable "Force logout on session timeout"\n6. Configure secure session settings\n7. Test session timeout with different user types\n8. Document session policies and communicate to users\n9. Monitor session usage patterns',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_sessions.htm',
      'https://help.salesforce.com/s/articleView?id=sf.security_session_management.htm'
    ]
  },
  {
    id: 'network-3',
    section: 'Network Security & Access',
    subsection: 'API Security',
    title: 'Implement API access controls and monitoring',
    priority: 'high',
    instructions: '1. Review and restrict API access by profile\n2. Implement API usage monitoring and alerting\n3. Configure API rate limiting if available\n4. Use named credentials for external system authentication\n5. Implement OAuth for API authentication where possible\n6. Monitor API calls for suspicious patterns\n7. Document authorized API integrations\n8. Regular audit of API access and usage\n9. Implement API key rotation procedures',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_api_enable_disable.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm'
    ]
  },
  {
    id: 'network-4',
    section: 'Network Security & Access',
    subsection: 'Mobile Security',
    title: 'Configure mobile device security policies',
    priority: 'medium',
    instructions: '1. Navigate to Setup → Mobile Administration → Salesforce1 Settings\n2. Configure mobile session timeout settings\n3. Enable mobile device PIN/passcode requirements\n4. Set up mobile device management (MDM) if available\n5. Configure mobile app access restrictions\n6. Implement mobile data encryption requirements\n7. Test mobile security policies on different devices\n8. Document mobile security procedures\n9. Train users on mobile security best practices',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.mobile_security_overview.htm',
      'https://help.salesforce.com/s/articleView?id=sf.salesforce1_admin_guide.htm'
    ]
  },

  // Section 5: Application Security
  {
    id: 'app-1',
    section: 'Application Security',
    subsection: 'Custom Code Security',
    title: 'Implement secure coding practices for Apex and Visualforce',
    priority: 'critical',
    instructions: '1. Enforce SOQL injection prevention in all Apex code\n2. Use dynamic SOQL with proper escaping and binding\n3. Implement proper exception handling and logging\n4. Use with sharing keywords in Apex classes\n5. Validate all user inputs in Visualforce pages\n6. Implement CSRF protection for custom pages\n7. Regular code security reviews and static analysis\n8. Train developers on secure coding practices\n9. Implement code review process for security\n10. Use Security Code Review Checklist',
    references: [
      'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_custom_code.htm',
      'https://trailhead.salesforce.com/content/learn/modules/secure-coding'
    ]
  },
  {
    id: 'app-2',
    section: 'Application Security',
    subsection: 'Custom Code Security',
    title: 'Configure and monitor code execution limits and governor limits',
    priority: 'high',
    instructions: '1. Monitor Apex CPU time usage across the organization\n2. Implement efficient SOQL queries to avoid governor limits\n3. Use batch processing for large data operations\n4. Monitor DML statement usage and optimization\n5. Implement proper error handling for governor limit exceptions\n6. Create dashboards to track governor limit usage\n7. Set up alerts for approaching governor limits\n8. Train developers on governor limit best practices\n9. Regular performance reviews of custom code',
    references: [
      'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_best_practices.htm'
    ]
  },
  {
    id: 'app-3',
    section: 'Application Security',
    subsection: 'Third-Party Integrations',
    title: 'Secure configuration of Connected Apps and OAuth',
    priority: 'critical',
    instructions: '1. Navigate to Setup → App Manager → Connected Apps\n2. Configure OAuth scopes with principle of least privilege\n3. Implement proper redirect URI validation\n4. Use named credentials for external system authentication\n5. Configure IP restrictions for connected apps\n6. Implement refresh token policies\n7. Regular audit of connected app permissions\n8. Monitor OAuth token usage and anomalies\n9. Document all connected app configurations',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.connected_app_overview.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_oauth_endpoints.htm'
    ]
  },
  {
    id: 'app-4',
    section: 'Application Security',
    subsection: 'Lightning Security',
    title: 'Configure Lightning Component Security and CSP settings',
    priority: 'high',
    instructions: '1. Navigate to Setup → Security → CSP Trusted Sites\n2. Configure Content Security Policy trusted sites\n3. Implement Lightning Locker Service properly\n4. Use secure communication patterns in Lightning components\n5. Validate component input parameters\n6. Implement proper error handling in Lightning components\n7. Regular security review of custom Lightning components\n8. Test component security in different contexts\n9. Document Lightning security configurations',
    references: [
      'https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/security_overview.htm',
      'https://help.salesforce.com/s/articleView?id=sf.csp_trusted_sites.htm'
    ]
  },
  {
    id: 'app-5',
    section: 'Application Security',
    subsection: 'Validation Rules',
    title: 'Implement comprehensive data validation and business rules',
    priority: 'medium',
    instructions: '1. Create validation rules for all critical data fields\n2. Implement business logic validation at the platform level\n3. Use proper formula syntax and security considerations\n4. Test validation rules with various user profiles\n5. Document business justification for each validation rule\n6. Implement user-friendly error messages\n7. Regular review and update of validation rules\n8. Train users on validation rule requirements',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.fields_about_field_validation.htm',
      'https://trailhead.salesforce.com/content/learn/modules/point_click_business_logic/point_click_business_logic_validation'
    ]
  },

  // Section 6: Monitoring & Auditing
  {
    id: 'monitor-1',
    section: 'Monitoring & Auditing',
    subsection: 'Event Monitoring',
    title: 'Enable Event Monitoring for comprehensive audit trails',
    priority: 'critical',
    instructions: '1. Purchase and enable Event Monitoring in your organization\n2. Configure event types to monitor (Login, API, URI, etc.)\n3. Set up automated event log downloads\n4. Implement event log analysis and alerting\n5. Create dashboards for security event monitoring\n6. Configure retention policies for event logs\n7. Train security team on event log analysis\n8. Implement incident response procedures based on events\n9. Regular review of event monitoring effectiveness',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_monitorevents.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/event_monitoring.htm',
      'https://trailhead.salesforce.com/content/learn/modules/event_monitoring'
    ]
  },
  {
    id: 'monitor-2',
    section: 'Monitoring & Auditing',
    subsection: 'Audit Trail Configuration',
    title: 'Configure field history tracking for sensitive data fields',
    priority: 'high',
    instructions: '1. Go to Setup → Object Manager → Select Object\n2. Navigate to Fields & Relationships\n3. Edit sensitive fields and enable "Track Field History"\n4. Configure field history retention settings\n5. Set up custom reports for field history analysis\n6. Schedule regular field history reviews\n7. Train administrators on field history interpretation\n8. Implement alerts for critical field changes\n9. Document field history tracking procedures',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.tracking_field_history.htm',
      'https://help.salesforce.com/s/articleView?id=sf.admin_monitorsetup.htm'
    ]
  },
  {
    id: 'monitor-3',
    section: 'Monitoring & Auditing',
    subsection: 'Security Monitoring',
    title: 'Set up login forensics monitoring and alerting',
    priority: 'high',
    instructions: '1. Navigate to Setup → Security → Login Forensics\n2. Review login anomaly patterns and trends\n3. Set up Event Monitoring for login events (if available)\n4. Configure alerts for suspicious login patterns\n5. Create automated reports for security team review\n6. Establish incident response procedures for login anomalies\n7. Train security team on login forensics interpretation\n8. Implement geographic login monitoring\n9. Regular review of login forensics data',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_loginforensics.htm',
      'https://help.salesforce.com/s/articleView?id=sf.security_monitoring_overview.htm'
    ]
  },
  {
    id: 'monitor-4',
    section: 'Monitoring & Auditing',
    subsection: 'Security Monitoring',
    title: 'Implement real-time security dashboards for administrators',
    priority: 'medium',
    instructions: '1. Create custom reports for security metrics\n2. Build dashboard showing recent login activities\n3. Add components for failed login attempts\n4. Include data export and API usage monitoring\n5. Set up automatic dashboard refresh intervals\n6. Configure dashboard sharing with security team\n7. Implement mobile-friendly dashboard views\n8. Create alerting mechanisms for dashboard anomalies\n9. Regular review and update of dashboard metrics',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.dashboards_create.htm',
      'https://help.salesforce.com/s/articleView?id=sf.security_monitoring_overview.htm'
    ]
  },
  {
    id: 'monitor-5',
    section: 'Monitoring & Auditing',
    subsection: 'Compliance Reporting',
    title: 'Configure automated compliance reports (SOX, GDPR, HIPAA)',
    priority: 'critical',
    instructions: '1. Identify compliance requirements specific to your organization\n2. Create custom report types for compliance data\n3. Build reports for user access patterns and data handling\n4. Set up automated report scheduling and delivery\n5. Configure secure report delivery to compliance team\n6. Establish compliance review procedures and timelines\n7. Document compliance reporting processes\n8. Train compliance team on report interpretation\n9. Regular audit of compliance reporting accuracy',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.security_compliance_overview.htm',
      'https://help.salesforce.com/s/articleView?id=sf.reports_builder.htm'
    ]
  },

  // Section 7: Mobile & Remote Access
  {
    id: 'mobile-1',
    section: 'Mobile & Remote Access',
    subsection: 'Mobile App Security',
    title: 'Configure mobile application security policies and restrictions',
    priority: 'high',
    instructions: '1. Navigate to Setup → Mobile Administration → Mobile Security Policies\n2. Configure mobile session timeout settings (15-60 minutes)\n3. Enable mobile device passcode requirements\n4. Set up mobile app access restrictions by profile\n5. Configure mobile data encryption requirements\n6. Implement mobile device compliance checking\n7. Test mobile security policies on different devices and platforms\n8. Document mobile security procedures for users\n9. Train users on mobile security best practices',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.mobile_security_overview.htm',
      'https://help.salesforce.com/s/articleView?id=sf.mobile_admin_guide.htm'
    ]
  },
  {
    id: 'mobile-2',
    section: 'Mobile & Remote Access',
    subsection: 'Mobile Device Management',
    title: 'Integrate with Mobile Device Management (MDM) solutions',
    priority: 'medium',
    instructions: '1. Evaluate and select appropriate MDM solution\n2. Configure Salesforce integration with MDM platform\n3. Set up device enrollment and compliance policies\n4. Implement remote wipe capabilities for lost devices\n5. Configure app whitelisting and blacklisting\n6. Set up mobile threat detection and response\n7. Test MDM integration with pilot user group\n8. Train IT team on MDM management procedures\n9. Regular review of mobile device compliance',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.mobile_security_overview.htm',
      'https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/mobile_sdk_security.htm'
    ]
  },
  {
    id: 'mobile-3',
    section: 'Mobile & Remote Access',
    subsection: 'Remote Access Security',
    title: 'Configure secure remote access policies and VPN requirements',
    priority: 'high',
    instructions: '1. Define remote access policies and procedures\n2. Configure IP restrictions to include VPN ranges\n3. Implement additional authentication for remote users\n4. Set up secure remote access monitoring\n5. Configure location-based access controls\n6. Implement time-based access restrictions\n7. Train remote users on security requirements\n8. Regular audit of remote access activities\n9. Update remote access policies based on threat landscape',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.admin_loginrestrict.htm',
      'https://help.salesforce.com/s/articleView?id=sf.security_remote_access.htm'
    ]
  },

  // Section 8: Third-party Apps & Integrations
  {
    id: 'apps-1',
    section: 'Third-party Apps & Integrations',
    subsection: 'AppExchange Security',
    title: 'Implement security review process for AppExchange apps',
    priority: 'critical',
    instructions: '1. Establish formal security review process for all AppExchange installations\n2. Review app permissions and data access requirements\n3. Evaluate app security certifications and compliance\n4. Test apps in sandbox environment before production installation\n5. Document business justification for each app installation\n6. Implement approval workflow for app installations\n7. Regular review of installed apps and their usage\n8. Monitor app permissions and access patterns\n9. Establish app removal procedures for unused apps',
    references: [
      'https://help.salesforce.com/s/articleView?id=sf.appexchange_security_review.htm',
      'https://partners.salesforce.com/s/education/general/Security_Review'
    ]
  },
  {
    id: 'apps-2',
    section: 'Third-party Apps & Integrations',
    subsection: 'API Integration Security',
    title: 'Secure external API integrations and data exchanges',
    priority: 'critical',
    instructions: '1. Implement OAuth 2.0 for all external API integrations\n2. Use named credentials for secure credential storage\n3. Configure API rate limiting and monitoring\n4. Implement proper error handling and logging for integrations\n5. Use encryption for data in transit and at rest\n6. Regular security assessment of external integrations\n7. Document all API integrations and their security controls\n8. Monitor API usage patterns for anomalies\n9. Implement API key rotation procedures',
    references: [
      'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm',
      'https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm'
    ]
  },
  {
    id: 'apps-3',
    section: 'Third-party Apps & Integrations',
    subsection: 'Data Integration Security',
    title: 'Configure secure data synchronization and ETL processes',
    priority: 'high',
    instructions: '1. Implement secure data transfer protocols (SFTP, HTTPS)\n2. Use encryption for sensitive data during transmission\n3. Configure data validation and integrity checking\n4. Implement proper error handling and logging\n5. Set up monitoring and alerting for integration failures\n6. Regular testing of integration security controls\n7. Document data flow and security measures\n8. Implement data retention policies for integration logs\n9. Regular review of integration access and permissions',
    references: [
      'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm',
      'https://help.salesforce.com/s/articleView?id=sf.data_integration_security.htm'
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