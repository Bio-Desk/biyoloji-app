import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import { useAuthStore } from '../../store/authStore';
import { KVKK_VERSION } from '../../lib/kvkk';
import type { GradeLevel, UserProfile, UserRole } from '../../types';

const GRADE_LEVELS: GradeLevel[] = [9, 10, 11, 12];

const GOALS: { key: UserProfile['goal']; label: string }[] = [
  { key: 'tyt', label: 'TYT Hazırlık' },
  { key: 'ayt', label: 'AYT Hazırlık' },
  { key: 'school', label: 'Okul Başarısı' },
  { key: 'curiosity', label: 'Merak / Keşif' },
];

export default function SignupScreen() {
  const signUp = useAuthStore((s) => s.signUp);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>(9);
  const [goal, setGoal] = useState<UserProfile['goal']>('tyt');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);

    if (!fullName.trim() || !email.trim() || !password) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }
    if (password.length < 6) {
      setError('Şifre en az 6 karakter olmalı.');
      return;
    }

    setLoading(true);
    try {
      await signUp({
        email: email.trim(),
        password,
        fullName: fullName.trim(),
        role,
        gradeLevel: role === 'student' ? gradeLevel : undefined,
        goal: role === 'student' ? goal : undefined,
        kvkkAcceptedAt: new Date().toISOString(),
        kvkkVersion: KVKK_VERSION,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Kayıt oluşturulamadı.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Hesap Oluştur</Text>
        <Text style={styles.subtitle}>BiyoMap'e katılmak için bilgilerini gir</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Ad Soyad</Text>
          <TextInput
            style={styles.input}
            placeholder="Adın Soyadın"
            placeholderTextColor={colors.textMuted}
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>E-posta</Text>
          <TextInput
            style={styles.input}
            placeholder="ornek@email.com"
            placeholderTextColor={colors.textMuted}
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Şifre</Text>
          <TextInput
            style={styles.input}
            placeholder="En az 6 karakter"
            placeholderTextColor={colors.textMuted}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Rolün</Text>
          <View style={styles.roleRow}>
            <TouchableOpacity
              style={[styles.roleCard, role === 'student' && styles.roleCardActive]}
              onPress={() => setRole('student')}
              activeOpacity={0.85}
            >
              <Ionicons
                name="school-outline"
                size={24}
                color={role === 'student' ? colors.primary : colors.textMuted}
              />
              <Text style={[styles.roleLabel, role === 'student' && styles.roleLabelActive]}>
                Öğrenci
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.roleCard, role === 'teacher' && styles.roleCardActive]}
              onPress={() => setRole('teacher')}
              activeOpacity={0.85}
            >
              <Ionicons
                name="easel-outline"
                size={24}
                color={role === 'teacher' ? colors.primary : colors.textMuted}
              />
              <Text style={[styles.roleLabel, role === 'teacher' && styles.roleLabelActive]}>
                Öğretmen
              </Text>
            </TouchableOpacity>
          </View>

          {role === 'student' && (
            <>
              <Text style={styles.label}>Sınıf Düzeyi</Text>
              <View style={styles.chipRow}>
                {GRADE_LEVELS.map((g) => (
                  <TouchableOpacity
                    key={g}
                    style={[styles.chip, gradeLevel === g && styles.chipActive]}
                    onPress={() => setGradeLevel(g)}
                  >
                    <Text style={[styles.chipText, gradeLevel === g && styles.chipTextActive]}>
                      {g}. Sınıf
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.label}>Hedefin</Text>
              <View style={styles.chipRow}>
                {GOALS.map((g) => (
                  <TouchableOpacity
                    key={g.key}
                    style={[styles.chip, goal === g.key && styles.chipActive]}
                    onPress={() => setGoal(g.key)}
                  >
                    <Text style={[styles.chipText, goal === g.key && styles.chipTextActive]}>
                      {g.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          {role === 'teacher' && (
            <View style={styles.teacherNote}>
              <Ionicons name="information-circle-outline" size={18} color={colors.info} />
              <Text style={styles.teacherNoteText}>
                Öğretmen paneline erişim için branş bilgisi ve öğretmenlik belgesi, kayıt
                sonrasında profil ekranından yüklenecek ve onaylandıktan sonra etkinleşecektir.
              </Text>
            </View>
          )}

          {error && <Text style={styles.error}>{error}</Text>}

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={loading}
            activeOpacity={0.85}
          >
            {loading ? (
              <ActivityIndicator color={colors.textInverse} />
            ) : (
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton} onPress={() => router.replace('/(auth)/login')}>
            <Text style={styles.linkText}>
              Zaten hesabın var mı? <Text style={styles.linkTextBold}>Giriş Yap</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: spacing['3xl'] },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  form: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadows.sm,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    marginBottom: spacing.base,
    backgroundColor: colors.surface,
  },
  roleRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.base },
  roleCard: {
    flex: 1,
    alignItems: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.base,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  roleCardActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryMuted,
  },
  roleLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textMuted,
  },
  roleLabelActive: { color: colors.primary, fontWeight: typography.fontWeight.bold },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginBottom: spacing.base },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontSize: typography.fontSize.sm, color: colors.textSecondary },
  chipTextActive: { color: colors.textInverse, fontWeight: typography.fontWeight.semibold },
  teacherNote: {
    flexDirection: 'row',
    gap: spacing.sm,
    backgroundColor: colors.infoLight,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.base,
  },
  teacherNoteText: {
    flex: 1,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.xs * typography.lineHeight.relaxed,
  },
  error: {
    color: colors.error,
    fontSize: typography.fontSize.sm,
    marginBottom: spacing.base,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radius.full,
    alignItems: 'center',
  },
  buttonDisabled: { opacity: 0.7 },
  buttonText: {
    color: colors.textInverse,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
  },
  linkButton: { marginTop: spacing.base, alignItems: 'center' },
  linkText: { fontSize: typography.fontSize.sm, color: colors.textSecondary },
  linkTextBold: { color: colors.primary, fontWeight: typography.fontWeight.bold },
});
