import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';
import type {
  LearningOutcomeProgress,
  LearningOutcomeStage,
  LearningOutcomeStatus,
} from '../types';

interface LearningOutcomeProgressStore {
  progressByOutcomeId: Record<string, LearningOutcomeProgress>;

  getProgress: (outcomeId: string) => LearningOutcomeProgress;
  openOutcome: (outcomeId: string, userId: string) => void;
  setCurrentStage: (outcomeId: string, stage: LearningOutcomeStage) => void;
  markLessonViewed: (outcomeId: string) => void;
  markInfographicViewed: (outcomeId: string) => void;
  markFlashcardsReviewed: (outcomeId: string) => void;
  completeQuiz: (outcomeId: string, quizScore: number) => void;
  updateMasteryScore: (outcomeId: string, masteryScore: number) => void;
  scheduleRevision: (outcomeId: string, nextReviewDate: string) => void;
  markMastered: (outcomeId: string) => void;
}

const MASTERY_THRESHOLD = 80;

function nowIso(): string {
  return new Date().toISOString();
}

function clampScore(score: number): number {
  return Math.max(0, Math.min(100, Math.round(score)));
}

function getStatusFromMastery(masteryScore: number): LearningOutcomeStatus {
  if (masteryScore >= MASTERY_THRESHOLD) return 'mastered';
  if (masteryScore > 0) return 'needs_revision';
  return 'in_progress';
}

function addCompletedStage(
  completedStages: LearningOutcomeStage[],
  stage: LearningOutcomeStage
): LearningOutcomeStage[] {
  if (completedStages.includes(stage)) return completedStages;
  return [...completedStages, stage];
}

function createDefaultProgress(outcomeId: string, userId = 'local'): LearningOutcomeProgress {
  return {
    userId,
    outcomeId,
    currentStage: 'not_started',
    completedStages: [],
    lessonViewed: false,
    infographicViewed: false,
    flashcardsReviewed: false,
    quizAttempted: false,
    masteryScore: 0,
    status: 'not_started',
    lastActivityAt: nowIso(),
  };
}

function updateProgress(
  progress: LearningOutcomeProgress,
  update: Partial<LearningOutcomeProgress>
): LearningOutcomeProgress {
  return {
    ...progress,
    ...update,
    lastActivityAt: nowIso(),
  };
}

export const useLearningOutcomeProgressStore = create<LearningOutcomeProgressStore>()(
  persist(
    (set, get) => ({
      progressByOutcomeId: {},

      getProgress: (outcomeId) =>
        get().progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId),

      openOutcome: (outcomeId, userId) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId, userId);
          const currentStage = existing.currentStage === 'not_started' ? 'lesson' : existing.currentStage;

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                userId,
                currentStage,
                status: existing.status === 'not_started' ? 'in_progress' : existing.status,
              }),
            },
          };
        }),

      setCurrentStage: (outcomeId, stage) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId);

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                currentStage: stage,
                status: stage === 'not_started' ? 'not_started' : existing.status === 'not_started' ? 'in_progress' : existing.status,
              }),
            },
          };
        }),

      markLessonViewed: (outcomeId) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId);

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                currentStage: 'lesson',
                completedStages: addCompletedStage(existing.completedStages, 'lesson'),
                lessonViewed: true,
                status: 'in_progress',
              }),
            },
          };
        }),

      markInfographicViewed: (outcomeId) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId);

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                currentStage: 'infographic',
                completedStages: addCompletedStage(existing.completedStages, 'infographic'),
                infographicViewed: true,
                status: 'in_progress',
              }),
            },
          };
        }),

      markFlashcardsReviewed: (outcomeId) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId);

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                currentStage: 'flashcard',
                completedStages: addCompletedStage(existing.completedStages, 'flashcard'),
                flashcardsReviewed: true,
                status: 'in_progress',
              }),
            },
          };
        }),

      completeQuiz: (outcomeId, quizScore) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId);
          const masteryScore = clampScore(quizScore);

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                currentStage: 'result',
                completedStages: addCompletedStage(existing.completedStages, 'quiz'),
                quizAttempted: true,
                quizScore: masteryScore,
                masteryScore,
                status: getStatusFromMastery(masteryScore),
              }),
            },
          };
        }),

      updateMasteryScore: (outcomeId, masteryScore) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId);
          const normalizedScore = clampScore(masteryScore);

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                masteryScore: normalizedScore,
                status: getStatusFromMastery(normalizedScore),
              }),
            },
          };
        }),

      scheduleRevision: (outcomeId, nextReviewDate) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId);

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                currentStage: 'revision',
                completedStages: addCompletedStage(existing.completedStages, 'revision'),
                nextReviewDate,
                status: 'needs_revision',
              }),
            },
          };
        }),

      markMastered: (outcomeId) =>
        set((state) => {
          const existing = state.progressByOutcomeId[outcomeId] ?? createDefaultProgress(outcomeId);

          return {
            progressByOutcomeId: {
              ...state.progressByOutcomeId,
              [outcomeId]: updateProgress(existing, {
                currentStage: 'mastered',
                completedStages: addCompletedStage(existing.completedStages, 'mastered'),
                masteryScore: Math.max(existing.masteryScore, MASTERY_THRESHOLD),
                status: 'mastered',
              }),
            },
          };
        }),
    }),
    {
      name: 'learning-outcome-progress-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ progressByOutcomeId: state.progressByOutcomeId }),
    }
  )
);
