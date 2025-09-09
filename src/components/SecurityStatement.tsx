import React from 'react';
import { Shield, Lock, Database, Eye, AlertTriangle, Clock } from 'lucide-react';

export const SecurityStatement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-800">Security & Data Retention Statement</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-blue-600" />
                Security Overview
              </h2>
              <p className="text-gray-600 mb-4">
                Python Academy implements comprehensive security measures to protect student data, learning progress, and personal information. Our security framework follows industry best practices and compliance requirements for educational technology.
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Security First Approach</h3>
                <p className="text-red-700 text-sm">
                  We prioritize data security and privacy protection through multiple layers of defense, continuous monitoring, and regular security assessments to ensure the safety of all user information.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-green-600" />
                Data Security Measures
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Encryption</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Data in Transit:</strong> All data transmitted using TLS 1.3 encryption (HTTPS)</li>
                <li><strong>Data at Rest:</strong> AES-256 encryption for all stored data</li>
                <li><strong>Database Encryption:</strong> Full database encryption via Supabase security</li>
                <li><strong>Password Security:</strong> Bcrypt hashing with salt for all passwords</li>
                <li><strong>API Communications:</strong> Encrypted API calls to all third-party services</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Access Control</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Authentication:</strong> Secure email/password authentication via Supabase Auth</li>
                <li><strong>Session Management:</strong> Secure session tokens with automatic expiration</li>
                <li><strong>Role-Based Access:</strong> Principle of least privilege for all system access</li>
                <li><strong>Multi-Factor Authentication:</strong> Available for administrative accounts</li>
                <li><strong>Account Lockout:</strong> Protection against brute force attacks</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Infrastructure Security</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Supabase Security Features</h4>
                <ul className="list-disc pl-6 text-blue-700 text-sm">
                  <li>SOC 2 Type II compliant infrastructure</li>
                  <li>ISO 27001 certified security management</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>24/7 security monitoring and incident response</li>
                  <li>Automated backup and disaster recovery</li>
                  <li>Network isolation and firewall protection</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Application Security</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Input Validation:</strong> Comprehensive validation of all user inputs</li>
                <li><strong>SQL Injection Prevention:</strong> Parameterized queries and ORM protection</li>
                <li><strong>XSS Protection:</strong> Content Security Policy and input sanitization</li>
                <li><strong>CSRF Protection:</strong> Anti-CSRF tokens for all state-changing operations</li>
                <li><strong>Rate Limiting:</strong> Protection against abuse and DoS attacks</li>
                <li><strong>Error Handling:</strong> Secure error messages without information disclosure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Security</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">DeepSeek AI Security</h4>
                  <ul className="list-disc pl-6 text-purple-700 text-sm">
                    <li>Data anonymization before AI processing</li>
                    <li>No personal identifiers sent to AI service</li>
                    <li>Encrypted API communications</li>
                    <li>Data processing agreements in place</li>
                    <li>Regular security assessments</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">External Content Security</h4>
                  <ul className="list-disc pl-6 text-teal-700 text-sm">
                    <li>Content Security Policy for external resources</li>
                    <li>Secure loading of Pexels images</li>
                    <li>No tracking scripts or analytics</li>
                    <li>Minimal third-party dependencies</li>
                    <li>Regular security updates</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-orange-600" />
                Monitoring and Incident Response
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Security Monitoring</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Real-time Monitoring:</strong> 24/7 automated security monitoring</li>
                <li><strong>Intrusion Detection:</strong> Advanced threat detection systems</li>
                <li><strong>Log Analysis:</strong> Comprehensive logging and analysis of all activities</li>
                <li><strong>Vulnerability Scanning:</strong> Regular automated security scans</li>
                <li><strong>Performance Monitoring:</strong> System health and availability tracking</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Incident Response</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Response Team:</strong> Dedicated security incident response team</li>
                <li><strong>Response Time:</strong> Initial response within 1 hour of detection</li>
                <li><strong>Containment:</strong> Immediate isolation and containment procedures</li>
                <li><strong>Investigation:</strong> Thorough forensic analysis of all incidents</li>
                <li><strong>Notification:</strong> Prompt notification to affected users and authorities</li>
                <li><strong>Recovery:</strong> Systematic recovery and system restoration</li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Breach Notification</h4>
                <p className="text-yellow-700 text-sm">
                  In the event of a data breach affecting personal information, we will notify affected users and relevant authorities within 72 hours of discovery, in compliance with applicable privacy laws and regulations.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-purple-600" />
                Data Retention Policy
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Retention Periods</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Student Learning Data</h4>
                <ul className="list-disc pl-6 text-gray-600 text-sm">
                  <li><strong>Active Accounts:</strong> Retained while account is active and for educational purposes</li>
                  <li><strong>Inactive Accounts:</strong> Deleted after 24 months of inactivity</li>
                  <li><strong>Completed Courses:</strong> Progress data retained for 3 years for transcript purposes</li>
                  <li><strong>Assessment Results:</strong> Retained for 7 years for academic record purposes</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Personal Information</h4>
                <ul className="list-disc pl-6 text-blue-700 text-sm">
                  <li><strong>Account Information:</strong> Retained while account is active</li>
                  <li><strong>Email Addresses:</strong> Deleted within 30 days of account closure</li>
                  <li><strong>Authentication Data:</strong> Immediately deleted upon account deletion</li>
                  <li><strong>Communication Records:</strong> Retained for 2 years for support purposes</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 mb-2">Children's Data (Under 13)</h4>
                <ul className="list-disc pl-6 text-green-700 text-sm">
                  <li><strong>Learning Progress:</strong> Deleted within 12 months of inactivity</li>
                  <li><strong>Personal Information:</strong> Deleted immediately upon parental request</li>
                  <li><strong>AI Interactions:</strong> Anonymized and deleted within 90 days</li>
                  <li><strong>Age Transition:</strong> New consent required when child turns 13</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Data Deletion Procedures</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Secure Deletion:</strong> Multi-pass overwriting of all deleted data</li>
                <li><strong>Backup Purging:</strong> Removal from all backup systems</li>
                <li><strong>Third-party Deletion:</strong> Coordination with service providers for complete removal</li>
                <li><strong>Verification:</strong> Confirmation of complete data destruction</li>
                <li><strong>Documentation:</strong> Detailed records of all deletion activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compliance and Auditing</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Compliance Standards</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>FERPA:</strong> Family Educational Rights and Privacy Act compliance</li>
                <li><strong>COPPA:</strong> Children's Online Privacy Protection Act compliance</li>
                <li><strong>GDPR:</strong> General Data Protection Regulation compliance</li>
                <li><strong>CCPA:</strong> California Consumer Privacy Act compliance</li>
                <li><strong>SOC 2:</strong> Service Organization Control 2 compliance</li>
                <li><strong>ISO 27001:</strong> Information Security Management System</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Regular Audits</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Internal Audits:</strong> Quarterly security and compliance reviews</li>
                <li><strong>External Audits:</strong> Annual third-party security assessments</li>
                <li><strong>Penetration Testing:</strong> Bi-annual ethical hacking assessments</li>
                <li><strong>Vulnerability Assessments:</strong> Monthly automated security scans</li>
                <li><strong>Compliance Reviews:</strong> Regular review of regulatory compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Security Responsibilities</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Account Security</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Strong Passwords:</strong> Use complex, unique passwords</li>
                <li><strong>Account Monitoring:</strong> Regularly review account activity</li>
                <li><strong>Secure Devices:</strong> Use updated, secure devices and browsers</li>
                <li><strong>Logout Procedures:</strong> Always log out on shared devices</li>
                <li><strong>Suspicious Activity:</strong> Report any unusual account activity immediately</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Data Protection</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Personal Information:</strong> Don't share personal details in public areas</li>
                <li><strong>Screen Sharing:</strong> Be cautious when sharing screens during help sessions</li>
                <li><strong>Public Networks:</strong> Avoid accessing sensitive data on public Wi-Fi</li>
                <li><strong>Software Updates:</strong> Keep browsers and devices updated</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
                Security Incident Reporting
              </h2>
              
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-red-800 mb-2">Report Security Issues Immediately</h3>
                <p className="text-red-700 text-sm mb-2">
                  If you discover a security vulnerability or experience a security incident, please report it immediately:
                </p>
                <ul className="list-disc pl-6 text-red-700 text-sm">
                  <li><strong>Security Email:</strong> security@pythonacademy.edu</li>
                  <li><strong>Emergency Phone:</strong> [Your Emergency Number]</li>
                  <li><strong>Response Time:</strong> We will respond within 1 hour</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-700 mb-3">What to Report</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Suspected unauthorized access to accounts</li>
                <li>Unusual system behavior or error messages</li>
                <li>Potential data breaches or leaks</li>
                <li>Phishing attempts or suspicious communications</li>
                <li>Technical vulnerabilities or security flaws</li>
                <li>Any other security-related concerns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Security and Privacy Team</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Chief Security Officer:</strong> [Your Name]<br />
                  <strong>Email:</strong> security@pythonacademy.edu<br />
                  <strong>Privacy Officer:</strong> privacy@pythonacademy.edu<br />
                  <strong>Phone:</strong> [Your Phone Number]<br />
                  <strong>Address:</strong> [Your Institution Address]
                </p>
                
                <h4 className="font-semibold text-gray-800 mb-2 mt-4">Business Hours</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Regular Support:</strong> Monday-Friday, 9 AM - 5 PM EST<br />
                  <strong>Security Incidents:</strong> 24/7 emergency response available<br />
                  <strong>Response Time:</strong> Security issues within 1 hour, other inquiries within 24 hours
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Updates and Changes</h2>
              <p className="text-gray-600 mb-4">
                This Security & Data Retention Statement is reviewed and updated regularly to reflect changes in our security practices, technology, and regulatory requirements. Material changes will be communicated to users through email notifications and platform announcements.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Stay Informed</h4>
                <p className="text-blue-700 text-sm">
                  We recommend reviewing this statement periodically to stay informed about our security practices and your responsibilities in protecting your data and account.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};