# COS-RFC-0005: Workflow / State Machine Specification

## Metadata

| Alan | Değer |
|---|---|
| Belge Kimliği | COS-RFC-0005 |
| Başlık | COS-RFC-0005 Workflow / State Machine Specification |
| Status | Accepted |
| Revision | 2 |
| Review State | Workflow / State Machine Acceptance Review Gate Passed |
| Source Organizational Baseline | COS-RFC-0001 Revision 2 - Accepted |
| Architecture Baseline | COS Architecture Freeze #1 - Frozen |
| Agent Contract Baseline | COS-RFC-0002 Revision 2 - Accepted |
| Artifact Baseline | COS-RFC-0003 Revision 2 - Accepted |
| Capability Baseline | COS-RFC-0004 Revision 5 - Accepted |
| Oluşturma Tarihi | 2026-07-11 |
| Kapsam | Minimum safe normative workflow and state semantics for COS v1 documentation and governance |

## 1. Purpose and Scope

Bu RFC, accepted mimarinin zaten ima ettiği workflow/state semantiğini normatif olarak tanımlar. Amaç, state anlamını netleştirmek; runtime engine, tool permission veya automatic execution başlatmak değildir.

Bu RFC şunları tanımlar:

- artifact lifecycle state semantics
- governance/review state semantics
- validation state semantics
- visibility/release state semantics
- transition request rules
- transition authority rules
- transition denial rules

Bu RFC şunları tanımlamaz:

- runtime workflow engine
- persistence implementation
- UI implementation
- tool permissions
- Trust Levels
- learner-data governance
- Artifact Version identity service
- automatic transition execution
- deployment veya release automation

## 2. Core Principles

- Workflow specification, runtime implementation değildir.
- State semantics, tool permission üretmez.
- Transition request, transition authority değildir.
- Agent request, human approval değildir.
- Deterministic validation sonucu Agent tarafından override edilemez.
- Publication authorization, otomatik olarak learner visibility anlamına gelmez.
- Artifact Version identity creation authority, accepted architecture açıkça tanımlayana kadar unresolved future work olarak kalır.
- Candidate-like draft/proposal output, Artifact Version identity yaratmaz.
- Workflow semantics, COS-RFC-0004 capability denials'ını zayıflatamaz.

## 3. Recommended Model

Bu Revision 2 için önerilen model:

- **ayrı orthogonal state dimensions**

Tanımlanan boyutlar:

- Lifecycle Dimension
- Governance / Review Dimension
- Validation Dimension
- Visibility / Release Dimension

### Neden monolithic state machine reddedildi?

Monolithic tek bir state zinciri bu RFC için güvenli değildir çünkü accepted baselines şu ayrımları zaten korur:

- approval, implementation authorization ve publication authorization aynı karar değildir
- deterministic validation, human approval değildir
- publication authorization, learner visibility değildir
- Artifact Version identity, governance state ile aynı şey değildir
- blocked/revision/cancelled gibi process durumları, artifact lifecycle ile bire bir çakışmaz

Bu nedenle bu RFC, tek bir "approved/published/live" zinciri yerine ayrı boyutlar kullanır.

## 4. Lifecycle Dimension

Lifecycle Dimension içinde güvenle tanımlanabilen state'ler:

| State | Anlam | Not |
|---|---|---|
| `draft_authored` | Scope içinde bounded draft artifact içeriği hazırlanmıştır | Approval değildir |
| `scope_reviewed` | Curriculum scope ve boundary kontrolü tamamlanmıştır | Curriculum Owner authority gerekir |
| `expert_reviewed` | Scientific/relevant expert review katmanı geçilmiştir | Educational approval değildir |
| `educationally_approved` | Authorized Teacher educational approval vermiştir | Publication değildir |
| `implementation_authorized` | Implementation boundary için izin verilmiştir | Architecture/integration boundary ile ilgilidir |
| `implemented` | Approved direction repository veya target integration yüzeyine uygulanmıştır | Runtime-wired anlamı garanti etmez |
| `blocked` | Bir gate veya authority progression'ı durdurmuştur | Typed blocker record gerekebilir |
| `revision_requested` | Sorumlu actor'den controlled revision istenmiştir | Approval reset semantics ayrı değerlendirilir |
| `cancelled` | Workflow path durdurulmuştur | History korunur |

Bu RFC bilinçli olarak şunları final universal state olarak tanımlamaz:

- `deprecated`
- `archived`
- `rejected`
- `superseded`

Bunlar future work veya separate lifecycle/deprecation policy konusudur.

## 5. Governance / Review Dimension

Governance / Review Dimension için güvenli state'ler:

| State | Anlam |
|---|---|
| `review_requested` | Review talebi kayıt altına alınmıştır |
| `under_review` | Named reviewer veya authority inceleme yürütmektedir |
| `approval_requested` | Educational veya domain approval talebi yapılmıştır |
| `blocked` | Domain finding veya authority kararı ilerlemeyi durdurmuştur |
| `revision_requested` | Revision istenmiştir |

Korunan authority sınırları:

- Curriculum Owner: curriculum wording/scope
- Scientific Authority: scientific correctness
- Authorized Teacher: educational approval
- Architecture Owner: implementation boundary ve publication authorization
- Human Process Owner: yalnızca coordination

Agent veya review role, legal transition completion sahibi değildir.

## 6. Validation Dimension

Validation Dimension için güvenli state'ler:

| State | Anlam |
|---|---|
| `validation_requested` | Deterministic veya declared validation talep edilmiştir |
| `validation_failed` | İlgili deterministic gate fail üretmiştir |
| `post_validation_passed` | Gerekli declared post-validation gate'ler geçmiştir |

Korunan validation ilkeleri:

- deterministic FAIL, ilgili transition'ı bloklar
- Agent FAIL'i PASS olarak yeniden yorumlayamaz
- validation explanation, validation authority değildir
- validation pass, approval değildir
- validation pass, publication değildir
- validation pass, learner visibility değildir

## 7. Visibility / Release Dimension

Visibility / Release Dimension için güvenli state'ler:

| State | Anlam |
|---|---|
| `publication_authorized` | Publication boundary için izin verilmiştir |
| `learner_visible` | Exact Artifact Version learner-facing olarak görünürdür |

Korunan release ilkeleri:

- `publication_authorized`, `learner_visible`'dan önce gelir
- learner visibility exact Artifact Version'a bağlanır
- generic `approved = publishable = visible` collapse yasaktır
- Agent learner visibility aktive edemez
- transitional content bu chain'i sessizce bypass edemez

## 8. Candidate Transitions

Yalnızca normatif semantik güvenli geçişler aşağıda tanımlanır:

| Source | Target | Allowed requester | Accountable authority | Deterministic gate dependency | Required evidence/record | Denial conditions | Agent action class | Artifact Version identity implicated |
|---|---|---|---|---|---|---|---|---|
| `draft_authored` | `scope_reviewed` | Production role veya planner request edebilir | Curriculum Owner | None by default | Scope Card veya equivalent scope evidence | Scope ambiguity, wrong curriculum source, unresolved canonical ID | `REQUEST_ONLY` | No |
| `scope_reviewed` | `expert_reviewed` | `request_review` by a contract-bounded actor only where COS-RFC-0004 permits; Human Process Owner may coordinate | Scientific Authority | Applicable validation refs if declared | Review findings, evidence set | Scientific error, unsupported claim, missing evidence | `REQUEST_ONLY` | No |
| `expert_reviewed` | `educationally_approved` | `request_approval` by a contract-bounded actor only where COS-RFC-0004 permits; Human Process Owner may coordinate | Authorized Teacher | Declared gates may remain prerequisites | Teacher Approval Record | Scope issue, pedagogy issue, unresolved scientific blocker | `REQUEST_ONLY` | No |
| `educationally_approved` | `implementation_authorized` | `request_transition` by a contract-bounded actor only where COS-RFC-0004 permits; Human Process Owner may coordinate | Architecture Owner | Relevant structural/integration gates | Implementation authorization record | Integration risk, unresolved structural fail | `REQUEST_ONLY` | No |
| `implementation_authorized` | `implemented` | `request_transition` by a contract-bounded actor only where COS-RFC-0004 permits; Human Process Owner may coordinate | Architecture Owner | Typecheck/implementation checks as applicable | Implementation evidence / Implementation Report | Missing authorization, broken implementation, blocked integration | `REQUEST_ONLY`; agent cannot complete implementation directly, and this RFC does not invent a runtime implementation service | Potentially no if same approved version; yes if content-bearing change occurs under RFC-0003 |
| `implemented` | `post_validation_passed` | `request_validation` by a contract-bounded actor only where COS-RFC-0004 permits; Human Process Owner may coordinate | Architecture Owner governs rule applicability; deterministic service result remains controlling | `registryValidation.ts`, `questionValidation.ts`, `npm.cmd run typecheck`, `git diff --check` as applicable | Validation Report(s) | Any declared FAIL; exact implemented version unresolved | `REQUEST_ONLY` | Yes, exact implemented Artifact Version identity must be known or the transition is blocked |
| `post_validation_passed` | `publication_authorized` | `request_transition` by a contract-bounded actor only where COS-RFC-0004 permits; Human Process Owner may coordinate | Architecture Owner | Mandatory gates must already pass | Publication authorization record | Missing approval, missing implementation authorization, missing validation, unresolved safety/privacy blocker | `REQUEST_ONLY` | Exact version must be known |
| `publication_authorized` | `learner_visible` | `request_transition` by a contract-bounded actor only where COS-RFC-0004 permits; Human Process Owner may coordinate | Architecture Owner; Data Governance Owner if learner data is implicated; Learner Safety Owner if learner safety is implicated | Applicable validation gates must already have passed and remain controlling | Exact Artifact Version binding and Publication Authorization Record; release decision record where applicable | Exact version unresolved, publication missing, unresolved blocker, unmet learner-data or learner-safety requirement | `DENIED` for direct agent learner-visibility activation; request-only workflow semantics remain separate from activation authority | Yes, exact version binding required; if exact identity is unresolved, learner visibility is blocked |
| any active state | `blocked` | A declared deterministic service may trigger a blocking result; the current responsible named authority may record a domain blocker; Human Process Owner may coordinate | The current responsible named authority for the affected domain; deterministic service remains controlling for declared FAILs | Any applicable FAIL may trigger | Blocking Finding / Conflict Record / Gate Resolution context | None; blocker classification controls | `NOT_APPLICABLE` as direct agent transition | No |
| `blocked` | prior responsible state via recorded revision | Human Process Owner coordinates; named resolver requests | The current responsible named authority for the affected domain | Failed gate must be resolved or re-run as required | Revision record, correction record, retry record, or conflict resolution record | Missing resolution artifact, unresolved blocker | `REQUEST_ONLY` | Maybe, if revision is content-bearing under RFC-0003 |
| any active state | `cancelled` | Human Process Owner for coordination, or the current responsible named authority for the active state | The current responsible named authority for the active state or transition; Human Process Owner coordinates only | None necessarily | Cancellation Record | Safety/integrity constraints may require preservation actions before close | `DENIED` for agent direct cancellation authority unless separately granted in future | No |

### Transition Rules

- Failure at any state, sessiz ileri atlama yaratmaz.
- Progression yalnızca required authority ve required gates birlikte sağlandığında olur.
- Recorded revision, history'yi koruyarak responsible prior state'e dönüş sağlar.
- Stage skip varsayılan olarak yasaktır; yalnızca accepted/frozen policy izin verirse mümkündür.
- `implementation_authorized -> implemented` transition'ında Architecture Owner structural/integration implementation boundary'yi yönetir; bu authority educational approval veya scientific approval yerine geçmez.
- `implemented` state, `post_validation_passed`, `publication_authorized` veya `learner_visible` anlamına gelmez.

## 9. Request-Only Semantics

Bu RFC şu request-style action'ları tanımlar:

- `request_review`
- `request_validation`
- `request_approval`
- `request_transition`
- `request_retry`

Normatif kural:

- Agents, contract/capability uygunsa request yapabilir.
- Request, legal transition completion yaratmaz.
- Request, approval yaratmaz.
- Request, publication yaratmaz.
- Request, learner visibility yaratmaz.
- Request, registry mutation yaratmaz.
- Request, Artifact Version identity yaratmaz.

## 10. Absolute Denials

Agent actor'lar için şu eylemler bu RFC'de korunmuş absolute denial olarak kalır:

- `approve`
- self-approval
- direct `publish`
- `activate_learner_visibility`
- `override_validation`
- `mutate_registry`
- `create_candidate_artifact_version`
- create Artifact Version identity
- `write_authoritative_record`
- `destructive_action`
- learner-data access by default

## 11. Human Authority Dependency Map

Workflow transitions yalnızca mevcut accepted authority set'ine bağlanır:

| Transition area | Accountable authority |
|---|---|
| Scope correctness | Curriculum Owner |
| Scientific correctness | Scientific Authority |
| Educational approval | Authorized Teacher |
| Implementation boundary / publication authorization | Architecture Owner |
| Learner-data implicated case | Data Governance Owner |
| Learner-safety implicated case | Learner Safety Owner |
| Process coordination, retry, cancel, blocked-instance handling | Human Process Owner |

Korunan boundary'ler:

- Human Process Owner gate waive edemez
- Architecture Owner educational correctness kararı veremez
- Authorized Teacher runtime architecture authority sahibi değildir
- Scientific Authority publication mechanics authority sahibi değildir
- Architecture Owner structural/integration implementation boundary ve publication/release boundary'sini yönetir; educational approval veya scientific approval authority'sini devralmaz

## 12. Deterministic Gate Dependency Map

Bu RFC yalnızca mevcut accepted/repository-grounded gate dependency'leri referans alır:

- `src/features/contentCoverage/registryValidation.ts`
- `src/features/contentCoverage/questionValidation.ts`
- `npm.cmd run typecheck`
- `git diff --check`

Normatif kurallar:

- Deterministic service, dependency/gate'tir; peer Agent actor değildir.
- Deterministic failure, applicable transition'ı bloklar.
- Agent deterministic failure'ı override edemez.
- Gate pass, human approval değildir.
- Gate pass, publication değildir.
- Gate pass, learner visibility değildir.

## 13. Artifact Version Identity Handling

Bu alan bilerek dar tutulur.

- Content-bearing change, COS-RFC-0003 altında yeni Artifact Version identity gerektirir.
- Approval ve learner visibility exact version identity'ye bağlanır.
- COS-RFC-0005, yeni identity'nin **ne zaman gerekli olduğunu** söyleyebilir.
- COS-RFC-0005, identity'yi **kimin veya neyin oluşturduğunu** tanımlamaz.
- Identity creation authority, unresolved future accepted architecture work olarak kalır.
- Workflow RFC, Artifact Version identity service icat etmez.
- Draft/proposal/candidate-like output, Artifact Version identity yaratmaz.

## 14. Blocked / Revision Requested / Cancelled

### `blocked`

- Bir gate veya authority progression'ı durdurur.
- Recorded reason zorunludur.
- Agent request ile bypass edilemez.

### `revision_requested`

- Responsible actor, izinli contract scope içinde revision yapmalıdır.
- RFC-0003 gerektiriyorsa affected version/state için approval reset veya re-review gerekir.
- Generic "başa dön" semantics tanımlanmaz; affected prior state'e recorded revision ile dönülür.

### `cancelled`

- Current workflow path'i durdurur.
- History'yi silmez.
- Archive/deprecation runtime semantics yaratmaz.
- Destructive deletion anlamına gelmez.

## 15. Publication and Learner Visibility

- Publication authorization, governance/release kararıdır.
- Learner visibility, ayrı visibility state'idir.
- Learner visibility exact Artifact Version binding gerektirir.
- Learner visibility Agent tarafından aktive edilemez.
- Learner visibility approval'dan otomatik doğmaz.
- Learner visibility validation'dan otomatik doğmaz.
- Publication authorization learner visibility'yi otomatik aktive etmez.
- Exact version identity unresolved ise learner visibility oluşamaz.

## 16. Transitional / Legacy Content

- Transitional content mevcut olabilir.
- Transitional status bypass authority vermez.
- Future normalization gerekebilir.
- Retroactive approval, publication veya learner visibility kaydı icat edilmez.
- Legacy dual-route debt, accepted/frozen canonical precedence'i zayıflatmaz.

## 17. Mandatory Scenarios

Bu RFC en az şu senaryoları normatif olarak kapsar:

1. Author bounded content draft eder.
2. Agent review request eder.
3. Curriculum scope review progression'ı bloklar.
4. Scientific review progression'ı bloklar.
5. Authorized Teacher educational approval verir.
6. Agent approve etmeye çalışır.
7. Agent self-approval yapmaya çalışır.
8. Agent validation request eder.
9. Deterministic validation fail üretir.
10. Agent validation fail'i override etmeye çalışır.
11. Validation geçer ama human approval eksiktir.
12. Approval vardır ama implementation authorization eksiktir.
13. Implementation authorized durum vardır ama post-validation eksiktir.
14. Validation geçmiştir ama publication authorization eksiktir.
15. Publication authorization vardır ama learner visibility aktive edilmemiştir.
16. Agent learner visibility activation yapmaya çalışır.
17. Candidate-like draft content, Artifact Version identity sanılır.
18. Content-bearing change yeni Artifact Version identity gerektirir ama identity creation authority unresolved kalır.
19. Agent registry mutation yapmaya çalışır.
20. Blocked item, recorded revision ile responsible prior state'e döner.
21. Cancelled workflow path history'yi korur.
22. Legacy/transitional content workflow chain'i bypass etmeye çalışır.

## 18. Objective Acceptance Criteria

1. Workflow RFC runtime engine implement etmez.
2. Orthogonal state dimensions kullanılır.
3. Monolithic `approved/published/visible` collapse yapılmaz.
4. Agent approval remains denied.
5. Self-approval remains denied.
6. Agent publication remains denied.
7. Agent learner visibility activation remains denied.
8. Agent validation override remains denied.
9. Agent registry mutation remains denied.
10. Artifact Version identity creation authority unresolved kalır.
11. Exact-version binding korunur.
12. Deterministic pass, human approval değildir.
13. Human approval, publication authorization değildir.
14. Publication authorization, learner visibility değildir.
15. Request-only semantics legal transition completion üretmez.
16. Blocked state agent request ile bypass edilemez.
17. Legacy/transitional content governance chain'i bypass edemez.
18. Yeni Trust Levels yaratılmaz.
19. Runtime permission engine yaratılmaz.
20. Runtime Agent Engine yaratılmaz.
21. Runtime COS yaratılmaz.
22. Yeni human authority yaratılmaz.
23. Yeni Agent taxonomy yaratılmaz.
24. Yeni artifact taxonomy yaratılmaz.
25. Transition authority ile request authority ayrımı korunur.
26. Deterministic gate dependency, peer Agent actor gibi modellenmez.
27. Human Process Owner coordination-only boundary'si korunur.
28. Lifecycle, governance, validation ve visibility dimensions ayrı tutulur.
29. Her transition table row, Artifact Version identity implication alanını açıkça doldurur.
30. Her accountable transition authority accepted named authority set'ine map edilir veya unresolved future work olarak açıkça işaretlenir.
31. Generic `authorized human requester` veya benzeri wording, bağımsız authority source olarak kullanılmaz.

## 19. Open Questions

1. Artifact Version identity'yi kim veya ne oluşturur?
2. `blocked`, typed state midir yoksa blocker record merkezli bir model mi daha güvenlidir?
3. `revision_requested`, state midir, finding midir, yoksa ikisinin kombinasyonu mudur?
4. Cancellation grandfathered artifacts için nasıl yorumlanmalıdır?
5. `implemented`, repository-wired mı yoksa runtime-wired mı anlamına gelmelidir?
6. `post_validation_passed`, aggregate state midir yoksa gate bundle mıdır?
7. `superseded` / `archived` / `deprecated` future handling nasıl ayrıştırılmalıdır?
8. Publication rollback neden ve nasıl future work olarak bırakılmalıdır?

## 20. Document History

| Event | Date | State | Notes |
|---|---|---|---|
| Draft 1 created | 2026-07-11 | Proposed; pending review | Initial orthogonal workflow/state draft created |
| Independent Workflow / State Machine Architecture Review completed | 2026-07-12 | Review completed | Verdict: NEEDS REVISION; blockers identified in transition-table completeness and authority wording |
| Revision 2 prepared | 2026-07-12 | Proposed; pending review | Missing transition-table cell fixed; authority wording narrowed to accepted named authorities; post-revision review pending |
| Post-Revision Workflow / State Machine Architecture Review completed | 2026-07-12 | Review completed with nonblocking notes | Original blockers closed; Revision 2 remains Proposed; Acceptance Review Gate is next |
| Acceptance Review Gate completed | 2026-07-12 | Accepted with nonblocking notes | COS-RFC-0005 Revision 2 accepted; no blocking issues remained; all 22 mandatory scenarios passed; all 31 acceptance criteria passed; no runtime scope introduced |

## 21. Known Debt

- Workflow yalnızca normatif semantik olarak tanımlanmıştır.
- Runtime enforcement yoktur.
- Persistence modeli yoktur.
- UI modeli yoktur.
- Queue/retry system implementation yoktur.
- Artifact Version identity service yoktur.
- Exact service ownership future work olarak kalır.

## 22. Acceptance Record

| Alan | Değer |
|---|---|
| Acceptance Gate | Workflow / State Machine Acceptance Review Gate |
| Verdict | PASS WITH NONBLOCKING NOTES |
| Blocking Issues | None |
| Accepted Revision | 2 |
| Acceptance Date | 2026-07-12 |
| Complexity Assessment | SLIGHTLY OVER-ENGINEERED |
| Mandatory Scenario Count | 22 |
| Acceptance Criteria Count | 31 |

### Acceptance Basis

- All original blockers were closed before the gate.
- All 22 mandatory scenarios passed.
- All 31 acceptance criteria passed.
- The RFC remained internally consistent.
- COS-RFC-0004 compatibility was preserved.
- Authority boundaries were preserved.
- Artifact Version identity remained unresolved future work.
- No runtime scope was introduced.
- `npm.cmd run typecheck` and `git diff --check` passed.

### Acceptance Meaning

COS-RFC-0005 Revision 2'nin Accepted olması; workflow/state semantics için orthogonal state-dimension modelini, transition/request ayrımını, exact Artifact Version binding gerekliliklerini, publication ile learner visibility ayrımını ve authority-boundary kurallarını normatif baseline olarak kabul eder.

Acceptance; Workflow / State Machine implementation, Trust Levels, runtime permissioning, Runtime Agent Engine, Runtime COS veya Artifact Version identity service oluşturmaz ve bunlara implementation izni vermez.

## 23. Accepted Status

Recommended Next Action:
Workflow / State Machine Implementation Planning

Bu acceptance sonrasında da Workflow / State Machine implementation başlamamıştır. Trust Levels, Runtime Agent Engine ve Runtime COS implementation başlamamıştır.
