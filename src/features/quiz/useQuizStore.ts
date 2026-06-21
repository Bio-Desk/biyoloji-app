import { create } from 'zustand';
import type { Question } from '../../types';

export interface QuizSessionConfig {
  gradeLevel: 9 | 10;
  topicId?: string;
  outcomeId?: string;
  difficulty?: 'easy' | 'medium' | 'hard' | 'all';
  numQuestions: number;
  timeLimit?: number; // in seconds, 0 = no limit
}

export interface QuizAttemptState {
  questionId: string;
  selectedAnswer?: string;
  isCorrect?: boolean;
  timeTaken: number; // in seconds
}

export interface QuizSessionState {
  id: string;
  config: QuizSessionConfig;
  questions: Question[];
  currentQuestionIndex: number;
  attempts: QuizAttemptState[];
  startedAt: Date;
  endedAt?: Date;
  score: number;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface QuizResultMetadata {
  outcomeId?: string;
  questionIds: string[];
  correctQuestionIds: string[];
  wrongQuestionIds: string[];
  score: number;
  completedAt: string;
  masteryScore: number;
  revisionNeeded: boolean;
}

interface QuizStore {
  session: QuizSessionState | null;
  
  // Session management
  initializeSession: (config: QuizSessionConfig, questions: Question[]) => void;
  resumeSession: () => void;
  endSession: () => void;
  
  // Question navigation
  getCurrentQuestion: () => Question | null;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  
  // Answer submission
  submitAnswer: (answer: string) => void;
  skipQuestion: () => void;
  
  // State queries
  getProgress: () => { current: number; total: number; percent: number };
  getSessionStats: () => { correct: number; incorrect: number; skipped: number };
  getResultMetadata: () => QuizResultMetadata | null;
  
  // Reset
  clearSession: () => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  session: null,

  initializeSession: (config, questions) => {
    const id = `quiz-${Date.now()}`;
    const newSession: QuizSessionState = {
      id,
      config,
      questions,
      currentQuestionIndex: 0,
      attempts: questions.map(q => ({
        questionId: q.id,
        selectedAnswer: undefined,
        isCorrect: undefined,
        timeTaken: 0,
      })),
      startedAt: new Date(),
      score: 0,
      status: 'in-progress',
    };
    set({ session: newSession });
  },

  resumeSession: () => {
    const state = get();
    if (!state.session) return;
    set({ session: { ...state.session, status: 'in-progress' } });
  },

  endSession: () => {
    const state = get();
    if (!state.session) return;
    
    // Calculate score
    const correct = state.session.attempts.filter(a => a.isCorrect).length;
    const score = Math.round((correct / state.session.questions.length) * 100);
    
    set({
      session: {
        ...state.session,
        endedAt: new Date(),
        status: 'completed',
        score,
      },
    });
  },

  getCurrentQuestion: () => {
    const state = get();
    if (!state.session) return null;
    return state.session.questions[state.session.currentQuestionIndex] || null;
  },

  goToNextQuestion: () => {
    set(state => {
      if (!state.session) return state;
      const nextIndex = state.session.currentQuestionIndex + 1;
      if (nextIndex >= state.session.questions.length) {
        return state; // Already at the end
      }
      return {
        session: {
          ...state.session,
          currentQuestionIndex: nextIndex,
        },
      };
    });
  },

  goToPreviousQuestion: () => {
    set(state => {
      if (!state.session) return state;
      const prevIndex = state.session.currentQuestionIndex - 1;
      if (prevIndex < 0) {
        return state; // Already at the start
      }
      return {
        session: {
          ...state.session,
          currentQuestionIndex: prevIndex,
        },
      };
    });
  },

  submitAnswer: (answer: string) => {
    set(state => {
      if (!state.session) return state;
      const currentQuestion = state.session.questions[state.session.currentQuestionIndex];
      if (!currentQuestion) return state;

      const isCorrect = answer === currentQuestion.correctAnswer;
      const updatedAttempts = [...state.session.attempts];
      updatedAttempts[state.session.currentQuestionIndex] = {
        ...updatedAttempts[state.session.currentQuestionIndex],
        selectedAnswer: answer,
        isCorrect,
        timeTaken: Math.round((new Date().getTime() - state.session.startedAt.getTime()) / 1000),
      };

      return {
        session: {
          ...state.session,
          attempts: updatedAttempts,
        },
      };
    });
  },

  skipQuestion: () => {
    set(state => {
      if (!state.session) return state;
      const updatedAttempts = [...state.session.attempts];
      updatedAttempts[state.session.currentQuestionIndex] = {
        ...updatedAttempts[state.session.currentQuestionIndex],
        selectedAnswer: undefined,
        isCorrect: false,
      };
      return {
        session: {
          ...state.session,
          attempts: updatedAttempts,
        },
      };
    });
  },

  getProgress: () => {
    const state = get();
    if (!state.session) return { current: 0, total: 0, percent: 0 };
    const total = state.session.questions.length;
    const current = state.session.currentQuestionIndex + 1;
    return {
      current,
      total,
      percent: Math.round((current / total) * 100),
    };
  },

  getSessionStats: () => {
    const state = get();
    if (!state.session) return { correct: 0, incorrect: 0, skipped: 0 };
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;
    state.session.attempts.forEach(attempt => {
      if (attempt.selectedAnswer === undefined) {
        skipped++;
      } else if (attempt.isCorrect) {
        correct++;
      } else {
        incorrect++;
      }
    });
    return { correct, incorrect, skipped };
  },

  getResultMetadata: () => {
    const state = get();
    const session = state.session;
    if (!session || session.status !== 'completed' || !session.endedAt) return null;

    const correctQuestionIds = session.attempts
      .filter((attempt) => attempt.isCorrect)
      .map((attempt) => attempt.questionId);
    const wrongQuestionIds = session.attempts
      .filter((attempt) => attempt.isCorrect === false)
      .map((attempt) => attempt.questionId);

    return {
      outcomeId: session.config.outcomeId,
      questionIds: session.questions.map((question) => question.id),
      correctQuestionIds,
      wrongQuestionIds,
      score: session.score,
      completedAt: session.endedAt.toISOString(),
      masteryScore: session.score,
      revisionNeeded: session.score < 80,
    };
  },

  clearSession: () => {
    set({ session: null });
  },
}));
