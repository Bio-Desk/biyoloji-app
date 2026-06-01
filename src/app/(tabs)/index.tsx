import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';

// Placeholder data — will be replaced by Zustand store + DB queries
const mockUser = {
  name: 'Aylin',
  gradeLevel: 9,
  streakDays: 7,
  totalXp: 1240,
  level: 2,
  levelTitle: 'Hücre Kaşifi',
  dailyGoalProgress: 60,
};

const mockDueReviews = 8;

const mockDailyQuests = [
  { id: '1', description: '10 tekrar kartı çöz', progress: 6, target: 10, xpReward: 30 },
  { id: '2', description: '1 yeni konu oku', progress: 0, target: 1, xpReward: 50 },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Merhaba, {mockUser.name} 👋</Text>
            <Text style={styles.subGreeting}>9. Sınıf · {mockUser.levelTitle}</Text>
          </View>
          <View style={styles.streakBadge}>
            <Ionicons name="flame" size={16} color={colors.accent} />
            <Text style={styles.streakText}>{mockUser.streakDays}</Text>
          </View>
        </View>

        {/* Daily Goal Progress */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Günlük Hedef</Text>
            <Text style={styles.xpText}>+{mockUser.totalXp} XP</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${mockUser.dailyGoalProgress}%` }]} />
          </View>
          <Text style={styles.progressLabel}>%{mockUser.dailyGoalProgress} tamamlandı</Text>
        </View>

        {/* Revision Due */}
        {mockDueReviews > 0 && (
          <TouchableOpacity
            style={styles.revisionCard}
            onPress={() => router.push('/practice')}
            activeOpacity={0.85}
          >
            <View style={styles.revisionLeft}>
              <Ionicons name="reload-circle" size={28} color={colors.accent} />
              <View style={{ marginLeft: spacing.md }}>
                <Text style={styles.revisionTitle}>Tekrar Sırası Bekliyor</Text>
                <Text style={styles.revisionSub}>{mockDueReviews} kart bugün tekrar edilmeli</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
          </TouchableOpacity>
        )}

        {/* Continue Learning */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kaldığın Yerden Devam Et</Text>
        </View>
        <TouchableOpacity
          style={styles.continueCard}
          onPress={() => router.push('/learn/lesson/9-1.4-properties')}
          activeOpacity={0.85}
        >
          <View style={styles.continueLeft}>
            <View style={[styles.topicDot, { backgroundColor: colors.primaryMuted }]}>
              <Ionicons name="leaf" size={18} color={colors.primary} />
            </View>
            <View style={{ marginLeft: spacing.md, flex: 1 }}>
              <Text style={styles.continueLabel}>9. Sınıf · Tema 1</Text>
              <Text style={styles.continueTitle} numberOfLines={2}>Canlıların Ortak Özellikleri</Text>
              <View style={styles.miniProgress}>
                <View style={[styles.miniProgressFill, { width: '45%' }]} />
              </View>
            </View>
          </View>
          <View style={styles.continueBadge}>
            <Text style={styles.continueBadgeText}>Devam Et</Text>
          </View>
        </TouchableOpacity>

        {/* Daily Quests */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Günlük Görevler</Text>
          <Text style={styles.questXp}>Tamamla → XP kazan</Text>
        </View>
        {mockDailyQuests.map((quest) => (
          <View key={quest.id} style={styles.questCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.questDesc}>{quest.description}</Text>
              <View style={styles.questProgressRow}>
                <View style={styles.questProgressBar}>
                  <View
                    style={[
                      styles.questProgressFill,
                      { width: `${(quest.progress / quest.target) * 100}%` },
                    ]}
                  />
                </View>
                <Text style={styles.questProgressText}>
                  {quest.progress}/{quest.target}
                </Text>
              </View>
            </View>
            <View style={styles.questXpBadge}>
              <Text style={styles.questXpText}>+{quest.xpReward}</Text>
              <Text style={styles.questXpLabel}>XP</Text>
            </View>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.base, paddingBottom: spacing['3xl'] },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  greeting: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  subGreeting: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accentLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    gap: 4,
  },
  streakText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.accent,
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  cardTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  xpText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  progressLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },

  revisionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.accentLight,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F5C5B5',
  },
  revisionLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  revisionTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  revisionSub: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },

  continueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  continueLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  topicDot: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
  },
  continueTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginTop: 2,
  },
  miniProgress: {
    height: 4,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.full,
    marginTop: spacing.xs,
    overflow: 'hidden',
  },
  miniProgressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  continueBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    marginLeft: spacing.md,
  },
  continueBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textInverse,
  },

  questCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  questDesc: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.medium,
  },
  questProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
    gap: spacing.sm,
  },
  questProgressBar: {
    flex: 1,
    height: 6,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  questProgressFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: radius.full,
  },
  questProgressText: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    width: 30,
  },
  questXpBadge: {
    alignItems: 'center',
    marginLeft: spacing.base,
  },
  questXpText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  questXpLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
  },
  questXp: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
  },
});
