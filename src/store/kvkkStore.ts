import { create } from 'zustand';
import { acceptKvkk, isKvkkAccepted } from '../lib/kvkk';

interface KvkkStore {
  accepted: boolean | null;
  load: () => Promise<void>;
  accept: () => Promise<void>;
}

export const useKvkkStore = create<KvkkStore>((set) => ({
  accepted: null,
  load: async () => {
    set({ accepted: await isKvkkAccepted() });
  },
  accept: async () => {
    await acceptKvkk();
    set({ accepted: true });
  },
}));
