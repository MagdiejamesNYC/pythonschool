import React from 'react';
import { Brain, Lightbulb, Target, BookOpen, Sparkles } from 'lucide-react';
import { AIFeedback as AIFeedbackType } from '../lib/ai';

interface AIFeedbackProps {
  feedback: AIFeedbackType;
  onClose: () => void;
  onNextStep: (step: string) => void;
}

export const AIFeedback: React.FC<AIFeedbackProps> = ({ feedback, onClose, onNextStep }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              feedback.isCorrect 
                ? 'bg-green-100 text-green-600' 
                : 'bg-blue-100 text-blue-600'
            }`}>
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">AI Tutor Feedback</h3>
              <p className="text-gray-600">Personalized learning insights</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Result Badge */}
        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 ${
          feedback.isCorrect 
            ? 'bg-green-100 text-green-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">
            {feedback.isCorrect ? 'Correct Answer!' : 'Learning Opportunity'}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(feedback.difficulty)}`}>
            {feedback.difficulty}
          </span>
        </div>

        {/* Explanation */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
            Explanation
          </h4>
          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
            {feedback.explanation}
          </p>
        </div>

        {/* Encouragement */}
        <div className="mb-6">
          <div className={`p-4 rounded-lg border-l-4 ${
            feedback.isCorrect 
              ? 'bg-green-50 border-green-400' 
              : 'bg-blue-50 border-blue-400'
          }`}>
            <p className="text-gray-800 font-medium">{feedback.encouragement}</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <Target className="w-5 h-5 mr-2 text-purple-500" />
            Next Steps
          </h4>
          <div className="space-y-2">
            {feedback.nextSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => onNextStep(step)}
                className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 group-hover:text-purple-800">{step}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Related Topics */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-teal-500" />
            Related Topics to Explore
          </h4>
          <div className="flex flex-wrap gap-2">
            {feedback.relatedTopics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Continue Learning
          </button>
          <button
            onClick={() => onNextStep('Review lesson material')}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium"
          >
            Review Lesson
          </button>
        </div>
      </div>
    </div>
  );
};