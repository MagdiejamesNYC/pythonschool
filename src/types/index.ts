export interface Chapter {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  flashcards: FlashCard[];
  questions: Question[];
  unlocked: boolean;
  completed: boolean;
}

export interface FlashCard {
  id: number;
  front: string;
  back: string;
  flipped: boolean;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  answered: boolean;
  correct?: boolean;
}

export interface Creature {
  id: number;
  name: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  emoji: string;
  description: string;
  collected: boolean;
}

export interface UserProgress {
  points: number;
  currentChapter: number;
  completedChapters: number[];
  collectedCreatures: number[];
  eggs: number;
  completedProjects: number[];
}

export interface CodingProject {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  points: number;
  requirements: string[];
  testCases: TestCase[];
  starterCode: string;
  hints: string[];
  unlocked: boolean;
  completed: boolean;
  submittedCode?: string;
}

export interface TestCase {
  id: number;
  input: string;
  expectedOutput: string;
  description: string;
}

// New types for student profiling
export type AchieverStatus = 'low achiever' | 'average achiever' | 'high achiever';

export interface ChapterPerformance {
  total_questions_answered: number;
  correct_questions_count: number;
  achiever_status?: AchieverStatus;
  last_updated: string;
}

export interface ChapterProgressData {
  flashcards: { [cardId: number]: boolean };
  questions: { [questionId: number]: { answered: boolean; correct: boolean } };
  performance?: ChapterPerformance;
  quizResets?: number;
}