import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface OutcomeQuizResultHistoryItem {
  id: string;
  userId: string;
  outcomeId: string;
  questionIds: string[];
  correctQuestionIds: string[];
  wrongQuestionIds: string[];
  score: number;
  masteryScore: number;
  revisionNeeded: boolean;
  completedAt: string;
}

interface QuizResultHistoryStore {
  resultsByOutcomeId: Record<string, OutcomeQuizResultHistoryItem[]>;

  addResult: (result: OutcomeQuizResultHistoryItem) => void;
  getResultsForOutcome: (outcomeId: string) => OutcomeQuizResultHistoryItem[];
  getLatestResultForOutcome: (outcomeId: string) => OutcomeQuizResultHistoryItem | undefined;
  clearResultsForOutcome: (outcomeId: string) => void;
}

const MAX_RESULTS_PER_OUTCOME = 5;

export const useQuizResultHistoryStore = create<QuizResultHistoryStore>()(
  persist(
    (set, get) => ({
      resultsByOutcomeId: {},

      addResult: (result) =>
        set((state) => {
          const existingResults = state.resultsByOutcomeId[result.outcomeId] ?? [];
          const nextResults = [result, ...existingResults].slice(0, MAX_RESULTS_PER_OUTCOME);

          return {
            resultsByOutcomeId: {
              ...state.resultsByOutcomeId,
              [result.outcomeId]: nextResults,
            },
          };
        }),

      getResultsForOutcome: (outcomeId) => get().resultsByOutcomeId[outcomeId] ?? [],

      getLatestResultForOutcome: (outcomeId) => get().resultsByOutcomeId[outcomeId]?.[0],

      clearResultsForOutcome: (outcomeId) =>
        set((state) => {
          const { [outcomeId]: _removed, ...remainingResults } = state.resultsByOutcomeId;
          return { resultsByOutcomeId: remainingResults };
        }),
    }),
    {
      name: 'quiz-result-history-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ resultsByOutcomeId: state.resultsByOutcomeId }),
    }
  )
);
