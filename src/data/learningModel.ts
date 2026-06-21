import { biologySubject } from './subjects/biology';
import type { ExamTypeId, GradeLevel, Subject, SubjectId } from '../types';

const subjects: Subject[] = [biologySubject];

export function getSubjects(): Subject[] {
  return subjects;
}

export function getSubject(subjectId: SubjectId): Subject | undefined {
  return subjects.find((subject) => subject.id === subjectId);
}

export function getExamTypes(subjectId: SubjectId) {
  return getSubject(subjectId)?.examTypes ?? [];
}

export function getExamType(subjectId: SubjectId, examTypeId: ExamTypeId) {
  return getExamTypes(subjectId).find((examType) => examType.id === examTypeId);
}

export function getGrades(subjectId: SubjectId, examTypeId: ExamTypeId) {
  return getExamType(subjectId, examTypeId)?.grades ?? [];
}

export function getGrade(subjectId: SubjectId, examTypeId: ExamTypeId, gradeLevel: GradeLevel) {
  return getGrades(subjectId, examTypeId).find((grade) => grade.level === gradeLevel);
}

export function getUnits(subjectId: SubjectId, examTypeId: ExamTypeId, gradeLevel: GradeLevel) {
  return getGrade(subjectId, examTypeId, gradeLevel)?.units ?? [];
}

export function getUnit(unitId: string) {
  for (const subject of subjects) {
    for (const examType of subject.examTypes) {
      for (const grade of examType.grades) {
        const unit = grade.units.find((candidate) => candidate.id === unitId);
        if (unit) return unit;
      }
    }
  }
  return undefined;
}

export function getLearningOutcomesByUnit(unitId: string) {
  return getUnit(unitId)?.learningOutcomes ?? [];
}

export function getLearningOutcome(outcomeId: string) {
  for (const subject of subjects) {
    for (const examType of subject.examTypes) {
      for (const grade of examType.grades) {
        for (const unit of grade.units) {
          const outcome = unit.learningOutcomes.find(
            (candidate) => candidate.id === outcomeId || candidate.code === outcomeId
          );
          if (outcome) return outcome;
        }
      }
    }
  }
  return undefined;
}