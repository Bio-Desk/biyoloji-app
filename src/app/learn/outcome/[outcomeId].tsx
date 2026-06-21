import { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from 'expo-router';
import { getLearningOutcome } from '../../../data/learningModel';
import { getContentForOutcome, type ResolvedContentItem } from '../../../data/contentRegistry';
import { getQuestionBankForOutcome } from '../../../data/questionBanks';
import { colors, typography, spacing, radius, shadows } from '../../../lib/theme';
import { useQuizStore } from '../../../features/quiz/useQuizStore';
import { resolveQuestionsForOutcome } from '../../../features/quiz/questionResolver';
import { useLearningOutcomeProgressStore } from '../../../store/learningOutcomeProgressStore';
import type { LearningOutcomeStage } from '../../../types';

const TEMPORARY_USER_ID = 'local-user';

const stageButtons: { stage: LearningOutcomeStage; label: string }[] = [
  { stage: 'lesson', label: 'Lesson' },
  { stage: 'infographic', label: 'Infographic' },
  { stage: 'flashcard', label: 'Flashcard' },
  { stage: 'quiz', label: 'Quiz' },
  { stage: 'result', label: 'Result' },
  { stage: 'revision', label: 'Revision' },
];

const progressStages: LearningOutcomeStage[] = [
  'lesson',
  'infographic',
  'flashcard',
  'quiz',
  'result',
  'revision',
];

const stageLabels: Record<LearningOutcomeStage, string> = {
  not_started: 'Başlamadı',
  lesson: 'Lesson',
  infographic: 'Infographic',
  flashcard: 'Flashcard',
  quiz: 'Quiz',
  result: 'Result',
  revision: 'Revision',
  mastered: 'Mastered',
};

const statusLabels = {
  not_started: 'Başlamadı',
  in_progress: 'Devam ediyor',
  needs_revision: 'Tekrar gerekli',
  mastered: 'Mastered',
} as const;

function hasLayers(item: ResolvedContentItem): item is Extract<ResolvedContentItem, { layers: unknown[] }> {
  return 'layers' in item;
}

function hasAssetKey(item: ResolvedContentItem): item is Extract<ResolvedContentItem, { assetKey: string }> {
  return 'assetKey' in item;
}

function hasFlashcards(item: ResolvedContentItem): item is Extract<ResolvedContentItem, { flashcards: unknown[] }> {
  return 'flashcards' in item;
}

function hasQuestionIds(item: ResolvedContentItem): item is Extract<ResolvedContentItem, { questionIds: string[] }> {
  return 'questionIds' in item;
}

function formatLayerType(layerType: string): string {
  const labels: Record<string, string> = {
    concept: 'Temel Kavram',
    visual: 'Görsel Açıklama',
    process: 'Süreç Akışı',
    terms: 'Anahtar Terimler',
    misconceptions: 'Yaygın Yanılgılar',
    exam_tips: 'Sınav İpuçları',
    real_life: 'Günlük Yaşam',
    mini_quiz: 'Mini Quiz',
    assessment: 'Değerlendirme',
  };

  return labels[layerType] ?? layerType;
}

function summarizeText(text: string, maxLength = 180): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function ContentSection({
  icon,
  title,
  count,
  emptyText,
  children,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  count: number;
  emptyText: string;
  children?: React.ReactNode;
}) {
  const hasContent = count > 0;

  return (
    <View style={styles.sectionCard}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleRow}>
          <View style={styles.sectionIcon}>
            <Ionicons name={icon} size={18} color={colors.primary} />
          </View>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        {hasContent && (
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{count}</Text>
          </View>
        )}
      </View>

      {hasContent ? (
        <View style={styles.previewList}>{children}</View>
      ) : (
        <View style={styles.emptyContentRow}>
          <Ionicons name="information-circle-outline" size={16} color={colors.textMuted} />
          <Text style={styles.emptyContentText}>{emptyText}</Text>
        </View>
      )}
    </View>
  );
}

export default function LearningOutcomeDetailScreen() {
  const { outcomeId } = useLocalSearchParams<{ outcomeId: string }>();
  const progress = useLearningOutcomeProgressStore((state) => state.progressByOutcomeId[outcomeId]);
  const openOutcome = useLearningOutcomeProgressStore((state) => state.openOutcome);
  const setCurrentStage = useLearningOutcomeProgressStore((state) => state.setCurrentStage);
  const markLessonViewed = useLearningOutcomeProgressStore((state) => state.markLessonViewed);
  const markInfographicViewed = useLearningOutcomeProgressStore((state) => state.markInfographicViewed);
  const markFlashcardsReviewed = useLearningOutcomeProgressStore((state) => state.markFlashcardsReviewed);
  const initializeSession = useQuizStore((state) => state.initializeSession);
  const outcome = getLearningOutcome(outcomeId);
  const contentItems = getContentForOutcome(outcomeId);
  const currentStage = progress?.currentStage === 'not_started' || !progress ? 'lesson' : progress.currentStage;
  const completedProgressStages = progressStages.filter((stage) =>
    progress?.completedStages.includes(stage)
  );
  const progressPercentage = Math.round((completedProgressStages.length / progressStages.length) * 100);

  useEffect(() => {
    openOutcome(outcomeId, TEMPORARY_USER_ID);
  }, [openOutcome, outcomeId]);

  useEffect(() => {
    if (currentStage === 'lesson' && !progress?.lessonViewed) {
      markLessonViewed(outcomeId);
    }
    if (currentStage === 'infographic' && !progress?.infographicViewed) {
      markInfographicViewed(outcomeId);
    }
    if (currentStage === 'flashcard' && !progress?.flashcardsReviewed) {
      markFlashcardsReviewed(outcomeId);
    }
  }, [
    currentStage,
    markFlashcardsReviewed,
    markInfographicViewed,
    markLessonViewed,
    outcomeId,
    progress?.flashcardsReviewed,
    progress?.infographicViewed,
    progress?.lessonViewed,
  ]);

  const handleStagePress = (stage: LearningOutcomeStage) => {
    if (stage === 'lesson') {
      markLessonViewed(outcomeId);
      return;
    }
    if (stage === 'infographic') {
      markInfographicViewed(outcomeId);
      return;
    }
    if (stage === 'flashcard') {
      markFlashcardsReviewed(outcomeId);
      return;
    }
    setCurrentStage(outcomeId, stage);
  };

  if (!outcome) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/learn'))} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Kazanım bulunamadı.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const lessonCount = contentItems.filter(hasLayers).length;
  const infographicCount = contentItems.filter(hasAssetKey).length;
  const flashcardCount = contentItems.filter(hasFlashcards).length;
  const quizCount = contentItems.filter(hasQuestionIds).length;
  const lessonItems = contentItems.filter(hasLayers);
  const infographicItems = contentItems.filter(hasAssetKey);
  const flashcardItems = contentItems.filter(hasFlashcards);
  const quizItems = contentItems.filter(hasQuestionIds);
  const questionBank = getQuestionBankForOutcome(outcomeId);
  const quizQuestions = resolveQuestionsForOutcome(outcomeId, questionBank);

  const handleStartQuiz = () => {
    if (quizQuestions.length === 0) return;

    initializeSession(
      {
        gradeLevel: quizQuestions[0].gradeLevel as 9 | 10,
        topicId: quizQuestions[0].topicId,
        outcomeId,
        numQuestions: quizQuestions.length,
      },
      quizQuestions
    );
    router.push({ pathname: '/attempt' } as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gradeHeader}>
        <TouchableOpacity onPress={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/learn'))} style={styles.backBtnHeader}>
          <Ionicons name="arrow-back" size={22} color={colors.textInverse} />
        </TouchableOpacity>
        <Text style={styles.gradeSub}>{outcome.code}</Text>
        <Text style={styles.gradeTitle}>{outcome.title ?? 'Kazanım Detayı'}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.outcomeCard}>
          <Text style={styles.outcomeCode}>{outcome.code}</Text>
          <Text style={styles.outcomeText}>{outcome.text}</Text>
          <View style={styles.examTagsRow}>
            {outcome.examRelevance.map((tag) => (
              <View key={tag} style={styles.examTag}>
                <Text style={styles.examTagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>İlerleme Özeti</Text>
            <Text style={styles.progressPercent}>{progressPercentage}%</Text>
          </View>
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
          </View>
          <View style={styles.progressGrid}>
            <View style={styles.progressMetric}>
              <Text style={styles.progressMetricLabel}>Aşama</Text>
              <Text style={styles.progressMetricValue}>{stageLabels[currentStage]}</Text>
            </View>
            <View style={styles.progressMetric}>
              <Text style={styles.progressMetricLabel}>Tamamlanan</Text>
              <Text style={styles.progressMetricValue}>
                {completedProgressStages.length}/{progressStages.length}
              </Text>
            </View>
            <View style={styles.progressMetric}>
              <Text style={styles.progressMetricLabel}>Durum</Text>
              <Text style={styles.progressMetricValue}>
                {statusLabels[progress?.status ?? 'not_started']}
              </Text>
            </View>
            <View style={styles.progressMetric}>
              <Text style={styles.progressMetricLabel}>Mastery</Text>
              <Text style={styles.progressMetricValue}>{progress?.masteryScore ?? 0}</Text>
            </View>
          </View>
        </View>

        <View style={styles.stageSelector}>
          {stageButtons.map((button) => {
            const isActive = currentStage === button.stage;
            const isCompleted = progress?.completedStages.includes(button.stage) ?? false;

            return (
              <TouchableOpacity
                key={button.stage}
                style={[styles.stageButton, isActive && styles.stageButtonActive]}
                onPress={() => handleStagePress(button.stage)}
                activeOpacity={0.85}
              >
                <Text style={[styles.stageButtonText, isActive && styles.stageButtonTextActive]}>
                  {button.label}
                </Text>
                {isCompleted && (
                  <Ionicons
                    name="checkmark-circle"
                    size={14}
                    color={isActive ? colors.textInverse : colors.primary}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {currentStage === 'lesson' && (
          <ContentSection
            icon="book-outline"
            title="Lesson"
            count={lessonCount}
            emptyText="Bu kazanım için ders içeriği henüz bağlanmadı."
          >
            {lessonItems.flatMap((lesson) =>
              lesson.layers.map((layer) => (
                <View key={layer.id} style={styles.previewItem}>
                  <Text style={styles.previewMeta}>
                    Katman {layer.orderIndex} · {formatLayerType(layer.layerType)}
                  </Text>
                  <Text style={styles.previewText}>{summarizeText(layer.contentJson.body)}</Text>
                </View>
              ))
            )}
          </ContentSection>
        )}

        {currentStage === 'infographic' && (
          <ContentSection
            icon="image-outline"
            title="Infographic"
            count={infographicCount}
            emptyText="Bu kazanım için infografik henüz bağlanmadı."
          >
            {infographicItems.map((infographic) => (
              <View key={infographic.id} style={styles.previewItem}>
                <Text style={styles.previewMeta}>{infographic.title}</Text>
                {infographic.assetKey.startsWith('placeholder') ? (
                  <Text style={styles.previewText}>İnfografik görseli henüz eklenmedi.</Text>
                ) : (
                  <Text style={styles.previewText}>Görsel anahtarı: {infographic.assetKey}</Text>
                )}
                {infographic.description && (
                  <Text style={styles.previewMuted}>{infographic.description}</Text>
                )}
              </View>
            ))}
          </ContentSection>
        )}

        {currentStage === 'flashcard' && (
          <ContentSection
            icon="albums-outline"
            title="Flashcard"
            count={flashcardCount}
            emptyText="Bu kazanım için flashcard seti henüz bağlanmadı."
          >
            {flashcardItems.flatMap((flashcardSet) =>
              flashcardSet.flashcards.map((flashcard) => (
                <View key={flashcard.id} style={styles.previewItem}>
                  <Text style={styles.previewMeta}>{flashcard.term}</Text>
                  <Text style={styles.previewText}>{flashcard.definition}</Text>
                </View>
              ))
            )}
          </ContentSection>
        )}

        {currentStage === 'quiz' && (
          <ContentSection
            icon="help-circle-outline"
            title="Quiz"
            count={quizCount}
            emptyText="Bu kazanım için quiz henüz bağlanmadı."
          >
            {quizItems.length === 0 ? (
              <View style={styles.previewItem}>
                <Text style={styles.previewText}>Bu kazanım için quiz henüz tanımlanmadı.</Text>
              </View>
            ) : (
              <>
                {quizItems.map((quiz) => (
                  <View key={quiz.id} style={styles.previewItem}>
                    <Text style={styles.previewMeta}>Quiz referansı</Text>
                    <Text style={styles.previewText}>{quiz.questionIds.length} soru bağlantısı hazır.</Text>
                  </View>
                ))}
                <TouchableOpacity
                  style={[styles.startQuizButton, quizQuestions.length === 0 && styles.startQuizButtonDisabled]}
                  onPress={handleStartQuiz}
                  disabled={quizQuestions.length === 0}
                  activeOpacity={0.85}
                >
                  <Ionicons
                    name="play"
                    size={18}
                    color={quizQuestions.length === 0 ? colors.textMuted : colors.textInverse}
                  />
                  <Text
                    style={[
                      styles.startQuizButtonText,
                      quizQuestions.length === 0 && styles.startQuizButtonTextDisabled,
                    ]}
                  >
                    Quizi Başlat
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </ContentSection>
        )}

        {currentStage === 'result' && (
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <View style={styles.sectionIcon}>
                  <Ionicons name="stats-chart-outline" size={18} color={colors.primary} />
                </View>
                <Text style={styles.sectionTitle}>Result</Text>
              </View>
            </View>
            {progress?.quizAttempted ? (
              <View style={styles.previewList}>
                <View style={styles.previewItem}>
                  <Text style={styles.previewMeta}>Quiz Skoru</Text>
                  <Text style={styles.previewText}>{progress.quizScore ?? 0}</Text>
                </View>
                <View style={styles.previewItem}>
                  <Text style={styles.previewMeta}>Mastery Score</Text>
                  <Text style={styles.previewText}>{progress.masteryScore}</Text>
                </View>
                <View style={styles.previewItem}>
                  <Text style={styles.previewMeta}>Durum</Text>
                  <Text style={styles.previewText}>{statusLabels[progress.status]}</Text>
                </View>
                {progress.status === 'mastered' && (
                  <View style={styles.previewItem}>
                    <Text style={styles.previewMeta}>Tamamlandı</Text>
                    <Text style={styles.previewText}>Bu kazanım başarıyla tamamlandı.</Text>
                  </View>
                )}
              </View>
            ) : (
              <Text style={styles.previewText}>Henüz quiz tamamlanmadı.</Text>
            )}
          </View>
        )}

        {currentStage === 'revision' && (
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <View style={styles.sectionIcon}>
                  <Ionicons name="calendar-outline" size={18} color={colors.primary} />
                </View>
                <Text style={styles.sectionTitle}>Revision</Text>
              </View>
            </View>
            {progress?.status === 'mastered' ? (
              <Text style={styles.previewText}>Bu kazanım tamamlandı. Şu anda tekrar gerekli değil.</Text>
            ) : progress?.nextReviewDate ? (
              <View style={styles.previewItem}>
                <Text style={styles.previewMeta}>Sonraki Tekrar</Text>
                <Text style={styles.previewText}>{progress.nextReviewDate}</Text>
              </View>
            ) : (
              <Text style={styles.previewText}>Bu kazanım için tekrar planı henüz oluşturulmadı.</Text>
            )}
          </View>
        )}

        <View style={{ height: spacing['3xl'] }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
  },
  backBtn: { padding: spacing.xs },

  gradeHeader: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.lg,
  },
  backBtnHeader: {
    marginBottom: spacing.sm,
    alignSelf: 'flex-start',
  },
  gradeTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
    marginTop: 4,
  },
  gradeSub: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255,255,255,0.7)',
  },

  scroll: {
    padding: spacing.base,
    gap: spacing.sm,
  },

  outcomeCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.base,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  outcomeCode: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  outcomeText: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
  examTagsRow: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  examTag: {
    backgroundColor: colors.surfaceSecondary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  examTagText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.textMuted,
  },

  sectionCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.base,
    marginBottom: spacing.xs,
    ...shadows.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  sectionIcon: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  sectionText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  previewList: {
    gap: spacing.sm,
  },
  previewItem: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.sm,
    padding: spacing.sm,
  },
  previewMeta: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    marginBottom: 4,
  },
  previewText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  previewMuted: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  progressCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.base,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  progressTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  progressPercent: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  progressBarTrack: {
    height: 8,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceSecondary,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
  progressGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  progressMetric: {
    flexGrow: 1,
    flexBasis: '45%',
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.sm,
    padding: spacing.sm,
  },
  progressMetricLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    marginBottom: 2,
  },
  progressMetricValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  stageSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  stageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
  },
  stageButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  stageButtonText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textSecondary,
  },
  stageButtonTextActive: {
    color: colors.textInverse,
  },
  startQuizButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
  },
  startQuizButtonDisabled: {
    backgroundColor: colors.surfaceSecondary,
  },
  startQuizButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
  },
  startQuizButtonTextDisabled: {
    color: colors.textMuted,
  },
  countBadge: {
    minWidth: 26,
    height: 26,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
  },
  countText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
  },
  emptyContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  emptyContentText: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    color: colors.textMuted,
  },

  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: typography.fontSize.base,
    color: colors.textMuted,
  },
});
