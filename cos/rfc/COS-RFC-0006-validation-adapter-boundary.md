# COS-RFC-0006: Validation Adapter Boundary

## Document Metadata

| Field | Value |
|---|---|
| Document ID | COS-RFC-0006 |
| Status | Draft |
| Type | Boundary / Adapter Contract Planning |
| Implementation | Not Started |
| Authority | Non-authoritative draft until explicitly accepted |
| Artifact Baseline | COS-RFC-0003 Revision 2 - Accepted |
| Capability Baseline | COS-RFC-0004 Revision 5 - Accepted |
| Workflow Baseline | COS-RFC-0005 Revision 2 - Accepted |
| Prepared | 2026-07-30 |

This draft does not revise or override any Accepted RFC or Frozen architecture
invariant. It does not authorize validation adapter implementation or any runtime
workflow behavior.

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

This draft therefore records the minimum descriptive boundary and the questions
that must remain unresolved until a separate review and acceptance process.

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

## 4. Descriptive Projection Boundary

If a validation adapter is separately approved in the future, its initial scope
must be a descriptive projection only.

A descriptive projection:

- may read an already-produced validation result
- may represent a gate-local `PASS` or `FAIL` only after explicit applicability
  and provenance rules have been accepted
- must preserve the source result without reinterpreting a failure
- must not execute registry validation or question validation
- must not mutate workflow state
- must not complete or request a legal workflow transition
- must not approve an artifact
- must not authorize or perform publication
- must not activate learner visibility
- must not infer, create, generate, or resolve Artifact Version identity

Until the missing rules are accepted, a current validator report may be
described only as a local report from the checks it actually performs. This
draft does not itself authorize projecting `isValid` into a workflow gate
outcome.

## 5. Open Questions Before Implementation

The following questions must be resolved before an adapter implementation is
authorized:

1. What exact input object is the adapter allowed to read?
2. How is Artifact Version identity bound, or how is its unavailability
   explicitly declared without inventing an identity?
3. Who determines whether `registry_validation` or `question_validation` is
   applicable to a specific workflow context?
4. How are freshness and staleness represented and evaluated?
5. What is the stable reference for the validation result?
6. What provenance is required to identify the validator, rule set, input, and
   production context?
7. Is `post_validation_passed` an aggregate state, a gate bundle, or a later
   human-authorized transition?
8. What happens when registry validation passes but question validation fails?
9. What happens when a previously produced validation result is stale?
10. What happens when exact Artifact Version identity is unresolved?

No default answer, implicit authority, or runtime behavior is created for these
questions by this draft.

## 6. Required Future Implementation Constraints

Any future validation adapter implementation must:

- receive separate explicit approval before source code is created
- begin as read-only and side-effect-free
- read only an already-produced result
- avoid executing registry or question validators
- avoid workflow state mutation
- avoid learner progress and quiz history store imports
- avoid UI and learner-facing behavior changes
- avoid store, persistence, Zustand, and AsyncStorage integration
- avoid `canPublish`, `canTransition`, and
  `canBecomeLearnerVisible` helpers
- avoid `isReadyForPublication` and `isReadyForLearnerVisibility` helpers
- avoid automatic gate aggregation or automatic derivation of
  `post_validation_passed`
- avoid Artifact Version identity service, resolver, or generator creation

Typecheck success alone cannot establish applicability, provenance, freshness,
exact-version binding, or governance authority. A future implementation would
also require semantic architecture review against the Accepted baselines.

## 7. Explicitly Out of Scope

- runtime workflow engine
- transition executor
- permission engine
- Trust Levels
- Runtime Agent Engine
- Runtime COS
- learner-facing UI
- learner progress state
- quiz result history state
- Artifact Version identity creation
- publication authorization or publication execution
- learner visibility activation
- human or agent approval decisions
- validator execution from workflow code
- workflow state persistence

## 8. Acceptance Criteria for This Draft

Review of this draft must confirm:

- The draft does not modify source code.
- The draft does not alter Accepted RFCs or Frozen architecture.
- The draft does not authorize adapter or runtime implementation.
- The draft preserves the separation between deterministic `PASS`, human
  approval, publication authorization, and learner visibility.
- The draft does not derive `post_validation_passed`.
- The draft preserves Artifact Version identity creation authority as
  unresolved future architecture work.
- The draft preserves the separation between learner progress state and COS
  workflow state.
- The draft leaves applicability, provenance, freshness, validation-result
  identity, and exact input binding unresolved pending explicit review.
