# Roadmap

## 2026-06-16

### MVP Scope
- Biology learning app focused on Grades 9 and 10 only.
- Core delivery modules:
  - Lesson System
  - 9 Layer Learning Structure
  - Flashcards
  - Quiz System
  - Progress Tracking
  - Accessibility System

### Phase 0: Planning
- Define content schema for Grade 9 and Grade 10 lessons.
- Confirm the 9 layer learning structure and lesson page layout.
- Design progress tracking and accessibility requirements.
- Document MVP goals and onboarding steps.

### Phase 1: Lesson System
- Implement grade-based topic library for Grades 9 and 10.
- Build lesson content pages with the 9 learning layers.
- Support structured lesson flow and navigation.

### Phase 2: Flashcards
- Add flashcard decks tied to lesson subtopics.
- Implement review session UI and simple spaced repetition state.
- Connect flashcards to lesson content for quick study.

### Phase 3: Quiz System
- Build question storage and quiz attempt flow.
- Add quiz review and result feedback.
- Support question selection by grade and lesson.

### Phase 4: Progress Tracking
- Track lesson completion, flashcard review, and quiz performance.
- Build a student dashboard showing Grade 9 / Grade 10 progress.
- Add basic streak and mastery indicators.

### Phase 5: Accessibility System
- Ensure UI components are accessible for mobile devices.
- Add screen reader support, contrast-safe styling, and navigation aids.
- Validate accessibility across the MVP screens.

## Current Roadmap Checkpoint: 2026-06-21

### Architecture Tracks
- Student Learning OS: student-facing learning flow, progress, revision, quiz loop, and navigation.
- Curriculum Operating System (COS): curriculum mapping, content coverage, registry validation, question validation, and internal reporting.
- Content Mapping: Grade 9 Biology outcomes are mapped one at a time through the approved author -> map -> validate -> approve workflow.

### Phase 3A: Grade 9 Biology Mapping Sprint
Completed mapping work:
- `9BIO-1.1-K1` connected.
- `9BIO-1.1-K2` connected and validation passed.
- `9BIO-1.1-K3` implemented, validated, and approved.
- `9BIO-1.1-K4` implemented, validated, and approved.
- `9BIO-1.1-K5` implemented, validated, and approved.

Immediate next step:
- Map `9BIO-1.1-K6` only.

Current rule:
- Do not activate `K7` or later outcomes as active tasks until `9BIO-1.1-K6` is authored, mapped, validated, and approved.
