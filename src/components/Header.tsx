import React, { useState } from 'react';
import { Trophy, Zap, Egg, User, LogOut, Brain, Settings } from 'lucide-react';
import { UserProgress } from '../types';
import { useAuth } from '../hooks/useAuth';
import { AuthModal } from './AuthModal';
import { AISettings } from './AISettings';

interface HeaderProps {
  progress: UserProgress;
  onSaveProgress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ progress, onSaveProgress }) => {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAISettings, setShowAISettings] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut(onSaveProgress);
    } catch (error) {
      console.error('Error during sign out:', error);
    } finally {
      setIsSigningOut(false);
    }
  };

  const isAIConfigured = () => {
    const envKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    const localKey = localStorage.getItem('deepseek_api_key');
    return !!(envKey && envKey !== 'your-api-key-here') || !!localKey;
  };

  return (
    <>
      <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐍</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Python Academy</h1>
                <p className="text-purple-100 text-sm">Master Python Through Play</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">{progress.points}</span>
                <span className="text-purple-100 text-sm">points</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Egg className="w-5 h-5 text-orange-300" />
                <span className="font-semibold">{progress.eggs}</span>
                <span className="text-purple-100 text-sm">eggs</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Trophy className="w-5 h-5 text-gold" />
                <span className="font-semibold">{progress.completedChapters.length}</span>
                <span className="text-purple-100 text-sm">/ 14</span>
              </div>

              {/* AI Settings Button */}
              <button
                onClick={() => setShowAISettings(true)}
                className={`flex items-center space-x-2 rounded-full px-4 py-2 transition-all transform hover:scale-105 ${
                  isAIConfigured() 
                    ? 'bg-green-500/20 hover:bg-green-500/30 shadow-lg' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                title="AI Settings"
              >
                <Brain className={`w-5 h-5 ${isAIConfigured() ? 'text-green-300' : 'text-white'}`} />
                <span className="text-sm font-medium">
                  {isAIConfigured() ? 'AI On' : 'AI Off'}
                </span>
                {isAIConfigured() && (
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                )}
              </button>

              {/* User Authentication */}
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                    <User className="w-5 h-5 text-green-300" />
                    <span className="text-sm font-medium">{user.email}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    disabled={isSigningOut}
                    className={`flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 transition-colors ${
                      isSigningOut ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm">{isSigningOut ? 'Saving...' : 'Sign Out'}</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />

      <AISettings
        isOpen={showAISettings}
        onClose={() => setShowAISettings(false)}
      />
    </>
  );
};