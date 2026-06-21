import { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LEVELS } from '../../types';
import { useAccessibleTheme } from '../../hooks/useAccessibleTheme';
import { useProgressStore } from '../../store/progressStore';
import { getReviewCountsByDate } from '../../lib/spaced-repetition';
import { ReviewCalendar } from '../../components/ReviewCalendar';

const LOCAL_USER_ID = 'local';

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

function StatCard({
  icon, value, label, color, colors, typography, radius, shadows,
}: {
  icon: string; value: string | number; label: string; color: string;
  colors: ReturnType<typeof useAccessibleTheme>['colors'];
  typography: ReturnType<typeof useAccessibleTheme>['typography'];
  radius: ReturnType<typeof useAccessibleTheme>['radius'];
  shadows: ReturnType<typeof useAccessibleTheme>['shadows'];
}) {
  return (
    <View style={[styles.statCard, { borderTopColor: color, backgroundColor: colors.surface, borderRadius: radius.md, ...shadows.sm }]}>
      <Ionicons name={icon as any} size={20} color={color} />
      <Text style={{ fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.textPrimary, marginTop: 4 }}>
        {value}
      </Text>
      <Text style={{ fontSize: typography.fontSize.xs, color: colors.textMuted, marginTop: 2 }}>{label}</Text>
    </View>
  );
}

export default function ProgressScreen() {
  const { colors, typography, spacing, radius, shadows } = useAccessibleTheme();
  const memoryRecords = useProgressStore((s) => s.memoryRecords);

  const reviewCounts = useMemo(() => {
    const records = Object.values(memoryRecords).filter((r) => r.userId === LOCAL_USER_ID);
    return getReviewCountsByDate(records);
  }, [memoryRecords]);

  const currentLevel = LEVELS[mockStats.level - 1];
  const nextLevel = LEVELS[mockStats.level];
  const xpToNext = nextLevel ? nextLevel.minXp - mockStats.totalXp : 0;
  const levelProgress = nextLevel
    ? ((mockStats.totalXp - currentLevel.minXp) / (nextLevel.minXp - currentLevel.minXp)) * 100
    : 100;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary, paddingHorizontal: spacing.base, paddingVertical: spacing.lg }]}>
        <Text style={{ fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.textInverse }}>
          İlerleme
        </Text>
        <Text style={{ fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>
          Öğrenme durumun ve hedeflerin
        </Text>
      </View>

      <ScrollView contentContainerStyle={[styles.scroll, { padding: spacing.base, paddingBottom: spacing['3xl'] }]}>

        {/* Level Card */}
        <View style={[styles.levelCard, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.base, marginBottom: spacing.lg, ...shadows.md }]}>
          <View style={[styles.levelRow, { marginBottom: spacing.md }]}>
            <View>
              <Text style={{ fontSize: typography.fontSize.sm, color: colors.textMuted, fontWeight: typography.fontWeight.medium }}>
                Seviye {mockStats.level}
              </Text>
              <Text style={{ fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.primary, marginTop: 2 }}>
                {currentLevel.title}
              </Text>
            </View>
            <View style={[styles.xpBadge, { backgroundColor: colors.primaryMuted, padding: spacing.md, borderRadius: radius.md }]}>
              <Text style={{ fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.extrabold, color: colors.primary }}>
                {mockStats.totalXp}
              </Text>
              <Text style={{ fontSize: typography.fontSize.xs, color: colors.primaryLight }}>XP</Text>
            </View>
          </View>
          <View style={[styles.progressBar, { backgroundColor: colors.surfaceSecondary, borderRadius: radius.full }]}>
            <View style={[styles.progressFill, { width: `${levelProgress}%`, backgroundColor: colors.primary, borderRadius: radius.full }]} />
          </View>
          {nextLevel && (
            <Text style={{ fontSize: typography.fontSize.xs, color: colors.textMuted, marginTop: spacing.xs }}>
              Sonraki seviyeye {xpToNext} XP kaldı → {nextLevel.title}
            </Text>
          )}
        </View>

        {/* Stats Grid */}
        <View style={[styles.statsGrid, { gap: spacing.sm, marginBottom: spacing.lg }]}>
          <StatCard icon="flame" value={mockStats.streakDays} label="Gün Serisi" color={colors.accent} colors={colors} typography={typography} radius={radius} shadows={shadows} />
          <StatCard icon="checkmark-circle" value={mockStats.questionsSolved} label="Çözülen Soru" color={colors.success} colors={colors} typography={typography} radius={radius} shadows={shadows} />
          <StatCard icon="trending-up" value={`%${mockStats.correctRate}`} label="Doğruluk" color={colors.info} colors={colors} typography={typography} radius={radius} shadows={shadows} />
          <StatCard icon="time" value={`${mockStats.studyMinutesTotal} dk`} label="Toplam Süre" color={colors.primary} colors={colors} typography={typography} radius={radius} shadows={shadows} />
        </View>

        {/* Topic Progress */}
        <View style={{ marginBottom: spacing.lg }}>
          <Text style={{ fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold, color: colors.textPrimary, marginBottom: spacing.md }}>
            9. Sınıf İlerleme
          </Text>
          <View style={{ gap: spacing.xs }}>
            <View style={[styles.topicProgressBar, { backgroundColor: colors.surfaceSecondary, borderRadius: radius.full }]}>
              <View style={[styles.topicProgressFill, {
                width: `${(mockStats.completedTopics / mockStats.totalTopics) * 100}%`,
                backgroundColor: colors.primary,
                borderRadius: radius.full,
              }]} />
            </View>
            <Text style={{ fontSize: typography.fontSize.sm, color: colors.textSecondary }}>
              {mockStats.completedTopics}/{mockStats.totalTopics} konu tamamlandı
            </Text>
          </View>
        </View>

        {/* Review Calendar */}
        <View style={{ marginBottom: spacing.lg }}>
          <Text style={{ fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold, color: colors.textPrimary, marginBottom: spacing.md }}>
            <Ionicons name="calendar" size={14} color={colors.primary} /> Tekrar Takvimi
          </Text>
          <ReviewCalendar reviewCounts={reviewCounts} />
        </View>

        {/* Weak Topics */}
        <View style={{ marginBottom: spacing.lg }}>
          <Text style={{ fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold, color: colors.textPrimary, marginBottom: spacing.md }}>
            <Ionicons name="warning" size={14} color={colors.error} /> Güçlendirilmesi Gerekenler
          </Text>
          {mockWeakTopics.map((t, i) => (
            <View key={i} style={[styles.topicRow, { gap: spacing.sm, marginBottom: spacing.sm }]}>
              <Text style={{ fontSize: typography.fontSize.sm, color: colors.textPrimary, width: 160 }} numberOfLines={1}>{t.title}</Text>
              <View style={[styles.scoreBar, { backgroundColor: colors.surfaceSecondary, borderRadius: radius.full }]}>
                <View style={[styles.scoreBarFill, {
                  width: `${t.score}%`,
                  backgroundColor: t.score < 60 ? colors.error : colors.warning,
                  borderRadius: radius.full,
                }]} />
              </View>
              <Text style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold, width: 36, textAlign: 'right', color: t.score < 60 ? colors.error : colors.warning }}>
                %{t.score}
              </Text>
            </View>
          ))}
        </View>

        {/* Strong Topics */}
        <View style={{ marginBottom: spacing.lg }}>
          <Text style={{ fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold, color: colors.textPrimary, marginBottom: spacing.md }}>
            <Ionicons name="star" size={14} color={colors.success} /> Güçlü Konular
          </Text>
          {mockStrongTopics.map((t, i) => (
            <View key={i} style={[styles.topicRow, { gap: spacing.sm, marginBottom: spacing.sm }]}>
              <Text style={{ fontSize: typography.fontSize.sm, color: colors.textPrimary, width: 160 }} numberOfLines={1}>{t.title}</Text>
              <View style={[styles.scoreBar, { backgroundColor: colors.surfaceSecondary, borderRadius: radius.full }]}>
                <View style={[styles.scoreBarFill, { width: `${t.score}%`, backgroundColor: colors.success, borderRadius: radius.full }]} />
              </View>
              <Text style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold, width: 36, textAlign: 'right', color: colors.success }}>
                %{t.score}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {},
  scroll: {},

  levelCard: {},
  levelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  xpBadge: { alignItems: 'center' },
  progressBar: { height: 10, overflow: 'hidden' },
  progressFill: { height: '100%' },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  statCard: { flex: 1, minWidth: '45%', padding: 12, alignItems: 'center', borderTopWidth: 3 },

  topicProgressBar: { height: 10, overflow: 'hidden' },
  topicProgressFill: { height: '100%' },

  topicRow: { flexDirection: 'row', alignItems: 'center' },
  scoreBar: { flex: 1, height: 8, overflow: 'hidden' },
  scoreBarFill: { height: '100%' },
});
