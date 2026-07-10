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

## Current Roadmap Checkpoint: 2026-06-25

### Grade 9 Biology Mapping Progress
- Unit `9-1.1` completion status: complete for mapped sprint scope.
- Unit `9-1.2` completion status: complete.
- Unit `9-1.3` completion status: complete.
- Total mapped outcomes: 18.

### Unit 9-1.3 Final Audit
- Status: APPROVED.
- Required revisions: None.
- Implementation status: COMPLETE.
- Coverage: all five outcomes have lesson, placeholder infographic, flashcards, and quiz.
- Validation: typecheck passes, registry mappings complete, question mappings complete.
- Placeholder infographic warnings are expected.

### Technical Debt To Track
- Placeholder infographics need real assets in a later visual-production phase.
- `contentRegistry.ts` is growing; split later when maintenance cost becomes meaningful.
- `grade9-seed.ts` is growing; split later when question bank work requires it.
- Future medium-hard upgrades are recommended for selected `*-003` questions.

### Historical Next Roadmap Step
- At this checkpoint, the next roadmap step was to begin Unit `9-1.4` with `9BIO-1.4-K1` after the documentation checkpoint.
- At this checkpoint, Unit `9-1.4` remained blocked until the checkpoint update was validated.

## COS Architecture Checkpoint: 2026-07-06

- `COS-RFC-0001` Revision 2 accepted.
- Second Post-Revision Acceptance Review passed; blocking issues: none.
- Architecture Freeze #1 Review Gate passed; blocking issues: none.
- Architecture Freeze #1 is Frozen; nonblocking notes remain preserved.
- `COS-RFC-0003` Artifact Specification Revision 2: Accepted. Acceptance Review passed; blocking issues: none; complexity: Slightly Over-Engineered; nonblocking notes preserved; Agent Contract dependency readiness: Yes With Nonblocking Notes.
- `COS-RFC-0002` Agent Contract Specification Revision 1 independent review completed with verdict NEEDS REVISION and 3 blocking issues; Revision 2 prepared; status Proposed; post-revision architecture review pending.
- Capability Matrix: not started.
- Runtime Agent Engine: not started.
- Runtime Artifact Engine: not started.
- Runtime COS implementation: not started.
- Next task: Post-Revision Agent Contract Specification Review Gate.

## COS Agent Contract Acceptance Checkpoint: 2026-07-08

- `COS-RFC-0002` Agent Contract Specification Revision 2: Accepted.
- Review state: Agent Contract Specification Acceptance Review Passed.
- Acceptance verdict: ACCEPT WITH NONBLOCKING NOTES; blocking issues: none; all 40 acceptance criteria passed.
- Five nonblocking notes, open questions, known debt, and the `SLIGHTLY OVER-ENGINEERED` complexity note remain active.
- Frozen authority rules and `COS-RFC-0003` Artifact semantics were not changed.
- Capability Matrix: not started.
- Trust Levels: not finalized or implemented.
- Workflow implementation: not started.
- Runtime Agent Engine: not started.
- Next task: Establish persistent Codex task instruction system.

### Persistent Codex Task Instruction Checkpoint
- Persistent repository instructions are established under `cos/codex/`.
- Accepted RFC and Frozen architecture state remains unchanged.
- Capability Matrix: not started.
- Runtime Agent Engine: not started.
- Runtime COS implementation: not started.
- Next task: Audit and checkpoint repository working tree before starting Capability Matrix preparation.

## Current Roadmap Checkpoint: 2026-07-09

### Current Grade 9 State
- Total mapped outcomes: 31.
- Units `9-1.1` through `9-1.4` are mapped.
- Registry-backed outcome mapping is complete for the current Grade 9 sprint scope.

### Current COS State
- `COS-RFC-0001` Revision 2: Accepted.
- Architecture Freeze #1: Frozen.
- `COS-RFC-0003` Revision 2: Accepted.
- `COS-RFC-0002` Revision 2: Accepted.
- Persistent Codex task instruction system: established.

### Not Started
- Capability Matrix.
- Trust Levels.
- Workflow implementation.
- Runtime Agent Engine.
- Runtime COS implementation.

### Current Roadmap Constraints
- Preserve Accepted/Frozen COS semantics.
- Do not start Capability Matrix in this checkpoint.
- Do not activate a new implementation task from this roadmap reconciliation.
