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

