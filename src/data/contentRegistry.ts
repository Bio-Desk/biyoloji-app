import type { ContentRef, Flashcard, LessonLayer, Question } from '../types';
import {
  flashcards_9_1_1_intro,
  layers_9_1_1_intro,
} from './grade9/topic-1.1-content';
import {
  flashcards_9bio_1_1_k2,
  layers_9bio_1_1_k2,
} from './grade9/outcomes/9bio-1.1-k2-content';
import {
  flashcards_9bio_1_1_k3,
  layers_9bio_1_1_k3,
} from './grade9/outcomes/9bio-1.1-k3-content';

const PILOT_OUTCOME_ID = '9BIO-1.1-K1';
const K2_OUTCOME_ID = '9BIO-1.1-K2';
const K3_OUTCOME_ID = '9BIO-1.1-K3';

export interface LessonContentItem {
  id: string;
  outcomeId: string;
  layers: LessonLayer[];
}

export interface InfographicContentItem {
  id: string;
  outcomeId: string;
  title: string;
  assetKey: string;
  description?: string;
}

export interface FlashcardContentItem {
  id: string;
  outcomeId: string;
  flashcards: Flashcard[];
}

export interface QuizContentItem {
  id: string;
  outcomeId: string;
  questionIds: string[];
}

export interface ContentRegistry {
  contentRefsByOutcomeId: Record<string, ContentRef[]>;
  lessons: Record<string, LessonContentItem>;
  infographics: Record<string, InfographicContentItem>;
  flashcards: Record<string, FlashcardContentItem>;
  quizzes: Record<string, QuizContentItem>;
}

export type ResolvedContentItem =
  | LessonContentItem
  | InfographicContentItem
  | FlashcardContentItem
  | QuizContentItem;

export const contentRegistry: ContentRegistry = {
  contentRefsByOutcomeId: {
    [PILOT_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.1-k1-lesson',
        outcomeId: PILOT_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.1-k1',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.1-k1-infographic',
        outcomeId: PILOT_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.1-k1',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.1-k1-flashcard',
        outcomeId: PILOT_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.1-k1',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.1-k1-quiz',
        outcomeId: PILOT_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.1-k1',
        orderIndex: 4,
      },
    ],
    [K2_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.1-k2-lesson',
        outcomeId: K2_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.1-k2',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.1-k2-infographic',
        outcomeId: K2_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.1-k2',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.1-k2-flashcard',
        outcomeId: K2_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.1-k2',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.1-k2-quiz',
        outcomeId: K2_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.1-k2',
        orderIndex: 4,
      },
    ],
    [K3_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.1-k3-lesson',
        outcomeId: K3_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.1-k3',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.1-k3-infographic',
        outcomeId: K3_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.1-k3',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.1-k3-flashcard',
        outcomeId: K3_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.1-k3',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.1-k3-quiz',
        outcomeId: K3_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.1-k3',
        orderIndex: 4,
      },
    ],
  },
  lessons: {
    'lesson-9bio-1.1-k1': {
      id: 'lesson-9bio-1.1-k1',
      outcomeId: PILOT_OUTCOME_ID,
      layers: layers_9_1_1_intro,
    },
    'lesson-9bio-1.1-k2': {
      id: 'lesson-9bio-1.1-k2',
      outcomeId: K2_OUTCOME_ID,
      layers: layers_9bio_1_1_k2,
    },
    'lesson-9bio-1.1-k3': {
      id: 'lesson-9bio-1.1-k3',
      outcomeId: K3_OUTCOME_ID,
      layers: layers_9bio_1_1_k3,
    },
  },
  infographics: {
    'infographic-9bio-1.1-k1': {
      id: 'infographic-9bio-1.1-k1',
      outcomeId: PILOT_OUTCOME_ID,
      title: 'Biyoloji Nedir?',
      assetKey: 'placeholder-9bio-1.1-k1-infographic',
      description: 'Pilot placeholder: bu kazanım için öğretmen infografiği henüz bağlanmadı.',
    },
    'infographic-9bio-1.1-k2': {
      id: 'infographic-9bio-1.1-k2',
      outcomeId: K2_OUTCOME_ID,
      title: 'Biyolojinin Uygulama Alanları',
      assetKey: 'placeholder-9bio-1.1-k2-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.1-k3': {
      id: 'infographic-9bio-1.1-k3',
      outcomeId: K3_OUTCOME_ID,
      title: 'Biyolojide Bilimsel Gelişmelerin Katkıları',
      assetKey: 'placeholder-9bio-1.1-k3-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
  },
  flashcards: {
    'flashcard-9bio-1.1-k1': {
      id: 'flashcard-9bio-1.1-k1',
      outcomeId: PILOT_OUTCOME_ID,
      flashcards: flashcards_9_1_1_intro,
    },
    'flashcard-9bio-1.1-k2': {
      id: 'flashcard-9bio-1.1-k2',
      outcomeId: K2_OUTCOME_ID,
      flashcards: flashcards_9bio_1_1_k2,
    },
    'flashcard-9bio-1.1-k3': {
      id: 'flashcard-9bio-1.1-k3',
      outcomeId: K3_OUTCOME_ID,
      flashcards: flashcards_9bio_1_1_k3,
    },
  },
  quizzes: {
    'quiz-9bio-1.1-k1': {
      id: 'quiz-9bio-1.1-k1',
      outcomeId: PILOT_OUTCOME_ID,
      questionIds: ['q9-001'],
    },
    'quiz-9bio-1.1-k2': {
      id: 'quiz-9bio-1.1-k2',
      outcomeId: K2_OUTCOME_ID,
      questionIds: ['q9-1.1-k2-001', 'q9-1.1-k2-002', 'q9-1.1-k2-003'],
    },
    'quiz-9bio-1.1-k3': {
      id: 'quiz-9bio-1.1-k3',
      outcomeId: K3_OUTCOME_ID,
      questionIds: ['q9-1.1-k3-001', 'q9-1.1-k3-002', 'q9-1.1-k3-003'],
    },
  },
};

export function getContentRefsByOutcome(outcomeId: string): ContentRef[] {
  return contentRegistry.contentRefsByOutcomeId[outcomeId] ?? [];
}

export function getLessonContent(contentId: string): LessonContentItem | undefined {
  return contentRegistry.lessons[contentId];
}

export function getInfographicContent(contentId: string): InfographicContentItem | undefined {
  return contentRegistry.infographics[contentId];
}

export function getFlashcardContent(contentId: string): FlashcardContentItem | undefined {
  return contentRegistry.flashcards[contentId];
}

export function getQuizContent(contentId: string): QuizContentItem | undefined {
  return contentRegistry.quizzes[contentId];
}

export function getContentByRef(ref: ContentRef): ResolvedContentItem | undefined {
  switch (ref.type) {
    case 'lesson':
      return getLessonContent(ref.contentId);
    case 'infographic':
      return getInfographicContent(ref.contentId);
    case 'flashcard':
      return getFlashcardContent(ref.contentId);
    case 'quiz':
      return getQuizContent(ref.contentId);
  }
}

export function getContentForOutcome(outcomeId: string): ResolvedContentItem[] {
  return getContentRefsByOutcome(outcomeId)
    .sort((a, b) => a.orderIndex - b.orderIndex)
    .map((ref) => getContentByRef(ref))
    .filter((item): item is ResolvedContentItem => item !== undefined);
}

export function getQuestionsForOutcome(outcomeId: string, questionBank: Question[]): Question[] {
  const quizQuestionIds = getContentRefsByOutcome(outcomeId)
    .filter((ref) => ref.type === 'quiz')
    .flatMap((ref) => getQuizContent(ref.contentId)?.questionIds ?? []);

  if (quizQuestionIds.length === 0) return [];

  const questionIdSet = new Set(quizQuestionIds);
  return questionBank.filter((question) => questionIdSet.has(question.id));
}
