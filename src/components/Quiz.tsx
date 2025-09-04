import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, Brain, Lightbulb, TrendingUp, TrendingDown, Minus, RotateCcw, AlertTriangle } from 'lucide-react';
import { Question } from '../types';
import { analyzeStudentAnswer, generatePersonalizedHint, AIFeedback as AIFeedbackType } from '../lib/ai';
import { AIFeedback } from './AIFeedback';

interface QuizProps {
  questions: Question[];
  onAnswer: (questionId: number, answerIndex: number) => boolean;
  chapterTitle: string;
  getAchieverStatus?: (chapterId: number) => string | null;
  chapterId?: number;
  onRetryQuiz?: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ 
  questions, 
  onAnswer, 
  chapterTitle, 
  getAchieverStatus,
  chapterId = 1,
  onRetryQuiz
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<AIFeedbackType | null>(null);
  const [showAIFeedback, setShowAIFeedback] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [studentAttempts, setStudentAttempts] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState<string>('');
  const [isGeneratingHint, setIsGeneratingHint] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const answeredQuestions = questions.filter(q => q.answered).length;
  const correctAnswers = questions.filter(q => q.correct).length;
  const allQuestionsAnswered = answeredQuestions === questions.length;
  const hasIncorrectAnswers = allQuestionsAnswered && correctAnswers < questions.length;
  const hasPerfectScore = allQuestionsAnswered && correctAnswers === questions.length;

  // Get current achiever status
  const achieverStatus = getAchieverStatus ? getAchieverStatus(chapterId) : null;

  // Get performance icon based on achiever status
  const getPerformanceIcon = () => {
    if (!achieverStatus) return null;
    
    switch (achieverStatus) {
      case 'low achiever':
        return <TrendingDown className="w-4 h-4 text-orange-600" />;
      case 'average achiever':
        return <Minus className="w-4 h-4 text-blue-600" />;
      case 'high achiever':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      default:
        return null;
    }
  };

  const getPerformanceColor = () => {
    if (!achieverStatus) return 'text-gray-600';
    
    switch (achieverStatus) {
      case 'low achiever':
        return 'text-orange-600';
      case 'average achiever':
        return 'text-blue-600';
      case 'high achiever':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const handleAnswerSelect = async (answerIndex: number) => {
    if (isAnswered || currentQuestion.answered) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    setIsAnswered(true);
    setIsAnalyzing(true);
    
    const isCorrect = onAnswer(currentQuestion.id, answerIndex);
    
    // Track student attempt
    const studentAnswer = currentQuestion.options[answerIndex];
    setStudentAttempts(prev => [...prev, studentAnswer]);

    // Get updated achiever status after answering
    const updatedAchieverStatus = getAchieverStatus ? getAchieverStatus(chapterId) : null;

    // Analyze answer with AI
    try {
      const feedback = await analyzeStudentAnswer({
        questionText: currentQuestion.question,
        studentAnswer: studentAnswer,
        correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
        context: {
          chapterTitle,
          difficulty: 'Beginner', // You can make this dynamic based on chapter
          topic: chapterTitle,
          achieverStatus: updatedAchieverStatus || undefined,
          totalQuestionsAnswered: answeredQuestions + 1,
          correctAnswersCount: correctAnswers + (isCorrect ? 1 : 0)
        }
      });
      
      setAiFeedback(feedback);
    } catch (error) {
      console.error('Error getting AI feedback:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleGetHint = async () => {
    if (isGeneratingHint) return;
    
    setIsGeneratingHint(true);
    try {
      const hint = await generatePersonalizedHint(
        currentQuestion.question,
        studentAttempts,
        { 
          chapterTitle, 
          topic: chapterTitle,
          achieverStatus: achieverStatus || undefined
        }
      );
      setCurrentHint(hint);
      setShowHint(true);
    } catch (error) {
      console.error('Error generating hint:', error);
      setCurrentHint("Try breaking down the problem step by step. Look at the examples in the lesson for guidance.");
      setShowHint(true);
    } finally {
      setIsGeneratingHint(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsAnswered(false);
      setShowAIFeedback(false);
      setAiFeedback(null);
      setStudentAttempts([]);
      setShowHint(false);
      setCurrentHint('');
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsAnswered(false);
      setShowAIFeedback(false);
      setAiFeedback(null);
      setStudentAttempts([]);
      setShowHint(false);
      setCurrentHint('');
    }
  };

  const handleNextStep = (step: string) => {
    setShowAIFeedback(false);
    // You can implement specific actions based on the step
    console.log('Next step:', step);
  };

  if (!currentQuestion) return null;

  const wasAlreadyAnswered = currentQuestion.answered;

  return (
    <>
      {/* Retry Quiz Banner - Show when all questions answered but not 100% */}
      {hasIncorrectAnswers && onRetryQuiz && (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-orange-800">Perfect Score Required</h3>
                <p className="text-orange-700">
                  You need 100% correct answers ({correctAnswers}/{questions.length} = {Math.round((correctAnswers / questions.length) * 100)}%) to unlock the next chapter.
                </p>
              </div>
            </div>
            <button
              onClick={onRetryQuiz}
              className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Retry Quiz</span>
            </button>
          </div>
        </div>
      )}

      {/* Perfect Score Celebration Banner */}
      {hasPerfectScore && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">Perfect Score! 🎉</h3>
              <p className="text-green-700">
                Congratulations! You got {correctAnswers}/{questions.length} (100%) correct. You can now proceed to the next chapter!
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Quiz: {chapterTitle}</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="w-4 h-4" />
                <span>{correctAnswers} / {questions.length} correct ({Math.round((correctAnswers / questions.length) * 100)}%)</span>
              </div>
              
              {/* Performance Status Indicator */}
              {achieverStatus && (
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                  achieverStatus === 'low achiever' ? 'bg-orange-100 text-orange-800' :
                  achieverStatus === 'average achiever' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {getPerformanceIcon()}
                  <span className="capitalize">{achieverStatus}</span>
                </div>
              )}
              
              {!wasAlreadyAnswered && !isAnswered && (
                <button
                  onClick={handleGetHint}
                  disabled={isGeneratingHint}
                  className="flex items-center space-x-2 px-3 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors text-sm"
                >
                  <Lightbulb className="w-4 h-4" />
                  <span>{isGeneratingHint ? 'Getting hint...' : 'Get Hint'}</span>
                </button>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% complete</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Performance-based encouragement message */}
        {achieverStatus && (
          <div className={`mb-6 p-4 rounded-lg border ${
            achieverStatus === 'low achiever' ? 'bg-orange-50 border-orange-200' :
            achieverStatus === 'average achiever' ? 'bg-blue-50 border-blue-200' :
            'bg-green-50 border-green-200'
          }`}>
            <div className="flex items-center space-x-2">
              {getPerformanceIcon()}
              <span className={`text-sm font-medium ${getPerformanceColor()}`}>
                {achieverStatus === 'low achiever' && "Take your time and don't worry about mistakes - every question helps you learn! 🌱"}
                {achieverStatus === 'average achiever' && "You're doing well! Keep up the steady progress! 📈"}
                {achieverStatus === 'high achiever' && "Excellent work! You're mastering these concepts! 🌟"}
              </span>
            </div>
          </div>
        )}

        {/* Hint Display */}
        {showHint && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800 mb-1">
                  {achieverStatus === 'low achiever' ? 'Gentle Hint' :
                   achieverStatus === 'high achiever' ? 'Challenge Hint' : 'Hint'}
                </h4>
                <p className="text-yellow-700 text-sm">{currentHint}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">{currentQuestion.question}</h4>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all ";
              
              if (wasAlreadyAnswered || showResult) {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (index === selectedAnswer || (wasAlreadyAnswered && !currentQuestion.correct && index === selectedAnswer)) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                }
              } else {
                buttonClass += "border-gray-200 hover:border-purple-300 hover:bg-purple-50 cursor-pointer";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={wasAlreadyAnswered || isAnswered}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {(showResult || wasAlreadyAnswered) ? (
                      index === currentQuestion.correctAnswer ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : index === selectedAnswer ? (
                        <XCircle className="w-5 h-5 text-red-600" />
                      ) : null
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>

          {(showResult || wasAlreadyAnswered) && (
            <div className="mt-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {(selectedAnswer === currentQuestion.correctAnswer || currentQuestion.correct) ? (
                      <>
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-green-800 font-medium">
                          {wasAlreadyAnswered ? 'Previously answered correctly! +10 points' : 'Correct! +10 points'}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 text-red-600" />
                        <span className="text-red-800 font-medium">
                          {wasAlreadyAnswered ? 'Previously answered incorrectly.' : 'Incorrect. No points awarded.'}
                        </span>
                      </>
                    )}
                  </div>
                  
                  {aiFeedback && !isAnalyzing && (
                    <button
                      onClick={() => setShowAIFeedback(true)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                    >
                      <Brain className="w-4 h-4" />
                      <span>
                        {achieverStatus === 'low achiever' ? 'Gentle Feedback' :
                         achieverStatus === 'high achiever' ? 'Advanced Feedback' : 'AI Feedback'}
                      </span>
                    </button>
                  )}
                  
                  {isAnalyzing && (
                    <div className="flex items-center space-x-2 text-purple-600">
                      <Brain className="w-4 h-4 animate-pulse" />
                      <span className="text-sm">
                        {achieverStatus === 'low achiever' ? 'Preparing gentle feedback...' :
                         achieverStatus === 'high achiever' ? 'Analyzing advanced concepts...' : 'Analyzing...'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={false}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>

      {/* AI Feedback Modal */}
      {showAIFeedback && aiFeedback && (
        <AIFeedback
          feedback={aiFeedback}
          onClose={() => setShowAIFeedback(false)}
          onNextStep={handleNextStep}
        />
      )}
    </>
  );
};