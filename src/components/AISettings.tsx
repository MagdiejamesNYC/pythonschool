import React, { useState } from 'react';
import { Settings, Brain, Key, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { testDeepSeekConnection } from '../lib/ai';

interface AISettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AISettings: React.FC<AISettingsProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('deepseek_api_key') || '');
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('deepseek_api_key', apiKey.trim());
      setConnectionStatus('success');
      setTimeout(() => setConnectionStatus('idle'), 3000);
    }
  };

  const handleTestConnection = async () => {
    if (!apiKey.trim() && !import.meta.env.VITE_DEEPSEEK_API_KEY) {
      setConnectionStatus('error');
      return;
    }

    setIsTestingConnection(true);
    try {
      // Save the key temporarily for testing
      if (apiKey.trim()) {
        localStorage.setItem('deepseek_api_key', apiKey.trim());
      }
      
      const success = await testDeepSeekConnection();
      
      if (success) {
        setConnectionStatus('success');
        if (apiKey.trim()) {
          handleSaveApiKey();
        }
      } else {
        setConnectionStatus('error');
      }
    } catch (error) {
      setConnectionStatus('error');
    } finally {
      setIsTestingConnection(false);
      setTimeout(() => setConnectionStatus('idle'), 3000);
    }
  };

  const isConfigured = () => {
    const envKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    const localKey = localStorage.getItem('deepseek_api_key');
    return !!(envKey && envKey !== 'your-api-key-here') || !!localKey;
  };

  const isUsingEnvKey = () => {
    const envKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    return envKey && envKey !== 'your-api-key-here';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">AI Settings</h3>
              <p className="text-gray-600 text-sm">DeepSeek AI-powered features</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Status */}
        <div className={`p-4 rounded-lg mb-6 ${
          isConfigured() 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-yellow-50 border border-yellow-200'
        }`}>
          <div className="flex items-center space-x-2">
            {isConfigured() ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-medium">
                  AI Features Enabled {isUsingEnvKey() && '(Secure)'}
                </span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-800 font-medium">AI Features Disabled</span>
              </>
            )}
          </div>
          <p className="text-sm mt-1 text-gray-600">
            {isConfigured() 
              ? 'Students will receive personalized AI feedback and hints powered by DeepSeek.'
              : 'Add your DeepSeek API key to enable AI-powered learning features.'
            }
          </p>
        </div>

        {/* Environment Key Notice */}
        {isUsingEnvKey() && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Secure Configuration</span>
            </div>
            <p className="text-sm mt-1 text-blue-700">
              API key is securely configured via environment variables. No additional setup needed!
            </p>
          </div>
        )}

        {/* API Key Input - only show if not using env key */}
        {!isUsingEnvKey() && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              DeepSeek API Key
            </label>
            <div className="relative">
              <Key className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Your API key is stored locally and never sent to our servers.
            </p>
          </div>
        )}

        {/* Connection Status */}
        {connectionStatus !== 'idle' && (
          <div className={`p-3 rounded-lg mb-4 ${
            connectionStatus === 'success' 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <p className={`text-sm ${
              connectionStatus === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {connectionStatus === 'success' 
                ? 'DeepSeek AI connection successful! 🎉' 
                : 'Connection failed. Please check your API key and try again.'
              }
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleTestConnection}
            disabled={(!apiKey.trim() && !isUsingEnvKey()) || isTestingConnection}
            className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isTestingConnection ? 'Testing...' : 'Test Connection'}
          </button>
          {!isUsingEnvKey() && (
            <button
              onClick={handleSaveApiKey}
              disabled={!apiKey.trim()}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
            >
              Save
            </button>
          )}
        </div>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-2">How to get a DeepSeek API key:</h4>
          <ol className="text-sm text-blue-700 space-y-1">
            <li>1. Visit <a href="https://platform.deepseek.com" target="_blank" rel="noopener noreferrer" className="underline">platform.deepseek.com</a></li>
            <li>2. Sign up or log in to your account</li>
            <li>3. Navigate to API Keys section</li>
            <li>4. Create a new API key</li>
            <li>5. Copy and paste the key here</li>
          </ol>
          <p className="text-xs text-blue-600 mt-2">
            💡 DeepSeek offers competitive pricing and excellent performance for educational use!
          </p>
        </div>
      </div>
    </div>
  );
};