// Schema definitions as plain TypeScript constants (no drizzle-orm)
// Used for documentation and type reference only.
// Actual table creation is in client.ts via raw SQL.

export const TABLE_NAMES = {
  themes: 'themes',
  topics: 'topics',
  subtopics: 'subtopics',
  lessonLayers: 'lesson_layers',
  flashcards: 'flashcards',
  questions: 'questions',
  users: 'users',
  subtopicProgress: 'subtopic_progress',
  quizAttempts: 'quiz_attempts',
  memoryRecords: 'memory_records',
  userBadges: 'user_badges',
  dailyQuests: 'daily_quests',
} as const;
