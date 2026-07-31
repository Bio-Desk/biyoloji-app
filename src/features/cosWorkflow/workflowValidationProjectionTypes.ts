/**
 * Validation projection contract TypeScript types only.
 *
 * Based on COS-RFC-0006 Revision 1 Acceptance Candidate.
 * This file does not implement validation adapters.
 * This file does not execute validators.
 * This file does not import registryValidation or questionValidation.
 * This file does not convert isValid into authoritative PASS.
 * This file does not derive post_validation_passed.
 * This file does not approve, publish, or activate learner visibility.
 * This file does not create or resolve Artifact Version identity.
 */

import type {
  ArtifactVersionIdentityStatus,
  WorkflowDeterministicGateRef,
} from './workflowTypes';
import type { WorkflowDeterministicGateOutcome } from './workflowGateTypes';

/**
 * Applicability must be explicit.
 * It must not be inferred from validator output alone.
 */
export type WorkflowValidationProjectionApplicabilityStatus =
  | 'applicable'
  | 'not_applicable'
  | 'unknown';

/**
 * Freshness must be explicit.
 * Stale or unknown freshness must not become authoritative PASS.
 */
export type WorkflowValidationProjectionFreshnessStatus =
  | 'fresh'
  | 'stale'
  | 'unknown';

/**
 * Validation result reference/provenance presence must remain visible.
 */
export type WorkflowValidationProjectionReferenceStatus =
  | 'present'
  | 'unavailable';

/**
 * Projection output is descriptive only and does not grant approval,
 * publication, visibility, or transition authority.
 */
export type WorkflowValidationProjectionAuthorityStatus = 'non_authoritative';

export interface WorkflowValidationProjectionInputContract {
  readonly gateRef: WorkflowDeterministicGateRef;
  readonly applicabilityStatus: WorkflowValidationProjectionApplicabilityStatus;
  readonly freshnessStatus: WorkflowValidationProjectionFreshnessStatus;
  readonly validationResultReferenceStatus: WorkflowValidationProjectionReferenceStatus;
  readonly provenanceStatus: WorkflowValidationProjectionReferenceStatus;
  readonly artifactVersionIdentityStatus: ArtifactVersionIdentityStatus;
}

export interface WorkflowValidationProjectionResultContract {
  readonly gateRef: WorkflowDeterministicGateRef;
  /**
   * projectedOutcome is descriptive and gate-local only.
   * PASS does not equal human approval, publication_authorized,
   * learner_visible, legal transition completion, or post_validation_passed.
   */
  readonly projectedOutcome:
    | WorkflowDeterministicGateOutcome
    | 'not_projected';
  readonly authorityStatus: WorkflowValidationProjectionAuthorityStatus;
  readonly applicabilityStatus: WorkflowValidationProjectionApplicabilityStatus;
  readonly freshnessStatus: WorkflowValidationProjectionFreshnessStatus;
  readonly validationResultReferenceStatus: WorkflowValidationProjectionReferenceStatus;
  readonly provenanceStatus: WorkflowValidationProjectionReferenceStatus;
  readonly artifactVersionIdentityStatus: ArtifactVersionIdentityStatus;
}

export type WorkflowValidationProjectionContractList =
  readonly WorkflowValidationProjectionResultContract[];
