import { useState, useEffect } from 'react';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import { useQuizStore } from './useQuizStore';
import { notify } from '../../lib/notify';

export default function QuizAttemptScreen() {
  const session = useQuizStore(s => s.session);
  const getCurrentQuestion = useQuizStore(s => s.getCurrentQuestion);
  const submitAnswer = useQuizStore(s => s.submitAnswer);
  const goToNextQuestion = useQuizStore(s => s.goToNextQuestion);
  const getProgress = useQuizStore(s => s.getProgress);
  const endSession = useQuizStore(s => s.endSession);
  const goToPreviousQuestion = useQuizStore(s => s.goToPreviousQuestion);

  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
  const [showFeedback, setShowFeedback] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const currentQuestion = getCurrentQuestion();
  const progress = getProgress();

  useEffect(() => {
    setSelectedAnswer(undefined);
    setShowFeedback(false);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [currentQuestion?.id]);

  if (!session || !currentQuestion) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={48} color={colors.error} />
          <Text style={styles.errorText}>Soru yüklenemedi</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleSubmitAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    submitAnswer(answer);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (progress.current >= progress.total) {
      // Last question
      endSession();
      router.push({ pathname: '/result' } as any);
    } else {
      goToNextQuestion();
    }
  };

  const handleBack = () => {
    if (progress.current > 1) {
      goToPreviousQuestion();
    } else {
      router.back();
    }
  };

  const isCorrect = session.attempts[session.currentQuestionIndex]?.isCorrect;
  const options = currentQuestion.bodyJson.options || [];

  type OptionStyle = StyleProp<ViewStyle>;
  type OptionTextStyle = StyleProp<TextStyle>;

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${progress.percent}%` },
            ]}
          />
        </View>
        <View style={styles.progressText}>
          <Text style={styles.progressLabel}>
            Soru {progress.current} / {progress.total}
          </Text>
          <Text style={styles.progressPercent}>{progress.percent}%</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Question Text */}
        <Animated.View style={[styles.questionContainer, { opacity: fadeAnim }]}>
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>{currentQuestion.bodyJson.text}</Text>
          </View>
        </Animated.View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {options.map((option, idx) => {
            const isSelected = selectedAnswer === option.key;
            const optionStyle: StyleProp<ViewStyle> = [
              styles.optionButton,
              showFeedback && isSelected && isCorrect ? styles.optionCorrect : null,
              showFeedback && isSelected && !isCorrect ? styles.optionIncorrect : null,
              showFeedback && !isSelected && option.key === currentQuestion.correctAnswer ? styles.optionShowCorrect : null,
              showFeedback && !isSelected && option.key !== currentQuestion.correctAnswer ? styles.optionDisabled : null,
            ];
            const optionTextStyle: StyleProp<TextStyle> = [
              styles.optionText,
              showFeedback && isSelected && isCorrect ? styles.optionCorrectText : null,
              showFeedback && isSelected && !isCorrect ? styles.optionIncorrectText : null,
              showFeedback && !isSelected && option.key === currentQuestion.correctAnswer ? styles.optionShowCorrectText : null,
              showFeedback && !isSelected && option.key !== currentQuestion.correctAnswer ? styles.optionDisabledText : null,
            ];

            return (
              <TouchableOpacity
                key={option.key}
                style={optionStyle as StyleProp<ViewStyle>}
                onPress={() => {
                  if (!showFeedback) {
                    handleSubmitAnswer(option.key);
                  }
                }}
                disabled={showFeedback}
                activeOpacity={showFeedback ? 1 : 0.7}
              >
                <View style={styles.optionKeyContainer}>
                  <Text style={styles.optionKey}>{option.key}</Text>
                </View>
                <Text style={[optionTextStyle as StyleProp<TextStyle>, { flex: 1 }]}>{option.text}</Text>
                {showFeedback && isSelected && isCorrect && (
                  <Ionicons name="checkmark-circle" size={24} color={colors.success} />
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <Ionicons name="close-circle" size={24} color={colors.error} />
                )}
                {showFeedback && !isSelected && option.key === currentQuestion.correctAnswer && (
                  <Ionicons name="checkmark-circle" size={24} color={colors.success} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Feedback Section */}
        {showFeedback && (
          <View style={[styles.feedbackContainer, isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect]}>
            <View style={styles.feedbackHeader}>
              {isCorrect ? (
                <>
                  <Ionicons name="checkmark-circle" size={28} color={colors.success} />
                  <Text style={styles.feedbackTitle}>Doğru!</Text>
                </>
              ) : (
                <>
                  <Ionicons name="close-circle" size={28} color={colors.error} />
                  <Text style={styles.feedbackTitle}>Yanlış</Text>
                </>
              )}
            </View>
            <Text style={styles.feedbackText}>
              <Text style={styles.feedbackLabel}>Doğru Cevap: </Text>
              {currentQuestion.correctAnswer}
            </Text>
            <Text style={styles.explanationTitle}>Açıklama:</Text>
            <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Actions */}
      {showFeedback && (
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.prevButton}
            onPress={handleBack}
            disabled={progress.current === 1}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={progress.current === 1 ? colors.textMuted : colors.primary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
            activeOpacity={0.85}
          >
            <Text style={styles.nextButtonText}>
              {progress.current >= progress.total ? 'Sonuçları Gör' : 'Sonraki Soru'}
            </Text>
            <Ionicons name="chevron-forward" size={22} color={colors.textInverse} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  progressContainer: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: radius.full,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  progressText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    fontWeight: typography.fontWeight.medium,
  },
  progressPercent: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
  },
  scroll: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.lg,
    paddingBottom: spacing['3xl'],
  },
  questionContainer: {
    marginBottom: spacing.lg,
  },
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    ...shadows.md,
  },
  questionText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.relaxed,
  },
  optionsContainer: {
    marginBottom: spacing.lg,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    marginBottom: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: colors.border,
    ...shadows.sm,
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: colors.successLight,
  },
  optionIncorrect: {
    borderColor: colors.error,
    backgroundColor: colors.errorLight,
  },
  optionShowCorrect: {
    borderColor: colors.success,
    backgroundColor: colors.successLight,
  },
  optionDisabled: {
    opacity: 0.5,
  },
  optionKeyContainer: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionKey: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  optionText: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.medium,
  },
  optionCorrectText: {
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.bold,
  },
  optionIncorrectText: {
    color: colors.textPrimary,
  },
  optionShowCorrectText: {
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.bold,
  },
  optionDisabledText: {
    color: colors.textMuted,
  },
  feedbackContainer: {
    borderRadius: radius.lg,
    padding: spacing.base,
    marginTop: spacing.lg,
  },
  feedbackCorrect: {
    backgroundColor: colors.successLight,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
  },
  feedbackIncorrect: {
    backgroundColor: colors.errorLight,
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
  },
  feedbackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  feedbackTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  feedbackText: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  feedbackLabel: {
    fontWeight: typography.fontWeight.bold,
  },
  explanationTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  explanationText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed,
  },
  actionsContainer: {
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
  prevButton: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  nextButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
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
