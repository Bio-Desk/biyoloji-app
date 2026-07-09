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
import {
  flashcards_9bio_1_1_k4,
  layers_9bio_1_1_k4,
} from './grade9/outcomes/9bio-1.1-k4-content';
import {
  flashcards_9bio_1_1_k5,
  layers_9bio_1_1_k5,
} from './grade9/outcomes/9bio-1.1-k5-content';
import {
  flashcards_9bio_1_2_k1,
  layers_9bio_1_2_k1,
} from './grade9/outcomes/9bio-1.2-k1-content';
import {
  flashcards_9bio_1_2_k2,
  layers_9bio_1_2_k2,
} from './grade9/outcomes/9bio-1.2-k2-content';
import {
  flashcards_9bio_1_2_k3,
  layers_9bio_1_2_k3,
} from './grade9/outcomes/9bio-1.2-k3-content';
import {
  flashcards_9bio_1_2_k4,
  layers_9bio_1_2_k4,
} from './grade9/outcomes/9bio-1.2-k4-content';
import {
  flashcards_9bio_1_2_k5,
  layers_9bio_1_2_k5,
} from './grade9/outcomes/9bio-1.2-k5-content';
import {
  flashcards_9bio_1_2_k6,
  layers_9bio_1_2_k6,
} from './grade9/outcomes/9bio-1.2-k6-content';
import {
  flashcards_9bio_1_2_k7,
  layers_9bio_1_2_k7,
} from './grade9/outcomes/9bio-1.2-k7-content';
import {
  flashcards_9bio_1_2_k8,
  layers_9bio_1_2_k8,
} from './grade9/outcomes/9bio-1.2-k8-content';
import {
  flashcards_9bio_1_3_k1,
  layers_9bio_1_3_k1,
} from './grade9/outcomes/9bio-1.3-k1-content';
import {
  flashcards_9bio_1_3_k2,
  layers_9bio_1_3_k2,
} from './grade9/outcomes/9bio-1.3-k2-content';
import {
  flashcards_9bio_1_3_k3,
  layers_9bio_1_3_k3,
} from './grade9/outcomes/9bio-1.3-k3-content';
import {
  flashcards_9bio_1_3_k4,
  layers_9bio_1_3_k4,
} from './grade9/outcomes/9bio-1.3-k4-content';
import {
  flashcards_9bio_1_3_k5,
  layers_9bio_1_3_k5,
} from './grade9/outcomes/9bio-1.3-k5-content';
import {
  flashcards_9bio_1_4_k1,
  layers_9bio_1_4_k1,
} from './grade9/outcomes/9bio-1.4-k1-content';
import {
  flashcards_9bio_1_4_k2,
  layers_9bio_1_4_k2,
} from './grade9/outcomes/9bio-1.4-k2-content';
import {
  flashcards_9bio_1_4_k3,
  layers_9bio_1_4_k3,
} from './grade9/outcomes/9bio-1.4-k3-content';
import {
  flashcards_9bio_1_4_k4,
  layers_9bio_1_4_k4,
} from './grade9/outcomes/9bio-1.4-k4-content';
import {
  flashcards_9bio_1_4_k5,
  layers_9bio_1_4_k5,
} from './grade9/outcomes/9bio-1.4-k5-content';
import {
  flashcards_9bio_1_4_k6,
  layers_9bio_1_4_k6,
} from './grade9/outcomes/9bio-1.4-k6-content';
import {
  flashcards_9bio_1_4_k7,
  layers_9bio_1_4_k7,
} from './grade9/outcomes/9bio-1.4-k7-content';
import {
  flashcards_9bio_1_4_k8,
  layers_9bio_1_4_k8,
} from './grade9/outcomes/9bio-1.4-k8-content';
import {
  flashcards_9bio_1_4_k9,
  layers_9bio_1_4_k9,
} from './grade9/outcomes/9bio-1.4-k9-content';
import {
  flashcards_9bio_1_4_k10,
  layers_9bio_1_4_k10,
} from './grade9/outcomes/9bio-1.4-k10-content';
import {
  flashcards_9bio_1_4_k11,
  layers_9bio_1_4_k11,
} from './grade9/outcomes/9bio-1.4-k11-content';
import {
  flashcards_9bio_1_4_k12,
  layers_9bio_1_4_k12,
} from './grade9/outcomes/9bio-1.4-k12-content';
import {
  flashcards_9bio_1_4_k13,
  layers_9bio_1_4_k13,
} from './grade9/outcomes/9bio-1.4-k13-content';

const PILOT_OUTCOME_ID = '9BIO-1.1-K1';
const K2_OUTCOME_ID = '9BIO-1.1-K2';
const K3_OUTCOME_ID = '9BIO-1.1-K3';
const K4_OUTCOME_ID = '9BIO-1.1-K4';
const K5_OUTCOME_ID = '9BIO-1.1-K5';
const UNIT_1_2_K1_OUTCOME_ID = '9BIO-1.2-K1';
const UNIT_1_2_K2_OUTCOME_ID = '9BIO-1.2-K2';
const UNIT_1_2_K3_OUTCOME_ID = '9BIO-1.2-K3';
const UNIT_1_2_K4_OUTCOME_ID = '9BIO-1.2-K4';
const UNIT_1_2_K5_OUTCOME_ID = '9BIO-1.2-K5';
const UNIT_1_2_K6_OUTCOME_ID = '9BIO-1.2-K6';
const UNIT_1_2_K7_OUTCOME_ID = '9BIO-1.2-K7';
const UNIT_1_2_K8_OUTCOME_ID = '9BIO-1.2-K8';
const UNIT_1_3_K1_OUTCOME_ID = '9BIO-1.3-K1';
const UNIT_1_3_K2_OUTCOME_ID = '9BIO-1.3-K2';
const UNIT_1_3_K3_OUTCOME_ID = '9BIO-1.3-K3';
const UNIT_1_3_K4_OUTCOME_ID = '9BIO-1.3-K4';
const UNIT_1_3_K5_OUTCOME_ID = '9BIO-1.3-K5';
const UNIT_1_4_K1_OUTCOME_ID = '9BIO-1.4-K1';
const UNIT_1_4_K2_OUTCOME_ID = '9BIO-1.4-K2';
const UNIT_1_4_K3_OUTCOME_ID = '9BIO-1.4-K3';
const UNIT_1_4_K4_OUTCOME_ID = '9BIO-1.4-K4';
const UNIT_1_4_K5_OUTCOME_ID = '9BIO-1.4-K5';
const UNIT_1_4_K6_OUTCOME_ID = '9BIO-1.4-K6';
const UNIT_1_4_K7_OUTCOME_ID = '9BIO-1.4-K7';
const UNIT_1_4_K8_OUTCOME_ID = '9BIO-1.4-K8';
const UNIT_1_4_K9_OUTCOME_ID = '9BIO-1.4-K9';
const UNIT_1_4_K10_OUTCOME_ID = '9BIO-1.4-K10';
const UNIT_1_4_K11_OUTCOME_ID = '9BIO-1.4-K11';
const UNIT_1_4_K12_OUTCOME_ID = '9BIO-1.4-K12';
const UNIT_1_4_K13_OUTCOME_ID = '9BIO-1.4-K13';

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
    [K4_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.1-k4-lesson',
        outcomeId: K4_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.1-k4',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.1-k4-infographic',
        outcomeId: K4_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.1-k4',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.1-k4-flashcard',
        outcomeId: K4_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.1-k4',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.1-k4-quiz',
        outcomeId: K4_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.1-k4',
        orderIndex: 4,
      },
    ],
    [K5_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.1-k5-lesson',
        outcomeId: K5_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.1-k5',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.1-k5-infographic',
        outcomeId: K5_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.1-k5',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.1-k5-flashcard',
        outcomeId: K5_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.1-k5',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.1-k5-quiz',
        outcomeId: K5_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.1-k5',
        orderIndex: 4,
      },
    ],
    [UNIT_1_2_K1_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.2-k1-lesson',
        outcomeId: UNIT_1_2_K1_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.2-k1',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.2-k1-infographic',
        outcomeId: UNIT_1_2_K1_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.2-k1',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.2-k1-flashcard',
        outcomeId: UNIT_1_2_K1_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.2-k1',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.2-k1-quiz',
        outcomeId: UNIT_1_2_K1_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.2-k1',
        orderIndex: 4,
      },
    ],
    [UNIT_1_2_K2_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.2-k2-lesson',
        outcomeId: UNIT_1_2_K2_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.2-k2',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.2-k2-infographic',
        outcomeId: UNIT_1_2_K2_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.2-k2',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.2-k2-flashcard',
        outcomeId: UNIT_1_2_K2_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.2-k2',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.2-k2-quiz',
        outcomeId: UNIT_1_2_K2_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.2-k2',
        orderIndex: 4,
      },
    ],
    [UNIT_1_2_K3_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.2-k3-lesson',
        outcomeId: UNIT_1_2_K3_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.2-k3',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.2-k3-infographic',
        outcomeId: UNIT_1_2_K3_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.2-k3',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.2-k3-flashcard',
        outcomeId: UNIT_1_2_K3_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.2-k3',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.2-k3-quiz',
        outcomeId: UNIT_1_2_K3_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.2-k3',
        orderIndex: 4,
      },
    ],
    [UNIT_1_2_K4_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.2-k4-lesson',
        outcomeId: UNIT_1_2_K4_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.2-k4',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.2-k4-infographic',
        outcomeId: UNIT_1_2_K4_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.2-k4',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.2-k4-flashcard',
        outcomeId: UNIT_1_2_K4_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.2-k4',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.2-k4-quiz',
        outcomeId: UNIT_1_2_K4_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.2-k4',
        orderIndex: 4,
      },
    ],
    [UNIT_1_2_K5_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.2-k5-lesson',
        outcomeId: UNIT_1_2_K5_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.2-k5',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.2-k5-infographic',
        outcomeId: UNIT_1_2_K5_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.2-k5',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.2-k5-flashcard',
        outcomeId: UNIT_1_2_K5_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.2-k5',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.2-k5-quiz',
        outcomeId: UNIT_1_2_K5_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.2-k5',
        orderIndex: 4,
      },
    ],
    [UNIT_1_2_K6_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.2-k6-lesson',
        outcomeId: UNIT_1_2_K6_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.2-k6',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.2-k6-infographic',
        outcomeId: UNIT_1_2_K6_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.2-k6',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.2-k6-flashcard',
        outcomeId: UNIT_1_2_K6_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.2-k6',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.2-k6-quiz',
        outcomeId: UNIT_1_2_K6_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.2-k6',
        orderIndex: 4,
      },
    ],
    [UNIT_1_2_K7_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.2-k7-lesson',
        outcomeId: UNIT_1_2_K7_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.2-k7',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.2-k7-infographic',
        outcomeId: UNIT_1_2_K7_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.2-k7',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.2-k7-flashcard',
        outcomeId: UNIT_1_2_K7_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.2-k7',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.2-k7-quiz',
        outcomeId: UNIT_1_2_K7_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.2-k7',
        orderIndex: 4,
      },
    ],
    [UNIT_1_2_K8_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.2-k8-lesson',
        outcomeId: UNIT_1_2_K8_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.2-k8',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.2-k8-infographic',
        outcomeId: UNIT_1_2_K8_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.2-k8',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.2-k8-flashcard',
        outcomeId: UNIT_1_2_K8_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.2-k8',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.2-k8-quiz',
        outcomeId: UNIT_1_2_K8_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.2-k8',
        orderIndex: 4,
      },
    ],
    [UNIT_1_3_K1_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.3-k1-lesson',
        outcomeId: UNIT_1_3_K1_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.3-k1',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.3-k1-infographic',
        outcomeId: UNIT_1_3_K1_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.3-k1',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.3-k1-flashcard',
        outcomeId: UNIT_1_3_K1_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.3-k1',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.3-k1-quiz',
        outcomeId: UNIT_1_3_K1_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.3-k1',
        orderIndex: 4,
      },
    ],
    [UNIT_1_3_K2_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.3-k2-lesson',
        outcomeId: UNIT_1_3_K2_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.3-k2',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.3-k2-infographic',
        outcomeId: UNIT_1_3_K2_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.3-k2',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.3-k2-flashcard',
        outcomeId: UNIT_1_3_K2_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.3-k2',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.3-k2-quiz',
        outcomeId: UNIT_1_3_K2_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.3-k2',
        orderIndex: 4,
      },
    ],
    [UNIT_1_3_K3_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.3-k3-lesson',
        outcomeId: UNIT_1_3_K3_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.3-k3',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.3-k3-infographic',
        outcomeId: UNIT_1_3_K3_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.3-k3',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.3-k3-flashcard',
        outcomeId: UNIT_1_3_K3_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.3-k3',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.3-k3-quiz',
        outcomeId: UNIT_1_3_K3_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.3-k3',
        orderIndex: 4,
      },
    ],
    [UNIT_1_3_K4_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.3-k4-lesson',
        outcomeId: UNIT_1_3_K4_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.3-k4',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.3-k4-infographic',
        outcomeId: UNIT_1_3_K4_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.3-k4',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.3-k4-flashcard',
        outcomeId: UNIT_1_3_K4_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.3-k4',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.3-k4-quiz',
        outcomeId: UNIT_1_3_K4_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.3-k4',
        orderIndex: 4,
      },
    ],
    [UNIT_1_3_K5_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.3-k5-lesson',
        outcomeId: UNIT_1_3_K5_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.3-k5',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.3-k5-infographic',
        outcomeId: UNIT_1_3_K5_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.3-k5',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.3-k5-flashcard',
        outcomeId: UNIT_1_3_K5_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.3-k5',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.3-k5-quiz',
        outcomeId: UNIT_1_3_K5_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.3-k5',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K1_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k1-lesson',
        outcomeId: UNIT_1_4_K1_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k1',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k1-infographic',
        outcomeId: UNIT_1_4_K1_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k1',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k1-flashcard',
        outcomeId: UNIT_1_4_K1_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k1',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k1-quiz',
        outcomeId: UNIT_1_4_K1_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k1',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K2_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k2-lesson',
        outcomeId: UNIT_1_4_K2_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k2',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k2-infographic',
        outcomeId: UNIT_1_4_K2_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k2',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k2-flashcard',
        outcomeId: UNIT_1_4_K2_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k2',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k2-quiz',
        outcomeId: UNIT_1_4_K2_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k2',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K3_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k3-lesson',
        outcomeId: UNIT_1_4_K3_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k3',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k3-infographic',
        outcomeId: UNIT_1_4_K3_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k3',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k3-flashcard',
        outcomeId: UNIT_1_4_K3_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k3',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k3-quiz',
        outcomeId: UNIT_1_4_K3_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k3',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K4_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k4-lesson',
        outcomeId: UNIT_1_4_K4_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k4',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k4-infographic',
        outcomeId: UNIT_1_4_K4_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k4',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k4-flashcard',
        outcomeId: UNIT_1_4_K4_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k4',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k4-quiz',
        outcomeId: UNIT_1_4_K4_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k4',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K5_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k5-lesson',
        outcomeId: UNIT_1_4_K5_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k5',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k5-infographic',
        outcomeId: UNIT_1_4_K5_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k5',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k5-flashcard',
        outcomeId: UNIT_1_4_K5_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k5',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k5-quiz',
        outcomeId: UNIT_1_4_K5_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k5',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K6_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k6-lesson',
        outcomeId: UNIT_1_4_K6_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k6',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k6-infographic',
        outcomeId: UNIT_1_4_K6_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k6',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k6-flashcard',
        outcomeId: UNIT_1_4_K6_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k6',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k6-quiz',
        outcomeId: UNIT_1_4_K6_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k6',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K7_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k7-lesson',
        outcomeId: UNIT_1_4_K7_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k7',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k7-infographic',
        outcomeId: UNIT_1_4_K7_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k7',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k7-flashcard',
        outcomeId: UNIT_1_4_K7_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k7',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k7-quiz',
        outcomeId: UNIT_1_4_K7_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k7',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K8_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k8-lesson',
        outcomeId: UNIT_1_4_K8_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k8',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k8-infographic',
        outcomeId: UNIT_1_4_K8_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k8',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k8-flashcard',
        outcomeId: UNIT_1_4_K8_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k8',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k8-quiz',
        outcomeId: UNIT_1_4_K8_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k8',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K9_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k9-lesson',
        outcomeId: UNIT_1_4_K9_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k9',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k9-infographic',
        outcomeId: UNIT_1_4_K9_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k9',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k9-flashcard',
        outcomeId: UNIT_1_4_K9_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k9',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k9-quiz',
        outcomeId: UNIT_1_4_K9_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k9',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K10_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k10-lesson',
        outcomeId: UNIT_1_4_K10_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k10',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k10-infographic',
        outcomeId: UNIT_1_4_K10_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k10',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k10-flashcard',
        outcomeId: UNIT_1_4_K10_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k10',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k10-quiz',
        outcomeId: UNIT_1_4_K10_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k10',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K11_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k11-lesson',
        outcomeId: UNIT_1_4_K11_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k11',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k11-infographic',
        outcomeId: UNIT_1_4_K11_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k11',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k11-flashcard',
        outcomeId: UNIT_1_4_K11_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k11',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k11-quiz',
        outcomeId: UNIT_1_4_K11_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k11',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K12_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k12-lesson',
        outcomeId: UNIT_1_4_K12_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k12',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k12-infographic',
        outcomeId: UNIT_1_4_K12_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k12',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k12-flashcard',
        outcomeId: UNIT_1_4_K12_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k12',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k12-quiz',
        outcomeId: UNIT_1_4_K12_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k12',
        orderIndex: 4,
      },
    ],
    [UNIT_1_4_K13_OUTCOME_ID]: [
      {
        id: 'content-ref-9bio-1.4-k13-lesson',
        outcomeId: UNIT_1_4_K13_OUTCOME_ID,
        type: 'lesson',
        contentId: 'lesson-9bio-1.4-k13',
        orderIndex: 1,
      },
      {
        id: 'content-ref-9bio-1.4-k13-infographic',
        outcomeId: UNIT_1_4_K13_OUTCOME_ID,
        type: 'infographic',
        contentId: 'infographic-9bio-1.4-k13',
        orderIndex: 2,
      },
      {
        id: 'content-ref-9bio-1.4-k13-flashcard',
        outcomeId: UNIT_1_4_K13_OUTCOME_ID,
        type: 'flashcard',
        contentId: 'flashcard-9bio-1.4-k13',
        orderIndex: 3,
      },
      {
        id: 'content-ref-9bio-1.4-k13-quiz',
        outcomeId: UNIT_1_4_K13_OUTCOME_ID,
        type: 'quiz',
        contentId: 'quiz-9bio-1.4-k13',
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
    'lesson-9bio-1.1-k4': {
      id: 'lesson-9bio-1.1-k4',
      outcomeId: K4_OUTCOME_ID,
      layers: layers_9bio_1_1_k4,
    },
    'lesson-9bio-1.1-k5': {
      id: 'lesson-9bio-1.1-k5',
      outcomeId: K5_OUTCOME_ID,
      layers: layers_9bio_1_1_k5,
    },
    'lesson-9bio-1.2-k1': {
      id: 'lesson-9bio-1.2-k1',
      outcomeId: UNIT_1_2_K1_OUTCOME_ID,
      layers: layers_9bio_1_2_k1,
    },
    'lesson-9bio-1.2-k2': {
      id: 'lesson-9bio-1.2-k2',
      outcomeId: UNIT_1_2_K2_OUTCOME_ID,
      layers: layers_9bio_1_2_k2,
    },
    'lesson-9bio-1.2-k3': {
      id: 'lesson-9bio-1.2-k3',
      outcomeId: UNIT_1_2_K3_OUTCOME_ID,
      layers: layers_9bio_1_2_k3,
    },
    'lesson-9bio-1.2-k4': {
      id: 'lesson-9bio-1.2-k4',
      outcomeId: UNIT_1_2_K4_OUTCOME_ID,
      layers: layers_9bio_1_2_k4,
    },
    'lesson-9bio-1.2-k5': {
      id: 'lesson-9bio-1.2-k5',
      outcomeId: UNIT_1_2_K5_OUTCOME_ID,
      layers: layers_9bio_1_2_k5,
    },
    'lesson-9bio-1.2-k6': {
      id: 'lesson-9bio-1.2-k6',
      outcomeId: UNIT_1_2_K6_OUTCOME_ID,
      layers: layers_9bio_1_2_k6,
    },
    'lesson-9bio-1.2-k7': {
      id: 'lesson-9bio-1.2-k7',
      outcomeId: UNIT_1_2_K7_OUTCOME_ID,
      layers: layers_9bio_1_2_k7,
    },
    'lesson-9bio-1.2-k8': {
      id: 'lesson-9bio-1.2-k8',
      outcomeId: UNIT_1_2_K8_OUTCOME_ID,
      layers: layers_9bio_1_2_k8,
    },
    'lesson-9bio-1.3-k1': {
      id: 'lesson-9bio-1.3-k1',
      outcomeId: UNIT_1_3_K1_OUTCOME_ID,
      layers: layers_9bio_1_3_k1,
    },
    'lesson-9bio-1.3-k2': {
      id: 'lesson-9bio-1.3-k2',
      outcomeId: UNIT_1_3_K2_OUTCOME_ID,
      layers: layers_9bio_1_3_k2,
    },
    'lesson-9bio-1.3-k3': {
      id: 'lesson-9bio-1.3-k3',
      outcomeId: UNIT_1_3_K3_OUTCOME_ID,
      layers: layers_9bio_1_3_k3,
    },
    'lesson-9bio-1.3-k4': {
      id: 'lesson-9bio-1.3-k4',
      outcomeId: UNIT_1_3_K4_OUTCOME_ID,
      layers: layers_9bio_1_3_k4,
    },
    'lesson-9bio-1.3-k5': {
      id: 'lesson-9bio-1.3-k5',
      outcomeId: UNIT_1_3_K5_OUTCOME_ID,
      layers: layers_9bio_1_3_k5,
    },
    'lesson-9bio-1.4-k1': {
      id: 'lesson-9bio-1.4-k1',
      outcomeId: UNIT_1_4_K1_OUTCOME_ID,
      layers: layers_9bio_1_4_k1,
    },
    'lesson-9bio-1.4-k2': {
      id: 'lesson-9bio-1.4-k2',
      outcomeId: UNIT_1_4_K2_OUTCOME_ID,
      layers: layers_9bio_1_4_k2,
    },
    'lesson-9bio-1.4-k3': {
      id: 'lesson-9bio-1.4-k3',
      outcomeId: UNIT_1_4_K3_OUTCOME_ID,
      layers: layers_9bio_1_4_k3,
    },
    'lesson-9bio-1.4-k4': {
      id: 'lesson-9bio-1.4-k4',
      outcomeId: UNIT_1_4_K4_OUTCOME_ID,
      layers: layers_9bio_1_4_k4,
    },
    'lesson-9bio-1.4-k5': {
      id: 'lesson-9bio-1.4-k5',
      outcomeId: UNIT_1_4_K5_OUTCOME_ID,
      layers: layers_9bio_1_4_k5,
    },
    'lesson-9bio-1.4-k6': {
      id: 'lesson-9bio-1.4-k6',
      outcomeId: UNIT_1_4_K6_OUTCOME_ID,
      layers: layers_9bio_1_4_k6,
    },
    'lesson-9bio-1.4-k7': {
      id: 'lesson-9bio-1.4-k7',
      outcomeId: UNIT_1_4_K7_OUTCOME_ID,
      layers: layers_9bio_1_4_k7,
    },
    'lesson-9bio-1.4-k8': {
      id: 'lesson-9bio-1.4-k8',
      outcomeId: UNIT_1_4_K8_OUTCOME_ID,
      layers: layers_9bio_1_4_k8,
    },
    'lesson-9bio-1.4-k9': {
      id: 'lesson-9bio-1.4-k9',
      outcomeId: UNIT_1_4_K9_OUTCOME_ID,
      layers: layers_9bio_1_4_k9,
    },
    'lesson-9bio-1.4-k10': {
      id: 'lesson-9bio-1.4-k10',
      outcomeId: UNIT_1_4_K10_OUTCOME_ID,
      layers: layers_9bio_1_4_k10,
    },
    'lesson-9bio-1.4-k11': {
      id: 'lesson-9bio-1.4-k11',
      outcomeId: UNIT_1_4_K11_OUTCOME_ID,
      layers: layers_9bio_1_4_k11,
    },
    'lesson-9bio-1.4-k12': {
      id: 'lesson-9bio-1.4-k12',
      outcomeId: UNIT_1_4_K12_OUTCOME_ID,
      layers: layers_9bio_1_4_k12,
    },
    'lesson-9bio-1.4-k13': {
      id: 'lesson-9bio-1.4-k13',
      outcomeId: UNIT_1_4_K13_OUTCOME_ID,
      layers: layers_9bio_1_4_k13,
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
    'infographic-9bio-1.1-k4': {
      id: 'infographic-9bio-1.1-k4',
      outcomeId: K4_OUTCOME_ID,
      title: 'Biyolojide Dönüm Noktaları ve İnsan Hayatına Etkileri',
      assetKey: 'placeholder-9bio-1.1-k4-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.1-k5': {
      id: 'infographic-9bio-1.1-k5',
      outcomeId: K5_OUTCOME_ID,
      title: 'Biyolojik Bilgiyle Günlük Problem Çözme',
      assetKey: 'placeholder-9bio-1.1-k5-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.2-k1': {
      id: 'infographic-9bio-1.2-k1',
      outcomeId: UNIT_1_2_K1_OUTCOME_ID,
      title: 'Bilimsel Bilgi Üretme Süreci',
      assetKey: 'placeholder-9bio-1.2-k1-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.2-k2': {
      id: 'infographic-9bio-1.2-k2',
      outcomeId: UNIT_1_2_K2_OUTCOME_ID,
      title: 'Bilimsel Bilginin Özellikleri',
      assetKey: 'placeholder-9bio-1.2-k2-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.2-k3': {
      id: 'infographic-9bio-1.2-k3',
      outcomeId: UNIT_1_2_K3_OUTCOME_ID,
      title: 'Bilimin Doğası',
      assetKey: 'placeholder-9bio-1.2-k3-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.2-k4': {
      id: 'infographic-9bio-1.2-k4',
      outcomeId: UNIT_1_2_K4_OUTCOME_ID,
      title: 'Bilimsel Yöntem Basamakları',
      assetKey: 'placeholder-9bio-1.2-k4-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.2-k5': {
      id: 'infographic-9bio-1.2-k5',
      outcomeId: UNIT_1_2_K5_OUTCOME_ID,
      title: 'Biyolojik Problemde Bilimsel Yöntem Uygulama',
      assetKey: 'placeholder-9bio-1.2-k5-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.2-k6': {
      id: 'infographic-9bio-1.2-k6',
      outcomeId: UNIT_1_2_K6_OUTCOME_ID,
      title: 'Hipotez ve Tahmin Arasındaki Fark',
      assetKey: 'placeholder-9bio-1.2-k6-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.2-k7': {
      id: 'infographic-9bio-1.2-k7',
      outcomeId: UNIT_1_2_K7_OUTCOME_ID,
      title: 'Kontrollü Deneylerde Değişkenler',
      assetKey: 'placeholder-9bio-1.2-k7-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.2-k8': {
      id: 'infographic-9bio-1.2-k8',
      outcomeId: UNIT_1_2_K8_OUTCOME_ID,
      title: 'Veriden Bilimsel Sonuca',
      assetKey: 'placeholder-9bio-1.2-k8-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.3-k1': {
      id: 'infographic-9bio-1.3-k1',
      outcomeId: UNIT_1_3_K1_OUTCOME_ID,
      title: 'Bilimsel Araştırmalarda Etik İlkeler',
      assetKey: 'placeholder-9bio-1.3-k1-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.3-k2': {
      id: 'infographic-9bio-1.3-k2',
      outcomeId: UNIT_1_3_K2_OUTCOME_ID,
      title: 'Bilim Etiğinin Beş Temel İlkesi',
      assetKey: 'placeholder-9bio-1.3-k2-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.3-k3': {
      id: 'infographic-9bio-1.3-k3',
      outcomeId: UNIT_1_3_K3_OUTCOME_ID,
      title: 'Bilimsel Araştırmalarda Etik İhlaller',
      assetKey: 'placeholder-9bio-1.3-k3-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.3-k4': {
      id: 'infographic-9bio-1.3-k4',
      outcomeId: UNIT_1_3_K4_OUTCOME_ID,
      title: 'Canlı Araştırmalarında Etik Kurallar',
      assetKey: 'placeholder-9bio-1.3-k4-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.3-k5': {
      id: 'infographic-9bio-1.3-k5',
      outcomeId: UNIT_1_3_K5_OUTCOME_ID,
      title: 'Bilimsel Bilginin Toplum Yararına Kullanımı',
      assetKey: 'placeholder-9bio-1.3-k5-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k1': {
      id: 'infographic-9bio-1.4-k1',
      outcomeId: UNIT_1_4_K1_OUTCOME_ID,
      title: 'Canlıların Ortak Özellikleri',
      assetKey: 'placeholder-9bio-1.4-k1-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k2': {
      id: 'infographic-9bio-1.4-k2',
      outcomeId: UNIT_1_4_K2_OUTCOME_ID,
      title: 'Hücresel Yapı ve Canlılık',
      assetKey: 'placeholder-9bio-1.4-k2-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k3': {
      id: 'infographic-9bio-1.4-k3',
      outcomeId: UNIT_1_4_K3_OUTCOME_ID,
      title: 'Tek Hücreli ve Çok Hücreli Canlılarda Organizasyon',
      assetKey: 'placeholder-9bio-1.4-k3-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k4': {
      id: 'infographic-9bio-1.4-k4',
      outcomeId: UNIT_1_4_K4_OUTCOME_ID,
      title: 'Ototrof ve Heterotrof Beslenme',
      assetKey: 'placeholder-9bio-1.4-k4-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k5': {
      id: 'infographic-9bio-1.4-k5',
      outcomeId: UNIT_1_4_K5_OUTCOME_ID,
      title: 'Enerji Üretimi ve Yaşam Faaliyetleri',
      assetKey: 'placeholder-9bio-1.4-k5-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k6': {
      id: 'infographic-9bio-1.4-k6',
      outcomeId: UNIT_1_4_K6_OUTCOME_ID,
      title: 'Boşaltım ve İç Denge',
      assetKey: 'placeholder-9bio-1.4-k6-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k7': {
      id: 'infographic-9bio-1.4-k7',
      outcomeId: UNIT_1_4_K7_OUTCOME_ID,
      title: 'Büyüme ve Gelişme',
      assetKey: 'placeholder-9bio-1.4-k7-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k8': {
      id: 'infographic-9bio-1.4-k8',
      outcomeId: UNIT_1_4_K8_OUTCOME_ID,
      title: 'Eşeyli ve Eşeysiz Üreme',
      assetKey: 'placeholder-9bio-1.4-k8-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k9': {
      id: 'infographic-9bio-1.4-k9',
      outcomeId: UNIT_1_4_K9_OUTCOME_ID,
      title: 'Uyaran, Tepki ve Hayatta Kalma',
      assetKey: 'placeholder-9bio-1.4-k9-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k10': {
      id: 'infographic-9bio-1.4-k10',
      outcomeId: UNIT_1_4_K10_OUTCOME_ID,
      title: 'Homeostazi ve Kararlı İç Ortam',
      assetKey: 'placeholder-9bio-1.4-k10-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k11': {
      id: 'infographic-9bio-1.4-k11',
      outcomeId: UNIT_1_4_K11_OUTCOME_ID,
      title: 'Varyasyondan Adaptasyona',
      assetKey: 'placeholder-9bio-1.4-k11-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k12': {
      id: 'infographic-9bio-1.4-k12',
      outcomeId: UNIT_1_4_K12_OUTCOME_ID,
      title: 'Virüslerin Canlılık Bakımından Özel Konumu',
      assetKey: 'placeholder-9bio-1.4-k12-infographic',
      description: 'Bu kazanım için öğretmen infografiği henüz eklenmedi.',
    },
    'infographic-9bio-1.4-k13': {
      id: 'infographic-9bio-1.4-k13',
      outcomeId: UNIT_1_4_K13_OUTCOME_ID,
      title: 'Virüslerin Üç Temel Bağımlılığı',
      assetKey: 'placeholder-9bio-1.4-k13-infographic',
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
    'flashcard-9bio-1.1-k4': {
      id: 'flashcard-9bio-1.1-k4',
      outcomeId: K4_OUTCOME_ID,
      flashcards: flashcards_9bio_1_1_k4,
    },
    'flashcard-9bio-1.1-k5': {
      id: 'flashcard-9bio-1.1-k5',
      outcomeId: K5_OUTCOME_ID,
      flashcards: flashcards_9bio_1_1_k5,
    },
    'flashcard-9bio-1.2-k1': {
      id: 'flashcard-9bio-1.2-k1',
      outcomeId: UNIT_1_2_K1_OUTCOME_ID,
      flashcards: flashcards_9bio_1_2_k1,
    },
    'flashcard-9bio-1.2-k2': {
      id: 'flashcard-9bio-1.2-k2',
      outcomeId: UNIT_1_2_K2_OUTCOME_ID,
      flashcards: flashcards_9bio_1_2_k2,
    },
    'flashcard-9bio-1.2-k3': {
      id: 'flashcard-9bio-1.2-k3',
      outcomeId: UNIT_1_2_K3_OUTCOME_ID,
      flashcards: flashcards_9bio_1_2_k3,
    },
    'flashcard-9bio-1.2-k4': {
      id: 'flashcard-9bio-1.2-k4',
      outcomeId: UNIT_1_2_K4_OUTCOME_ID,
      flashcards: flashcards_9bio_1_2_k4,
    },
    'flashcard-9bio-1.2-k5': {
      id: 'flashcard-9bio-1.2-k5',
      outcomeId: UNIT_1_2_K5_OUTCOME_ID,
      flashcards: flashcards_9bio_1_2_k5,
    },
    'flashcard-9bio-1.2-k6': {
      id: 'flashcard-9bio-1.2-k6',
      outcomeId: UNIT_1_2_K6_OUTCOME_ID,
      flashcards: flashcards_9bio_1_2_k6,
    },
    'flashcard-9bio-1.2-k7': {
      id: 'flashcard-9bio-1.2-k7',
      outcomeId: UNIT_1_2_K7_OUTCOME_ID,
      flashcards: flashcards_9bio_1_2_k7,
    },
    'flashcard-9bio-1.2-k8': {
      id: 'flashcard-9bio-1.2-k8',
      outcomeId: UNIT_1_2_K8_OUTCOME_ID,
      flashcards: flashcards_9bio_1_2_k8,
    },
    'flashcard-9bio-1.3-k1': {
      id: 'flashcard-9bio-1.3-k1',
      outcomeId: UNIT_1_3_K1_OUTCOME_ID,
      flashcards: flashcards_9bio_1_3_k1,
    },
    'flashcard-9bio-1.3-k2': {
      id: 'flashcard-9bio-1.3-k2',
      outcomeId: UNIT_1_3_K2_OUTCOME_ID,
      flashcards: flashcards_9bio_1_3_k2,
    },
    'flashcard-9bio-1.3-k3': {
      id: 'flashcard-9bio-1.3-k3',
      outcomeId: UNIT_1_3_K3_OUTCOME_ID,
      flashcards: flashcards_9bio_1_3_k3,
    },
    'flashcard-9bio-1.3-k4': {
      id: 'flashcard-9bio-1.3-k4',
      outcomeId: UNIT_1_3_K4_OUTCOME_ID,
      flashcards: flashcards_9bio_1_3_k4,
    },
    'flashcard-9bio-1.3-k5': {
      id: 'flashcard-9bio-1.3-k5',
      outcomeId: UNIT_1_3_K5_OUTCOME_ID,
      flashcards: flashcards_9bio_1_3_k5,
    },
    'flashcard-9bio-1.4-k1': {
      id: 'flashcard-9bio-1.4-k1',
      outcomeId: UNIT_1_4_K1_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k1,
    },
    'flashcard-9bio-1.4-k2': {
      id: 'flashcard-9bio-1.4-k2',
      outcomeId: UNIT_1_4_K2_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k2,
    },
    'flashcard-9bio-1.4-k3': {
      id: 'flashcard-9bio-1.4-k3',
      outcomeId: UNIT_1_4_K3_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k3,
    },
    'flashcard-9bio-1.4-k4': {
      id: 'flashcard-9bio-1.4-k4',
      outcomeId: UNIT_1_4_K4_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k4,
    },
    'flashcard-9bio-1.4-k5': {
      id: 'flashcard-9bio-1.4-k5',
      outcomeId: UNIT_1_4_K5_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k5,
    },
    'flashcard-9bio-1.4-k6': {
      id: 'flashcard-9bio-1.4-k6',
      outcomeId: UNIT_1_4_K6_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k6,
    },
    'flashcard-9bio-1.4-k7': {
      id: 'flashcard-9bio-1.4-k7',
      outcomeId: UNIT_1_4_K7_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k7,
    },
    'flashcard-9bio-1.4-k8': {
      id: 'flashcard-9bio-1.4-k8',
      outcomeId: UNIT_1_4_K8_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k8,
    },
    'flashcard-9bio-1.4-k9': {
      id: 'flashcard-9bio-1.4-k9',
      outcomeId: UNIT_1_4_K9_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k9,
    },
    'flashcard-9bio-1.4-k10': {
      id: 'flashcard-9bio-1.4-k10',
      outcomeId: UNIT_1_4_K10_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k10,
    },
    'flashcard-9bio-1.4-k11': {
      id: 'flashcard-9bio-1.4-k11',
      outcomeId: UNIT_1_4_K11_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k11,
    },
    'flashcard-9bio-1.4-k12': {
      id: 'flashcard-9bio-1.4-k12',
      outcomeId: UNIT_1_4_K12_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k12,
    },
    'flashcard-9bio-1.4-k13': {
      id: 'flashcard-9bio-1.4-k13',
      outcomeId: UNIT_1_4_K13_OUTCOME_ID,
      flashcards: flashcards_9bio_1_4_k13,
    },
  },
  quizzes: {
    'quiz-9bio-1.1-k1': {
      id: 'quiz-9bio-1.1-k1',
      outcomeId: PILOT_OUTCOME_ID,
      questionIds: ['q9-001', 'q9-1.1-k1-002', 'q9-1.1-k1-003'],
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
    'quiz-9bio-1.1-k4': {
      id: 'quiz-9bio-1.1-k4',
      outcomeId: K4_OUTCOME_ID,
      questionIds: ['q9-1.1-k4-001', 'q9-1.1-k4-002', 'q9-1.1-k4-003'],
    },
    'quiz-9bio-1.1-k5': {
      id: 'quiz-9bio-1.1-k5',
      outcomeId: K5_OUTCOME_ID,
      questionIds: ['q9-1.1-k5-001', 'q9-1.1-k5-002', 'q9-1.1-k5-003'],
    },
    'quiz-9bio-1.2-k1': {
      id: 'quiz-9bio-1.2-k1',
      outcomeId: UNIT_1_2_K1_OUTCOME_ID,
      questionIds: ['q9-1.2-k1-001', 'q9-1.2-k1-002', 'q9-1.2-k1-003'],
    },
    'quiz-9bio-1.2-k2': {
      id: 'quiz-9bio-1.2-k2',
      outcomeId: UNIT_1_2_K2_OUTCOME_ID,
      questionIds: ['q9-1.2-k2-001', 'q9-1.2-k2-002', 'q9-1.2-k2-003'],
    },
    'quiz-9bio-1.2-k3': {
      id: 'quiz-9bio-1.2-k3',
      outcomeId: UNIT_1_2_K3_OUTCOME_ID,
      questionIds: ['q9-1.2-k3-001', 'q9-1.2-k3-002', 'q9-1.2-k3-003'],
    },
    'quiz-9bio-1.2-k4': {
      id: 'quiz-9bio-1.2-k4',
      outcomeId: UNIT_1_2_K4_OUTCOME_ID,
      questionIds: ['q9-1.2-k4-001', 'q9-1.2-k4-002', 'q9-1.2-k4-003'],
    },
    'quiz-9bio-1.2-k5': {
      id: 'quiz-9bio-1.2-k5',
      outcomeId: UNIT_1_2_K5_OUTCOME_ID,
      questionIds: ['q9-1.2-k5-001', 'q9-1.2-k5-002', 'q9-1.2-k5-003'],
    },
    'quiz-9bio-1.2-k6': {
      id: 'quiz-9bio-1.2-k6',
      outcomeId: UNIT_1_2_K6_OUTCOME_ID,
      questionIds: ['q9-1.2-k6-001', 'q9-1.2-k6-002', 'q9-1.2-k6-003'],
    },
    'quiz-9bio-1.2-k7': {
      id: 'quiz-9bio-1.2-k7',
      outcomeId: UNIT_1_2_K7_OUTCOME_ID,
      questionIds: ['q9-1.2-k7-001', 'q9-1.2-k7-002', 'q9-1.2-k7-003'],
    },
    'quiz-9bio-1.2-k8': {
      id: 'quiz-9bio-1.2-k8',
      outcomeId: UNIT_1_2_K8_OUTCOME_ID,
      questionIds: ['q9-1.2-k8-001', 'q9-1.2-k8-002', 'q9-1.2-k8-003'],
    },
    'quiz-9bio-1.3-k1': {
      id: 'quiz-9bio-1.3-k1',
      outcomeId: UNIT_1_3_K1_OUTCOME_ID,
      questionIds: ['q9-1.3-k1-001', 'q9-1.3-k1-002', 'q9-1.3-k1-003'],
    },
    'quiz-9bio-1.3-k2': {
      id: 'quiz-9bio-1.3-k2',
      outcomeId: UNIT_1_3_K2_OUTCOME_ID,
      questionIds: ['q9-1.3-k2-001', 'q9-1.3-k2-002', 'q9-1.3-k2-003'],
    },
    'quiz-9bio-1.3-k3': {
      id: 'quiz-9bio-1.3-k3',
      outcomeId: UNIT_1_3_K3_OUTCOME_ID,
      questionIds: ['q9-1.3-k3-001', 'q9-1.3-k3-002', 'q9-1.3-k3-003'],
    },
    'quiz-9bio-1.3-k4': {
      id: 'quiz-9bio-1.3-k4',
      outcomeId: UNIT_1_3_K4_OUTCOME_ID,
      questionIds: ['q9-1.3-k4-001', 'q9-1.3-k4-002', 'q9-1.3-k4-003'],
    },
    'quiz-9bio-1.3-k5': {
      id: 'quiz-9bio-1.3-k5',
      outcomeId: UNIT_1_3_K5_OUTCOME_ID,
      questionIds: ['q9-1.3-k5-001', 'q9-1.3-k5-002', 'q9-1.3-k5-003'],
    },
    'quiz-9bio-1.4-k1': {
      id: 'quiz-9bio-1.4-k1',
      outcomeId: UNIT_1_4_K1_OUTCOME_ID,
      questionIds: ['q9-1.4-k1-001', 'q9-1.4-k1-002', 'q9-1.4-k1-003'],
    },
    'quiz-9bio-1.4-k2': {
      id: 'quiz-9bio-1.4-k2',
      outcomeId: UNIT_1_4_K2_OUTCOME_ID,
      questionIds: ['q9-1.4-k2-001', 'q9-1.4-k2-002', 'q9-1.4-k2-003'],
    },
    'quiz-9bio-1.4-k3': {
      id: 'quiz-9bio-1.4-k3',
      outcomeId: UNIT_1_4_K3_OUTCOME_ID,
      questionIds: ['q9-1.4-k3-001', 'q9-1.4-k3-002', 'q9-1.4-k3-003'],
    },
    'quiz-9bio-1.4-k4': {
      id: 'quiz-9bio-1.4-k4',
      outcomeId: UNIT_1_4_K4_OUTCOME_ID,
      questionIds: ['q9-1.4-k4-001', 'q9-1.4-k4-002', 'q9-1.4-k4-003'],
    },
    'quiz-9bio-1.4-k5': {
      id: 'quiz-9bio-1.4-k5',
      outcomeId: UNIT_1_4_K5_OUTCOME_ID,
      questionIds: ['q9-1.4-k5-001', 'q9-1.4-k5-002', 'q9-1.4-k5-003'],
    },
    'quiz-9bio-1.4-k6': {
      id: 'quiz-9bio-1.4-k6',
      outcomeId: UNIT_1_4_K6_OUTCOME_ID,
      questionIds: ['q9-1.4-k6-001', 'q9-1.4-k6-002', 'q9-1.4-k6-003'],
    },
    'quiz-9bio-1.4-k7': {
      id: 'quiz-9bio-1.4-k7',
      outcomeId: UNIT_1_4_K7_OUTCOME_ID,
      questionIds: ['q9-1.4-k7-001', 'q9-1.4-k7-002', 'q9-1.4-k7-003'],
    },
    'quiz-9bio-1.4-k8': {
      id: 'quiz-9bio-1.4-k8',
      outcomeId: UNIT_1_4_K8_OUTCOME_ID,
      questionIds: ['q9-1.4-k8-001', 'q9-1.4-k8-002', 'q9-1.4-k8-003'],
    },
    'quiz-9bio-1.4-k9': {
      id: 'quiz-9bio-1.4-k9',
      outcomeId: UNIT_1_4_K9_OUTCOME_ID,
      questionIds: ['q9-1.4-k9-001', 'q9-1.4-k9-002', 'q9-1.4-k9-003'],
    },
    'quiz-9bio-1.4-k10': {
      id: 'quiz-9bio-1.4-k10',
      outcomeId: UNIT_1_4_K10_OUTCOME_ID,
      questionIds: ['q9-1.4-k10-001', 'q9-1.4-k10-002', 'q9-1.4-k10-003'],
    },
    'quiz-9bio-1.4-k11': {
      id: 'quiz-9bio-1.4-k11',
      outcomeId: UNIT_1_4_K11_OUTCOME_ID,
      questionIds: ['q9-1.4-k11-001', 'q9-1.4-k11-002', 'q9-1.4-k11-003'],
    },
    'quiz-9bio-1.4-k12': {
      id: 'quiz-9bio-1.4-k12',
      outcomeId: UNIT_1_4_K12_OUTCOME_ID,
      questionIds: ['q9-1.4-k12-001', 'q9-1.4-k12-002', 'q9-1.4-k12-003'],
    },
    'quiz-9bio-1.4-k13': {
      id: 'quiz-9bio-1.4-k13',
      outcomeId: UNIT_1_4_K13_OUTCOME_ID,
      questionIds: ['q9-1.4-k13-001', 'q9-1.4-k13-002', 'q9-1.4-k13-003'],
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
