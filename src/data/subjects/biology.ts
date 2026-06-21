import { grade9Curriculum } from '../grade9/curriculum';
import { grade10Curriculum } from '../grade10/curriculum';
import { grade11Curriculum } from '../grade11/curriculum';
import { grade12Curriculum } from '../grade12/curriculum';
import type {
  ExamType,
  ExamTypeId,
  Grade,
  GradeLevel,
  LearningOutcome,
  Subject,
  SubjectId,
  Theme,
  Topic,
  Unit,
} from '../../types';

const BIOLOGY_SUBJECT_ID: SubjectId = 'biology';

interface BiologyGradeSource {
  level: GradeLevel;
  themes: Theme[];
}

const tytGradeSources: BiologyGradeSource[] = [
  { level: 9, themes: grade9Curriculum },
  { level: 10, themes: grade10Curriculum },
];

const aytGradeSources: BiologyGradeSource[] = [
  { level: 11, themes: grade11Curriculum },
  { level: 12, themes: grade12Curriculum },
];

function mapOutcomeToLearningOutcome(outcome: LearningOutcome, unitId: string, orderIndex: number): LearningOutcome {
  return {
    ...outcome,
    id: outcome.id ?? outcome.code,
    unitId: outcome.unitId ?? unitId,
    title: outcome.title ?? outcome.code,
    orderIndex: outcome.orderIndex ?? orderIndex,
    contentRefs: outcome.contentRefs ?? [],
  };
}

function mapTopicToUnit(topic: Topic, theme: Theme, examTypeId: ExamTypeId): Unit {
  const learningOutcomes = topic.subtopics.flatMap((subtopic) =>
    subtopic.outcomes.map((outcome, index) =>
      mapOutcomeToLearningOutcome(outcome, topic.id, index + 1)
    )
  );

  return {
    id: topic.id,
    subjectId: BIOLOGY_SUBJECT_ID,
    examTypeId,
    gradeLevel: theme.gradeLevel,
    title: topic.title,
    orderIndex: topic.orderIndex,
    learningOutcomes,
  };
}

function mapGradeSourceToGrade(source: BiologyGradeSource, examTypeId: ExamTypeId): Grade {
  const units = source.themes.flatMap((theme) =>
    theme.topics.map((topic) => mapTopicToUnit(topic, theme, examTypeId))
  );

  return {
    id: `${BIOLOGY_SUBJECT_ID}-${examTypeId.toLowerCase()}-${source.level}`,
    subjectId: BIOLOGY_SUBJECT_ID,
    examTypeId,
    level: source.level,
    title: `${source.level}. Sınıf`,
    orderIndex: source.level,
    units,
  };
}

function createExamType(id: ExamTypeId, title: string, orderIndex: number, sources: BiologyGradeSource[]): ExamType {
  return {
    id,
    subjectId: BIOLOGY_SUBJECT_ID,
    title,
    orderIndex,
    grades: sources.map((source) => mapGradeSourceToGrade(source, id)),
  };
}

export const biologySubject: Subject = {
  id: BIOLOGY_SUBJECT_ID,
  title: 'Biyoloji',
  orderIndex: 1,
  examTypes: [
    createExamType('TYT', 'TYT', 1, tytGradeSources),
    createExamType('AYT', 'AYT', 2, aytGradeSources),
  ],
};