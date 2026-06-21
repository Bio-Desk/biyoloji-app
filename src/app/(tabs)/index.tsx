import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAccessibleTheme } from '../../hooks/useAccessibleTheme';
import {
  getContinueLearningItem,
  getKonuHakimiyetiSummary,
  getRecommendedOutcome,
  getRevisionQueue,
} from '../../features/learningOS/learningOSSelectors';
import type { LearningOutcomeStage } from '../../types';

const stageLabels: Record<LearningOutcomeStage, string> = {
  not_started: 'Başlamadı',
  lesson: 'Ders',
  infographic: 'İnfografik',
  flashcard: 'Flashcard',
  quiz: 'Quiz',
  result: 'Sonuç',
  revision: 'Tekrar',
  mastered: 'Hakim',
};

function openOutcome(outcomeId?: string) {
  if (!outcomeId) return;
  router.push({
    pathname: '/learn/outcome/[outcomeId]',
    params: { outcomeId },
  } as any);
}

export default function TodayScreen() {
  const { colors, typography, spacing, radius, shadows } = useAccessibleTheme();
  const recommendedOutcome = getRecommendedOutcome();
  const continueLearning = getContinueLearningItem();
  const revisionQueue = getRevisionQueue();
  const summary = getKonuHakimiyetiSummary();
  const revisionPreview = revisionQueue.slice(0, 3);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { padding: spacing.base, paddingBottom: spacing['3xl'] }]}
      >
        <View style={[styles.header, { marginBottom: spacing.lg }]}>
          <View>
            <Text style={[styles.title, { color: colors.textPrimary, fontSize: typography.fontSize['2xl'], letterSpacing: typography.letterSpacing }]}>
              Bugün
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary, fontSize: typography.fontSize.sm, letterSpacing: typography.letterSpacing }]}>
              Bugün ne çalışmalıyım?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/accessibility')}
            style={[styles.iconButton, { backgroundColor: colors.surface, borderRadius: radius.full, ...shadows.sm }]}
            accessibilityLabel="Erişilebilirlik ayarları"
          >
            <Ionicons name="accessibility-outline" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={[styles.section, { marginBottom: spacing.lg }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md }]}>
            Bugünün Önerisi
          </Text>
          <View style={[styles.card, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.base, ...shadows.sm }]}>
            {recommendedOutcome ? (
              <>
                <Text style={[styles.code, { color: colors.primary, fontSize: typography.fontSize.xs }]}>
                  {recommendedOutcome.code}
                </Text>
                <Text style={[styles.cardTitle, { color: colors.textPrimary, fontSize: typography.fontSize.lg }]}>
                  {recommendedOutcome.title}
                </Text>
                <Text style={[styles.bodyText, { color: colors.textSecondary, fontSize: typography.fontSize.sm }]}>
                  {recommendedOutcome.text}
                </Text>
                <View style={[styles.infoBox, { backgroundColor: colors.surfaceSecondary, borderRadius: radius.md, padding: spacing.sm }]}>
                  <Text style={[styles.metaLabel, { color: colors.textMuted, fontSize: typography.fontSize.xs }]}>Neden?</Text>
                  <Text style={[styles.metaValue, { color: colors.textPrimary, fontSize: typography.fontSize.sm }]}>
                    {recommendedOutcome.reason}
                  </Text>
                </View>
                <View style={styles.metaRow}>
                  <View style={[styles.pill, { backgroundColor: colors.primaryMuted, borderRadius: radius.full, paddingHorizontal: spacing.sm, paddingVertical: spacing.xs }]}>
                    <Text style={[styles.pillText, { color: colors.primary, fontSize: typography.fontSize.xs }]}>
                      {stageLabels[recommendedOutcome.suggestedStage]}
                    </Text>
                  </View>
                  {recommendedOutcome.nextReviewDate && (
                    <Text style={[styles.inlineMeta, { color: colors.textMuted, fontSize: typography.fontSize.xs }]}>
                      Tekrar: {recommendedOutcome.nextReviewDate}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  style={[styles.primaryButton, { backgroundColor: colors.primary, borderRadius: radius.full, paddingVertical: spacing.md }]}
                  onPress={() => openOutcome(recommendedOutcome.outcomeId)}
                  activeOpacity={0.85}
                >
                  <Ionicons name="play" size={18} color={colors.textInverse} />
                  <Text style={[styles.primaryButtonText, { color: colors.textInverse, fontSize: typography.fontSize.sm }]}>
                    Çalışmaya Başla
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={[styles.emptyText, { color: colors.textMuted, fontSize: typography.fontSize.sm }]}>
                Bugün için hazır bir öneri bulunamadı. Öğren sekmesinden bir kazanım seçerek başlayabilirsin.
              </Text>
            )}
          </View>
        </View>

        <View style={[styles.section, { marginBottom: spacing.lg }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md }]}>
            Devam Et
          </Text>
          <View style={[styles.card, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.base, ...shadows.sm }]}>
            {continueLearning ? (
              <>
                <Text style={[styles.code, { color: colors.primary, fontSize: typography.fontSize.xs }]}>
                  {continueLearning.code}
                </Text>
                <Text style={[styles.cardTitle, { color: colors.textPrimary, fontSize: typography.fontSize.base }]}>
                  {continueLearning.title}
                </Text>
                <Text style={[styles.bodyText, { color: colors.textSecondary, fontSize: typography.fontSize.sm }]}>
                  {continueLearning.reason}
                </Text>
                <View style={styles.metaRow}>
                  <View style={[styles.pill, { backgroundColor: colors.primaryMuted, borderRadius: radius.full, paddingHorizontal: spacing.sm, paddingVertical: spacing.xs }]}>
                    <Text style={[styles.pillText, { color: colors.primary, fontSize: typography.fontSize.xs }]}>
                      {stageLabels[continueLearning.currentStage]}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={[styles.secondaryButton, { borderColor: colors.primary, borderRadius: radius.full, paddingVertical: spacing.sm }]}
                  onPress={() => openOutcome(continueLearning.outcomeId)}
                  activeOpacity={0.85}
                >
                  <Text style={[styles.secondaryButtonText, { color: colors.primary, fontSize: typography.fontSize.sm }]}>
                    Kaldığın Yerden Devam Et
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={[styles.emptyText, { color: colors.textMuted, fontSize: typography.fontSize.sm }]}>
                Devam eden kazanım yok.
              </Text>
            )}
          </View>
        </View>

        <View style={[styles.section, { marginBottom: spacing.lg }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md }]}>
            Tekrar Kuyruğu
          </Text>
          <View style={[styles.card, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.base, ...shadows.sm }]}>
            {revisionPreview.length > 0 ? (
              revisionPreview.map((item) => (
                <View key={item.outcomeId} style={[styles.revisionRow, { borderBottomColor: colors.border, paddingVertical: spacing.sm }]}>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.code, { color: colors.primary, fontSize: typography.fontSize.xs }]}>
                      {item.code}
                    </Text>
                    <Text style={[styles.rowTitle, { color: colors.textPrimary, fontSize: typography.fontSize.sm }]}>
                      {item.title}
                    </Text>
                    <Text style={[styles.inlineMeta, { color: colors.textMuted, fontSize: typography.fontSize.xs }]}>
                      {item.overdue ? 'Tekrar zamanı geldi' : `${item.daysUntilReview} gün sonra`} · Konu Hakimiyeti {item.masteryScore}
                    </Text>
                  </View>
                  <Ionicons name={item.overdue ? 'alert-circle' : 'calendar-outline'} size={20} color={item.overdue ? colors.warning : colors.textMuted} />
                </View>
              ))
            ) : (
              <Text style={[styles.emptyText, { color: colors.textMuted, fontSize: typography.fontSize.sm }]}>
                Bugün tekrar gerektiren kazanım yok.
              </Text>
            )}
          </View>
        </View>

        <View style={[styles.section, { marginBottom: spacing.lg }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md }]}>
            Konu Hakimiyeti
          </Text>
          <View style={[styles.summaryGrid, { gap: spacing.sm }]}>
            {[
              ['Toplam', summary.totalOutcomes],
              ['Başlanan', summary.startedOutcomes],
              ['Hakim', summary.masteredOutcomes],
              ['Zayıf', summary.weakOutcomes],
              ['Ortalama', summary.averageMasteryScore],
              ['Tekrar', summary.needsRevision],
            ].map(([label, value]) => (
              <View key={label} style={[styles.summaryCard, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.sm, ...shadows.sm }]}>
                <Text style={[styles.summaryValue, { color: colors.textPrimary, fontSize: typography.fontSize.lg }]}>
                  {value}
                </Text>
                <Text style={[styles.summaryLabel, { color: colors.textMuted, fontSize: typography.fontSize.xs }]}>
                  {label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.section, { marginBottom: spacing.lg }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md }]}>
            Hızlı Erişim
          </Text>
          <View style={[styles.quickGrid, { gap: spacing.sm }]}>
            <TouchableOpacity style={[styles.quickButton, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.base, ...shadows.sm }]} onPress={() => router.push('/(tabs)/learn')}>
              <Ionicons name="book-outline" size={20} color={colors.primary} />
              <Text style={[styles.quickText, { color: colors.textPrimary, fontSize: typography.fontSize.sm }]}>Öğren</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickButton, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.base, ...shadows.sm }]} onPress={() => router.push('/(tabs)/practice')}>
              <Ionicons name="fitness-outline" size={20} color={colors.primary} />
              <Text style={[styles.quickText, { color: colors.textPrimary, fontSize: typography.fontSize.sm }]}>Pekiştir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickButton, { backgroundColor: colors.surfaceSecondary, borderRadius: radius.lg, padding: spacing.base }]} disabled>
              <Ionicons name="navigate-outline" size={20} color={colors.textMuted} />
              <Text style={[styles.quickText, { color: colors.textMuted, fontSize: typography.fontSize.sm }]}>Yol Haritam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickButton, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.base, ...shadows.sm }]} onPress={() => router.push('/(tabs)/progress')}>
              <Ionicons name="trending-up-outline" size={20} color={colors.primary} />
              <Text style={[styles.quickText, { color: colors.textPrimary, fontSize: typography.fontSize.sm }]}>Gelişimim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 2,
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {},
  sectionTitle: {
    fontWeight: '700',
    marginBottom: 8,
  },
  card: {
    gap: 10,
  },
  code: {
    fontWeight: '700',
  },
  cardTitle: {
    fontWeight: '700',
  },
  bodyText: {
    lineHeight: 20,
  },
  infoBox: {
    gap: 2,
  },
  metaLabel: {
    fontWeight: '700',
  },
  metaValue: {
    fontWeight: '600',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {},
  pillText: {
    fontWeight: '700',
  },
  inlineMeta: {},
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 4,
  },
  primaryButtonText: {
    fontWeight: '700',
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginTop: 4,
  },
  secondaryButtonText: {
    fontWeight: '700',
  },
  emptyText: {
    lineHeight: 20,
  },
  revisionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowTitle: {
    fontWeight: '600',
    marginTop: 2,
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  summaryCard: {
    width: '31%',
    minHeight: 74,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryValue: {
    fontWeight: '800',
  },
  summaryLabel: {
    marginTop: 4,
    fontWeight: '600',
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quickButton: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quickText: {
    fontWeight: '700',
  },
});
