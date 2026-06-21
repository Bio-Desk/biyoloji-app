import { getContentForOutcome } from '../../data/contentRegistry';
import type { Question } from '../../types';

export function resolveQuestionsForOutcome(
  outcomeId: string,
  questionBank: Question[]
): Question[] {
  const quizQuestionIds = getContentForOutcome(outcomeId)
    .filter((contentItem): contentItem is Extract<typeof contentItem, { questionIds: string[] }> =>
      'questionIds' in contentItem
    )
    .flatMap((quizContent) => quizContent.questionIds);

  if (quizQuestionIds.length === 0) return [];

  const questionIdSet = new Set(quizQuestionIds);
  return questionBank.filter((question) => questionIdSet.has(question.id));
}
