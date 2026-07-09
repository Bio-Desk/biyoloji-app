# COS-RFC-0002: Agent Contract Specification

## Belge Metadatası

| Alan | Değer |
|---|---|
| Belge Kimliği | COS-RFC-0002 |
| Başlık | COS Agent Contract Specification |
| Status | Accepted |
| Revision | 2 |
| Review State | Agent Contract Specification Acceptance Review Passed |
| Source Organizational Baseline | COS-RFC-0001 Revision 2 - Accepted |
| Architecture Baseline | COS Architecture Freeze #1 - Frozen |
| Artifact Baseline | COS-RFC-0003 Revision 2 - Accepted |
| Oluşturma Tarihi | 2026-07-08 |
| Kapsam | Agent Role, Agent Contract, run sınırı, yetki, input/output, provenance, failure ve handoff semantiği |

Bu belge accepted normatif mimari baseline'dır. Runtime Agent Engine, Agent Run Ledger, Capability Matrix, Trust Levels veya çalışan agent altyapısı oluşturmaz ve implementation izni vermez.

## Kimlik Kararı

Repository içinde `COS-RFC-0002` kullanılmamaktadır. Accepted `COS-RFC-0003`, tarihsel planın `COS-RFC-0002` kimliğini Agent Contract Specification için ayırdığını açıkça kaydeder. Bu belge tarihsel sürekliliği koruyarak `COS-RFC-0002` kimliğini kullanır; mevcut RFC'leri yeniden numaralandırmaz veya overwrite etmez.

## 1. Amaç ve Problem Tanımı

COS içindeki bir AI agent için prompt, model name, tool list, persona veya system message tek başına yeterli contract değildir. Agent Contract şu soruları normatif olarak yanıtlamalıdır:

- Agent'ın amacı ve domain'i nedir?
- Hangi exact Artifact Version girdilerini kullanabilir?
- Hangi output türlerini üretebilir?
- Hangi eylemleri yapabilir veya yapamaz?
- Hangi deterministic validation ve human authority bağımlılıklarına tabidir?
- Ne zaman durmalı veya escalation istemelidir?
- Hangi provenance zorunludur?
- Hangi durumda output learner-facing olamaz?

Temel ayrımlar:

```text
Agent Contract != Prompt
Agent Contract != Model
Agent Contract != Runtime Agent Instance
Agent Contract != Human Authority
Agent Output != Approval
```

## 2. Temel Kavram Ayrımı

### A. Agent Role

Agent'ın COS içindeki kavramsal görevidir. Örnek: Lesson Author Agent.

### B. Agent Contract

Bir Agent Role için amaç, domain, input/output, izin, yasak, gate, provenance, failure ve handoff sınırlarını belirleyen normatif sözleşmedir.

### C. Agent Contract Version

Agent Contract'ın belirli ve tarihsel olarak izlenebilir sürümüdür.

### D. Runtime Agent Instance

Gelecekte bir Agent Contract'a göre çalışan execution instance'dır. Mevcut repository'de böyle bir runtime bulunduğu iddia edilmez.

### E. Agent Run / Invocation

Belirli input'larla yapılan tek çalışma çağrısıdır. Contract ile aynı kimlik değildir.

### F. Model / Provider

Agent execution altında kullanılabilecek teknik model veya sağlayıcıdır. Model identity, Agent Role veya human authority değildir.

### G. Agent Output

Agent tarafından üretilen Artifact, proposal, finding veya recommendation'dır; kendiliğinden approval değildir.

```text
Same Agent Role != Same Contract Version
Same Contract != Same Model Version
Same Model != Same Agent Role
Same Agent != Human Authority
```

## 3. Minimum Agent Contract Envelope

Bu envelope kavramsaldır; repository'nin bugün bu alanları sakladığı iddia edilmez.

| Alan | Amaç | Zorunluluk | Düzey | Future runtime dependency |
|---|---|---|---|---|
| `agentContractId` | Logical Agent Contract kimliği | Zorunlu | Contract | Hayır; dokümante edilebilir |
| `contractVersion` | Exact contract sürümü | Zorunlu | Contract | Hayır |
| `agentRole` | Kavramsal uzman rolü | Zorunlu | Contract | Hayır |
| `contractClass` | Production, review, planning veya transformation sınıfı | Zorunlu | Contract | Hayır |
| `purpose` | Beklenen görevi sınırlar | Zorunlu | Contract | Hayır |
| `domain` | Yetkinin uygulanacağı uzmanlık alanı | Zorunlu | Contract | Hayır |
| `allowedInputArtifactTypes` | Kabul edilen Artifact türleri | Zorunlu | Contract | Hayır |
| `requiredInputStates` | Girdilerin gerekli lifecycle durumları | Koşullu | Contract | Enforcement gelecekte |
| `allowedOutputArtifactTypes` | Üretilebilen output türleri | Zorunlu | Contract | Hayır |
| `permittedActions` | İzin verilen eylemler | Zorunlu | Contract | Enforcement gelecekte |
| `prohibitedActions` | Açık yasaklar | Zorunlu | Contract | Enforcement gelecekte |
| `requiredEvidence` | Evidence ve source gereksinimleri | Koşullu | Contract | Hayır |
| `validationDependencies` | Gerekli deterministic kontroller | Koşullu | Contract | Mevcut/kısmi service bağlantısı |
| `humanAuthorityDependencies` | Karar veya approval gereken human role'ler | Zorunlu | Contract | Hayır |
| `escalationTargets` | Blocker veya belirsizlikte named hedefler | Zorunlu | Contract | Automation gelecekte |
| `handoffRules` | Output'un kime ve hangi koşulla devredileceği | Zorunlu | Contract | Automation gelecekte |
| `provenanceRequirements` | Input, model, tool, AI ve output izleri | Zorunlu | Contract | Persistence gelecekte |
| `sideEffectPolicy` | Read/write ve dış etki sınırı | Zorunlu | Contract | Enforcement gelecekte |
| `failureModes` | Beklenen failure sınıfları | Zorunlu | Contract | Hayır |
| `retryConstraints` | Yasal retry sınırları | Koşullu | Contract | Workflow gelecekte |
| `cancellationConstraints` | Cancellation ve audit koruması | Koşullu | Contract | Workflow gelecekte |
| `acceptanceCriteria` | Output contract başarısını ölçer | Zorunlu | Contract | Hayır |
| `status` | Proposed, active-policy veya retired gibi contract durumu | Zorunlu | Contract | Registry gelecekte |

## 4. Agent Contract ve Agent Run Record Ayrımı

Agent Contract normatif sınırı; Agent Run Record ise belirli bir execution'ı temsil eder.

Future conceptual Agent Run Record en az şunları değerlendirebilir:

| Alan | Amaç |
|---|---|
| `runId` | Tek invocation kimliği |
| `agentContractId` | Uygulanan contract kimliği |
| `contractVersion` | Uygulanan exact contract sürümü |
| `inputArtifactVersionRefs` | Exact input Artifact Version referansları |
| `outputArtifactVersionRefs` | Üretilen exact output referansları |
| `modelRef` | Kullanılan model/provider referansı |
| `modelVersionRef` | Mevcutsa model sürümü |
| `toolRefs` | Kullanılan tool referansları |
| `startedAt`, `completedAt` | Execution zamanları |
| `executionStatus` | Run sonucu |
| `provenance` | Kaynak ve işlem zinciri |
| `failureRef` | Failure kaydı |
| `retryOf` | Önceki run ilişkisi |

Runtime Agent Ledger mevcut değildir; bu model future conceptual support'tur.

## 5. Artifact Specification ile Bağlantı

COS-RFC-0003 Revision 2 aynen korunur. Approval-sensitive, publication-sensitive ve learner-facing-ready output için agent exact `artifactId` ve exact `artifactVersionId` referanslarını bilmelidir. Output yeni Artifact, yeni Artifact Version, Proposal Artifact, Finding, Review Recommendation veya Governance Artifact olabilir.

1. Agent approved Artifact Version'ı sessizce overwrite edemez.
2. Post-approval content-bearing change yeni ve benzersiz `artifactVersionId` gerektirir.
3. Agent output eski approval'ı otomatik devralamaz.
4. No implicit approval inheritance korunur.
5. Output provenance içermelidir.
6. Gerektiğinde `derivedFrom`, `correctedFrom` ve `migratedFrom` korunur.
7. Agent hangi exact input Artifact Version üzerinde çalıştığını görünür kılar.

## 6. Least Authority Principle

Agent Contract yalnızca görev için gerekli en düşük yetkiyi tanımlar. Varsayılan olarak agent:

- Final approval veya publication authorization veremez.
- Deterministic FAIL sonucunu değiştiremez veya gate'i waive edemez.
- Learner-facing visibility açamaz.
- Human authority adına karar veremez.
- Registry'yi doğrudan değiştiremez.
- Approved Artifact Version'ı overwrite edemez.
- Audit history veya provenance silemez.
- Başka domain authority'sini override edemez.

İstisna ancak gelecekte explicit accepted architecture ile tanımlanabilir.

## 7. Human Authority Boundary

Agent şu human authority rollerinin yerine geçemez:

- Curriculum Owner
- Authorized Teacher
- Scientific Authority
- Architecture Owner
- Data Governance Owner
- Learner Safety Owner
- Human Process Owner

Agent recommendation, finding, evidence, draft veya risk flag üretebilir; final accountable human authority olamaz. Yeni authority yaratılmaz.

## 8. Deterministic Service Boundary

Deterministic PASS/FAIL service'lere aittir. Agent validator sonucunu açıklayabilir, remediation önerebilir, failure nedenini analiz edebilir veya yeni draft üretebilir. Agent:

- FAIL sonucunu PASS yapamaz.
- Validation sonucunu overwrite edemez.
- Validator kuralını tek başına değiştiremez.
- Deterministic gate'i waive edemez.

```text
Agent recommendation != Deterministic validation result
```

## 9. Agent Contract Sınıfları

### A. Production / Authoring

Lesson Author, Flashcard Author, Quiz / Assessment Author ve Infographic Planner ayrı domain'lerdir.

### B. Review / Advisory

Pedagogy Review, Learning Science Review, Child Development Review ve Misconception Review agent'ları advisory, evidence-producing ve finding-producing olabilir; human authority değildir.

### C. Planning / Coordination

Execution Planner proposed execution graph oluşturabilir. Legal workflow transition sahibi veya final authority değildir.

### D. Transformation / Migration

Legacy migration assistance, Representation conversion ve structured transformation future-only contract alanları olabilir. Runtime migration sistemi tanımlanmaz.

## 10. Domain-Specific Contract Ayrımı

Lesson Author, Flashcard Author, Quiz / Assessment Author ve Infographic Planner ayrı kalır. Ortak envelope; shared expertise, aynı payload, aynı gate, aynı failure mode veya generic authoring contract anlamına gelmez.

## 11. Input Contract

Her Agent Contract şunları açıklar:

- Accepted input Artifact types
- Required exact Artifact Version references
- Required lifecycle state
- Required `sourceRefs` ve ilgiliyse `outcomeRefs`
- Stale, missing ve conflicting input davranışı

**Approval-sensitive output**, human approval, scientific review, assessment review, implementation authorization veya başka bir approval decision'ı etkilemek üzere sunulan output'tur.

**Publication-sensitive output**, publication authorization veya learner-facing release kararını etkilemek üzere sunulan output'tur.

**Learner-facing-ready output**, doğrudan learner visibility için aday hâle getirilmiş output'tur.

Bu üç output sınıfı exact `artifactId` ve exact `artifactVersionId` olmadan üretilemez. Exact input version bilinmiyorsa agent yalnızca `Exact input version unresolved` limitation'ı taşıyan clearly marked draft, proposal, exploratory finding veya non-authoritative recommendation üretebilir. Böyle bir output approval-ready, publication-ready veya learner-facing-ready olarak işaretlenemez.

## 12. Stale Input Kuralı

Unknown input version ile known-but-stale input version aynı durum değildir. Unknown version sensitive readiness'i tamamen engeller. Agent exact Version A ile başladıktan sonra canonical input Version B olursa Version A provenance içinde korunur, output stale olarak işaretlenir ve otomatik publication-ready sayılmaz; policy'ye göre rebase, re-run veya human review istenir. Ayrıntılı Workflow tasarlanmaz.

## 13. Output Contract

Contract; allowed output Artifact types, lifecycle expectation, provenance, source links, input version references, validation/human review dependencies, uncertainty ve unresolved issue reporting'i belirtir.

Output varsayılan olarak draft, proposal, finding, recommendation veya candidate Artifact Version olabilir. Agent output `approved` olarak doğamaz.

### 13A. Agent-Generated Governance Record Sınırı

```text
Agent-generated governance record != authoritative governance decision
```

Governance record sınıfları:

- **Draft Governance Record:** Agent tarafından hazırlanabilir; authority taşımaz.
- **Proposed Governance Record:** Agent veya human role tarafından karar için sunulabilir; doğru authority/process kabul edene kadar authority taşımaz.
- **Authoritative Governance Record:** Yalnızca accepted governance path tamamlandıktan ve gerektiğinde named accountable human authority, deterministic service result veya accepted workflow process ile bağlandıktan sonra oluşur. Agent tek başına authoritative state üretemez.

Özel kurallar:

1. Agent-generated Approval Record, human approval değildir. Agent yalnızca draft/proposed Approval Record hazırlayabilir. Authoritative approval; exact `artifactVersionId`, approval scope, named accountable authority action, timestamp ve provenance gerektirir.
2. Agent-generated Decision Record, accountable authority decision değildir. Agent evidence summary, recommendation, decision options veya draft Decision Record üretebilir; authoritative Decision Record accepted RFC-0001 içindeki named accountable human authority'ye bağlanır.
3. Agent-generated Validation Report, deterministic Validation Service result değildir. Agent output için `validation analysis`, `validation explanation` veya `remediation proposal` terimleri kullanılmalıdır. Agent PASS üretemez, FAIL'i değiştiremez ve deterministic Validation Report yerine geçemez.
4. Agent-generated draft Conflict Record, conflict resolution değildir.
5. Agent-generated draft Correction Record, authorized correction decision değildir.

## 14. Self-Approval Yasağı

Agent kendi output'unu final authority olarak onaylayamaz. Aynı underlying model author ve reviewer rollerinde ayrı contract run'larında kullanılabilir; ancak bu durum gerçek independent review gibi sunulamaz.

Provenance aynı model/provider katılımını, role separation ve run separation'ı görünür kılmalıdır. Human accountability korunur.

## 15. Model ve Contract Ayrımı

Agent Contract normatif davranış sınırı, model ise teknik execution component'tir. Model/provider değişikliği human authority veya approval yaratmaz ve Artifact Version approval devralmaz. Model değişikliği provenance'da görünür olmalıdır. Model version change'in ne zaman contract compatibility review gerektirdiği Open Question'dır.

## 16. Prompt ve Contract Ayrımı

Prompt, Agent Contract değildir. Normatif precedence şöyledir:

```text
Accepted Architecture
> Agent Contract
> Bounded Permission Policy
> Prompt / Prompt Template
> Runtime Instruction
```

Alt katman üst katmandan daha geniş yetki üretemez. Prompt; `permittedActions` alanını genişletemez, `prohibitedActions` kuralını kaldıramaz, human authority veya publication permission yaratamaz, deterministic gate waive edemez ve learner-data access izni veremez. Contract direct registry mutation'ı yasaklıyorsa prompt içindeki “contentRegistry'ye yaz” talimatının sonucu DENIED'dır.

Prompt template contract'ın implementation bileşeni olabilir; contract ayrıca inputs, outputs, permissions, prohibitions, authority boundaries, validation dependencies, provenance, handoff ve failure behavior kapsar. Prompt değişikliği yalnızca mevcut contract sınırları içinde çalışabilir ve compatibility etkisi ayrıca değerlendirilir.

## 17. Tool Access ve Side-Effect Policy

Kavramsal side-effect sınıfları:

- `read-only`
- `propose`
- `create-draft-artifact`
- `request-validation`
- `request-review`
- `request-transition`
- `write-restricted-record`
- `destructive-action`

Default policy:

| Eylem | Varsayılan |
|---|---|
| Destructive action | DENIED |
| Direct learner publication | DENIED |
| Direct approval mutation | DENIED |
| Direct deterministic-result mutation | DENIED |
| Direct registry mutation | DENIED |

Bu belge Capability Matrix oluşturmaz veya tool permission enforcement implement etmez.

```text
Tool possession != Contract permission
Contract permission != Human authority
Technical capability != Governance authorization
```

Tool availability, model capability veya runtime instruction Agent Contract authority'sini genişletemez. Write tool, registry writer, publication tool, learner-data tool, destructive file tool, approval-mutation tool veya workflow-transition tool eklenmesi kritik side-effect değişikliği olabilir ve sessizce yapılamaz.

Kritik side-effect capability artışı en az contract compatibility review, mevcut Contract Version kapsam kontrolü, gerektiğinde yeni Agent Contract Version, explicit accepted permission boundary, ilgili domain için named accountable authority, auditable permission record ve uygulanabildiği yerde deterministic enforcement gerektirir.

Read-only -> write, draft creation -> authoritative mutation, no learner data -> learner-data access, no publication tool -> publication-capable tool, no registry write -> registry-write capability, non-destructive -> destructive action veya proposal-only -> state-changing action geçişleri effective capability artışı yaratıyorsa yeni Agent Contract Version gerektirir. Tool adının değişmesi tek başına yeterli değildir; effective capability değişimi controlling faktördür.

“DENIED by default” ifadesi agent, prompt, tool eklenmesi, generic admin veya unspecified future policy tarafından açılabilecek bir kapı değildir. Gelecekteki istisna yalnızca explicit accepted architecture, named accountable authority, bounded Agent Contract Version, auditable permission ve uygulanabildiği yerde deterministic enforcement ile mümkündür.

Agent-generated Approval/Decision Record veya validation analysis, write access ile authoritative store'a yazılsa bile human approval, accountable authority decision veya deterministic PASS oluşturmaz.

## 18. Learner Data ve Safety Sınırları

Learner data kullanımı contract içinde açıkça declare edilmelidir. Learner-data access varsayılan olarak DENY'dır; explicit authorization gerektirir. Learner-data processing Data Governance Owner, learner safety Learner Safety Owner domain'ine tabidir.

Agent privacy/safety approval veremez veya bu blocker'ları waive edemez. Sensitive retention veya Memory policy bu belgede tasarlanmaz.

## 19. Evidence ve Uncertainty

Review/advisory contract; evidence requirement, `sourceRef` behavior, uncertainty reporting, unresolved/unsupported claim handling'i tanımlar. Agent evidence yokken varmış gibi davranamaz, fabricated citation üretemez veya uncertainty'yi gizleyemez. Evidence Engine uygulanmaz.

## 20. Failure Model

| Failure | Davranış | Output status / kayıt | Escalation |
|---|---|---|---|
| Missing input | Stop | Blocked finding | Input owner / Human Process Owner coordination |
| Stale input | Stop veya stale candidate | Stale-input finding | Artifact owner / human review |
| Invalid Artifact Version ref | Stop | Integrity finding | Architecture Owner ve source owner |
| Deterministic validation failure | Stop transition | Validation Report ref | Architecture Owner rule governance; implementation correction |
| Tool failure | Güvenli stop veya policy'ye uygun retry request | Tool failure record | Human Process Owner |
| Unsupported task | Refuse | Unsupported-task finding | Request owner |
| Insufficient evidence | Stop claim veya uncertainty bildir | Evidence-gap finding | Domain reviewer/authority |
| Policy boundary violation | Refuse | Policy finding | İlgili named authority |
| Authority boundary violation | Refuse | Authority-boundary finding | Human Process Owner ve ilgili authority |
| Conflicting inputs | Stop | Conflict finding | Named domain authorities; gerekirse Conflict Record |
| Output schema failure | Stop veya draft-invalid | Validation finding | Artifact owner |
| Timeout / interrupted run | Stop | Interrupted Run Record | Human Process Owner |

Bu tablo Workflow State Machine tanımlamaz.

## 21. Retry ve Cancellation Sınırı

Agent illegal retry, mandatory gate skip, hidden restart veya audit-erasing rerun yapamaz. Retry; prior run reference, reason ve provenance korur ve yeni run identity gerektirir. Cancellation audit history'yi silemez. Human Process Owner koordinasyonu ve Workflow sınırları korunur; ayrıntılı policy geleceğe bırakılır.

## 22. Contract Versioning

Şu değişiklikler yeni Agent Contract Version gerektirir:

- Purpose veya domain değişikliği
- Allowed input/output değişikliği
- Permitted/prohibited action değişikliği
- Human authority veya validation dependency değişikliği
- Side-effect permission değişikliği

Wording-only prompt edit, provider change, model patch, timeout tuning veya cost limit değişikliğinin contract version etkisi Open Question olabilir. Silent contract mutation yasaktır.

## 23. Current Development Tools Ayrımı

Codex, Claude, IDE assistants ve external AI tooling otomatik olarak COS Runtime Agent değildir.

```text
Development Tool != COS Runtime Agent
```

Repository geliştirmede kullanılan bir araç; accepted Agent Contract, runtime status, learner-data access veya publication authority kazanmaz.

## 24. Repository Mapping

| Kavram/bileşen | Repository reality | Sınıf | Değerlendirme |
|---|---|---|---|
| Organizational authority | `cos/rfc/COS-RFC-0001-organizational-structure.md` | Existing accepted doc | Human/agent/service sınırını tanımlar |
| Frozen invariants | `cos/architecture/COS-ARCHITECTURE-FREEZE-0001.md` | Existing frozen doc | Değiştirilemez baseline |
| Artifact semantics | `cos/rfc/COS-RFC-0003-artifact-specification.md` | Existing accepted doc | Exact version ve approval kuralları |
| Agent Contract Registry | Yok | Logical concept | Future registry olabilir; mevcut değildir |
| Runtime Agent Engine | Yok | Future service | Not v1 |
| Agent Run Ledger | Yok | Future service | Not v1 |
| Prompt registry | Yok | Future service | Bu Draft için gerekli değildir |
| Model registry | Yok | Future service | Bu Draft için gerekli değildir |
| Tool permission enforcement | Repository/sandbox araçlarına özgü; COS servisi yok | Partial existing concern | Runtime COS enforcement değildir |
| Side-effect enforcement | Dokümante sınır; runtime COS servisi yok | Logical concept | Gelecek policy/enforcement alanı |
| Provenance persistence | Git ve Markdown kayıtları | Partial existing | Structured run provenance değildir |
| Run-level audit | Git/tool logs kısmi | Partial existing | Formal Agent Run Ledger değildir |
| Capability Matrix | Yok | Not v1 | Bu RFC oluşturmaz |
| Trust Levels | Yok | Not v1 | Bu RFC finalize etmez |
| Workflow integration | Dokümante süreç | Logical concept | Persistent Workflow Engine yok |
| Human handoff automation | Yok | Future service | Human process bugün manuel |
| Registry/validators/report | `src/data/contentRegistry.ts`, validators, COS report | Existing/partial existing | Agent runtime değildir; deterministic sınırlar korunur |
| Routes/types | Learning OS routes ve `src/types/index.ts` | Existing | Agent contract persistence içermez |
| Governance history | Git, Markdown RFC'ler, `DECISIONS.md` | Partial existing | Runtime ledger değildir |

Repository'de runtime Agent Engine, Agent Contract Registry, run ledger, model registry veya automated handoff bulunduğu iddia edilmez.

## 25. Zorunlu Senaryo Testleri

| # | Governing contract | Exact input | Allowed / prohibited | Expected output | Validation | Human authority | Provenance | Handoff | Learner visibility | Açık nokta |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Lesson Author | Exact outcome ve Artifact Version refs; bilinmiyorsa limitation zorunlu | Draft/proposal üret / approve etme | Exact input biliniyorsa candidate; bilinmiyorsa clearly marked non-authoritative draft | Authoring/registry checks | Curriculum Owner + Authorized Teacher gates | Input, model, sources | Review | Unknown input ile approval/publication/learner-ready yok | Payload contract future |
| 2 | Quiz Author | Approved quiz exact version | New candidate öner / overwrite etme | New Quiz Artifact Version | Question/assessment validation | Authorized Teacher; gerekirse Scientific Authority | `correctedFrom`, run/model | Assessment review | Onaysız yok | Attempt impact policy |
| 3 | Scientific Review | Exact reviewed version | Finding ve draft/proposed governance record üret / authoritative karar verme | Critical scientific finding veya draft record | Validation refs | Scientific Authority | Evidence/source refs | Scientific Authority | Risk çözülene kadar block | Emergency handling |
| 4 | Author Contract | Kendi output ref'i | Self-approve DENIED | Refusal/finding | Authority check | Authorized Teacher vb. | Attempt kaydı | Human review | Yok | Yok |
| 5 | Validation Review | Exact failed version ve deterministic report | Validation analysis/açıklama üret / FAIL'i PASS yapma | Remediation proposal; deterministic result değil | Deterministic result controlling | Architecture Owner rule governance | Validation ref | Implementation owner | Gate kapalı | Yok |
| 6 | Retry policy | Prior run ref | Yeni run / history silme | New run/output | Contract gates yeniden | Human Process Owner coordination | `retryOf`, reason, model | Normal handoff | Yeni output onaysız | Retry limit future |
| 7 | Same role contract | Same exact inputs | Model değiştirebilir / gizleme | Candidate output | Normal validation | Normal authority gates | New model/version ref | Review | Approval genişlemez | Compatibility threshold future |
| 8 | Author/Mapping proposal | Exact mapping/input refs | Proposal / prompt veya tool mevcut olsa da direct registry write DENIED | Mapping proposal | Registry validation | Architecture Owner + Curriculum Owner as applicable | Inputs, prompt, tools | Authorized implementation path | Doğrudan yok | Capability policy future |
| 9 | Data-using contract | Exact authorized data scope | Explicitly authorized processing / undeclared veya yalnızca tool varlığına dayalı access DENIED | Draft/finding | Privacy ve ayrı safety gates | Data Governance Owner; safety varsa Learner Safety Owner | Consent, scope, contract/tool refs | Named authorities | Approval olmadan yok | Tool artışı compatibility review; minimization future |
| 10 | Any production contract | Stale version ref | Stale candidate / publication-ready işaretleme | Stale finding/candidate | Rebase/re-run validation | Artifact owner/human review | Old/new version refs | Re-run/review | Otomatik yok | Workflow future |
| 11 | Visual generation | Exact Infographic Plan version | New version/derived visual / approval mirası yok | Visual candidate | Visual/scientific review | Authorized Teacher + Scientific Authority as applicable | AI/model/prompt/plan refs | Review | Onaysız yok | Identity policy open |
| 12 | Author + Review contracts | Exact same/different run refs | Ayrı run / false independence DENIED | Draft finding, advisory review veya recommendation | Normal gates; independent gate'i otomatik karşılamaz | Named human authority | Same model, contract, role/run refs | Human review | Otomatik yok | Advisory gate eligibility future |
| 13 | Prompt precedence | Contract registry mutation DENIED | Prompt “registry'ye yaz” dese de DENIED | Refusal veya non-authoritative proposal | Contract/policy check | Architecture Owner boundary | Contract, prompt, run refs | Gerekiyorsa authority review | Yok | Yok |
| 14 | Tool escalation | Read-only contract; write tool sonradan eklenmiş | Write authority otomatik oluşmaz | Blocked capability finding | Compatibility review; gerekirse new Contract Version | İlgili named accountable authority | Old/new tool set, contract refs | Accepted permission path | Yok | Exact permission granularity future |
| 15 | Agent-generated Approval Record | Exact Artifact Version ref | Draft/proposed record üret / authoritative approval yaratma | Draft/proposed Approval Record | Governance-record class check | İlgili named accountable authority | Agent run, artifact, draft record refs | Authority action | Publication authority veya visibility yaratmaz | Persistence future |

## 26. Objektif Kabul Kriterleri

1. Agent Contract prompt'tan ayrıdır.
2. Agent Role human authority'den ayrıdır.
3. Contract Version model version'dan ayrıdır.
4. Runtime Agent mevcutmuş gibi gösterilmez.
5. Approval-sensitive, publication-sensitive ve learner-facing-ready output exact input `artifactVersionId` olmadan üretilemez; unknown version yalnızca clearly marked draft/proposal'a izin verir.
6. Agent approved Artifact Version'ı overwrite edemez.
7. Agent output approval'ı otomatik devralmaz.
8. No implicit approval inheritance korunur.
9. Agent final educational authority olamaz.
10. Agent Scientific Authority yerine geçemez.
11. Agent deterministic FAIL'i PASS yapamaz.
12. Agent direct publication yapamaz.
13. Agent direct learner visibility açamaz.
14. Agent direct registry mutation yapamaz by default.
15. Agent provenance zorunludur.
16. AI involvement görünürdür.
17. Stale input güvenli biçimde ele alınır.
18. Retry prior run history'yi korur.
19. Cancellation audit history'yi silmez.
20. Self-approval yasaktır.
21. Same-model multi-role use false independence olarak sunulamaz.
22. Learner-data access default deny yaklaşımına tabidir.
23. Learner Safety Owner sınırı korunur.
24. Data Governance Owner sınırı korunur.
25. Separate authoring domains korunur.
26. Artifact Specification semantics değişmez.
27. Frozen authority model değişmez.
28. Capability Matrix bu RFC içinde oluşturulmaz.
29. Trust Levels bu RFC içinde finalize edilmez.
30. Acceptance runtime implementation izni vermez.
31. Agent-generated Approval Record authoritative human approval değildir.
32. Agent-generated Decision Record accountable authority decision değildir.
33. Agent-generated validation analysis deterministic validation result değildir.
34. Prompt, Agent Contract permission sınırlarını genişletemez.
35. Tool availability, Agent Contract permission sınırlarını genişletemez.
36. Critical side-effect capability increase contract compatibility review gerektirir.
37. Side-effect capability increase gerektiğinde yeni Agent Contract Version gerektirir.
38. Tool possession contract permission anlamına gelmez.
39. Contract permission human authority anlamına gelmez.
40. Governance Artifact ile write access kombinasyonu authoritative decision yaratamaz.

## 27. Açık Sorular

| Soru | Neden önemli | Revision 2 blocker | Future owner/specification |
|---|---|---|---|
| Agent Contract ID formatı | Global uniqueness ve okunabilirlik | NO | Agent Contract revision |
| Contract Version numbering | Contract history ve compatibility | NO | Agent Contract revision |
| Model/provider binding policy | Taşınabilirlik ve risk | NO | Model policy |
| Model update compatibility review | Davranış değişimi riski | NO | Validation/Model policy |
| Prompt versioning policy | Contract uyumluluğu ve provenance | NO | Prompt policy |
| Tool permission granularity | Least authority enforcement | NO | Capability Matrix |
| Same-model multi-role independence | False independence riskini yönetir | NO | Review policy |
| Retry limits | Döngü, maliyet ve audit riski | NO | Workflow policy |
| Timeout policy | Interrupted run davranışı | NO | Workflow policy |
| Cost/budget limits | Kaynak kontrolü | NO | Product/Process policy |
| Context-window policy | Eksik input ve truncation riski | NO | Runtime policy |
| Deterministic vs stochastic execution | Reproducibility beklentisi | NO | Validation/Runtime policy |
| Output confidence format | Belirsizliğin tutarlı sunumu | NO | Evidence policy |
| Human handoff automation | Escalation güvenilirliği | NO | Workflow/Teacher OS |
| Sandboxing policy | Tool ve side-effect güvenliği | NO | Security/Capability policy |
| Learner-data minimization details | Privacy-safe input sınırı | NO | Data Governance policy |
| Run retention policy | Audit ve privacy dengesi | NO | Data Governance + Artifact policy |

Hiçbir açık soru; final human authority, deterministic PASS/FAIL, self-approval yasağı, default-deny learner data veya direct publication yasağını askıya alamaz.

Şu konular açık soru değildir: prompt contract permission'ı genişletemez; tool availability contract authority'yi genişletemez; agent-generated Approval/Decision Record authoritative karar değildir; agent-generated validation analysis deterministic result değildir.

## 28. Bilinen Borç

Artifact Specification'dan taşınan borçlar:

- Explicit carry-forward policy
- Metadata-only policy
- Emergency correction
- Historical learner attempts
- Türkçe/İngilizce terminoloji cleanup
- Slight over-engineering notu

Genel mimariden taşınan borçlar:

- Dual-route technical debt
- Legacy documentation shorthand
- Missing standalone normative-document verification
- Future runtime services unimplemented
- Validator limitations
- Multi-role human governance discipline

Bu belge bu borçları çözülmüş saymaz.

Independent review'dan taşınan nonblocking notlar:

1. Same-model reviewer'ın hangi advisory gate'leri karşılayabileceği gelecekte netleştirilmelidir.
2. `source owner`, `request owner` ve `human review` gibi generic target'lar kritik contract instance'larında named accepted role'a çözülmelidir.
3. Model/provider compatibility policy açık kalabilir.
4. Contract envelope hafif kapsamlıdır fakat runtime yükümlülüğü yaratmaz.
5. Türkçe/İngilizce terminology editorial cleanup gerekebilir.

## 29. Kapsam Dışı

- Runtime Agent Engine
- Distributed agent orchestration
- Capability Matrix
- Trust Levels finalization
- Detailed Workflow State Machine
- Persistent Agent Run Ledger
- Memory Engine
- Knowledge Graph runtime/schema
- Evidence Engine implementation
- Teacher OS implementation
- Automated publication ve registry writing
- Runtime COS Kernel
- Exact database schema veya queue technology
- Exact model provider veya LLM choice
- Exact prompt implementation
- Exact tool sandbox implementation

## 30. Complexity Control

`SLIGHTLY OVER-ENGINEERED` complexity notu korunur. Bu specification yeni authority, runtime service, geniş agent taxonomy, Capability Matrix, Trust Levels, Workflow Engine veya Memory tasarlamaz. Minimum viable normative contract semantics hedeflenir.

## 31. Revision History

| Aşama | Tarih | Durum | Açıklama |
|---|---|---|---|
| Draft 1 created | 2026-07-08 | Proposed | Agent Contract, Run Record, authority, input/output, provenance ve failure temel modeli oluşturuldu |
| Independent Architecture Review completed | 2026-07-08 | Review completed | Verdict: NEEDS REVISION; complexity: SLIGHTLY OVER-ENGINEERED |
| Revision required | 2026-07-08 | Three blocking issues | Exact sensitive-input identity, governance-record authority ve prompt/tool precedence boşlukları kaydedildi |
| Revision 2 prepared | 2026-07-08 | Proposed; pending review | Üç blocker exact input, governance record classes ve permission precedence kurallarıyla giderildi |
| Post-Revision Architecture Review | 2026-07-08 | Review passed | Verdict: READY FOR ACCEPTANCE GATE WITH NONBLOCKING NOTES; 40 acceptance criterion PASS; blocking issue yok |
| Acceptance Review Gate | 2026-07-08 | Accepted with nonblocking notes | Revision 2 normatif Agent Contract Specification baseline'ı olarak kabul edildi; beş nonblocking not ve `SLIGHTLY OVER-ENGINEERED` complexity notu korundu |

## 32. Acceptance Status

Status: Accepted

Revision: 2

Review State: Agent Contract Specification Acceptance Review Passed

Recommended Next Action: Establish persistent Codex task instruction system.

Bu acceptance; Capability Matrix, Trust Levels, Workflow implementation veya Runtime Agent Engine başlatmaz ve bunlara implementation izni vermez.
