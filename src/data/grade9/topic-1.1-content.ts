import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Biyolojinin Önemi ve Dönüm Noktaları (9BIO-1.1)
// Alt Konu: Biyolojinin Tanımı ve Önemi (9-1.1-intro)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_1_intro: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-1.1-intro-L1',
    subtopicId: '9-1.1-intro',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Biyoloji, "bios" (yaşam) ve "logos" (bilim, bilgi) sözcüklerinden türetilmiş olup canlıları, canlılık olaylarını ve canlıların birbirleriyle ve çevreleriyle olan ilişkilerini inceleyen bir bilim dalıdır. Biyoloji; moleküler düzeyden (DNA, protein) hücreye, organizmaya ve tüm ekosisteme kadar her ölçekte yaşamı araştırır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Biyolojinin İnceleme Alanları: Canlıların yapısı, işlevleri, üremeleri, gelişimleri, kalıtımları, evrimleri ve çevreleriyle etkileşimleri.',
        },
        {
          type: 'tip',
          text: 'Hatırlama: "Biyoloji = Yaşamın Bilimi". Tıp, tarım, eczacılık, çevre mühendisliği, genetik ve biyoteknoloji gibi pek çok alanın temelini oluşturur.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-1.1-intro-L2',
    subtopicId: '9-1.1-intro',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-biyolojinin-onemi',
      body: 'Biyolojinin günlük yaşamla bağlantısını gösteren bir şema şu şekilde düşünülebilir: Merkeze "Biyoloji" yazılır, etrafına oklarla "Sağlık (aşı, ilaç geliştirme)", "Tarım (verimli tohum, gübre, zararlı mücadelesi)", "Çevre (kirlilik kontrolü, biyoçeşitlilik koruma)", "Genetik (kalıtsal hastalık tanısı, gen tedavisi)", "Biyoteknoloji (insülin üretimi, aşı geliştirme)" ve "Sürdürülebilirlik (yenilenebilir enerji, geri dönüşüm)" dalları çizilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Şema önerisi: Bir "güneş" şekli çiz, merkezine "BİYOLOJİ" yaz. Güneşin 6 ışınına sırasıyla Sağlık, Tarım, Çevre, Genetik, Biyoteknoloji, Sürdürülebilirlik yazılarını ekle. Her ışının ucuna birer örnek (aşı, GDO\'lu tohum, geri dönüşüm, gen testi, insülin, güneş paneli) yaz.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-1.1-intro-L3',
    subtopicId: '9-1.1-intro',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Biyolojinin tanımından günlük yaşamdaki etkisine kadar olan süreci adım adım inceleyelim:',
      steps: [
        '1. TANIM — Biyoloji, canlıları (bitkiler, hayvanlar, mikroorganizmalar, insan), canlılık olaylarını (beslenme, üreme, solunum vb.) ve canlıların birbirleriyle ile cansız çevreleriyle (su, toprak, hava, sıcaklık) olan ilişkilerini inceleyen bilim dalıdır.',
        '2. SAĞLIK ALANINDAKİ ÖNEMİ — Hastalıkların nedenlerinin (mikrop, genetik bozukluk) anlaşılması, aşı ve antibiyotiklerin geliştirilmesi, organ nakli, kanser tedavileri biyoloji bilgisine dayanır.',
        '3. TARIM ALANINDAKİ ÖNEMİ — Verimi artıran bitki ıslahı, hastalıklara dayanıklı tohum geliştirme, toprak verimliliğinin korunması ve zararlılarla biyolojik mücadele biyolojinin tarımdaki katkılarındandır.',
        '4. ÇEVRE ALANINDAKİ ÖNEMİ — Ekosistemlerin işleyişinin anlaşılması, kirliliğin canlılara etkisinin belirlenmesi, nesli tükenmekte olan türlerin korunması çevre biyolojisinin konusudur.',
        '5. GENETİK ALANINDAKİ ÖNEMİ — Kalıtsal hastalıkların (örneğin Down sendromu, hemofili) tanısı, genetik danışmanlık ve gen tedavisi yöntemleri biyolojik bilgiye dayanır.',
        '6. BİYOTEKNOLOJİ ALANINDAKİ ÖNEMİ — İnsülin, büyüme hormonu gibi ilaçların bakteriler kullanılarak üretilmesi, aşı geliştirme, DNA parmak izi analizi biyoteknolojinin biyolojiye dayanan uygulamalarıdır.',
        '7. SÜRDÜRÜLEBİLİRLİK ALANINDAKİ ÖNEMİ — Yenilenebilir enerji kaynaklarının (biyoyakıt) geliştirilmesi, atıkların geri dönüştürülmesi ve doğal kaynakların bilinçli kullanımı biyolojik bilgiyle desteklenir.',
        '8. BİLİMSEL DÖNÜM NOKTALARI VE ETKİLERİ — Mikroskobun icadı (1600\'ler) hücrenin keşfedilmesini sağladı; aşının bulunması (Edward Jenner, 1796) bulaşıcı hastalıklarla mücadeleyi başlattı; antibiyotiklerin keşfi (Alexander Fleming, penisilin 1928) bakteriyel enfeksiyonlardan ölümleri büyük ölçüde azalttı; DNA\'nın çift sarmal yapısının keşfi (Watson-Crick, 1953) genetiğin ve biyoteknolojinin temelini attı; genetik mühendisliği ve İnsan Genom Projesi (2003\'te tamamlandı) hastalıkların moleküler düzeyde anlaşılmasını sağladı.',
        '9. GÜNLÜK YAŞAM PROBLEMLERİNİN ÇÖZÜMÜ — Beslenme alışkanlıklarının düzenlenmesi, hijyen kurallarının uygulanması, bulaşıcı hastalıklardan korunma (el yıkama, aşılanma), bitki yetiştirme ve evcil hayvan bakımı gibi pek çok günlük problem biyolojik bilgiyle çözülür.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-1.1-intro-L4',
    subtopicId: '9-1.1-intro',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Biyoloji: Canlıları, canlılık olaylarını ve canlı-çevre ilişkilerini inceleyen bilim dalı.' },
        { type: 'tip', text: 'Biyoteknoloji: Canlıları veya bunların ürünlerini kullanarak yeni ürün/teknoloji geliştiren uygulamalı bilim dalı.' },
        { type: 'tip', text: 'Genetik mühendisliği: Bir canlının DNA\'sının değiştirilerek istenen özelliklerin kazandırılması veya ortaya çıkarılmasıdır.' },
        { type: 'tip', text: 'Aşı: Vücudun belirli bir hastalık etkenine karşı bağışıklık geliştirmesini sağlayan biyolojik ürün.' },
        { type: 'tip', text: 'Antibiyotik: Bakterilerin üremesini durduran veya öldüren maddeler.' },
        { type: 'tip', text: 'DNA (Deoksiribonükleik Asit): Canlıların kalıtsal bilgisini taşıyan molekül.' },
        { type: 'tip', text: 'Ekosistem: Canlıların birbirleri ve cansız çevreleriyle birlikte oluşturduğu işlevsel bütün.' },
        { type: 'tip', text: 'Sürdürülebilirlik: Doğal kaynakların gelecek nesillerin ihtiyaçlarını da gözeterek kullanılması ilkesi.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-1.1-intro-L5',
    subtopicId: '9-1.1-intro',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Biyoloji sadece bitkileri ve hayvanları inceler."\n✅ Biyoloji, mikroorganizmaları, mantarları, insanı ve hatta moleküler düzeyde DNA-protein etkileşimlerini de kapsar. İnceleme alanı çok geniştir.',
        },
        {
          type: 'warning',
          text: '❌ "Biyoteknoloji yeni bir kavramdır, sadece günümüze özgüdür."\n✅ Biyoteknolojinin temelleri çok eskiye dayanır (örneğin maya ile ekmek/peynir yapımı). Modern biyoteknoloji ise genetik mühendisliği ile gelişmiştir.',
        },
        {
          type: 'warning',
          text: '❌ "Aşı ve antibiyotik aynı şeydir, ikisi de mikropları öldürür."\n✅ Aşı, vücudun bağışıklık sistemini önceden eğiterek hastalığa karşı direnç kazandırır (önleyicidir). Antibiyotik ise zaten oluşmuş bir bakteriyel enfeksiyonu tedavi eder. Antibiyotikler virüslere etkisizdir.',
        },
        {
          type: 'warning',
          text: '❌ "Biyolojik bilgiler sadece laboratuvarda ve bilim insanları için önemlidir."\n✅ Biyoloji bilgisi; sağlıklı beslenme, hijyen, bahçe bakımı, hastalıklardan korunma gibi günlük yaşam problemlerinin çözümünde herkes için kullanışlıdır.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-1.1-intro-L6',
    subtopicId: '9-1.1-intro',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Biyolojinin hangi alt dalı/bilim dalıyla ilişkilendirilmesi doğrudur?" tarzı eşleştirme soruları (örneğin: aşı geliştirme → biyoteknoloji, DNA yapısının keşfi → genetik).\n2) "Aşağıdaki bilimsel gelişmelerden hangisi insan yaşamına en çok katkı sağlamıştır?" gibi dönüm noktası-etki ilişkisi soruları.\n3) Verilen bir günlük yaşam senaryosunda (örneğin "bir çiftçinin verimini artırmak istemesi") hangi biyoloji alanının devreye girdiğinin sorulması.\n4) Biyolojinin tanımı ile ilgili "canlı, canlılık olayı, çevre ilişkisi" üçlüsünün eksik/yanlış verildiği seçeneklerin ayıklanması.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sıkça karıştırılan dönüm noktaları: Mikroskobun icadı → hücrenin keşfi (Robert Hooke, Antonie van Leeuwenhoek). Aşı → Edward Jenner (çiçek hastalığı). Antibiyotik → Alexander Fleming (penisilin). DNA yapısı → Watson ve Crick (1953). Bunların kim tarafından, ne zaman ve hangi alanı etkilediği sorulabilir.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-1.1-intro-L7',
    subtopicId: '9-1.1-intro',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Biyolojinin günlük hayattaki önemini örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '💉 Aşı: Çocukluk döneminde yapılan kızamık, suçiçeği, hepatit aşıları biyolojik araştırmalar sayesinde geliştirilmiştir ve milyonlarca hayat kurtarmıştır.',
        },
        {
          type: 'example',
          text: '🌾 Tarım: Kuraklığa dayanıklı buğday çeşitlerinin geliştirilmesi, bitki ıslahı çalışmalarıyla mümkün olmuş ve gıda güvenliğine katkı sağlamıştır.',
        },
        {
          type: 'example',
          text: '💊 İnsülin üretimi: Şeker hastalığı (diyabet) tedavisinde kullanılan insülin, genetik mühendisliği ile bakterilere insan insülin geni aktarılarak üretilir.',
        },
        {
          type: 'example',
          text: '♻️ Geri dönüşüm ve kompost: Organik atıkların mikroorganizmalar (bakteri, mantar) yardımıyla ayrıştırılarak gübreye dönüştürülmesi biyolojik bir süreçtir.',
        },
        {
          type: 'example',
          text: '🧪 DNA testi: Adli vakalarda şüphelinin belirlenmesi veya babalık testleri, DNA parmak izi analizi gibi biyoteknolojik yöntemlerle yapılır.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-1.1-intro-L8',
    subtopicId: '9-1.1-intro',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'MINI_QUIZ_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
  {
    id: '9-1.1-intro-L9',
    subtopicId: '9-1.1-intro',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'ASSESSMENT_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Biyolojinin Tanımı ve Önemi
// ─────────────────────────────────────────────────────────────

export const flashcards_9_1_1_intro: Flashcard[] = [
  { id: 'fc-9-1.1-01', subtopicId: '9-1.1-intro', orderIndex: 1,
    term: 'Biyoloji', definition: 'Canlıları, canlılık olaylarını ve canlıların çevreleriyle ilişkilerini inceleyen bilim dalı', example: '"Bios" (yaşam) + "logos" (bilim) sözcüklerinden türemiştir' },
  { id: 'fc-9-1.1-02', subtopicId: '9-1.1-intro', orderIndex: 2,
    term: 'Biyoteknoloji', definition: 'Canlıları veya canlılardan elde edilen ürünleri kullanarak yeni ürün ve teknolojiler geliştiren bilim dalı', example: 'Bakteriler kullanılarak insülin üretimi' },
  { id: 'fc-9-1.1-03', subtopicId: '9-1.1-intro', orderIndex: 3,
    term: 'Genetik Mühendisliği', definition: 'Bir canlının DNA\'sının değiştirilerek istenen özelliklerin kazandırılması', example: 'GDO\'lu (genetiği değiştirilmiş organizma) ürünler' },
  { id: 'fc-9-1.1-04', subtopicId: '9-1.1-intro', orderIndex: 4,
    term: 'Aşı', definition: 'Vücudun belirli bir hastalık etkenine karşı bağışıklık kazanmasını sağlayan biyolojik ürün', example: 'Edward Jenner tarafından geliştirilen çiçek hastalığı aşısı (1796)' },
  { id: 'fc-9-1.1-05', subtopicId: '9-1.1-intro', orderIndex: 5,
    term: 'Antibiyotik', definition: 'Bakterilerin üremesini durduran veya bakterileri öldüren madde', example: 'Alexander Fleming tarafından keşfedilen penisilin (1928)' },
  { id: 'fc-9-1.1-06', subtopicId: '9-1.1-intro', orderIndex: 6,
    term: 'Mikroskop', definition: 'Gözle görülemeyecek kadar küçük yapıları büyüterek incelemeyi sağlayan alet', example: 'Robert Hooke ve Antonie van Leeuwenhoek\'in hücreyi keşfetmesini sağlamıştır' },
  { id: 'fc-9-1.1-07', subtopicId: '9-1.1-intro', orderIndex: 7,
    term: 'DNA Yapısının Keşfi', definition: 'James Watson ve Francis Crick tarafından 1953 yılında DNA\'nın çift sarmal yapısının ortaya konması', example: 'Genetik mühendisliği ve biyoteknolojinin temelini oluşturmuştur' },
  { id: 'fc-9-1.1-08', subtopicId: '9-1.1-intro', orderIndex: 8,
    term: 'Ekoloji', definition: 'Canlıların birbirleriyle ve çevreleriyle olan ilişkilerini inceleyen biyoloji dalı', example: 'Bir gölün ekosisteminde balık-alg-bakteri ilişkilerinin incelenmesi' },
  { id: 'fc-9-1.1-09', subtopicId: '9-1.1-intro', orderIndex: 9,
    term: 'Sürdürülebilirlik', definition: 'Doğal kaynakların gelecek nesillerin ihtiyaçlarını da gözeterek kullanılması ilkesi', example: 'Yenilenebilir enerji kaynaklarının (biyoyakıt, güneş enerjisi) kullanılması' },
  { id: 'fc-9-1.1-10', subtopicId: '9-1.1-intro', orderIndex: 10,
    term: 'İnsan Genom Projesi', definition: 'İnsan DNA\'sındaki tüm genlerin haritalandırılması amacıyla yürütülen ve 2003\'te tamamlanan uluslararası proje', example: 'Kalıtsal hastalıkların moleküler temelinin anlaşılmasına katkı sağlamıştır' },
];
