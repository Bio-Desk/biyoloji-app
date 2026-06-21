import { contentRegistry } from '../../data/contentRegistry';
import { getLearningOutcome } from '../../data/learningModel';
import { getQuestionBankForOutcome } from '../../data/questionBanks';
import { resolveQuestionsForOutcome } from '../quiz/questionResolver';
import type { Difficulty, ExamTypeId, Question, QuestionType } from '../../types';

export type QuestionValidationSeverity = 'error' | 'warning' | 'info';

export type QuestionValidationCategory =
  | 'identity'
  | 'body'
  | 'options'
  | 'answer'
  | 'explanation'
  | 'outcome'
  | 'metadata'
  | 'quizMapping'
  | 'duplicate'
  | 'quality';

export interface QuestionValidationIssue {
  id: string;
  severity: QuestionValidationSeverity;
  category: QuestionValidationCategory;
  code: string;
  message: string;
  questionId?: string;
  outcomeCode?: string;
  outcomeId?: string;
  contentId?: string;
  contentRefId?: string;
  field?: string;
}

export interface QuestionValidationReport {
  issues: QuestionValidationIssue[];
  totalQuestions: number;
  totalIssues: number;
  errorCount: number;
  warningCount: number;
  infoCount: number;
  isValid: boolean;
}

export interface QuestionValidationSummary {
  totalQuestions: number;
  validQuestions: number;
  invalidQuestions: number;
  totalIssues: number;
  errorCount: number;
  warningCount: number;
  infoCount: number;
  isValid: boolean;
  issuesByCategory: Record<QuestionValidationCategory, number>;
}

const VALID_DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard'];
const VALID_EXAM_TYPES: ExamTypeId[] = ['TYT', 'AYT', 'school', 'general'];
const VALID_QUESTION_TYPES: QuestionType[] = [
  'multiple_choice',
  'true_false',
  'fill_blank',
  'matching',
  'graph_interpretation',
  'experiment',
  'premise',
  'daily_life',
  'interpretation',
];

function makeIssue(
  code: string,
  severity: QuestionValidationSeverity,
  category: QuestionValidationCategory,
  message: string,
  context: Omit<QuestionValidationIssue, 'id' | 'code' | 'severity' | 'category' | 'message'> = {}
): QuestionValidationIssue {
  const contextKey = [
    context.questionId,
    context.outcomeCode,
    context.outcomeId,
    context.contentId,
    context.contentRefId,
    context.field,
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

function buildReport(issues: QuestionValidationIssue[], totalQuestions: number): QuestionValidationReport {
  const errorCount = issues.filter((issue) => issue.severity === 'error').length;
  const warningCount = issues.filter((issue) => issue.severity === 'warning').length;
  const infoCount = issues.filter((issue) => issue.severity === 'info').length;

  return {
    issues,
    totalQuestions,
    totalIssues: issues.length,
    errorCount,
    warningCount,
    infoCount,
    isValid: errorCount === 0,
  };
}

function normalizeQuestionText(text?: string): string {
  return (text ?? '').trim().toLocaleLowerCase('tr-TR').replace(/\s+/g, ' ');
}

function getQuestionKey(question: Question): string {
  return question.id || question.bodyJson?.text || 'unknown-question';
}

export function validateQuestionIdentity(questionBank: Question[]): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const questionIds = new Map<string, number>();

  questionBank.forEach((question) => {
    if (!question.id) {
      issues.push(
        makeIssue('MISSING_QUESTION_ID', 'error', 'identity', 'Soru id alanı eksik.', {
          field: 'id',
        })
      );
      return;
    }

    questionIds.set(question.id, (questionIds.get(question.id) ?? 0) + 1);
  });

  questionIds.forEach((count, questionId) => {
    if (count > 1) {
      issues.push(
        makeIssue('DUPLICATE_QUESTION_ID', 'error', 'duplicate', 'Aynı question id birden fazla kez kullanılmış.', {
          questionId,
          field: 'id',
        })
      );
    }
  });

  return issues;
}

export function validateQuestionBody(question: Question): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const questionId = getQuestionKey(question);
  const bodyText = question.bodyJson?.text;

  if (!bodyText?.trim()) {
    issues.push(
      makeIssue('MISSING_BODY_TEXT', 'error', 'body', 'Soru metni eksik.', {
        questionId,
        field: 'bodyJson.text',
      })
    );
  }

  if (question.hasVisual && !question.bodyJson?.imageUrl) {
    issues.push(
      makeIssue('MISSING_VISUAL_ASSET', 'warning', 'metadata', 'Soru görselli işaretlenmiş ancak imageUrl yok.', {
        questionId,
        field: 'bodyJson.imageUrl',
      })
    );
  }

  if (!question.hasVisual && question.bodyJson?.imageUrl) {
    issues.push(
      makeIssue('VISUAL_METADATA_MISMATCH', 'warning', 'metadata', 'Soru imageUrl içeriyor ancak hasVisual false.', {
        questionId,
        field: 'hasVisual',
      })
    );
  }

  return issues;
}

export function validateQuestionOptions(question: Question): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const questionId = getQuestionKey(question);

  if (question.type !== 'multiple_choice') return issues;

  const options = question.bodyJson?.options;
  if (!options) {
    issues.push(
      makeIssue('MISSING_MULTIPLE_CHOICE_OPTIONS', 'error', 'options', 'Çoktan seçmeli soru için seçenekler eksik.', {
        questionId,
        field: 'bodyJson.options',
      })
    );
    return issues;
  }

  if (options.length === 0) {
    issues.push(
      makeIssue('EMPTY_OPTIONS', 'error', 'options', 'Çoktan seçmeli soru seçenekleri boş.', {
        questionId,
        field: 'bodyJson.options',
      })
    );
    return issues;
  }

  const optionKeys = new Map<string, number>();
  options.forEach((option) => {
    optionKeys.set(option.key, (optionKeys.get(option.key) ?? 0) + 1);

    if (!option.text?.trim()) {
      issues.push(
        makeIssue('MISSING_OPTION_TEXT', 'error', 'options', 'Seçenek metni eksik.', {
          questionId,
          field: `bodyJson.options.${option.key}`,
        })
      );
    }
  });

  optionKeys.forEach((count, optionKey) => {
    if (count > 1) {
      issues.push(
        makeIssue('DUPLICATE_OPTION_KEY', 'warning', 'options', 'Aynı seçenek anahtarı birden fazla kez kullanılmış.', {
          questionId,
          field: `bodyJson.options.${optionKey}`,
        })
      );
    }
  });

  return issues;
}

export function validateQuestionAnswer(question: Question): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const questionId = getQuestionKey(question);

  if (!question.correctAnswer?.trim()) {
    issues.push(
      makeIssue('MISSING_CORRECT_ANSWER', 'error', 'answer', 'Doğru cevap eksik.', {
        questionId,
        field: 'correctAnswer',
      })
    );
    return issues;
  }

  if (question.type === 'multiple_choice') {
    const optionKeys = new Set((question.bodyJson?.options ?? []).map((option) => option.key));
    if (optionKeys.size > 0 && !optionKeys.has(question.correctAnswer)) {
      issues.push(
        makeIssue('CORRECT_ANSWER_NOT_IN_OPTIONS', 'error', 'answer', 'Doğru cevap seçenek anahtarları içinde bulunmuyor.', {
          questionId,
          field: 'correctAnswer',
        })
      );
    }
  }

  return issues;
}

export function validateQuestionOutcome(question: Question): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const questionId = getQuestionKey(question);

  if (!question.outcomeCode?.trim()) {
    issues.push(
      makeIssue('MISSING_OUTCOME_CODE', 'error', 'outcome', 'Soru outcomeCode alanı eksik.', {
        questionId,
        field: 'outcomeCode',
      })
    );
    return issues;
  }

  if (!getLearningOutcome(question.outcomeCode)) {
    issues.push(
      makeIssue('UNRESOLVED_OUTCOME_CODE', 'error', 'outcome', 'Soru outcomeCode mevcut kazanımlar içinde çözümlenemedi.', {
        questionId,
        outcomeCode: question.outcomeCode,
        field: 'outcomeCode',
      })
    );
  }

  return issues;
}

function validateQuestionMetadata(question: Question): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const questionId = getQuestionKey(question);

  if (!VALID_DIFFICULTIES.includes(question.difficulty)) {
    issues.push(
      makeIssue('INVALID_DIFFICULTY', 'error', 'metadata', 'Soru difficulty değeri geçersiz.', {
        questionId,
        field: 'difficulty',
      })
    );
  }

  if (!VALID_EXAM_TYPES.includes(question.examType)) {
    issues.push(
      makeIssue('INVALID_EXAM_TYPE', 'error', 'metadata', 'Soru examType değeri geçersiz.', {
        questionId,
        field: 'examType',
      })
    );
  }

  if (!VALID_QUESTION_TYPES.includes(question.type)) {
    issues.push(
      makeIssue('INVALID_QUESTION_TYPE', 'error', 'metadata', 'Soru type değeri geçersiz.', {
        questionId,
        field: 'type',
      })
    );
  }

  if (!question.tags || question.tags.length === 0) {
    issues.push(
      makeIssue('EMPTY_TAGS', 'info', 'metadata', 'Soru tags alanı boş.', {
        questionId,
        field: 'tags',
      })
    );
  }

  return issues;
}

function validateQuestionExplanation(question: Question): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const questionId = getQuestionKey(question);

  if (!question.explanation?.trim()) {
    issues.push(
      makeIssue('MISSING_EXPLANATION', 'warning', 'explanation', 'Soru açıklaması eksik.', {
        questionId,
        field: 'explanation',
      })
    );
    return issues;
  }

  if (question.explanation.trim().length < 30) {
    issues.push(
      makeIssue('SHORT_EXPLANATION', 'warning', 'quality', 'Soru açıklaması kısa görünüyor.', {
        questionId,
        field: 'explanation',
      })
    );
  }

  return issues;
}

export function validateQuestion(question: Question, questionBank?: Question[]): QuestionValidationIssue[] {
  const issues = [
    ...validateQuestionBody(question),
    ...validateQuestionOptions(question),
    ...validateQuestionAnswer(question),
    ...validateQuestionExplanation(question),
    ...validateQuestionOutcome(question),
    ...validateQuestionMetadata(question),
  ];

  if (questionBank) {
    const sameIdCount = question.id
      ? questionBank.filter((bankQuestion) => bankQuestion.id === question.id).length
      : 0;

    if (sameIdCount > 1) {
      issues.push(
        makeIssue('QUESTION_ID_REUSED_IN_BANK', 'error', 'duplicate', 'Bu question id soru bankasında birden fazla kez kullanılmış.', {
          questionId: question.id,
          field: 'id',
        })
      );
    }
  }

  return issues;
}

export function findDuplicateQuestionText(questionBank: Question[]): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const textGroups = new Map<string, Question[]>();

  questionBank.forEach((question) => {
    const normalizedText = normalizeQuestionText(question.bodyJson?.text);
    if (!normalizedText) return;

    textGroups.set(normalizedText, [...(textGroups.get(normalizedText) ?? []), question]);
  });

  textGroups.forEach((questions) => {
    if (questions.length <= 1) return;

    questions.forEach((question) => {
      issues.push(
        makeIssue('DUPLICATE_QUESTION_TEXT', 'warning', 'duplicate', 'Aynı soru metni birden fazla soruda kullanılmış.', {
          questionId: getQuestionKey(question),
          field: 'bodyJson.text',
        })
      );
    });
  });

  return issues;
}

export function validateQuizQuestionMappings(): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];

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
        makeIssue('DUPLICATE_QUIZ_QUESTION_ID', 'warning', 'quizMapping', 'Quiz içinde aynı questionId birden fazla kez kullanılmış.', {
          outcomeId: quiz.outcomeId,
          contentId: quiz.id,
          questionId,
        })
      );
    });

    const questionBank = getQuestionBankForOutcome(quiz.outcomeId);
    const resolvedQuestions = resolveQuestionsForOutcome(quiz.outcomeId, questionBank);
    const resolvedQuestionIds = new Set(resolvedQuestions.map((question) => question.id));
    const linkedOutcome = getLearningOutcome(quiz.outcomeId);

    quiz.questionIds.forEach((questionId) => {
      if (!resolvedQuestionIds.has(questionId)) {
        issues.push(
          makeIssue('UNRESOLVED_QUIZ_QUESTION_REFERENCE', 'error', 'quizMapping', 'Quiz questionId mevcut soru bankasında çözümlenemedi.', {
            outcomeId: quiz.outcomeId,
            contentId: quiz.id,
            questionId,
          })
        );
        return;
      }

      const resolvedQuestion = resolvedQuestions.find((question) => question.id === questionId);
      if (linkedOutcome && resolvedQuestion && resolvedQuestion.outcomeCode !== linkedOutcome.code) {
        issues.push(
          makeIssue('QUESTION_OUTCOME_MISMATCH', 'warning', 'outcome', 'Quiz kazanımı ile soru outcomeCode değeri eşleşmiyor.', {
            questionId,
            outcomeId: quiz.outcomeId,
            outcomeCode: resolvedQuestion.outcomeCode,
            contentId: quiz.id,
          })
        );
      }
    });
  });

  return issues;
}

export function validateQuestionBank(questionBank: Question[]): QuestionValidationReport {
  const issues = [
    ...validateQuestionIdentity(questionBank),
    ...questionBank.flatMap((question) => validateQuestion(question)),
    ...findDuplicateQuestionText(questionBank),
    ...validateQuizQuestionMappings(),
  ];

  return buildReport(issues, questionBank.length);
}

export function getQuestionValidationSummary(report: QuestionValidationReport): QuestionValidationSummary {
  const issuesByCategory: Record<QuestionValidationCategory, number> = {
    identity: 0,
    body: 0,
    options: 0,
    answer: 0,
    explanation: 0,
    outcome: 0,
    metadata: 0,
    quizMapping: 0,
    duplicate: 0,
    quality: 0,
  };
  const invalidQuestionIds = new Set<string>();

  report.issues.forEach((issue) => {
    issuesByCategory[issue.category] += 1;

    if (issue.severity === 'error' && issue.questionId) {
      invalidQuestionIds.add(issue.questionId);
    }
  });

  return {
    totalQuestions: report.totalQuestions,
    validQuestions: Math.max(report.totalQuestions - invalidQuestionIds.size, 0),
    invalidQuestions: invalidQuestionIds.size,
    totalIssues: report.totalIssues,
    errorCount: report.errorCount,
    warningCount: report.warningCount,
    infoCount: report.infoCount,
    isValid: report.isValid,
    issuesByCategory,
  };
}
