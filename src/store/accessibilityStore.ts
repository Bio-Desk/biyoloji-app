import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ColorBlindMode } from '../lib/accessibility-themes';

interface AccessibilityState {
  // Disleksi / okuma güçlüğü: yazı boyutu, satır/harf aralığı artışı
  dyslexiaFriendly: boolean;
  // Büyük yazı (genel font ölçeği)
  largeText: boolean;
  // DEHB / odaklanma modu: arayüzü sadeleştirir, dikkat dağıtıcı öğeleri gizler
  focusMode: boolean;
  // Anksiyete modu: rekabetçi/baskı hissi veren öğeleri gizler, yumuşak renkler
  anxietyMode: boolean;
  // Renk körlüğü modu
  colorBlindMode: ColorBlindMode;

  toggleDyslexiaFriendly: () => void;
  toggleLargeText: () => void;
  toggleFocusMode: () => void;
  toggleAnxietyMode: () => void;
  setColorBlindMode: (mode: ColorBlindMode) => void;
  reset: () => void;
}

const defaults = {
  dyslexiaFriendly: false,
  largeText: false,
  focusMode: false,
  anxietyMode: false,
  colorBlindMode: 'none' as ColorBlindMode,
};

export const useAccessibilityStore = create<AccessibilityState>()(
  persist(
    (set) => ({
      ...defaults,
      toggleDyslexiaFriendly: () => set((s) => ({ dyslexiaFriendly: !s.dyslexiaFriendly })),
      toggleLargeText: () => set((s) => ({ largeText: !s.largeText })),
      toggleFocusMode: () => set((s) => ({ focusMode: !s.focusMode })),
      toggleAnxietyMode: () => set((s) => ({ anxietyMode: !s.anxietyMode })),
      setColorBlindMode: (mode) => set({ colorBlindMode: mode }),
      reset: () => set({ ...defaults }),
    }),
    {
      name: 'accessibility-settings',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
