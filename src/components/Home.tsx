import React from 'react';
import { Play, Award, TrendingUp, Users } from 'lucide-react';
import { UserProgress } from '../types';

interface HomeProps {
  progress: UserProgress;
  onStartLearning: () => void;
}

export const Home: React.FC<HomeProps> = ({ progress, onStartLearning }) => {
  const completionRate = (progress.completedChapters.length / 14) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
            <span className="text-6xl">🐍</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Python Academy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Master Python programming through interactive lessons, collect amazing creatures, 
            and build your coding skills one chapter at a time!
          </p>
          <button
            onClick={onStartLearning}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <Play className="w-6 h-6 inline mr-2" />
            Start Learning Python
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <span className="text-3xl font-bold text-gray-800">{completionRate.toFixed(0)}%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Progress</h3>
            <p className="text-gray-600">Chapters completed</p>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-yellow-500" />
              <span className="text-3xl font-bold text-gray-800">{progress.points}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Points Earned</h3>
            <p className="text-gray-600">Total learning points</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-teal-600" />
              <span className="text-3xl font-bold text-gray-800">{progress.collectedCreatures.length}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Creatures</h3>
            <p className="text-gray-600">Collected companions</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">14 Chapters</h3>
            <p className="text-gray-600 text-sm">Progressive learning from basics to advanced</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎴</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Cards</h3>
            <p className="text-gray-600 text-sm">Learn through engaging flashcards</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Gamification</h3>
            <p className="text-gray-600 text-sm">Earn points and collect creatures</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Creature Collection</h3>
            <p className="text-gray-600 text-sm">Hatch eggs and discover new friends</p>
          </div>
        </div>
      </div>
    </div>
  );
};