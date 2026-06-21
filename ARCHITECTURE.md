# Architecture

## Current Architecture Checkpoint

Project: `biology-app`

The app is organized around two separate but connected systems:

1. Student Learning OS
2. Curriculum Operating System (COS)

## Student Learning OS

Student-facing structure:

- Bugun
- Ogren
- Pekistir
- Yol Haritam
- Gelisimim

The Student Learning OS answers:

- What should the student study?
- Why should they study it?
- How should they study it?
- When should they review it?

## Curriculum Operating System

COS is separate from the visible Student Panel.

COS responsibilities:

- Curriculum mapping
- Content coverage checks
- Registry validation
- Question validation
- Internal COS reporting
- Future teacher approval workflows

Current internal COS tooling includes:

- Content coverage selectors
- Registry validation
- Question validation
- Internal COS report screen

## Current Phase

Phase 3A Grade 9 Biology Mapping Sprint

Current mapping status:

- `9BIO-1.1-K1` is connected.
- `9BIO-1.1-K2` is connected and validation passed.
- `9BIO-1.1-K3` is implemented and approved.

Next target:

- `9BIO-1.1-K4`

Workflow rule:

```txt
author -> map -> validate -> approve
```

Outcomes are processed one by one, not in bulk.
