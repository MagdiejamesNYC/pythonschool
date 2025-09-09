import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { ChapterList } from './components/ChapterList';
import { ChapterView } from './components/ChapterView';
import { Projects } from './components/Projects';
import { Collection } from './components/Collection';
import { Shop } from './components/Shop';
import { useGameState } from './hooks/useGameState';
import { useAuth } from './hooks/useAuth';
import { Chapter } from './types';

function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  
  const { loading: authLoading } = useAuth();
  const {
    progress,
    chapters,
    creatures,
    projects,
    loading: gameLoading,
    flipCard,
    answerQuestion,
    submitProjectCode,
    buyEgg,
    hatchEgg,
    saveProgressNow,
    getAchieverStatusForChapter,
    redoChapter
  } = useGameState();

  // Debug: Check if redoChapter is properly loaded
  React.useEffect(() => {
    console.log('App.tsx: redoChapter function available:', typeof redoChapter);
  }, [redoChapter]);

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    setSelectedChapter(null);
  };

  const handleChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setCurrentView('chapter');
  };

  const handleStartLearning = () => {
    setCurrentView('chapters');
  };

  const renderCurrentView = () => {
    if (currentView === 'chapter' && selectedChapter) {
      return (
        <ChapterView
          chapter={selectedChapter}
          onBack={() => setCurrentView('chapters')}
          onFlipCard={(cardId) => flipCard(selectedChapter.id, cardId)}
          onAnswerQuestion={(questionId, answerIndex) => 
            answerQuestion(selectedChapter.id, questionId, answerIndex)
          }
          getAchieverStatus={getAchieverStatusForChapter}
          onRedoChapter={(chapterId) => {
            console.log('App.tsx: Redo chapter called for:', chapterId);
            console.log('App.tsx: redoChapter function type:', typeof redoChapter);
            if (redoChapter) {
              redoChapter(chapterId);
            } else {
              console.error('redoChapter function not available in App.tsx');
            }
          }}
        />
      );
    }

    switch (currentView) {
      case 'home':
        return <Home progress={progress} onStartLearning={handleStartLearning} />;
      case 'chapters':
        return <ChapterList chapters={chapters} onChapterSelect={handleChapterSelect} />;
      case 'projects':
        return <Projects projects={projects} onSubmitCode={submitProjectCode} />;
      case 'collection':
        return <Collection creatures={creatures} />;
      case 'shop':
        return <Shop progress={progress} onBuyEgg={buyEgg} onHatchEgg={hatchEgg} />;
      default:
        return <Home progress={progress} onStartLearning={handleStartLearning} />;
    }
  };

  // Show loading screen while initializing
  if (authLoading || gameLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl">🐍</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Python Academy...</h2>
          <p className="text-gray-600">Preparing your learning adventure</p>
        </div>
      </div>
    );
  }

  // Render main app
  try {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header progress={progress} onSaveProgress={saveProgressNow} />
        <Navigation currentView={currentView} onViewChange={handleViewChange} />
        {renderCurrentView()}
      </div>
    );
  } catch (error) {
    console.error('App render error:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">⚠️</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
          <p className="text-gray-600">Please refresh the page to try again</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
}

export default App;