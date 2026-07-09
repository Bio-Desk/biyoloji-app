# COS-RFC-0003: COS Artifact Specification

## Belge Metadatası

| Alan | Değer |
|---|---|
| Belge Kimliği | COS-RFC-0003 |
| Başlık | COS Artifact Specification |
| Status | Accepted |
| Revision | 2 |
| Review State | Artifact Specification Acceptance Review Passed |
| Source Baseline | COS-RFC-0001 Revision 2 - Accepted |
| Architecture Baseline | COS Architecture Freeze #1 - Frozen |
| Oluşturma Tarihi | 2026-07-07 |
| Kapsam | Artifact kimliği, sürüm, temsil, provenance, lineage, onay bağlama ve grandfathering semantiği |

Bu belge bir mimari sözleşme taslağıdır. Runtime `Artifact Engine`, veri tabanı şeması, TypeScript interface'i veya çalışan servis tanımlamaz ve uygulama izni vermez.

## Kimlik Kararı

Depoda mevcut tek RFC kimliği `COS-RFC-0001`, mevcut mimari dondurma kimliği ise `COS-ARCHITECTURE-FREEZE-0001`dir. Tarihsel plan `COS-RFC-0002` kimliğini Agent Contract Specification, `COS-RFC-0003` kimliğini Artifact Specification ile ilişkilendirmiştir. Sıralama değişmis olsa da kimlikler sessizce yeniden numaralandırılmamıştır. Bu nedenle bu belge `COS-RFC-0003` kimliğini kullanır; `COS-RFC-0002` oluşturulmaz, yeniden kullanılmaz ve bu belge tarafından tanımlanmaz.

## 1. Amaç ve Problem Tanımı

COS şu soruya denetlenebilir bir yanıt vermelidir: "Üretilen, incelenen, onaylanan, değiştirilen, yayımlanan veya başka bir çıktının kaynağı olan şey nedir?"

Dosya yolu tek başına yeterli değildir. Dosya yeniden adlandırılabilir, aynı içerik birden fazla dosyada saklanabilir, tek bir dosya birden fazla kavramsal nesne barındırabilir veya bir sürüm PDF, JSON ve learner-facing render olarak farklı biçimlerde görünebilir.

- **Logical Artifact:** Meşru sürümler boyunca korunan kavramsal kimliktir.
- **Artifact Version:** Bir Logical Artifact'in belirli ve sürüme bağlı içerik durumudur.
- **Representation:** Bir Artifact Version'in saklanan, dışa aktarılan veya render edilen biçimidir.
- **Repository File:** Bir Representation'i barındırabilen dosyadır; kendiliğinden Artifact değildir.
- **Runtime Object:** Çalışma anındaki nesnedir; kalıcı Artifact kimliği olduğu varsayılamaz.
- **Approval Record:** Belirli bir otoritenin belirli bir Artifact Version hakkındaki karar kaydıdır.
- **Validation Result:** Bildirilmiş bir kurala göre üretilen PASS/FAIL veya bulgu kaydıdır; Artifact'in kendisi değildir.

Bir dosya otomatik olarak Artifact sayılmaz. Artifact kimliği yalnızca dosya yoluyla tanımlanmaz. Bir Logical Artifact birden fazla sürüme, bir Artifact Version birden fazla Representation'a sahip olabilir. Representation, Artifact kimliğini sessizce yeniden tanımlayamaz. Onay, validation ve publication kayıtları Artifact'in kendisiyle aynı şey değildir.

## 2. Temel Artifact Modeli

### A. Logical Artifact

Meşru sürüm değişimleri boyunca devam eden sabit kavramsal kimliktir. Örnek: `9BIO-1.1-K5 lesson artifact`.

### B. Artifact Version

Logical Artifact'in belirli bir andaki, içerik ve lineage ile tanımlanmış durumudur. Örnek: Version 1 ve Version 2 aynı Logical Artifact'e ait olabilir; ancak aynı onay durumunu otomatik olarak paylaşmaz.

### C. Representation

Bir Artifact Version'in fiziksel veya görüntülenen biçimidir. Kavramsal örnekler: TypeScript object, Markdown document, JSON record, PDF export, image asset, database row veya learner-facing rendered view. Bunların tamamının mevcut depoda var olduğu iddia edilmez.

Temel ayrımlar:

- Aynı Logical Artifact, aynı Artifact Version anlamına gelmez.
- Aynı Artifact Version, aynı Representation anlamına gelmez.
- Bir Representation değişikliği, bilimsel veya pedagojik anlam değişmediği sürece yeni Logical Artifact gerektirmez.

## 3. Minimum Artifact Envelope

Aşağıdaki envelope kavramsaldır; mevcut depoda bu alanların tümünün saklandığı iddia edilmez.

| Alan | Amaç | Zorunluluk | Sürüm davranışı |
|---|---|---|---|
| `artifactId` | Logical Artifact'i tanımlar | Zorunlu | Meşru sürümler boyunca sabit |
| `artifactVersionId` | Tek bir kesin Artifact Version'i tanımlar | Zorunlu | Her yeni sürümde farklı |
| `artifactType` | Artifact taksonomisini belirtir | Zorunlu | Normalde Logical Artifact boyunca sabit; tür değişimi kimlik kararı gerektirir |
| `schemaVersion` | Envelope/payload yorumlama sözleşmesini belirtir | Zorunlu | Sürüme özgü; schema göçü kaydedilir |
| `lifecycleState` | Belirli sürümün Frozen lifecycle içindeki durumunu belirtir | Zorunlu | Sürüme özgü; yasal geçişlerle değişir |
| `contentDigest` | Sürüme bağlanan kanonik içerik özeti | Koşullu | Sürüme özgü; politika ve canonicalization'a bağlı |
| `digestAlgorithm` | Digest'in hangi politika/algoritmayla üretildiğini belirtir | `contentDigest` varsa zorunlu | Sürüme ve digest politikasına özgü |
| `createdAt` | Sürümun oluşturulma zamanını kaydeder | Zorunlu kavramsal alan | Sürüme özgü |
| `createdBy` | Oluşturan insan veya sistem kimliğini kaydeder | Zorunlu kavramsal alan | Sürüme özgü |
| `createdByRole` | İşlemin hangi yetkili rol ile yapıldığını belirtir | Zorunlu | Sürüme özgü; çoklu rol karışıklığını engeller |
| `provenance` | Kaynak, üretim, dönüşüm ve sorumluluk zincirini taşır | Zorunlu | Sürüme özgü ve birikimli |
| `derivedFrom` | Bu sürümün hangi Artifact veya sürümden türettiğini belirtir | Koşullu | Sürüme özgü lineage bağı |
| `sourceRefs` | Curriculum, bilimsel kaynak veya diğer kaynak referanslarını taşır | Kaynak kullanan Artifact için zorunlu | Sürüme özgü; kaynak değişimi materiality incelemesi gerektirir |
| `outcomeRefs` | Artifact'i LearningOutcome kimlikleriyle ilişkilendirir | Outcome-bağlı içerikte zorunlu | Sürüme özgü bağ; outcome kimliğini değiştirmez |
| `approvalRefs` | Sürüme bağlı onay kayıtlarını gösterir | Onay varsa zorunlu | Sürüme özgü; otomatik aktarılmaz |
| `validationRefs` | Sürüme veya Representation'a uygulanan validation kayıtlarını gösterir | Validation varsa zorunlu | Sürüme/Representation'a özgü |
| `supersedes` | Bu sürümün yerini aldığı önceki sürümü belirtir | Koşullu | Sürüme özgü |
| `supersededBy` | Bu sürümün yerini alan sonraki sürümü belirtir | Koşullu | Sürüme özgü ters bağ |
| `migratedFrom` | Legacy kaynak veya önceki saklama modelini belirtir | Migration varsa zorunlu | Sürüme özgü |
| `correctedFrom` | Düzeltilen önceki sürümü belirtir | Correction varsa zorunlu | Sürüme özgü |
| `grandfatheringStatus` | Mevcut çalışmanın geriye dönük durumunu kaydeder | Mevcut miras Artifact'lerde koşullu | Sürüme/Artifact'e bağlı; kalite sertifikası değildir |

## 4. Kimlik Kuralları

1. `artifactId`, Logical Artifact'i tanımlar.
2. `artifactVersionId`, tek ve kesin bir Artifact Version'i tanımlar.
3. `artifactId`, aynı mantıksal nesnenin meşru sürümleri boyunca sabit kalır.
4. Material change, yönetilen sürüm işlemi gerektirir.
5. Yalnızca yeni Representation üretmek her zaman yeni Artifact Version gerektirmez.
6. Esasen farklı bir eğitsel nesne, ilgisiz bir `artifactId`yi yeniden kullanamaz.
7. Kimlik yalnızca filename, folder, route veya UI title'a dayanamaz.
8. İki dosya ancak Representation equivalence gerekçelendirildiyse aynı Artifact Version'i temsil edebilir.
9. Aynı Artifact Version'i iddia eden fakat material olarak çelişen iki dosya bir integrity conflict oluşturur.

## 5. Sürümleme Modeli

Yeni Artifact Version; bilimsel, pedagojik, curriculum, assessment veya learner-facing anlamı material olarak değiştiren bir değişiklikte gereklidir. Önceki sürüm silinmez; lineage, onay ve validation geçmişi korunur. `supersedes` ve `supersededBy` ilişkileri geri alınabilirlik ve tarihsel izleme sağlar, ancak runtime rollback sistemi tanımlamaz.

### Material Change

- Bilimsel anlam değişikliği
- Pedagojik anlam değişikliği
- Curriculum scope değişikliği
- Assessment answer veya scoring değişikliği
- Learning objective değişikliği
- Esaslı learner-facing metin değişikliği
- Anlamlı görsel açıklama değişikliği
- Öğrenci yorumunu, correctness kararını veya assessment sonucunu değiştiren değişiklik

Varsayılan sonuç: Yeni Artifact Version.

### Non-material Change

- Anlamı değiştirmeyen biçimlendirme
- Semantik etkisi olmayan typo düzeltmesi
- Anlam kaybı yaratmayan Representation conversion
- Anlamı değiştirmeyen sıkıştırma veya layout ayarı

Non-material sınıfı sessiz overwrite izni değildir. Reviewer materiality recommendation ve evidence sunabilir; nihai materiality kararı, Frozen Domain Decision-Rights Model içinde etkilenen domain için tanımlanmış named accountable human authority tarafından verilir.

### 5A. Onay Öncesi ve Onay Sonrası Düzenleme

Onay ve publication öncesinde, gerçekten non-material bir değişiklik repository policy izin veriyorsa ve audit boundary aşılmadıysa aynı draft version içinde kalabilir. Typo, format temizliği ve zararsız boşluk düzeltmesi buna örnektir.

Bir Artifact Version `educationally_approved`, `implementation_authorized`, `publication_authorized` veya `learner_visible` eşiklerinden herhangi birine ulaştıktan sonra content-bearing state üzerinde kaydedilmiş **her değişiklik yeni ve benzersiz bir `artifactVersionId` gerektirir**. Bu zorunluluk anlam değiştirmeyen typo correction, non-material content correction, küçük learner-facing text correction ve governed minor revision için de geçerlidir.

“Minor revision” aynı `artifactVersionId`nin yeniden kullanılması anlamına gelemez. Minor revision ayrı bir yeni version identity, daha hafif review kapsamı veya farklı numbering policy kullanabilir; ancak eski `artifactVersionId`yi yeniden kullanamaz ve historically approved state'i overwrite edemez.

Örnek:

```text
Logical Artifact: lesson-9bio-k5
Approved artifactVersionId: version-A
Typo correction artifactVersionId: version-B
```

`v2`, `v1.1`, `revision-002` veya UUID tabanlı format seçenekleri Open Question olarak kalabilir. Benzersiz yeni version identity zorunluluğu açık soru değildir.

Post-approval typo correction; yeni benzersiz `artifactVersionId`, korunmuş önceki sürüm, Correction Record ve provenance link gerektirir. Tarihsel olarak onaylanmış Artifact Version sessizce overwrite edilemez.

Bu zorunluluk content-bearing state değişiklikleri içindir. Saf metadata değişiklikleri gelecekte ayrı bir policy ile değerlendirilebilir. Ancak approval scope, provenance, lifecycle meaning, learner visibility, curriculum association, scientific interpretation, version identity veya validation meaning etkileyen metadata değişikliği harmless metadata-only change sayılamaz.

Onay geçmişi her zaman şu soruyu yanıtlayabilmelidir: "Öğretmen tam olarak hangi içerik durumunu onayladı?"

### 5B. Bilimsel Değişiklik Kuralı

Eski: "Enzimler reaksiyon sırasında tüketilir."

Düzeltilmiş: "Enzimler reaksiyon sırasında tüketilmez."

Sonuç:

- Aynı Logical Artifact korunur.
- Yeni Artifact Version gerekir.
- Önceki sürüm korunur.
- Scientific re-review gerekir.
- Learner-facing anlam değiştiği için educational approval yeniden değerlendirilir.
- Eski onay otomatik aktarılmaz.
- `correctedFrom` lineage bağı korunur.

Bilimsel anlam taşıyan düzeltme, zararsız format değişikliği sayılamaz.

### 5C. Quiz Answer-Key Değişikligi

Onaylı Quiz / Assessment Artifact için correct answer, answer key, scoring logic, validity interpretation veya correctness'i etkileyen distractor anlamı değişirse:

- Aynı Logical Artifact korunabilir.
- Yeni Artifact Version zorunludur.
- Eski onay otomatik aktarılmaz.
- Assessment review ve Authorized Teacher yeniden değerlendirmesi gerekir.
- Bilimsel correctness etkileniyorsa Scientific Authority review gerekir.
- Önceki sürüm audit history içinde korunur.

Answer-key değişikliği cosmetic edit değildir.

### 5D. Materiality Accountability ve Change Classification Record

Reviewer yalnızca materiality recommendation verebilir, evidence sunabilir ve risk sınıflandırması önerebilir. Nihai materiality kararı, Frozen Domain Decision-Rights Model içindeki etkilenen domain'in mevcut named accountable human authority'sine aittir:

- Scientific meaning: Scientific Authority
- Curriculum wording veya scope: Curriculum Owner
- Pedagogical meaning: Authorized Teacher
- Assessment validity: Authorized Teacher; curriculum scope etkileniyorsa Curriculum Owner kendi domain kararını ayrıca verir
- Learner safety: Learner Safety Owner
- Learner-data processing: Data Governance Owner
- Deterministic structural rule governance: Architecture Owner; PASS/FAIL sonucu Validation Service'e aittir

Yeni bir Materiality Owner, Change Owner veya generic final reviewer authority oluşturulmaz.

Bir değişiklik birden fazla domain'i etkiliyorsa her domain için reviewer recommendation ve named accountable authority kararı ayrı kaydedilir. Hiçbir authority başka domain'in kararını override edemez. Etkilenen domain'lerden herhangi biri değişikliği material olarak sınıflandırırsa overall change treatment **material** olur. Domain çatışması COS-RFC-0001 blocker/conflict governance ile çözülür; gerektiğinde Conflict Record oluşturulur ve work ancak affected domain kararları ile gerekli gate'ler geçerli olduğunda resume eder. Reviewer tek başına çatışmayı çözemez.

Materiality kararının kavramsal governance artifact'i **Change Classification Record**dur. Bu kayıt en az şunları temsil eder:

- Change summary
- Affected `artifactId`
- Prior `artifactVersionId`
- Applicable olduğunda new `artifactVersionId`
- Affected domains
- Reviewer recommendations
- Her domain için named accountable authority
- Her domain için material/non-material decision ve rationale
- Required re-review scope
- Approval, publication ve validation impact
- Provenance references

Bu kayıt runtime service veya persistent Artifact Engine varmış anlamına gelmez.

### 5E. Version Identity ile Materiality Ayrımı

```text
POST-APPROVAL CONTENT CHANGE
-> always new unique artifactVersionId

MATERIALITY CLASSIFICATION
-> review, approval, validation ve publication kapsamını belirler
```

Materiality, yeni version identity gerekip gerekmediğini belirlemez. Post-approval content-bearing change için yeni kimlik zaten zorunludur. Materiality yalnızca hangi domain'lerin yeniden review yapacağını, hangi approval'ların yeniden gerekeceğini, validation kapsamını, publication re-authorization kapsamını ve learner-impact handling'i belirler.

## 6. Onay Bağlama

Onay, kesin bir Artifact Version'a uygulanır. Version 1 onayı, Version 2'yi otomatik onaylamaz.

Bir `approvalRef` kavramsal olarak şunları tanımlamalıdır: onay kaynağı, approving authority role, timestamp, approval scope, Artifact Version ve varsa content digest. Authorized Teacher, Scientific Authority, Architecture Owner, Data Governance Owner ve Learner Safety Owner farklı domain'leri onaylayabilir.

Tek bir generic `approved` flag yeterli değildir. Scientific approval educational approval'a; educational approval publication authorization'a eşit değildir.

Yeni Artifact Version oluşturulduğunda önceki version'a ait educational approval, scientific review, implementation authorization, publication authorization, learner visibility permission ve validation result otomatik olarak taşınmaz. **No implicit approval inheritance** temel kuraldır.

Gelecekte non-material değişiklikler için daha hafif explicit re-affirmation veya approval carry-forward mekanizması tanımlanabilir. Böyle bir kayıt en az exact new `artifactVersionId`, prior `artifactVersionId`, approving accountable authority, approval scope, rationale, timestamp ve provenance içermelidir. Eski approval sessizce yeni version'a bağlanamaz.

## 7. Content Digest ve Hash Binding

Onay kavramsal olarak şu üçlüye bağlanabilir:

```text
Artifact Version + contentDigest + approval scope
```

Amaç, onaylanan içeriğin sonradan değişip değişmedigini tespit etmektir. Mevcut depo deterministic hash binding uygulamak zorunda değildir; bu belge yalnızca semantiği tanımlar.

`contentDigest` kullanılırsa `digestAlgorithm`, canonicalization policy ve bu politikanın sürümü kaydedilmelidir. Bu Draft 1 belirli bir kriptografik algoritma seçmez. Farklı Representation'ların aynı Artifact Version için çelişkili onay semantiği üretmemesi canonicalization ve Representation equivalence politikasına bağlıdır.

## 8. Artifact Taksonomisi

### A. Educational Content Artifacts

- Lesson Artifact
- Flashcard Set Artifact
- Quiz / Assessment Artifact
- Infographic Plan Artifact

### B. Visual Output Artifacts

- AI-generated infographic visual
- Diagram output
- Rendered educational visual

Visual output, kaynak Infographic Plan Artifact ile otomatik olarak aynı Artifact sayılmaz.

### C. Mapping ve Structural Artifacts

- Outcome Mapping Artifact
- Registry Mapping Record

Registry yapısı curriculum authority değildir.

### D. Governance Artifacts

- Decision Record
- Conflict Record
- Approval Record
- Validation Report
- Retry Record
- Cancellation Record
- Stage Exception Record
- Migration Record
- Correction Record
- Change Classification Record

### E. Proposal ve Evidence Artifacts

- Revision Proposal
- Evidence Reference
- Analytics Recommendation

Bu son grup ve yapılandırılmış governance Artifact saklaması mevcut depoda tam olarak desteklenmez; gelecekteki tasarım alanıdır.

### 8A. AI-Generated Visual Kuralı

Aynı plandan AI ile yeniden üretilen infographic visual otomatik olarak aynı Artifact Version, aynı onaylı görsel veya aynı validation sonucu sayılmaz. Generative output biyolojik yapıları, etiketleri, ok yönlerini, anatomik ilişkileri, vurgu ve pedagojik anlamı değiştirebilir.

Varsayılan değerlendirme:

- Kimlik sürekliliği varsa yeni Artifact Version veya
- Ayrı bir derived Visual Output Artifact.

Kaynak Infographic Plan Artifact değişmeden kalabilir. Yeni görsel AI provenance, generation relationship, source plan reference, uygun bilimsel/pedagojik review ve lineage gerektirir. Eski görsel onayı otomatik aktarılmaz.

PNG -> WebP, compression, resolution veya color-profile conversion gibi saf teknik dönüşümler bilimsel/pedagojik anlam değişmiyorsa yalnızca Representation değişikliği olabilir.

## 9. Shared Envelope ve Domain Contracts

Lesson Author, Flashcard Author, Quiz / Assessment Author ve Infographic Planner ayrı contract domain'leridir. Ortak envelope; ortak uzmanlık, aynı payload, aynı gate, aynı failure mode veya generic author contract anlamına gelmez.

**Ortak metadata, ortak eğitsel sözleşme demek değildir.**

## 10. Lifecycle İlişkisi

Bu belge Frozen lifecycle'i yeniden tanımlamaz:

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

Artifact Specification, bir **sürümün** bu durumlara nasıl bağlandığını tanımlar. Governance authority, Workflow kuralları, Human Process Owner veya gelecekteki ayrıntılı state machine yerine geçmez.

- Sürüm değişikliği downstream permission'ları geçersiz kılabilir.
- Approval, implementation authorization ve publication authorization sürüme bağlıdır.
- Learner visibility kesin bir Artifact Version'i tanımlamalıdır.

## 11. Immutability Kuralları

Bir Artifact Version educationally approved, implementation authorized, publication authorized veya learner visible olduktan sonra substantive content sessizce overwrite edilemez.

Material change; yeni Artifact Version, preserved lineage, gerekli re-review ve güncel approval binding gerektirir. Tarihsel sürümler provenance ve audit history'nin parçası olarak kalır. Mevcut depoda immutable runtime store bulunduğu iddia edilmez.

## 12. Provenance

Kavramsal provenance en az şunları taşır:

- Kim tarafından ve hangi rolde oluşturulduğu
- AI assistance kullanılıp kullanılmadığı
- Source material ve curriculum source referansları
- Gerektiğinde scientific source referansları
- Önceki Artifact/sürüm kaynakları
- Review ve transformation history
- Migration ve correction history

AI katılımı insan sorumluluğunu silemez. AI nihai eğitsel otorite olamaz.

## 13. Lineage ve Derivation

- `derivedFrom`: Bir Artifact veya sürümden türeme
- `supersedes`: Önceki sürümün yerini alma
- `supersededBy`: Sonraki sürüm tarafından yerinin alınması
- `migratedFrom`: Legacy veya önceki modelden migration
- `correctedFrom`: Hata düzeltilen sürümden türeme

Örnekler: Quiz'in LearningOutcome'dan türetilmesi; infographic planın onaylı lesson concept'ten türemesi; AI visual'in plan Artifact'tan üretilmesi; legacy lesson'in outcome-based Artifact'a migration'ı; bilimsel düzeltmenin önceki sürümü supersede etmesi.

Bu ilişkiler Knowledge Graph altyapısı varmış gibi yorumlanamaz.

## 14. Mevcut Çalışmanın Grandfathering'i

Frozen ilke mevcut 31 mapped Grade 9 LearningOutcome'u, bunlara bağlı lesson content, flashcards, quizzes, registry mappings, audit history, teacher approval history ve migration bekleyen legacy content'i korur.

**LearningOutcome otomatik olarak Artifact ile aynı şey değildir.** Mevcut 31 LearningOutcome değiştirilmez, kimlikleri ve mapping'leri korunur, yeniden yazılmaz ve destructive migration'a uğratılmaz. Outcome-linked mevcut içerik uygun olduğunda `grandfathered_existing` alabilir.

Grandfathering mevcut işi ve provenance'i korur; retroactive invalidation'i engeller. Scientific correctness, pedagogical quality, deterministic compliance veya publication safety sertifikası vermez. Material olarak değiştirilen grandfathered content kontrollü yeni sürüm ve re-review yoluna girer.

## 15. Legacy Migration İlişkisi

Mapped outcome'lar için canonical precedence değişmez:

```text
Universal Learning Model
+ Outcome Registry
+ Approved Outcome Artifacts
```

Legacy content transitional kalır. Migration; source provenance, önceki path/reference, Migration Record, Artifact identity kararı, version lineage ve varsa prior approval history'yi korumalıdır. Bu belge route değiştirmez ve legacy content taşımaz.

## 16. Representation Kuralları

Yeni Representation tek başına yeni Logical Artifact veya Artifact Version gerektirmez. Aynı onaylı Artifact Version'in PDF export'u varsayılan olarak:

- Aynı Logical Artifact
- Aynı Artifact Version
- Yeni Representation

Ancak export veya rendering; missing text, broken labels, shifted diagrams, altered option order, kayıp bilimsel anlam, bozulmuş görsel ilişki veya eksik learner-facing content yaratırsa Representation integrity başarısızdır. Representation-level validation gerekebilir.

Doğru source content, doğru exported representation'i garanti etmez.

## 17. Repository Mapping

| Kavram veya bileşen | Depodaki durum | Sınıf | Değerlendirme |
|---|---|---|---|
| LearningOutcome ve ContentRef tipleri | `src/types/index.ts` | Existing | Artifact kimliğiyle aynı değildir; outcome ve mapping temeli sağlar |
| Registry Service | `src/data/contentRegistry.ts` | Existing | İçerik çözümler; curriculum veya approval authority değildir |
| Registry validation | `src/features/contentCoverage/registryValidation.ts` | Partial existing | Referential ve structural kontrollerin bir bölümünü yapar |
| Question validation | `src/features/contentCoverage/questionValidation.ts` | Partial existing | Soru kimliği, seçenek, cevap ve mapping için sınırlı kontroller yapar |
| Coverage read model | `src/features/contentCoverage/contentCoverageSelectors.ts` | Existing | Availability/placeholder durumu hesaplar; kalite onayı değildir |
| COS report | `src/app/internal/cos-report.tsx` | Partial existing | Mevcut validation ve coverage sonucunu sunar; Artifact Store değildir |
| Outcome route | `src/app/learn/outcome/[outcomeId].tsx` | Existing | Outcome registry content'ini learner-facing olarak çözer |
| Legacy lesson route | `src/app/learn/lesson/[subtopicId].tsx` | Existing transitional | Topic-level content'i doğrudan kullanır; dual-route debt devam eder |
| Outcome content files | `src/data/grade9/outcomes/` | Existing | Repository Representation örnekleridir; formal Artifact envelope yoktur |
| Question data | `src/data/questions/grade9-seed.ts` | Existing | Quiz Representation; formal version identity ve approval binding yoktur |
| Git history | `.git` | Partial existing | Değişiklik geçmişi sağlar; tek başına Artifact lineage sözleşmesi değildir |
| Markdown RFC ve freeze kayıtları | `cos/rfc/`, `cos/architecture/` | Existing | Governance Representation; runtime Artifact Engine değildir |
| Decision records | `DECISIONS.md` | Partial existing | Hafif karar geçmişi; structured Artifact envelope yoktur |
| Logical Artifact identity | Genel Artifact kimliği yok | Logical concept | Mevcut ID'ler kısmi ipucu verir, evrensel artifactId değildir |
| Artifact Version identity | Tam destek yok | Logical concept | `artifactVersionId` saklanmıyor |
| Approval binding | Markdown approval history ve manuel süreç | Partial existing | Exact version/digest binding yok |
| Content digest | Yok | Future service concern | Hash-binding uygulanmıyor |
| Provenance | Git, dosyalar ve dokümanlar | Partial existing | Structured ve eksiksiz değil |
| Lineage | Git geçmişi ve manuel notlar | Partial existing | `derivedFrom`/`correctedFrom` alanları yok |
| Immutable history | Git ile kısmi | Partial existing | Immutable runtime store yok |
| Artifact lifecycle state | Dokümante süreç | Logical concept | Persistent Artifact state machine yok |
| Representation integrity | Genel deterministic kontrol yok | Not v1 | Export/render kalite kapısı gelecekte tasarlanacak |
| Runtime Artifact Engine | Yok | Future service | Bu Draft 1 tarafından uygulanmaz |

Mevcut validator'lar exactly nine layers, exactly six flashcards, exactly three mapped questions, exactly four ContentRef types, exactly five distinct A-E options veya canonical topic/subtopic relationships'i tam olarak enforce etmez.

## 18. Zorunlu Senaryo Testleri

| Senaryo | Kimlik | Sürüm | Representation | Onay etkisi | Validation etkisi | Provenance | Governance kaydı | Learner visibility | Açık nokta |
|---|---|---|---|---|---|---|---|---|---|
| 1. Onaylı lesson'da bilimsel cümle değişir | Aynı Logical Artifact | Yeni Artifact Version | Kaynak ve render güncellenir | Eski onay aktarılmaz; science review ve gerekirse teacher re-approval | Bilimsel ve ilgili deterministic kontroller yeniden çalışır | Önceki sürüm ve kaynaklar korunur | Scientific Correction Record, `correctedFrom` | Yeni sürüm onaylanana kadar eski durum korunur veya risk politikasına göre bloklanır | Acil correction publication politikası gelecekte |
| 2A. Onay öncesi anlamsız typo | Aynı | Aynı draft version olabilir | Değişen Representation | Henuz onay yok | Policy gerektirirse yeniden kontrol | Edit kaydı korunur | Draft change record repository policy'ye bağlı | Etki yok | Audit boundary tanımı açık |
| 2B. Onay sonrası anlamsız typo | Aynı | Yeni ve benzersiz `artifactVersionId`; minor revision da yeni kimlik taşır | Yeni Representation | No implicit approval inheritance; policy izin verirse explicit limited re-affirmation/carry-forward gerekir | Review kapsamı materiality classification ile belirlenir; gerekli Representation/content validation yeniden çalışır | Önceki onaylı version ve yeni version linki korunur | Correction Record ve Change Classification Record | Yeni version gerekli explicit kararlar olmadan görünür olmaz | Yalnızca numbering ve hafif review derinliği açık |
| 3. Quiz answer key değişir | Aynı kalabilir | Yeni Artifact Version | Quiz Representation güncellenir | Eski onay aktarılmaz; assessment ve teacher review gerekir | Scoring, answer ve gerekirse science validation | Önceki key korunur | Assessment Scope/Correction Record | Yeni key onaylanmadan yayımlanmaz | Etkilenen learner attempt politikası açık |
| 4. Aynı sürüm PDF'e aktarılır | Aynı | Varsayılan aynı | Yeni PDF Representation | Format nedeniyle otomatik yeni onay gerekmez | Representation integrity gerekebilir | Export kaynağı ve aracı kaydedilir | Export/Validation Record gerekebilir | PDF bozuksa bloklanır | Representation equivalence açık |
| 5. AI aynı plandan görsel üretir | Kimlik sürekliliğine göre aynı visual Artifact veya yeni derived Artifact | Yeni version veya yeni derived Artifact | Yeni visual output | Eski visual onayı aktarılmaz | Bilimsel, pedagojik ve görsel validation | AI katılımı, prompt/policy, plan reference | Generation/Review Record | Review tamamlanmadan yeni görsel görünmez | AI identity policy açık |
| 6. Legacy lesson canonical Artifact'a taşınır | Identity decision gerekir | İlk canonical/migrated version | Legacy ve canonical Representation ayrılır | Prior approval varsa provenance olarak korunur; otomatik yeni onay sayılmaz | Mapping ve content validation | Legacy path ve tarihçe korunur | Migration Record | Canonical precedence korunur | Identity continuity kararı case-by-case |
| 7. Grandfathered Artifact material değişir | Aynı Logical Artifact olabilir | Yeni Artifact Version | Yeni Representation | Grandfathering yeni sürümü onaylamaz | Tüm etkilenmiş gate'ler yeniden çalışır | Eski artifact ve approval history korunur | Change/Correction Record | Yeni sürüm lifecycle'i tamamlamadan görünmez | Ayrıntılı geçiş sözleşmesi gelecekte |
| 8. Publication-authorized Artifact değişir | Aynı Logical Artifact | Her content-bearing change için yeni ve benzersiz `artifactVersionId` | Yeni Representation | Publication authorization otomatik aktarılmaz; material change yeni domain review ve authorization, non-material change ise policy varsa explicit re-affirmation/carry-forward gerektirir | Materiality kararına göre validation kapsamı belirlenir; gerekli post-validation yeniden çalışır | Önceki published version ve authorization korunur | Change Classification Record, Correction Record ve gerekli Publication Record | Learner visibility exact yeni version'a ancak gerekli authorization sonrası geçer | Emergency rollback ve explicit carry-forward politikası açık |
| 9. Registry mapping değişir, content değişmez | Educational Artifact aynı; structural Artifact/record değişir | Mapping için yeni governed state/version | Content Representation değişmeyebilir | Educational approval otomatik geçersiz sayılmaz; scope etkisi ayrıca incelenir | Registry validation zorunlu | Eski ve yeni mapping korunur | Registry Mapping/Decision Record | Çözümleme belirsizse bloklanır | Structural Artifact granularity açık |
| 10. İki dosya aynı sürümü iddia eder ama çelişir | Aynı-version iddiası sessizce kabul edilemez; identity investigation gerekir | Materially conflicting content aynı exact `artifactVersionId` altında kalamaz | Representation integrity conflict | Approval binding hangi içeriğe ait olduğu belirlenene kadar güvenilir sayılamaz | Digest/content, representation identity ve provenance incelemesi gerekir | İki dosyanın kaynağı ve dönüşüm geçmişi korunur | Conflict Record | Correctness belirsizken learner visibility bloklanır | Canonicalization ve equivalence policy ayrıntısı açık |

## 19. Kapsam Dışı

- Runtime Artifact Engine
- Database schema implementation ve exact persistence model
- Object storage veya distributed storage tasarımı
- Cryptographic signing infrastructure veya blockchain
- Agent Contract ayrıntıları
- Capability Matrix ve Trust Levels
- Ayrıntılı Workflow State Machine
- Memory Engine
- Knowledge Graph schema/runtime
- Evidence Engine implementation
- Teacher OS implementation
- Automated publication veya registry writing
- Distributed agent runtime ve runtime COS Kernel
- Complete Lesson, Flashcard, Quiz veya Infographic schema
- Exact semantic versioning policy
- Exact cryptographic algorithm

## 20. Objektif Kabul Kriterleri

1. Logical Artifact kimliği ile Artifact Version kimliği ayrıdır.
2. Artifact kimliği file path'ten ayrıdır.
3. Representation, Artifact Version'dan ayrıdır.
4. Material changes governed version handling gerektirir.
5. Scientific meaning change yeni sürüm işlemi gerektirir.
6. Approved answer-key change yeni sürüm gerektirir.
7. Approval exact `artifactVersionId`ye bağlanır; başka bir version identity'ye otomatik taşınmaz.
8. Yeni sürümler onayı sessizce miras almaz.
9. Publication authorization exact `artifactVersionId`ye bağlanır; yeni version otomatik olarak devralmaz.
10. Learner visibility belirli bir sürümü tanımlar.
11. Onaylı substantive content sessizce overwrite edilemez.
12. Post-approval content correction, typo dahil, yeni benzersiz `artifactVersionId` alır ve historical approved state korunur.
13. Provenance korunur.
14. AI-generated output AI katılımıni kaydeder.
15. Yeniden üretilen AI visual önceki visual onayıni otomatik almaz.
16. Lineage temsil edilebilir.
17. PDF/export Representation otomatik yeni Artifact oluşturmaz.
18. Representation integrity failure, source Artifact correctness'ten ayrıdır.
19. Grandfathered work destructive olarak geçersiz kılınmaz.
20. Grandfathering kalite veya güvenlik sertifikası vermez.
21. Mevcut 31 LearningOutcome değişmez.
22. LearningOutcome otomatik olarak Artifact sayılmaz.
23. Repository capability abartılmaz.
24. Future Artifact Engine mevcutmuş gibi gösterilmez.
25. Shared envelope authoring domain'lerini birleştirmez.
26. Frozen authority rules değişmez: reviewer yalnızca recommendation verir; nihai materiality kararı mevcut named accountable authority tarafından verilir.
27. Universal vs Legacy precedence değişmez.
28. Kabul runtime implementation izni vermez.
29. Bu belge Agent Contracts oluşturmaz.
30. Çelişen iki dosya sessizce aynı exact Artifact Version'i iddia edemez.

## 21. Açık Sorular

| Soru | Neden önemli | Revision 2 için blocking | Gelecek sahibi/specification |
|---|---|---|---|
| Hash öncesi canonicalization | Farklı Representation'larda aynı semantiğin digest'ini belirler | NO | Artifact Engine implementation policy |
| Digest algorithm policy | Guvenlik, migration ve uzun ömür etkisi vardır | NO | Security/Data Governance + Artifact Engine |
| Artifact ID üretim formatı | Global uniqueness ve okunabilirlik dengesini etkiler | NO | Artifact Specification revision / Architecture Owner |
| Version numaralandırma formatı | Minor/full version ayrımını ve insan okunabilirliğini etkiler | NO | Artifact Specification revision |
| Metadata-only changes | Saf metadata değişikliğinin yeni version identity gerektirip gerektirmediğini belirler; content-bearing ve anlam etkileyen metadata değişiklikleri bu istisnaya giremez | NO | Artifact lifecycle policy |
| Representation equivalence | İki dosyanın aynı sürümü temsil edip etmediğini belirler | NO | Representation validation specification |
| Compound Artifacts | Lesson+visual gibi paketlerin kimliğini etkiler | NO | Artifact Specification revision |
| Partial approval | Domain-bazlı onayların release'e etkisini belirler | NO | Workflow / State Machine + approval policy |
| Localization/language variants | Çeviri ile aynı kimlik arasındaki siniri belirler | NO | Localization policy |
| Country/curriculum variants | Aynı kavramın farklı resmi kapsamlarını ayırır | NO | Curriculum authority model |
| Multi-subject reuse | Ortak Artifact ile subject-specific Artifact sınırını etkiler | NO | Capability Matrix / Knowledge Graph design |
| Archive/retention policy | Tarihsel sürümlerin ne kadar tutulacağını belirler | NO | Data Governance + Artifact Engine |
| Minor revision vs full version label | Yeni ve benzersiz `artifactVersionId` zorunluluğunu değiştirmeden numaralandırma ve review derinliğini belirler | NO | Workflow / Artifact lifecycle policy |
| AI regeneration identity policy | Yeni visual'in sürüm mü yeni Artifact mi olduğunu belirler | NO | Visual Artifact policy |
| Visual Representation equivalence | Teknik dönüşüm ile anlam değişikliğini ayırır | NO | Accessibility/visual validation policy |
| Explicit non-material approval carry-forward policy | No implicit inheritance kuralını değiştirmeden hangi domain'in explicit re-affirmation verebileceğini ve review derinliğini belirler | NO | Domain Decision-Rights + Workflow policy |
| Emergency correction handling | Kritik bir düzeltmede mevcut learner-visible version'ın nasıl durdurulacağını, geri alınacağını veya geçici olarak yönetileceğini belirler | NO | Workflow / Publication policy |
| Historical learner-attempt impact policy | Quiz veya assessment correction sonrasında geçmiş attempt ve score kayıtlarının nasıl yorumlanacağını belirler | NO | Assessment policy + Teacher OS |

## 22. Bilinen Borç

- Legacy documentation shorthand migration bekliyor.
- Dual-route technical debt devam ediyor.
- Standalone Constitution, Manifesto ve Learner Model doğrulaması eksik.
- Grandfathered transition semantics ayrıntılandırılacak.
- Future runtime services uygulanmadı.
- Current validator limitations devam ediyor.
- Multi-role human governance role-labelled Decision Records gerektiriyor.
- Canonicalization çözülmedi.
- Exact version-numbering policy çözülmedi.
- AI-generated visual identity edge cases açık.

## 23. Revision History

| Aşama | Tarih | Durum | Açıklama |
|---|---|---|---|
| Draft 1 created | 2026-07-07 | Proposed | Logical Artifact, Artifact Version, Representation, provenance, lineage ve approval-binding temel modeli oluşturuldu |
| Independent Architecture Review completed | 2026-07-08 | Review completed | Verdict: NEEDS REVISION; complexity: SLIGHTLY OVER-ENGINEERED |
| Revision required | 2026-07-08 | Two blocking issues | Post-approval minor revision kimliği ve materiality accountability belirsizlikleri kaydedildi |
| Revision 2 prepared | 2026-07-08 | Proposed; pending review | İki blocker benzersiz post-approval version identity ve Frozen domain authority materiality modeliyle giderildi |
| Post-Revision Architecture Review passed | 2026-07-08 | Review passed | İki blocker RESOLVED; daha önce başarısız olan 7, 9, 12 ve 26 numaralı kriterler PASS |
| Artifact Specification Acceptance Review passed | 2026-07-08 | Acceptance review passed | Verdict: ACCEPT WITH NONBLOCKING NOTES; 30 acceptance criterion PASS; blocking issue yok |
| Accepted | 2026-07-08 | Accepted | Revision 2, COS Artifact Specification normatif baseline'ı olarak kabul edildi; runtime implementation izni verilmedi |

## 24. Acceptance Record

| Alan | Değer |
|---|---|
| Acceptance Gate | Artifact Specification Acceptance Review Gate |
| Verdict | ACCEPT WITH NONBLOCKING NOTES |
| Blocking Issues | None |
| Accepted Revision | 2 |
| Acceptance Date | 2026-07-08 |
| Complexity Assessment | SLIGHTLY OVER-ENGINEERED |

### Acceptance Basis

- Independent Architecture Review tamamlandı.
- Revision 1 için revision gerektiği kaydedildi ve iki blocking issue tanımlandı.
- Revision 2 hazırlandı; Blocker 1 ve Blocker 2 çözüldü.
- Post-Revision Architecture Review geçti.
- Otuz acceptance criterion'ın tamamı geçti.
- Daha önce başarısız olan 7, 9, 12 ve 26 numaralı kriterler geçti.
- Frozen architecture compatibility ve repository reality audit geçti.
- On scenario test geçti.
- Mevcut 31 LearningOutcome güvenliği doğrulandı.
- Universal/Legacy precedence korundu.
- Runtime implementation iddiası eklenmedi.
- `npm.cmd run typecheck` ve `git diff --check` geçti.

### Acceptance Anlamı

COS-RFC-0003 Revision 2'nin Accepted olması; Artifact identity ve Artifact Version semantiğini, Representation ayrımını, version-bound approval ve no implicit approval inheritance ilkelerini, provenance ve lineage temelini, post-approval unique version identity kuralını ve grandfathering temelini kabul eder. Mevcut 31 LearningOutcome unchanged kalır; ID'leri ve mapping'leri korunur, yeniden yazılmaz veya destructive migration'a uğratılmaz. `LearningOutcome` ile `Artifact` aynı kavram değildir.

Acceptance; runtime Artifact Engine, database schema, hash-binding implementation, immutable store, Agent Contracts, Workflow Engine, Memory sistemi, Knowledge Graph, Teacher OS veya runtime COS implementation oluşturmaz ve bunlara implementation izni vermez.

### Accepted Nonblocking Follow-up Obligations

1. Explicit carry-forward policy ayrıntıları gelecekte tanımlanmalıdır.
2. Saf metadata-only change policy ayrıntıları açık kalır.
3. Emergency correction ve historical learner-attempt etkileri gelecekte ele alınmalıdır.
4. Türkçe/İngilizce terminoloji için editorial cleanup gerekebilir.
5. Yirmi bir alanlı Artifact envelope hafif kapsamlıdır ancak kavramsaldır ve runtime yükümlülüğü yaratmaz.

`SLIGHTLY OVER-ENGINEERED` değerlendirmesi acceptance blocker değildir. Model kavramsal olduğu için future implementation minimum viable semantics gözetmelidir; Acceptance, yirmi bir alanın tamamının COS v1 runtime içinde zorunlu olarak uygulanacağı anlamına gelmez.

## 25. Accepted Status

Status: Accepted

Revision: 2

Review State: Artifact Specification Acceptance Review Passed

Recommended Next Action: Prepare Agent Contract Specification

Bu acceptance runtime implementation, Artifact Engine veya Agent Contract oluşturmaz.
