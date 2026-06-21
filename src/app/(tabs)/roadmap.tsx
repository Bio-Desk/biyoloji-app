import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import {
  getAllLearningOutcomes,
  getKonuHakimiyetiSummary,
  getRecommendedOutcome,
  getRevisionQueue,
} from '../../features/learningOS/learningOSSelectors';
import { useLearningOutcomeProgressStore } from '../../store/learningOutcomeProgressStore';

type StatusCategory = 'Başlanmadı' | 'Devam Ediyor' | 'Tekrar Gerekli' | 'Tamamlandı';

function getStatus(outcomeId: string): StatusCategory {
  const progress = useLearningOutcomeProgressStore.getState().progressByOutcomeId[outcomeId];
  if (!progress || progress.status === 'not_started') return 'Başlanmadı';
  if (progress.status === 'mastered' || progress.masteryScore >= 80) return 'Tamamlandı';
  if (progress.status === 'needs_revision' || progress.nextReviewDate) return 'Tekrar Gerekli';
  return 'Devam Ediyor';
}

export default function RoadmapScreen() {
  const summary = getKonuHakimiyetiSummary();
  const recommended = getRecommendedOutcome();
  const revisionQueue = getRevisionQueue();
  const allOutcomes = getAllLearningOutcomes();
  const units = Object.values(
    allOutcomes.reduce<Record<string, typeof allOutcomes>>((groups, item) => {
      groups[item.unit.id] = groups[item.unit.id] ? [...groups[item.unit.id], item] : [item];
      return groups;
    }, {})
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Yol Haritam</Text>
        <Text style={styles.subtitle}>Neredeyim, ne kadar ilerledim, sonraki adım ne?</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Yol Özeti</Text>
          <Text style={styles.bodyText}>
            {summary.startedOutcomes}/{summary.totalOutcomes} kazanıma başlandı · {summary.masteredOutcomes} tamamlandı · {summary.needsRevision} tekrar gerekli
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sıradaki Adım</Text>
          {recommended ? (
            <>
              <Text style={styles.code}>{recommended.code}</Text>
              <Text style={styles.cardTitle}>{recommended.title}</Text>
              <Text style={styles.bodyText}>{recommended.reason}</Text>
            </>
          ) : (
            <Text style={styles.emptyText}>Sıradaki adım henüz belirlenmedi.</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Ünite Haritası</Text>
          {units.slice(0, 6).map((items) => {
            const unit = items[0].unit;
            const completed = items.filter(({ outcome }) => getStatus(outcome.id ?? outcome.code) === 'Tamamlandı').length;
            return (
              <View key={unit.id} style={styles.unitRow}>
                <Text style={styles.cardTitle}>{unit.title}</Text>
                <Text style={styles.bodyText}>{unit.examTypeId} · {unit.gradeLevel}. Sınıf · {completed}/{items.length} tamamlandı</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Tekrar Gerekenler</Text>
          {revisionQueue.length > 0 ? (
            revisionQueue.slice(0, 3).map((item) => (
              <Text key={item.outcomeId} style={styles.bodyText}>
                {item.code} · {item.overdue ? 'Tekrar zamanı geldi' : `${item.daysUntilReview} gün sonra`}
              </Text>
            ))
          ) : (
            <Text style={styles.emptyText}>Şu anda tekrar gerektiren kazanım yok.</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Tamamlananlar / Durum Özeti</Text>
          {(['Başlanmadı', 'Devam Ediyor', 'Tekrar Gerekli', 'Tamamlandı'] as StatusCategory[]).map((status) => {
            const count = allOutcomes.filter(({ outcome }) => getStatus(outcome.id ?? outcome.code) === status).length;
            return (
              <View key={status} style={styles.statusRow}>
                <Text style={styles.bodyText}>{status}</Text>
                <Text style={styles.statusCount}>{count}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.base, paddingBottom: spacing['3xl'] },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  code: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  bodyText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed,
  },
  emptyText: {
    fontSize: typography.fontSize.sm,
    color: colors.textMuted,
  },
  unitRow: {
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },
  statusCount: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
});
