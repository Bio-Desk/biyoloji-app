// ─── Curriculum ───────────────────────────────────────────────
export type GradeLevel = 9 | 10 | 11 | 12;

// ─── Universal Learning Model ─────────────────────────────────
export type SubjectId = 'biology' | 'physics' | 'chemistry' | 'mathematics';

export type ExamTypeId = 'TYT' | 'AYT' | 'school' | 'general';

export type ContentType = 'lesson' | 'infographic' | 'flashcard' | 'quiz';

export interface Subject {
  id: SubjectId;
  title: string;
  orderIndex: number;
  examTypes: ExamType[];
}

export interface ExamType {
  id: ExamTypeId;
  subjectId: SubjectId;
  title: string;
  orderIndex: number;
  grades: Grade[];
}

export interface Grade {
  id: string;
  subjectId: SubjectId;
  examTypeId: ExamTypeId;
  level: GradeLevel;
  title: string;
  orderIndex: number;
  units: Unit[];
}

export interface Unit {
  id: string;
  subjectId: SubjectId;
  examTypeId: ExamTypeId;
  gradeLevel: GradeLevel;
  title: string;
  orderIndex: number;
  learningOutcomes: LearningOutcome[];
}

export interface ContentRef {
  id: string;
  outcomeId: string;
  type: ContentType;
  contentId: string;
  orderIndex: number;
}

// Backward-compatible alias for older question/outcome fields that used ExamType as a string code.
export type LegacyExamType = ExamTypeId;

export interface Theme {
  id: string;           // "9-1", "9-2"
  gradeLevel: GradeLevel;
  title: string;        // "Yaşam Bilimi Biyoloji"
  orderIndex: number;
  icon: string;
  topics: Topic[];
}

export interface Topic {
  id: string;           // "9-1.4"
  themeId: string;
  title: string;        // "Canlıların Ortak Özellikleri"
  orderIndex: number;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedMinutes: number;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;           // "9-1.4-viruses"
  topicId: string;
  title: string;
  orderIndex: number;
  layers: LessonLayer[];
  flashcards: Flashcard[];
  outcomes: LearningOutcome[];  // kazanımlar
}

// ─── Lesson Content (9 layers) ────────────────────────────────
export type LayerType =
  | 'concept'           // 1. Temel Kavram
  | 'visual'            // 2. Görsel Açıklama
  | 'process'           // 3. Süreç Akışı
  | 'terms'             // 4. Anahtar Terimler
  | 'misconceptions'    // 5. Yaygın Yanılgılar
  | 'exam_tips'         // 6. Sınavda Nasıl Sorulur?
  | 'real_life'         // 7. Uygulama Kutusu
  | 'mini_quiz'         // 8. Mini Quiz
  | 'assessment';       // 9. Konu Sonu Değerlendirme

export interface LessonLayer {
  id: string;
  subtopicId: string;
  layerType: LayerType;
  orderIndex: number;
  contentJson: LayerContent;
}

export interface LayerContent {
  body: string;
  highlightBoxes?: HighlightBox[];
  steps?: string[];          // for process layer
  svgData?: string | string[]; // for visual layer — registry key(s) of infographic image(s)
  tytPattern?: string;       // for exam_tips
  aytPattern?: string;
}

export interface HighlightBox {
  type: 'warning' | 'tip' | 'important' | 'example';
  text: string;
}

// ─── Flashcards ───────────────────────────────────────────────
export interface Flashcard {
  id: string;
  subtopicId: string;
  term: string;
  definition: string;
  example?: string;
  orderIndex: number;
}

// ─── Questions ────────────────────────────────────────────────
export type QuestionType =
  | 'multiple_choice'
  | 'true_false'
  | 'fill_blank'
  | 'matching'
  | 'graph_interpretation'
  | 'experiment'
  | 'premise'           // öncüllü (I, II, III)
  | 'daily_life'
  | 'interpretation';   // yorum sorusu

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  subtopicId: string;
  topicId: string;
  gradeLevel: GradeLevel;
  type: QuestionType;
  examType: ExamTypeId;
  difficulty: Difficulty;
  outcomeCode: string;    // "9BIO-1.4-K1"
  bodyJson: QuestionBody;
  correctAnswer: string;
  explanation: string;    // neden yanlış açıklaması dahil
  hasVisual: boolean;
  tags: string[];
}

export interface QuestionBody {
  text: string;
  options?: { key: string; text: string }[];   // A, B, C, D, E
  premises?: { key: string; text: string }[];  // I, II, III
  matchLeft?: string[];
  matchRight?: string[];
  imageUrl?: string;
}

// ─── Learning Outcome (Kazanım) ───────────────────────────────
export interface LearningOutcome {
  // Universal model fields are optional while legacy curriculum files are migrated.
  id?: string;
  unitId?: string;
  title?: string;
  orderIndex?: number;
  contentRefs?: ContentRef[];

  // Legacy curriculum fields kept for backward compatibility.
  code: string;           // "9BIO-1.4-K1"
  text: string;
  examRelevance: ExamTypeId[];
}

// ─── User & Progress ──────────────────────────────────────────
export type UserRole = 'student' | 'teacher';

export type TeacherVerificationStatus = 'unverified' | 'pending' | 'verified' | 'rejected';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  gradeLevel: GradeLevel;
  goal: 'tyt' | 'ayt' | 'school' | 'curiosity';
  totalXp: number;
  level: number;
  streakDays: number;
  lastActiveDate: string;
  isPro: boolean;
  kvkkAcceptedAt: string;
  teacherVerificationStatus?: TeacherVerificationStatus;
}

export interface SubtopicProgress {
  userId: string;
  subtopicId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  masteryScore: number;    // 0–100
  completedAt?: string;
  timeSpentSeconds: number;
}

export type LearningOutcomeStage =
  | 'not_started'
  | 'lesson'
  | 'infographic'
  | 'flashcard'
  | 'quiz'
  | 'result'
  | 'revision'
  | 'mastered';

export type LearningOutcomeStatus =
  | 'not_started'
  | 'in_progress'
  | 'needs_revision'
  | 'mastered';

export interface LearningOutcomeProgress {
  userId: string;
  outcomeId: string;
  currentStage: LearningOutcomeStage;
  completedStages: LearningOutcomeStage[];
  lessonViewed: boolean;
  infographicViewed: boolean;
  flashcardsReviewed: boolean;
  quizAttempted: boolean;
  quizScore?: number;
  masteryScore: number;
  status: LearningOutcomeStatus;
  lastActivityAt: string;
  nextReviewDate?: string;
}

// ─── Spaced Repetition ────────────────────────────────────────
export interface MemoryRecord {
  id: string;
  userId: string;
  itemId: string;          // flashcard or question id
  itemType: 'flashcard' | 'question';
  easinessFactor: number;  // SM-2 EF, starts 2.5
  intervalDays: number;
  repetitions: number;
  nextReviewDate: string;  // ISO date string
  lastQuality: number;     // 0–5
}

// ─── Gamification ─────────────────────────────────────────────
export interface Badge {
  id: string;
  key: string;
  title: string;
  description: string;
  iconName: string;
  unlockedAt?: string;
}

export interface DailyQuest {
  id: string;
  userId: string;
  date: string;
  questKey: string;
  description: string;
  target: number;
  progress: number;
  completed: boolean;
  xpReward: number;
}

// ─── Level System ─────────────────────────────────────────────
export const LEVELS = [
  { level: 1, title: 'Biyoloji Meraklısı', minXp: 0 },
  { level: 2, title: 'Hücre Kaşifi', minXp: 500 },
  { level: 3, title: 'Gen Mühendisi', minXp: 1500 },
  { level: 4, title: 'Evrim Araştırmacısı', minXp: 4000 },
  { level: 5, title: 'Biyoloji Uzmanı', minXp: 9000 },
  { level: 6, title: 'TYT Şampiyonu', minXp: 18000 },
  { level: 7, title: 'AYT Ustası', minXp: 32000 },
] as const;
