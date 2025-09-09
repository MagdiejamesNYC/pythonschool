import React from 'react';
import { Shield, Lock, Eye, Users, Mail, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-blue-600" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Account Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Email address (for account creation and authentication via Supabase)</li>
                <li>Encrypted password (stored securely by Supabase Auth)</li>
                <li>Account creation and last login timestamps</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Learning Progress Data</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Chapter completion status and progress</li>
                <li>Quiz answers and scores</li>
                <li>Flashcard interaction history</li>
                <li>Points earned and achievements unlocked</li>
                <li>Coding project submissions and completion status</li>
                <li>Virtual creatures collected</li>
                <li>Performance analytics (achiever status: low/average/high achiever)</li>
                <li>Quiz retry counts and learning patterns</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">AI Interaction Data</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Questions submitted to DeepSeek AI for personalized feedback</li>
                <li>Student answers and AI-generated responses</li>
                <li>Learning context data (chapter, difficulty level, performance status)</li>
                <li>AI feedback preferences and interaction history</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Technical Data</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Browser type and version</li>
                <li>Device information and screen resolution</li>
                <li>IP address and general location (for security purposes)</li>
                <li>Session duration and activity timestamps</li>
                <li>Error logs and performance metrics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-green-600" />
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li><strong>Educational Services:</strong> Track learning progress, provide personalized content, and generate achievement reports</li>
                <li><strong>AI-Powered Learning:</strong> Send anonymized learning data to DeepSeek AI to generate personalized feedback and hints</li>
                <li><strong>Account Management:</strong> Authenticate users, maintain account security, and sync progress across devices</li>
                <li><strong>Performance Analytics:</strong> Analyze learning patterns to improve educational effectiveness</li>
                <li><strong>Platform Improvement:</strong> Identify technical issues, optimize performance, and enhance user experience</li>
                <li><strong>Communication:</strong> Send important updates about your account or the service (no marketing emails)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-orange-600" />
                Information Sharing and Third Parties
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Third-Party Services We Use</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Supabase (Database & Authentication)</h4>
                <ul className="list-disc pl-6 text-blue-700 text-sm">
                  <li>Stores user accounts, progress data, and learning analytics</li>
                  <li>Provides secure authentication and data encryption</li>
                  <li>Data stored in secure, SOC 2 compliant infrastructure</li>
                  <li>Privacy Policy: <a href="https://supabase.com/privacy" className="underline">https://supabase.com/privacy</a></li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-purple-800 mb-2">DeepSeek AI (Educational AI)</h4>
                <ul className="list-disc pl-6 text-purple-700 text-sm">
                  <li>Receives anonymized learning context and student responses</li>
                  <li>Generates personalized educational feedback and hints</li>
                  <li>No personally identifiable information is shared</li>
                  <li>Data used solely for educational response generation</li>
                  <li>Privacy Policy: <a href="https://platform.deepseek.com/privacy" className="underline">https://platform.deepseek.com/privacy</a></li>
                </ul>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-teal-800 mb-2">Pexels (Stock Images)</h4>
                <ul className="list-disc pl-6 text-teal-700 text-sm">
                  <li>Provides educational images and visual content</li>
                  <li>No user data is shared with Pexels</li>
                  <li>Images loaded directly from Pexels CDN</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-700 mb-3">We Do NOT Share Your Data With</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Advertising networks or marketing companies</li>
                <li>Social media platforms</li>
                <li>Data brokers or analytics companies</li>
                <li>Any third parties for commercial purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security and Storage</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li><strong>Encryption:</strong> All data is encrypted in transit (HTTPS) and at rest</li>
                <li><strong>Authentication:</strong> Secure password hashing and session management</li>
                <li><strong>Access Control:</strong> Role-based access with principle of least privilege</li>
                <li><strong>Infrastructure:</strong> Hosted on secure, compliant cloud infrastructure</li>
                <li><strong>Monitoring:</strong> Continuous security monitoring and threat detection</li>
                <li><strong>Backups:</strong> Regular encrypted backups with secure retention policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights and Choices</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Portability:</strong> Export your learning progress data</li>
                <li><strong>AI Opt-out:</strong> Disable AI-powered features in settings</li>
                <li><strong>Local Storage:</strong> Clear browser data to remove locally stored progress</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children's Privacy (COPPA)</h2>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Important:</strong> This service is designed for educational use but does not knowingly collect personal information from children under 13 without verifiable parental consent. If you are under 13, please have a parent or guardian create and manage your account.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">International Users</h2>
              <p className="text-gray-600">
                Our services are hosted globally through Supabase's infrastructure. By using our service, you consent to the transfer and processing of your information in countries where our service providers operate, which may have different privacy laws than your country of residence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-2 text-purple-600" />
                Contact Information
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Privacy Officer:</strong> [Your Name]<br />
                  <strong>Email:</strong> privacy@pythonacademy.edu<br />
                  <strong>Address:</strong> [Your Institution Address]<br />
                  <strong>Phone:</strong> [Your Phone Number]
                </p>
                <p className="text-sm text-gray-600">
                  For privacy-related inquiries, data requests, or compliance questions, please contact us using the information above. We will respond to all requests within 30 days.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Continued use of the service after changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};