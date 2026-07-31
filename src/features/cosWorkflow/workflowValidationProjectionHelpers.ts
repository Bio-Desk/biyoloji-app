/**
 * Pure read-only validation projection helper only.
 *
 * This file always produces a descriptive not_projected result.
 * It does not return PASS or FAIL, read validator output, derive
 * post_validation_passed, grant authority, complete transitions, or create or
 * resolve Artifact Version identity.
 */

import type {
  WorkflowValidationProjectionInputContract,
  WorkflowValidationProjectionResultContract,
} from './workflowValidationProjectionTypes';

export function createNotProjectedWorkflowValidationProjectionResult(
  input: WorkflowValidationProjectionInputContract,
): WorkflowValidationProjectionResultContract {
  return {
    gateRef: input.gateRef,
    projectedOutcome: 'not_projected',
    authorityStatus: 'non_authoritative',
    applicabilityStatus: input.applicabilityStatus,
    freshnessStatus: input.freshnessStatus,
    validationResultReferenceStatus: input.validationResultReferenceStatus,
    provenanceStatus: input.provenanceStatus,
    artifactVersionIdentityStatus: input.artifactVersionIdentityStatus,
  };
}
