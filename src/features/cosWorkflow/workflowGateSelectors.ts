/**
 * Pure read-only selectors for deterministic gate result snapshots only.
 *
 * Based on COS-RFC-0005 Revision 2 Accepted.
 * This file does not execute deterministic gates.
 * This file does not adapt registryValidation or questionValidation outputs.
 * This file does not aggregate gate results.
 * This file does not derive post_validation_passed.
 * This file does not grant authority.
 * This file does not infer approval, publication authorization, learner visibility,
 * transition eligibility, or Artifact Version identity creation.
 * This file does not read learner progress state.
 */

import type { WorkflowDeterministicGateResultSnapshot } from './workflowGateTypes';

export function getWorkflowDeterministicGateRef(
  result: WorkflowDeterministicGateResultSnapshot
) {
  return result.gateRef;
}

export function getWorkflowDeterministicGateOutcome(
  result: WorkflowDeterministicGateResultSnapshot
) {
  return result.outcome;
}

export function isWorkflowDeterministicGatePass(
  result: WorkflowDeterministicGateResultSnapshot
): boolean {
  return result.outcome === 'PASS';
}

export function isWorkflowDeterministicGateFail(
  result: WorkflowDeterministicGateResultSnapshot
): boolean {
  return result.outcome === 'FAIL';
}

/**
 * PASS means only that the referenced deterministic gate passed.
 * FAIL means only that the referenced deterministic gate failed.
 * PASS does not equal human approval.
 * PASS does not equal publication authorization.
 * PASS does not equal learner visibility.
 * Gate result selectors do not complete legal workflow transitions.
 * Artifact Version identity authority remains unresolved future architecture work.
 */
