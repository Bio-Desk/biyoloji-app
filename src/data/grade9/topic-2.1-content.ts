import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: İnorganik Bileşikler (9BIO-2.1)
// Alt Konu: Suyun Yapısı ve Önemi (9-2.1-water)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_1_water: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.1-water-L1',
    subtopicId: '9-2.1-water',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Su, canlı vücudunun en fazla bulunan ve en önemli inorganik bileşiğidir. Hücre ağırlığının ortalama %70-95\'ini oluşturur. Su, polar (kutuplu) bir moleküldür: oksijen kısmen negatif (δ⁻), hidrojenler kısmen pozitif (δ⁺) yüklüdür. Bu polarlık, suyun benzersiz fiziksel ve kimyasal özelliklerinin temelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Suyun canlılar için önemi: 1) Çözücü ortam sağlar 2) Metabolik tepkimelerde tepken/ürün olarak görev alır (hidroliz, dehidrasyon sentezi, fotosentez) 3) Madde taşınmasını sağlar 4) Vücut sıcaklığını düzenler 5) Hücre şeklini ve turgor basıncını korur 6) Yağlayıcı/tampon görevi yapar (eklem sıvısı, amniyon sıvısı).',
        },
        {
          type: 'tip',
          text: 'İnorganik moleküller: Su, mineraller (asit, baz, tuz dahil), bazı gazlar (O₂, CO₂). Genel olarak küçük moleküllerdir, içlerinde C-H bağı bulunmaz (CO₂ hariç) ve canlı vücudunda sentezlenmezler — dışarıdan alınırlar.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.1-water-L2',
    subtopicId: '9-2.1-water',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-inorganik-bilesikler-1',
      body: 'Su molekülünün polar yapısı, hidrojen bağları aracılığıyla komşu su molekülleriyle etkileşime girmesini sağlar. Bu hidrojen bağları, suyun kohezyon (su moleküllerinin birbirini çekmesi), adezyon (su moleküllerinin başka yüzeylere tutunması), yüzey gerilimi ve yüksek öz ısı gibi özelliklerinin temelini oluşturur.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Kohezyon örneği: Bitkilerde ksilem borularında suyun kesintisiz bir sütun halinde yukarı taşınması (kohezyon-gerilim teorisi).\nAdezyon örneği: Su moleküllerinin ksilem boru çeperlerine tutunarak suyun yukarı çıkışına yardımcı olması (kapilarite).\nYüzey gerilimi örneği: Bazı böceklerin (su örümceği) su yüzeyinde batmadan yürüyebilmesi.',
        },
        {
          type: 'tip',
          text: 'Suyun yoğunluk anomalisi: Su, +4°C\'de en yoğun haldedir; buz (0°C) sudan daha az yoğundur ve bu yüzden yüzer. Bu özellik, donan göllerde altta sıvı su tabakasının kalmasını ve sucul canlıların kışı geçirebilmesini sağlar.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.1-water-L3',
    subtopicId: '9-2.1-water',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Suyun temel özelliklerinin yaşam olaylarıyla ilişkisi:',
      steps: [
        '1. ÇÖZÜCÜLÜK ÖZELLİĞİ — Su, polar yapısı sayesinde birçok iyonik ve polar maddeyi (glikoz, tuzlar, aminoasitler) çözer. Hücre içi ve dışı tepkimelerin büyük çoğunluğu sulu ortamda gerçekleşir.',
        '2. ÖZ ISI (YÜKSEK ISI KAPASİTESİ) — Suyun sıcaklığını değiştirmek için fazla enerji gerekir. Bu sayede vücut sıcaklığı ani değişimlerden korunur ve denizler/göller iklimi dengeler.',
        '3. KOHEZYON — Su molekülleri arasındaki hidrojen bağları nedeniyle birbirini çekmesi. Bitkilerde su sütununun kesintisiz yükselmesini sağlar.',
        '4. ADEZYON — Su moleküllerinin polar/yüklü yüzeylere (örneğin ksilem çeperine) tutunması. Kapilar hareketi destekler.',
        '5. YÜZEY GERİLİMİ — Su yüzeyindeki moleküllerin içe doğru çekilmesiyle oluşan gerilim. Su damlasının küresel şeklini ve bazı canlıların su üzerinde durabilmesini sağlar.',
        '6. YOĞUNLUK ÖZELLİĞİ — Buzun sudan hafif olması nedeniyle su yüzeyinde donma oluşur, alttaki sıvı tabaka canlı yaşamını korur.',
        '7. METABOLİK TEPKİMELERDEKİ ROLÜ — Hidroliz tepkimelerinde su harcanır (büyük molekül + su → küçük moleküller); dehidrasyon sentezinde su açığa çıkar (küçük moleküller → büyük molekül + su). Fotosentezde su, elektron ve H⁺ kaynağıdır; oksijen suyun parçalanmasından açığa çıkar.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.1-water-L4',
    subtopicId: '9-2.1-water',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Polar Molekül: Elektron dağılımı eşit olmayan, kısmi pozitif ve negatif uçları bulunan molekül (örn. su).' },
        { type: 'tip', text: 'Hidrojen Bağı: Bir molekülün kısmi pozitif yüklü hidrojeni ile başka bir molekülün kısmi negatif yüklü atomu arasındaki zayıf çekim kuvveti.' },
        { type: 'tip', text: 'Kohezyon: Aynı cins moleküllerin (su-su) birbirini çekmesi.' },
        { type: 'tip', text: 'Adezyon: Farklı cins moleküllerin (su-katı yüzey) birbirini çekmesi.' },
        { type: 'tip', text: 'Öz Isı: Bir maddenin 1 gramının sıcaklığını 1°C artırmak için gereken ısı miktarı; suda yüksektir.' },
        { type: 'tip', text: 'Hidroliz: Büyük bir molekülün su kullanılarak küçük moleküllere parçalanması.' },
        { type: 'tip', text: 'Dehidrasyon Sentezi: Küçük moleküllerin birleşerek büyük molekül oluşturması ve bu sırada su açığa çıkması.' },
        { type: 'tip', text: 'Turgor Basıncı: Hücre içine giren suyun hücre zarını hücre çeperine bastırmasıyla oluşan basınç; bitkilerde dik durmayı sağlar.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.1-water-L5',
    subtopicId: '9-2.1-water',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Su organik bir bileşiktir çünkü canlılar için çok önemlidir."\n✅ Su İNORGANİK bir bileşiktir. Organik olma kriteri önem değil, yapıda C-H (karbon-hidrojen) bağı bulunmasıdır. Suda C-H bağı yoktur.',
        },
        {
          type: 'warning',
          text: '❌ "Buz, sudan daha yoğundur, bu yüzden batar."\n✅ Buz, sudan DAHA AZ yoğundur ve bu yüzden su üzerinde YÜZER. Bu özel durum (yoğunluk anomalisi) suyun hidrojen bağlarından kaynaklanır.',
        },
        {
          type: 'warning',
          text: '❌ "Kohezyon ve adezyon aynı şeydir."\n✅ Kohezyon: aynı cins moleküllerin (su-su) birbirini çekmesi. Adezyon: farklı cins moleküllerin (su-yüzey) birbirini çekmesi. İkisi birlikte ksilemde su taşınmasını sağlar.',
        },
        {
          type: 'warning',
          text: '❌ "Hidroliz ve dehidrasyon sentezi aynı yönde işleyen tepkimelerdir."\n✅ Hidroliz, su HARCAYARAK büyük molekülü parçalar (yıkım/katabolizma). Dehidrasyon sentezi, su AÇIĞA ÇIKARARAK küçük molekülleri birleştirir (yapım/anabolizma). Tam tersi yöndedirler.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.1-water-L6',
    subtopicId: '9-2.1-water',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdakilerden hangisi suyun canlılar için önemli olmasının nedenlerinden biri değildir?" → çözücülük, öz ısı, taşıma, tepkimeye katılma seçenekleri.\n2) İnorganik-organik bileşik ayrımını sorgulayan sorular: "Su, mineral, vitamin, karbonhidrat, protein, yağ" listesinden inorganikleri seçme.\n3) Kohezyon-adezyon-yüzey gerilimi kavramlarının günlük hayat örnekleriyle eşleştirilmesi.',
      aytPattern: '1) Hidroliz ve dehidrasyon sentezi tepkimelerinin metabolizma (sindirim, fotosentez, protein sentezi) ile ilişkilendirilmesi.\n2) Suyun yoğunluk anomalisinin ekosistemlere etkisi (göllerin donması) ile ilgili yorum soruları.\n3) Fotosentezde suyun rolü (ışığa bağlı reaksiyonlarda suyun parçalanması, O₂ açığa çıkışı) AYT\'de fotosentez konusuyla bütünleşik sorulabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'En sık tuzak: "Su, hücresel solunumda ve fotosentezde HEM ÜRÜN HEM TEPKEN olabilir." Hücresel solunumda su ÜRÜNdür (oksijenli solunumda açığa çıkar); fotosentezde su TEPKENdir (ışığa bağlı reaksiyonlarda parçalanır).',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.1-water-L7',
    subtopicId: '9-2.1-water',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Suyun özelliklerini günlük hayattan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🌊 Öz ısı: Yaz aylarında deniz kenarındaki şehirlerin iç bölgelere göre daha serin, kış aylarında ise daha ılık olması, denizin yüksek öz ısısı sayesinde sıcaklığı yavaş değiştirmesinden kaynaklanır.',
        },
        {
          type: 'example',
          text: '🌱 Kapilarite: Bir kağıt havlunun ucunu suya değdirdiğinizde suyun havluda yukarı doğru ilerlemesi, adezyon ve kohezyon kuvvetlerinin birlikte çalışmasıyla gerçekleşir — bitkilerdeki su taşınmasının basit bir modelidir.',
        },
        {
          type: 'example',
          text: '🧊 Donmuş göller: Kış aylarında göllerin yalnızca yüzeyinin donması, altındaki suyun sıvı kalmasını ve balıkların hayatta kalmasını sağlar — buzun sudan hafif olması sayesinde.',
        },
        {
          type: 'example',
          text: '🥤 Sindirim (hidroliz): Yediğimiz nişastanın sindirim sisteminde su kullanılarak glikoz birimlerine parçalanması, hidroliz tepkimesinin günlük hayattaki en somut örneğidir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.1-water-L8',
    subtopicId: '9-2.1-water',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.1-water-L9',
    subtopicId: '9-2.1-water',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Suyun Yapısı ve Önemi
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_1_water: Flashcard[] = [
  { id: 'fc-9-2.1-water-01', subtopicId: '9-2.1-water', orderIndex: 1,
    term: 'Polar Molekül', definition: 'Elektron dağılımı eşit olmayan, kısmi yüklü uçları bulunan molekül', example: 'Su molekülünde oksijen kısmi negatif (δ⁻), hidrojenler kısmi pozitif (δ⁺) yüklüdür' },
  { id: 'fc-9-2.1-water-02', subtopicId: '9-2.1-water', orderIndex: 2,
    term: 'Hidrojen Bağı', definition: 'Polar moleküller arasındaki zayıf elektrostatik çekim kuvveti', example: 'Su moleküllerinin birbirine bağlanmasını sağlayan kuvvet' },
  { id: 'fc-9-2.1-water-03', subtopicId: '9-2.1-water', orderIndex: 3,
    term: 'Kohezyon', definition: 'Aynı tür moleküllerin (su molekülleri) birbirini çekmesi', example: 'Ksilem borularında suyun kesintisiz sütun halinde taşınması' },
  { id: 'fc-9-2.1-water-04', subtopicId: '9-2.1-water', orderIndex: 4,
    term: 'Adezyon', definition: 'Farklı türden moleküllerin birbirini çekmesi', example: 'Su moleküllerinin ksilem boru çeperine tutunması' },
  { id: 'fc-9-2.1-water-05', subtopicId: '9-2.1-water', orderIndex: 5,
    term: 'Öz Isı', definition: 'Bir maddenin sıcaklığını 1°C değiştirmek için gereken enerji miktarı', example: 'Suyun yüksek öz ısısı, vücut ve iklim sıcaklığını dengeler' },
  { id: 'fc-9-2.1-water-06', subtopicId: '9-2.1-water', orderIndex: 6,
    term: 'Yüzey Gerilimi', definition: 'Sıvı yüzeyindeki moleküllerin iç kısma doğru çekilmesiyle oluşan gerilim kuvveti', example: 'Su örümceğinin su yüzeyinde batmadan durabilmesi' },
  { id: 'fc-9-2.1-water-07', subtopicId: '9-2.1-water', orderIndex: 7,
    term: 'Hidroliz', definition: 'Büyük bir molekülün su kullanılarak küçük birimlere parçalanması', example: 'Nişastanın sindirimde glikoza parçalanması' },
  { id: 'fc-9-2.1-water-08', subtopicId: '9-2.1-water', orderIndex: 8,
    term: 'Dehidrasyon Sentezi', definition: 'Küçük moleküllerin birleşerek büyük molekül oluşturması ve su açığa çıkması', example: 'Aminoasitlerin birleşerek protein oluşturması' },
  { id: 'fc-9-2.1-water-09', subtopicId: '9-2.1-water', orderIndex: 9,
    term: 'Yoğunluk Anomalisi', definition: 'Suyun +4°C\'de en yoğun olması ve buzun sudan daha az yoğun olması', example: 'Donan göllerde buzun yüzeyde kalması, alttaki suyun sıvı kalması' },
  { id: 'fc-9-2.1-water-10', subtopicId: '9-2.1-water', orderIndex: 10,
    term: 'Turgor Basıncı', definition: 'Hücre içine giren suyun hücre zarını çepere bastırmasıyla oluşan basınç', example: 'Bitkilerin diri ve dik durmasını sağlar; su kaybında bitki solar' },
];

// ─────────────────────────────────────────────────────────────
// KONU: İnorganik Bileşikler (9BIO-2.1)
// Alt Konu: Mineraller (9-2.1-minerals)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_1_minerals: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.1-minerals-L1',
    subtopicId: '9-2.1-minerals',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Mineraller, canlı vücudunda bulunan inorganik elementlerdir. Vücut tarafından sentezlenemez, besinlerle dışarıdan alınması gerekir. Yapısal görevlerin (kemik, diş yapımı) yanında, asıl önemli rolleri DÜZENLEYİCİ görevlerdir: enzim aktivasyonu, sinir iletimi, kas kasılması, asit-baz dengesi, su dengesi gibi pek çok metabolik olayda kritik rol oynarlar.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Mineraller, ihtiyaç duyulan miktara göre ikiye ayrılır:\nMakro mineraller (günde >100 mg gerekir): Kalsiyum (Ca), Fosfor (P), Potasyum (K), Sodyum (Na), Magnezyum (Mg), Klor (Cl)\nMikro mineraller / iz elementler (günde <100 mg gerekir): Demir (Fe), İyot (I), Çinko (Zn), Bakır (Cu), Florür (F)',
        },
        {
          type: 'tip',
          text: 'Mineraller, vitaminlerin aksine yapısında karbon (C) bulundurmaz — bu nedenle inorganik bileşikler grubunda yer alır. Pişirme/ısıtma ile bozulmazlar (vitaminlerin aksine), ancak suda çözünerek (örneğin kaynama suyuyla) kayba uğrayabilirler.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.1-minerals-L2',
    subtopicId: '9-2.1-minerals',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-inorganik-bilesikler-2',
      body: 'Aşağıda önemli minerallerin vücuttaki başlıca görevleri ve eksiklik durumunda ortaya çıkan sorunlar gruplandırılmıştır.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Kalsiyum (Ca): Kemik/diş yapısı, kas kasılması, kan pıhtılaşması → Eksikliğinde osteoporoz, raşitizm.\nDemir (Fe): Hemoglobin yapısında oksijen taşınması → Eksikliğinde demir eksikliği anemisi (kansızlık).\nİyot (I): Tiroit hormonlarının (tiroksin) yapısında → Eksikliğinde guatr, çocuklarda zihinsel gelişim geriliği (kretinizm).\nSodyum (Na) ve Potasyum (K): Sinir iletimi, kas kasılması, hücre içi-dışı su dengesi → Dengesizlikte kas krampları, ritim bozuklukları.\nMagnezyum (Mg): Enzim aktivasyonu, kas-sinir fonksiyonu, klorofil yapısında (bitkilerde) → Eksikliğinde kas spazmları.\nFosfor (P): Kemik/diş yapısı, ATP, DNA/RNA, hücre zarı (fosfolipit) yapısında → Eksikliğinde kemik zayıflığı, halsizlik.',
        },
        {
          type: 'tip',
          text: 'Hatırlatma: Kalsiyum ve fosfor birlikte kemik/diş yapısında bulunur; ancak fosfor ayrıca enerji (ATP) ve genetik materyal (DNA/RNA) yapısında da görev alır — bu yüzden fosfor hem inorganik mineral hem de organik moleküllerin (nükleotid, fosfolipit) bileşeni olarak karşımıza çıkar.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.1-minerals-L3',
    subtopicId: '9-2.1-minerals',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Önemli minerallerin görevleri ve eksiklik durumları:',
      steps: [
        '1. KALSİYUM (Ca) — Kemik ve diş yapısının ana bileşeni; ayrıca kas kasılması, sinir iletimi ve kan pıhtılaşmasında görev alır. Eksikliğinde çocuklarda raşitizm, yetişkinlerde osteoporoz görülür.',
        '2. DEMİR (Fe) — Hemoglobin ve miyoglobin yapısında bulunarak oksijen taşınmasını sağlar; bazı enzimlerin yapısına katılır. Eksikliğinde demir eksikliği anemisi (kansızlık) oluşur; halsizlik ve solgunlukla kendini gösterir.',
        '3. İYOT (I) — Tiroit bezinde üretilen tiroksin hormonunun yapı taşıdır; metabolizma hızının düzenlenmesinde kritik rol oynar. Eksikliğinde guatr (tiroit bezinin büyümesi) ve özellikle çocuklarda zihinsel/fiziksel gelişim geriliği görülür.',
        '4. SODYUM (Na) VE POTASYUM (K) — Hücre içi-dışı su ve elektrolit dengesini, sinir hücrelerinde aksiyon potansiyeli oluşumunu ve kas kasılmasını sağlar. Dengesizliklerinde kas krampları, tansiyon sorunları ve kalp ritim bozuklukları görülebilir.',
        '5. MAGNEZYUM (Mg) — Birçok enzimin aktivasyonunda kofaktör olarak görev alır; kas ve sinir fonksiyonlarını destekler; bitkilerde klorofil molekülünün merkez atomudur. Eksikliğinde kas krampları ve yorgunluk görülür.',
        '6. FOSFOR (P) — Kemik ve diş mineral yapısında, ayrıca ATP, DNA, RNA ve fosfolipitlerin yapısında bulunur; enerji metabolizması için vazgeçilmezdir. Eksikliğinde kemik zayıflığı ve enerji düşüklüğü görülür.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.1-minerals-L4',
    subtopicId: '9-2.1-minerals',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Mineral: Vücutta sentezlenemeyen, dışarıdan besinlerle alınması gereken inorganik element.' },
        { type: 'tip', text: 'Makro Mineral: Günlük ihtiyacı 100 mg\'ın üzerinde olan mineral (Ca, P, K, Na, Mg, Cl).' },
        { type: 'tip', text: 'Mikro Mineral (İz Element): Günlük ihtiyacı çok az miktarda olan mineral (Fe, I, Zn, Cu, F).' },
        { type: 'tip', text: 'Osteoporoz: Kalsiyum eksikliğine bağlı kemik yoğunluğunun azalması ve kemiklerin kırılganlaşması.' },
        { type: 'tip', text: 'Anemi (Kansızlık): Demir eksikliğine bağlı hemoglobin/oksijen taşıma kapasitesinin düşmesi.' },
        { type: 'tip', text: 'Guatr: İyot eksikliğine bağlı tiroit bezinin büyümesi.' },
        { type: 'tip', text: 'Elektrolit Dengesi: Na⁺, K⁺, Cl⁻ gibi iyonların hücre içi-dışı dengesinin korunması.' },
        { type: 'tip', text: 'Kofaktör: Bir enzimin işlevini yerine getirebilmesi için ihtiyaç duyduğu mineral veya iyon (örn. Mg²⁺).' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.1-minerals-L5',
    subtopicId: '9-2.1-minerals',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Mineraller sadece kemik ve diş yapımında kullanılır."\n✅ Minerallerin en önemli rolü DÜZENLEYİCİDİR: enzim aktivasyonu, sinir iletimi, kas kasılması, asit-baz ve su dengesi gibi birçok süreçte görev alırlar. Yapısal görev (Ca, P) bunlardan sadece biridir.',
        },
        {
          type: 'warning',
          text: '❌ "Mineraller vitamin gibi organik moleküllerdir."\n✅ Mineraller İNORGANİK elementlerdir, yapılarında karbon bulunmaz. Vitaminler ise organik moleküllerdir.',
        },
        {
          type: 'warning',
          text: '❌ "Demir eksikliği sadece beslenme yetersizliğinden olur."\n✅ Demir eksikliği anemisi; yetersiz alım dışında kanama, emilim bozuklukları gibi nedenlerle de oluşabilir. Ancak demirin temel görevi hemoglobin yapısında oksijen taşımaktır.',
        },
        {
          type: 'warning',
          text: '❌ "İyot eksikliği sadece tiroit bezini büyütür, başka etkisi yoktur."\n✅ İyot eksikliği, özellikle gebelikte ve çocuklukta tiroksin yetersizliğine bağlı zihinsel ve fiziksel gelişim geriliğine (kretinizm) de yol açabilir.',
        },
        {
          type: 'warning',
          text: '❌ "Pişirme sırasında mineraller, vitaminler gibi tamamen yok olur."\n✅ Mineraller ısıya dayanıklıdır ve ısıyla bozulmaz; ancak suda çözünerek pişirme suyuna geçebilir ve bu su dökülürse kayba uğrayabilirler.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.1-minerals-L6',
    subtopicId: '9-2.1-minerals',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) Mineral-görev-eksiklik hastalığı eşleştirme soruları: "Kalsiyum-osteoporoz, Demir-anemi, İyot-guatr, Sodyum/Potasyum-sinir iletimi" gibi.\n2) "Aşağıdaki minerallerden hangisi enerji üretiminde (ATP yapısında) doğrudan görev alır?" → Fosfor.\n3) Mineral eksikliği belirtileri verilip hangi mineralin eksik olduğunu sorgulayan örnek olay soruları.\n4) "İnorganik madde - organik madde" ayrımını test eden listeler (mineral, su vs. karbonhidrat, protein, vitamin, yağ).',
      aytPattern: 'AYT\'de mineraller doğrudan az sorulur; ancak enzim çalışması (kofaktör olarak Mg, Zn) ve boşaltım sistemi (elektrolit dengesi, Na/K pompası) konularıyla bütünleşik olarak karşına çıkabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sık tuzak: "Vitaminler ve mineraller her ikisi de enerji vermez (kalori içermez) ancak ikisi de canlı için gereklidir." Vitaminler ORGANİK, mineraller İNORGANİK\'tir — bu ayrımı sınavda karıştırma!',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.1-minerals-L7',
    subtopicId: '9-2.1-minerals',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Mineralleri günlük hayattan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🥛 Kalsiyum: Süt ve süt ürünlerinin tüketiminin teşvik edilmesi, özellikle büyüme çağındaki çocuklarda kemik gelişimi ve ileri yaşta osteoporozdan korunma için önemlidir.',
        },
        {
          type: 'example',
          text: '🧂 İyotlu tuz: Türkiye\'de tuzların iyotla zenginleştirilmesi (iyotlu tuz kullanımı zorunluluğu), toplum genelinde guatr ve iyot eksikliğine bağlı gelişim sorunlarını önlemek için uygulanan bir halk sağlığı stratejisidir.',
        },
        {
          type: 'example',
          text: '🥩 Demir eksikliği anemisi: Kırmızı et, yumurta, yeşil yapraklı sebzeler tüketmeyen bireylerde sık görülen halsizlik, çabuk yorulma ve solgunluk şikayetleri demir eksikliği anemisinin belirtileri olabilir.',
        },
        {
          type: 'example',
          text: '🍌 Muz ve potasyum: Kas krampı yaşayan sporcuların muz tüketmesi önerilir; çünkü potasyum kas kasılması ve sinir iletimi için gereklidir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.1-minerals-L8',
    subtopicId: '9-2.1-minerals',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.1-minerals-L9',
    subtopicId: '9-2.1-minerals',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Mineraller
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_1_minerals: Flashcard[] = [
  { id: 'fc-9-2.1-minerals-01', subtopicId: '9-2.1-minerals', orderIndex: 1,
    term: 'Mineral', definition: 'Vücutta sentezlenemeyen, dışarıdan alınması gereken inorganik element', example: 'Kalsiyum, demir, iyot, sodyum, potasyum' },
  { id: 'fc-9-2.1-minerals-02', subtopicId: '9-2.1-minerals', orderIndex: 2,
    term: 'Kalsiyum (Ca)', definition: 'Kemik/diş yapısı, kas kasılması ve kan pıhtılaşmasında görevli mineral', example: 'Eksikliğinde osteoporoz ve raşitizm görülür' },
  { id: 'fc-9-2.1-minerals-03', subtopicId: '9-2.1-minerals', orderIndex: 3,
    term: 'Demir (Fe)', definition: 'Hemoglobin yapısında bulunan, oksijen taşınmasını sağlayan mineral', example: 'Eksikliğinde demir eksikliği anemisi (kansızlık) oluşur' },
  { id: 'fc-9-2.1-minerals-04', subtopicId: '9-2.1-minerals', orderIndex: 4,
    term: 'İyot (I)', definition: 'Tiroksin hormonunun yapı taşı olan mineral', example: 'Eksikliğinde guatr ve gelişim geriliği (kretinizm) görülür' },
  { id: 'fc-9-2.1-minerals-05', subtopicId: '9-2.1-minerals', orderIndex: 5,
    term: 'Sodyum (Na)', definition: 'Hücre dışı sıvı dengesi ve sinir iletiminde görevli mineral', example: 'Aksiyon potansiyeli oluşumunda Na⁺ girişi gerekir' },
  { id: 'fc-9-2.1-minerals-06', subtopicId: '9-2.1-minerals', orderIndex: 6,
    term: 'Potasyum (K)', definition: 'Hücre içi sıvı dengesi, kas kasılması ve sinir iletiminde görevli mineral', example: 'Eksikliğinde kas krampları ve ritim bozuklukları olur' },
  { id: 'fc-9-2.1-minerals-07', subtopicId: '9-2.1-minerals', orderIndex: 7,
    term: 'Magnezyum (Mg)', definition: 'Enzim aktivasyonunda kofaktör olarak görev alan, bitkilerde klorofilin merkez atomu olan mineral', example: 'Eksikliğinde kas spazmları ve yorgunluk görülür' },
  { id: 'fc-9-2.1-minerals-08', subtopicId: '9-2.1-minerals', orderIndex: 8,
    term: 'Fosfor (P)', definition: 'Kemik/diş yapısında, ATP ve nükleik asitlerin yapısında bulunan mineral', example: 'ATP molekülünde enerji bağlarının taşıyıcısıdır' },
  { id: 'fc-9-2.1-minerals-09', subtopicId: '9-2.1-minerals', orderIndex: 9,
    term: 'Makro Mineral', definition: 'Günlük ihtiyacı 100 mg üzerinde olan mineral grubu', example: 'Kalsiyum, fosfor, sodyum, potasyum, magnezyum, klor' },
  { id: 'fc-9-2.1-minerals-10', subtopicId: '9-2.1-minerals', orderIndex: 10,
    term: 'Mikro Mineral (İz Element)', definition: 'Günlük ihtiyacı çok az miktarda olan mineral grubu', example: 'Demir, iyot, çinko, bakır, florür' },
];
