# COS-RFC-0006: Validation Adapter Boundary

## Document Metadata

| Field | Value |
|---|---|
| Document ID | COS-RFC-0006 |
| Status | Draft - Revision 1 Acceptance Candidate |
| Type | Boundary / Adapter Contract Planning |
| Implementation | Not Started |
| Authority | Non-authoritative until explicitly accepted |
| Artifact Baseline | COS-RFC-0003 Revision 2 - Accepted |
| Capability Baseline | COS-RFC-0004 Revision 5 - Accepted |
| Workflow Baseline | COS-RFC-0005 Revision 2 - Accepted |
| Prepared | 2026-07-30 |
| Revised | 2026-07-31 |

This acceptance candidate does not revise or override any Accepted RFC or Frozen
architecture invariant. It remains non-authoritative until explicitly accepted.
It does not authorize validation adapter implementation or any runtime workflow
behavior.

## 1. Purpose

Validation adapter boundaries must be defined before source-code implementation
because the current validator reports and workflow gate snapshots represent
different levels of meaning.

The current validators report local deterministic findings. Workflow gate
results may later participate as declared dependencies in governed workflow
decisions, but they do not carry approval or transition authority. A direct
mapping without an explicit input, applicability, provenance, freshness, and
identity contract could overstate a local `isValid` value as an authoritative
workflow result.

Revision 1 records the minimum descriptive source-code boundary decisions needed
for a future type-only projection contract. These decisions remain
non-authoritative until this revision passes a separate review and explicit
acceptance process.

## 2. Current Validator Reality

The current repository contains:

- `RegistryValidationReport`, which exposes issues, issue counts, and `isValid`.
- `QuestionValidationReport`, which exposes question and issue counts, issues,
  and `isValid`.
- Report construction in which `isValid` means that the report contains zero
  issues with `error` severity.

These outputs provide local validation status for their current implemented
checks. They are partial existing validators and do not provide:

- exact Artifact Version identity binding
- validation result identity or validation result reference
- gate applicability decision
- freshness or staleness status
- structured provenance
- controlling gate scope
- human approval
- publication authorization
- learner visibility authorization

The current reports must not be described as complete authoring-contract
enforcement, authoritative workflow records, or exact-version-bound validation
evidence.

## 3. Non-Equivalence Rules

The following separations are mandatory:

- `isValid` is not automatically a `WorkflowDeterministicGateOutcome` of `PASS`.
- `PASS` is not human approval.
- `PASS` is not `publication_authorized`.
- `PASS` is not `learner_visible`.
- `PASS` does not complete a legal workflow transition.
- `PASS` does not derive `post_validation_passed` automatically.
- `FAIL` cannot be overridden or relabelled as `PASS` by an agent.
- Validation output does not create or resolve Artifact Version identity.

Validation state, governance state, publication authorization, and learner
visibility remain separate dimensions. Publication authorization does not
activate learner visibility.

## 4. Adapter Role Decision

Future validation projection code is descriptive only.

It may represent a projection of an already-produced validation result, subject
to the explicit contract inputs defined by a separately approved source-code
slice. A descriptive projection is not a controlling workflow gate by itself.
It must not:

- execute registry validation, question validation, or any other validator
- mutate workflow state
- complete or request a legal workflow transition
- approve an artifact
- authorize or perform publication
- activate learner visibility
- create authoritative validation, approval, publication, or visibility records

The source validation result remains distinct from its descriptive projection.

## 5. Input Contract Decision

After this boundary is explicitly accepted, the first source-code slice may
define workflow-owned validation projection input and result contract types
only.

That first slice:

- must not import `registryValidation.ts`
- must not import `questionValidation.ts`
- must not couple directly to `RegistryValidationReport` or
  `QuestionValidationReport`
- must not execute or wrap concrete validators

Direct coupling to concrete validator report shapes is deferred. Any
validator-specific adapter requires a later, separate approval.

## 6. Applicability Decision

Gate applicability must be explicit input to a future projection contract.

- The projection must not infer applicability from a validator result alone.
- Unknown or unresolved applicability must remain visible in the projection
  contract.
- Unknown or unresolved applicability must not produce or be interpreted as an
  authoritative `PASS`.
- Applicability does not grant transition, approval, publication, or visibility
  authority.

This revision does not create an applicability decision service or assign new
applicability authority.

## 7. Freshness Decision

Freshness or staleness must be explicit input to a future projection contract.

- The projection must not infer freshness from `isValid`.
- Stale or unknown freshness must remain visible.
- Stale or unknown freshness must not be converted into or interpreted as an
  authoritative `PASS`.
- Freshness does not equal human approval or publication authorization.
- Freshness does not authorize learner visibility or legal transition
  completion.

This revision does not create a clock, freshness evaluator, cache, or persistence
system.

## 8. Provenance and Result Reference Decision

A future projection contract must represent whether a validation result
reference and required provenance are present or unavailable.

- Missing validation result reference must remain visible.
- Missing provenance must remain visible.
- Missing provenance or result reference must not be silently treated as
  `PASS` authority.
- A descriptive projection must not invent a validation result reference or
  provenance record.

The exact validator-specific reference and provenance payloads remain deferred
to a later, separately approved adapter contract. The first type-only slice may
represent presence or unavailability without importing concrete validators.

## 9. Artifact Version Identity Decision

Artifact Version identity creation remains unresolved future architecture work.

- A future projection contract may reference only
  `ArtifactVersionIdentityStatus` or an equivalent status contract accepted in
  the future.
- It must not introduce `artifactVersionId`.
- It must not introduce an identity resolver, generator, registry, or service.
- `identity_required_but_unresolved` must not be treated as
  `exact_identity_known`.
- A projection must not infer, create, generate, or resolve Artifact Version
  identity.

## 10. `isValid` and Gate-Local `PASS` / `FAIL` Decision

`isValid` is not automatically `PASS`.

A future descriptive projection may represent a gate-local `PASS` or `FAIL`
only under explicit applicability, freshness, provenance, validation-result
reference, and Artifact Version identity-status constraints.

- `PASS` remains gate-local and non-authoritative.
- `PASS` does not equal human approval.
- `PASS` does not equal `publication_authorized`.
- `PASS` does not equal `learner_visible`.
- `PASS` does not complete a legal workflow transition.
- `PASS` does not derive `post_validation_passed`.
- `FAIL` cannot be overridden or relabelled as `PASS` by an agent.

The first type-only source-code slice must not implement the conversion from
`isValid` to a gate-local outcome.

## 11. `post_validation_passed` Decision

`post_validation_passed` must not be derived in the first validation projection
type slice.

- Aggregation of multiple gate results is deferred.
- Mixed `PASS` / `FAIL` behavior is deferred.
- A single projected gate result does not establish
  `post_validation_passed`.
- Any later aggregation, gate-bundle, or workflow-state derivation requires
  separate explicit approval.

## 12. First Permitted Source-Code Slice After Acceptance

After this boundary is explicitly accepted, the first permitted source-code
slice is:

- File: `src/features/cosWorkflow/workflowValidationProjectionTypes.ts`
- Scope: type-only
- Allowed contents:
  - comments
  - type-only imports
  - readonly type and interface definitions
- Forbidden contents:
  - functions
  - constants
  - mappers
  - adapters
  - selectors
  - validator imports
  - registry or question validation imports
  - store, persistence, UI, or runtime imports

Allowed type-only imports for that future slice, only if the exported names still
exist when the slice is prepared:

- From `./workflowTypes`:
  - `WorkflowDeterministicGateRef`
  - `ArtifactVersionIdentityStatus`
- From `./workflowGateTypes`:
  - `WorkflowDeterministicGateOutcome`

This revision does not create or modify that source file. Acceptance of this
boundary would permit only a separately approved type-only slice; it would not
authorize helper, adapter, mapper, selector, runtime, store, persistence, or UI
implementation.

## 13. Required Future Implementation Constraints

Any future source-code slice must:

- receive separate explicit approval
- remain read-only and side-effect-free until a later contract explicitly
  authorizes otherwise
- avoid validator execution
- avoid workflow state mutation
- avoid learner progress and quiz history store imports
- avoid UI and learner-facing behavior changes
- avoid store, persistence, Zustand, and AsyncStorage integration
- avoid `canPublish`, `canTransition`, and
  `canBecomeLearnerVisible` helpers
- avoid `isReadyForPublication` and `isReadyForLearnerVisibility` helpers
- avoid automatic gate aggregation or derivation of
  `post_validation_passed`
- avoid Artifact Version identity service, resolver, or generator creation

Typecheck success alone cannot establish applicability, provenance, freshness,
exact-version binding, or governance authority. Every future slice also requires
semantic architecture review against the Accepted baselines.

## 14. Explicitly Out of Scope

- runtime workflow engine
- transition executor
- permission engine
- Trust Levels
- Runtime Agent Engine
- Runtime COS
- validation adapter implementation
- validator execution
- registry or question validator coupling
- validation result aggregation
- static gate catalogue implementation
- learner-facing UI
- learner progress state
- quiz result history state
- Artifact Version identity creation
- publication authorization or publication execution
- learner visibility activation
- human or agent approval decisions
- workflow state persistence

## 15. Revision 1 Acceptance Criteria

Review of Revision 1 must confirm:

- Revision 1 is documentation-only.
- No source-code file is created or modified.
- No Accepted RFC or Frozen architecture document is modified.
- The minimum adapter-role, input, applicability, freshness, provenance,
  validation-result-reference, identity, and gate-local outcome decisions are
  explicit.
- The first future source-code slice is type-only.
- `registryValidation.ts` and `questionValidation.ts` imports remain deferred.
- Deterministic `PASS`, human approval, publication authorization, and learner
  visibility remain separate.
- `post_validation_passed` derivation and gate-result aggregation remain
  deferred.
- Artifact Version identity creation authority remains unresolved future
  architecture work.
- Learner progress state remains separate from COS workflow state.
- Revision 1 does not authorize source-code implementation before explicit
  acceptance and separate implementation approval.

## 16. Revision History

| Revision | Date | Status | Summary |
|---|---|---|---|
| Initial Draft | 2026-07-30 | Draft | Recorded the open validation adapter boundary and prohibited source-code implementation. |
| Revision 1 | 2026-07-31 | Draft - Acceptance Candidate | Added the minimum conservative decisions required to review a future type-only validation projection contract while preserving authority, identity, aggregation, learner-state, and runtime boundaries. |
