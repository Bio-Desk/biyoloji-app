# Codex Operating Rules

## Purpose

These are stable repository-wide execution rules for Codex tasks. Task-critical constraints come from repository documents, not chat memory. Chat context may identify the requested work, but it must be checked against current repository evidence.

## Start-of-Task Rule

At the start of every task, reread:

1. This file.
2. `TASK_PROTOCOLS.md`.
3. `CURRENT_TASK.md`.
4. The task-specific Accepted RFCs, Frozen architecture, source files, and project checkpoints.

Do not rely on a prior conversation summary when repository documents can establish the current state.

## Precedence

```text
Accepted/Frozen Architecture
> Accepted RFCs
> CODEX_OPERATING_RULES.md
> TASK_PROTOCOLS.md
> Explicit current user task
> CURRENT_TASK.md
> Incidental or compacted chat context
```

A lower layer must never override a higher layer. A prompt, tool, model capability, runtime instruction, or technical ability does not expand authority.

`CURRENT_TASK.md` is a repository checkpoint, not a substitute for the explicit current user task. If the explicit current user task conflicts with `CURRENT_TASK.md`, stop and report the conflict instead of guessing, suppressing the user task, or executing from stale state. Incidental chat context, prior summaries, and compacted conversation history can provide clues, but they cannot override repository instructions or the explicit current user task.

## Stable Rules

- Preserve Accepted RFC semantics and Frozen architecture invariants.
- Do not silently expand human, agent, service, tool, publication, learner-data, or workflow authority.
- Do not implement runtime systems unless the active task explicitly authorizes that implementation and higher-precedence documents permit it.
- Change only files required by the active task. Do not clean, rewrite, revert, stage, commit, or otherwise alter unrelated dirty files.
- Report repository reality accurately. Never describe conceptual, future, partial, or manual capabilities as operational.
- If authoritative sources conflict and precedence does not resolve the conflict, stop the affected work and report the exact conflict instead of guessing.
- Preserve history, provenance, lineage, approval boundaries, and non-destructive migration requirements.
- Run every validation required by the active protocol or task. Do not reinterpret deterministic failure as success.
- Report the exact files created, modified, or deleted and clearly distinguish pre-existing worktree changes.
- Do not modify files in `cos/codex/` unless the active task explicitly requires an instruction-system change.
- Do not expand into the recommended next task. A recommendation is not authorization to start it.

## Completion Rule

A task is complete only when its authorized scope is finished, required validation has run, unresolved issues are disclosed, and the final report accurately describes changes and non-changes.
