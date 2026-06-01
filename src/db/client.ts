import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('biomap.db');

export async function initDatabase() {
  db.execSync(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS themes (
      id TEXT PRIMARY KEY,
      grade_level INTEGER NOT NULL,
      title TEXT NOT NULL,
      order_index INTEGER NOT NULL,
      icon TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS topics (
      id TEXT PRIMARY KEY,
      theme_id TEXT NOT NULL,
      title TEXT NOT NULL,
      order_index INTEGER NOT NULL,
      difficulty TEXT NOT NULL,
      estimated_minutes INTEGER NOT NULL DEFAULT 20
    );

    CREATE TABLE IF NOT EXISTS subtopics (
      id TEXT PRIMARY KEY,
      topic_id TEXT NOT NULL,
      title TEXT NOT NULL,
      order_index INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS lesson_layers (
      id TEXT PRIMARY KEY,
      subtopic_id TEXT NOT NULL,
      layer_type TEXT NOT NULL,
      order_index INTEGER NOT NULL,
      content_json TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS flashcards (
      id TEXT PRIMARY KEY,
      subtopic_id TEXT NOT NULL,
      term TEXT NOT NULL,
      definition TEXT NOT NULL,
      example TEXT,
      order_index INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      subtopic_id TEXT NOT NULL,
      topic_id TEXT NOT NULL,
      grade_level INTEGER NOT NULL,
      type TEXT NOT NULL,
      exam_type TEXT NOT NULL,
      difficulty TEXT NOT NULL,
      outcome_code TEXT NOT NULL,
      body_json TEXT NOT NULL,
      correct_answer TEXT NOT NULL,
      explanation TEXT NOT NULL,
      has_visual INTEGER DEFAULT 0,
      tags TEXT NOT NULL DEFAULT '[]'
    );

    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      grade_level INTEGER NOT NULL,
      goal TEXT NOT NULL,
      total_xp INTEGER NOT NULL DEFAULT 0,
      level INTEGER NOT NULL DEFAULT 1,
      streak_days INTEGER NOT NULL DEFAULT 0,
      last_active_date TEXT,
      is_pro INTEGER DEFAULT 0,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS subtopic_progress (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      subtopic_id TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'not_started',
      mastery_score INTEGER NOT NULL DEFAULT 0,
      completed_at TEXT,
      time_spent_seconds INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS quiz_attempts (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      question_id TEXT NOT NULL,
      given_answer TEXT NOT NULL,
      is_correct INTEGER NOT NULL,
      time_taken_seconds INTEGER,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS memory_records (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      item_id TEXT NOT NULL,
      item_type TEXT NOT NULL,
      easiness_factor REAL NOT NULL DEFAULT 2.5,
      interval_days INTEGER NOT NULL DEFAULT 1,
      repetitions INTEGER NOT NULL DEFAULT 0,
      next_review_date TEXT NOT NULL,
      last_quality INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS user_badges (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      badge_key TEXT NOT NULL,
      unlocked_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS daily_quests (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      date TEXT NOT NULL,
      quest_key TEXT NOT NULL,
      description TEXT NOT NULL,
      target INTEGER NOT NULL,
      progress INTEGER NOT NULL DEFAULT 0,
      completed INTEGER DEFAULT 0,
      xp_reward INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_subtopic_progress_user ON subtopic_progress(user_id);
    CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user ON quiz_attempts(user_id);
    CREATE INDEX IF NOT EXISTS idx_memory_records_user ON memory_records(user_id);
    CREATE INDEX IF NOT EXISTS idx_memory_records_review ON memory_records(next_review_date);
  `);
}
