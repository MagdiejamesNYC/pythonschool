import React from 'react';
import { Baby, Shield, Users, AlertTriangle, Mail } from 'lucide-react';

export const COPPACompliance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Baby className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">COPPA Compliance Statement</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600" />
                COPPA Overview
              </h2>
              <p className="text-gray-600 mb-4">
                The Children's Online Privacy Protection Act (COPPA) protects the privacy of children under 13 years of age. Python Academy is committed to COPPA compliance and protecting young learners' privacy.
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Our COPPA Commitment</h3>
                <p className="text-green-700 text-sm">
                  We do not knowingly collect personal information from children under 13 without verifiable parental consent. When used in educational settings, we work with schools to ensure proper consent and compliance procedures.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-800">Important Notice for Children Under 13</h3>
                </div>
                <p className="text-red-700 mb-3">
                  <strong>If you are under 13 years old, you MUST have a parent or guardian:</strong>
                </p>
                <ul className="list-disc pl-6 text-red-700 text-sm">
                  <li>Create and manage your account</li>
                  <li>Provide consent for data collection and use</li>
                  <li>Review and approve your use of AI-powered features</li>
                  <li>Monitor your learning activities and progress</li>
                  <li>Make decisions about data sharing and retention</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-purple-600" />
                Information We Collect from Children
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">With Proper Consent, We May Collect</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Account Information:</strong> Email address (parent/guardian or school-provided)</li>
                <li><strong>Learning Progress:</strong> Chapter completion, quiz scores, and achievement data</li>
                <li><strong>Educational Content:</strong> Coding projects, quiz answers, and learning interactions</li>
                <li><strong>AI Interactions:</strong> Questions and responses for personalized educational feedback</li>
                <li><strong>Usage Data:</strong> Time spent learning, features used, and progress patterns</li>
                <li><strong>Technical Data:</strong> Device information and error logs (for platform improvement)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">We Do NOT Collect</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Full names (unless provided by school with consent)</li>
                <li>Home addresses or phone numbers</li>
                <li>Photos or videos of children</li>
                <li>Social security numbers or other government IDs</li>
                <li>Geolocation data beyond general region</li>
                <li>Information from social media profiles</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Parental Consent Requirements</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">When Consent is Required</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Before collecting any personal information from children under 13</li>
                <li>Before using AI features that process student responses</li>
                <li>Before sharing data with educational institutions</li>
                <li>Before any material changes to our privacy practices</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">How We Obtain Consent</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">For Individual/Family Use</h4>
                <ul className="list-disc pl-6 text-blue-700 text-sm">
                  <li>Email verification sent to parent/guardian email address</li>
                  <li>Detailed consent form explaining data collection and use</li>
                  <li>Option to review and approve specific features</li>
                  <li>Clear instructions for withdrawing consent</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-purple-800 mb-2">For School/Educational Use</h4>
                <ul className="list-disc pl-6 text-purple-700 text-sm">
                  <li>Schools act as agents for parents in providing consent</li>
                  <li>Institutional agreements include COPPA compliance terms</li>
                  <li>Schools must notify parents of third-party service use</li>
                  <li>Parents retain right to review and delete child's data</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Children's Information</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Educational Purposes Only</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Learning Progress:</strong> Track completion of lessons and activities</li>
                <li><strong>Personalized Education:</strong> Adapt content difficulty and provide targeted feedback</li>
                <li><strong>Achievement Recognition:</strong> Award points, badges, and unlock new content</li>
                <li><strong>AI-Powered Help:</strong> Generate personalized hints and explanations</li>
                <li><strong>Progress Reports:</strong> Provide learning summaries to parents/teachers</li>
                <li><strong>Platform Improvement:</strong> Analyze usage patterns to enhance educational effectiveness</li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Prohibited Uses</h4>
                <ul className="list-disc pl-6 text-yellow-700 text-sm">
                  <li>No advertising or marketing to children</li>
                  <li>No sale or rental of children's information</li>
                  <li>No behavioral advertising based on child's activities</li>
                  <li>No creation of profiles for non-educational purposes</li>
                  <li>No sharing with third parties for commercial purposes</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Parental Rights and Controls</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Parents Have the Right To</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Review:</strong> Access all personal information collected from their child</li>
                <li><strong>Delete:</strong> Request deletion of their child's personal information</li>
                <li><strong>Refuse:</strong> Refuse further collection or use of their child's information</li>
                <li><strong>Control:</strong> Manage which features their child can access</li>
                <li><strong>Monitor:</strong> Receive regular reports on their child's learning progress</li>
                <li><strong>Withdraw:</strong> Withdraw consent at any time</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">How to Exercise These Rights</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Contact our COPPA Compliance Officer:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-600 text-sm">
                  <li><strong>Email:</strong> coppa@pythonacademy.edu</li>
                  <li><strong>Phone:</strong> [Your Phone Number]</li>
                  <li><strong>Mail:</strong> [Your Address]</li>
                  <li><strong>Response Time:</strong> We will respond within 5 business days</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Features and Children</h2>
              
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-800 mb-2">DeepSeek AI Integration</h3>
                <p className="text-purple-700 text-sm mb-2">
                  Our platform uses AI to provide personalized educational feedback. For children under 13:
                </p>
                <ul className="list-disc pl-6 text-purple-700 text-sm">
                  <li>Parental consent required before enabling AI features</li>
                  <li>Only educational content and context sent to AI (no personal identifiers)</li>
                  <li>AI responses reviewed for age-appropriateness</li>
                  <li>Parents can disable AI features at any time</li>
                  <li>AI interactions logged and available for parental review</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-700 mb-3">AI Safety Measures</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Content filtering to ensure age-appropriate responses</li>
                <li>No collection of voice or video data for AI processing</li>
                <li>Regular audits of AI-generated content</li>
                <li>Clear labeling of AI-generated vs. human-created content</li>
                <li>Option to use platform without AI features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security for Children</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Enhanced Protection Measures</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Encryption:</strong> All children's data encrypted with advanced security</li>
                <li><strong>Access Limits:</strong> Strict role-based access to children's information</li>
                <li><strong>Audit Trails:</strong> Comprehensive logging of all access to children's data</li>
                <li><strong>Regular Reviews:</strong> Quarterly security assessments for child data protection</li>
                <li><strong>Staff Training:</strong> Specialized COPPA training for all team members</li>
                <li><strong>Incident Response:</strong> Immediate notification to parents of any security incidents</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Retention for Children</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Retention Limits</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Children's data retained only as long as necessary for educational purposes</li>
                <li>Automatic deletion of inactive child accounts after 12 months</li>
                <li>Immediate deletion upon parental request</li>
                <li>No retention of data after child reaches age 13 without new consent</li>
                <li>Secure deletion procedures with verification</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-2 text-green-600" />
                Contact Information
              </h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">COPPA Compliance Officer</h3>
                <p className="text-green-700 mb-2">
                  <strong>Name:</strong> [Your Name]<br />
                  <strong>Title:</strong> Children's Privacy Officer<br />
                  <strong>Email:</strong> coppa@pythonacademy.edu<br />
                  <strong>Phone:</strong> [Your Phone Number]<br />
                  <strong>Address:</strong> [Your Institution Address]
                </p>
                
                <h4 className="font-semibold text-green-800 mb-2 mt-4">For Parents and Guardians</h4>
                <p className="text-green-700 text-sm">
                  Contact us with any questions about your child's privacy, to exercise your parental rights, or to report concerns about COPPA compliance. We are committed to protecting your child's privacy and responding promptly to all inquiries.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li><strong>FTC COPPA Information:</strong> <a href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule" className="text-blue-600 underline">FTC COPPA Rule</a></li>
                <li><strong>COPPA Safe Harbor:</strong> <a href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule" className="text-blue-600 underline">Safe Harbor Provisions</a></li>
                <li><strong>Parent's Guide to COPPA:</strong> <a href="https://www.consumer.ftc.gov/articles/0031-protecting-your-childs-privacy-online" className="text-blue-600 underline">Protecting Your Child's Privacy Online</a></li>
                <li><strong>File a COPPA Complaint:</strong> <a href="https://www.ftccomplaintassistant.gov/" className="text-blue-600 underline">FTC Complaint Assistant</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};