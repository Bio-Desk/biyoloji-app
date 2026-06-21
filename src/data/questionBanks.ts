import { getLearningOutcome, getUnit } from './learningModel';
import { grade9SeedQuestions } from './questions/grade9-seed';
import type { ExamTypeId, GradeLevel, Question, SubjectId } from '../types';

export function getQuestionBank(
  subjectId: SubjectId,
  examTypeId: ExamTypeId,
  gradeLevel: GradeLevel
): Question[] {
  if (subjectId === 'biology' && examTypeId === 'TYT' && gradeLevel === 9) {
    return grade9SeedQuestions;
  }

  return [];
}

export function getQuestionBankForOutcome(outcomeId: string): Question[] {
  const outcome = getLearningOutcome(outcomeId);
  if (!outcome?.unitId) return [];

  const unit = getUnit(outcome.unitId);
  if (!unit) return [];

  return getQuestionBank(unit.subjectId, unit.examTypeId, unit.gradeLevel);
}
