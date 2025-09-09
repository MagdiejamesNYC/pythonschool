import React from 'react';
import { Accessibility, Eye, Ear, Hand, Brain, Monitor } from 'lucide-react';

export const AccessibilityStatement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Accessibility className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Accessibility Statement</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment to Accessibility</h2>
              <p className="text-gray-600 mb-4">
                Python Academy is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Our Goal</h3>
                <p className="text-blue-700 text-sm">
                  We strive to make our Python learning platform accessible to all students, regardless of their abilities or disabilities, ensuring that everyone can participate in coding education.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Standards</h2>
              <p className="text-gray-600 mb-4">
                Python Academy aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
              </p>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Standards We Follow</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>WCAG 2.1 Level AA:</strong> International standard for web accessibility</li>
                <li><strong>Section 508:</strong> U.S. federal accessibility requirements</li>
                <li><strong>ADA Compliance:</strong> Americans with Disabilities Act digital accessibility</li>
                <li><strong>EN 301 549:</strong> European accessibility standard</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-green-800">Visual Accessibility</h3>
                  </div>
                  <ul className="list-disc pl-6 text-green-700 text-sm">
                    <li>High contrast color schemes</li>
                    <li>Scalable text and UI elements</li>
                    <li>Alternative text for images</li>
                    <li>Clear visual hierarchy</li>
                    <li>Focus indicators for navigation</li>
                    <li>Color is not the only way to convey information</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Ear className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-purple-800">Auditory Accessibility</h3>
                  </div>
                  <ul className="list-disc pl-6 text-purple-700 text-sm">
                    <li>Text alternatives for audio content</li>
                    <li>Visual feedback for audio cues</li>
                    <li>No auto-playing audio</li>
                    <li>Captions for video content</li>
                    <li>Screen reader compatible</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Hand className="w-5 h-5 text-orange-600" />
                    <h3 className="font-semibold text-orange-800">Motor Accessibility</h3>
                  </div>
                  <ul className="list-disc pl-6 text-orange-700 text-sm">
                    <li>Full keyboard navigation support</li>
                    <li>Large clickable areas</li>
                    <li>No time-sensitive interactions</li>
                    <li>Drag and drop alternatives</li>
                    <li>Customizable interaction methods</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="w-5 h-5 text-teal-600" />
                    <h3 className="font-semibold text-teal-800">Cognitive Accessibility</h3>
                  </div>
                  <ul className="list-disc pl-6 text-teal-700 text-sm">
                    <li>Clear and simple language</li>
                    <li>Consistent navigation patterns</li>
                    <li>Progress indicators</li>
                    <li>Error prevention and recovery</li>
                    <li>Multiple ways to access content</li>
                    <li>Customizable learning pace</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Monitor className="w-6 h-6 mr-2 text-blue-600" />
                Technical Accessibility Features
              </h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Keyboard Navigation</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Tab Navigation:</strong> All interactive elements accessible via Tab key</li>
                <li><strong>Skip Links:</strong> Skip to main content and navigation areas</li>
                <li><strong>Focus Management:</strong> Clear focus indicators and logical tab order</li>
                <li><strong>Keyboard Shortcuts:</strong> Common shortcuts for frequent actions</li>
                <li><strong>No Keyboard Traps:</strong> Users can navigate away from any element</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Screen Reader Support</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Semantic HTML:</strong> Proper heading structure and landmarks</li>
                <li><strong>ARIA Labels:</strong> Descriptive labels for complex interactions</li>
                <li><strong>Alt Text:</strong> Meaningful descriptions for all images</li>
                <li><strong>Form Labels:</strong> Clear labels and instructions for all inputs</li>
                <li><strong>Status Updates:</strong> Live regions for dynamic content changes</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Visual Design</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Color Contrast:</strong> Minimum 4.5:1 ratio for normal text, 3:1 for large text</li>
                <li><strong>Responsive Design:</strong> Works on all screen sizes and orientations</li>
                <li><strong>Zoom Support:</strong> Functional up to 200% zoom without horizontal scrolling</li>
                <li><strong>Text Spacing:</strong> Adequate line height and character spacing</li>
                <li><strong>Motion Control:</strong> Reduced motion options for sensitive users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assistive Technology Compatibility</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Tested With</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Screen Readers</h4>
                  <ul className="list-disc pl-6 text-gray-600 text-sm">
                    <li>NVDA (Windows)</li>
                    <li>JAWS (Windows)</li>
                    <li>VoiceOver (macOS/iOS)</li>
                    <li>TalkBack (Android)</li>
                    <li>Orca (Linux)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Other Tools</h4>
                  <ul className="list-disc pl-6 text-gray-600 text-sm">
                    <li>Voice control software</li>
                    <li>Switch navigation devices</li>
                    <li>Eye-tracking systems</li>
                    <li>Magnification software</li>
                    <li>Alternative keyboards</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Educational Accessibility</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Learning Accommodations</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Multiple Learning Styles:</strong> Visual, auditory, and kinesthetic learning options</li>
                <li><strong>Flexible Pacing:</strong> Self-paced learning with no time limits</li>
                <li><strong>Content Alternatives:</strong> Multiple ways to access the same information</li>
                <li><strong>Progress Tracking:</strong> Clear indicators of learning progress</li>
                <li><strong>Retry Options:</strong> Ability to retry quizzes and activities</li>
                <li><strong>AI Assistance:</strong> Personalized hints and explanations</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Content Accessibility</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Plain Language:</strong> Clear, simple explanations of complex concepts</li>
                <li><strong>Visual Examples:</strong> Code examples with syntax highlighting</li>
                <li><strong>Interactive Elements:</strong> Hands-on coding practice</li>
                <li><strong>Progress Indicators:</strong> Clear feedback on learning progress</li>
                <li><strong>Error Messages:</strong> Helpful, non-judgmental error explanations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Known Limitations</h2>
              <p className="text-gray-600 mb-4">
                While we strive for full accessibility, we acknowledge some current limitations:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Code Editor:</strong> Some advanced code editing features may have limited screen reader support</li>
                <li><strong>Visual Animations:</strong> Some decorative animations cannot be fully disabled</li>
                <li><strong>Third-party Content:</strong> External images from Pexels may lack comprehensive alt text</li>
                <li><strong>AI Responses:</strong> AI-generated content may occasionally lack optimal accessibility markup</li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">We're Working On</h4>
                <ul className="list-disc pl-6 text-yellow-700 text-sm">
                  <li>Enhanced code editor accessibility</li>
                  <li>Improved AI response formatting</li>
                  <li>Additional keyboard shortcuts</li>
                  <li>Better mobile accessibility</li>
                  <li>Voice input support for coding</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testing and Evaluation</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Our Testing Process</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Automated Testing:</strong> Regular scans with accessibility testing tools</li>
                <li><strong>Manual Testing:</strong> Human evaluation of accessibility features</li>
                <li><strong>User Testing:</strong> Feedback from users with disabilities</li>
                <li><strong>Expert Review:</strong> Third-party accessibility audits</li>
                <li><strong>Continuous Monitoring:</strong> Ongoing accessibility assessment</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Testing Tools We Use</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>axe-core accessibility engine</li>
                <li>WAVE Web Accessibility Evaluation Tool</li>
                <li>Lighthouse accessibility audits</li>
                <li>Color contrast analyzers</li>
                <li>Screen reader testing</li>
                <li>Keyboard navigation testing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedback and Support</h2>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-800 mb-2">We Want to Hear From You</h3>
                <p className="text-blue-700 text-sm">
                  Your feedback is essential to improving our accessibility. Please let us know if you encounter any accessibility barriers or have suggestions for improvement.
                </p>
              </div>

              <h3 className="text-xl font-medium text-gray-700 mb-3">How to Contact Us</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Accessibility Coordinator:</strong> [Your Name]<br />
                  <strong>Email:</strong> accessibility@pythonacademy.edu<br />
                  <strong>Phone:</strong> [Your Phone Number]<br />
                  <strong>Address:</strong> [Your Institution Address]
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Response Time:</strong> We aim to respond to accessibility inquiries within 2 business days.
                </p>
              </div>

              <h3 className="text-xl font-medium text-gray-700 mb-3 mt-4">Alternative Access Methods</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Phone Support:</strong> Verbal assistance with platform navigation</li>
                <li><strong>Email Support:</strong> Detailed written instructions and help</li>
                <li><strong>Video Calls:</strong> Screen-sharing assistance for complex issues</li>
                <li><strong>Alternative Formats:</strong> Content in different formats upon request</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ongoing Improvements</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Our Commitment</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Regular accessibility audits and updates</li>
                <li>Staff training on accessibility best practices</li>
                <li>User feedback integration into development process</li>
                <li>Staying current with accessibility standards and guidelines</li>
                <li>Collaboration with disability advocacy organizations</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Future Enhancements</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Voice-controlled coding interface</li>
                <li>Enhanced mobile accessibility</li>
                <li>Customizable user interface themes</li>
                <li>Advanced screen reader optimizations</li>
                <li>Multi-language accessibility support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li><strong>Web Content Accessibility Guidelines:</strong> <a href="https://www.w3.org/WAI/WCAG21/quickref/" className=\"text-blue-600 underline">WCAG 2.1 Quick Reference</a></li>
                <li><strong>WebAIM:</strong> <a href="https://webaim.org/" className=\"text-blue-600 underline">Web Accessibility Resources</a></li>
                <li><strong>Section 508:</strong> <a href="https://www.section508.gov/" className=\"text-blue-600 underline">Federal Accessibility Requirements</a></li>
                <li><strong>ADA.gov:</strong> <a href="https://www.ada.gov/" className=\"text-blue-600 underline">Americans with Disabilities Act</a></li>
                <li><strong>A11Y Project:</strong> <a href="https://www.a11yproject.com/" className=\"text-blue-600 underline">Community-driven accessibility resources</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};