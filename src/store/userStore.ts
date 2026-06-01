import { create } from 'zustand';
import type { UserProfile } from '../types';

interface UserStore {
  user: UserProfile | null;
  setUser: (user: UserProfile) => void;
  addXp: (amount: number) => void;
  incrementStreak: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  addXp: (amount) =>
    set((state) => {
      if (!state.user) return state;
      const newXp = state.user.totalXp + amount;
      const newLevel = calculateLevel(newXp);
      return { user: { ...state.user, totalXp: newXp, level: newLevel } };
    }),
  incrementStreak: () =>
    set((state) => {
      if (!state.user) return state;
      return { user: { ...state.user, streakDays: state.user.streakDays + 1 } };
    }),
}));

function calculateLevel(xp: number): number {
  if (xp >= 32000) return 7;
  if (xp >= 18000) return 6;
  if (xp >= 9000) return 5;
  if (xp >= 4000) return 4;
  if (xp >= 1500) return 3;
  if (xp >= 500) return 2;
  return 1;
}
