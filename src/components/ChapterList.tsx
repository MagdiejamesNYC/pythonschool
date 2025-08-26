import React from 'react';
import { Lock, CheckCircle, Clock } from 'lucide-react';
import { Chapter } from '../types';

interface ChapterListProps {
  chapters: Chapter[];
  onChapterSelect: (chapter: Chapter) => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({ chapters, onChapterSelect }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Python Learning Path</h1>
          <p className="text-xl text-gray-600">Choose a chapter to start your journey</p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all transform hover:scale-[1.02] ${
                chapter.unlocked 
                  ? 'cursor-pointer hover:shadow-xl' 
                  : 'opacity-60 cursor-not-allowed'
              }`}
              onClick={() => chapter.unlocked && onChapterSelect(chapter)}
            >
              <div className="flex items-center p-6">
                {/* Chapter Number */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-6 ${
                  chapter.completed 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                    : chapter.unlocked
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                      : 'bg-gray-400'
                }`}>
                  {chapter.completed ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : chapter.unlocked ? (
                    chapter.id
                  ) : (
                    <Lock className="w-8 h-8" />
                  )}
                </div>

                {/* Chapter Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{chapter.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(chapter.difficulty)}`}>
                      {chapter.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{chapter.description}</p>
                  
                  {/* Progress indicators */}
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-purple-600">
                      <span>🎴</span>
                      <span>{chapter.flashcards.length} flashcards</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600">
                      <span>❓</span>
                      <span>{chapter.questions.length} questions</span>
                    </div>
                    {chapter.completed && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Icon */}
                <div className="ml-4">
                  {chapter.completed ? (
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  ) : chapter.unlocked ? (
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Lock className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Progress bar for unlocked chapters */}
              {chapter.unlocked && (
                <div className="px-6 pb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Progress</span>
                    <span>
                      {chapter.flashcards.filter(c => c.flipped).length + chapter.questions.filter(q => q.answered).length} / {chapter.flashcards.length + chapter.questions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${((chapter.flashcards.filter(c => c.flipped).length + chapter.questions.filter(q => q.answered).length) / (chapter.flashcards.length + chapter.questions.length)) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};