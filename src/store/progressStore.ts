import { create } from 'zustand';
import type { SubtopicProgress, MemoryRecord } from '../types';
import { buildRevisionQueue, calculateNextReview, scoreToQuality } from '../lib/spaced-repetition';
import { format } from 'date-fns';

interface ProgressStore {
  progress: Record<string, SubtopicProgress>;
  memoryRecords: Record<string, MemoryRecord>;

  updateProgress: (subtopicId: string, update: Partial<SubtopicProgress>) => void;
  recordQuizResult: (subtopicId: string, scorePercent: number, userId: string) => void;
  getRevisionQueue: (userId: string) => MemoryRecord[];
  answerMemoryItem: (recordId: string, quality: number) => void;
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  progress: {},
  memoryRecords: {},

  updateProgress: (subtopicId, update) =>
    set((state) => ({
      progress: {
        ...state.progress,
        [subtopicId]: {
          ...state.progress[subtopicId],
          userId: 'local',
          subtopicId,
          status: 'in_progress',
          masteryScore: 0,
          timeSpentSeconds: 0,
          ...state.progress[subtopicId],
          ...update,
        },
      },
    })),

  recordQuizResult: (subtopicId, scorePercent, userId) => {
    const quality = scoreToQuality(scorePercent);
    const recordId = `${userId}-${subtopicId}`;
    const state = get();
    const existing = state.memoryRecords[recordId];

    const record: MemoryRecord = existing || {
      id: recordId,
      userId,
      itemId: subtopicId,
      itemType: 'question',
      easinessFactor: 2.5,
      intervalDays: 1,
      repetitions: 0,
      nextReviewDate: format(new Date(), 'yyyy-MM-dd'),
      lastQuality: 0,
    };

    const updated = calculateNextReview(record, quality);
    const status = scorePercent >= 70 ? 'completed' : 'in_progress';

    set((s) => ({
      memoryRecords: { ...s.memoryRecords, [recordId]: updated },
      progress: {
        ...s.progress,
        [subtopicId]: {
          ...s.progress[subtopicId],
          userId,
          subtopicId,
          status,
          masteryScore: scorePercent,
          timeSpentSeconds: s.progress[subtopicId]?.timeSpentSeconds || 0,
          completedAt: status === 'completed' ? new Date().toISOString() : undefined,
        },
      },
    }));
  },

  getRevisionQueue: (userId) => {
    const records = Object.values(get().memoryRecords).filter((r) => r.userId === userId);
    return buildRevisionQueue(records);
  },

  answerMemoryItem: (recordId, quality) =>
    set((state) => {
      const record = state.memoryRecords[recordId];
      if (!record) return state;
      return {
        memoryRecords: {
          ...state.memoryRecords,
          [recordId]: calculateNextReview(record, quality),
        },
      };
    }),
}));
