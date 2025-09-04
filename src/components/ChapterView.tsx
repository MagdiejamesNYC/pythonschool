import React, { useState } from 'react';
import { ArrowLeft, BookOpen, HelpCircle, Trophy, RotateCcw, AlertCircle } from 'lucide-react';
import { Chapter } from '../types';
import { FlashCard } from './FlashCard';
import { Quiz } from './Quiz';

interface ChapterViewProps {
  chapter: Chapter;
  onBack: () => void;
  onFlipCard: (cardId: number) => void;
  onAnswerQuestion: (questionId: number, answerIndex: number) => boolean;
  getAchieverStatus?: (chapterId: number) => string | null;
  onRedoChapter?: (chapterId: number) => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ 
  chapter, 
  onBack, 
  onFlipCard, 
  onAnswerQuestion,
  getAchieverStatus,
  onRedoChapter
}) => {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz'>('flashcards');

  // Debug: Check if onRedoChapter is properly passed
  console.log('ChapterView received onRedoChapter:', typeof onRedoChapter);

  const flippedCards = chapter.flashcards.filter(card => card.flipped).length;
  const answeredQuestions = chapter.questions.filter(q => q.answered).length;
  const correctAnswers = chapter.questions.filter(q => q.correct).length;

  const allCardsFlipped = flippedCards === chapter.flashcards.length;
  const allQuestionsAnswered = answeredQuestions === chapter.questions.length;
  const perfectScore = correctAnswers === chapter.questions.length;
  const isCompleted = allCardsFlipped && allQuestionsAnswered && perfectScore;
  
  // Check if user has completed all activities but doesn't have perfect score
  const needsRedo = allCardsFlipped && allQuestionsAnswered && !perfectScore;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Chapters</span>
          </button>
        </div>

        {/* Chapter Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{chapter.title}</h1>
              <p className="text-gray-600 text-lg">{chapter.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              {isCompleted && (
                <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">Completed!</span>
                </div>
              )}
              {needsRedo && onRedoChapter && (
                <button
                  onClick={() => {
                    console.log('Redo button clicked for chapter:', chapter.id);
                    console.log('onRedoChapter function:', typeof onRedoChapter);
                    if (onRedoChapter) {
                      onRedoChapter(chapter.id);
                    } else {
                      console.error('onRedoChapter is not available');
                    }
                  }}
                  className="flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full hover:bg-orange-200 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span className="font-medium">Redo Chapter</span>
                </button>
              )}
            </div>
          </div>

          {/* Progress requirement message */}
          {needsRedo && (
            <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-orange-800 font-medium">Perfect Score Required</p>
                  <p className="text-orange-700 text-sm">
                    You need to answer all questions correctly (100%) to unlock the next chapter. 
                    Click "Redo Chapter" to try again!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Progress Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600">{flippedCards}/{chapter.flashcards.length}</div>
              <div className="text-purple-800 font-medium">Cards Flipped</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600">{answeredQuestions}/{chapter.questions.length}</div>
              <div className="text-blue-800 font-medium">Questions Answered</div>
            </div>
            <div className={`text-center p-4 rounded-xl ${
              perfectScore && allQuestionsAnswered ? 'bg-green-50' : 
              needsRedo ? 'bg-orange-50' : 'bg-teal-50'
            }`}>
              <div className={`text-3xl font-bold ${
                perfectScore && allQuestionsAnswered ? 'text-green-600' : 
                needsRedo ? 'text-orange-600' : 'text-teal-600'
              }`}>
                {correctAnswers}/{chapter.questions.length}
              </div>
              <div className={`font-medium ${
                perfectScore && allQuestionsAnswered ? 'text-green-800' : 
                needsRedo ? 'text-orange-800' : 'text-teal-800'
              }`}>
                Correct Answers {allQuestionsAnswered && `(${Math.round((correctAnswers / chapter.questions.length) * 100)}%)`}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'flashcards'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Flashcards</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'quiz'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-blue-50'
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            <span>Quiz</span>
          </button>
        </div>

        {/* Content */}
        {activeTab === 'flashcards' ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chapter.flashcards.map((card) => (
              <FlashCard
                key={card.id}
                card={card}
                onFlip={() => onFlipCard(card.id)}
              />
            ))}
          </div>
        ) : (
          <Quiz
            questions={chapter.questions}
            onAnswer={onAnswerQuestion}
            chapterTitle={chapter.title}
            getAchieverStatus={getAchieverStatus}
            chapterId={chapter.id}
            onRetryQuiz={() => {
              console.log('Retry quiz clicked for chapter:', chapter.id);
              if (onRedoChapter) {
                onRedoChapter(chapter.id);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};