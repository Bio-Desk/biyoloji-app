import type { QuizSessionState } from './useQuizStore';

export type ScoreTier = 'excellent' | 'good' | 'fair' | 'poor';

export interface ScoreTierResult {
  tier: ScoreTier;
  tierLabel: string;
  tierColorKey: 'primary' | 'success' | 'warning' | 'error';
  tierIconName: 'star' | 'checkmark-circle' | 'alert-circle' | 'close-circle';
}

export function getRevisionDate(score: number): string {
  const date = new Date();
  date.setDate(date.getDate() + (score < 60 ? 1 : 3));
  return date.toISOString();
}

export function getScoreTier(score: number): ScoreTierResult {
  if (score >= 80) {
    return {
      tier: 'excellent',
      tierLabel: 'Mükemmel!',
      tierColorKey: 'primary',
      tierIconName: 'star',
    };
  }

  if (score >= 60) {
    return {
      tier: 'good',
      tierLabel: 'İyi',
      tierColorKey: 'success',
      tierIconName: 'checkmark-circle',
    };
  }

  if (score >= 40) {
    return {
      tier: 'fair',
      tierLabel: 'Orta',
      tierColorKey: 'warning',
      tierIconName: 'alert-circle',
    };
  }

  return {
    tier: 'poor',
    tierLabel: 'Daha Çalışmalısın',
    tierColorKey: 'error',
    tierIconName: 'close-circle',
  };
}

export function buildQuestionReviewRows(session: QuizSessionState) {
  return session.questions.map((question, index) => ({
    question,
    attempt: session.attempts.find((candidate) => candidate.questionId === question.id),
    questionNumber: index + 1,
  }));
}
