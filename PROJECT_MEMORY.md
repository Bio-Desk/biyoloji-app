# Project Memory

## 2026-06-17

### Completed Work
1. Analyzed existing Expo React Native app architecture (Grade 9 & 10 Biology app).
2. Identified 74% MVP completion: Lesson system, flashcards, progress tracking, accessibility mostly done; Quiz system 30% done.
3. Created comprehensive MVP_STATUS.md audit report.
4. **Implemented Quiz Runner UI (NEW):**
   - Created seed questions file with 6 Grade 9 sample questions (multiple-choice format).
   - Built Zustand quiz store (`useQuizStore.ts`) for quiz session state management.
   - Implemented Quiz Config screen: grade/difficulty/question selection.
   - Implemented Quiz Attempt screen: question display, answer selection, feedback, explanation.
   - Implemented Quiz Result screen: score display, performance breakdown, recommendations.
   - Created Expo Router routes: `(quiz)/config`, `(quiz)/attempt`, `(quiz)/result`.
   - Integrated Quiz Result with existing progress tracking store.
   - Updated Practice screen to link to Quiz Config.

### Unfinished Work
- Flashcard review UI screens (store data ready, UI missing).
- Grade 10 content authoring (1/8 topics complete).
- Database migration from TypeScript files to SQLite (content loaded in-memory).
- Screen reader support for accessibility.
- Teacher dashboard and server sync.

### Current Phase
Phase 2: Flashcards, spaced repetition, quizzes (quiz runner now 90% complete).

### Important Decisions
- Quiz store uses Zustand for local state management.
- Quiz sessions are ephemeral (cleared on completion or back navigation).
- Results are recorded to progress store for long-term tracking.
- Single-choice questions implemented first; other types can be added later.
- Quiz routes use gesture disabled to prevent accidental back navigation during quiz.

### Known Issues
- `SKIP_AUTH_FOR_TESTING` still enabled in `src/app/_layout.tsx`.
- assets/fonts still empty despite theme references.
- No automated seed data loading (questions/content must be manually imported).
- Quiz questions currently limited to Grade 9 seed data.

### Next Steps
1. Create Grade 10 seed questions.
2. Implement Flashcard review UI.
3. Add database seed/import automation.
4. Implement Grade 10 content authoring (topic files).

## 2026-06-21

### Current Project State
- Project: `biology-app`
- Architecture: Student Learning OS + Curriculum Operating System (COS)
- Current phase: Phase 3A Grade 9 Biology Mapping Sprint
- Current workflow rule: author -> map -> validate -> approve
- Outcome mapping rule: process outcomes one by one, not in bulk

### Phase 3A Completed Mappings
- `9BIO-1.1-K1` is connected.
- `9BIO-1.1-K2` is connected and validation passed.
- `9BIO-1.1-K3` is implemented and approved.
- `9BIO-1.1-K4` is implemented and approved.

### 9BIO-1.1-K3 Approval Summary
- Changed files:
  - `src/data/grade9/outcomes/9bio-1.1-k3-content.ts`
  - `src/data/questions/grade9-seed.ts`
  - `src/data/contentRegistry.ts`
- Added 9 lesson layers:
  - `concept`
  - `visual`
  - `process`
  - `terms`
  - `misconceptions`
  - `exam_tips`
  - `real_life`
  - `mini_quiz`
  - `assessment`
- Added 6 flashcards.
- Added 3 quiz questions:
  - `q9-1.1-k3-001`
  - `q9-1.1-k3-002`
  - `q9-1.1-k3-003`
- Added exactly 4 ContentRef mappings:
  - lesson
  - infographic
  - flashcard
  - quiz
- Infographic placeholder:
  - `placeholder-9bio-1.1-k3-infographic`

### 9BIO-1.1-K3 Validation Result
- `npx tsc --noEmit` passes.
- Coverage:
  - lesson: `available`
  - infographic: `placeholder`
  - flashcard: `available`
  - quiz: `available`
  - complete: `false`
- Registry: valid, with only the expected placeholder infographic warning.
- Question validation: valid.

### 9BIO-1.1-K4 Approval Summary
- Outcome: `Aşı, antibiyotik, mikroskop, DNA yapısının keşfi, genetik mühendisliği ve biyoteknoloji gibi dönüm noktalarının insan hayatına etkilerini ilişkilendirir.`
- Changed files:
  - `src/data/grade9/outcomes/9bio-1.1-k4-content.ts`
  - `src/data/questions/grade9-seed.ts`
  - `src/data/contentRegistry.ts`
- Added 9 lesson layers:
  - `concept`
  - `visual`
  - `process`
  - `terms`
  - `misconceptions`
  - `exam_tips`
  - `real_life`
  - `mini_quiz`
  - `assessment`
- Added 6 flashcards.
- Added 3 quiz questions:
  - `q9-1.1-k4-001`
  - `q9-1.1-k4-002`
  - `q9-1.1-k4-003`
- Added exactly 4 ContentRef mappings:
  - lesson
  - infographic
  - flashcard
  - quiz
- Infographic placeholder:
  - `placeholder-9bio-1.1-k4-infographic`

### 9BIO-1.1-K4 Validation Result
- `npx tsc --noEmit` passes.
- Coverage:
  - lesson: `available`
  - infographic: `placeholder`
  - flashcard: `available`
  - quiz: `available`
  - complete: `false`
- Registry: valid, with only the expected placeholder infographic warning.
- Question validation: valid.
- No unresolved question reference.

### Next Target
- Immediate next outcome: `9BIO-1.1-K5`
- Do not map outcomes in bulk.

