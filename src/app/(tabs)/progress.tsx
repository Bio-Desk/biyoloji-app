import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import { LEVELS } from '../../types';

const mockStats = {
  totalXp: 1240,
  level: 2,
  streakDays: 7,
  questionsSolved: 48,
  correctRate: 72,
  studyMinutesTotal: 134,
  completedTopics: 2,
  totalTopics: 15,
};

const mockWeakTopics = [
  { title: 'Enzim Aktivitesi', score: 42 },
  { title: 'Difüzyon ve Ozmoz', score: 55 },
  { title: 'Organik Moleküller', score: 61 },
];

const mockStrongTopics = [
  { title: 'Canlıların Ortak Özellikleri', score: 88 },
  { title: 'Biyoçeşitlilik', score: 82 },
];

function StatCard({ icon, value, label, color }: {
  icon: string; value: string | number; label: string; color: string;
}) {
  return (
    <View style={[styles.statCard, { borderTopColor: color }]}>
      <Ionicons name={icon as any} size={20} color={color} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export default function ProgressScreen() {
  const currentLevel = LEVELS[mockStats.level - 1];
  const nextLevel = LEVELS[mockStats.level];
  const xpToNext = nextLevel ? nextLevel.minXp - mockStats.totalXp : 0;
  const levelProgress = nextLevel
    ? ((mockStats.totalXp - currentLevel.minXp) / (nextLevel.minXp - currentLevel.minXp)) * 100
    : 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>İlerleme</Text>
        <Text style={styles.sub}>Öğrenme durumun ve hedeflerin</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Level Card */}
        <View style={styles.levelCard}>
          <View style={styles.levelRow}>
            <View>
              <Text style={styles.levelNum}>Seviye {mockStats.level}</Text>
              <Text style={styles.levelTitle}>{currentLevel.title}</Text>
            </View>
            <View style={styles.xpBadge}>
              <Text style={styles.xpValue}>{mockStats.totalXp}</Text>
              <Text style={styles.xpLabel}>XP</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${levelProgress}%` }]} />
          </View>
          {nextLevel && (
            <Text style={styles.xpToNext}>
              Sonraki seviyeye {xpToNext} XP kaldı → {nextLevel.title}
            </Text>
          )}
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <StatCard icon="flame" value={mockStats.streakDays} label="Gün Serisi" color={colors.accent} />
          <StatCard icon="checkmark-circle" value={mockStats.questionsSolved} label="Çözülen Soru" color={colors.success} />
          <StatCard icon="trending-up" value={`%${mockStats.correctRate}`} label="Doğruluk" color={colors.info} />
          <StatCard icon="time" value={`${mockStats.studyMinutesTotal} dk`} label="Toplam Süre" color={colors.primary} />
        </View>

        {/* Topic Progress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>9. Sınıf İlerleme</Text>
          <View style={styles.topicProgress}>
            <View style={styles.topicProgressBar}>
              <View style={[styles.topicProgressFill, {
                width: `${(mockStats.completedTopics / mockStats.totalTopics) * 100}%`
              }]} />
            </View>
            <Text style={styles.topicProgressText}>
              {mockStats.completedTopics}/{mockStats.totalTopics} konu tamamlandı
            </Text>
          </View>
        </View>

        {/* Weak Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="warning" size={14} color={colors.error} /> Güçlendirilmesi Gerekenler
          </Text>
          {mockWeakTopics.map((t, i) => (
            <View key={i} style={styles.topicRow}>
              <Text style={styles.topicName} numberOfLines={1}>{t.title}</Text>
              <View style={styles.scoreBar}>
                <View style={[styles.scoreBarFill, {
                  width: `${t.score}%`,
                  backgroundColor: t.score < 60 ? colors.error : colors.warning,
                }]} />
              </View>
              <Text style={[styles.scoreText, { color: t.score < 60 ? colors.error : colors.warning }]}>
                %{t.score}
              </Text>
            </View>
          ))}
        </View>

        {/* Strong Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="star" size={14} color={colors.success} /> Güçlü Konular
          </Text>
          {mockStrongTopics.map((t, i) => (
            <View key={i} style={styles.topicRow}>
              <Text style={styles.topicName} numberOfLines={1}>{t.title}</Text>
              <View style={styles.scoreBar}>
                <View style={[styles.scoreBarFill, { width: `${t.score}%`, backgroundColor: colors.success }]} />
              </View>
              <Text style={[styles.scoreText, { color: colors.success }]}>%{t.score}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.lg,
  },
  title: { fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.textInverse },
  sub: { fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.7)', marginTop: 4 },
  scroll: { padding: spacing.base, paddingBottom: spacing['3xl'] },

  levelCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  levelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.md },
  levelNum: { fontSize: typography.fontSize.sm, color: colors.textMuted, fontWeight: typography.fontWeight.medium },
  levelTitle: { fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.primary, marginTop: 2 },
  xpBadge: { alignItems: 'center', backgroundColor: colors.primaryMuted, padding: spacing.md, borderRadius: radius.md },
  xpValue: { fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.extrabold, color: colors.primary },
  xpLabel: { fontSize: typography.fontSize.xs, color: colors.primaryLight },
  progressBar: { height: 10, backgroundColor: colors.surfaceSecondary, borderRadius: radius.full, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: radius.full },
  xpToNext: { fontSize: typography.fontSize.xs, color: colors.textMuted, marginTop: spacing.xs },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
    borderTopWidth: 3,
    ...shadows.sm,
  },
  statValue: { fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.textPrimary, marginTop: spacing.xs },
  statLabel: { fontSize: typography.fontSize.xs, color: colors.textMuted, marginTop: 2 },

  section: { marginBottom: spacing.lg },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  topicProgress: { gap: spacing.xs },
  topicProgressBar: { height: 10, backgroundColor: colors.surfaceSecondary, borderRadius: radius.full, overflow: 'hidden' },
  topicProgressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: radius.full },
  topicProgressText: { fontSize: typography.fontSize.sm, color: colors.textSecondary },

  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  topicName: { fontSize: typography.fontSize.sm, color: colors.textPrimary, width: 160 },
  scoreBar: { flex: 1, height: 8, backgroundColor: colors.surfaceSecondary, borderRadius: radius.full, overflow: 'hidden' },
  scoreBarFill: { height: '100%', borderRadius: radius.full },
  scoreText: { fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold, width: 36, textAlign: 'right' },
});
