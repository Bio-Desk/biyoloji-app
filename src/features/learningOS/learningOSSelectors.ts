import { getSubjects } from '../../data/learningModel';
import { useLearningOutcomeProgressStore } from '../../store/learningOutcomeProgressStore';
import { useQuizResultHistoryStore } from '../../store/quizResultHistoryStore';
import type {
  LearningOutcome,
  LearningOutcomeProgress,
  LearningOutcomeStage,
  LearningOutcomeStatus,
  Unit,
} from '../../types';

type WeakSeverity = 'high' | 'medium' | 'low';
type RecommendationType = 'revision' | 'weakness' | 'continue' | 'next_curriculum';

interface FlatOutcome {
  outcome: LearningOutcome;
  unit: Unit;
}

export interface RevisionQueueItem {
  outcomeId: string;
  code: string;
  title: string;
  text: string;
  nextReviewDate: string;
  overdue: boolean;
  daysUntilReview: number;
  masteryScore: number;
  reason: string;
}

export interface WeakOutcomeItem {
  outcomeId: string;
  code: string;
  title: string;
  text: string;
  unitId?: string;
  masteryScore: number;
  status: LearningOutcomeStatus;
  reason: string;
  severity: WeakSeverity;
  lastActivityAt?: string;
}

export interface ContinueLearningItem {
  outcomeId: string;
  code: string;
  title: string;
  text: string;
  currentStage: LearningOutcomeStage;
  lastActivityAt: string;
  reason: string;
}

export interface RecommendedOutcome {
  outcomeId: string;
  code: string;
  title: string;
  text: string;
  unitId?: string;
  reason: string;
  suggestedStage: LearningOutcomeStage;
  priorityType: RecommendationType;
  nextReviewDate?: string;
}

export interface KonuHakimiyetiSummary {
  totalOutcomes: number;
  startedOutcomes: number;
  masteredOutcomes: number;
  weakOutcomes: number;
  averageMasteryScore: number;
  needsRevision: number;
}

function getOutcomeId(outcome: LearningOutcome): string {
  return outcome.id ?? outcome.code;
}

function getOutcomeTitle(outcome: LearningOutcome): string {
  return outcome.title ?? outcome.code;
}

function startOfToday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function getDaysUntil(dateValue: string): number {
  const target = new Date(dateValue);
  target.setHours(0, 0, 0, 0);
  const diffMs = target.getTime() - startOfToday().getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

function getSeverity(masteryScore: number, progress?: LearningOutcomeProgress): WeakSeverity {
  if (masteryScore < 60 || progress?.status === 'needs_revision') return 'high';
  if (masteryScore < 80) return 'medium';
  return 'low';
}

function severityRank(severity: WeakSeverity): number {
  if (severity === 'high') return 0;
  if (severity === 'medium') return 1;
  return 2;
}

export function getAllLearningOutcomes(): FlatOutcome[] {
  return getSubjects().flatMap((subject) =>
    subject.examTypes.flatMap((examType) =>
      examType.grades.flatMap((grade) =>
        grade.units.flatMap((unit) =>
          unit.learningOutcomes.map((outcome) => ({ outcome, unit }))
        )
      )
    )
  );
}

export function getRevisionQueue(): RevisionQueueItem[] {
  const { progressByOutcomeId } = useLearningOutcomeProgressStore.getState();

  return getAllLearningOutcomes()
    .map(({ outcome }) => {
      const outcomeId = getOutcomeId(outcome);
      const progress = progressByOutcomeId[outcomeId];
      if (!progress?.nextReviewDate) return undefined;

      const daysUntilReview = getDaysUntil(progress.nextReviewDate);
      return {
        outcomeId,
        code: outcome.code,
        title: getOutcomeTitle(outcome),
        text: outcome.text,
        nextReviewDate: progress.nextReviewDate,
        overdue: daysUntilReview <= 0,
        daysUntilReview,
        masteryScore: progress.masteryScore,
        reason: daysUntilReview <= 0
          ? 'Tekrar zamanı geldi.'
          : 'Bu kazanım için tekrar planı oluşturuldu.',
      };
    })
    .filter((item): item is RevisionQueueItem => item !== undefined)
    .sort((a, b) => {
      if (a.overdue !== b.overdue) return a.overdue ? -1 : 1;
      if (a.daysUntilReview !== b.daysUntilReview) return a.daysUntilReview - b.daysUntilReview;
      return a.masteryScore - b.masteryScore;
    });
}

export function getWeakOutcomes(): WeakOutcomeItem[] {
  const { progressByOutcomeId } = useLearningOutcomeProgressStore.getState();
  const { resultsByOutcomeId } = useQuizResultHistoryStore.getState();

  const items: WeakOutcomeItem[] = [];

  for (const { outcome } of getAllLearningOutcomes()) {
    const outcomeId = getOutcomeId(outcome);
    const progress = progressByOutcomeId[outcomeId];
    const latestResult = resultsByOutcomeId[outcomeId]?.[0];
    const wrongCount = latestResult?.wrongQuestionIds.length ?? 0;
    const masteryScore = progress?.masteryScore ?? latestResult?.masteryScore ?? 0;
    const hasWeakSignal =
      progress?.status === 'needs_revision' ||
      (progress?.quizAttempted === true && masteryScore < 80) ||
      latestResult?.revisionNeeded === true ||
      wrongCount > 0;

    if (!hasWeakSignal) continue;

    const severity = getSeverity(masteryScore, progress);
    const reason = wrongCount > 0
      ? 'Son quizde yanlış yapılan sorular var.'
      : masteryScore < 80
        ? 'Konu Hakimiyeti 80 altında.'
        : 'Bu kazanım tekrar gerektiriyor.';

    items.push({
      outcomeId,
      code: outcome.code,
      title: getOutcomeTitle(outcome),
      text: outcome.text,
      unitId: outcome.unitId,
      masteryScore,
      status: progress?.status ?? 'not_started',
      reason,
      severity,
      lastActivityAt: progress?.lastActivityAt,
    });
  }

  return items.sort((a, b) => {
    const severityDiff = severityRank(a.severity) - severityRank(b.severity);
    if (severityDiff !== 0) return severityDiff;
    if (a.masteryScore !== b.masteryScore) return a.masteryScore - b.masteryScore;
    return (Date.parse(b.lastActivityAt ?? '') || 0) - (Date.parse(a.lastActivityAt ?? '') || 0);
  });
}

export function getContinueLearningItem(): ContinueLearningItem | undefined {
  const { progressByOutcomeId } = useLearningOutcomeProgressStore.getState();

  const items: ContinueLearningItem[] = [];

  for (const { outcome } of getAllLearningOutcomes()) {
    const outcomeId = getOutcomeId(outcome);
    const progress = progressByOutcomeId[outcomeId];
    if (!progress || progress.status !== 'in_progress' || progress.currentStage === 'not_started') {
      continue;
    }

    items.push({
      outcomeId,
      code: outcome.code,
      title: getOutcomeTitle(outcome),
      text: outcome.text,
      currentStage: progress.currentStage,
      lastActivityAt: progress.lastActivityAt,
      reason: 'Bu kazanıma daha önce başladın.',
    });
  }

  return items.sort((a, b) => Date.parse(b.lastActivityAt) - Date.parse(a.lastActivityAt))[0];
}

function getSuggestedStageForWeakOutcome(outcomeId: string): LearningOutcomeStage {
  const progress = useLearningOutcomeProgressStore.getState().progressByOutcomeId[outcomeId];
  if (!progress?.lessonViewed) return 'lesson';
  if (!progress.flashcardsReviewed) return 'flashcard';
  if (!progress.quizAttempted) return 'quiz';
  return 'revision';
}

export function getRecommendedOutcome(): RecommendedOutcome | undefined {
  const revision = getRevisionQueue().find((item) => item.overdue) ?? getRevisionQueue()[0];
  if (revision) {
    return {
      outcomeId: revision.outcomeId,
      code: revision.code,
      title: revision.title,
      text: revision.text,
      reason: revision.reason,
      suggestedStage: 'revision',
      priorityType: 'revision',
      nextReviewDate: revision.nextReviewDate,
    };
  }

  const weakOutcome = getWeakOutcomes()[0];
  if (weakOutcome) {
    return {
      outcomeId: weakOutcome.outcomeId,
      code: weakOutcome.code,
      title: weakOutcome.title,
      text: weakOutcome.text,
      unitId: weakOutcome.unitId,
      reason: weakOutcome.reason,
      suggestedStage: getSuggestedStageForWeakOutcome(weakOutcome.outcomeId),
      priorityType: 'weakness',
    };
  }

  const continueLearning = getContinueLearningItem();
  if (continueLearning) {
    return {
      outcomeId: continueLearning.outcomeId,
      code: continueLearning.code,
      title: continueLearning.title,
      text: continueLearning.text,
      reason: continueLearning.reason,
      suggestedStage: continueLearning.currentStage,
      priorityType: 'continue',
    };
  }

  const { progressByOutcomeId } = useLearningOutcomeProgressStore.getState();
  const nextOutcome = getAllLearningOutcomes().find(({ outcome }) => {
    const progress = progressByOutcomeId[getOutcomeId(outcome)];
    return !progress || progress.status === 'not_started';
  });

  if (!nextOutcome) return undefined;

  return {
    outcomeId: getOutcomeId(nextOutcome.outcome),
    code: nextOutcome.outcome.code,
    title: getOutcomeTitle(nextOutcome.outcome),
    text: nextOutcome.outcome.text,
    unitId: nextOutcome.outcome.unitId,
    reason: 'Müfredat sırasındaki sıradaki kazanım.',
    suggestedStage: 'lesson',
    priorityType: 'next_curriculum',
  };
}

export function getKonuHakimiyetiSummary(): KonuHakimiyetiSummary {
  const allOutcomes = getAllLearningOutcomes();
  const { progressByOutcomeId } = useLearningOutcomeProgressStore.getState();
  const weakOutcomes = getWeakOutcomes();
  const progressItems = allOutcomes
    .map(({ outcome }) => progressByOutcomeId[getOutcomeId(outcome)])
    .filter((progress): progress is LearningOutcomeProgress => progress !== undefined);
  const startedProgressItems = progressItems.filter((progress) => progress.status !== 'not_started');
  const masteredOutcomes = progressItems.filter(
    (progress) => progress.status === 'mastered' || progress.masteryScore >= 80
  );
  const totalMastery = startedProgressItems.reduce((sum, progress) => sum + progress.masteryScore, 0);

  return {
    totalOutcomes: allOutcomes.length,
    startedOutcomes: startedProgressItems.length,
    masteredOutcomes: masteredOutcomes.length,
    weakOutcomes: weakOutcomes.length,
    averageMasteryScore: startedProgressItems.length === 0
      ? 0
      : Math.round(totalMastery / startedProgressItems.length),
    needsRevision: progressItems.filter((progress) => progress.status === 'needs_revision').length,
  };
}
