import React from 'react';
import { Shield, FileText, Users, Baby, Eye, Lock, Mail } from 'lucide-react';

interface ComplianceHubProps {
  onViewChange: (view: string) => void;
}

export const ComplianceHub: React.FC<ComplianceHubProps> = ({ onViewChange }) => {
  const complianceDocuments = [
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800'
    },
    {
      id: 'ferpa-compliance',
      title: 'FERPA Compliance',
      description: 'Educational records privacy and institutional compliance',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800'
    },
    {
      id: 'coppa-compliance',
      title: 'COPPA Compliance',
      description: 'Children\'s privacy protection and parental rights',
      icon: Baby,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-800'
    },
    {
      id: 'accessibility-statement',
      title: 'Accessibility Statement',
      description: 'Our commitment to digital accessibility for all users',
      icon: Eye,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800'
    },
    {
      id: 'security-statement',
      title: 'Security & Data Retention',
      description: 'Data security measures and retention policies',
      icon: Lock,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-800'
    },
    {
      id: 'compliance-contact',
      title: 'Contact for Compliance',
      description: 'Get in touch with our compliance and legal team',
      icon: Mail,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Legal & Compliance</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy and security are our top priorities. Review our policies and compliance statements to understand how we protect your data and ensure accessibility for all users.
          </p>
        </div>

        {/* Compliance Documents Grid */}
        <div className="grid gap-6 max-w-4xl mx-auto md:grid-cols-2">
          {complianceDocuments.map((doc) => {
            const IconComponent = doc.icon;
            return (
              <div
                key={doc.id}
                onClick={() => onViewChange(doc.id)}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all transform hover:scale-[1.02] cursor-pointer hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${doc.color} mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{doc.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${doc.bgColor} ${doc.textColor}`}>
                    <FileText className="w-4 h-4 mr-1" />
                    View Document
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm mb-3">Have questions about our policies?</p>
              <button
                onClick={() => onViewChange('compliance-contact')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Get in Touch →
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">For Educators</h3>
              <p className="text-gray-600 text-sm mb-3">FERPA and institutional compliance</p>
              <button
                onClick={() => onViewChange('ferpa-compliance')}
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Learn More →
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Baby className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">For Parents</h3>
              <p className="text-gray-600 text-sm mb-3">Children's privacy and safety</p>
              <button
                onClick={() => onViewChange('coppa-compliance')}
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                View Rights →
              </button>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString()} | 
            <button
              onClick={() => onViewChange('compliance-contact')}
              className="text-purple-600 hover:text-purple-700 ml-1"
            >
              Report an issue
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};