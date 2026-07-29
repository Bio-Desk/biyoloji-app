/**
 * Pure read-only COS Workflow selectors only.
 *
 * Based on COS-RFC-0005 Revision 2 Accepted.
 * This file does not execute workflow transitions.
 * This file does not grant authority.
 * This file does not infer approval, publication, learner visibility eligibility,
 * or Artifact Version identity creation.
 * This file does not read learner progress state.
 */

import type { WorkflowStateSnapshot } from './workflowTypes';

export function getWorkflowLifecycleState(snapshot: WorkflowStateSnapshot) {
  return snapshot.lifecycleState;
}

export function getWorkflowGovernanceState(snapshot: WorkflowStateSnapshot) {
  return snapshot.governanceState;
}

export function getWorkflowValidationState(snapshot: WorkflowStateSnapshot) {
  return snapshot.validationState;
}

export function getWorkflowVisibilityState(snapshot: WorkflowStateSnapshot) {
  return snapshot.visibilityState;
}

export function getArtifactVersionIdentityStatus(snapshot: WorkflowStateSnapshot) {
  return snapshot.artifactVersionIdentityStatus;
}

export function getActiveWorkflowBlockerIds(
  snapshot: WorkflowStateSnapshot
): readonly string[] {
  return [...(snapshot.activeBlockerIds ?? [])];
}

export function hasActiveWorkflowBlockers(snapshot: WorkflowStateSnapshot): boolean {
  return (snapshot.activeBlockerIds?.length ?? 0) > 0;
}

export function hasLastTransitionRequest(snapshot: WorkflowStateSnapshot): boolean {
  return snapshot.lastTransitionRequestId !== undefined;
}

export function isArtifactVersionIdentityKnown(snapshot: WorkflowStateSnapshot): boolean {
  return snapshot.artifactVersionIdentityStatus === 'exact_identity_known';
}

export function isArtifactVersionIdentityRequiredButUnresolved(
  snapshot: WorkflowStateSnapshot
): boolean {
  return snapshot.artifactVersionIdentityStatus === 'identity_required_but_unresolved';
}

export function isArtifactVersionIdentityNotApplicable(
  snapshot: WorkflowStateSnapshot
): boolean {
  return snapshot.artifactVersionIdentityStatus === 'identity_not_applicable';
}

export function isPublicationAuthorized(snapshot: WorkflowStateSnapshot): boolean {
  return snapshot.visibilityState === 'publication_authorized';
}

export function isLearnerVisible(snapshot: WorkflowStateSnapshot): boolean {
  return snapshot.visibilityState === 'learner_visible';
}
