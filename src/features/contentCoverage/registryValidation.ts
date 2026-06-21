import {
  contentRegistry,
  type FlashcardContentItem,
  type InfographicContentItem,
  type LessonContentItem,
  type QuizContentItem,
  type ResolvedContentItem,
} from '../../data/contentRegistry';
import { getLearningOutcome } from '../../data/learningModel';
import { getQuestionBankForOutcome } from '../../data/questionBanks';
import { resolveQuestionsForOutcome } from '../quiz/questionResolver';
import type { ContentRef, ContentType } from '../../types';

export type RegistryValidationSeverity = 'error' | 'warning' | 'info';

export type RegistryValidationCategory =
  | 'outcome'
  | 'contentRef'
  | 'contentItem'
  | 'mapping'
  | 'duplicate'
  | 'orphan'
  | 'quiz'
  | 'questionBank';

export interface RegistryValidationIssue {
  id: string;
  severity: RegistryValidationSeverity;
  category: RegistryValidationCategory;
  code: string;
  message: string;
  outcomeId?: string;
  contentRefId?: string;
  contentId?: string;
  contentType?: ContentType;
  questionId?: string;
}

export interface RegistryValidationReport {
  issues: RegistryValidationIssue[];
  totalIssues: number;
  errorCount: number;
  warningCount: number;
  infoCount: number;
  isValid: boolean;
}

export interface RegistryValidationSummary {
  totalIssues: number;
  errorCount: number;
  warningCount: number;
  infoCount: number;
  isValid: boolean;
  issuesByCategory: Record<RegistryValidationCategory, number>;
}

const VALID_CONTENT_TYPES: ContentType[] = ['lesson', 'infographic', 'flashcard', 'quiz'];

function makeIssue(
  code: string,
  severity: RegistryValidationSeverity,
  category: RegistryValidationCategory,
  message: string,
  context: Omit<RegistryValidationIssue, 'id' | 'code' | 'severity' | 'category' | 'message'> = {}
): RegistryValidationIssue {
  const contextKey = [
    context.outcomeId,
    context.contentRefId,
    context.contentId,
    context.contentType,
    context.questionId,
  ]
    .filter(Boolean)
    .join('-');

  return {
    id: `${code.toLowerCase()}${contextKey ? `-${contextKey}` : ''}`,
    severity,
    category,
    code,
    message,
    ...context,
  };
}

function getAllContentRefs(): ContentRef[] {
  return Object.values(contentRegistry.contentRefsByOutcomeId).flat();
}

function getMappedContentItem(ref: ContentRef): ResolvedContentItem | undefined {
  switch (ref.type) {
    case 'lesson':
      return contentRegistry.lessons[ref.contentId];
    case 'infographic':
      return contentRegistry.infographics[ref.contentId];
    case 'flashcard':
      return contentRegistry.flashcards[ref.contentId];
    case 'quiz':
      return contentRegistry.quizzes[ref.contentId];
  }
}

function getRegistryBucketIds(type: ContentType): string[] {
  switch (type) {
    case 'lesson':
      return Object.keys(contentRegistry.lessons);
    case 'infographic':
      return Object.keys(contentRegistry.infographics);
    case 'flashcard':
      return Object.keys(contentRegistry.flashcards);
    case 'quiz':
      return Object.keys(contentRegistry.quizzes);
  }
}

function getAllContentItemEntries(): Array<{
  contentType: ContentType;
  contentId: string;
  item: ResolvedContentItem;
}> {
  return [
    ...Object.entries(contentRegistry.lessons).map(([contentId, item]) => ({
      contentType: 'lesson' as const,
      contentId,
      item,
    })),
    ...Object.entries(contentRegistry.infographics).map(([contentId, item]) => ({
      contentType: 'infographic' as const,
      contentId,
      item,
    })),
    ...Object.entries(contentRegistry.flashcards).map(([contentId, item]) => ({
      contentType: 'flashcard' as const,
      contentId,
      item,
    })),
    ...Object.entries(contentRegistry.quizzes).map(([contentId, item]) => ({
      contentType: 'quiz' as const,
      contentId,
      item,
    })),
  ];
}

function isLessonItem(item: ResolvedContentItem): item is LessonContentItem {
  return 'layers' in item;
}

function isInfographicItem(item: ResolvedContentItem): item is InfographicContentItem {
  return 'assetKey' in item;
}

function isFlashcardItem(item: ResolvedContentItem): item is FlashcardContentItem {
  return 'flashcards' in item;
}

function isQuizItem(item: ResolvedContentItem): item is QuizContentItem {
  return 'questionIds' in item;
}

function buildReport(issues: RegistryValidationIssue[]): RegistryValidationReport {
  const errorCount = issues.filter((issue) => issue.severity === 'error').length;
  const warningCount = issues.filter((issue) => issue.severity === 'warning').length;
  const infoCount = issues.filter((issue) => issue.severity === 'info').length;

  return {
    issues,
    totalIssues: issues.length,
    errorCount,
    warningCount,
    infoCount,
    isValid: errorCount === 0,
  };
}

export function validateContentRefs(): RegistryValidationIssue[] {
  const issues: RegistryValidationIssue[] = [];
  const refs = getAllContentRefs();
  const refIds = new Map<string, number>();
  const contentIds = new Map<string, number>();

  refs.forEach((ref) => {
    refIds.set(ref.id, (refIds.get(ref.id) ?? 0) + 1);
    contentIds.set(ref.contentId, (contentIds.get(ref.contentId) ?? 0) + 1);

    if (!getLearningOutcome(ref.outcomeId)) {
      issues.push(
        makeIssue('INVALID_OUTCOME_ID', 'error', 'outcome', 'ContentRef bilinmeyen bir kazanıma bağlı.', {
          outcomeId: ref.outcomeId,
          contentRefId: ref.id,
          contentId: ref.contentId,
          contentType: ref.type,
        })
      );
    }

    if (!ref.contentId) {
      issues.push(
        makeIssue('MISSING_CONTENT_ID', 'error', 'contentRef', 'ContentRef içinde contentId eksik.', {
          outcomeId: ref.outcomeId,
          contentRefId: ref.id,
          contentType: ref.type,
        })
      );
    }

    if (!VALID_CONTENT_TYPES.includes(ref.type)) {
      issues.push(
        makeIssue('INVALID_CONTENT_TYPE', 'error', 'contentRef', 'ContentRef geçersiz bir içerik tipine sahip.', {
          outcomeId: ref.outcomeId,
          contentRefId: ref.id,
          contentId: ref.contentId,
          contentType: ref.type,
        })
      );
      return;
    }

    const mappedItem = getMappedContentItem(ref);
    if (!mappedItem) {
      issues.push(
        makeIssue('MISSING_MAPPED_CONTENT_ITEM', 'error', 'mapping', 'ContentRef içindeki contentId registry içinde bulunamadı.', {
          outcomeId: ref.outcomeId,
          contentRefId: ref.id,
          contentId: ref.contentId,
          contentType: ref.type,
        })
      );
      return;
    }

    if (mappedItem.outcomeId !== ref.outcomeId) {
      issues.push(
        makeIssue('OUTCOME_ID_MISMATCH', 'error', 'mapping', 'ContentRef outcomeId ile content item outcomeId eşleşmiyor.', {
          outcomeId: ref.outcomeId,
          contentRefId: ref.id,
          contentId: ref.contentId,
          contentType: ref.type,
        })
      );
    }
  });

  refIds.forEach((count, refId) => {
    if (count > 1) {
      issues.push(
        makeIssue('DUPLICATE_CONTENT_REF_ID', 'error', 'duplicate', 'Aynı ContentRef ID birden fazla kez kullanılmış.', {
          contentRefId: refId,
        })
      );
    }
  });

  contentIds.forEach((count, contentId) => {
    if (contentId && count > 1) {
      issues.push(
        makeIssue('DUPLICATE_CONTENT_ID_REFERENCE', 'warning', 'duplicate', 'Aynı contentId birden fazla ContentRef tarafından kullanılmış.', {
          contentId,
        })
      );
    }
  });

  Object.entries(contentRegistry.contentRefsByOutcomeId).forEach(([outcomeId, refsForOutcome]) => {
    refsForOutcome.forEach((ref) => {
      if (ref.outcomeId !== outcomeId) {
        issues.push(
          makeIssue('ORPHAN_CONTENT_REF', 'error', 'orphan', 'ContentRef, kayıtlı olduğu outcome bucket ile farklı bir outcomeId taşıyor.', {
            outcomeId: ref.outcomeId,
            contentRefId: ref.id,
            contentId: ref.contentId,
            contentType: ref.type,
          })
        );
      }
    });
  });

  return issues;
}

export function validateContentItems(): RegistryValidationIssue[] {
  const issues: RegistryValidationIssue[] = [];

  getAllContentItemEntries().forEach(({ contentType, contentId, item }) => {
    if (item.id !== contentId) {
      issues.push(
        makeIssue('CONTENT_ID_MISMATCH', 'error', 'contentItem', 'Registry key ile content item id alanı eşleşmiyor.', {
          outcomeId: item.outcomeId,
          contentId,
          contentType,
        })
      );
    }

    if (!getLearningOutcome(item.outcomeId)) {
      issues.push(
        makeIssue('CONTENT_ITEM_INVALID_OUTCOME_ID', 'error', 'outcome', 'Content item bilinmeyen bir kazanıma bağlı.', {
          outcomeId: item.outcomeId,
          contentId,
          contentType,
        })
      );
    }

    if (isLessonItem(item) && item.layers.length === 0) {
      issues.push(
        makeIssue('EMPTY_LESSON_LAYERS', 'error', 'contentItem', 'Lesson içeriğinde layer bulunmuyor.', {
          outcomeId: item.outcomeId,
          contentId,
          contentType,
        })
      );
    }

    if (isInfographicItem(item)) {
      if (!item.assetKey) {
        issues.push(
          makeIssue('MISSING_INFOGRAPHIC_ASSET_KEY', 'error', 'contentItem', 'İnfografik assetKey alanı eksik.', {
            outcomeId: item.outcomeId,
            contentId,
            contentType,
          })
        );
      } else if (item.assetKey.startsWith('placeholder')) {
        issues.push(
          makeIssue('PLACEHOLDER_INFOGRAPHIC', 'warning', 'contentItem', 'İnfografik placeholder olarak bağlı.', {
            outcomeId: item.outcomeId,
            contentId,
            contentType,
          })
        );
      }
    }

    if (isFlashcardItem(item) && item.flashcards.length === 0) {
      issues.push(
        makeIssue('EMPTY_FLASHCARDS', 'error', 'contentItem', 'Flashcard içeriği boş.', {
          outcomeId: item.outcomeId,
          contentId,
          contentType,
        })
      );
    }

    if (isQuizItem(item) && item.questionIds.length === 0) {
      issues.push(
        makeIssue('EMPTY_QUIZ_QUESTION_IDS', 'error', 'quiz', 'Quiz içeriğinde questionIds bulunmuyor.', {
          outcomeId: item.outcomeId,
          contentId,
          contentType,
        })
      );
    }
  });

  return issues;
}

export function validateQuizQuestions(): RegistryValidationIssue[] {
  const issues: RegistryValidationIssue[] = [];

  Object.values(contentRegistry.quizzes).forEach((quiz) => {
    const seenQuestionIds = new Set<string>();
    const duplicateQuestionIds = new Set<string>();

    quiz.questionIds.forEach((questionId) => {
      if (seenQuestionIds.has(questionId)) {
        duplicateQuestionIds.add(questionId);
      }

      seenQuestionIds.add(questionId);
    });

    duplicateQuestionIds.forEach((questionId) => {
      issues.push(
        makeIssue('DUPLICATE_QUIZ_QUESTION_ID', 'warning', 'quiz', 'Quiz içinde aynı questionId birden fazla kez kullanılmış.', {
          outcomeId: quiz.outcomeId,
          contentId: quiz.id,
          contentType: 'quiz',
          questionId,
        })
      );
    });

    if (quiz.questionIds.length === 0) return;

    const resolvedQuestions = resolveQuestionsForOutcome(quiz.outcomeId, getQuestionBankForOutcome(quiz.outcomeId));
    const resolvedQuestionIds = new Set(resolvedQuestions.map((question) => question.id));

    quiz.questionIds.forEach((questionId) => {
      if (!resolvedQuestionIds.has(questionId)) {
        issues.push(
          makeIssue('UNRESOLVED_QUIZ_QUESTION_ID', 'error', 'questionBank', 'Quiz questionId mevcut soru bankasında çözümlenemedi.', {
            outcomeId: quiz.outcomeId,
            contentId: quiz.id,
            contentType: 'quiz',
            questionId,
          })
        );
      }
    });
  });

  return issues;
}

export function validateOrphanContentItems(): RegistryValidationIssue[] {
  const issues: RegistryValidationIssue[] = [];
  const refs = getAllContentRefs();

  getAllContentItemEntries().forEach(({ contentType, contentId, item }) => {
    const isReferenced = refs.some((ref) => ref.type === contentType && ref.contentId === contentId);

    if (!isReferenced) {
      issues.push(
        makeIssue('ORPHAN_CONTENT_ITEM', 'warning', 'orphan', 'Content item registry içinde var ancak hiçbir ContentRef tarafından kullanılmıyor.', {
          outcomeId: item.outcomeId,
          contentId,
          contentType,
        })
      );
    }
  });

  getAllContentRefs().forEach((ref) => {
    const bucketIds = getRegistryBucketIds(ref.type);
    const existsInAnotherBucket = VALID_CONTENT_TYPES.some(
      (type) => type !== ref.type && getRegistryBucketIds(type).includes(ref.contentId)
    );

    if (!bucketIds.includes(ref.contentId) && existsInAnotherBucket) {
      issues.push(
        makeIssue('MISMATCHED_CONTENT_TYPE_BUCKET', 'error', 'mapping', 'ContentRef type ile contentId registry bucket eşleşmiyor.', {
          outcomeId: ref.outcomeId,
          contentRefId: ref.id,
          contentId: ref.contentId,
          contentType: ref.type,
        })
      );
    }
  });

  return issues;
}

export function getRegistryValidationSummary(report: RegistryValidationReport): RegistryValidationSummary {
  const issuesByCategory: Record<RegistryValidationCategory, number> = {
    outcome: 0,
    contentRef: 0,
    contentItem: 0,
    mapping: 0,
    duplicate: 0,
    orphan: 0,
    quiz: 0,
    questionBank: 0,
  };

  report.issues.forEach((issue) => {
    issuesByCategory[issue.category] += 1;
  });

  return {
    totalIssues: report.totalIssues,
    errorCount: report.errorCount,
    warningCount: report.warningCount,
    infoCount: report.infoCount,
    isValid: report.isValid,
    issuesByCategory,
  };
}

export function validateRegistry(): RegistryValidationReport {
  return buildReport([
    ...validateContentRefs(),
    ...validateContentItems(),
    ...validateQuizQuestions(),
    ...validateOrphanContentItems(),
  ]);
}
