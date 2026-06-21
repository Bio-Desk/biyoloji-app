import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import type { MemoryRecord } from '../types';
import { useUserStore } from './userStore';
import { useProgressStore } from './progressStore';

export type DailyItemKind = 'task' | 'review';

export interface DailyItem {
  id: string;
  kind: DailyItemKind;
  description: string;
  completed: boolean;
  xpReward: number;
  source: 'auto' | 'manual';
  date: string; // yyyy-MM-dd
  sourceRecordId?: string; // kind === 'review' ve source === 'auto' için memory record id'si
}

const DEFAULT_TASKS: Omit<DailyItem, 'id' | 'date' | 'completed'>[] = [
  { kind: 'task', description: '10 tekrar kartı çöz', xpReward: 30, source: 'auto' },
  { kind: 'task', description: '1 yeni konu oku', xpReward: 50, source: 'auto' },
];

interface TasksState {
  items: DailyItem[];
  toggleItem: (id: string) => void;
  addManualItem: (kind: DailyItemKind, description: string) => void;
  removeItem: (id: string) => void;
  syncToday: (revisionQueue: MemoryRecord[]) => void;
}

function todayStr() {
  return format(new Date(), 'yyyy-MM-dd');
}

export const useTasksStore = create<TasksState>()(
  persist(
    (set, get) => ({
      items: [],

      toggleItem: (id) => {
        const item = get().items.find((i) => i.id === id);
        if (!item) return;
        const willComplete = !item.completed;

        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, completed: willComplete } : i)),
        }));

        // XP ödülü: tamamlandığında ekle, geri alındığında düş
        useUserStore.getState().addXp(willComplete ? item.xpReward : -item.xpReward);

        // Tekrar kartı SM-2 kaydını güncelle
        if (item.kind === 'review' && item.sourceRecordId && willComplete) {
          useProgressStore.getState().answerMemoryItem(item.sourceRecordId, 4);
        }
      },

      addManualItem: (kind, description) => {
        const trimmed = description.trim();
        if (!trimmed) return;
        const item: DailyItem = {
          id: `manual-${kind}-${Date.now()}`,
          kind,
          description: trimmed,
          completed: false,
          xpReward: 10,
          source: 'manual',
          date: todayStr(),
        };
        set((state) => ({ items: [...state.items, item] }));
      },

      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
      },

      syncToday: (revisionQueue) => {
        const today = todayStr();
        set((state) => {
          const todays = state.items.filter((i) => i.date === today);
          const others = state.items.filter((i) => i.date !== today);
          const next = [...todays];

          // Varsayılan günlük görevleri (bugün için yoksa) ekle
          for (const def of DEFAULT_TASKS) {
            const exists = todays.some(
              (i) => i.source === 'auto' && i.kind === def.kind && i.description === def.description
            );
            if (!exists) {
              next.push({ ...def, id: `auto-${def.kind}-${def.description}-${today}`, date: today, completed: false });
            }
          }

          // Bugünün tekrar kuyruğundaki kartları ekle (henüz eklenmemişse)
          for (const record of revisionQueue) {
            const exists = todays.some((i) => i.sourceRecordId === record.id);
            if (!exists) {
              next.push({
                id: `auto-review-${record.id}-${today}`,
                kind: 'review',
                description: `${record.itemType === 'flashcard' ? 'Kart' : 'Soru'} tekrarı: ${record.itemId}`,
                completed: false,
                xpReward: 5,
                source: 'auto',
                date: today,
                sourceRecordId: record.id,
              });
            }
          }

          return { items: [...others, ...next] };
        });
      },
    }),
    {
      name: 'daily-items',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
