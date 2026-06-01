import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Canlıların Ortak Özellikleri (9BIO-1.4)
// Alt Konu: Canlıların Temel Özellikleri (9-1.4-properties)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_4_properties: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-1.4-prop-L1',
    subtopicId: '9-1.4-properties',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Canlılar, cansızlardan ayırt edilebilen 11 temel özelliğe sahiptir. Bu özellikler tüm canlılarda ortak olup canlılığın tanımını oluşturur. Bir varlığın "canlı" sayılabilmesi için bu özelliklerin tamamını veya büyük çoğunluğunu taşıması gerekir.',
      highlightBoxes: [
        {
          type: 'important',
          text: '11 Temel Özellik: Hücresel yapı · Organizasyon · Beslenme · Solunum · Boşaltım · Büyüme · Gelişme · Üreme · Uyarılara tepki · Homeostazi · Adaptasyon & Varyasyon',
        },
        {
          type: 'tip',
          text: 'Hatırlama formülü: "Hücre Olan Biri Soluk Boşaltır, Büyür Gelişir, Ürer, Uyarıya Tepki Verir, Homeostazi ve Adaptasyon Sağlar"',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-1.4-prop-L2',
    subtopicId: '9-1.4-properties',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      body: 'Aşağıdaki şema, 11 temel canlı özelliğini işlevsel gruplara ayırarak göstermektedir.',
      svgData: 'INFOGRAPHIC_PLACEHOLDER_9-1.4',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Yapısal özellikler: Hücresel yapı, Organizasyon\nMetabolik özellikler: Beslenme, Solunum, Boşaltım\nGelişimsel özellikler: Büyüme, Gelişme, Üreme\nDüzenleyici özellikler: Uyarılara tepki, Homeostazi\nUyum özellikleri: Adaptasyon, Varyasyon',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-1.4-prop-L3',
    subtopicId: '9-1.4-properties',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Her bir özelliğin ne anlama geldiği ve örnekleri:',
      steps: [
        '1. HÜCREsel YAPI — Tüm canlılar bir veya daha fazla hücreden oluşur. Hücre, canlılığın temel yapı ve işlev birimidir. Virüsler bu kuralın dışındadır.',
        '2. ORGANİZASYON — Canlılarda yapılar hiyerarşik olarak düzenlenmiştir: Atom → Molekül → Organel → Hücre → Doku → Organ → Sistem → Organizma.',
        '3. BESLENME — Canlılar enerji ve madde sağlamak için besin alır. Ototrof (kendi üretir: bitkiler) veya heterotrof (dışarıdan alır: hayvanlar, mantarlar).',
        '4. SOLUNUM — Besinlerdeki kimyasal enerjiyi hücresel solunum yoluyla kullanılabilir enerjiye (ATP) dönüştürmektir. Oksijenli veya oksijensiz olabilir.',
        '5. BOŞALTIM — Metabolizma sonucu oluşan zararlı atık maddelerin (CO₂, NH₃, üre) vücuttan uzaklaştırılmasıdır. İç denge için zorunludur.',
        '6. BÜYÜME — Hücre sayısı ve boyutunun artmasıyla gerçekleşir. Kalıcı, geri dönüşümsüz bir süreçtir. Mineral depolamak büyüme değildir.',
        '7. GELİŞME — Yapısal ve işlevsel değişimdir. Larva → kelebek gibi. Büyümeden farklıdır; boyut değil, yapı değişir.',
        '8. ÜREME — Canlı sayısının artmasıdır. Eşeyli (genetik çeşitlilik ↑) veya eşeysiz (hızlı, genetik aynılık). Türün devamlılığı için zorunludur.',
        '9. UYARILARA TEPKİ — İç ve dış uyaranlara yanıt verebilmedir. Bitkiler ışığa, hayvanlar ağrıya tepki verir. Hayatta kalmanın temelidir.',
        "10. HOMEOSTAZİ — İç ortamın (pH, sıcaklık, iyonik denge) kararlı tutulmasıdır. Örnek: vücut ısısının 37°C'de tutulması, kan şekerinin dengelenmesi.",
        '11. ADAPTASYON & VARYASYoN — Canlılar yaşadıkları ortama uyum sağlayacak özellikler kazanır (adaptasyon). Aynı türün bireyleri arasındaki farklılıklar ise varyasyondur.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-1.4-prop-L4',
    subtopicId: '9-1.4-properties',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Ototrof: Kendi besinini üretebilen canlı (fotosentez veya kemosentez yapan).' },
        { type: 'tip', text: 'Heterotrof: Besinini dışarıdan hazır alan canlı (hayvanlar, mantarlar, çoğu bakteri).' },
        { type: 'tip', text: 'Homeostazi: İç ortamın kararlı ve dengeli tutulması.' },
        { type: 'tip', text: 'Adaptasyon: Canlının bulunduğu çevreye uyum sağlamasına yarayan kalıtsal özellik.' },
        { type: 'tip', text: 'Varyasyon: Aynı tür bireyler arasındaki farklılıklar.' },
        { type: 'tip', text: 'ATP: Hücrelerin enerji birimi; solunumla üretilir.' },
        { type: 'tip', text: 'Eşeyli üreme: İki ebeveynden genetik materyal birleşir → çeşitlilik artar.' },
        { type: 'tip', text: 'Eşeysiz üreme: Tek ebeveyn → genetik olarak özdeş yavru (klon).' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-1.4-prop-L5',
    subtopicId: '9-1.4-properties',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Taş büyür, demek ki canlıdır."\n✅ Taşın büyümesi madde birikmesidir. Canlılardaki büyüme ise hücre bölünmesiyle olur — tamamen farklı bir süreçtir.',
        },
        {
          type: 'warning',
          text: '❌ "Solunum = nefes almak."\n✅ Solunum, hücrelerin ATP üretmesi için besin moleküllerini parçalamasıdır. Nefes almak ise gaz alışverişidir (solunum sistemi). İkisi farklı kavramdır!',
        },
        {
          type: 'warning',
          text: '❌ "Büyümek ve gelişmek aynı şeydir."\n✅ Büyüme: boyut/kütle artar. Gelişme: yapısal-işlevsel değişim. Bir insan ergenlikte hem büyür (boy uzar) hem gelişir (hormonal değişim).',
        },
        {
          type: 'warning',
          text: '❌ "Tüm canlılar oksijen kullanarak solunum yapar."\n✅ Oksijensiz solunum (fermantasyon) yapan canlılar da vardır: mayalar, bazı bakteriler.',
        },
        {
          type: 'warning',
          text: '❌ "Virüsler canlıdır çünkü ürerler."\n✅ Virüsler konak hücre olmadan üreyemez, hücresel yapıları yoktur, metabolizmaları yoktur. "Canlı ile cansız arasında" özel bir konumdadırlar.',
        },
        {
          type: 'warning',
          text: '❌ "Boşaltım sadece idrar yapmaktır."\n✅ Boşaltım; CO₂ (akciğer), tuz/su (deri, böbrek), üre (böbrek) gibi tüm metabolik atıkların vücuttan uzaklaştırılmasıdır.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-1.4-prop-L6',
    subtopicId: '9-1.4-properties',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdakilerden hangisi yalnızca canlılara özgü bir özelliktir?" → Hücresel yapı veya üreme.\n2) Verilen varlık listesinden (ateş, kristal, bakteri, virüs) "canlı" olanı seçme.\n3) Solunum ve nefes alma kavramlarını karıştıran seçenekli sorular.\n4) Büyüme-gelişme farkını ölçen durum soruları.',
      aytPattern: 'AYT\'de daha az doğrudan sorulur; genellikle 11-12. sınıf konularıyla entegre edilir. Homeostazi konusu sinir-endokrin sistem sorularında tekrar karşına çıkar.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'TYT\'de "Virüs canlı mı değil mi?" sorusu klasik bir TYT tuzağıdır. Cevap: Virüsler hücresel yapısı olmayan, tek başına metabolizma yapamayan, yalnızca konak hücrede çoğalabilen varlıklardır — canlı ile cansız arasında özel konumdadırlar.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-1.4-prop-L7',
    subtopicId: '9-1.4-properties',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Canlıların ortak özelliklerini günlük hayattan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🌡️ Homeostazi: Soğuk bir günde titremek vücut ısısını 37°C\'de tutmak için kasların enerji üretmesidir. Sıcak bir günde terleme de aynı amaca hizmet eder.',
        },
        {
          type: 'example',
          text: '🍃 Ototrof beslenme: Bir fotoğraf makinesinin güneş paneli gibi, bitkiler güneş enerjisini kullanarak kendi besinini (glikoz) sentezler.',
        },
        {
          type: 'example',
          text: '🦋 Büyüme vs Gelişme: Bir tırtıl büyür (boyutu artar) ama kelebek olduğunda gelişir (tamamen farklı bir yapıya dönüşür).',
        },
        {
          type: 'example',
          text: '🧬 Varyasyon: Sınıftaki tüm öğrenciler insan türüne ait olmalarına rağmen boy, saç rengi, göz rengi bakımından farklıdır. Bu varyasyondur.',
        },
        {
          type: 'example',
          text: '🦠 COVID-19 ve virüs tartışması: Coronavirüs, bir hücreye girmeden çoğalamaz. Bu yüzden "canlı mı?" sorusu bilim dünyasında hâlâ tartışmalıdır.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  // Soru bankası Aşama 3'te eklenecek. Şimdilik placeholder.
  {
    id: '9-1.4-prop-L8',
    subtopicId: '9-1.4-properties',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'MINI_QUIZ_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
  {
    id: '9-1.4-prop-L9',
    subtopicId: '9-1.4-properties',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'ASSESSMENT_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Canlıların Ortak Özellikleri
// ─────────────────────────────────────────────────────────────

export const flashcards_9_1_4_properties: Flashcard[] = [
  { id: 'fc-9-1.4-01', subtopicId: '9-1.4-properties', orderIndex: 1,
    term: 'Ototrof', definition: 'Kendi besinini sentezleyebilen canlı', example: 'Bitkiler, fotosentez yapan bakteriler' },
  { id: 'fc-9-1.4-02', subtopicId: '9-1.4-properties', orderIndex: 2,
    term: 'Heterotrof', definition: 'Besinini dışarıdan hazır olarak alan canlı', example: 'Hayvanlar, mantarlar, çoğu bakteri' },
  { id: 'fc-9-1.4-03', subtopicId: '9-1.4-properties', orderIndex: 3,
    term: 'Homeostazi', definition: 'İç ortamın (sıcaklık, pH, kan şekeri) kararlı tutulması', example: 'Vücut ısısının 37°C\'de sabit tutulması' },
  { id: 'fc-9-1.4-04', subtopicId: '9-1.4-properties', orderIndex: 4,
    term: 'Adaptasyon', definition: 'Canlının bulunduğu ortama uyumunu sağlayan kalıtsal özellik', example: 'Devede su depolayan hörgüç, kutup ayısında kalın kürk' },
  { id: 'fc-9-1.4-05', subtopicId: '9-1.4-properties', orderIndex: 5,
    term: 'Varyasyon', definition: 'Aynı tür bireyler arasındaki farklılıklar', example: 'İnsanlarda farklı göz ve saç renkleri' },
  { id: 'fc-9-1.4-06', subtopicId: '9-1.4-properties', orderIndex: 6,
    term: 'Hücresel Solunum', definition: 'Besin moleküllerinden ATP üretilmesi', example: 'C₆H₁₂O₆ + O₂ → CO₂ + H₂O + ATP' },
  { id: 'fc-9-1.4-07', subtopicId: '9-1.4-properties', orderIndex: 7,
    term: 'Boşaltım', definition: 'Metabolik atıkların vücuttan uzaklaştırılması', example: 'CO₂ (akciğer), üre (böbrek), tuz (deri)' },
  { id: 'fc-9-1.4-08', subtopicId: '9-1.4-properties', orderIndex: 8,
    term: 'Eşeyli Üreme', definition: 'İki ebeveynden gelen genetik materyalin birleşmesiyle gerçekleşen üreme', example: 'Genetik çeşitlilik artar; tohumlu bitkiler, memeliler' },
  { id: 'fc-9-1.4-09', subtopicId: '9-1.4-properties', orderIndex: 9,
    term: 'Eşeysiz Üreme', definition: 'Tek ebeveynden genetik olarak özdeş yavru üretilmesi', example: 'Tomurcuklanma (Hydra), bölünme (amip), vejetatif üreme (çilek)' },
  { id: 'fc-9-1.4-10', subtopicId: '9-1.4-properties', orderIndex: 10,
    term: 'Büyüme', definition: 'Hücre sayısı ve boyutunun kalıcı olarak artması', example: 'Bir çocuğun boyunun uzaması' },
  { id: 'fc-9-1.4-11', subtopicId: '9-1.4-properties', orderIndex: 11,
    term: 'Gelişme', definition: 'Yapısal ve işlevsel değişim; büyümeden bağımsız olabilir', example: 'Larva → kelebek (metamorfoz), embriyo → fetus' },
  { id: 'fc-9-1.4-12', subtopicId: '9-1.4-properties', orderIndex: 12,
    term: 'Virüs', definition: 'Hücresel yapısı olmayan, tek başına metabolizma yapamayan, konak hücrede çoğalabilen varlık', example: 'COVID-19, grip, çiçek hastalığı virüsleri' },
];

// ─────────────────────────────────────────────────────────────
// VİRÜSLER ALT KONUSU — Katmanlar
// (9-1.4-viruses)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_4_viruses: LessonLayer[] = [
  {
    id: '9-1.4-vir-L1',
    subtopicId: '9-1.4-viruses',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Virüsler, yaşayan hücreler ve cansız kristal yapılar arasında özel bir konumda yer alır. Hücresel yapıları yoktur, kendi başlarına metabolizma yapamazlar ve yalnızca konak hücre içinde çoğalabilirler. Bu nedenle "canlı mı, cansız mı?" sorusu bilimsel tartışma konusudur.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Virüs = Nükleik asit (DNA veya RNA) + Protein kılıf (kapsit). Başka bir şey yok. Mitokondri yok, ribozom yok, zar yok.',
        },
        {
          type: 'warning',
          text: 'Virüsler canlı değil mi? Hayır, tam olarak öyle değil. Konak hücre içine girdiklerinde ürerler — bu canlılık özelliği gibi görünür. Ama dışarıda kristal gibi durabilirler. Bu yüzden "canlı ile cansız arasında" denir.',
        },
      ],
    },
  },
  {
    id: '9-1.4-vir-L2',
    subtopicId: '9-1.4-viruses',
    layerType: 'process',
    orderIndex: 2,
    contentJson: {
      body: 'Virüslerin konak hücreyi enfekte etme süreci (Litik Döngü):',
      steps: [
        '1. TUTUNMA — Virüs, konak hücrenin yüzeyindeki özgün reseptörlere tutunur.',
        '2. GİRİŞ — Nükleik asit (DNA/RNA) konak hücreye enjekte edilir.',
        '3. KOPYALANMA — Konak hücrenin makinelerini (ribozom, enzim) kullanarak kendi kopyalarını üretir.',
        '4. MONTAJ — Yeni virüs parçacıkları birleştirilir.',
        '5. ÇIKIŞ (LİZİS) — Hücre patlar, yüzlerce yeni virüs serbest kalır.',
      ],
    },
  },
  {
    id: '9-1.4-vir-L5',
    subtopicId: '9-1.4-viruses',
    layerType: 'misconceptions',
    orderIndex: 3,
    contentJson: {
      body: '',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Virüslere antibiyotik verilir."\n✅ Antibiyotikler bakterilere karşı etkilidir. Virüslere KARŞI ETKİSİZDİR. Virüse karşı antiviral ilaçlar veya aşılar kullanılır.',
        },
        {
          type: 'warning',
          text: '❌ "Her virüs hastalık yapar."\n✅ Bazı virüsler faydalı bile olabilir (faj tedavisi). Hastalık yapıp yapmama konağa ve virüse bağlıdır.',
        },
        {
          type: 'warning',
          text: '❌ "Virüsler hücrelerdir."\n✅ Virüslerin hücresel yapısı YOKTUR. Organelleri yoktur, çift katlı zarları yoktur, sitoplazmaları yoktur.',
        },
      ],
    },
  },
  {
    id: '9-1.4-vir-L6',
    subtopicId: '9-1.4-viruses',
    layerType: 'exam_tips',
    orderIndex: 4,
    contentJson: {
      body: '',
      tytPattern: '"Virüslerle ilgili verilen bilgilerden hangileri doğrudur?" tarzı öncüllü sorular çok sık çıkar. Sık sorulan öncüller:\n• Hücresel yapıları yoktur. (DOĞRU)\n• Yalnızca konak hücrede çoğalırlar. (DOĞRU)\n• DNA ve RNA\'yı aynı anda taşırlar. (YANLIŞ — biri taşır)\n• Antibiyotiklerle tedavi edilirler. (YANLIŞ)\n• Cansız ortamda kristal yapı oluşturabilirler. (DOĞRU)',
      aytPattern: 'AYT\'de viral replikasyon mekanizması, faj döngüsü ve bağışıklık sistemi ile ilişkilendirilerek sorulabilir.',
      highlightBoxes: [],
    },
  },
  {
    id: '9-1.4-vir-L8',
    subtopicId: '9-1.4-viruses',
    layerType: 'mini_quiz',
    orderIndex: 5,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
];

export const flashcards_9_1_4_viruses: Flashcard[] = [
  { id: 'fc-9-1.4-vir-01', subtopicId: '9-1.4-viruses', orderIndex: 1,
    term: 'Kapsit', definition: 'Virüsün nükleik asidini çevreleyen protein kılıf', example: 'HIV\'in kılıfı lipit + protein içerir' },
  { id: 'fc-9-1.4-vir-02', subtopicId: '9-1.4-viruses', orderIndex: 2,
    term: 'Litik Döngü', definition: 'Virüsün konak hücreyi parçalayarak yeni virüsler üretmesi', example: 'Bakteriyofajların E.coli\'yi enfekte etmesi' },
  { id: 'fc-9-1.4-vir-03', subtopicId: '9-1.4-viruses', orderIndex: 3,
    term: 'Lizojenik Döngü', definition: 'Viral DNA\'nın konak hücrenin genomuna entegre olarak sessiz kalması', example: 'Uçuk virüsü (HSV) sinir hücrelerinde yıllarca uyur' },
  { id: 'fc-9-1.4-vir-04', subtopicId: '9-1.4-viruses', orderIndex: 4,
    term: 'Retrovirüs', definition: 'RNA\'sını DNA\'ya dönüştüren enzim (ters transkriptaz) kullanan virüs', example: 'HIV, konak hücrenin DNA\'sına entegre olur' },
];
