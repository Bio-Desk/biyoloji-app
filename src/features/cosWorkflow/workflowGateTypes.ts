/**
 * Deterministic gate result TypeScript types only.
 *
 * Derived from COS-RFC-0005 Revision 2 Accepted.
 * This file does not execute deterministic gates.
 * This file does not adapt registryValidation or questionValidation outputs.
 * This file does not create workflow transitions.
 * This file does not turn PASS into human approval.
 * This file does not turn PASS into publication authorization.
 * This file does not turn PASS into learner visibility.
 * This file does not create or resolve Artifact Version identity.
 */

import type { WorkflowDeterministicGateRef } from './workflowTypes';

/**
 * PASS means only that the referenced deterministic gate passed.
 * FAIL means only that the referenced deterministic gate failed.
 * PASS does not equal human approval.
 * PASS does not equal publication authorization.
 * PASS does not equal learner visibility.
 * FAIL cannot be overridden by an agent.
 */
export type WorkflowDeterministicGateOutcome = 'PASS' | 'FAIL';

export interface WorkflowDeterministicGateResultSnapshot {
  readonly gateRef: WorkflowDeterministicGateRef;
  readonly outcome: WorkflowDeterministicGateOutcome;
}

export type WorkflowDeterministicGateResultList =
  readonly WorkflowDeterministicGateResultSnapshot[];

/**
 * Deterministic gates are dependencies, not agent actors.
 * Gate result snapshots do not complete legal transitions.
 * Gate result snapshots do not create approval, publication, learner visibility,
 * registry mutation, or Artifact Version identity.
 * post_validation_passed is not automatically derived in this slice.
 * Artifact Version identity authority remains unresolved future architecture work.
 */
