# Codex Task Protocols

This file is subordinate to `CODEX_OPERATING_RULES.md`. Use the protocol named by the explicit current user task. If no protocol is named, select the narrowest matching protocol and state the selection. If the explicit current user task conflicts with `CURRENT_TASK.md`, stop and report the conflict before selecting or executing a protocol. These protocols do not replace task-specific Accepted/Frozen sources.

## READ_ONLY_REVIEW

- **Files may change:** No.
- **Scope:** Inspect only the named documents, repository evidence, and dependencies needed for the review.
- **Validation:** Run requested read-only checks. Record failures and warnings without repairing them.
- **Final report:** Verdict, evidence, blocking issues, nonblocking notes, validation results, and confirmation that no files changed.
- **Forbidden expansion:** No revision, acceptance transition, implementation, refactor, cleanup, or next-phase start.

## REVISION

- **Files may change:** Yes, but only the explicitly named revision targets and minimally required checkpoint documents.
- **Scope:** Resolve approved findings without changing unrelated semantics, authority, or artifacts.
- **Validation:** Run task-required checks and inspect the resulting diff for scope and history preservation.
- **Final report:** Exact files changed, findings resolved, semantics preserved, validation results, and remaining debt.
- **Forbidden expansion:** Do not accept the revision, implement runtime behavior, or begin dependent work unless separately authorized.

## ACCEPTANCE_GATE

- **Files may change:** No.
- **Scope:** Test the candidate revision against its acceptance criteria, Accepted/Frozen baselines, and repository reality.
- **Validation:** Run requested read-only checks and distinguish deterministic results from review judgment.
- **Final report:** Acceptance verdict, criterion results, blockers, nonblocking notes, complexity, dependency readiness, and unchanged-file confirmation.
- **Forbidden expansion:** Do not change metadata, perform the acceptance transition, start dependencies, or implement the specification.

## ACCEPTANCE_TRANSITION

- **Files may change:** Yes, only the accepted document and explicitly authorized checkpoint documents.
- **Scope:** Apply the approved status/review-state transition while preserving full history, open questions, known debt, and nonblocking notes.
- **Validation:** Run required checks and verify no product or runtime files were changed by the transition.
- **Final report:** Metadata transition, exact files changed, preserved debt/notes, validation results, and runtime/product non-change confirmation.
- **Forbidden expansion:** Do not revise accepted semantics, alter Frozen authority, or start the next architecture/runtime task.

## DOCUMENTATION_TASK

- **Files may change:** Yes, only documentation explicitly required by the task.
- **Scope:** Describe repository reality without changing application behavior, accepted semantics, or runtime state.
- **Validation:** Run requested checks, inspect documentation diffs, and report line-ending warnings separately.
- **Final report:** Files created/changed, purpose, preserved constraints, validation results, dirty-worktree distinction, and runtime/product non-change confirmation.
- **Forbidden expansion:** No app logic, content, registry, validator, question, runtime, migration, refactor, commit, or unrequested follow-on work.
