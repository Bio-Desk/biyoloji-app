# COS-RFC-0001: Organizational Structure and Authority Model

## 1. RFC Metadata

| Field | Value |
|---|---|
| RFC ID | COS-RFC-0001 |
| Title | Organizational Structure and Authority Model |
| Status | Accepted |
| Revision | 2 |
| Review State | Second Post-Revision Acceptance Review Passed |
| Authors | COS Architecture Working Group |
| Owners | Curriculum Owner and Architecture Owner |
| Created | 2026-07-05 |
| Revised | 2026-07-06 |
| Scope | COS organizational roles, deterministic services, human authorities, decision rights, source precedence, conflict governance, and minimum v1 operating structure |

### Related Documents

- `ARCHITECTURE.md`
- `DECISIONS.md`
- `OUTCOME_AUTHORING_STANDARD.md`
- `PROJECT_MEMORY.md`
- `ROADMAP.md`
- COS Constitution Draft v1
- COS Manifesto and Learner Model Architecture Proposal
- COS Organizational Structure v1.0
- Independent architecture review of COS-RFC-0001
- Unit 9-1.4 Final Audit and dual-content-source investigation

The Constitution and related governance drafts are source material, not yet ratified authority. This RFC grants no permission to implement runtime services, agents, or learner-facing changes.

## 2. Summary

This RFC defines how the Curriculum Operating System separates:

1. Human decision authority
2. Expert production and review roles
3. Deterministic quality services
4. Existing repository modules
5. Deferred runtime infrastructure

The model is intentionally implementable with the current repository. A logical role does not require a separately deployed agent, model, engine, or process. COS v1 may execute multiple contract domains through one controlled runtime, but the domains retain separate responsibilities and future contracts.

## 3. Motivation

COS currently consists of a Universal Learning Model adapter, curriculum data, outcome-specific content, a static content registry, deterministic validators, coverage selectors, an internal report, and documented approval practices. It does not yet contain a runtime Kernel, persistent Artifact Engine, persistent Workflow Engine, Teacher OS, or production Analytics Engine.

An organizational RFC is required before Agent Contracts so that future contracts do not:

- Assign deterministic PASS/FAIL to probabilistic agents
- Duplicate existing registry or reporting responsibilities
- Confuse teacher approval with implementation or publication
- Treat legacy and universal content sources as equally authoritative
- Create runtime infrastructure before its need and boundaries are proven
- Allow cross-domain conflicts to be settled by an oversimplified ranking

## 4. Definitions

### Expert Role

A bounded specialist responsibility that produces or reviews an artifact. An Expert Role may later be executed by an agent, a human, or a shared runtime, but its contract domain remains distinct.

### Review Function

An independent educational or technical evaluation that produces findings. Review does not itself grant educational approval or publication authorization.

### Quality Gate

A declared condition that must pass before a workflow transition. A gate may be deterministic or human-controlled; its owner and rules must be explicit.

### Deterministic Service

Code that evaluates declared and versioned invariants and produces reproducible PASS/FAIL results. It cannot reinterpret or waive failures.

### Review Agent

An optional expert interpreter that explains findings or proposes remediation. It cannot alter deterministic results.

### Registry Service

The system capability that stores and resolves content identifiers and references. Registry integrity is structural, not educational authority.

### Coverage

Descriptive evidence that required content types are present, missing, placeholder, or invalid. Coverage is not proof of scientific, pedagogical, developmental, or assessment quality.

### Artifact

A versioned, attributable record of work or decision. In COS v1, Git and Markdown documents provide the initial artifact mechanism.

### Memory

Source-attributed institutional knowledge approved for reuse. Memory is derived support and does not outrank authoritative curriculum sources.

### Governance Authority

An accountable human role authorized to decide within a declared domain.

### Blocking Conflict

A conflict that prevents a declared workflow transition until a named resolver produces the required resolution artifact and the resume condition is satisfied.

### Nonblocking Finding

An advisory or informational result that remains visible but does not prevent the current transition.

## 5. Organizational Model

### Level 1: Core Production and Expert Review

Level 1 creates curriculum artifacts and conducts domain review. These are logical expert roles, not mandatory independent runtime agents in COS v1.

| Contract domain | Type | Mission | Authority | Forbidden actions | Blocking capability |
|---|---|---|---|---|---|
| Execution Planner / Orchestrator | Expert Role | Propose required stages, dependencies, and execution graph | Propose plan and identify missing prerequisites | Perform illegal transitions, approve content, waive gates | May identify a procedural blocker; Workflow Service enforces it |
| Curriculum Scope Specialist | Expert Role | Extract exact wording, canonical IDs, scope, and boundaries | Propose a Scope Card from authoritative sources | Invent curriculum wording or resolve ambiguity without Curriculum Owner | May block drafting until scope is resolved |
| Lesson Author | Expert Role | Produce implementation-ready lesson layers | Choose explanations and approved examples within locked scope | Expand scope, change canonical IDs, self-approve | No; may return blocked status |
| Flashcard Author | Expert Role | Produce atomic retrieval-practice artifacts | Select recall targets within approved scope | Copy full lessons or introduce new concepts | No |
| Quiz / Assessment Author | Expert Role | Produce valid assessment items and explanations | Select item form and evidence-based distractors | Add untaught scope, use arbitrary distractors, self-approve | No |
| Infographic Planner | Expert Role | Produce an accessible visual specification | Propose visual hierarchy, labels, and asset requirements | Add concepts or claim an unproduced asset exists | No |
| Scientific Reviewer | Expert Review | Evaluate factual acceptability, terminology, and qualification | Classify scientific findings under approved policy | Grant educational approval or waive factual errors | May issue a scientific blocker subject to escalation rules |
| Consolidated Educational Quality Review | Review Function | Evaluate pedagogy, learning science, development, and misconceptions | Classify educational findings and request revision | Grant teacher approval, waive science, decide truth by vote | May block for declared developmental, safety, or material pedagogical failures |

#### Preserved Authoring Contract Domains

The following future Agent Contracts must remain separate:

- Lesson Author
- Flashcard Author
- Quiz / Assessment Author
- Infographic Planner

They may share a model, runner, prompt infrastructure, or runtime. They must not share one generic authoring contract because their expertise, inputs, outputs, gates, and failure modes differ.

#### Educational Review Lenses

COS v1 may perform these through one consolidated review artifact. They remain distinct expert lenses and may become separate agents later:

| Lens | Responsibility | Blocking boundary |
|---|---|---|
| Pedagogy | Sequence, prerequisite order, explanation, examples, and transfer | Material instructional invalidity under declared policy |
| Learning Science | Retrieval, spacing, feedback, transfer, and cognitive load | Severe overload or assessment-before-learning |
| Child Development | Age appropriateness, language, dignity, and psychological safety | Developmental or psychological harm |
| Misconception | Misconception evidence, correction strategy, and distractor legitimacy | Reinforcement of a material misconception |

### Level 2: Independent Quality Functions

| Component | Type | Mission | Authority | Forbidden actions | Blocking capability |
|---|---|---|---|---|---|
| Consistency Review | Expert Review | Detect cross-artifact, cross-outcome, terminology, ID, and example drift | Classify consistency findings | Resolve curriculum or scientific disputes independently | Yes for declared material conflicts |
| Validation Service | Deterministic Service | Execute versioned structural rules and return PASS/FAIL | Own results for declared rules only | Reinterpret, waive, or claim undeclared coverage | Yes for failed mandatory rules |
| Validation Review Agent | Optional Review Agent | Explain validation failures and propose remediation | Produce explanatory recommendations | Alter PASS/FAIL or edit official state | No independent authority |
| Accessibility and Inclusion Review | Expert Review | Evaluate accessibility, representation, and inclusive delivery | Classify access and inclusion findings | Reduce scientific precision without review | Yes for declared access barriers or harm |
| TYT / Assessment Alignment Review | Expert Review | Evaluate construct validity, difficulty, distractors, and exam alignment | Classify assessment findings | Introduce untaught content or override curriculum scope | Yes for invalid assessment; stylistic findings are advisory |

### Validation Service Boundary

The Validation Service is authoritative only for rules that are:

- Explicitly declared
- Versioned
- Reproducible
- Included in its validation report

Current repository validators do not enforce the complete authoring contract. Current code does not deterministically enforce:

- Exactly nine lesson layers
- Exactly six flashcards
- Exactly three mapped questions per outcome
- Exactly four distinct ContentRef types per outcome
- Exactly five distinct A-E options
- Canonical topic/subtopic relationships

Current question and registry validation provide partial structural coverage only. Manual Authoring Contract Checklist checks are governance controls, not deterministic PASS/FAIL services, and reports must not present them as automated validation.

Current deterministic implementation includes:

- `src/features/contentCoverage/registryValidation.ts`
- `src/features/contentCoverage/questionValidation.ts`
- `npm.cmd run typecheck`
- `git diff --check`

No agent may reinterpret a failed deterministic rule as success.

### Level 3: System Foundation and Deferred Services

| Component | Classification | Mission | Current authority | Forbidden actions | Blocking capability |
|---|---|---|---|---|---|
| Universal Learning Model | Existing foundation | Normalize Subject -> ExamType -> Grade -> Unit -> LearningOutcome | Resolve current model identities | Redefine official curriculum | Structural failures may block consumers |
| Registry Service | Existing v1 service | Store and resolve ContentRefs and content items | Determine current mapping resolution | Act as curriculum authority or create content | Yes for unresolved required mappings |
| Registry Integrity Service | Existing deterministic service | Check uniqueness, referential integrity, unresolved mappings, orphan items, and canonical mapping rules | PASS/FAIL for declared registry rules | Make educational judgments | Yes |
| Coverage Calculator | Existing deterministic read model | Report availability, placeholder, missing, and invalid status | Compute descriptive coverage | Approve pedagogy or science | No educational block; invalid required content may block completeness |
| Reporting | Existing presentation layer | Present coverage and validation state | Display verified state | Change state or improve metrics by reinterpretation | May block formal job closure only when a report is mandatory |
| COS Kernel | Future service | Enforce ratified policy, identity, permissions, and legal transitions | None in v1 runtime | Create educational content or self-authorize exceptions | Future |
| Curriculum Memory Engine | Future service | Maintain versioned derived knowledge and decisions | None beyond current files and documents | Outrank authoritative sources | Future |
| Artifact Engine | Future service | Persist structured artifact versions, hashes, and lineage | Git and Markdown are current v1 mechanism | Delete history or approve educational meaning | Future |
| Workflow Service / current logical workflow process | Logical role in v1; future service | Own recorded workflow state and enforce legal state transitions | Documented process and status records in v1 | Decide educational content, coordinate human resolution, or waive gates | Future deterministic enforcement; documented transition rules may block in v1 |
| Analytics Engine | Future service | Produce privacy-safe evidence and revision proposals | None in current COS production workflow | Silently change curriculum or learner-facing content | No direct educational authority |
| Privacy / Data Governance Service | Policy baseline now; future service | Enforce consent, access, minimization, and retention | Human policy where learner data is involved | Grant undeclared secondary use | May block data operations |
| Knowledge Graph | Future design subject | Model concept, curriculum, misconception, evidence, and memory relationships | None | Become a required v1 runtime dependency | No current runtime role |

## 6. Human Governance Plane

### Required Human Authorities

| Role | Type | Accountable domain |
|---|---|---|
| Curriculum Owner | Human governance role | Official wording, curriculum version, scope, and boundary resolution |
| Authorized Teacher | Human governance role | Educational approval among curriculum-aligned, scientifically acceptable, structurally valid alternatives |
| Scientific Authority | Human governance role | Scientific factual acceptability and disputed evidence |
| Architecture Owner | Human governance role | Integration safety, implementation boundary, and publication authorization |
| Data Governance Owner | Human governance role | Learner-data purpose, lawful processing, consent, minimization, access, retention, privacy incidents, and learner-data governance |
| Learner Safety Owner | Human governance role | Non-data learner safety, safeguarding, psychological harm, age-inappropriate harmful exposure, coercive or manipulative learning mechanisms, and unsafe educational interaction patterns |
| Human Process Owner | Human governance role | Operational coordination of blocked workflow instances, retries, cancellations, and permitted stage exceptions |
| Product Owner | Human governance role | Priority, timing, sequence, batch size, and resource allocation |

One person may initially hold multiple roles. Every Decision Record must identify which role was exercised. Holding several roles does not merge their decision domains or remove mandatory gates.

Agents and services do not replace human governance.

The Human Process Owner does not own educational truth, scientific truth, learner-safety or privacy decisions, or deterministic PASS/FAIL. The role coordinates resolution and records workflow actions; it cannot waive scientific, privacy, learner-safety, or deterministic blockers and cannot approve educational content.

The Architecture Owner may block implementation or publication for integration safety and require technical remediation. The Architecture Owner may not alter pedagogical approval, rewrite curriculum scope, waive scientific requirements, or replace Authorized Teacher judgment.

## 7. Domain Decision-Rights Model

COS does not resolve all conflicts through a single total ranking. Each domain has one accountable authority. Cross-domain conflicts escalate to all affected authorities.

| Decision domain | Accountable authority | Expert reviewer | Blocking authority | Escalation destination | Required artifact |
|---|---|---|---|---|---|
| Official curriculum wording | Curriculum Owner | Scope Specialist | Curriculum Owner | Curriculum Owner | Scope Card or Curriculum Decision Record |
| Curriculum scope and boundary | Curriculum Owner | Scope Specialist and Consistency Review | Curriculum Owner | Curriculum Owner | Approved Scope Card |
| Scientific factual acceptability | Scientific Authority | Scientific Reviewer | Scientific Authority under scientific policy | Scientific Authority; Curriculum Owner also participates when scope is affected | Scientific Review and Decision Record |
| Pedagogical choice | Authorized Teacher | Consolidated Educational Quality Review | Authorized Teacher for required revisions after mandatory gates | Authorized Teacher | Educational Review and Teacher Approval Record |
| Developmental appropriateness | Authorized Teacher | Child Development lens | Authorized Teacher unless a learner-safety threshold is reached | Authorized Teacher; Learner Safety Owner when safety is implicated | Developmental Review and Decision Record |
| Learner safety | Learner Safety Owner | Child Development and Accessibility reviews | Learner Safety Owner | Learner Safety Owner | Learner Safety Resolution Record |
| Deterministic structural validity | Architecture Owner for rule governance | Validation Review Agent, if used | Validation Service for declared rules | Architecture Owner | Validation Report |
| Assessment validity | Authorized Teacher | Assessment Alignment Review | Assessment gate under approved policy | Curriculum Owner when scope is implicated | Assessment Review and Teacher Decision |
| Architecture integration safety | Architecture Owner | Architecture review | Architecture Owner and deterministic technical gates | Architecture Owner | Architecture Decision Record or Implementation Report |
| Learner-data processing | Data Governance Owner | Privacy review | Privacy policy and Data Governance Owner | Data Governance Owner | Data Processing or Privacy Decision Record |
| Publication authorization | Architecture Owner | Validation and release review | Post-implementation technical gates | Architecture Owner | Publication Authorization Record |
| Product prioritization | Product Owner | Delivery planning | Higher-domain blockers remain controlling | Product Owner, subject to all higher-domain constraints | Product Decision Record when material |

Learner safety and learner-data processing are related but distinct domains. When one conflict affects both, the Learner Safety Owner and Data Governance Owner must each review their own domain; neither may override the other. A cross-domain Conflict Record must name both findings, and publication or processing remains blocked until both domains are valid.

### Constitutional Precedence

The following principles constrain every domain:

1. Ratified COS Constitution
2. Learner safety and data privacy
3. No publication of scientifically false explanations
4. No bypass of declared deterministic gates
5. No educational publication without Authorized Teacher approval

These are constraints, not a substitute for the Domain Decision-Rights Matrix.

## 8. Finding Classification and Blocking Ownership

| Finding class | Classifier | Accountable resolver | Required artifact | Resume condition |
|---|---|---|---|---|
| Critical blocker | Domain gate owner under an approved policy | Accountable human authority for that domain | Blocking Finding plus Decision or corrected artifact | Blocking condition removed and affected gates pass |
| Required revision | Authorized reviewer within declared contract | Artifact owner, with Authorized Teacher or domain owner confirming resolution as required | Review Report and revised artifact version | Revision verified and required review rerun |
| Advisory | Any authorized reviewer | Artifact owner | Review Report entry | May proceed after disclosure; no resolution required unless adopted |
| Informational | Service or reviewer | None unless promoted | Report entry | No effect on workflow |

No blocker is valid unless it names:

- The resolver
- The required resolution artifact
- The exact workflow-resume condition

Agents may propose severity. Only the authority declared by policy may finalize a critical blocker classification.

## 9. Lifecycle and Release States

COS distinguishes four decisions that were previously easy to collapse into “approved.”

### Educational Approval

- Granted by the Authorized Teacher
- Applies to a specific artifact ID, version, and content hash
- Confirms educational acceptability after required reviews
- Does not authorize implementation or publication

### Implementation Permission

- Explicit permission tied to the educationally approved artifact version
- Identifies allowed implementation scope and files
- Becomes invalid if the approved artifact changes

### Post-Implementation Validation

- Performed by deterministic services
- Confirms declared structural, registry, question, type, and diff invariants
- Cannot be waived or reinterpreted by an agent

### Publication Authorization

- Granted by the Architecture Owner after mandatory technical gates pass
- Moves a technically valid implementation toward learner visibility
- Does not retroactively replace educational approval

### Required State Flow

```text
draft_authored
-> scope_reviewed
-> expert_reviewed
-> educationally_approved
-> implementation_authorized
-> implemented
-> post_validation_passed
-> publication_authorized
-> learner_visible
```

Failure at any state returns to the responsible prior state through a recorded revision. It does not silently skip forward.

### Workflow Control Rights

The Workflow Service, or the current logical workflow process in COS v1, owns the recorded workflow state and legal transition rules. The Human Process Owner owns human resolution coordination. The Execution Planner proposes the execution graph. These responsibilities do not overlap and may remain documented logical responsibilities rather than deployed services in COS v1.

#### Retry

- The Human Process Owner or the relevant accountable resolver may request a retry.
- A retry is allowed only when the retry policy permits it, the underlying failure is retryable, and the attempt is recorded.
- Every retry produces a `Retry Record` linked to the failed attempt and its unchanged or revised inputs.

#### Cancellation

- The Human Process Owner may cancel a workflow instance.
- The Product Owner may request cancellation.
- An accountable domain authority may require cancellation for safety or integrity.
- Every cancellation produces a `Cancellation Record` and preserves all prior state, evidence, findings, approvals, and audit history.

#### Stage Skip

Stage skipping is forbidden by default. It is allowed only when the stage is explicitly optional by policy, the accountable domain owner authorizes the exception, and Workflow Policy permits the transition. A permitted skip produces a `Stage Exception Record`. Mandatory gates may never be skipped.

#### Blocked Job Resolution

For each blocked workflow instance, the Human Process Owner assigns the named resolver, confirms the required resolution artifact, and records the resume condition. The Human Process Owner may coordinate retries and revisions but may not waive scientific, privacy, learner-safety, or deterministic failures and may not grant educational approval.

### Compatibility and Supersession Rule

The legacy shorthand:

```text
author -> map -> validate -> approve
```

may describe draft package preparation, pre-implementation content assembly, or internal readiness review. It must not be interpreted as authority to implement or publish learner-facing content before required educational approval and implementation authorization.

For governance conflicts after COS-RFC-0001 becomes effective, the RFC-governed lifecycle in this section supersedes older shorthand workflow language. Existing documents, including `OUTCOME_AUTHORING_STANDARD.md`, must be migrated later through controlled documentation updates; this RFC does not modify them.

### Repository Compatibility Note

The current repository and project documentation may record work through the older shorthand because the full governed lifecycle is not implemented as a runtime service. Until migration, the Human Process Owner must interpret those records against the RFC states and may not infer `implementation_authorized`, `publication_authorized`, or `learner_visible` from a shorthand `approve` step alone.

## 10. Universal and Legacy Source Precedence

For mapped outcomes, the canonical learner-content chain is:

```text
Universal Learning Model
+ Outcome Registry
+ Outcome-specific approved artifacts
```

The current `src/data/contentRegistry.ts` is the v1 Registry Service implementation. It resolves content; it is not an independent source of curriculum authority.

Legacy topic content is:

- Transitional
- Noncanonical for newly mapped outcomes
- Prohibited from receiving new authoritative mappings for those outcomes
- Retained only until controlled migration or retirement
- Migrated through an Architecture Decision Record or equivalent migration artifact

The repository currently contains both:

- An outcome route consuming outcome-registry content
- A legacy lesson route consuming topic-level content directly

This RFC does not change either route. It establishes that new mapped content belongs to the universal/outcome-registry chain and that the dual route is migration debt governed by the Architecture Owner.

### Existing Artifact and Approval Grandfathering Policy

This policy protects completed work from destructive retroactive invalidation. It applies to the 31 mapped Grade 9 outcomes, their current lesson layers, flashcards, quizzes, registry mappings, audit history, recorded teacher-approval history, and legacy content pending controlled migration.

1. Existing artifacts are not automatically invalidated when COS-RFC-0001 becomes effective.
2. Existing artifacts receive the lifecycle status `grandfathered_existing`.
3. Grandfathering does not certify scientific correctness, pedagogical quality, deterministic contract compliance, privacy compliance, learner safety, or publication safety.
4. An artifact must be migrated or re-reviewed when it is materially edited, republished under new governance, moved into a new canonical artifact lifecycle, or affected by a critical scientific, learner-safety, privacy, or structural finding.
5. Migration must preserve provenance, version history, prior approval history, and audit records.
6. No destructive rewrite is implied.

## 11. Conflict Resolution Protocol

### General Escalation Path

1. Detect and classify the conflict.
2. Freeze only the affected artifact or transition.
3. Name the resolver, required artifact, and resume condition.
4. Create a Conflict Record.
5. Collect evidence from every affected domain.
6. Escalate to the accountable authorities in the Domain Decision-Rights Matrix.
7. Create a Decision Record.
8. Produce a new artifact version where required.
9. Re-run every affected review and deterministic gate.
10. Resume, reject, or archive the workflow.

No material conflict may be resolved through silent editing or list-position precedence.

### Mandatory Blocking Resolution Contracts

Every blocking conflict must name a classifier, accountable resolver, required artifact, and explicit resume condition. The following contracts govern the minimum known scenarios:

| Blocking scenario | Classifier | Accountable resolver | Required artifact | Resume condition |
|---|---|---|---|---|
| Scientific correctness conflicts with curriculum wording or scope | Scientific Authority | Scientific Authority for factual acceptability and Curriculum Owner for wording or scope | `Conflict Record`, Scientific Review, and `Decision Record` | A curriculum-aligned and scientifically acceptable treatment is approved by both domain owners |
| Pedagogy exceeds curriculum scope | Curriculum Owner | Curriculum Owner for the scope boundary and Authorized Teacher for revised educational approval | `Scope Conflict Record` and revised artifact version | Revised pedagogical approach remains within approved curriculum scope and completes all required educational review and approval |
| Assessment introduces untaught content | Curriculum Owner, or Assessment Alignment Review operating under Authorized Teacher governance | Authorized Teacher, with Curriculum Owner resolving scope | `Assessment Scope Correction Record` and revised assessment artifact version | Assessment item is within approved taught scope and passes assessment review |
| Declared content coverage is missing or invalid | Coverage Calculator for the declared completeness rule | Architecture Owner for rule governance, with correction by the responsible production role | Coverage Report and corrected artifact version | Required coverage is available and valid; pedagogical approval remains a separate gate |
| Production wants to proceed while Quality blocks | Named gate owner for the affected domain | Named accountable authority in the Domain Decision-Rights Model | `Gate Resolution Record` and corrected artifact or version where applicable | The accountable authority ensures the underlying condition is corrected and the blocking gate passes; non-waivable gates cannot be removed or waived |
| Privacy violation | Data Governance Owner | Data Governance Owner | `Data Governance Resolution Record` | Processing basis, consent, minimization, retention, access, or design is corrected and approved |
| Learner-safety violation | Learner Safety Owner | Learner Safety Owner | `Learner Safety Resolution Record` | Risk is mitigated to the approved policy level and the affected artifact version is re-reviewed |
| Scientific error | Scientific Authority | Scientific Authority, with revision by the responsible production role | `Scientific Correction Record` and corrected artifact version | Corrected artifact passes scientific review |
| Deterministic validation failure | Validation Service | Architecture Owner for rule governance and the responsible implementation role for correction | `Validation Report` and corrected implementation or version | The declared deterministic rule passes |
| Legacy architecture conflicts with the universal model for a mapped outcome | Architecture Owner | Architecture Owner for migration and integration; Curriculum Owner also resolves any scope issue | Architecture Decision Record or migration artifact | Canonical outcome chain is selected, conflicting learner visibility is removed or explicitly governed, and affected technical gates pass |

If one incident spans multiple rows, every affected contract applies. The Human Process Owner coordinates the combined resolution, but each named domain authority retains its own accountability.

### Science vs Curriculum

Authoritative wording and scope must be preserved. COS must never publish a scientifically false explanation. An irreconcilable conflict:

- Blocks publication
- Requires Curriculum Owner and Scientific Authority review
- Produces a Conflict Record and Decision Record
- Resumes only when an approved, scientifically acceptable treatment is recorded

### Curriculum vs Assessment

Assessment must remain within approved curriculum scope. Exam alignment cannot silently introduce untaught content. Curriculum Owner or Assessment Alignment Review under Authorized Teacher governance classifies the finding. The Curriculum Owner resolves scope and the Authorized Teacher is accountable for the assessment choice. Resolution requires an `Assessment Scope Correction Record` and revised assessment version; work resumes only after the item is within taught scope and passes assessment review.

### Pedagogy vs Coverage

Coverage reports required content presence, absence, placeholder, or invalid state. It is descriptive evidence and is not pedagogical approval. Missing required content may block completeness; pedagogical review independently determines educational acceptability.

### Agent Output vs Deterministic Validation

A failed declared deterministic rule blocks the relevant transition. No agent may reinterpret failure as success. Retry requires changed input, changed implementation, or a versioned rule change approved by the Architecture Owner.

### Legacy vs Universal Model

The universal model, outcome registry, and approved outcome artifacts are canonical for mapped outcomes. Legacy content remains transitional and is governed by the migration policy in Section 10.

### Publication Governance

The Architecture Owner grants publication authorization only after educational approval, implementation permission, implementation, and mandatory post-validation are recorded.

### Product vs Educational Quality

Product may change:

- Timing
- Sequence
- Batch size
- Resource allocation

Product may not weaken:

- Curriculum integrity
- Scientific correctness
- Learner safety
- Privacy
- Declared deterministic gates

### Production vs Quality

A blocking Quality finding stops the transition. The named gate owner classifies it, and the Domain Decision-Rights Model names the accountable resolver. Production may submit evidence or a revised artifact but cannot override the gate. A `Gate Resolution Record` and any corrected version are required. Work resumes only after the accountable authority ensures the underlying condition is corrected and the gate passes; non-waivable gates cannot be removed or waived. Advisory findings remain visible to the teacher.

### Expert Dissent

An expert who disagrees with a consolidated review creates a Dissent Record. Safety findings remain blocking under policy. Valid educational tradeoffs go to the Authorized Teacher. Dissent remains auditable.

### Analytics Without Approval

Future analytics may create a Revision Proposal only. Existing approved content remains active until specialist review, validation, and teacher approval produce a new version.

## 12. Repository Mapping

Every major RFC component must map to repository reality or be marked future.

| RFC component | Repository today | Classification | Target status | Migration need |
|---|---|---|---|---|
| Universal Learning Model | `src/types/index.ts`, `src/data/learningModel.ts`, `src/data/subjects/biology.ts` | Existing | Canonical curriculum navigation model | Complete legacy migration later |
| Curriculum source | Grade curriculum TypeScript files | Existing | Versioned curriculum source adapter | Later |
| Execution Planner | Documented/manual planning in the current one-outcome workflow and Agent Playbook | Logical role | Future explicit planner capability | Later |
| Scope Specialist | Manual curriculum inspection and authoring workflow | Logical role | Contracted expert role | Later, after this RFC passes review |
| Lesson Author domain | Outcome authoring packages and outcome content files | Logical role | Separate future contract domain | Later |
| Flashcard Author domain | Outcome package flashcards | Logical role | Separate future contract domain | Later |
| Quiz / Assessment Author domain | Outcome questions and question bank | Logical role | Separate future contract domain | Later |
| Infographic Planner domain | Package infographic plans and placeholders | Logical role | Separate future contract domain | Later |
| Scientific Review | Manual package and audit review | Logical role | Versioned review artifact | Later |
| Educational Quality Review | Manual Quality/Consistency review | Logical role | Consolidated review artifact | Later |
| Authoring Contract Validator | Manual Authoring Contract Checklist plus partial existing validators; no complete deterministic implementation | Partial existing | Future deterministic validator for declared authoring contracts | Yes |
| Validation Service | `registryValidation.ts`, `questionValidation.ts`, typecheck, and diff check | Partial existing | Versioned implementation rule set with expanded declared coverage | Yes |
| Validation Review Agent | Manual interpretation of validation output | Logical role | Optional future contract | Not v1 |
| Registry Service | `src/data/contentRegistry.ts` | Existing | Modular registry capability | Later, when growth requires |
| Registry Integrity Service | `src/features/contentCoverage/registryValidation.ts` | Existing | Expanded canonical mapping checks | Yes |
| Coverage Calculator | `contentCoverageSelectors.ts` | Existing | Preserve as descriptive read model | Minor rule clarification |
| Reporting | `src/app/internal/cos-report.tsx` | Partial existing | Dynamic COS reporting | Later |
| Artifact Store | Git plus Markdown RFCs, docs, and reports | Existing | Future versioned structured Artifact Engine | Later |
| Workflow Service / logical process | Documented one-outcome process and manual status records | Logical role | Future persistent Workflow Service | Later |
| Human Process Owner | Manual coordination through the documented workflow and project process | Logical role | Formal human workflow-governance role | Yes |
| Learner Safety Owner | No dedicated formal role implementation | Logical role | Formal human governance ownership | Yes |
| Publication Governance | No dedicated publication-governance service; Architecture Owner is accountable | Logical role | Explicit release governance and later Teacher OS or admin workflow support | Yes, later |
| COS Kernel | None | Future service | Policy and permission enforcement | Not v1 |
| Curriculum Memory Engine | Curriculum, documentation, and project-memory files | Partial existing | Versioned structured memory | Later |
| Privacy / Data Governance Service | Auth, consent state, and policy expectations | Partial existing | Formal service if learner data is used by COS | Later, risk-driven |
| Analytics Engine | No production COS analytics loop | Future service | Privacy-safe revision proposals | Not v1 |
| Teacher OS | Teacher role exists; no approval workspace | Future service | Review and approval environment | Not v1 |
| Knowledge Graph | None | Not v1 | Future curriculum, concept, misconception, and evidence graph | Design later; no runtime now |

## 13. Minimal COS v1 Operating Structure

### Human Authorities Required Now

- Curriculum Owner
- Authorized Teacher
- Scientific Authority
- Architecture Owner
- Learner Safety Owner
- Human Process Owner
- Data Governance Owner where learner data is involved

One person may initially hold multiple roles, but each decision artifact records the role exercised.

### Production Roles Required Now

- Scope Specialist
- Lesson Author role
- Flashcard Author domain
- Quiz / Assessment Author role
- Infographic Planner domain
- Scientific Reviewer role
- Consolidated Educational Quality Review
- Execution Planner as a documented responsibility

The authoring domains remain contractually separate even when the same runtime executes more than one role.

### Deterministic Quality Services Required Now

- Registry Validator
- Question Validator
- Coverage Calculator
- Typecheck Runner
- Diff Check Runner

The current v1 authoring-contract control is a Manual Authoring Contract Checklist supported by existing partial deterministic validators. A Deterministic Authoring Contract Validator is a future capability, not required infrastructure now. Rules remain manual until their deterministic implementation exists; a rule must not be reported as automated before that implementation is present and versioned.

### Existing System Foundation

- Universal Learning Model
- `contentRegistry.ts`
- `registryValidation.ts`
- `questionValidation.ts`
- Content coverage selectors
- Internal COS report
- Git
- Markdown RFCs
- Decision Records
- Documented one-outcome workflow
- Manual Authoring Contract Checklist
- Logical Human Process Owner and publication-governance responsibilities

### Deferred Runtime Infrastructure

- Runtime COS Kernel service
- Persistent Artifact Engine
- Persistent Workflow Engine
- Production Analytics Engine
- Distributed agent runtime
- Teacher OS dashboard
- Automated publication
- Automated registry writing
- Persistent Knowledge Graph runtime

## 14. Knowledge Graph Position

A Curriculum Knowledge Graph is strategically important to future Memory, Misconception, Evidence, Concept, Question, and Curriculum relationships. It is not required for COS v1 runtime and must not block the current documented workflow.

Its data model should be designed before large-scale persistent Memory infrastructure is implemented, so that early storage decisions do not lock COS into incompatible relationship structures. The Knowledge Graph requires a future RFC; this document does not define or implement it.

## 15. Open Questions

- Agent Capability Matrix
- Agent Trust Levels
- Detailed Domain Authority authentication model
- Artifact lifecycle and retention
- Execution Planner contract
- Curriculum Knowledge Graph data model
- Evidence Engine and source-ranking policy
- Teacher OS scope
- Publication rollback and emergency correction policy
- Complete deterministic authoring-rule inventory

## 16. Objective Acceptance Criteria

This RFC may advance from Proposed only when a post-revision review verifies all of the following:

1. Every decision type has exactly one accountable human authority.
2. Learner safety and learner-data processing have distinct accountable owners.
3. The Human Process Owner role exists and has no educational, scientific, privacy, learner-safety, or deterministic decision authority.
4. Retry request authority, eligibility conditions, and the required `Retry Record` are explicit.
5. Cancellation authority and the required `Cancellation Record` are explicit, and cancellation preserves history.
6. Stage skipping is forbidden by default and governed by optional-stage policy, domain authorization, Workflow Policy, and a `Stage Exception Record`.
7. Recorded workflow-state ownership, human resolution coordination, and execution-graph planning belong to distinct named responsibilities.
8. Every blocking conflict identifies a named classifier, named accountable resolver, required artifact, and explicit resume condition.
9. Execution Planner is mapped to current repository reality and future status.
10. Publication Governance is mapped to current repository reality, accountable authority, and future status.
11. Authoring Contract Validator is not represented as an existing complete deterministic service.
12. Current validator limitations for the 9/6/3/4/A-E/canonical relationship contract are explicit.
13. Legacy `author -> map -> validate -> approve` shorthand cannot authorize learner-facing implementation before educational approval.
14. Existing outcomes and approval history are grandfathered without destructive invalidation and with defined re-review triggers.
15. Architecture Owner is explicitly prohibited from altering pedagogical approval, curriculum scope, scientific requirements, or Authorized Teacher judgment.
16. Acceptance grants no runtime implementation permission.

## 17. Acceptance Record

| Field | Value |
|---|---|
| Acceptance Gate | Second Post-Revision Acceptance Review Gate |
| Verdict | ACCEPT WITH NONBLOCKING NOTES |
| Blocking Issues | None |
| Accepted Revision | 2 |
| Accepted Date | 2026-07-06 |

### Acceptance Basis

- All six Revision 1 blockers were resolved in Revision 2.
- Decision-rights audit passed.
- Conflict-scenario audit passed.
- Release-lifecycle audit passed.
- Validation-authority audit passed.
- Registry-authority audit passed.
- Universal-versus-Legacy precedence audit passed.
- Workflow-control audit passed.
- Repository-grounding audit passed.
- Grandfathering and backward-compatibility audit passed.
- Contract-domain preservation audit passed.
- Objective acceptance criteria passed.
- `npm.cmd run typecheck` passed.
- `git diff --check` passed.

Acceptance of COS-RFC-0001 establishes the COS v1 organizational and authority baseline. It does not grant runtime implementation permission, create runtime services, make future architecture operational, automatically migrate legacy documentation, or invalidate grandfathered existing artifacts.

### Accepted Known Debt and Follow-up Obligations

1. Legacy `author -> map -> validate -> approve` shorthand remains in `ARCHITECTURE.md`, `ROADMAP.md`, `PROJECT_MEMORY.md`, and `OUTCOME_AUTHORING_STANDARD.md`. It requires controlled documentation migration later and remains governed by the compatibility rule in Section 9.
2. A denied mandatory-stage-skip request has no separately named denial artifact. Detailed denial-record semantics are deferred to future Workflow and State Machine work.
3. Materially edited grandfathered artifacts require a detailed transition contract, deferred to the future Artifact Specification.
4. Standalone COS Constitution, Manifesto, and Learner Model documents were not found during repository contradiction checking. Conformance to absent standalone normative documents was not fully verified.
5. One person may hold multiple governance roles in COS v1, but role-specific Decision Records remain mandatory.
6. `git diff --check` produced pre-existing CRLF conversion warnings without diff corruption. This is repository and environment hygiene debt, not an architecture blocker.

## 18. Revision History

| Version | Date | State | Summary |
|---|---|---|---|
| v1 initial proposal | 2026-07-05 | Proposed | Introduced three organizational levels, human governance, authority hierarchy, conflict protocol, and a broad COS v1 structure |
| Independent architecture review | 2026-07-06 | Review completed | Identified authority ambiguity, deterministic/agentic mixing, workflow overlap, legacy precedence gap, overengineering, and subjective acceptance criteria |
| Revision 1 | 2026-07-06 | Proposed; pending review | Added domain decision rights, deterministic services, release states, migration governance, finding ownership, repository mapping, reduced v1 scope, and objective acceptance criteria |
| Post-Revision Acceptance Review | 2026-07-06 | Review completed; revision required | Identified dual learner-safety accountability, missing process control rights, incomplete blocker contracts and repository mapping, overstated authoring validation, and workflow incompatibility |
| Revision 2 | 2026-07-06 | Proposed; pending second review | Added single learner-safety accountability, Human Process Owner, retry/cancel/stage-skip/state ownership, complete blocker resolution contracts, repository mapping completion, authoring-validator status correction, workflow compatibility and supersession, and grandfathering policy |
| Second Post-Revision Acceptance Review | 2026-07-06 | Review passed with nonblocking notes | Verified authority ownership, conflict governance, lifecycle safety, validator boundaries, repository grounding, backward compatibility, and objective acceptance criteria; blocking issues: none |
| Accepted | 2026-07-06 | Accepted | Established Revision 2 as the COS v1 organizational and authority baseline without granting runtime implementation permission |

The original proposal and Revision 1 remain part of the documented history. Revision 2 supersedes their conflicting organizational recommendations but does not erase them.

## 19. Final Recommendation and Next Step

COS-RFC-0001 Revision 2 is **Accepted** as the COS v1 organizational and authority baseline.

The next immediate step is:

**Architecture Freeze #1 Review Gate**

That review must determine whether the proposed freeze candidate accurately captures only the accepted baseline. No subsequent specification or runtime work is authorized by this recommendation.

This RFC authorizes no runtime implementation, agent creation, route change, content change, registry change, or publication action.
