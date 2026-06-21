# Outcome Authoring Standard

Reference implementation: `9BIO-1.1-K2`

Latest approved mapped outcome: `9BIO-1.1-K4`

## Required Files Per Outcome

Each mapped outcome should have one outcome content file:

```txt
src/data/grade9/outcomes/{outcome-slug}-content.ts
```

Each mapped outcome may also require updates to:

```txt
src/data/questions/grade9-seed.ts
src/data/contentRegistry.ts
```

Curriculum files should not be modified during content mapping.

## Required Exports

Each outcome content file exports:

```ts
layers_9bio_1_1_kx
flashcards_9bio_1_1_kx
```

Example:

```ts
layers_9bio_1_1_k3
flashcards_9bio_1_1_k3
```

## Lesson Layer Standard

Each outcome must include exactly 9 lesson layers:

1. `concept`
2. `visual`
3. `process`
4. `terms`
5. `misconceptions`
6. `exam_tips`
7. `real_life`
8. `mini_quiz`
9. `assessment`

## Flashcard Standard

Each outcome must include at least 5 flashcards.

Each flashcard should include:

- unique `id`
- `subtopicId`
- `orderIndex`
- `term`
- `definition`
- useful `example`

## Quiz Question Standard

Each Phase 3A outcome uses exactly 3 MVP quiz questions.

Question requirements:

- unique ID
- `outcomeCode` matching the mapped outcome
- `topicId: '9-1.1'` for this sprint
- `subtopicId: '9-1.1-intro'` for this sprint
- `gradeLevel: 9`
- `examType: 'TYT'`
- `type: 'multiple_choice'`
- valid difficulty
- 5 options A-E
- `correctAnswer` must exist in options
- clear explanation
- meaningful tags

## Infographic Placeholder Standard

Until real assets exist, mapped outcomes use a placeholder infographic:

```txt
placeholder-9bio-1.1-kx-infographic
```

Expected result:

- coverage status: `placeholder`
- registry validation: expected warning only
- complete flag: `false`

## Content Registry Standard

Each mapped outcome must have exactly 4 ContentRef entries:

1. lesson
2. infographic
3. flashcard
4. quiz

Each mapped outcome must also have matching registry items:

- `lesson-...`
- `infographic-...`
- `flashcard-...`
- `quiz-...`

## Validation Checklist

For one mapped outcome:

- lesson: `available`
- infographic: `placeholder` or `available`
- flashcard: `available`
- quiz: `available`
- registry validation: no errors
- question validation: no errors
- `npx tsc --noEmit` passes

## Current Phase 3A Status

- `9BIO-1.1-K1` is connected.
- `9BIO-1.1-K2` is connected and validation passed.
- `9BIO-1.1-K3` is implemented and approved.
- `9BIO-1.1-K4` is implemented and approved.

Next target:

- `9BIO-1.1-K5`

Workflow:

```txt
author -> map -> validate -> approve
```

Outcomes are processed one by one, not in bulk.
