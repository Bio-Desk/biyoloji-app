# Persistent Codex Task Instructions

This directory is the repository-owned entry point for Codex task execution. It records stable operating rules, reusable task protocols, and the current task checkpoint without creating runtime COS behavior.

At the beginning of every future Codex task:

1. Read `CODEX_OPERATING_RULES.md`.
2. Read `TASK_PROTOCOLS.md`.
3. Read `CURRENT_TASK.md`.
4. Read the task-specific Accepted/Frozen architecture and repository sources.
5. Execute only the explicit current user task after checking it against repository instructions and `CURRENT_TASK.md`.

Minimal future invocation pattern:

```text
Use IDE context.

Read and follow:
- cos/codex/CODEX_OPERATING_RULES.md
- cos/codex/TASK_PROTOCOLS.md
- cos/codex/CURRENT_TASK.md

Execute only the active task.
Do not modify instruction files unless explicitly required.
```

These files do not grant authority, implementation permission, publication permission, or permission to alter Accepted/Frozen architecture.
