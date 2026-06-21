import {
  getLearningOutcome,
  getSubjects,
  getUnit,
} from '../../data/learningModel';
import { getContentForOutcome } from '../../data/contentRegistry';
import type {
  FlashcardContentItem,
  InfographicContentItem,
  LessonContentItem,
  QuizContentItem,
  ResolvedContentItem,
} from '../../data/contentRegistry';
import { getQuestionBankForOutcome } from '../../data/questionBanks';
import { resolveQuestionsForOutcome } from '../quiz/questionResolver';
import type { ExamTypeId, GradeLevel, SubjectId } from '../../types';

export type CoverageStatus = 'available' | 'missing' | 'placeholder' | 'invalid';

export interface ContentTypeCoverage {
  status: CoverageStatus;
  count: number;
  reason?: string;
}

export interface LearningOutcomeCoverage {
  outcomeId: string;
  code: string;
  title: string;
  text: string;
  subjectId: SubjectId;
  examTypeId: ExamTypeId;
  gradeLevel: GradeLevel;
  unitId: string;
  unitTitle: string;
  lesson: ContentTypeCoverage;
  infographic: ContentTypeCoverage;
  flashcard: ContentTypeCoverage;
  quiz: ContentTypeCoverage;
  complete: boolean;
}

export interface UnitCoverageSummary {
  unitId: string;
  unitTitle: string;
  totalOutcomes: number;
  completeOutcomes: number;
  missingLesson: number;
  missingInfographic: number;
  missingFlashcard: number;
  missingQuiz: number;
}

function hasLayers(item: ResolvedContentItem): item is LessonContentItem {
  return 'layers' in item && Array.isArray(item.layers);
}

function hasAssetKey(item: ResolvedContentItem): item is InfographicContentItem {
  return 'assetKey' in item && typeof item.assetKey === 'string';
}

function hasFlashcards(item: ResolvedContentItem): item is FlashcardContentItem {
  return 'flashcards' in item && Array.isArray(item.flashcards);
}

function hasQuestionIds(item: ResolvedContentItem): item is QuizContentItem {
  return 'questionIds' in item && Array.isArray(item.questionIds);
}

function getOutcomeId(outcome: { id?: string; code: string }): string {
  return outcome.id ?? outcome.code;
}

function getOutcomeTitle(outcome: { title?: string; code: string }): string {
  return outcome.title ?? outcome.code;
}

function isMissingLike(coverage: ContentTypeCoverage): boolean {
  return coverage.status === 'missing' || coverage.status === 'placeholder' || coverage.status === 'invalid';
}

export function getLearningOutcomeCoverage(outcomeId: string): LearningOutcomeCoverage | undefined {
  const outcome = getLearningOutcome(outcomeId);
  if (!outcome?.unitId) return undefined;

  const unit = getUnit(outcome.unitId);
  if (!unit) return undefined;

  const resolvedContent = getContentForOutcome(outcomeId);
  const lessonItems = resolvedContent.filter(hasLayers);
  const infographicItems = resolvedContent.filter(hasAssetKey);
  const flashcardItems = resolvedContent.filter(hasFlashcards);
  const quizItems = resolvedContent.filter(hasQuestionIds);
  const resolvedQuestions = resolveQuestionsForOutcome(outcomeId, getQuestionBankForOutcome(outcomeId));

  const lesson: ContentTypeCoverage = lessonItems.length > 0
    ? {
        status: 'available',
        count: lessonItems.reduce((sum, item) => sum + item.layers.length, 0),
      }
    : {
        status: 'missing',
        count: 0,
        reason: 'Ders içeriği bağlı değil.',
      };

  const infographic: ContentTypeCoverage = infographicItems.length === 0
    ? {
        status: 'missing',
        count: 0,
        reason: 'İnfografik bağlı değil.',
      }
    : infographicItems.some((item) => item.assetKey.startsWith('placeholder'))
      ? {
          status: 'placeholder',
          count: infographicItems.length,
          reason: 'İnfografik placeholder olarak bağlı.',
        }
      : {
          status: 'available',
          count: infographicItems.length,
        };

  const flashcardCount = flashcardItems.reduce((sum, item) => sum + item.flashcards.length, 0);
  const flashcard: ContentTypeCoverage = flashcardCount > 0
    ? {
        status: 'available',
        count: flashcardCount,
      }
    : {
        status: 'missing',
        count: 0,
        reason: 'Flashcard bağlı değil.',
      };

  const quizQuestionIdCount = quizItems.reduce((sum, item) => sum + item.questionIds.length, 0);
  const quiz: ContentTypeCoverage = quizItems.length === 0
    ? {
        status: 'missing',
        count: 0,
        reason: 'Quiz bağlı değil.',
      }
    : resolvedQuestions.length > 0 && resolvedQuestions.length === quizQuestionIdCount
      ? {
          status: 'available',
          count: resolvedQuestions.length,
        }
      : {
          status: 'invalid',
          count: resolvedQuestions.length,
          reason: 'Quiz soru bağlantıları soru bankasında çözümlenemedi.',
        };

  const complete =
    lesson.status === 'available' &&
    infographic.status === 'available' &&
    flashcard.status === 'available' &&
    quiz.status === 'available';

  return {
    outcomeId: getOutcomeId(outcome),
    code: outcome.code,
    title: getOutcomeTitle(outcome),
    text: outcome.text,
    subjectId: unit.subjectId,
    examTypeId: unit.examTypeId,
    gradeLevel: unit.gradeLevel,
    unitId: unit.id,
    unitTitle: unit.title,
    lesson,
    infographic,
    flashcard,
    quiz,
    complete,
  };
}

export function getAllLearningOutcomeCoverage(): LearningOutcomeCoverage[] {
  return getSubjects().flatMap((subject) =>
    subject.examTypes.flatMap((examType) =>
      examType.grades.flatMap((grade) =>
        grade.units.flatMap((unit) =>
          unit.learningOutcomes
            .map((outcome) => getLearningOutcomeCoverage(getOutcomeId(outcome)))
            .filter((coverage): coverage is LearningOutcomeCoverage => coverage !== undefined)
        )
      )
    )
  );
}

export function getUnitCoverageSummary(unitId: string): UnitCoverageSummary | undefined {
  const unit = getUnit(unitId);
  if (!unit) return undefined;

  const coverages = unit.learningOutcomes
    .map((outcome) => getLearningOutcomeCoverage(getOutcomeId(outcome)))
    .filter((coverage): coverage is LearningOutcomeCoverage => coverage !== undefined);

  return {
    unitId: unit.id,
    unitTitle: unit.title,
    totalOutcomes: coverages.length,
    completeOutcomes: coverages.filter((coverage) => coverage.complete).length,
    missingLesson: coverages.filter((coverage) => isMissingLike(coverage.lesson)).length,
    missingInfographic: coverages.filter((coverage) => isMissingLike(coverage.infographic)).length,
    missingFlashcard: coverages.filter((coverage) => isMissingLike(coverage.flashcard)).length,
    missingQuiz: coverages.filter((coverage) => isMissingLike(coverage.quiz)).length,
  };
}

export function getCoverageByGrade(
  subjectId: SubjectId,
  examTypeId: ExamTypeId,
  gradeLevel: GradeLevel
): LearningOutcomeCoverage[] {
  return getAllLearningOutcomeCoverage().filter(
    (coverage) =>
      coverage.subjectId === subjectId &&
      coverage.examTypeId === examTypeId &&
      coverage.gradeLevel === gradeLevel
  );
}

export function getIncompleteOutcomes(): LearningOutcomeCoverage[] {
  return getAllLearningOutcomeCoverage().filter((coverage) => !coverage.complete);
}
