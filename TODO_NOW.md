# TODO NOW

## 2026-06-17

### Immediate Next Tasks (Priority Order)

1. **Create Grade 10 seed questions** (similar to Grade 9 questions)
   - Location: `src/data/questions/grade10-seed.ts`
   - Export as `grade10SeedQuestions`
   - Update QuizConfig to use both Grade 9 and Grade 10 questions

2. **Implement Flashcard Review UI screens**
   - Create `src/features/flashcards/FlashcardReview.tsx` (main review screen)
   - Create `src/features/flashcards/FlashcardDeckList.tsx` (deck listing)
   - Integrate with existing `useProgressStore` spaced repetition logic
   - Add Expo Router routes: `(flashcards)/deck-list`, `(flashcards)/review`

3. **Complete Grade 10 content authoring** (remaining 7 topics)
   - Continue from `src/data/grade10/topic-1.2-content.ts` through end of curriculum
   - Follow 9-layer structure from Grade 9 examples
   - Reference: `src/data/grade9/topic-1.1-content.ts` for structure

4. **Add database seed/import automation**
   - Create migration script to import Grade 9/10 content from TypeScript files to SQLite
   - Hook into app startup to ensure data is seeded on first launch

5. **Test Quiz Runner End-to-End**
   - Verify navigation flow: config → attempt → result
   - Check progress recording in `useProgressStore`
   - Ensure accessibility features work in quiz screens

### Reference Files
- Quiz store: `src/features/quiz/useQuizStore.ts`
- Progress store: `src/store/progressStore.ts`
- Theme/colors: `src/lib/theme.ts`
- Grade 9 questions template: `src/data/questions/grade9-seed.ts`

## 2026-06-25

### Documentation Checkpoint
- Unit `9-1.1` mapping status: complete for mapped sprint scope.
- Unit `9-1.2` mapping status: complete.
- Unit `9-1.3` mapping status: complete.
- Total mapped outcomes: 18.
- Unit `9-1.3` final audit:
  - Status: APPROVED.
  - Required revisions: None.
  - Implementation status: COMPLETE.

### Current Validation State
- Typecheck passes with `npm.cmd run typecheck`.
- Registry mappings are complete.
- Question mappings are complete.
- Placeholder infographic warnings are expected.

### Current Technical Debt
- Placeholder infographics need real assets later.
- `contentRegistry.ts` is growing.
- `grade9-seed.ts` is growing.
- Selected Q3 questions may be upgraded to medium-hard later.

### Historical Immediate Next Task
1. At this checkpoint, the next implementation task was to start Unit `9-1.4` / `9BIO-1.4-K1`.
2. At this checkpoint, the workflow remained author -> map -> validate -> approve.
3. At this checkpoint, `contentRegistry.ts` and `grade9-seed.ts` remained unsplit unless file growth became a blocker.

## 2026-07-09

### Current State
- Total mapped outcomes: 31.
- Units `9-1.1` through `9-1.4` are mapped.
- `COS-RFC-0001` Revision 2: Accepted.
- Architecture Freeze #1: Frozen.
- `COS-RFC-0003` Revision 2: Accepted.
- `COS-RFC-0002` Revision 2: Accepted.
- Persistent Codex instruction system: established.

### Not Started
- Capability Matrix.
- Trust Levels.
- Workflow implementation.
- Runtime Agent Engine.
- Runtime COS implementation.

### Current Documentation Focus
1. Keep project docs aligned with the 31-outcome Grade 9 and accepted COS state.
2. Preserve historical checkpoints while clearly labeling them as historical.
3. Do not start a new implementation task from `TODO_NOW.md` in this reconciliation pass.

