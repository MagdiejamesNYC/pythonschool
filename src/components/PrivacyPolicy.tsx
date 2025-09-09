import React from 'react';
import { useState } from 'react';
import { Shield, Lock, Eye, Users, FileText, Phone } from 'lucide-react';
import { ContactModal } from './ContactModal';

export const PrivacyPolicy: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy and data protection are our top priorities
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Section 1 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Student Information:</strong> name, grade level, class assignments, and related educational records provided by schools.</li>
                  <li><strong>Account Information:</strong> usernames, passwords, and parent/teacher contact details.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data.</li>
                  <li><strong>Optional Information:</strong> messages, uploads, or content created within the platform.</li>
                </ul>
                <p className="font-medium text-gray-800">We do not require students to provide unnecessary personal information.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Information</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>We use collected information only for educational purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and improve our services.</li>
                  <li>To enable teachers and schools to manage classes and student work.</li>
                  <li>To communicate with parents, teachers, and administrators.</li>
                  <li>To ensure compliance with school policies and legal requirements.</li>
                </ul>
                <p className="font-medium text-gray-800">We do not sell, rent, or use student data for targeted advertising.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">3. FERPA Compliance</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>We comply with FERPA by ensuring:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Student records are shared only with authorized school officials who have a legitimate educational interest.</li>
                  <li>Parents and eligible students have the right to access, review, and request corrections to educational records.</li>
                  <li>We will not disclose personally identifiable information without prior written consent, except as permitted by law.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">4. COPPA Compliance</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>Our services comply with COPPA requirements:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not knowingly collect personal information from children under 13 without verifiable parental consent.</li>
                  <li>Schools may act as agents of parents to provide consent when using our services for educational purposes.</li>
                  <li>Parents can review, request deletion, and refuse further collection of their child's information at any time by contacting us.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-teal-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">5. Data Sharing</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>We only share data in these limited situations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With schools and educators who use our services.</li>
                  <li>With service providers who help us operate the platform (e.g., hosting providers), under strict confidentiality agreements.</li>
                  <li>If required by law, court order, or government regulation.</li>
                </ul>
                <p className="font-medium text-gray-800">We never sell or trade student information.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Lock className="w-4 h-4 text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">6. Data Security</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>We take security seriously and use safeguards to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest.</li>
                  <li>Role-based access controls (only authorized staff see relevant data).</li>
                  <li>Regular system monitoring and security updates.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">7. Data Retention</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>We keep personal information only as long as necessary to provide educational services.</li>
                  <li>Schools and parents may request deletion of student data at any time.</li>
                  <li>Upon termination of services, we securely delete all stored student records.</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-pink-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">8. Accessibility</h2>
              </div>
              <div className="text-gray-600">
                <p>We are committed to ensuring our website is accessible to all users in compliance with the ADA and WCAG 2.1 AA standards. If you encounter any issues, please contact us.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">9. Your Rights</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>Depending on your role (student, parent, teacher), you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your or your child's personal information.</li>
                  <li>Request corrections or deletions.</li>
                  <li>Withdraw consent for further data collection (for children under 13).</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gray-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">10. Contact Us</h2>
              </div>
              <div className="text-gray-600">
                <p>If you have questions about this Privacy Policy or our compliance with FERPA, COPPA, or other applicable laws, please contact us using the button below.</p>
                <div className="mt-4">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 font-medium"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8 mt-8">
              <div className="text-center text-gray-500 text-sm">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p className="mt-2">This Privacy Policy is designed to comply with FERPA, COPPA, and other applicable privacy laws.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </>
  );
};