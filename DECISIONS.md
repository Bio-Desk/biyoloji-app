# Decisions

## 2026-06-16

- Architecture: Expo React Native app with Expo Router and TypeScript.
- Data strategy: Offline-first local SQLite for lesson content, flashcards, quizzes, and progress; Supabase for auth, sync, teacher analytics, and cloud data.
- State management: `zustand` stores for auth, KVKK consent, progress, and feature state.
- AI strategy: Separate verifier, question generator, and supervisor modules rather than a single monolith.
- IGCSE integration: Treat as a specialized integration layer on top of core content and question engines.
- Project memory: Maintain persistent files in repository so "Where did we stop?" can be answered from saved history.
