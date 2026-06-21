import { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import { useQuizStore } from './useQuizStore';
import { useProgressStore } from '../../store/progressStore';
import { useLearningOutcomeProgressStore } from '../../store/learningOutcomeProgressStore';
import { useQuizResultHistoryStore } from '../../store/quizResultHistoryStore';
import { buildQuestionReviewRows, getRevisionDate, getScoreTier } from './quizResultHelpers';

export default function QuizResultScreen() {
  const session = useQuizStore(s => s.session);
  const clearSession = useQuizStore(s => s.clearSession);
  const getSessionStats = useQuizStore(s => s.getSessionStats);
  const getResultMetadata = useQuizStore(s => s.getResultMetadata);
  const recordQuizResult = useProgressStore(s => s.recordQuizResult);
  const completeQuiz = useLearningOutcomeProgressStore(s => s.completeQuiz);
  const scheduleRevision = useLearningOutcomeProgressStore(s => s.scheduleRevision);
  const markMastered = useLearningOutcomeProgressStore(s => s.markMastered);
  const addQuizResult = useQuizResultHistoryStore(s => s.addResult);
  const [resultRecorded, setResultRecorded] = useState(false);

  useEffect(() => {
    if (!session || resultRecorded) return;
    const metadata = getResultMetadata();
    const firstQuestion = session.questions[0];
    if (firstQuestion && session.score > 0) {
      recordQuizResult(firstQuestion.subtopicId, session.score, 'local-user');
    }
    if (session.config.outcomeId) {
      completeQuiz(session.config.outcomeId, session.score);
      if (session.score < 80) {
        scheduleRevision(session.config.outcomeId, getRevisionDate(session.score));
      } else {
        markMastered(session.config.outcomeId);
      }
    }
    if (metadata?.outcomeId) {
      addQuizResult({
        id: `${metadata.outcomeId}-${metadata.completedAt}`,
        userId: 'local-user',
        outcomeId: metadata.outcomeId,
        questionIds: metadata.questionIds,
        correctQuestionIds: metadata.correctQuestionIds,
        wrongQuestionIds: metadata.wrongQuestionIds,
        score: metadata.score,
        masteryScore: metadata.masteryScore,
        revisionNeeded: metadata.revisionNeeded,
        completedAt: metadata.completedAt,
      });
    }
    setResultRecorded(true);
  }, [addQuizResult, completeQuiz, getResultMetadata, markMastered, scheduleRevision, session, resultRecorded, recordQuizResult]);

  if (!session) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={48} color={colors.error} />
          <Text style={styles.errorText}>Sonuçlar yüklenemedi</Text>
        </View>
      </SafeAreaView>
    );
  }

  const stats = getSessionStats();
  const resultMetadata = getResultMetadata();
  const { correct, incorrect, skipped } = stats;
  const total = session.questions.length;
  const reviewRows = buildQuestionReviewRows(session);

  const handleRetry = () => {
    clearSession();
    router.push({ pathname: '/config' } as any);
  };

  const handleHome = () => {
    clearSession();
    router.replace({ pathname: '/practice' } as any);
  };

  const handleReturnToOutcome = () => {
    if (!session.config.outcomeId) return;
    const outcomeId = session.config.outcomeId;
    clearSession();
    router.replace({
      pathname: '/learn/outcome/[outcomeId]',
      params: { outcomeId },
    } as any);
  };

  const { tierLabel, tierColorKey, tierIconName } = getScoreTier(session.score);
  const tierColor = colors[tierColorKey];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name={tierIconName} size={48} color={tierColor} />
          <Text style={styles.tierLabel}>{tierLabel}</Text>
        </View>

        {/* Score Circle */}
        <View style={[styles.scoreCircle, { borderColor: tierColor }]}>
          <Text style={styles.scoreValue}>{session.score}</Text>
          <Text style={styles.scoreLabel}>% Doğruluk</Text>
        </View>

        {/* Performance Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons name="checkmark" size={28} color={colors.success} />
            </View>
            <Text style={styles.statValue}>{correct}</Text>
            <Text style={styles.statLabel}>Doğru</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons name="close" size={28} color={colors.error} />
            </View>
            <Text style={styles.statValue}>{incorrect}</Text>
            <Text style={styles.statLabel}>Yanlış</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons name="help" size={28} color={colors.warning} />
            </View>
            <Text style={styles.statValue}>{skipped}</Text>
            <Text style={styles.statLabel}>Geçildi</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <Text style={styles.progressLabel}>Başarı Oranı</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${session.score}%`, backgroundColor: tierColor },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {correct}/{total} soru doğru
          </Text>
        </View>

        {resultMetadata && (
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Kazanım Sonuç Detayı</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Toplam Soru:</Text>
              <Text style={styles.infoValue}>{resultMetadata.questionIds.length}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Doğru:</Text>
              <Text style={styles.infoValue}>{resultMetadata.correctQuestionIds.length}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Yanlış:</Text>
              <Text style={styles.infoValue}>{resultMetadata.wrongQuestionIds.length}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Tekrar Gerekli:</Text>
              <Text style={styles.infoValue}>{resultMetadata.revisionNeeded ? 'Evet' : 'Hayır'}</Text>
            </View>
          </View>
        )}

        {/* Quiz Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Quiz Detayları</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Sınıf:</Text>
            <Text style={styles.infoValue}>{session.config.gradeLevel}. Sınıf</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Soru Sayısı:</Text>
            <Text style={styles.infoValue}>{total} soru</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Zorluk:</Text>
            <Text style={styles.infoValue}>
              {session.config.difficulty === 'all' ? 'Tüm Zorluklar' : session.config.difficulty}
            </Text>
          </View>
          {session.endedAt && session.startedAt && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Süre:</Text>
              <Text style={styles.infoValue}>
                {Math.round((session.endedAt.getTime() - session.startedAt.getTime()) / 1000)} saniye
              </Text>
            </View>
          )}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Soru İncelemesi</Text>
          {reviewRows.map(({ question, attempt, questionNumber }) => {
            const selectedAnswer = attempt?.selectedAnswer ?? 'Boş';
            const isCorrect = attempt?.isCorrect === true;

            return (
              <View key={question.id} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewNumber}>Soru {questionNumber}</Text>
                  <Text style={[styles.reviewStatus, isCorrect ? styles.reviewStatusCorrect : styles.reviewStatusWrong]}>
                    {isCorrect ? 'Doğru' : 'Yanlış'}
                  </Text>
                </View>
                <Text style={styles.reviewQuestion}>{question.bodyJson.text}</Text>
                <View style={styles.reviewAnswerRow}>
                  <Text style={styles.reviewAnswerLabel}>Seçilen:</Text>
                  <Text style={styles.reviewAnswerValue}>{selectedAnswer}</Text>
                </View>
                <View style={styles.reviewAnswerRow}>
                  <Text style={styles.reviewAnswerLabel}>Doğru:</Text>
                  <Text style={styles.reviewAnswerValue}>{question.correctAnswer}</Text>
                </View>
                {question.explanation && (
                  <Text style={styles.reviewExplanation}>{question.explanation}</Text>
                )}
              </View>
            );
          })}
        </View>

        {/* Recommendations */}
        {session.score < 70 && (
          <View style={styles.recommendationCard}>
            <Ionicons name="bulb" size={24} color={colors.warning} />
            <Text style={styles.recommendationTitle}>Tavsiyeler</Text>
            <Text style={styles.recommendationText}>
              • Yanlış yaptığın soruları tekrar gözden geçir
              • İlgili dersleri yeniden oku
              • Benzer zorluk seviyesinde daha fazla pratik yap
            </Text>
          </View>
        )}

        {session.score >= 80 && (
          <View style={[styles.recommendationCard, { borderLeftColor: colors.success }]}>
            <Ionicons name="star" size={24} color={colors.success} />
            <Text style={styles.recommendationTitle}>Harika İş!</Text>
            <Text style={styles.recommendationText}>
              • Çok iyi performans gösterdin
              • Daha zor sorularla devam etmeyi dene
              • Bu konuda ustalaştığını gösterdin
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.footer}>
        {session.config.outcomeId && (
          <TouchableOpacity
            style={styles.retryButton}
            onPress={handleReturnToOutcome}
          >
            <Ionicons name="arrow-back-circle" size={22} color={colors.primary} />
            <Text style={styles.retryButtonText}>Kazanıma Dön</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.homeButton}
          onPress={handleHome}
        >
          <Ionicons name="home" size={22} color={colors.textInverse} />
          <Text style={styles.homeButtonText}>Ana Sayfaya Dön</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.retryButton}
          onPress={handleRetry}
        >
          <Ionicons name="refresh" size={22} color={colors.primary} />
          <Text style={styles.retryButtonText}>Yeniden Dene</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.lg,
    paddingBottom: spacing['3xl'],
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  tierLabel: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginTop: spacing.md,
  },
  scoreCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: spacing.xl,
    backgroundColor: colors.surface,
    ...shadows.lg,
  },
  scoreValue: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.extrabold,
    color: colors.textPrimary,
  },
  scoreLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    ...shadows.sm,
  },
  statIcon: {
    marginBottom: spacing.md,
  },
  statValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  progressSection: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  progressLabel: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  progressBar: {
    height: 12,
    backgroundColor: colors.border,
    borderRadius: radius.full,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  progressFill: {
    height: '100%',
    borderRadius: radius.full,
  },
  progressText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  infoTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  infoLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  infoValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  recommendationCard: {
    backgroundColor: colors.warningLight,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.lg,
  },
  recommendationTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    marginLeft: spacing.md,
  },
  recommendationText: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.relaxed,
    marginLeft: spacing.md,
  },
  reviewCard: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.md,
    padding: spacing.base,
    marginBottom: spacing.md,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  reviewNumber: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  reviewStatus: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
  },
  reviewStatusCorrect: {
    color: colors.success,
  },
  reviewStatusWrong: {
    color: colors.error,
  },
  reviewQuestion: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing.sm,
  },
  reviewAnswerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  reviewAnswerLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  reviewAnswerValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  reviewExplanation: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed,
    marginTop: spacing.sm,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.base,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  homeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  homeButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
  },
  retryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: radius.full,
  },
  retryButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: typography.fontSize.base,
    color: colors.error,
    marginTop: spacing.md,
  },
});
