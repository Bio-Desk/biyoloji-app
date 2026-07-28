/**
 * Static COS Workflow / State Machine TypeScript types only.
 *
 * Derived from COS-RFC-0005 Revision 2 Accepted.
 * This file does not implement a runtime workflow engine.
 * This file does not create transition authority.
 * This file does not create Artifact Version identity.
 * This file does not grant agent permissions.
 */

export type WorkflowLifecycleState =
  | 'draft_authored'
  | 'scope_reviewed'
  | 'expert_reviewed'
  | 'educationally_approved'
  | 'implementation_authorized'
  | 'implemented'
  | 'blocked'
  | 'revision_requested'
  | 'cancelled';

export type WorkflowGovernanceState =
  | 'review_requested'
  | 'under_review'
  | 'approval_requested'
  | 'blocked'
  | 'revision_requested';

export type WorkflowValidationState =
  | 'validation_requested'
  | 'validation_failed'
  | 'post_validation_passed';

export type WorkflowVisibilityState =
  | 'publication_authorized'
  | 'learner_visible';

export type WorkflowTransitionRequestType =
  | 'request_review'
  | 'request_validation'
  | 'request_approval'
  | 'request_transition'
  | 'request_retry';

export type WorkflowAgentActionClass =
  | 'ALLOWED'
  | 'REQUEST_ONLY'
  | 'DENIED'
  | 'NOT_APPLICABLE';

export type WorkflowAccountableAuthority =
  | 'Curriculum Owner'
  | 'Scientific Authority'
  | 'Authorized Teacher'
  | 'Architecture Owner'
  | 'Data Governance Owner'
  | 'Learner Safety Owner'
  | 'Human Process Owner';

/**
 * Authority notes:
 * - Human Process Owner is coordination-only.
 * - Architecture Owner does not replace scientific or educational approval.
 * - Data Governance Owner applies only when learner data is implicated.
 * - Learner Safety Owner applies only when learner safety is implicated.
 */

export type WorkflowDeterministicGateRef =
  | 'registry_validation'
  | 'question_validation'
  | 'typecheck'
  | 'diff_check';

/**
 * Deterministic gate notes:
 * - Deterministic gates are dependencies, not agent actors.
 * - Deterministic PASS does not equal human approval.
 * - Deterministic FAIL cannot be overridden by an agent.
 */

export type ArtifactVersionIdentityStatus =
  | 'exact_identity_known'
  | 'identity_required_but_unresolved'
  | 'identity_not_applicable';

/**
 * Artifact Version identity notes:
 * - Artifact Version identity creation authority remains unresolved future architecture work.
 * - This type does not create an identity service.
 * - Candidate-like draft/proposal content does not create Artifact Version identity.
 */

export type WorkflowStateValue =
  | WorkflowLifecycleState
  | WorkflowGovernanceState
  | WorkflowValidationState
  | WorkflowVisibilityState;

export interface WorkflowStateSnapshot {
  lifecycleState: WorkflowLifecycleState;
  governanceState?: WorkflowGovernanceState;
  validationState?: WorkflowValidationState;
  visibilityState?: WorkflowVisibilityState;
  artifactVersionIdentityStatus: ArtifactVersionIdentityStatus;
  activeBlockerIds?: string[];
  lastTransitionRequestId?: string;
  updatedAt?: string;
}

export interface WorkflowTransitionRequest {
  id: string;
  type: WorkflowTransitionRequestType;
  requestedBy: string;
  requestedAt: string;
  sourceState: string;
  targetState: string;
  agentActionClass: WorkflowAgentActionClass;
  accountableAuthority?: WorkflowAccountableAuthority;
  deterministicGateRefs?: WorkflowDeterministicGateRef[];
  artifactVersionIdentityStatus?: ArtifactVersionIdentityStatus;
  reason?: string;
}

/**
 * Transition request notes:
 * - A request does not complete a legal transition.
 * - A request does not create approval.
 * - A request does not create publication.
 * - A request does not create learner visibility.
 * - A request does not create registry mutation.
 * - A request does not create Artifact Version identity.
 */

export interface WorkflowBlockedRecord {
  id: string;
  reason: string;
  blockedAt: string;
  blockedByAuthority: WorkflowAccountableAuthority;
  affectedState: string;
  requiredResolution: string;
  deterministicGateRefs?: WorkflowDeterministicGateRef[];
}

export interface WorkflowRevisionRecord {
  id: string;
  requestedAt: string;
  requestedByAuthority: WorkflowAccountableAuthority;
  responsibleActor: string;
  reason: string;
  priorState: string;
  targetState: string;
}

export interface WorkflowCancellationRecord {
  id: string;
  cancelledAt: string;
  cancelledByAuthority: WorkflowAccountableAuthority;
  reason: string;
  priorState: string;
  preservesHistory: true;
}

/**
 * Blocked / revision / cancellation notes:
 * - Cancellation is not deletion.
 * - Cancellation does not imply archive or deprecation.
 * - revision_requested does not automatically create Artifact Version identity.
 */

export interface WorkflowTransitionDescriptor {
  id: string;
  sourceState: WorkflowStateValue;
  targetState: WorkflowStateValue;
  requestType: WorkflowTransitionRequestType;
  agentActionClass: WorkflowAgentActionClass;
  accountableAuthority: WorkflowAccountableAuthority;
  deterministicGateRefs: WorkflowDeterministicGateRef[];
  requiresExactArtifactVersionIdentity: boolean;
  evidenceRequired: string[];
  denialConditions: string[];
}
