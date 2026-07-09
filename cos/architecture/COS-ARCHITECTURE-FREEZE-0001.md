# COS Architecture Freeze #1

## Freeze Metadata

| Field | Value |
|---|---|
| Status | Frozen |
| Freeze Type | Organizational and Authority Baseline Freeze |
| Source RFC | COS-RFC-0001 Revision 2 |
| Source RFC Status | Accepted |
| Acceptance Review | Second Post-Revision Acceptance Review Passed |
| Freeze Review State | Architecture Freeze #1 Review Passed |
| Prepared | 2026-07-06 |
| Frozen | 2026-07-07 |

This document records the approved Architecture Freeze #1 baseline. Frozen does not mean Ratified, Implemented, or operational.

Frozen does not mean that runtime services exist, future specifications are approved, the Artifact Specification is complete, Agent Contracts exist, a Workflow Engine exists, Memory exists, a Knowledge Graph exists, or Teacher OS exists.

## Purpose

Architecture Freeze #1 preserves the accepted COS v1 organizational and authority baseline while leaving future specifications and runtime design open. It prevents silent mutation of decision rights, safety boundaries, validation authority, release governance, and canonical content precedence.

## Freeze Scope

The freeze includes only the following accepted baseline:

1. The Domain Decision-Rights Model and the rule that each decision domain has exactly one accountable human authority.
2. Human governance roles: Curriculum Owner, Authorized Teacher, Scientific Authority, Architecture Owner, Data Governance Owner, Learner Safety Owner, Human Process Owner, and Product Owner.
3. Separation of human authorities, production roles, deterministic services, optional review agents, and future runtime services.
4. Deterministic validation authority: services own declared and versioned PASS/FAIL; agents may explain results but cannot reinterpret failure as success or waive deterministic failure.
5. Registry authority boundary: the registry owns structural identity and referential integrity; it is neither curriculum authority nor educational approval authority.
6. Release lifecycle separation:

```text
draft_authored
-> scope_reviewed
-> expert_reviewed
-> educationally_approved
-> implementation_authorized
-> implemented
-> post_validation_passed
-> publication_authorized
-> learner_visible
```

7. Canonical precedence for mapped outcomes:

```text
Universal Learning Model
+ Outcome Registry
+ Approved Outcome Artifacts
```

Legacy topic content remains transitional.

8. Planner, workflow, and human-process separation: the Execution Planner proposes the execution graph; the Workflow Service or current logical workflow process records state and enforces legal transitions; the Human Process Owner coordinates blocked-instance resolution.
9. Blocking-conflict contract: every blocker requires a classifier, accountable resolver, required artifact, and explicit resume condition.
10. Repository-grounding principle: every major component is classified as existing, partial existing, logical role, future service, or not v1.
11. Separate future contract domains for Lesson Author, Flashcard Author, Quiz / Assessment Author, and Infographic Planner.
12. Grandfathering of the existing 31 mapped Grade 9 outcomes, current lesson content, flashcards, quizzes, registry mappings, audit history, teacher-approval history, and legacy content pending controlled migration.
13. Architecture Owner boundary: the Architecture Owner may block implementation or publication for integration safety and require technical remediation, but may not override pedagogical approval, curriculum scope, scientific authority, or Authorized Teacher judgment.

## Explicitly Out of Freeze Scope

Architecture Freeze #1 does not freeze or define:

- Artifact Specification details
- Artifact identity, versioning, hash-binding, or lifecycle contracts
- Agent Contract Specification
- Agent Capability Matrix
- Agent Trust Levels
- Detailed Workflow or State Machine design
- Persistent Workflow Service implementation
- Persistent Artifact Engine
- Curriculum Memory Engine or persistent Memory model
- Knowledge Graph runtime or detailed schema
- Evidence Engine
- Analytics Engine
- Reporting Engine
- Teacher OS
- Automated publication
- Automated registry writing
- Distributed agent runtime
- Runtime COS Kernel
- Detailed mandatory-stage-skip denial records
- Detailed grandfathered-artifact transition contracts
- Controlled legacy-documentation migration

No future design is accepted merely because it is named here.

## Freeze Invariants

**F1.** No decision domain may silently acquire two final accountable human authorities.

**F2.** No agent may own or override deterministic PASS/FAIL.

**F3.** No educational approval may waive deterministic structural failure.

**F4.** No Architecture Owner may override pedagogical approval, curriculum scope, scientific authority, or Authorized Teacher judgment.

**F5.** No Product priority may bypass learner-safety, privacy, scientific, or deterministic gates.

**F6.** No learner-facing implementation may be authorized solely by legacy shorthand.

**F7.** Canonical precedence for mapped outcomes may not silently revert from the Universal Learning Model, Outcome Registry, and Approved Outcome Artifacts chain.

**F8.** Legacy content remains transitional unless changed through an accepted and reviewed architecture decision.

**F9.** No blocker may exist without a classifier, accountable resolver, required artifact, and explicit resume condition.

**F10.** Existing grandfathered artifacts may not be destructively invalidated without controlled migration and preserved provenance, version, approval, and audit history.

**F11.** Acceptance or freeze grants no runtime implementation permission.

**F12.** Future services may not be represented as operational unless repository reality supports that claim.

## Known Nonblocking Debt

- Controlled migration of legacy shorthand in `ARCHITECTURE.md`, `ROADMAP.md`, `PROJECT_MEMORY.md`, and `OUTCOME_AUTHORING_STANDARD.md` remains pending.
- Mandatory-stage-skip denial-record semantics remain deferred.
- The transition contract for materially edited grandfathered artifacts remains deferred to the future Artifact Specification.
- Standalone Constitution, Manifesto, and Learner Model conformance verification remains incomplete while those artifacts are absent from the repository.
- Multi-role human operation requires strict role-specific Decision Records.
- The outcome route and legacy topic-content route remain simultaneously present as controlled dual-route technical debt.
- Future runtime services remain unimplemented by design.
- Pre-existing CRLF conversion warnings are repository hygiene debt, not freeze blockers where no diff corruption exists.
- Registry terminology in this record is broader than the accepted RFC distinction between Registry Service and Registry Integrity Service. Those concepts remain separate and must not be silently collapsed.
- Detailed retry, cancellation, and denied mandatory-stage-skip artifact semantics remain deferred to future Workflow and State Machine work.

## Change Control After Formal Freeze

After Architecture Freeze #1 is formally approved, a change to an included invariant requires one of:

- A new RFC
- An explicit revision of the governing RFC
- A superseding RFC
- An Architecture Decision Record where policy permits

The change must pass review, an acceptance gate, compatibility analysis, and an update to this freeze record when the baseline changes. Frozen authority rules may not be changed silently.

## Repository Evidence

| Baseline claim | Repository evidence | Current reality |
|---|---|---|
| Accepted authority baseline | `cos/rfc/COS-RFC-0001-organizational-structure.md` | Accepted documentation; no runtime authority service implied |
| Universal model and ContentRef types | `src/types/index.ts` | Existing type foundation |
| Registry implementation | `src/data/contentRegistry.ts` | Existing static v1 registry; not curriculum or educational authority |
| Registry validation | `src/features/contentCoverage/registryValidation.ts` | Partial deterministic structural validation |
| Question validation | `src/features/contentCoverage/questionValidation.ts` | Partial deterministic question validation |
| Coverage calculation | `src/features/contentCoverage/contentCoverageSelectors.ts` | Existing descriptive read model, not pedagogical approval |
| COS reporting | `src/app/internal/cos-report.tsx` | Existing presentation layer with partial hardcoding |
| Unit navigation | `src/app/learn/[topicId].tsx` | Existing learning-outcome navigation |
| Outcome content route | `src/app/learn/outcome/[outcomeId].tsx` | Resolves outcome-specific content through `contentRegistry.ts` |
| Legacy content route | `src/app/learn/lesson/[subtopicId].tsx` | Imports topic content directly; transitional dual-route debt |

Current validators do not enforce exactly nine lesson layers, exactly six flashcards, exactly three mapped questions, exactly four distinct ContentRef types, exactly five distinct A-E options, or canonical topic/subtopic relationships. Architecture Freeze #1 does not claim otherwise.

## Freeze Record

| Field | Value |
|---|---|
| Freeze Review | Architecture Freeze #1 Review Gate |
| Verdict | READY TO FREEZE WITH NONBLOCKING NOTES |
| Blocking Issues | None |
| Freeze Decision | Approved for Frozen status |

### Freeze Basis

- Source fidelity audit passed.
- Freeze-scope audit passed.
- Out-of-scope protection audit passed.
- All F1-F12 invariants passed.
- Repository-reality audit passed.
- Nonblocking-debt preservation audit passed.
- Change-control audit passed.
- Backward-compatibility audit passed.
- Future-dependency safety audit passed.
- Project checkpoint audit passed.
- `npm.cmd run typecheck` passed.
- `git diff --check` passed.

Freeze approval grants no runtime implementation permission and does not approve any out-of-scope specification or service.

## Recommended Next Action

**Prepare Artifact Specification.**
