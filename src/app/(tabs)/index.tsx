import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import {
  getContinueLearningItem,
  getKonuHakimiyetiSummary,
  getRecommendedOutcome,
  getRevisionQueue,
} from '../../features/learningOS/learningOSSelectors';
import { useAccessibleTheme } from '../../hooks/useAccessibleTheme';
import { useLearningOutcomeProgressStore } from '../../store/learningOutcomeProgressStore';
import { useQuizResultHistoryStore } from '../../store/quizResultHistoryStore';
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

function getOutcomeId(item: any): string | undefined {
  return item?.outcomeId ?? item?.outcome?.id ?? item?.outcome?.code;
}

function getOutcomeCode(item: any): string {
  return item?.outcome?.code ?? item?.code ?? item?.outcomeId ?? 'Kazanım';
}

function getOutcomeText(item: any): string {
  return item?.outcome?.text ?? item?.text ?? 'Bu kazanım için öğrenme akışı hazır.';
}

function getStudentFacingTitle(item: any): string {
  const title = item?.outcome?.title ?? item?.title;
  const code = getOutcomeCode(item);

  if (title && title !== code) return title;

  const text = getOutcomeText(item);
  if (text.includes('sağlık, tarım, çevre, genetik, biyoteknoloji')) {
    return 'Biyolojinin Günlük Yaşamdaki Önemi';
  }
  if (text.includes('günlük yaşam problemlerinin çözümünde')) {
    return 'Biyolojik Bilgiyle Problem Çözme';
  }
  if (text.includes('dönüm noktalarının insan hayatına etkilerini')) {
    return 'Biyolojide Dönüm Noktaları';
  }
  if (text.includes('bilimsel gelişmelerin insan yaşamına')) {
    return 'Biyolojik Gelişmelerin Katkıları';
  }

  return code;
}

function getStudentFacingSubtitle(item: any): string {
  const text = getOutcomeText(item);

  if (text.includes('sağlık, tarım, çevre, genetik, biyoteknoloji')) {
    return 'Sağlık, tarım, çevre, genetik, biyoteknoloji ve sürdürülebilirlik';
  }
  if (text.includes('günlük yaşam problemlerinin çözümünde')) {
    return 'Günlük yaşam sorunlarını biyoloji bilgisiyle çözme';
  }
  if (text.includes('dönüm noktalarının insan hayatına etkilerini')) {
    return 'Aşı, mikroskop, DNA, genetik mühendisliği ve biyoteknoloji';
  }
  if (text.includes('bilimsel gelişmelerin insan yaşamına')) {
    return 'Bilimsel gelişmelerin insan, toplum ve çevreye etkileri';
  }

  return text;
}

function getFocusText(item: any): string {
  const text = getOutcomeText(item);

  if (text.includes('sağlık, tarım, çevre, genetik, biyoteknoloji')) {
    return 'Biyolojinin farklı alanlarda hangi sorunlara çözüm sunduğunu örneklerle ilişkilendir.';
  }
  if (text.includes('günlük yaşam problemlerinin çözümünde')) {
    return 'Günlük bir problemi belirle, hangi biyoloji bilgisinin çözüm sağladığını açıkla.';
  }
  if (text.includes('dönüm noktalarının insan hayatına etkilerini')) {
    return 'Her bilimsel dönüm noktasını insan hayatındaki somut etkisiyle eşleştir.';
  }
  if (text.includes('bilimsel gelişmelerin insan yaşamına')) {
    return 'Bilimsel gelişmenin insan, toplum ve çevreye katkısını birlikte değerlendir.';
  }

  return 'Bu kazanımda ana fikri, temel kavramları ve günlük yaşam bağlantısını yakalamaya odaklan.';
}

function getStageLabel(stage?: LearningOutcomeStage): string | undefined {
  return stage ? stageLabels[stage] : undefined;
}

function openOutcome(outcomeId?: string) {
  if (!outcomeId) return;
  router.push({ pathname: '/learn/outcome/[outcomeId]', params: { outcomeId } } as any);
}

function IconBadge({
  label,
  accessibilityLabel,
  backgroundColor,
  textColor,
}: {
  label: string;
  accessibilityLabel: string;
  backgroundColor: string;
  textColor: string;
}) {
  return (
    <View
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      style={[styles.iconBadge, { backgroundColor }]}
    >
      <Text style={[styles.iconBadgeText, { color: textColor }]}>{label}</Text>
    </View>
  );
}

export default function TodayScreen() {
  const { colors, typography, spacing, radius, shadows } = useAccessibleTheme();

  // Subscribe to Learning OS stores; selector helpers read the latest snapshots via getState().
  useLearningOutcomeProgressStore((s) => s.progressByOutcomeId);
  useQuizResultHistoryStore((s) => s.resultsByOutcomeId);

  const recommended = getRecommendedOutcome() as any;
  const continueItem = getContinueLearningItem() as any;
  const revisionQueue = getRevisionQueue() as any[];
  const hakimiyet = getKonuHakimiyetiSummary() as any;

  const recommendedOutcomeId = getOutcomeId(recommended);
  const continueOutcomeId = getOutcomeId(continueItem);
  const revisionPreview = revisionQueue.slice(0, 3);
  const recommendedStageLabel = getStageLabel(recommended?.suggestedStage);
  const continueStageLabel = getStageLabel(continueItem?.currentStage);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={[
          styles.content,
          {
            padding: spacing.md,
            paddingBottom: spacing['3xl'],
          },
        ]}
      >
        <View style={[styles.shell, { gap: spacing.md }]}>
          <View style={[styles.header, { gap: spacing.sm }]}>
            <View style={styles.headerText}>
              <Text
                style={[
                  styles.eyebrow,
                  {
                    color: colors.primary,
                    fontSize: typography.fontSize.sm,
                    letterSpacing: typography.letterSpacing,
                  },
                ]}
              >
                Öğrenme Kokpiti
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    color: colors.textPrimary,
                    fontSize: typography.fontSize['2xl'],
                    letterSpacing: typography.letterSpacing,
                  },
                ]}
              >
                Bugün ne çalışmalıyım?
              </Text>
              <Text
                style={[
                  styles.subtitle,
                  {
                    color: colors.textSecondary,
                    fontSize: typography.fontSize.sm,
                    letterSpacing: typography.letterSpacing,
                  },
                ]}
              >
                Sıradaki en doğru adımı birlikte seçelim.
              </Text>
            </View>
            <TouchableOpacity
              accessibilityLabel="Erişilebilirlik ayarları"
              accessibilityRole="button"
              activeOpacity={0.85}
              onPress={() => router.push('/accessibility')}
              style={[
                styles.accessibilityButton,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  borderRadius: radius.full,
                  ...shadows.sm,
                },
              ]}
            >
              <Text
                style={[
                  styles.accessibilityButtonText,
                  {
                    color: colors.primary,
                    fontSize: typography.fontSize.sm,
                    letterSpacing: typography.letterSpacing,
                  },
                ]}
              >
                Aa
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.primaryCard,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderRadius: radius.md,
                gap: spacing.sm,
                padding: spacing.md,
                ...shadows.sm,
              },
            ]}
          >
            <View style={[styles.cardHeader, { gap: spacing.md }]}>
              <View style={styles.headerText}>
                <Text
                  style={[
                    styles.sectionLabel,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Bugünün Önerisi
                </Text>
                <Text
                  style={[
                    styles.cardTitle,
                    {
                      color: colors.textPrimary,
                      fontSize: typography.fontSize.lg,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  {recommended ? getStudentFacingTitle(recommended) : 'Sıradaki çalışma hazır değil'}
                </Text>
              </View>
              <View
                accessible
                accessibilityLabel="Önerilen sonraki adım"
                accessibilityRole="image"
                style={[
                  styles.iconBubble,
                  {
                    backgroundColor: colors.primaryMuted,
                    borderRadius: radius.full,
                  },
                ]}
              >
                <Text style={[styles.iconBubbleText, { color: colors.primary }]}>↗</Text>
              </View>
            </View>

            {recommended ? (
              <>
                <Text
                  style={[
                    styles.outcomeTitle,
                    {
                      color: colors.textPrimary,
                      fontSize: typography.fontSize.base,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  {getStudentFacingSubtitle(recommended)}
                </Text>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.bodyText,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  {getOutcomeText(recommended)}
                </Text>
                <View style={[styles.metaRow, { gap: spacing.sm }]}>
                  {recommendedStageLabel && (
                    <Text
                      style={[
                        styles.stagePill,
                        {
                          backgroundColor: colors.primaryMuted,
                          borderRadius: radius.full,
                          color: colors.primary,
                          fontSize: typography.fontSize.xs,
                          letterSpacing: typography.letterSpacing,
                          paddingHorizontal: spacing.sm,
                          paddingVertical: spacing.xs,
                        },
                      ]}
                    >
                      Aşama: {recommendedStageLabel}
                    </Text>
                  )}
                  {recommended.nextReviewDate && (
                    <Text
                      style={[
                        styles.metaText,
                        {
                          color: colors.textMuted,
                          fontSize: typography.fontSize.xs,
                          letterSpacing: typography.letterSpacing,
                        },
                      ]}
                    >
                      Tekrar: {recommended.nextReviewDate}
                    </Text>
                  )}
                </View>
                <View style={[styles.recommendationFooter, { gap: spacing.sm }]}>
                  <View
                    style={[
                      styles.reasonBox,
                      {
                        backgroundColor: colors.surfaceSecondary,
                        borderRadius: radius.md,
                        gap: spacing.xs,
                        padding: spacing.sm,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.reasonLabel,
                        {
                          color: colors.primary,
                          fontSize: typography.fontSize.sm,
                          letterSpacing: typography.letterSpacing,
                        },
                      ]}
                    >
                      Odak noktası
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.reasonText,
                        {
                          color: colors.textPrimary,
                          fontSize: typography.fontSize.sm,
                          letterSpacing: typography.letterSpacing,
                        },
                      ]}
                    >
                      {getFocusText(recommended)}
                    </Text>
                  </View>
                  <TouchableOpacity
                    accessibilityLabel="Çalışmaya başla"
                    accessibilityRole="button"
                    activeOpacity={0.85}
                    style={[
                      styles.primaryButton,
                      {
                        backgroundColor: colors.primary,
                        borderRadius: radius.md,
                        gap: spacing.sm,
                        paddingHorizontal: spacing.md,
                        paddingVertical: spacing.sm,
                      },
                    ]}
                    onPress={() => openOutcome(recommendedOutcomeId)}
                  >
                    <Text
                      accessible={false}
                      style={[
                        styles.primaryButtonIcon,
                        {
                          color: colors.textInverse,
                          fontSize: typography.fontSize.sm,
                        },
                      ]}
                    >
                      ▶
                    </Text>
                    <Text
                      style={[
                        styles.primaryButtonText,
                        {
                          color: colors.textInverse,
                          fontSize: typography.fontSize.sm,
                          letterSpacing: typography.letterSpacing,
                        },
                      ]}
                    >
                      Çalışmaya Başla
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={[
                    styles.codeLabel,
                    {
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                      borderRadius: radius.sm,
                      color: colors.textSecondary,
                      fontSize: typography.fontSize.xs,
                      letterSpacing: typography.letterSpacing,
                      paddingHorizontal: spacing.sm,
                      paddingVertical: spacing.xs,
                    },
                  ]}
                >
                  {getOutcomeCode(recommended)}
                </Text>
              </>
            ) : (
              <View style={[styles.emptyBlock, { gap: spacing.sm }]}>
                <Text
                  style={[
                    styles.bodyText,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Henüz öneri oluşmadı. Öğren sekmesinden bir kazanım seçerek başlayabilirsin.
                </Text>
                <TouchableOpacity
                  accessibilityLabel="Öğren sekmesine git"
                  accessibilityRole="button"
                  activeOpacity={0.85}
                  style={[
                    styles.secondaryButton,
                    {
                      backgroundColor: colors.primaryMuted,
                      borderRadius: radius.md,
                      paddingHorizontal: spacing.md,
                    },
                  ]}
                  onPress={() => router.push('/(tabs)/learn' as any)}
                >
                  <Text
                    style={[
                      styles.secondaryButtonText,
                      {
                        color: colors.primary,
                        fontSize: typography.fontSize.sm,
                        letterSpacing: typography.letterSpacing,
                      },
                    ]}
                  >
                    Öğren’e Git
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={[styles.grid, { gap: spacing.sm }]}>
            <View
              style={[
                styles.card,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  borderRadius: radius.md,
                  gap: spacing.sm,
                  padding: spacing.sm,
                  ...shadows.sm,
                },
              ]}
            >
              <View style={[styles.cardHeaderCompact, { gap: spacing.sm }]}>
                <Text
                  style={[
                    styles.sectionLabel,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Kaldığın Yerden Devam Et
                </Text>
                <IconBadge
                  accessibilityLabel="Öğrenme simgesi"
                  backgroundColor={colors.infoLight}
                  label="Ö"
                  textColor={colors.info}
                />
              </View>
              {continueItem ? (
                <>
                  <Text
                    style={[
                      styles.compactTitle,
                      {
                        color: colors.textPrimary,
                        fontSize: typography.fontSize.base,
                        letterSpacing: typography.letterSpacing,
                      },
                    ]}
                  >
                    {getStudentFacingTitle(continueItem)}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={[
                      styles.bodyText,
                      {
                        color: colors.textSecondary,
                        fontSize: typography.fontSize.sm,
                        letterSpacing: typography.letterSpacing,
                      },
                    ]}
                  >
                    {continueItem.reason ?? getOutcomeText(continueItem)}
                  </Text>
                  {continueStageLabel && (
                    <Text
                      style={[
                        styles.metaText,
                        {
                          color: colors.textMuted,
                          fontSize: typography.fontSize.xs,
                          letterSpacing: typography.letterSpacing,
                        },
                      ]}
                    >
                      Aşama: {continueStageLabel}
                    </Text>
                  )}
                  <TouchableOpacity
                    accessibilityLabel="Kaldığın yerden devam et"
                    accessibilityRole="button"
                    activeOpacity={0.85}
                    style={styles.linkButton}
                    onPress={() => openOutcome(continueOutcomeId)}
                  >
                    <Text
                      style={[
                        styles.linkButtonText,
                        {
                          color: colors.primary,
                          fontSize: typography.fontSize.sm,
                          letterSpacing: typography.letterSpacing,
                        },
                      ]}
                    >
                      Kaldığın Yerden Devam Et
                    </Text>
                  </TouchableOpacity>
                </>
              ) : (
                <Text
                  style={[
                    styles.bodyText,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Devam eden bir kazanım yok. Bugünün önerisiyle başlayabilirsin.
                </Text>
              )}
            </View>

            <View
              style={[
                styles.card,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  borderRadius: radius.md,
                  gap: spacing.sm,
                  padding: spacing.sm,
                  ...shadows.sm,
                },
              ]}
            >
              <View style={[styles.cardHeaderCompact, { gap: spacing.sm }]}>
                <Text
                  style={[
                    styles.sectionLabel,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Tekrar Kuyruğu
                </Text>
                <IconBadge
                  accessibilityLabel="Tekrar simgesi"
                  backgroundColor={colors.warningLight}
                  label="T"
                  textColor={colors.warning}
                />
              </View>
              {revisionPreview.length > 0 ? (
                <View style={[styles.list, { gap: spacing.sm }]}>
                  {revisionPreview.map((item) => (
                    <View
                      key={getOutcomeId(item) ?? getOutcomeCode(item)}
                      style={[
                        styles.listItem,
                        {
                          backgroundColor: colors.warningLight,
                          borderRadius: radius.md,
                          padding: spacing.sm,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.listTitle,
                          {
                            color: colors.textPrimary,
                            fontSize: typography.fontSize.sm,
                            letterSpacing: typography.letterSpacing,
                          },
                        ]}
                      >
                        {getOutcomeCode(item)}
                      </Text>
                      <Text
                        style={[
                          styles.listMeta,
                          {
                            color: colors.warning,
                            fontSize: typography.fontSize.xs,
                            letterSpacing: typography.letterSpacing,
                          },
                        ]}
                      >
                        {item.overdue
                          ? 'Tekrar zamanı geçti'
                          : item.daysUntilReview === 0
                            ? 'Bugün tekrar et'
                            : `${item.daysUntilReview ?? '?'} gün sonra`}
                        {' · Konu Hakimiyeti '}
                        {item.masteryScore ?? 0}
                      </Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text
                  style={[
                    styles.bodyText,
                    {
                      color: colors.textSecondary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Bugün için tekrar bekleyen kazanım yok.
                </Text>
              )}
            </View>
          </View>

          <View
            style={[
              styles.card,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderRadius: radius.md,
                gap: spacing.sm,
                padding: spacing.sm,
                ...shadows.sm,
              },
            ]}
          >
            <View style={[styles.cardHeaderCompact, { gap: spacing.sm }]}>
              <Text
                style={[
                  styles.sectionLabel,
                  {
                    color: colors.textSecondary,
                    fontSize: typography.fontSize.sm,
                    letterSpacing: typography.letterSpacing,
                  },
                ]}
              >
                Konu Hakimiyeti Özeti
              </Text>
              <IconBadge
                accessibilityLabel="Konu hakimiyeti simgesi"
                backgroundColor={colors.primaryMuted}
                label="K"
                textColor={colors.primary}
              />
            </View>
            <View style={[styles.summaryRow, { gap: spacing.sm }]}>
              {[
                ['Başlanan', hakimiyet?.startedOutcomes ?? 0],
                ['Hakim', hakimiyet?.masteredOutcomes ?? 0],
                ['Tekrar', hakimiyet?.needsRevision ?? 0],
              ].map(([label, value]) => (
                <View
                  key={label}
                  style={[
                    styles.summaryItem,
                    {
                      backgroundColor: colors.infoLight,
                      borderRadius: radius.md,
                      padding: spacing.sm,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.summaryValue,
                      {
                        color: colors.info,
                        fontSize: typography.fontSize.lg,
                        letterSpacing: typography.letterSpacing,
                      },
                    ]}
                  >
                    {value}
                  </Text>
                  <Text
                    style={[
                      styles.summaryLabel,
                      {
                        color: colors.textSecondary,
                        fontSize: typography.fontSize.xs,
                        letterSpacing: typography.letterSpacing,
                      },
                    ]}
                  >
                    {label}
                  </Text>
                </View>
              ))}
            </View>
            <Text
              style={[
                styles.bodyText,
                {
                  color: colors.textSecondary,
                  fontSize: typography.fontSize.sm,
                  letterSpacing: typography.letterSpacing,
                },
              ]}
            >
              Toplam {hakimiyet?.totalOutcomes ?? 0} kazanım · Zayıf {hakimiyet?.weakOutcomes ?? 0} · Ortalama Konu
              Hakimiyeti: %{Math.round(hakimiyet?.averageMasteryScore ?? 0)}
            </Text>
          </View>

          <View
            style={[
              styles.card,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderRadius: radius.md,
                gap: spacing.sm,
                padding: spacing.sm,
                ...shadows.sm,
              },
            ]}
          >
            <Text
              style={[
                styles.sectionLabel,
                {
                  color: colors.textSecondary,
                  fontSize: typography.fontSize.sm,
                  letterSpacing: typography.letterSpacing,
                },
              ]}
            >
              Hızlı Erişim
            </Text>
            <View style={[styles.quickGrid, { gap: spacing.sm }]}>
              <TouchableOpacity
                accessibilityLabel="Öğren sekmesine git"
                accessibilityRole="button"
                activeOpacity={0.85}
                style={[
                  styles.quickButton,
                  {
                    backgroundColor: colors.surfaceSecondary,
                    borderRadius: radius.md,
                    gap: spacing.sm,
                    paddingHorizontal: spacing.sm,
                  },
                ]}
                onPress={() => router.push('/(tabs)/learn' as any)}
              >
                <IconBadge
                  accessibilityLabel="Öğren simgesi"
                  backgroundColor={colors.primaryMuted}
                  label="Ö"
                  textColor={colors.primary}
                />
                <Text
                  style={[
                    styles.quickText,
                    {
                      color: colors.textPrimary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Öğren
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityLabel="Pekiştir sekmesine git"
                accessibilityRole="button"
                activeOpacity={0.85}
                style={[
                  styles.quickButton,
                  {
                    backgroundColor: colors.surfaceSecondary,
                    borderRadius: radius.md,
                    gap: spacing.sm,
                    paddingHorizontal: spacing.sm,
                  },
                ]}
                onPress={() => router.push('/(tabs)/practice' as any)}
              >
                <IconBadge
                  accessibilityLabel="Pekiştir simgesi"
                  backgroundColor={colors.primaryMuted}
                  label="P"
                  textColor={colors.primary}
                />
                <Text
                  style={[
                    styles.quickText,
                    {
                      color: colors.textPrimary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Pekiştir
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityLabel="Yol Haritam sekmesine git"
                accessibilityRole="button"
                activeOpacity={0.85}
                style={[
                  styles.quickButton,
                  {
                    backgroundColor: colors.surfaceSecondary,
                    borderRadius: radius.md,
                    gap: spacing.sm,
                    paddingHorizontal: spacing.sm,
                  },
                ]}
                onPress={() => router.push('/(tabs)/roadmap' as any)}
              >
                <IconBadge
                  accessibilityLabel="Yol haritam simgesi"
                  backgroundColor={colors.primaryMuted}
                  label="Y"
                  textColor={colors.primary}
                />
                <Text
                  style={[
                    styles.quickText,
                    {
                      color: colors.textPrimary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Yol Haritam
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityLabel="Gelişimim sekmesine git"
                accessibilityRole="button"
                activeOpacity={0.85}
                style={[
                  styles.quickButton,
                  {
                    backgroundColor: colors.surfaceSecondary,
                    borderRadius: radius.md,
                    gap: spacing.sm,
                    paddingHorizontal: spacing.sm,
                  },
                ]}
                onPress={() => router.push('/(tabs)/progress' as any)}
              >
                <IconBadge
                  accessibilityLabel="Gelişimim simgesi"
                  backgroundColor={colors.primaryMuted}
                  label="G"
                  textColor={colors.primary}
                />
                <Text
                  style={[
                    styles.quickText,
                    {
                      color: colors.textPrimary,
                      fontSize: typography.fontSize.sm,
                      letterSpacing: typography.letterSpacing,
                    },
                  ]}
                >
                  Gelişimim
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  shell: {
    maxWidth: 840,
    width: '100%',
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
  },
  eyebrow: {
    fontWeight: '700',
  },
  title: {
    fontWeight: '800',
  },
  subtitle: {},
  accessibilityButton: {
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  accessibilityButtonText: {
    fontWeight: '900',
  },
  primaryCard: {
    borderWidth: 1,
  },
  card: {
    borderWidth: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeaderCompact: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionLabel: {
    fontWeight: '700',
  },
  cardTitle: {
    fontWeight: '800',
    marginTop: 3,
  },
  compactTitle: {
    fontWeight: '800',
  },
  outcomeTitle: {
    fontWeight: '700',
    lineHeight: 20,
  },
  bodyText: {
    lineHeight: 20,
  },
  iconBubble: {
    alignItems: 'center',
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  iconBubbleText: {
    fontSize: 19,
    fontWeight: '900',
  },
  iconBadge: {
    alignItems: 'center',
    borderRadius: 13,
    height: 26,
    justifyContent: 'center',
    width: 26,
  },
  iconBadgeText: {
    fontWeight: '900',
  },
  reasonBox: {
    flex: 1,
  },
  reasonLabel: {
    fontWeight: '800',
  },
  reasonText: {
    lineHeight: 20,
  },
  recommendationFooter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  metaText: {
    fontWeight: '600',
  },
  stagePill: {
    fontWeight: '800',
  },
  codeLabel: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    fontWeight: '700',
  },
  primaryButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 40,
  },
  primaryButtonText: {
    fontWeight: '800',
  },
  primaryButtonIcon: {
    fontWeight: '900',
  },
  secondaryButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    minHeight: 38,
  },
  secondaryButtonText: {
    fontWeight: '800',
  },
  linkButton: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
  },
  linkButtonText: {
    fontWeight: '800',
  },
  emptyBlock: {},
  list: {},
  listItem: {},
  listTitle: {
    fontWeight: '800',
  },
  listMeta: {
    fontWeight: '700',
    marginTop: 2,
  },
  summaryRow: {
    flexDirection: 'row',
  },
  summaryItem: {
    flex: 1,
  },
  summaryValue: {
    fontWeight: '800',
  },
  summaryLabel: {
    fontWeight: '700',
    marginTop: 2,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quickButton: {
    alignItems: 'center',
    flexBasis: '47%',
    flexDirection: 'row',
    minHeight: 40,
  },
  quickText: {
    fontWeight: '800',
  },
});
