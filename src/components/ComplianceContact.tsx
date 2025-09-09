import React from 'react';
import { Mail, Phone, MapPin, Clock, Shield, AlertCircle } from 'lucide-react';

export const ComplianceContact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800">Contact for Compliance</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              For all compliance-related inquiries, privacy concerns, accessibility issues, or regulatory questions, please contact our dedicated compliance team. We are committed to responding promptly and thoroughly to all compliance matters.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Primary Compliance Contacts</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-800">Chief Compliance Officer</h3>
                  </div>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>Name:</strong> [Your Name]</p>
                    <p><strong>Title:</strong> Chief Compliance Officer & Privacy Director</p>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>compliance@pythonacademy.edu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>[Your Direct Phone Number]</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <Mail className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-800">General Compliance</h3>
                  </div>
                  <div className="space-y-2 text-green-700">
                    <p><strong>Department:</strong> Legal & Compliance</p>
                    <p><strong>Institution:</strong> [Your Institution Name]</p>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>legal@pythonacademy.edu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>[Main Compliance Line]</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Specialized Compliance Areas</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">FERPA Compliance</h4>
                  <div className="text-purple-700 text-sm space-y-1">
                    <p><strong>Officer:</strong> [FERPA Officer Name]</p>
                    <p><strong>Email:</strong> ferpa@pythonacademy.edu</p>
                    <p><strong>Phone:</strong> [FERPA Phone]</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">COPPA Compliance</h4>
                  <div className="text-orange-700 text-sm space-y-1">
                    <p><strong>Officer:</strong> [COPPA Officer Name]</p>
                    <p><strong>Email:</strong> coppa@pythonacademy.edu</p>
                    <p><strong>Phone:</strong> [COPPA Phone]</p>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Accessibility</h4>
                  <div className="text-teal-700 text-sm space-y-1">
                    <p><strong>Coordinator:</strong> [Accessibility Coordinator]</p>
                    <p><strong>Email:</strong> accessibility@pythonacademy.edu</p>
                    <p><strong>Phone:</strong> [Accessibility Phone]</p>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Data Security</h4>
                  <div className="text-red-700 text-sm space-y-1">
                    <p><strong>Officer:</strong> [Security Officer Name]</p>
                    <p><strong>Email:</strong> security@pythonacademy.edu</p>
                    <p><strong>Phone:</strong> [Security Phone]</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Privacy Rights</h4>
                  <div className="text-yellow-700 text-sm space-y-1">
                    <p><strong>Officer:</strong> [Privacy Officer Name]</p>
                    <p><strong>Email:</strong> privacy@pythonacademy.edu</p>
                    <p><strong>Phone:</strong> [Privacy Phone]</p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">International Compliance</h4>
                  <div className="text-indigo-700 text-sm space-y-1">
                    <p><strong>Officer:</strong> [International Officer]</p>
                    <p><strong>Email:</strong> international@pythonacademy.edu</p>
                    <p><strong>Phone:</strong> [International Phone]</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-purple-600" />
                Physical Address
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-gray-700">
                  <p className="font-semibold mb-2">[Your Institution Name]</p>
                  <p>Compliance & Legal Affairs Department</p>
                  <p>[Street Address]</p>
                  <p>[City, State ZIP Code]</p>
                  <p>[Country]</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Mailing Instructions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mark correspondence "CONFIDENTIAL - COMPLIANCE MATTER"</li>
                    <li>• Include your contact information for response</li>
                    <li>• Specify the type of compliance issue (FERPA, COPPA, Privacy, etc.)</li>
                    <li>• For urgent matters, also contact us by phone or email</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                Response Times & Availability
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Standard Response Times</h4>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li><strong>Privacy Requests:</strong> 5 business days</li>
                    <li><strong>FERPA Inquiries:</strong> 3 business days</li>
                    <li><strong>COPPA Concerns:</strong> 2 business days</li>
                    <li><strong>Accessibility Issues:</strong> 2 business days</li>
                    <li><strong>General Compliance:</strong> 5 business days</li>
                    <li><strong>Data Requests:</strong> 30 days (as required by law)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">Emergency Response</h4>
                  <ul className="text-red-700 text-sm space-y-2">
                    <li><strong>Security Incidents:</strong> 1 hour</li>
                    <li><strong>Data Breaches:</strong> Immediate</li>
                    <li><strong>Child Safety Issues:</strong> Immediate</li>
                    <li><strong>Legal Emergencies:</strong> Same day</li>
                    <li><strong>Regulatory Deadlines:</strong> Priority handling</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-green-800 mb-2">Business Hours</h4>
                <div className="text-green-700 text-sm">
                  <p><strong>Regular Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EST</p>
                  <p><strong>Emergency Line:</strong> 24/7 for security incidents and urgent compliance matters</p>
                  <p><strong>Time Zone:</strong> Eastern Standard Time (EST) / Eastern Daylight Time (EDT)</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Types of Compliance Inquiries</h2>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Educational Records (FERPA)</h4>
                  <ul className="text-purple-700 text-sm list-disc pl-6">
                    <li>Student data access requests</li>
                    <li>Education record corrections</li>
                    <li>Consent and disclosure questions</li>
                    <li>Directory information policies</li>
                    <li>Third-party data sharing concerns</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Children's Privacy (COPPA)</h4>
                  <ul className="text-orange-700 text-sm list-disc pl-6">
                    <li>Parental consent requirements</li>
                    <li>Child data collection practices</li>
                    <li>Age verification processes</li>
                    <li>Data deletion requests</li>
                    <li>Parental rights and controls</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Accessibility Compliance</h4>
                  <ul className="text-teal-700 text-sm list-disc pl-6">
                    <li>WCAG 2.1 compliance questions</li>
                    <li>Assistive technology support</li>
                    <li>Accommodation requests</li>
                    <li>Accessibility barrier reports</li>
                    <li>Alternative format requests</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Data Privacy Rights</h4>
                  <ul className="text-blue-700 text-sm list-disc pl-6">
                    <li>Personal data access requests</li>
                    <li>Data portability requests</li>
                    <li>Correction of personal information</li>
                    <li>Data deletion requests</li>
                    <li>Opt-out of data processing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-xl font-semibold text-yellow-800">Important Notes</h3>
                </div>
                <ul className="text-yellow-700 text-sm space-y-2">
                  <li><strong>Confidentiality:</strong> All compliance communications are treated as confidential</li>
                  <li><strong>Documentation:</strong> We maintain records of all compliance inquiries and responses</li>
                  <li><strong>Legal Privilege:</strong> Communications may be protected by attorney-client privilege</li>
                  <li><strong>No Retaliation:</strong> We prohibit retaliation against individuals raising compliance concerns</li>
                  <li><strong>Anonymous Reporting:</strong> Anonymous compliance reports are accepted and investigated</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">How to Contact Us</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-blue-800 mb-2">Email</h4>
                  <p className="text-blue-700 text-sm">Preferred method for non-urgent matters</p>
                  <p className="text-blue-600 font-medium mt-2">compliance@pythonacademy.edu</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-800 mb-2">Phone</h4>
                  <p className="text-green-700 text-sm">For urgent matters and immediate assistance</p>
                  <p className="text-green-600 font-medium mt-2">[Your Phone Number]</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-purple-800 mb-2">Mail</h4>
                  <p className="text-purple-700 text-sm">For formal complaints and legal documents</p>
                  <p className="text-purple-600 font-medium mt-2">See address above</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">External Compliance Resources</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Regulatory Agencies</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>U.S. Department of Education (FERPA):</strong> <a href="mailto:FERPA@ed.gov" className="text-blue-600 underline">FERPA@ed.gov</a></li>
                  <li><strong>Federal Trade Commission (COPPA):</strong> <a href="https://www.ftccomplaintassistant.gov/" className=\"text-blue-600 underline">FTC Complaint Assistant</a></li>
                  <li><strong>Department of Justice (ADA):</strong> <a href="https://www.ada.gov/filing_complaint.htm" className=\"text-blue-600 underline">ADA Complaint Process</a></li>
                  <li><strong>State Privacy Offices:</strong> Contact your state's privacy or consumer protection office</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};