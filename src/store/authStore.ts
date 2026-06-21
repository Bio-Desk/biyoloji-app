import { create } from 'zustand';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { useUserStore } from './userStore';
import type { GradeLevel, TeacherVerificationStatus, UserProfile, UserRole } from '../types';

export type AuthStatus = 'loading' | 'unauthenticated' | 'needs-role' | 'authenticated';

interface ProfileRow {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole | null;
  grade_level: GradeLevel | null;
  goal: UserProfile['goal'] | null;
  teacher_verification_status: TeacherVerificationStatus | null;
  kvkk_accepted_at: string;
  created_at: string;
}

interface SignUpInput {
  email: string;
  password: string;
  fullName: string;
  role: UserRole;
  gradeLevel?: GradeLevel;
  goal?: UserProfile['goal'];
  kvkkAcceptedAt: string;
  kvkkVersion: string;
}

interface AuthStore {
  status: AuthStatus;
  session: Session | null;
  error: string | null;
  initialize: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (input: SignUpInput) => Promise<void>;
  signOut: () => Promise<void>;
}

function rowToProfile(session: Session, row: ProfileRow): UserProfile {
  return {
    id: row.id,
    email: row.email,
    fullName: row.full_name ?? '',
    role: row.role ?? 'student',
    gradeLevel: (row.grade_level ?? 9) as GradeLevel,
    goal: row.goal ?? 'tyt',
    totalXp: 0,
    level: 1,
    streakDays: 0,
    lastActiveDate: new Date().toISOString(),
    isPro: false,
    kvkkAcceptedAt: row.kvkk_accepted_at,
    teacherVerificationStatus: row.teacher_verification_status ?? 'unverified',
  };
}

async function loadProfile(session: Session): Promise<AuthStatus> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .maybeSingle();

  if (error) {
    console.error('Profil yüklenemedi:', error.message);
    return 'needs-role';
  }

  if (!data) {
    return 'needs-role';
  }

  useUserStore.getState().setUser(rowToProfile(session, data as ProfileRow));
  return 'authenticated';
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  status: 'loading',
  session: null,
  error: null,

  initialize: async () => {
    const { data } = await supabase.auth.getSession();
    const session = data.session;

    if (!session) {
      set({ status: 'unauthenticated', session: null });
    } else {
      const status = await loadProfile(session);
      set({ status, session });
    }

    supabase.auth.onAuthStateChange(async (_event, newSession) => {
      if (!newSession) {
        set({ status: 'unauthenticated', session: null });
        return;
      }
      const status = await loadProfile(newSession);
      set({ status, session: newSession });
    });
  },

  signIn: async (email, password) => {
    set({ error: null });
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      set({ error: error.message });
      throw error;
    }
  },

  signUp: async (input) => {
    set({ error: null });
    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
    });
    if (error) {
      set({ error: error.message });
      throw error;
    }
    if (!data.user) {
      const message = 'Kayıt oluşturulamadı.';
      set({ error: message });
      throw new Error(message);
    }

    const { error: profileError } = await supabase.from('profiles').insert({
      id: data.user.id,
      email: input.email,
      full_name: input.fullName,
      role: input.role,
      grade_level: input.role === 'student' ? input.gradeLevel : null,
      goal: input.role === 'student' ? input.goal : null,
      kvkk_accepted_at: input.kvkkAcceptedAt,
      kvkk_version: input.kvkkVersion,
    });
    if (profileError) {
      set({ error: profileError.message });
      throw profileError;
    }

    if (data.session) {
      const status = await loadProfile(data.session);
      set({ status, session: data.session });
    } else {
      // E-posta onayı bekleniyor: oturum henüz yok.
      set({ status: 'unauthenticated' });
    }
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ status: 'unauthenticated', session: null });
  },
}));
