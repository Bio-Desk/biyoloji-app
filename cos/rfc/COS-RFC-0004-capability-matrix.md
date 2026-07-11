# COS-RFC-0004: COS Capability Matrix

## Belge Metadatası

| Alan | Değer |
|---|---|
| Belge Kimliği | COS-RFC-0004 |
| Başlık | COS Capability Matrix |
| Status | Accepted |
| Revision | 5 |
| Review State | Capability Matrix Acceptance Review Gate Passed |
| Source Organizational Baseline | COS-RFC-0001 Revision 2 - Accepted |
| Architecture Baseline | COS Architecture Freeze #1 - Frozen |
| Agent Contract Baseline | COS-RFC-0002 Revision 2 - Accepted |
| Artifact Baseline | COS-RFC-0003 Revision 2 - Accepted |
| Oluşturma Tarihi | 2026-07-10 |
| Kapsam | Minimum safe normative capability boundaries for COS agent contracts, human authority dependencies, deterministic gate dependencies, and artifact-state constraints |

Bu belge normatif bir capability boundary specification'ıdır. Runtime permission engine, Trust Levels, Workflow / State Machine, tool-permission implementation veya çalışan Runtime Agent Engine oluşturmaz ve bunlara implementation izni vermez.

## Kimlik Kararı

Depoda mevcut RFC kimlikleri `COS-RFC-0001`, `COS-RFC-0002` ve `COS-RFC-0003` olarak kullanımdadır. `cos/rfc/` dizininde `COS-RFC-0004` dosyası bulunmamaktadır ve mevcut accepted/frozen belgelerde bu kimlik başka bir RFC için ayrılmış olarak kaydedilmemiştir. Bu nedenle sessiz renumbering yapmadan bir sonraki geçerli RFC kimliği olarak `COS-RFC-0004` kullanılır.

## 1. Amaç ve Kapsam

Bu RFC şu soruyu normatif olarak yanıtlar:

```text
Belirli bir COS Agent Contract hangi eylem sınıflarını yapabilir,
hangilerini yalnızca request edebilir,
hangilerini koşullu yapabilir,
ve hangilerini kesin olarak yapamaz?
```

Bu belge:

- Agent capability boundary tanımlar.
- Human authority dependency'lerini ayrı bir eksen olarak kaydeder.
- Deterministic gate dependency'lerini ayrı bir eksen olarak kaydeder.
- Artifact lifecycle ve version boundary'lerini korur.
- Prompt/tool/model kaynaklı silent authority expansion'ı yasaklar.

Bu belge:

- Trust Levels tanımlamaz.
- Workflow state machine tasarlamaz.
- Runtime enforcement modeli kurmaz.
- Tool sandboxing veya operating-system izin sistemini yeniden tasarlamaz.
- Yeni human authority yaratmaz.
- Accepted/Frozen authority baseline'ı değiştirmez.

## 2. Terminoloji ve Korunan Ayrımlar

Temel ayrımlar:

```text
Agent Role != Human Authority
Agent Contract != Runtime Agent Instance
Tool Possession != Contract Permission
Contract Permission != Human Authority
Technical Capability != Governance Authorization
Agent-Generated Governance Record != Authoritative Governance Decision
```

Ek olarak:

- Deterministic FAIL, agent tarafından override edilemez.
- Approved Artifact Version sessizce overwrite edilemez.
- Approval mirası implicit değildir.
- Human authority dependency, DENIED bir agent eylemini ALLOWED hâline getirmez.

## 3. Actor / Role Verification

Bu matrix peer actor olarak yalnızca contract-bearing agent role veya contract class'ları ele alır. Accepted architecture içinde geçen her isim peer Agent Role değildir.

### 3A. Verified Agent / Contract Actors

| Actor veya contract domain | Sınıf | Matrix içinde durumu |
|---|---|---|
| Execution Planner / Orchestrator | Planning / Coordination contract | Dahil |
| Curriculum Scope Specialist | Scope / review-support contract | Dahil |
| Lesson Author | Production / Authoring contract | Dahil |
| Flashcard Author | Production / Authoring contract | Dahil |
| Quiz / Assessment Author | Production / Authoring contract | Dahil |
| Infographic Planner | Production / Authoring contract | Dahil |
| Scientific Reviewer | Review / Advisory contract | Dahil |
| Consistency Review | Review / Advisory contract | Dahil |
| Accessibility and Inclusion Review | Review / Advisory contract | Dahil |
| TYT / Assessment Alignment Review | Review / Advisory contract | Dahil |
| Validation Review Agent | Validation-analysis contract | Dahil |

### 3B. Verified But Reclassified / Not Peer Agent Roles

| Ad | Accepted baseline'daki durumu | Matrix kararı |
|---|---|---|
| Educational Review Board | Consolidated review function / umbrella | Peer agent rolü değil; review umbrella olarak ele alınır |
| Pedagogy, Learning Science, Child Development, Misconception | Distinct review lenses | Peer production role değil; review-lens index olarak ele alınır |
| Validation Service | Deterministic service | Agent actor değil; gate/dependency sütununda ele alınır |
| Registry Service / Registry Integrity Service | Existing deterministic/system service | Agent actor değil; gate/dependency sütununda ele alınır |
| Coverage Calculator | Deterministic read model | Agent actor değil |
| Reporting | Presentation layer | Agent actor değil |
| Human Process Owner | Human governance role | Agent actor değil |
| Curriculum Owner, Authorized Teacher, Scientific Authority, Architecture Owner, Data Governance Owner, Learner Safety Owner, Product Owner | Human governance roles | Agent actor değil; human dependency sütununda ele alınır |

## 4. Matrix Orientation

Matrix orientation zorunlu olarak şöyledir:

1. **Contract-based first**
2. **Role-indexed second**

Birincil normatif yüzey contract class görünümüdür. Role-indexed görünüm yalnızca accepted role'leri bu contract class'lara bağlayan ikinci bir index'tir.

Bu yaklaşım şu riskleri engeller:

- Aynı modeli kullanan farklı rolleri tek role sanma
- Human authority ile agent role'ü karıştırma
- Runtime instance varmış gibi davranma
- Board, lens ve deterministic service'leri peer agent actor gibi ele alma

## 5. Capability Vocabulary

Bu RFC, repository evidence ile desteklenen minimum vocabulary'yi kullanır:

- `read`
- `inspect`
- `analyze`
- `draft`
- `propose`
- `recommend`
- `create_candidate_artifact_version`
- `request_validation`
- `request_review`
- `request_transition`
- `explain_validation`
- `write_non_authoritative_record`
- `write_authoritative_record`
- `mutate_registry`
- `publish`
- `activate_learner_visibility`
- `approve`
- `override_validation`
- `access_learner_data`
- `destructive_action`

Bu vocabulary accepted baselines dışında sessizce genişletilmez.

## 6. Disposition Vocabulary

İzin sonucu yalnızca şu değerlerden biri olabilir:

- `ALLOWED`
- `DENIED`
- `REQUEST_ONLY`
- `CONDITIONAL`
- `NOT_APPLICABLE`

`HUMAN_AUTHORITY_REQUIRED` ve `DETERMINISTIC_GATE_REQUIRED` disposition değildir. Bunlar ayrı sütunlardır:

- Human Authority Dependency
- Deterministic Gate Dependency
- Conditions / Constraints
- Artifact State Constraint

## 7. Human Authority Dependency Model

Matrix bir agent capability'yi human authority ile karıştırmaz. Human authority dependency şu anlamlara gelebilir:

- output yalnızca named authority review'una sunulabilir
- request veya proposal named authority action'ı gerektirir
- authoritative transition named authority olmadan tamamlanamaz
- learner-data access yalnızca explicit scoped authority ile tartışılabilir

Named authorities:

- Curriculum Owner
- Authorized Teacher
- Scientific Authority
- Architecture Owner
- Data Governance Owner
- Learner Safety Owner
- Human Process Owner

## 8. Deterministic Gate Dependency Model

Deterministic gate dependency, agent'in bir eylemi yapabilmesi anlamına gelmez; yalnızca sonraki transition için hangi declared PASS/FAIL result'ların controlling olduğunu belirtir.

Current repository evidence:

- `npm.cmd run typecheck`
- `git diff --check`
- `src/features/contentCoverage/registryValidation.ts`
- `src/features/contentCoverage/questionValidation.ts`

Current baseline altında deterministic service'ler:

- PASS/FAIL sahibi olabilir
- agent output'u açıklatabilir
- agent tarafından override edilemez

## 9. Artifact-State Constraints

Capability değerlendirmesi artifact state'den bağımsız değildir. Minimum state constraints:

- unknown exact input version -> approval-sensitive, publication-sensitive ve learner-facing-ready output yasak
- stale exact input version -> stale candidate dışında güvenli ilerleme yok
- approved artifact version -> sessiz overwrite yok
- post-approval content-bearing change -> yeni unique `artifactVersionId`
- learner visibility -> exact version ve gerekli prior approvals olmadan yok

## 10. Normative Matrix (Contract-Class View)

Bu tablo birincil normatif matrix'tir.

| Capability | Production / Authoring | Review / Advisory | Validation-Analysis | Planning / Coordination | Mapping-Proposal | Human Authority Dependency | Deterministic Gate Dependency | Conditions / Constraints | Artifact State Constraint |
|---|---|---|---|---|---|---|---|---|---|
| `read` | ALLOWED | ALLOWED | ALLOWED | ALLOWED | ALLOWED | None | None | Scope-limited relevant inputs only | Exact input identity preferred |
| `inspect` | ALLOWED | ALLOWED | ALLOWED | ALLOWED | ALLOWED | None | None | Repository reality must not be overstated | Exact refs where available |
| `analyze` | ALLOWED | ALLOWED | ALLOWED | ALLOWED | ALLOWED | None | None | Findings must preserve uncertainty | Stale input must be flagged |
| `draft` | ALLOWED | ALLOWED | ALLOWED | NOT_APPLICABLE | ALLOWED | None | None | Drafts remain bounded by contract class: content draft, advisory draft, explanatory draft, or proposal draft only | Sensitive readiness needs exact version |
| `propose` | ALLOWED | ALLOWED | ALLOWED | ALLOWED | ALLOWED | Named authority receives proposal where applicable | None | Proposal is non-authoritative by default | Must reference exact input when available |
| `recommend` | ALLOWED | ALLOWED | ALLOWED | ALLOWED | ALLOWED | Named authority may evaluate | None | Recommendation cannot redefine truth or approval | Same |
| `create_candidate_artifact_version` | DENIED | DENIED | DENIED | DENIED | DENIED | None | None | Constraint source authority yaratmaz; output-contract support otomatik version-identity creation authority vermez | Exact or explicitly unresolved input must be visible |
| `request_validation` | REQUEST_ONLY | REQUEST_ONLY | NOT_APPLICABLE | REQUEST_ONLY | REQUEST_ONLY | Architecture Owner governs rule set, not request | Relevant validator controls result | Request does not imply pass | Candidate version must be identified |
| `request_review` | REQUEST_ONLY | REQUEST_ONLY | REQUEST_ONLY | REQUEST_ONLY | REQUEST_ONLY | Named reviewer/authority depends on domain | None | Request is not transition | Exact candidate ref preferred |
| `request_transition` | REQUEST_ONLY | REQUEST_ONLY | REQUEST_ONLY | REQUEST_ONLY | REQUEST_ONLY | Named authority/process owner required | Relevant gates remain controlling | Request only, never direct state mutation | Exact artifact/version required for sensitive transitions |
| `explain_validation` | DENIED | DENIED | ALLOWED | NOT_APPLICABLE | NOT_APPLICABLE | Architecture Owner may receive explanation | Exact deterministic result is controlling | Explanation only; must not relabel FAIL as PASS or become authoritative Validation Record | Exact validation ref required |
| `write_non_authoritative_record` | NOT_APPLICABLE | NOT_APPLICABLE | NOT_APPLICABLE | NOT_APPLICABLE | NOT_APPLICABLE | None | None | Non-authoritative status permission değildir; çıktı yalnızca daha spesifik accepted capability ile gerekçelendirilebilir | N/A |
| `write_authoritative_record` | DENIED | DENIED | DENIED | DENIED | DENIED | Human or deterministic authority only | Relevant | Agent-generated record never authoritative alone | Exact refs do not change denial |
| `mutate_registry` | DENIED | DENIED | DENIED | DENIED | DENIED | Future accepted architecture would be required | Registry integrity rules would still govern | Direct registry mutation denied under current baseline | N/A |
| `publish` | DENIED | DENIED | DENIED | DENIED | DENIED | Architecture Owner publication authority exists, but does not transfer to agent | Mandatory gates remain controlling | Direct publication denied | Requires prior approvals and exact version, still denied to agent |
| `activate_learner_visibility` | DENIED | DENIED | DENIED | DENIED | DENIED | No agent authority | Mandatory gates remain controlling | Direct learner visibility denied | Exact learner-visible version still does not change denial |
| `approve` | DENIED | DENIED | DENIED | DENIED | DENIED | Named human authority only | Relevant | Human dependency never converts agent approval into permission | Exact refs do not change denial |
| `override_validation` | DENIED | DENIED | DENIED | DENIED | DENIED | No human delegation to agent allowed | Validation FAIL remains controlling | Absolute denial | Exact validation ref does not change denial |
| `access_learner_data` | DENIED | DENIED | DENIED | DENIED | DENIED | Future discussion only with Data Governance Owner and explicit authorization | Privacy/safety gates future | Default deny; no generic approval shortcut | Scope, purpose and minimization would be mandatory if ever opened |
| `destructive_action` | DENIED | DENIED | DENIED | DENIED | DENIED | Separate future accepted policy required | Relevant | No deletion, rollback, or destructive mutation authority | N/A |

## 11. Contract-Class Notes

### Production / Authoring

- Contract-bounded draft/proposal content üretebilir.
- Contract-bounded draft çıktı üretebilir where separately allowed.
- `draft` capability, `create_candidate_artifact_version` capability değildir.
- Candidate-like content üretmek, Artifact Version identity oluşturmak değildir.
- Approval, publication, learner visibility, registry mutation ve validation override yapamaz.
- Approved Artifact Version'ı sessizce overwrite edemez.
- Human request, tool possession, prompt, model, deterministic dependency veya runtime instruction bu denial'ı Agent permission'a çeviremez.

### Review / Advisory

- Findings, recommendations ve draft/proposed governance records üretebilir.
- Proposal üretebilir.
- Current accepted baseline altında candidate content/artifact version oluşturamaz.
- Final authority veya deterministic service yerine geçemez.
- Authoritative Approval / Decision / Validation Record oluşturamaz.

### Validation-Analysis

- Deterministic output'u açıklayabilir.
- Validation result yaratamaz, değiştiremez veya authoritative report gibi sunamaz.
- Candidate Artifact Version oluşturamaz.
- Authoritative Validation Record oluşturamaz.

### Planning / Coordination

- Request, sequencing ve dependency proposal yapabilir.
- Legal transition, approval veya publication yapamaz.
- Candidate Artifact Version oluşturamaz.
- Generic record-writing authority kazanmaz.

### Mapping-Proposal

- Mapping proposal üretebilir.
- Mapping proposal authority, candidate Artifact Version authoring authority vermez.
- Bir mapping önermek, Artifact Version oluşturmaz veya mutate etmez.
- Human authority dependency bu denial'ı Agent permission'a çeviremez.
- Tool possession bu denial'ı bypass edemez.
- Doğrudan `contentRegistry.ts` mutation yetkisi yoktur.
- Canonical mapping authority vermez.

## 12. Role-Indexed View

Bu görünüm secondary index'tir; primary authority matrix değildir.

| Verified role | Contract class |
|---|---|
| Execution Planner / Orchestrator | Planning / Coordination |
| Curriculum Scope Specialist | Review / Advisory |
| Lesson Author | Production / Authoring |
| Flashcard Author | Production / Authoring |
| Quiz / Assessment Author | Production / Authoring |
| Infographic Planner | Production / Authoring |
| Scientific Reviewer | Review / Advisory |
| Consistency Review | Review / Advisory |
| Accessibility and Inclusion Review | Review / Advisory |
| TYT / Assessment Alignment Review | Review / Advisory |
| Validation Review Agent | Validation-Analysis |

Review lenses secondary lens indexes olarak korunur:

- Pedagogy
- Learning Science
- Child Development
- Misconception

Bu lens'ler distinct peer production role veya independent final authority değildir.

## 13. Absolute Denials

Current accepted/frozen baseline altında agent actor için şu eylemler mutlak olarak yasaktır:

- `approve`
- `publish`
- `activate_learner_visibility`
- `override_validation`
- `mutate_registry`
- `write_authoritative_record`
- `access_learner_data`
- `destructive_action`

Ek mutlak yasaklar:

- self-approval
- deterministic FAIL reinterpretation
- authoritative governance decision creation
- approved artifact version overwrite
- prompt/tool/model ile silent authority expansion

## 14. Conditional and Request-Only Rules

### Conditional

Active Entries:

- None

Normatif kural:

- `CONDITIONAL` yalnızca koşullar açıkça yazılmışsa geçerlidir.
- Koşullar accepted/frozen baseline authority'sine trace edilebilir olmalıdır.
- `CONDITIONAL` isimsiz istisna yolu oluşturamaz.
- `CONDITIONAL` agent authority'yi sessizce genişletemez.
- Açık ve geçerli bir koşul yoksa sonuç `ALLOWED` varsayılmaz.

Current Revision 5 altında aktif `CONDITIONAL` matrix cell yoktur.

### Request-Only

- `request_validation`
- `request_review`
- `request_transition`

Request, authority veya state mutation yaratmaz.

## 15. Conditional Disposition Register

Bu register normatif dokümantasyondur; runtime enforcement tasarımı değildir.

Active Entries:

- None

Register rules:

- no orphan `CONDITIONAL` cell
- no condition record without a matrix cell
- no unnamed condition
- no future or unaccepted architecture as authority source
- absence of a satisfied valid condition never defaults to `ALLOWED`
- condition failure must resolve to the explicitly recorded fallback

## 16. Learner-Data Boundary

Varsayılan kural:

```text
access_learner_data = DENIED
```

Generic teacher approval, product need veya tool possession bunu açmaz.

Future discussion ancak şu başlıklarla yapılabilir:

- explicit authorization
- Data Governance boundary
- purpose limitation
- scope limitation
- learner-safety compatibility

Bu RFC privacy runtime model tasarlamaz.

## 17. Governance-Record Boundary

Agent şu kayıtları yalnızca draft/proposed biçimde üretebilir:

- Approval Record
- Decision Record
- Conflict Record
- Correction Record
- Transition request record

Agent authoritative governance record oluşturamaz.

Deterministic service sonucu da agent-generated draft ile ikame edilemez.

“Non-authoritative” bir authority-status tanımıdır; kendi başına bağımsız bir yazma yetkisi üretmez.

## 18. Prompt / Tool / Model Escalation Boundary

Prompt, tool veya model capability şu etkileri yaratamaz:

- denied action'ı allowed yapma
- human authority üretme
- deterministic fail'i geçersiz kılma
- learner-data access açma
- registry mutation yetkisi verme
- publication veya learner visibility yetkisi verme

Write tool presence, contract permission anlamına gelmez.

## 19. Repository Reality Mapping

| Matrix concern | Repository reality |
|---|---|
| Accepted authority baseline | `cos/rfc/COS-RFC-0001-organizational-structure.md` |
| Frozen invariants | `cos/architecture/COS-ARCHITECTURE-FREEZE-0001.md` |
| Agent contract boundary model | `cos/rfc/COS-RFC-0002-agent-contract-specification.md` |
| Artifact version and approval semantics | `cos/rfc/COS-RFC-0003-artifact-specification.md` |
| Existing registry surface | `src/data/contentRegistry.ts` |
| Existing deterministic registry validation | `src/features/contentCoverage/registryValidation.ts` |
| Existing deterministic question validation | `src/features/contentCoverage/questionValidation.ts` |
| Existing reporting surface | `src/app/internal/cos-report.tsx` |

Repository'de bugün:

- Runtime Agent Engine yok
- Capability Matrix runtime enforcement yok
- Trust Levels yok
- Workflow Engine implementation yok
- Runtime COS permission system yok

## 20. Mandatory Scenarios

Bu RFC en az şu senaryoları normatif olarak kapsar:

1. Author Agent content draft eder.
2. Agent validation request eder.
3. Validator FAIL döndürür.
4. Agent review request eder.
5. Agent approve etmeye çalışır.
6. Agent direct publication yapmaya çalışır.
7. Agent learner visibility activation yapmaya çalışır.
8. Agent registry mutation yapmaya çalışır.
9. Agent'te write tool vardır ama contract deny eder.
10. Agent Approval Record üretir.
11. Agent transition request eder.
12. Agent learner-data access ister.
13. Input stale Artifact Version'dır.
14. Agent candidate-like draft content üretir ve bunu candidate Artifact Version identity gibi yorumlamaya çalışır.
15. Same-model author/reviewer case ortaya çıkar.
16. Reviewer candidate Artifact Version oluşturmaya çalışır.
17. Mapping-Proposal actor candidate Artifact Version oluşturmaya çalışır.
18. Production / Authoring actor contract-bounded content draft eder, sonra candidate Artifact Version identity oluşturmaya çalışır.
19. Planning / Coordination actor yalnızca non-authoritative etiketi taşıdığı için arbitrary record oluşturmaya çalışır.

## 21. Scenario Outcomes

| Senaryo | Beklenen sonuç |
|---|---|
| Author Agent drafts content | Contract-bounded draft/proposal content üretebilir; bu çıktı non-authoritative'dir ve Artifact Version identity yaratmaz |
| Agent requests validation | `REQUEST_ONLY`; validator sonucu ayrı kalır |
| Validator returns FAIL | FAIL controlling kalır; agent yalnızca explain/remediation yapabilir |
| Agent requests review | `REQUEST_ONLY`; authority veya reviewer ayrıdır |
| Agent tries to approve | `DENIED` |
| Agent tries direct publication | `DENIED` |
| Agent tries learner visibility activation | `DENIED` |
| Agent tries registry mutation | `DENIED` |
| Agent has write tool but contract denies write | `DENIED`; tool possession authority yaratmaz |
| Agent generates Approval Record | Draft/proposed record only; authoritative değil |
| Agent requests transition | `REQUEST_ONLY` |
| Agent requests learner-data access | `DENIED` under current baseline |
| Stale Artifact Version input | stale-limited output or stop; no sensitive readiness |
| Agent produces candidate-like draft content and tries to treat it as candidate Artifact Version identity | Candidate-like draft/proposal output üretilebilir; ancak bu çıktı Artifact Version identity yaratmaz ve `create_candidate_artifact_version` current accepted baseline altında `DENIED` kalır |
| Same-model author/reviewer case | Separate runs olabilir; false independence claim yasak |
| Reviewer attempts to create a candidate Artifact Version | `DENIED` under the current accepted baseline |
| Mapping-Proposal actor attempts to create a candidate Artifact Version | `DENIED` under the current accepted baseline; mapping proposal remains proposal-only |
| Production / Authoring actor drafts contract-bounded content, then attempts to create a candidate Artifact Version identity | Drafting contract-bounded olabilir; `create_candidate_artifact_version` current accepted baseline altında `DENIED`; draft, version identity yaratmaz |
| Planning / Coordination actor attempts to create an arbitrary non-authoritative record solely because it is labeled non-authoritative | Generic record-writing permission yoktur; actor yalnızca bounded planning/proposal outputs üretebilir |

## 22. Objective Acceptance Criteria

Bu RFC için objektif kabul kriterleri:

1. Matrix contract-based first, role-indexed second olarak tanımlanmıştır.
2. Agent Role ile Human Authority ayrımı korunur.
3. Agent Contract ile Runtime Agent Instance ayrımı korunur.
4. Disposition vocabulary yalnızca beş değerden oluşur.
5. Human authority dependency disposition olarak kullanılmaz.
6. Deterministic gate dependency disposition olarak kullanılmaz.
7. `approve` bütün agent contract class'ları için DENIED'dır.
8. `publish` bütün agent contract class'ları için DENIED'dır.
9. `activate_learner_visibility` bütün agent contract class'ları için DENIED'dır.
10. `override_validation` bütün agent contract class'ları için DENIED'dır.
11. `mutate_registry` bütün agent contract class'ları için DENIED'dır.
12. `write_authoritative_record` bütün agent contract class'ları için DENIED'dır.
13. `access_learner_data` default olarak DENIED'dır.
14. Human authority dependency denied action'ı allowed yapmaz.
15. Deterministic FAIL agent tarafından override edilemez.
16. Agent-generated governance record authoritative decision değildir.
17. Prompt/tool/model capability permission genişletemez.
18. Approved Artifact Version sessizce overwrite edilemez.
19. No implicit approval inheritance korunur.
20. Deterministic service'ler peer agent actor gibi ele alınmaz.
21. Human authority inventory accepted baseline ile uyumludur.
22. Actor/role verification section peer role ile umbrella/lens/service ayrımını açıkça gösterir.
23. Mandatory scenarios listesi mevcut görevde istenen senaryoları kapsar.
24. Repository reality mapping runtime olmayan alanları operational göstermemelidir.
25. RFC, Trust Levels başlatmaz.
26. RFC, Workflow / State Machine tasarlamaz.
27. RFC, runtime permission engine tasarlamaz.
28. RFC, yeni human authority yaratmaz.
29. RFC, direct learner visibility veya publication için agent yetkisi tanımaz.
30. RFC implementation izni vermez.
31. Review / Advisory contract class, current accepted baseline altında candidate Artifact Version oluşturamaz.
32. `CONDITIONAL`, isimsiz istisna yolu olarak kullanılamaz ve explicit baseline-backed koşul gerektirir.
33. Kalan her `CONDITIONAL` matrix cell benzersiz bir condition identifier ve explicit accepted/frozen baseline source taşır.
34. Hiçbir `CONDITIONAL` entry yalnızca generic contract-class wording, tool possession, human request, deterministic dependency veya future architecture varsayımıyla yaşayamaz.
35. Mapping-Proposal contract class, current accepted baseline altında candidate Artifact Version oluşturamaz.
36. Her Conditional Disposition Register kaydı, koşul sağlanmadığında explicit fallback disposition tanımlar.
37. Artifact Version constraint'leri veya output-contract semantiği tek başına class-wide `create_candidate_artifact_version` authority source sayılamaz.
38. `write_non_authoritative_record`, bağımsız generic bir permission değildir; non-authoritative status tek başına write authority üretmez.
39. Aktif `CONDITIONAL` matrix cell yoksa, Conditional Disposition Register aktif condition entry içermez ve orphan condition identity barındırmaz.
40. Scenario ve explanatory text, normatif matrix tüm audited agent contract class'ları için `create_candidate_artifact_version` değerini `DENIED` tanımlıyorsa candidate Artifact Version creation'ı allowed olarak tarif etmez; bounded candidate-like draft/proposal content, Artifact Version identity creation'dan açıkça ayrı tutulur.

## 23. Open Questions

1. Future accepted architecture direct registry mutation için sınırlı bir implementation path açacak mı?
2. Learner-data access için future capability boundary artifact-level mi, task-level mi tanımlanmalı?
3. Review lens'ler gelecekte ayrı contract'lara bölünecek mi?
4. Mapping-Proposal ayrı named contract olarak netleştirilecek mi?
5. Same-model advisory review hangi koşullarda yeterli sayılabilir?
6. Request-transition semantics future workflow spec içinde ne kadar ayrıntılandırılmalı?
7. Validation-analysis contract'ı ayrı RFC gerektirecek kadar genişleyecek mi?
8. Contract-class matrix future domain'lerde genişletilirken vocabulary nasıl sabit tutulacak?
9. Current accepted architecture altında Artifact Version identity creation authority tam olarak hangi future accepted specification içinde tanımlanmalıdır?

## 24. Known Debt

- Trust Levels hâlâ tanımsızdır.
- Workflow implementation hâlâ başlamamıştır.
- Runtime Agent Engine yoktur.
- Runtime COS implementation yoktur.
- Existing validators partial coverage sunar; complete authoring-contract enforcement yoktur.
- Legacy dual-route technical debt devam etmektedir.
- Future direct-registry-write policy tamamen açık bırakılmıştır; current baseline altında denied kalır.

## 25. Kapsam Dışı

- Trust Levels
- Workflow / State Machine
- Runtime Permission Engine
- Tool-permission implementation
- Model-specific policy
- New human authority creation
- Runtime Agent Engine
- Runtime COS implementation
- Learner-data runtime privacy model
- Automated publication
- Automated registry writing

## 26. Review Readiness

Bu Revision 5, Acceptance Review Gate için hazırdır çünkü:

- accepted/frozen baselines ile uyumludur
- role inventory verified edilmiştir
- peer actor ile dependency/service ayrımı açıktır
- disposition vocabulary daraltılmıştır
- human ve deterministic dependency sütunları ayrılmıştır
- absolute denials korunmuştur
- runtime tasarımı başlatılmamıştır

## 27. Revision History

| Aşama | Tarih | Durum | Açıklama |
|---|---|---|---|
| Draft 1 created | 2026-07-10 | Proposed | Minimum safe normative capability matrix created with contract-based primary view, role-indexed secondary view, 15 mandatory scenarios, and 30 objective acceptance criteria |
| Independent Architecture Review completed | 2026-07-10 | Review completed | Verdict: NEEDS REVISION; 1 blocker identified in Review / Advisory `create_candidate_artifact_version` disposition |
| Revision 2 prepared | 2026-07-10 | Proposed; pending review | Review / Advisory candidate-version creation changed to DENIED; `CONDITIONAL` hardened; reviewer candidate-version scenario added; acceptance criteria expanded to 32 |
| Post-Revision Architecture Review completed | 2026-07-10 | Review completed | Verdict: NEEDS FURTHER REVISION; remaining baseline-traceability blockers identified for surviving `CONDITIONAL` entries |
| Revision 3 prepared | 2026-07-10 | Proposed; pending review | Mapping-Proposal candidate-version creation changed to DENIED; surviving `CONDITIONAL` entries reduced to baseline-backed minimum; Conditional Disposition Register added; scenario count expanded to 17; acceptance criteria expanded to 36 |
| Second Post-Revision Architecture Review completed | 2026-07-10 | Review completed | Verdict: NEEDS FURTHER REVISION; COND-001 lacked explicit class-wide authority source and generic `write_non_authoritative_record` remained too broad |
| Revision 4 prepared | 2026-07-10 | Proposed; pending review | Production / Authoring candidate-version creation changed to DENIED; generic `write_non_authoritative_record` retired from the matrix; active CONDITIONAL count reduced to zero; scenario count expanded to 19; acceptance criteria expanded to 39 |
| Third Post-Revision Architecture Review completed | 2026-07-10 | Review completed | Verdict: NEEDS FURTHER REVISION; scenario/explanatory language still implied candidate Artifact Version creation was allowed despite universal matrix denial |
| Revision 5 prepared | 2026-07-10 | Proposed; pending review | Scenario and explanatory text revised to distinguish candidate-like draft/proposal output from Artifact Version identity creation; scenario count remains 19; acceptance criteria expanded to 40 |
| Fourth Post-Revision Capability Matrix Architecture Review completed | 2026-07-10 | Review completed with nonblocking notes | All prior blockers closed; RFC remains Proposed Revision 5; Acceptance Review Gate is next; no acceptance transition has occurred |
| Acceptance Review Gate completed | 2026-07-10 | Accepted with nonblocking notes | COS-RFC-0004 Revision 5 accepted; no blocking issues remained; all 19 mandatory scenarios passed; all 40 acceptance criteria passed; normative matrix internally consistent; role-indexed view consistent; authority boundaries preserved; no runtime scope introduced |

## 28. Acceptance Record

| Alan | Değer |
|---|---|
| Acceptance Gate | Capability Matrix Acceptance Review Gate |
| Verdict | ACCEPT WITH NONBLOCKING NOTES |
| Blocking Issues | None |
| Accepted Revision | 5 |
| Acceptance Date | 2026-07-10 |
| Complexity Assessment | SLIGHTLY OVER-ENGINEERED |
| Active CONDITIONAL Count | 0 |
| Active Conditional Register Entries | 0 |

### Acceptance Basis

- All prior blockers were closed before the gate.
- All 19 mandatory scenarios passed.
- All 40 acceptance criteria passed.
- The normative matrix remained internally consistent.
- The role-indexed view remained secondary and consistent with the contract-based matrix.
- Authority boundaries were preserved.
- No runtime scope was introduced.
- `create_candidate_artifact_version` remained `DENIED` for all five audited contract classes.
- `write_non_authoritative_record` remained `NOT_APPLICABLE` for all five audited contract classes.
- Active `CONDITIONAL` count remained zero.
- Active Conditional Register entries remained zero.
- `npm.cmd run typecheck` and `git diff --check` passed.

### Acceptance Anlamı

COS-RFC-0004 Revision 5'in Accepted olması; agent capability boundary semantiğini, contract-based primary matrix modelini, role-indexed secondary view kuralını, candidate-like draft/proposal content ile Artifact Version identity creation ayrımını, default-deny side-effect sınırlarını ve zero-`CONDITIONAL` accepted state'ini normatif baseline olarak kabul eder.

Acceptance; runtime permission engine, Capability Enforcement Service, Trust Levels, Workflow / State Machine, Runtime Agent Engine, Runtime COS implementation veya Artifact Version identity service oluşturmaz ve bunlara implementation izni vermez.

### Accepted Nonblocking Follow-up Obligations

1. `SLIGHTLY OVER-ENGINEERED` complexity notu korunur; future implementation minimum viable semantics gözetmelidir.
2. Curriculum Scope Specialist'in `Review / Advisory` contract class altında compressed kalması authority drift yaratmaz, ancak future contract decomposition ileride ayrıca değerlendirilebilir.
3. Artifact Version identity creation authority bilinçli olarak unresolved future architecture work olarak bırakılmıştır.

## 29. Accepted Status

Status: Accepted

Revision: 5

Review State: Capability Matrix Acceptance Review Gate Passed

Recommended Next Action: Checkpoint COS-RFC-0004 Accepted transition

Bu acceptance; Trust Levels, Workflow implementation, Runtime Agent Engine veya Runtime COS implementation başlatmaz ve bunlara implementation izni vermez.
