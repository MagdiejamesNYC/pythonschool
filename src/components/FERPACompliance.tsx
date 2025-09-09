import React from 'react';
import { GraduationCap, Shield, FileText, Users, Lock } from 'lucide-react';

export const FERPACompliance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">FERPA Compliance Statement</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-green-600" />
                FERPA Overview
              </h2>
              <p className="text-gray-600 mb-4">
                The Family Educational Rights and Privacy Act (FERPA) is a federal law that protects the privacy of student education records. Python Academy is committed to full compliance with FERPA requirements when used in educational settings.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Our FERPA Commitment</h3>
                <p className="text-blue-700 text-sm">
                  We understand that when educational institutions use our platform, student learning data may constitute education records under FERPA. We are committed to protecting these records and supporting institutional compliance.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-purple-600" />
                Education Records We May Process
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Student Learning Data</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Student progress through Python programming curriculum</li>
                <li>Quiz scores, assessment results, and performance analytics</li>
                <li>Learning patterns and achievement data</li>
                <li>Time spent on educational activities</li>
                <li>Coding project submissions and evaluations</li>
                <li>AI-generated educational feedback and recommendations</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Student Identifiers</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Email addresses (when provided by educational institution)</li>
                <li>Student ID numbers (if integrated with school systems)</li>
                <li>Names and usernames (as configured by institution)</li>
                <li>Class or section assignments</li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                <p className="text-yellow-700 text-sm">
                  We only collect and process education records when explicitly authorized by the educational institution through proper agreements and consent procedures.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-orange-600" />
                Institutional Responsibilities
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Educational Institution Must</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Obtain proper consent before sharing student data with our platform</li>
                <li>Ensure students and parents are notified of third-party service use</li>
                <li>Maintain records of data sharing agreements and consent</li>
                <li>Provide students/parents with information about their FERPA rights</li>
                <li>Establish clear policies for educational technology use</li>
                <li>Monitor and audit third-party service compliance</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Required Documentation</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Signed Data Processing Agreement (DPA) or Service Agreement</li>
                <li>FERPA compliance addendum to service contract</li>
                <li>Documentation of legitimate educational interest</li>
                <li>Student/parent notification of third-party service use</li>
                <li>Consent forms (where required by state or local policy)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-red-600" />
                Our FERPA Compliance Measures
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Data Protection</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Encryption:</strong> All education records encrypted in transit and at rest</li>
                <li><strong>Access Control:</strong> Role-based access with multi-factor authentication</li>
                <li><strong>Audit Logging:</strong> Comprehensive logs of all data access and modifications</li>
                <li><strong>Data Minimization:</strong> Collect only data necessary for educational purposes</li>
                <li><strong>Secure Infrastructure:</strong> SOC 2 compliant hosting and security measures</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Use Limitations</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Education records used solely for authorized educational purposes</li>
                <li>No disclosure to unauthorized third parties</li>
                <li>No use for commercial advertising or marketing to students</li>
                <li>No creation of student profiles for non-educational purposes</li>
                <li>Compliance with data retention and deletion requirements</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Third-Party AI Processing</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-purple-800 mb-2">DeepSeek AI Integration</h4>
                <ul className="list-disc pl-6 text-purple-700 text-sm">
                  <li>Student responses sent to DeepSeek AI are anonymized</li>
                  <li>No personally identifiable information included in AI requests</li>
                  <li>AI processing limited to educational feedback generation</li>
                  <li>Institutions can disable AI features if required by policy</li>
                  <li>AI provider bound by data processing agreements</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student and Parent Rights</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Under FERPA, Students/Parents Have the Right To</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Inspect and Review:</strong> Access education records maintained by the institution</li>
                <li><strong>Request Amendment:</strong> Seek correction of inaccurate or misleading records</li>
                <li><strong>Consent to Disclosure:</strong> Control disclosure of personally identifiable information</li>
                <li><strong>File Complaints:</strong> Submit complaints about FERPA violations to the Department of Education</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">How to Exercise These Rights</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Important:</strong> FERPA rights must be exercised through your educational institution, not directly with Python Academy. Contact your school's registrar, student services, or privacy officer to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm">
                  <li>Request access to your education records</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Opt out of third-party educational services</li>
                  <li>File complaints about privacy violations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Retention and Deletion</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Retention Policy</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Education records retained only as long as necessary for educational purposes</li>
                <li>Retention periods aligned with institutional policies and legal requirements</li>
                <li>Automatic deletion of inactive accounts after specified periods</li>
                <li>Secure deletion procedures for all data destruction</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Deletion Procedures</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Institutions can request immediate deletion of student data</li>
                <li>Individual student data deleted upon institutional request</li>
                <li>Complete data purging within 30 days of deletion request</li>
                <li>Certification of deletion provided to requesting institution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Incident Response</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Data Breach Procedures</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Immediate containment and assessment of any security incidents</li>
                <li>Notification to affected educational institutions within 24 hours</li>
                <li>Detailed incident reports including scope and remediation steps</li>
                <li>Cooperation with institutional breach notification requirements</li>
                <li>Implementation of additional safeguards to prevent recurrence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">FERPA Compliance Officer</h3>
                <p className="text-blue-700 mb-2">
                  <strong>Name:</strong> [Your Name]<br />
                  <strong>Title:</strong> Privacy and Compliance Officer<br />
                  <strong>Email:</strong> ferpa@pythonacademy.edu<br />
                  <strong>Phone:</strong> [Your Phone Number]<br />
                  <strong>Address:</strong> [Your Institution Address]
                </p>
                
                <h4 className="font-semibold text-blue-800 mb-2 mt-4">For Educational Institutions</h4>
                <p className="text-blue-700 text-sm">
                  Contact us to discuss FERPA compliance requirements, request Data Processing Agreements, or report compliance concerns. We are committed to working with educational institutions to ensure full FERPA compliance.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li><strong>U.S. Department of Education FERPA Office:</strong> <a href="https://studentprivacy.ed.gov/" className="text-blue-600 underline">https://studentprivacy.ed.gov/</a></li>
                <li><strong>FERPA Regulations:</strong> 34 CFR Part 99</li>
                <li><strong>Student Privacy Policy Office:</strong> <a href="mailto:FERPA@ed.gov" className="text-blue-600 underline">FERPA@ed.gov</a></li>
                <li><strong>FERPA Complaint Process:</strong> <a href="https://studentprivacy.ed.gov/file-a-complaint" className="text-blue-600 underline">File a Complaint</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};