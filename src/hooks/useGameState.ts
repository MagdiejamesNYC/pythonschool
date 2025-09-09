import { useState, useEffect, useRef } from 'react';
import { UserProgress, Chapter, Creature, CodingProject, AchieverStatus, ChapterPerformance, ChapterProgressData } from '../types';
import { chapters } from '../data/chapters';
import { creatures } from '../data/creatures';
import { projects } from '../data/projects';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

const STORAGE_KEY = 'python-learning-progress';

const initialProgress: UserProgress = {
  points: 0,
  currentChapter: 1,
  completedChapters: [],
  collectedCreatures: [],
  eggs: 0,
  completedProjects: []
};

export const useGameState = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [gameChapters, setGameChapters] = useState<Chapter[]>(chapters);
  const [gameCreatures, setGameCreatures] = useState<Creature[]>(creatures);
  const [gameProjects, setGameProjects] = useState<CodingProject[]>(projects);
  const [loading, setLoading] = useState(true);
  
  // Keep track of unsaved changes and current state
  const hasUnsavedChanges = useRef(false);
  const currentChapterProgress = useRef<{ [chapterId: number]: ChapterProgressData }>({});
  const currentProgressRef = useRef<UserProgress>(initialProgress);

  // Update refs whenever progress changes
  useEffect(() => {
    currentProgressRef.current = progress;
  }, [progress]);

  // Check if Supabase is configured
  const isSupabaseConfigured = () => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    return !!(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://placeholder.supabase.co' && supabaseUrl !== 'https://dummy.supabase.co');
  };

  // Helper function to calculate achiever status for a chapter
  const getAchieverStatusForChapter = (chapterId: number): AchieverStatus | null => {
    const chapterData = currentChapterProgress.current[chapterId];
    if (!chapterData?.performance) return null;

    const { correct_questions_count } = chapterData.performance;
    
    if (correct_questions_count < 3) {
      return 'low achiever';
    } else if (correct_questions_count <= 7) {
      return 'average achiever';
    } else {
      return 'high achiever';
    }
  };

  // Helper function to update chapter performance
  const updateChapterPerformance = (chapterId: number) => {
    const chapterData = currentChapterProgress.current[chapterId];
    if (!chapterData) return;

    const questions = chapterData.questions || {};
    const answeredQuestions = Object.values(questions);
    const totalAnswered = answeredQuestions.length;
    const correctCount = answeredQuestions.filter(q => q.correct).length;

    const performance: ChapterPerformance = {
      total_questions_answered: totalAnswered,
      correct_questions_count: correctCount,
      achiever_status: totalAnswered > 0 ? getAchieverStatusForChapter(chapterId) : undefined,
      last_updated: new Date().toISOString()
    };

    currentChapterProgress.current[chapterId].performance = performance;
    console.log(`Updated performance for chapter ${chapterId}:`, performance);
  };

  // Save progress function (only called on logout or page unload)
  const saveProgress = async (progressToSave?: UserProgress, chapterProgressToSave?: any) => {
    const progressData = progressToSave || currentProgressRef.current;
    const chapterData = chapterProgressToSave || currentChapterProgress.current;

    console.log('Saving progress:', progressData);
    console.log('Saving chapter progress:', chapterData);

    if (user && isSupabaseConfigured()) {
      // Save to Supabase for authenticated users
      try {
        const updateData = {
          user_id: user.id,
          points: progressData.points,
          current_chapter: progressData.currentChapter,
          completed_chapters: progressData.completedChapters,
          collected_creatures: progressData.collectedCreatures,
          eggs: progressData.eggs,
          completed_projects: progressData.completedProjects,
          chapter_progress: chapterData
        };

        console.log('Upserting to Supabase:', updateData);

        // First try to update existing record
        const { data: existingData, error: selectError } = await supabase
          .from('user_progress')
          .select('id')
          .eq('user_id', user.id)
          .maybeSingle();

        if (selectError && selectError.code !== 'PGRST116') {
          throw selectError;
        }

        let error;
        if (existingData) {
          // Update existing record
          const { error: updateError } = await supabase
            .from('user_progress')
            .update({
              points: progressData.points,
              current_chapter: progressData.currentChapter,
              completed_chapters: progressData.completedChapters,
              collected_creatures: progressData.collectedCreatures,
              eggs: progressData.eggs,
              completed_projects: progressData.completedProjects,
              chapter_progress: chapterData
            })
            .eq('user_id', user.id);
          error = updateError;
        } else {
          // Insert new record
          const { error: insertError } = await supabase
            .from('user_progress')
            .insert(updateData);
          error = insertError;
        }

        if (error) {
          console.error('Error saving progress to Supabase:', error);
          // Fallback to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
          localStorage.setItem(STORAGE_KEY + '_chapters', JSON.stringify(chapterData));
        } else {
          console.log('Progress saved successfully to Supabase');
          hasUnsavedChanges.current = false;
        }
      } catch (error) {
        console.error('Failed to save progress to Supabase:', error);
        // Fallback to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
        localStorage.setItem(STORAGE_KEY + '_chapters', JSON.stringify(chapterData));
      }
    } else {
      // Save to localStorage for non-authenticated users or when Supabase not configured
      console.log('Saving to localStorage');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
      localStorage.setItem(STORAGE_KEY + '_chapters', JSON.stringify(chapterData));
      hasUnsavedChanges.current = false;
    }
  };

  // Expose save function for manual saving (on logout)
  const saveProgressNow = async () => {
    console.log('Manual save triggered, current progress:', currentProgressRef.current);
    console.log('Current chapter progress:', currentChapterProgress.current);
    await saveProgress();
  };

  // Load progress from Supabase or localStorage
  useEffect(() => {
    const loadProgress = async () => {
      setLoading(true);
      
      if (user && isSupabaseConfigured()) {
        // Load from Supabase for authenticated users
        try {
          const { data, error } = await supabase
            .from('user_progress')
            .select('*')
            .eq('user_id', user.id)
            .maybeSingle();

          if (error && error.code !== 'PGRST116') {
            console.error('Error loading progress:', error);
            // Fallback to localStorage for errors
            loadFromLocalStorage();
            setLoading(false);
            return;
          }

          if (data) {
            console.log('Loaded progress from Supabase:', data);
            const savedProgress: UserProgress = {
              points: data.points,
              currentChapter: data.current_chapter,
              completedChapters: data.completed_chapters,
              collectedCreatures: data.collected_creatures,
              eggs: data.eggs,
              completedProjects: data.completed_projects
            };
            
            setProgress(savedProgress);
            currentProgressRef.current = savedProgress;
            currentChapterProgress.current = data.chapter_progress || {};
            updateGameState(savedProgress, data.chapter_progress || {});
          } else {
            // No rows found - create initial progress record for new user
            await createInitialProgress();
          }
        } catch (error) {
          console.error('Failed to load progress from Supabase:', error);
          // Fallback to localStorage
          loadFromLocalStorage();
        }
      } else {
        // Load from localStorage for non-authenticated users or when Supabase not configured
        loadFromLocalStorage();
      }
      
      setLoading(false);
    };

    const loadFromLocalStorage = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedChapters = localStorage.getItem(STORAGE_KEY + '_chapters');
      
      if (saved) {
        try {
          const savedProgress = JSON.parse(saved);
          const chapterProgress = savedChapters ? JSON.parse(savedChapters) : {};
          
          console.log('Loaded progress from localStorage:', savedProgress);
          setProgress(savedProgress);
          currentProgressRef.current = savedProgress;
          currentChapterProgress.current = chapterProgress;
          updateGameState(savedProgress, chapterProgress);
        } catch (error) {
          console.error('Failed to load progress from localStorage:', error);
        }
      }
    };

    loadProgress();
  }, [user]);

  // Save progress when user logs out or page unloads
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges.current) {
        // Use synchronous localStorage save for page unload
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentProgressRef.current));
        localStorage.setItem(STORAGE_KEY + '_chapters', JSON.stringify(currentChapterProgress.current));
        
        // Show warning dialog
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const createInitialProgress = async () => {
    if (!user || !isSupabaseConfigured()) return;

    try {
      const { error } = await supabase
        .from('user_progress')
        .insert({
          user_id: user.id,
          points: initialProgress.points,
          current_chapter: initialProgress.currentChapter,
          completed_chapters: initialProgress.completedChapters,
          collected_creatures: initialProgress.collectedCreatures,
          eggs: initialProgress.eggs,
          completed_projects: initialProgress.completedProjects,
          chapter_progress: {}
        });

      if (error) {
        console.error('Error creating initial progress:', error);
      } else {
        setProgress(initialProgress);
        currentProgressRef.current = initialProgress;
        updateGameState(initialProgress, {});
      }
    } catch (error) {
      console.error('Failed to create initial progress:', error);
    }
  };

  const updateGameState = (progressData: UserProgress, chapterProgress: any) => {
    // Update chapters based on progress - Chapter 1 is always unlocked, others unlock when previous is completed
    const updatedChapters = chapters.map(chapter => {
      const chapterData = chapterProgress[chapter.id] || {};
      const isUnlocked = chapter.id === 1 || progressData.completedChapters.includes(chapter.id - 1);
      const isCompleted = progressData.completedChapters.includes(chapter.id);
      
      return {
        ...chapter,
        unlocked: isUnlocked,
        completed: isCompleted,
        flashcards: chapter.flashcards.map(card => ({
          ...card,
          flipped: chapterData.flashcards?.[card.id] || false
        })),
        questions: chapter.questions.map(question => ({
          ...question,
          answered: chapterData.questions?.[question.id]?.answered || false,
          correct: chapterData.questions?.[question.id]?.correct || false
        }))
      };
    });
    setGameChapters(updatedChapters);

    // Update creatures based on progress
    const updatedCreatures = creatures.map(creature => ({
      ...creature,
      collected: progressData.collectedCreatures.includes(creature.id)
    }));
    setGameCreatures(updatedCreatures);

    // Update projects based on progress
    const updatedProjects = projects.map(project => ({
      ...project,
      unlocked: project.id === 1 || progressData.completedProjects.includes(project.id - 1),
      completed: progressData.completedProjects.includes(project.id)
    }));
    setGameProjects(updatedProjects);
  };

  const addPoints = (points: number) => {
    setProgress(prev => {
      const newProgress = { ...prev, points: prev.points + points };
      hasUnsavedChanges.current = true;
      return newProgress;
    });
  };

  const flipCard = (chapterId: number, cardId: number) => {
    const chapter = gameChapters.find(c => c.id === chapterId);
    if (!chapter) return;

    const card = chapter.flashcards.find(c => c.id === cardId);
    if (!card || card.flipped) return;

    // Update card state
    setGameChapters(prev => prev.map(ch => 
      ch.id === chapterId 
        ? {
            ...ch,
            flashcards: ch.flashcards.map(card => 
              card.id === cardId ? { ...card, flipped: true } : card
            )
          }
        : ch
    ));

    // Update chapter progress in memory
    if (!currentChapterProgress.current[chapterId]) {
      currentChapterProgress.current[chapterId] = { flashcards: {}, questions: {} };
    }
    currentChapterProgress.current[chapterId].flashcards[cardId] = true;

    // Add points for flipping card
    setProgress(prev => {
      const newProgress = { ...prev, points: prev.points + 5 };
      hasUnsavedChanges.current = true;
      return newProgress;
    });

    // Check if chapter should be completed
    checkChapterCompletion(chapterId);
  };

  const answerQuestion = (chapterId: number, questionId: number, answerIndex: number) => {
    const chapter = gameChapters.find(c => c.id === chapterId);
    if (!chapter) return false;

    const question = chapter.questions.find(q => q.id === questionId);
    if (!question || question.answered) return false;

    const isCorrect = answerIndex === question.correctAnswer;

    // Update question state
    setGameChapters(prev => prev.map(ch => 
      ch.id === chapterId 
        ? {
            ...ch,
            questions: ch.questions.map(q => 
              q.id === questionId 
                ? { ...q, answered: true, correct: isCorrect }
                : q
            )
          }
        : ch
    ));

    // Update chapter progress in memory
    if (!currentChapterProgress.current[chapterId]) {
      currentChapterProgress.current[chapterId] = { flashcards: {}, questions: {} };
    }
    currentChapterProgress.current[chapterId].questions[questionId] = { answered: true, correct: isCorrect };

    // Update chapter performance after answering question
    updateChapterPerformance(chapterId);

    const pointsToAdd = isCorrect ? 10 : 0;
    setProgress(prev => {
      const newProgress = { ...prev, points: prev.points + pointsToAdd };
      hasUnsavedChanges.current = true;
      return newProgress;
    });

    // Check if chapter should be completed
    checkChapterCompletion(chapterId);

    return isCorrect;
  };

  const checkChapterCompletion = (chapterId: number) => {
    const chapter = gameChapters.find(c => c.id === chapterId);
    if (!chapter) return;

    // Get current state from the chapter progress
    const chapterData = currentChapterProgress.current[chapterId] || { flashcards: {}, questions: {} };
    
    // Count completed flashcards and questions
    const flippedCards = Object.keys(chapterData.flashcards || {}).length;
    const answeredQuestions = Object.keys(chapterData.questions || {}).length;
    const correctAnswers = Object.values(chapterData.questions || {}).filter((q: any) => q.correct).length;

    console.log(`Chapter ${chapterId} completion check:`, {
      flippedCards,
      totalCards: chapter.flashcards.length,
      answeredQuestions,
      totalQuestions: chapter.questions.length,
      correctAnswers,
      requiredCorrect: chapter.questions.length
    });

    // CRITICAL: Chapter completion requires 100% correct answers
    // All cards must be flipped, all questions answered, and ALL answers must be correct
    if (flippedCards === chapter.flashcards.length && 
        answeredQuestions === chapter.questions.length && 
        correctAnswers === chapter.questions.length) {
      console.log(`Chapter ${chapterId} meets completion criteria - completing now!`);
      completeChapter(chapterId);
    } else if (flippedCards === chapter.flashcards.length && 
               answeredQuestions === chapter.questions.length && 
               correctAnswers < chapter.questions.length) {
      // All activities completed but not perfect score - don't complete chapter
      console.log(`Chapter ${chapterId} not completed: Need 100% correct answers (got ${correctAnswers}/${chapter.questions.length})`);
    }
  };

  const completeChapter = (chapterId: number) => {
    setProgress(prev => {
      // Don't complete if already completed
      if (prev.completedChapters.includes(chapterId)) {
        return prev;
      }

      const newProgress = {
        ...prev,
        completedChapters: [...prev.completedChapters, chapterId],
        currentChapter: Math.min(chapterId + 1, 14),
        points: prev.points + 50
      };
      hasUnsavedChanges.current = true;
      
      console.log(`Chapter ${chapterId} completed! New progress:`, newProgress);
      
      // Update game state to unlock next chapter
      setTimeout(() => {
        updateGameState(newProgress, currentChapterProgress.current);
      }, 100);
      
      return newProgress;
    });
  };

  const submitProjectCode = async (projectId: number, code: string): Promise<boolean> => {
    const project = gameProjects.find(p => p.id === projectId);
    if (!project) return false;

    // Simulate AI code validation
    const isValid = await validateCode(project, code);
    
    if (isValid) {
      setProgress(prev => {
        const newProgress = {
          ...prev,
          completedProjects: [...prev.completedProjects.filter(id => id !== projectId), projectId],
          points: prev.points + project.points
        };
        hasUnsavedChanges.current = true;
        return newProgress;
      });

      // Update project state
      setGameProjects(prev => prev.map(p => ({
        ...p,
        completed: p.id === projectId ? true : p.completed,
        unlocked: p.id === projectId + 1 ? true : p.unlocked,
        submittedCode: p.id === projectId ? code : p.submittedCode
      })));
    }

    return isValid;
  };

  const validateCode = async (project: CodingProject, code: string): Promise<boolean> => {
    // Simple validation logic - in a real app, this would call an AI API
    try {
      // Basic checks for each project
      switch (project.id) {
        case 1: // Maya's Magic Pet Shop - Variables
          return code.includes('pet_name') && 
                 code.includes('pet_age') && 
                 code.includes('can_fly') &&
                 code.includes('welcome_message') &&
                 (code.includes('"') || code.includes("'")) && // Has strings
                 /\d/.test(code) && // Has numbers
                 (code.includes('True') || code.includes('False')); // Has boolean
        
        case 2: // Calculator
          return code.includes('def add_numbers') && 
                 code.includes('return') && 
                 !code.includes('print(') ||
                 (code.includes('print(') && code.includes('return'));
        
        case 3: // String manipulator
          return code.includes('def format_name') && 
                 (code.includes('split') || code.includes('.')) &&
                 code.includes('return');
        
        case 4: // List analyzer
          return code.includes('def analyze_numbers') && 
                 code.includes('return') &&
                 (code.includes('sum') || code.includes('len') || code.includes('min') || code.includes('max'));
        
        case 5: // Password validator
          return code.includes('def validate_password') && 
                 code.includes('return') &&
                 (code.includes('len') || code.includes('length'));
        
        case 6: // Text analyzer
          return code.includes('def analyze_text') && 
                 code.includes('return') &&
                 (code.includes('split') || code.includes('count'));
        
        default:
          return false;
      }
    } catch (error) {
      return false;
    }
  };

  const buyEgg = (cost: number) => {
    if (progress.points < cost) return false;

    setProgress(prev => {
      const newProgress = {
        ...prev,
        points: prev.points - cost,
        eggs: prev.eggs + 1
      };
      hasUnsavedChanges.current = true;
      return newProgress;
    });

    return true;
  };

  const hatchEgg = () => {
    if (progress.eggs === 0) return null;

    // Random creature selection with rarity weights
    const availableCreatures = gameCreatures.filter(c => !c.collected);
    if (availableCreatures.length === 0) return null;

    const rarityWeights = {
      'Common': 0.6,
      'Rare': 0.25,
      'Epic': 0.12,
      'Legendary': 0.03
    };

    const random = Math.random();
    let cumulativeWeight = 0;
    let selectedRarity: keyof typeof rarityWeights = 'Common';

    for (const [rarity, weight] of Object.entries(rarityWeights)) {
      cumulativeWeight += weight;
      if (random <= cumulativeWeight) {
        selectedRarity = rarity as keyof typeof rarityWeights;
        break;
      }
    }

    const rarityCreatures = availableCreatures.filter(c => c.rarity === selectedRarity);
    const creature = rarityCreatures[Math.floor(Math.random() * rarityCreatures.length)] || availableCreatures[0];

    setProgress(prev => {
      const newProgress = {
        ...prev,
        eggs: prev.eggs - 1,
        collectedCreatures: [...prev.collectedCreatures, creature.id]
      };
      hasUnsavedChanges.current = true;
      return newProgress;
    });

    setGameCreatures(prev => prev.map(c => 
      c.id === creature.id ? { ...c, collected: true } : c
    ));

    return creature;
  };

  const redoChapter = (chapterId: number) => {
    console.log(`Redoing chapter ${chapterId}`);
    
    try {
      // Track quiz reset count
      if (!currentChapterProgress.current[chapterId]) {
        currentChapterProgress.current[chapterId] = { flashcards: {}, questions: {}, quizResets: 0 };
      }
      
      // Increment quiz reset counter
      const currentResets = currentChapterProgress.current[chapterId].quizResets || 0;
      currentChapterProgress.current[chapterId].quizResets = currentResets + 1;
      
      console.log(`Quiz reset count for chapter ${chapterId}: ${currentChapterProgress.current[chapterId].quizResets}`);

      // Reset chapter progress in memory
      currentChapterProgress.current[chapterId] = { 
        flashcards: {}, 
        questions: {},
        quizResets: currentChapterProgress.current[chapterId].quizResets // Preserve reset count
      };

      // Update game chapters to reset flashcards and questions
      setGameChapters(prev => prev.map(chapter => 
        chapter.id === chapterId 
          ? {
              ...chapter,
              completed: false,
              flashcards: chapter.flashcards.map(card => ({ ...card, flipped: false })),
              questions: chapter.questions.map(question => ({ ...question, answered: false, correct: false }))
            }
          : chapter
      ));

      // Remove from completed chapters if it was completed
      setProgress(prev => {
        const newProgress = {
          ...prev,
          completedChapters: prev.completedChapters.filter(id => id !== chapterId),
          currentChapter: Math.min(prev.currentChapter, chapterId)
        };
        hasUnsavedChanges.current = true;
        
        // Update game state with the new progress
        setTimeout(() => {
          updateGameState(newProgress, currentChapterProgress.current);
        }, 100);
        
        return newProgress;
      });
      
      console.log(`Chapter ${chapterId} reset successfully`);
    } catch (error) {
      console.error('Error in redoChapter:', error);
    }
  };

  const resetProgress = () => {
    setProgress(initialProgress);
    setGameChapters(chapters);
    setGameCreatures(creatures);
    setGameProjects(projects);
    currentChapterProgress.current = {};
    currentProgressRef.current = initialProgress;
    hasUnsavedChanges.current = false;
    
    if (user && isSupabaseConfigured()) {
      // Reset in Supabase
      supabase
        .from('user_progress')
        .delete()
        .eq('user_id', user.id)
        .then(() => createInitialProgress());
    } else {
      // Reset in localStorage
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_KEY + '_chapters');
    }
  };

  return {
    progress,
    chapters: gameChapters,
    creatures: gameCreatures,
    projects: gameProjects,
    loading,
    addPoints,
    flipCard,
    answerQuestion,
    submitProjectCode,
    buyEgg,
    hatchEgg,
    resetProgress,
    saveProgressNow, // Expose manual save function
    hasUnsavedChanges: hasUnsavedChanges.current,
    getAchieverStatusForChapter, // Expose achiever status function
    redoChapter
  };

  // Debug: Log when hook returns to ensure redoChapter is included
  console.log('useGameState returning redoChapter:', typeof redoChapter);
};