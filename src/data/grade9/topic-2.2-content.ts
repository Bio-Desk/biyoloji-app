import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Organik Moleküller (9BIO-2.2)
// Alt Konu: Karbohidratlar (9-2.2-carbs)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_2_carbs: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.2-carbs-L1',
    subtopicId: '9-2.2-carbs',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Organik moleküller, yapısında karbon (C) atomu bulunan ve canlılar tarafından sentezlenen bileşiklerdir. Karbohidratlar, lipitler, proteinler ve nükleik asitler temel organik moleküllerdir. Karbohidratlar, karbon (C), hidrojen (H) ve oksijen (O) atomlarından oluşur; genel formülleri Cₙ(H₂O)ₙ şeklinde yazılabilir. Canlılarda en hızlı ve kolay kullanılan enerji kaynağıdır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Organik molekül = Karbon temelli bileşik. İnorganik moleküller (su, mineraller, gazlar) karbon içermez veya karbon-hidrojen bağı taşımaz (CO₂ ve karbonatlar inorganik kabul edilir).',
        },
        {
          type: 'tip',
          text: 'Karbohidratların yapı taşı (monomeri) MONOSAKKARİTLERDİR. Monomerlerin birleşmesiyle oluşan büyük moleküllere POLİMER denir.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.2-carbs-L2',
    subtopicId: '9-2.2-carbs',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-karbonhidratlar',
      body: 'Karbohidratlar, içerdikleri monomer (şeker birimi) sayısına göre üç ana gruba ayrılır. Monosakkaritler tek bir şeker biriminden oluşan en küçük yapı taşlarıdır (örn. glikoz, fruktoz, galaktoz). İki monosakkarit, dehidrasyon sentezi (su çıkararak birleşme) ile bir glikozit bağı oluşturarak disakkaritleri meydana getirir (örn. sükroz, laktoz, maltoz). Çok sayıda monosakkaritin glikozit bağlarıyla zincir veya dallanmış zincir oluşturacak şekilde birleşmesiyle polisakkaritler oluşur (örn. nişasta, glikojen, selüloz). Polimerlerin monomerlerine ayrılması ise hidroliz (su alarak parçalanma) reaksiyonuyla gerçekleşir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Monosakkarit (1 birim) → Disakkarit (2 birim, dehidrasyon sentezi ile) → Polisakkarit (çok sayıda birim, zincir/dallanmış yapı)\nDehidrasyon sentezi: Monomer + Monomer → Polimer + H₂O\nHidroliz: Polimer + H₂O → Monomer + Monomer',
        },
        {
          type: 'tip',
          text: 'Glikoz, fruktoz ve galaktoz aynı moleküler formüle (C₆H₁₂O₆) sahiptir ama atom dizilişleri (yapısal izomerleri) farklıdır. Bu nedenle özellikleri (örneğin tatlılık derecesi) birbirinden farklıdır.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.2-carbs-L3',
    subtopicId: '9-2.2-carbs',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Karbohidrat çeşitlerini sınıflandırarak inceleyelim:',
      steps: [
        '1. MONOSAKKARİTLER (C₆H₁₂O₆, tek şeker birimi) — En küçük karbohidrat birimidir, suda çözünür ve tatlı tada sahiptir.',
        '   • GLİKOZ (Üzüm Şekeri) — Hücresel solunumda en çok kullanılan, kandaki şeker formudur. Bitkilerde fotosentez sonucu üretilir.',
        '   • FRUKTOZ (Meyve Şekeri) — Doğada bilinen en tatlı monosakkarittir. Meyvelerde ve balda bol bulunur.',
        '   • GALAKTOZ — Tek başına doğada az bulunur; süt şekerinin (laktoz) yapı taşıdır, genelde glikozla birleşik halde bulunur.',
        '2. DİSAKKARİTLER (C₁₂H₂₂O₁₁, iki monosakkaritin birleşimi) — Bir glikozit bağıyla bağlanmış iki monosakkaritten oluşur.',
        '   • SÜKROZ (Çay Şekeri) = Glikoz + Fruktoz — Şeker pancarı ve şeker kamışından elde edilir, günlük hayatta kullanılan sofra şekeridir.',
        '   • LAKTOZ (Süt Şekeri) = Glikoz + Galaktoz — Memeli sütünde bulunur; sindirimi için laktaz enzimi gerekir (laktoz intoleransı bu enzimin eksikliğinden kaynaklanır).',
        '   • MALTOZ (Malt Şekeri) = Glikoz + Glikoz — Nişastanın sindirimi sırasında ara ürün olarak oluşur, çimlenen tahıllarda bulunur.',
        '3. POLİSAKKARİTLER (Çok sayıda monosakkaritin birleşimi, suda çözünmez) — Depo veya yapı maddesi olarak görev yapar.',
        '   • NİŞASTA — Bitkilerde glikozun depo formudur (patates, buğday, pirinç). Sindirim sisteminde amilaz enzimiyle glikoza parçalanır.',
        '   • GLİKOJEN — Hayvanlarda ve mantarlarda glikozun depo formudur; karaciğer ve kas hücrelerinde depolanır. Nişastaya benzer ama daha fazla dallanmıştır.',
        '   • SELÜLOZ — Bitki hücre duvarının yapı maddesidir. İnsan sindirim sisteminde sindirilemez (selülaz enzimi yoktur), ancak posa (lif) olarak bağırsak hareketlerine yardımcı olur.',
        '   • KİTİN — Eklembacaklıların dış iskeletinde ve mantarların hücre duvarında bulunan azotlu bir polisakkarittir.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.2-carbs-L4',
    subtopicId: '9-2.2-carbs',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Monomer: Polimerleri oluşturan en küçük yapı taşı (karbohidratlarda monosakkarit).' },
        { type: 'tip', text: 'Polimer: Çok sayıda monomerin birleşmesiyle oluşan büyük molekül (örn. nişasta, glikojen, selüloz).' },
        { type: 'tip', text: 'Dehidrasyon Sentezi: İki monomerin su çıkararak birleşmesi ve glikozit bağı oluşturması.' },
        { type: 'tip', text: 'Hidroliz: Su moleküllerinin kullanılmasıyla polimerlerin monomerlerine ayrılması (sindirimin temelidir).' },
        { type: 'tip', text: 'Glikozit Bağı: Karbohidrat monomerlerini birbirine bağlayan kovalent bağ türü.' },
        { type: 'tip', text: 'Monosakkarit: Tek şeker biriminden oluşan en basit karbohidrat (glikoz, fruktoz, galaktoz).' },
        { type: 'tip', text: 'Disakkarit: İki monosakkaritin birleşmesiyle oluşan karbohidrat (sükroz, laktoz, maltoz).' },
        { type: 'tip', text: 'Polisakkarit: Çok sayıda monosakkaritin birleşmesiyle oluşan, suda çözünmeyen büyük karbohidrat (nişasta, glikojen, selüloz, kitin).' },
        { type: 'tip', text: 'İzomer: Aynı moleküler formüle ancak farklı atom dizilişine sahip moleküller (glikoz, fruktoz, galaktoz birbirinin izomeridir).' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.2-carbs-L5',
    subtopicId: '9-2.2-carbs',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Glikoz, fruktoz ve galaktozun kimyasal formülleri farklıdır."\n✅ Üçü de aynı moleküler formüle (C₆H₁₂O₆) sahiptir; aralarındaki fark atomların moleküldeki dizilişidir (yapısal izomerlerdir).',
        },
        {
          type: 'warning',
          text: '❌ "Nişasta ve selüloz aynı şeydir, ikisi de glikoz polimeridir, sindirilebilir."\n✅ İkisi de glikoz monomerlerinden oluşur ancak glikoz birimleri arasındaki bağ türü farklıdır. İnsan, nişastayı amilaz enzimiyle sindirebilir ama selülozu sindiremez (selülaz enzimi yoktur).',
        },
        {
          type: 'warning',
          text: '❌ "Tüm karbohidratlar tatlıdır."\n✅ Monosakkarit ve disakkaritler tatlıdır ancak polisakkaritler (nişasta, selüloz, glikojen) tatlı değildir, çünkü büyük moleküller tat reseptörleriyle aynı şekilde etkileşmez.',
        },
        {
          type: 'warning',
          text: '❌ "Glikojen bitkilerde, nişasta hayvanlarda depolanır."\n✅ Tam tersidir! NİŞASTA bitkilerde, GLİKOJEN ise hayvanlarda ve mantarlarda glikozun depo şeklidir.',
        },
        {
          type: 'warning',
          text: '❌ "Dehidrasyon sentezinde su açığa çıkmaz, hidrolizde su açığa çıkar."\n✅ Tam tersi: Dehidrasyon sentezinde (birleşme) su AÇIĞA ÇIKAR (dehidrasyon = "su kaybetme"); hidrolizde (parçalanma) su KULLANILIR (hidroliz = "su ile parçalama").',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.2-carbs-L6',
    subtopicId: '9-2.2-carbs',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdaki karbohidratlardan hangisi monosakkarittir/disakkarittir/polisakkarittir?" şeklinde sınıflandırma soruları.\n2) "Glikoz + Galaktoz hangi disakkariti oluşturur?" tarzı eşleştirme soruları (laktoz).\n3) Dehidrasyon sentezi ve hidroliz tepkimelerinde su molekülünün rolünü soran şema soruları.\n4) "Nişasta - Selüloz - Glikojen" karşılaştırma soruları: hangisi hangi canlı grubunda depo edilir, hangisi sindirilebilir.',
      aytPattern: 'AYT\'de glikoz izomerlerinin yapısal farkları, glikozit bağı oluşumunun moleküler düzeyde gösterimi ve karbohidratların hücresel solunumla (glikoliz) ilişkisi sorgulanabilir. Ayrıca öncüllü (I-II-III) sorularda karbohidrat-lipit-protein karşılaştırmaları yapılır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'En sık çıkan tuzak: "X + Y → Z + H₂O" şeklinde verilen bir tepkimenin DEHİDRASYON SENTEZİ, "Z + H₂O → X + Y" şeklinde verilenin ise HİDROLİZ olduğunu ayırt edebilmek. Suyun tepkimenin hangi tarafında olduğuna dikkat et!',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.2-carbs-L7',
    subtopicId: '9-2.2-carbs',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Karbohidratları günlük hayattan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🍞 Ekmek ve makarna: Buğdaydaki nişasta, ağızda amilaz enzimiyle parçalanmaya başlar; bu yüzden ekmeği uzun süre çiğnersek hafif tatlı bir tat hissederiz (nişasta maltoza, sonra glikoza dönüşür).',
        },
        {
          type: 'example',
          text: '🥛 Laktoz intoleransı: Bazı yetişkinlerde laktaz enzimi azaldığı için süt içtiklerinde şişkinlik ve rahatsızlık yaşanır — laktoz, glikoz ve galaktoza parçalanamadan kalın bağırsağa geçer.',
        },
        {
          type: 'example',
          text: '🏃 Egzersiz ve glikojen: Yoğun egzersiz sırasında kaslardaki glikojen depoları glikoza parçalanarak hızlı enerji sağlar — "karbonhidrat yükleme" sporcuların performans stratejisidir.',
        },
        {
          type: 'example',
          text: '🥦 Lifli besinler: Sebzelerdeki selüloz insan vücudunda sindirilemez ama bağırsak hareketlerini kolaylaştırarak sindirim sağlığını destekler (posa/diyet lifi).',
        },
        {
          type: 'example',
          text: '🍯 Bal: Doğal olarak glikoz ve fruktoz karışımı içerir; fruktozun yüksek tatlılığı nedeniyle bal, sükrozdan (sofra şekeri) daha tatlı algılanır.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.2-carbs-L8',
    subtopicId: '9-2.2-carbs',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.2-carbs-L9',
    subtopicId: '9-2.2-carbs',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Karbohidratlar
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_2_carbs: Flashcard[] = [
  { id: 'fc-9-2.2-carbs-01', subtopicId: '9-2.2-carbs', orderIndex: 1,
    term: 'Monomer', definition: 'Polimerleri oluşturan en küçük yapı taşı', example: 'Karbohidratlarda monosakkaritler (glikoz, fruktoz)' },
  { id: 'fc-9-2.2-carbs-02', subtopicId: '9-2.2-carbs', orderIndex: 2,
    term: 'Polimer', definition: 'Çok sayıda monomerin birleşmesiyle oluşan büyük molekül', example: 'Nişasta, glikojen, selüloz' },
  { id: 'fc-9-2.2-carbs-03', subtopicId: '9-2.2-carbs', orderIndex: 3,
    term: 'Glikoz', definition: 'Hücresel solunumda en çok kullanılan monosakkarit (C₆H₁₂O₆)', example: 'Kan şekerinin temel formu' },
  { id: 'fc-9-2.2-carbs-04', subtopicId: '9-2.2-carbs', orderIndex: 4,
    term: 'Fruktoz', definition: 'Doğada bilinen en tatlı monosakkarit', example: 'Meyvelerde ve balda bulunur' },
  { id: 'fc-9-2.2-carbs-05', subtopicId: '9-2.2-carbs', orderIndex: 5,
    term: 'Galaktoz', definition: 'Genellikle laktozun yapısında glikozla birleşik bulunan monosakkarit', example: 'Süt şekeri (laktoz) içinde bulunur' },
  { id: 'fc-9-2.2-carbs-06', subtopicId: '9-2.2-carbs', orderIndex: 6,
    term: 'Sükroz', definition: 'Glikoz + Fruktozdan oluşan disakkarit (sofra şekeri)', example: 'Şeker pancarından elde edilir' },
  { id: 'fc-9-2.2-carbs-07', subtopicId: '9-2.2-carbs', orderIndex: 7,
    term: 'Laktoz', definition: 'Glikoz + Galaktozdan oluşan süt şekeri', example: 'Sindirimi için laktaz enzimi gerekir' },
  { id: 'fc-9-2.2-carbs-08', subtopicId: '9-2.2-carbs', orderIndex: 8,
    term: 'Maltoz', definition: 'Glikoz + Glikozdan oluşan malt şekeri', example: 'Nişasta sindiriminde ara üründür' },
  { id: 'fc-9-2.2-carbs-09', subtopicId: '9-2.2-carbs', orderIndex: 9,
    term: 'Nişasta', definition: 'Bitkilerde glikozun depo polisakkariti', example: 'Patates, buğday, pirinç' },
  { id: 'fc-9-2.2-carbs-10', subtopicId: '9-2.2-carbs', orderIndex: 10,
    term: 'Glikojen', definition: 'Hayvan ve mantarlarda glikozun depo polisakkariti', example: 'Karaciğer ve kas hücrelerinde depolanır' },
  { id: 'fc-9-2.2-carbs-11', subtopicId: '9-2.2-carbs', orderIndex: 11,
    term: 'Selüloz', definition: 'Bitki hücre duvarının yapı polisakkariti, insan tarafından sindirilemez', example: 'Sebzelerdeki posa/lif' },
  { id: 'fc-9-2.2-carbs-12', subtopicId: '9-2.2-carbs', orderIndex: 12,
    term: 'Dehidrasyon Sentezi', definition: 'İki monomerin su çıkararak birleşmesi', example: 'Glikoz + Fruktoz → Sükroz + H₂O' },
  { id: 'fc-9-2.2-carbs-13', subtopicId: '9-2.2-carbs', orderIndex: 13,
    term: 'Hidroliz', definition: 'Su kullanılarak polimerlerin monomerlerine parçalanması', example: 'Sükroz + H₂O → Glikoz + Fruktoz' },
];

// ─────────────────────────────────────────────────────────────
// KONU: Organik Moleküller (9BIO-2.2)
// Alt Konu: Lipitler (9-2.2-lipids)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_2_lipids: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.2-lipids-L1',
    subtopicId: '9-2.2-lipids',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Lipitler, karbon, hidrojen ve oksijen atomlarından oluşan ancak karbohidratlara göre çok daha az oksijen içeren, suda çözünmeyen (hidrofobik) organik moleküllerdir. Sadece organik çözücülerde (eter, kloroform, benzen) çözünürler. Canlılarda en yoğun enerji deposu lipitlerdir; 1 gram yağ, 1 gram karbohidrat veya proteinin verdiği enerjinin yaklaşık iki katından fazla enerji (~9 kcal) verir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Lipitlerin başlıca görevleri: 1) Enerji depolama (en yoğun enerji kaynağı) 2) Hücre zarı yapısına katılma (fosfolipitler) 3) Hormon yapısına katılma (steroid hormonlar) 4) Isı yalıtımı ve organları koruma (yağ dokusu, kahverengi yağ).',
        },
        {
          type: 'tip',
          text: 'Lipitler suda çözünmez çünkü uzun hidrokarbon zincirleri (apolar/nonpolar) içerir. Bu özellik, hücre zarının suya karşı bariyer oluşturmasının temel nedenidir.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.2-lipids-L2',
    subtopicId: '9-2.2-lipids',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-lipitler',
      body: 'Bir nötr yağ (trigliserit) molekülü, 1 molekül gliserol ile 3 molekül yağ asidinin dehidrasyon sentezi (ester bağı oluşturarak) birleşmesiyle oluşur ve bu sırada 3 molekül su açığa çıkar. Yağ asitleri, uzun bir hidrokarbon zincirinin ucunda karboksil grubu (-COOH) bulunduran moleküllerdir. Hidrokarbon zincirindeki karbon atomları arasında çift bağ bulunup bulunmamasına göre yağ asitleri "doymuş" veya "doymamış" olarak ikiye ayrılır. Fosfolipitler ise gliserole bağlı 2 yağ asidi ve 1 fosfat grubundan oluşur; bu yapı hücre zarının çift katlı (lipit bilayer) yapısının temelidir — fosfat başı hidrofilik (suyu sever), yağ asidi kuyrukları hidrofobiktir (sudan kaçar).',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Trigliserit = 1 Gliserol + 3 Yağ Asidi (3 ester bağı, 3 H₂O açığa çıkar)\nFosfolipit = 1 Gliserol + 2 Yağ Asidi + 1 Fosfat Grubu\nSteroid: 4 halkalı karbon iskeletine sahip lipit türü (kolesterol, östrojen, testosteron, kortizol gibi hormonların temelidir).',
        },
        {
          type: 'tip',
          text: 'Doymuş yağ asidinde karbon atomları arasında YALNIZCA TEKLİ BAĞ vardır → düz zincir → moleküller sıkı paketlenir → oda sıcaklığında KATI. Doymamış yağ asidinde en az bir ÇİFT BAĞ vardır → zincirde "kıvrım" oluşur → moleküller gevşek paketlenir → oda sıcaklığında SIVI.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.2-lipids-L3',
    subtopicId: '9-2.2-lipids',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Lipit çeşitlerini ve görevlerini sınıflandıralım:',
      steps: [
        '1. NÖTR YAĞLAR (TRİGLİSERİTLER) — Gliserol + 3 yağ asidinden oluşur. Temel görevi enerji depolamadır.',
        '   • DOYMUŞ YAĞ ASİTLERİ — Karbon zincirinde çift bağ yoktur (tüm bağlar tekli/doymuş). Genellikle hayvansal kaynaklıdır (tereyağı, iç yağı, kuyruk yağı). Oda sıcaklığında KATI haldedir. Aşırı tüketimi kalp-damar hastalığı riskini artırır.',
        '   • DOYMAMIŞ YAĞ ASİTLERİ — Karbon zincirinde bir veya daha fazla çift bağ bulunur. Genellikle bitkisel kaynaklıdır (zeytinyağı, ayçiçek yağı, mısır yağı) ve balık yağında bulunur. Oda sıcaklığında SIVI haldedir (yağ değil "yağ" denir, örn. zeytinyağı).',
        '2. FOSFOLİPİTLER — Gliserol + 2 yağ asidi + fosfat grubundan oluşur. Hücre zarının temel yapı taşıdır; çift katlı tabaka (lipit bilayer) oluşturarak hücreyi çevreler.',
        '3. STEROİDLER — Dört halkalı karbon iskeletine sahip lipitlerdir. Enerji deposu DEĞİLDİR; yapısal ve düzenleyici görevleri vardır. Örnekler: KOLESTEROL (hücre zarının akışkanlığını düzenler, steroid hormonların öncülüdür), ÖSTROJEN ve TESTOSTERON (eşey hormonları), KORTİZOL (stres hormonu).',
        '4. BALMUMLARI (VAKSLAR) — Suya karşı koruyucu tabaka oluşturan lipitlerdir. Örnek: bitki yapraklarındaki kütikula tabakası, kulak kiri, arı peteği.',
        '5. LİPİTLERİN GENEL GÖREVLERİ — (a) Enerji deposu (en yoğun, en uzun süreli depo), (b) hücre zarı yapısına katılma (fosfolipit ve kolesterol), (c) hormon yapısına katılma (steroid hormonlar), (d) ısı yalıtımı ve organları darbelere karşı koruma (deri altı yağ dokusu, böbrek çevresi yağ).',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.2-lipids-L4',
    subtopicId: '9-2.2-lipids',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Trigliserit (Nötr Yağ): 1 gliserol + 3 yağ asidinden oluşan, enerji depolayan lipit.' },
        { type: 'tip', text: 'Gliserol: Trigliserit ve fosfolipitlerin omurgasını oluşturan 3 karbonlu alkol.' },
        { type: 'tip', text: 'Yağ Asidi: Uzun hidrokarbon zinciri ve karboksil (-COOH) grubu içeren molekül.' },
        { type: 'tip', text: 'Doymuş Yağ Asidi: Karbon zincirinde çift bağ bulunmayan, oda sıcaklığında katı yağ asidi (genellikle hayvansal).' },
        { type: 'tip', text: 'Doymamış Yağ Asidi: Karbon zincirinde en az bir çift bağ bulunan, oda sıcaklığında sıvı yağ asidi (genellikle bitkisel).' },
        { type: 'tip', text: 'Fosfolipit: Gliserol + 2 yağ asidi + fosfat grubundan oluşan, hücre zarının temel bileşeni.' },
        { type: 'tip', text: 'Steroid: 4 halkalı karbon iskeletine sahip, hormon yapısına katılan lipit (kolesterol, östrojen, testosteron).' },
        { type: 'tip', text: 'Ester Bağı: Gliserol ile yağ asidi arasında dehidrasyon sentezi sırasında oluşan kovalent bağ.' },
        { type: 'tip', text: 'Hidrofobik: Su ile etkileşmeyen, suda çözünmeyen ("sudan korkan") özellik.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.2-lipids-L5',
    subtopicId: '9-2.2-lipids',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Bütün yağlar zararlıdır, vücuttan tamamen uzak tutulmalıdır."\n✅ Doymamış yağ asitleri (özellikle omega-3, omega-6) hücre zarı yapısı ve hormon üretimi için ESANSİYELDİR — vücut bazılarını üretemez, dışarıdan alınmalıdır. Zararlı olan AŞIRI doymuş yağ ve trans yağ tüketimidir.',
        },
        {
          type: 'warning',
          text: '❌ "Doymuş yağlar bitkisel, doymamış yağlar hayvansaldır."\n✅ Genel eğilim TERSİNEDİR: Doymuş yağ asitleri çoğunlukla HAYVANSAL kaynaklıdır (tereyağı, iç yağı) ve katıdır; doymamış yağ asitleri çoğunlukla BİTKİSEL kaynaklıdır (zeytinyağı, ayçiçek yağı) ve sıvıdır. (İstisna: hindistancevizi yağı bitkisel ama doymuştur.)',
        },
        {
          type: 'warning',
          text: '❌ "Kolesterol her zaman zararlıdır, vücutta hiç olmamalıdır."\n✅ Kolesterol, hücre zarının akışkanlığını düzenleyen ve steroid hormonların (östrojen, testosteron, kortizol, D vitamini) öncülü olan ESANSİYEL bir lipittir. Zararlı olan kandaki AŞIRI ve dengesiz kolesterol seviyesidir (özellikle LDL).',
        },
        {
          type: 'warning',
          text: '❌ "Steroidler de trigliseritler gibi enerji depolar."\n✅ Steroidlerin halkasal yapısı enerji depolamaya uygun değildir. Steroidlerin görevi YAPISAL (hücre zarı) ve DÜZENLEYİCİDİR (hormon). Enerji deposu görevi TRİGLİSERİTLERE (nötr yağlara) aittir.',
        },
        {
          type: 'warning',
          text: '❌ "Fosfolipitler suda tamamen çözünür ya da tamamen çözünmez."\n✅ Fosfolipitler AMFİPATİKTİR: fosfat başı hidrofilik (suyu sever), yağ asidi kuyrukları hidrofobiktir (sudan kaçar). Bu çift karakter, hücre zarındaki çift katlı (bilayer) yapının nedenidir.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.2-lipids-L6',
    subtopicId: '9-2.2-lipids',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Doymuş ve doymamış yağ asitlerinin karşılaştırılması" — fiziksel hal (katı/sıvı), kaynak (hayvansal/bitkisel), kimyasal yapı (çift bağ var/yok) tablo şeklinde sorulur.\n2) "Aşağıdakilerden hangisi lipitlerin görevlerinden biri DEĞİLDİR?" tarzı soruda genelde "kalıtsal bilgi taşıma" veya "katalizör olma" gibi nükleik asit/protein görevleri çeldirici olarak verilir.\n3) Trigliserit oluşumunda kaç molekül su açığa çıktığını soran sayısal sorular (cevap: 3 — gliserol ve 3 yağ asidi arasında 3 ester bağı oluşur).',
      aytPattern: 'AYT\'de fosfolipitlerin hücre zarındaki dizilimi (hidrofilik baş dışta, hidrofobik kuyruk içte), steroid hormonların hücre içi reseptörlerle etkileşimi ve doymamış yağ asitlerinin membran akışkanlığına etkisi gibi ileri düzey ilişkilendirmeler sorulabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'En sık çıkan tuzak: "Hücre zarının yapısına katılan lipit türü hangisidir?" Cevap: FOSFOLİPİT (ve kolesterol) — trigliserit (nötr yağ) DEĞİL! Trigliseritler sadece enerji deposudur, zar yapısına katılmaz.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.2-lipids-L7',
    subtopicId: '9-2.2-lipids',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Lipitleri günlük hayattan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🧈 Tereyağı vs zeytinyağı: Tereyağı oda sıcaklığında katıdır çünkü doymuş yağ asitleri içerir; zeytinyağı sıvıdır çünkü doymamış (oleik asit gibi) yağ asitleri içerir.',
        },
        {
          type: 'example',
          text: '🐻 Kış uykusuna yatan hayvanlar: Ayılar gibi hayvanlar, kış uykusu öncesi deri altında biriktirdikleri yağ dokusunu hem enerji deposu hem de ısı yalıtımı için kullanır.',
        },
        {
          type: 'example',
          text: '💊 Steroid hormonlar ve ilaçlar: Doping amaçlı kullanılan anabolik steroidler, testosteron benzeri yapay steroid hormonlardır — kas yapımını etkiler ama ciddi yan etkilere yol açar.',
        },
        {
          type: 'example',
          text: '🐟 Omega-3 takviyeleri: Balık yağındaki doymamış yağ asitleri (omega-3), kalp-damar sağlığını desteklediği ve beyin gelişimine katkı sağladığı için doktorlar tarafından önerilir.',
        },
        {
          type: 'example',
          text: '🕯️ Mum ve balmumu: Arıların ürettiği balmumu, suya dayanıklı bir lipit türüdür ve petekteki balın korunmasını sağlar — aynı mantık, yaprakların kütikula tabakasında da geçerlidir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.2-lipids-L8',
    subtopicId: '9-2.2-lipids',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.2-lipids-L9',
    subtopicId: '9-2.2-lipids',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Lipitler
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_2_lipids: Flashcard[] = [
  { id: 'fc-9-2.2-lipids-01', subtopicId: '9-2.2-lipids', orderIndex: 1,
    term: 'Trigliserit (Nötr Yağ)', definition: '1 gliserol + 3 yağ asidinden oluşan enerji deposu lipit', example: 'Deri altı yağ dokusu' },
  { id: 'fc-9-2.2-lipids-02', subtopicId: '9-2.2-lipids', orderIndex: 2,
    term: 'Gliserol', definition: 'Trigliserit ve fosfolipitlerin omurgasını oluşturan 3 karbonlu alkol', example: 'Yağ asitleriyle ester bağı kurar' },
  { id: 'fc-9-2.2-lipids-03', subtopicId: '9-2.2-lipids', orderIndex: 3,
    term: 'Doymuş Yağ Asidi', definition: 'Karbon zincirinde çift bağ olmayan, oda sıcaklığında katı yağ asidi', example: 'Tereyağı, iç yağı (genellikle hayvansal)' },
  { id: 'fc-9-2.2-lipids-04', subtopicId: '9-2.2-lipids', orderIndex: 4,
    term: 'Doymamış Yağ Asidi', definition: 'Karbon zincirinde en az bir çift bağ olan, oda sıcaklığında sıvı yağ asidi', example: 'Zeytinyağı, balık yağı (genellikle bitkisel)' },
  { id: 'fc-9-2.2-lipids-05', subtopicId: '9-2.2-lipids', orderIndex: 5,
    term: 'Fosfolipit', definition: 'Gliserol + 2 yağ asidi + fosfat grubundan oluşan, hücre zarının yapı taşı', example: 'Hücre zarındaki çift katlı tabaka' },
  { id: 'fc-9-2.2-lipids-06', subtopicId: '9-2.2-lipids', orderIndex: 6,
    term: 'Steroid', definition: '4 halkalı karbon iskeletine sahip, hormon yapısına katılan lipit', example: 'Kolesterol, östrojen, testosteron' },
  { id: 'fc-9-2.2-lipids-07', subtopicId: '9-2.2-lipids', orderIndex: 7,
    term: 'Kolesterol', definition: 'Hücre zarı akışkanlığını düzenleyen ve hormon öncülü olan steroid', example: 'D vitamini ve cinsiyet hormonlarının öncülü' },
  { id: 'fc-9-2.2-lipids-08', subtopicId: '9-2.2-lipids', orderIndex: 8,
    term: 'Ester Bağı', definition: 'Gliserol ile yağ asidi arasındaki kovalent bağ', example: 'Trigliserit oluşumunda 3 ester bağı kurulur' },
  { id: 'fc-9-2.2-lipids-09', subtopicId: '9-2.2-lipids', orderIndex: 9,
    term: 'Balmumu (Vaks)', definition: 'Suya karşı koruyucu tabaka oluşturan lipit', example: 'Yaprak kütikulası, arı peteği' },
  { id: 'fc-9-2.2-lipids-10', subtopicId: '9-2.2-lipids', orderIndex: 10,
    term: 'Hidrofobik', definition: 'Su ile etkileşmeyen, suda çözünmeyen özellik', example: 'Lipitlerin hidrokarbon zincirleri' },
];

// ─────────────────────────────────────────────────────────────
// KONU: Organik Moleküller (9BIO-2.2)
// Alt Konu: Proteinler (9-2.2-proteins)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_2_proteins: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.2-proteins-L1',
    subtopicId: '9-2.2-proteins',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Proteinler, amino asit adı verilen monomerlerin peptit bağlarıyla birbirine bağlanmasıyla oluşan, karbon, hidrojen, oksijen, azot (ve bazen kükürt) içeren büyük ve karmaşık organik moleküllerdir. Canlılarda en çeşitli görevleri üstlenen organik moleküllerdir; yapısal görevlerden enzim katalizine, bağışıklıktan hareket etmeye kadar geniş bir işlev yelpazesine sahiptirler.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Proteinlerin başlıca görevleri: 1) YAPI (kollajen, keratin) 2) ONARIM (doku yenilenmesi) 3) TAŞIMA (hemoglobin, taşıyıcı proteinler) 4) SAVUNMA (antikorlar) 5) DÜZENLEME (hormonlar, örn. insülin) 6) KATALİZ (enzimler, biyolojik katalizörler).',
        },
        {
          type: 'tip',
          text: 'Proteinlerin yapı taşı (monomeri) AMİNO ASİTLERDİR. Doğada 20 farklı amino asit bulunur; bunların farklı sayı, sıra ve dizilimlerle birleşmesi sonsuz çeşitlilikte protein oluşturur.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.2-proteins-L2',
    subtopicId: '9-2.2-proteins',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-proteinler',
      body: 'Bir amino asit molekülü; merkezi bir karbon atomuna (alfa karbon) bağlı amino grubu (-NH₂), karboksil grubu (-COOH), bir hidrojen atomu ve değişken bir "R grubu" (yan zincir) içerir. R grubunun yapısı, amino asitten amino aside değişir ve her amino asidin kimliğini, polaritesini (polar/apolar), yükünü belirler — bu farklılıklar proteinin üç boyutlu şeklini şekillendirir. İki amino asit, birinin karboksil grubu ile diğerinin amino grubu arasında dehidrasyon sentezi (su çıkararak) ile birleşerek PEPTİT BAĞI oluşturur. Çok sayıda amino asidin peptit bağlarıyla zincir oluşturmasıyla POLİPEPTİT (protein) meydana gelir. Proteinin işlevi, bu zincirin katlanarak aldığı üç boyutlu şekle (yapısına) bağlıdır.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Amino Asit + Amino Asit → Dipeptit + H₂O (peptit bağı oluşumu, dehidrasyon sentezi)\nÇok sayıda amino asit → Polipeptit (Protein)\nProtein Yapı Düzeyleri: Birincil (amino asit dizilimi) → İkincil (sarmal/kıvrım, hidrojen bağları) → Üçüncül (3 boyutlu katlanma) → Dördüncül (birden fazla polipeptit zincirinin bir araya gelmesi, örn. hemoglobin).',
        },
        {
          type: 'tip',
          text: 'Hemoglobin gibi proteinler dördüncül yapıya sahiptir: 4 ayrı polipeptit zincirinin (2 alfa, 2 beta) bir araya gelmesiyle oluşur ve her biri bir hem grubu taşıyarak oksijen bağlar.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.2-proteins-L3',
    subtopicId: '9-2.2-proteins',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Proteinlerin görevlerini ve enzimlerin özelliklerini sınıflandıralım:',
      steps: [
        '1. YAPISAL GÖREV — Hücre ve doku yapısının oluşturulmasında görev alır. Örnek: KOLLAJEN (bağ dokusunda, deride, kemikte bulunan en bol protein), KERATİN (saç, tırnak, deride bulunan sert yapısal protein).',
        '2. ONARIM GÖREVİ — Yıpranan doku ve hücrelerin yenilenmesinde kullanılır. Yara iyileşmesi sırasında yeni doku proteinleri sentezlenir.',
        '3. TAŞIMA GÖREVİ — Maddelerin hücre içi/dışı veya kan yoluyla taşınmasını sağlar. Örnek: HEMOGLOBİN (kanda oksijen taşır), hücre zarındaki taşıyıcı proteinler (glikoz, iyon taşınması).',
        '4. SAVUNMA GÖREVİ — Bağışıklık sisteminde patojenlere karşı savunma sağlar. Örnek: ANTİKORLAR (immünoglobulinler), bazı kan pıhtılaşma proteinleri (fibrinojen).',
        '5. DÜZENLEME (HORMONAL) GÖREVİ — Vücut işlevlerini düzenleyen hormonların yapısına katılır. Örnek: İNSÜLİN (kan şekerini düşürür), GLUKAGON (kan şekerini yükseltir), büyüme hormonu.',
        '6. KATALİZ GÖREVİ (ENZİMLER) — Enzimler, hücredeki kimyasal tepkimelerin hızını artıran protein yapılı biyolojik katalizörlerdir. Tepkime sonunda yapıları değişmeden kalır, tekrar tekrar kullanılabilirler.',
        '   • ENZİMLERİN ÖZELLİKLERİ — Substrata özgüdür ("anahtar-kilit" veya "indüklenmiş uyum" modeli), tepkimenin aktivasyon enerjisini düşürür, sıcaklık ve pH değişimlerinden etkilenir (her enziminin bir optimum sıcaklık ve pH değeri vardır).',
        '7. PROTEİNLERİN BOZULMASI (DENATÜRASYON) — Aşırı sıcaklık, aşırı pH değişimi (asit/baz), ağır metaller veya bazı kimyasallar proteinin üç boyutlu yapısını bozar. Bu durumda protein işlevini kaybeder. Denatürasyon genellikle GERİ DÖNÜŞSÜZDÜR (örn. pişmiş yumurta akı tekrar saydamlaşmaz).',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.2-proteins-L4',
    subtopicId: '9-2.2-proteins',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Amino Asit: Proteinlerin yapı taşı; amino grubu (-NH₂), karboksil grubu (-COOH) ve değişken R grubu içerir.' },
        { type: 'tip', text: 'Peptit Bağı: İki amino asit arasında dehidrasyon sentezi ile oluşan kovalent bağ.' },
        { type: 'tip', text: 'Polipeptit: Çok sayıda amino asidin peptit bağlarıyla birleşmesiyle oluşan zincir (protein).' },
        { type: 'tip', text: 'R Grubu (Yan Zincir): Her amino aside özgü, polariteyi ve kimliği belirleyen değişken kısım.' },
        { type: 'tip', text: 'Enzim: Hücredeki tepkimelerin hızını artıran protein yapılı biyolojik katalizör.' },
        { type: 'tip', text: 'Substrat: Enzimin etki ettiği madde.' },
        { type: 'tip', text: 'Denatürasyon: Proteinin üç boyutlu yapısının bozulması ve işlevini kaybetmesi (sıcaklık, pH, kimyasallar etkisiyle).' },
        { type: 'tip', text: 'Aktivasyon Enerjisi: Bir tepkimenin başlaması için gereken minimum enerji; enzimler bunu düşürür.' },
        { type: 'tip', text: 'Hemoglobin: Kanda oksijen taşıyan, dördüncül yapılı taşıyıcı protein.' },
        { type: 'tip', text: 'Antikor: Bağışıklık sisteminin ürettiği, savunma görevi gören protein.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.2-proteins-L5',
    subtopicId: '9-2.2-proteins',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Bütün enzimler proteindir, bütün proteinler enzimdir."\n✅ Tüm enzimler proteindir (RNA yapılı ribozim istisnaları hariç AYT konusu) AMA tüm proteinler enzim DEĞİLDİR. Kollajen, hemoglobin, antikorlar, keratin enzim değildir — yapısal, taşıyıcı veya savunma proteinleridir.',
        },
        {
          type: 'warning',
          text: '❌ "Denatüre olmuş bir protein, normal koşullara dönünce eski şekline ve işlevine geri döner."\n✅ Denatürasyon genellikle GERİ DÖNÜŞSÜZDÜR. Pişen yumurta akı (albumin) tekrar soğutulsa bile saydam, sıvı haline dönmez — yapısı kalıcı olarak bozulmuştur.',
        },
        {
          type: 'warning',
          text: '❌ "Enzimler her sıcaklık ve pH değerinde aynı verimle çalışır."\n✅ Her enzimin bir OPTİMUM sıcaklık ve pH aralığı vardır. Bu aralığın dışına çıkıldığında enzim aktivitesi azalır veya enzim denatüre olarak tamamen işlevini kaybedebilir (örn. pepsin asidik ortamda, tripsin bazik ortamda çalışır).',
        },
        {
          type: 'warning',
          text: '❌ "Enzimler tepkime sonunda tükenir, her tepkimede yeniden sentezlenmesi gerekir."\n✅ Enzimler tepkime sonunda YAPISAL OLARAK DEĞİŞMEDEN kalır ve tekrar tekrar kullanılabilir — bu yüzden hücrede çok az miktarda enzim, çok sayıda tepkimeyi katalizleyebilir.',
        },
        {
          type: 'warning',
          text: '❌ "Proteinlerin tek görevi vücut yapısını oluşturmaktır (kas yapmak)."\n✅ Yapısal görev (kas, kollajen, keratin) proteinlerin sadece bir görevidir. Ayrıca taşıma (hemoglobin), savunma (antikor), düzenleme (hormon) ve kataliz (enzim) gibi kritik görevleri de vardır.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.2-proteins-L6',
    subtopicId: '9-2.2-proteins',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdakilerden hangisi proteinlerin görevlerinden biri DEĞİLDİR?" tarzı sorularda genelde "kalıtsal bilgi taşıma" (DNA\'nın görevi) çeldirici olarak verilir.\n2) Enzim-substrat ilişkisini gösteren grafik yorumlama soruları: sıcaklık-enzim aktivitesi grafiği, pH-enzim aktivitesi grafiği.\n3) "X amino asit + Y amino asit → dipeptit + ? " şeklinde dehidrasyon sentezi/hidroliz sorularında açığa çıkan/harcanan su molekülü sayısının hesaplanması.\n4) Protein denatürasyonuna sebep olan etkenleri (yüksek sıcaklık, aşırı asit/baz, ağır metal) tanıma soruları.',
      aytPattern: 'AYT\'de enzim kinetiği (substrat derişimi - tepkime hızı grafiği), enzim inhibisyonu (rekabetçi/rekabetçi olmayan inhibisyon), protein yapı düzeyleri (birincil-ikincil-üçüncül-dördüncül) ve hemoglobin gibi dördüncül yapılı proteinlerin işlevle ilişkisi detaylı sorulabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'En sık çıkan tuzak: Sıcaklık-enzim aktivitesi grafiğinde, sıcaklık arttıkça aktivite önce ARTAR (optimuma kadar), optimumdan sonra ENZİM DENATÜRE OLDUĞU İÇİN HIZLA AZALIR. "Sıcaklık artınca enzim hep daha hızlı çalışır" yanlıştır!',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.2-proteins-L7',
    subtopicId: '9-2.2-proteins',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Proteinleri günlük hayattan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🍳 Yumurta pişirme: Çiğ yumurta akı saydam ve sıvıdır; ısıyla pişirildiğinde albumin proteini denatüre olur, beyazlaşır ve katılaşır — bu değişim geri döndürülemez.',
        },
        {
          type: 'example',
          text: '🧪 Ananas ve jelatin: Taze ananastaki bromelain enzimi, jelatindeki proteinleri parçaladığı için ananaslı jöle pıhtılaşmaz (enzimin proteinleri sindirme/parçalama özelliği).',
        },
        {
          type: 'example',
          text: '💪 Kas yapımı (protein takviyeleri): Sporcular, kas dokusunun onarımı ve büyümesi (yapısal protein sentezi) için yüksek proteinli beslenir veya whey protein gibi takviyeler kullanır.',
        },
        {
          type: 'example',
          text: '🩸 Anemi (kansızlık): Hemoglobin (taşıyıcı protein) eksikliğinde kan yeterince oksijen taşıyamaz, kişi yorgunluk ve halsizlik yaşar.',
        },
        {
          type: 'example',
          text: '🦠 Aşılar ve antikorlar: Vücuda giren bir virüse karşı bağışıklık sistemi, o virüse özgü antikor proteinleri üreterek savunma yapar — aşılar bu süreci tetikler.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.2-proteins-L8',
    subtopicId: '9-2.2-proteins',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.2-proteins-L9',
    subtopicId: '9-2.2-proteins',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Proteinler
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_2_proteins: Flashcard[] = [
  { id: 'fc-9-2.2-proteins-01', subtopicId: '9-2.2-proteins', orderIndex: 1,
    term: 'Amino Asit', definition: 'Proteinlerin yapı taşı; -NH₂, -COOH ve R grubu içerir', example: '20 farklı amino asit doğada bulunur' },
  { id: 'fc-9-2.2-proteins-02', subtopicId: '9-2.2-proteins', orderIndex: 2,
    term: 'Peptit Bağı', definition: 'İki amino asit arasında dehidrasyon sentezi ile oluşan bağ', example: 'Amino Asit + Amino Asit → Dipeptit + H₂O' },
  { id: 'fc-9-2.2-proteins-03', subtopicId: '9-2.2-proteins', orderIndex: 3,
    term: 'Polipeptit', definition: 'Çok sayıda amino asidin peptit bağlarıyla oluşturduğu zincir', example: 'Proteinlerin temel yapısı' },
  { id: 'fc-9-2.2-proteins-04', subtopicId: '9-2.2-proteins', orderIndex: 4,
    term: 'Enzim', definition: 'Tepkime hızını artıran protein yapılı biyolojik katalizör', example: 'Amilaz, pepsin, katalaz' },
  { id: 'fc-9-2.2-proteins-05', subtopicId: '9-2.2-proteins', orderIndex: 5,
    term: 'Substrat', definition: 'Enzimin etki ettiği madde', example: 'Amilaz için substrat nişastadır' },
  { id: 'fc-9-2.2-proteins-06', subtopicId: '9-2.2-proteins', orderIndex: 6,
    term: 'Denatürasyon', definition: 'Proteinin yapısının bozulup işlevini kaybetmesi', example: 'Pişen yumurta akının katılaşması' },
  { id: 'fc-9-2.2-proteins-07', subtopicId: '9-2.2-proteins', orderIndex: 7,
    term: 'Hemoglobin', definition: 'Kanda oksijen taşıyan dördüncül yapılı protein', example: '2 alfa + 2 beta zincirinden oluşur' },
  { id: 'fc-9-2.2-proteins-08', subtopicId: '9-2.2-proteins', orderIndex: 8,
    term: 'Kollajen', definition: 'Bağ dokusunda bulunan en bol yapısal protein', example: 'Deri, kemik, kıkırdak' },
  { id: 'fc-9-2.2-proteins-09', subtopicId: '9-2.2-proteins', orderIndex: 9,
    term: 'Antikor', definition: 'Bağışıklık sisteminin ürettiği savunma proteini', example: 'İmmünoglobulinler, patojenleri etkisiz hale getirir' },
  { id: 'fc-9-2.2-proteins-10', subtopicId: '9-2.2-proteins', orderIndex: 10,
    term: 'İnsülin', definition: 'Kan şekerini düşüren düzenleyici (hormon) protein', example: 'Pankreas tarafından salgılanır' },
  { id: 'fc-9-2.2-proteins-11', subtopicId: '9-2.2-proteins', orderIndex: 11,
    term: 'Optimum Sıcaklık/pH', definition: 'Bir enzimin en yüksek aktiviteyi gösterdiği sıcaklık/pH değeri', example: 'Pepsin için optimum pH ~2 (asidik)' },
];

// ─────────────────────────────────────────────────────────────
// KONU: Organik Moleküller (9BIO-2.2)
// Alt Konu: Nükleik Asitler (9-2.2-nucleic)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_2_nucleic: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.2-nucleic-L1',
    subtopicId: '9-2.2-nucleic',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Nükleik asitler, canlıların kalıtsal bilgisini taşıyan ve protein sentezini yöneten organik moleküllerdir. Yapı taşları (monomerleri) NÜKLEOTİTLERDİR. İki çeşit nükleik asit vardır: DNA (Deoksiribonükleik Asit) ve RNA (Ribonükleik Asit). Bu iki molekül, hücredeki tüm yaşamsal bilgilerin saklandığı, kopyalandığı ve kullanıldığı temel sistemdir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'DNA: Kalıtsal bilgiyi taşır ve nesilden nesile aktarır — hücrenin "ana plan kitabı"dır.\nRNA: DNA\'daki bilgiyi kullanarak protein sentezinde görev alır — "plan kitabının fotokopisi ve uygulayıcısı"dır.',
        },
        {
          type: 'tip',
          text: 'Nükleik asitlerin monomeri NÜKLEOTİTTİR. Her nükleotit 3 kısımdan oluşur: 1) Azotlu organik baz, 2) Beş karbonlu şeker (pentoz), 3) Fosfat grubu.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.2-nucleic-L2',
    subtopicId: '9-2.2-nucleic',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: ['tyt-nukleik-asitler', 'tyt-atp'],
      body: 'Bir nükleotit; bir azotlu organik baz, bir pentoz şeker ve bir fosfat grubunun birleşmesinden oluşur. DNA molekülünde şeker DEOKSİRİBOZ\'dur ve moleküle çift sarmal (double helix) yapı kazandıran iki nükleotit zinciri, azotlu bazlar arasındaki hidrojen bağlarıyla birbirine bağlanır: ADENİN (A) her zaman TİMİN (T) ile, GUANİN (G) her zaman SİTOZİN (C) ile eşleşir (bu kurala "tamamlayıcılık/baz eşleşme kuralı" denir). RNA molekülünde ise şeker RİBOZ\'dur, tek zincirlidir ve TİMİN yerine URASİL (U) bulunur — Urasil, RNA\'da Adenin ile eşleşir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'DNA Bazları: Adenin (A) - Timin (T) - Guanin (G) - Sitozin (C)\nRNA Bazları: Adenin (A) - Urasil (U) - Guanin (G) - Sitozin (C)\nBaz Eşleşmesi (DNA): A=T (2 hidrojen bağı), G≡C (3 hidrojen bağı)\nBaz Eşleşmesi (DNA-RNA, transkripsiyon sırasında): A-U, T-A, G-C, C-G',
        },
        {
          type: 'tip',
          text: 'Şeker farkı kritik bir TYT noktasıdır: DNA → DEOKSİRİBOZ (oksijen bir tane eksik), RNA → RİBOZ. "Deoksi" = "oksijensiz/eksik oksijen" anlamına gelir.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.2-nucleic-L3',
    subtopicId: '9-2.2-nucleic',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'DNA ve RNA\'yı yapı, görev ve çeşitleri bakımından karşılaştıralım:',
      steps: [
        '1. DNA (Deoksiribonükleik Asit) — Yapısı: Çift sarmal (double helix), uzun ve kararlı. Şekeri: Deoksiriboz. Bazları: Adenin, Timin, Guanin, Sitozin. Görevi: Kalıtsal bilgiyi taşımak, saklamak ve kendini eşleyerek (replikasyon) yeni hücrelere aktarmak. Konumu: Çekirdek (ökaryotlarda), mitokondri ve kloroplastta da bulunur.',
        '2. RNA (Ribonükleik Asit) — Yapısı: Tek zincirli, daha kısa ve esnek. Şekeri: Riboz. Bazları: Adenin, Urasil, Guanin, Sitozin. Görevi: Protein sentezinde DNA\'daki bilgiyi taşımak ve kullanmak.',
        '3. mRNA (Mesajcı/Haberci RNA) — DNA\'daki genetik bilgiyi çekirdekten ribozoma taşır (transkripsiyon ürünüdür). Protein sentezinde "şifre taşıyıcı" görevindedir.',
        '4. tRNA (Taşıyıcı RNA) — Sitoplazmadaki amino asitleri ribozoma taşır ve mRNA üzerindeki kodonlarla eşleşen antikodonlara sahiptir. Üç boyutlu yonca yaprağı şeklindedir.',
        '5. rRNA (Ribozomal RNA) — Ribozomun yapısına katılır; protein sentezinin gerçekleştiği "fabrika" yapısının temel bileşenidir.',
        '6. DNA\'DAN PROTEİNE BİLGİ AKIŞI — DNA (kalıtsal bilgi) → [Transkripsiyon] → mRNA (bilgi kopyası) → [Translasyon/Çeviri] → Protein (işlevsel ürün). Bu akışa "Moleküler Biyolojinin Merkez Dogması" denir.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.2-nucleic-L4',
    subtopicId: '9-2.2-nucleic',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Nükleotit: Nükleik asitlerin yapı taşı; azotlu baz + pentoz şeker + fosfat grubundan oluşur.' },
        { type: 'tip', text: 'Azotlu Baz: Adenin, Timin, Guanin, Sitozin (DNA) veya Adenin, Urasil, Guanin, Sitozin (RNA).' },
        { type: 'tip', text: 'Pentoz Şeker: 5 karbonlu şeker; DNA\'da deoksiriboz, RNA\'da riboz bulunur.' },
        { type: 'tip', text: 'Çift Sarmal (Double Helix): DNA\'nın iki nükleotit zincirinin birbirine sarılarak oluşturduğu üç boyutlu yapı.' },
        { type: 'tip', text: 'Baz Tamamlayıcılığı: A-T (veya A-U) ve G-C bazlarının birbirine eşlenik olması kuralı.' },
        { type: 'tip', text: 'mRNA (Mesajcı RNA): DNA\'daki bilgiyi ribozoma taşıyan RNA çeşidi.' },
        { type: 'tip', text: 'tRNA (Taşıyıcı RNA): Amino asitleri ribozoma taşıyan, antikodon içeren RNA çeşidi.' },
        { type: 'tip', text: 'rRNA (Ribozomal RNA): Ribozomun yapısına katılan RNA çeşidi.' },
        { type: 'tip', text: 'Replikasyon: DNA\'nın kendini eşleyerek iki özdeş kopya oluşturması.' },
        { type: 'tip', text: 'Transkripsiyon: DNA\'daki genetik bilginin mRNA\'ya kopyalanması süreci.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.2-nucleic-L5',
    subtopicId: '9-2.2-nucleic',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "DNA ve RNA aynı bazları içerir."\n✅ DNA\'da TİMİN (T), RNA\'da ise onun yerine URASİL (U) bulunur. Diğer üç baz (Adenin, Guanin, Sitozin) her ikisinde de ortaktır.',
        },
        {
          type: 'warning',
          text: '❌ "RNA da DNA gibi çift sarmal yapıdadır."\n✅ DNA çift sarmal (iki zincirli), RNA ise genellikle TEK ZİNCİRLİDİR. Bu, RNA\'nın daha kısa ömürlü ve esnek olmasını sağlar.',
        },
        {
          type: 'warning',
          text: '❌ "DNA proteinleri doğrudan üretir."\n✅ DNA, protein sentezini DOĞRUDAN yapmaz. DNA\'daki bilgi önce mRNA\'ya kopyalanır (transkripsiyon), sonra ribozomda mRNA kullanılarak protein üretilir (translasyon). DNA çekirdekten çıkmaz (ökaryotlarda).',
        },
        {
          type: 'warning',
          text: '❌ "Adenin sadece Guanin ile, Sitozin sadece Timin ile eşleşir (rastgele eşleşme)."\n✅ Eşleşme sabittir ve rastgele DEĞİLDİR: DNA\'da A-T (2 hidrojen bağı) ve G-C (3 hidrojen bağı). Bu, "pürin-pirimidin" eşleşmesi olarak da bilinir ve sarmalın çapını sabit tutar.',
        },
        {
          type: 'warning',
          text: '❌ "Tek tip RNA vardır, hepsi aynı görevi yapar."\n✅ Üç temel RNA çeşidi farklı görevler üstlenir: mRNA (bilgi taşır), tRNA (amino asit taşır), rRNA (ribozom yapısına katılır). Her biri protein sentezinin farklı bir aşamasında rol oynar.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.2-nucleic-L6',
    subtopicId: '9-2.2-nucleic',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "DNA ve RNA\'yı karşılaştıran tablo" sorularında şeker türü (deoksiriboz/riboz), zincir sayısı (çift/tek), baz çeşitleri (T/U farkı) ve görev (kalıtım/protein sentezi) en sık sorulan noktalardır.\n2) Verilen bir DNA baz dizisinin (örn. A-T-G-C-A) RNA karşılığını yazma soruları (T yerine U gelir).\n3) "Nükleotit yapısındaki 3 bileşen nedir?" tarzı doğrudan bilgi soruları.\n4) Baz oranları ile ilgili sayısal sorular: "Bir DNA molekülünde Adenin oranı %20 ise Timin oranı kaçtır?" (Cevap: %20, çünkü A=T).',
      aytPattern: 'AYT\'de DNA replikasyonu mekanizması (yarı korunumlu replikasyon), transkripsiyon-translasyon süreçleri, kodon-antikodon eşleşmesi ve genetik şifre tablosu kullanımı detaylı sorulabilir. Ayrıca mutasyon ve protein sentezi hataları arasındaki ilişki AYT seviyesinde işlenir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'En sık çıkan tuzak: "DNA\'da bulunup RNA\'da bulunmayan / RNA\'da bulunup DNA\'da bulunmayan bileşen hangisidir?" Cevap: DNA\'da DEOKSİRİBOZ ve TİMİN, RNA\'da RİBOZ ve URASİL bulunur — bu iki çift birbirinin yerini alır.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.2-nucleic-L7',
    subtopicId: '9-2.2-nucleic',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Nükleik asitleri günlük hayattan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🧬 DNA testi (ebeveynlik/adli tıp): Bir kişinin DNA\'sındaki baz dizilimi, parmak izi gibi benzersizdir. Adli olaylarda ve soybağı testlerinde DNA karşılaştırması yapılır.',
        },
        {
          type: 'example',
          text: '💉 mRNA aşıları: COVID-19 mRNA aşıları, vücut hücrelerine geçici bir mRNA molekülü vererek hücrelerin virüse ait bir protein üretmesini ve bağışıklık sisteminin bu proteine karşı antikor geliştirmesini sağlar.',
        },
        {
          type: 'example',
          text: '🔬 PCR testi: Polimeraz Zincir Reaksiyonu (PCR), küçük miktardaki DNA\'yı çoğaltarak tespit edilebilir hale getirir — virüs testlerinde (örn. COVID-19 PCR testi) kullanılır.',
        },
        {
          type: 'example',
          text: '🌱 GDO\'lu (genetiği değiştirilmiş) organizmalar: Bilim insanları, bir organizmanın DNA\'sına başka bir türden gen ekleyerek istenen özellikleri (örn. zararlılara dayanıklı bitkiler) kazandırabilir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.2-nucleic-L8',
    subtopicId: '9-2.2-nucleic',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.2-nucleic-L9',
    subtopicId: '9-2.2-nucleic',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Nükleik Asitler
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_2_nucleic: Flashcard[] = [
  { id: 'fc-9-2.2-nucleic-01', subtopicId: '9-2.2-nucleic', orderIndex: 1,
    term: 'Nükleotit', definition: 'Nükleik asitlerin yapı taşı: azotlu baz + pentoz şeker + fosfat', example: 'DNA ve RNA\'nın monomeri' },
  { id: 'fc-9-2.2-nucleic-02', subtopicId: '9-2.2-nucleic', orderIndex: 2,
    term: 'DNA', definition: 'Kalıtsal bilgiyi taşıyan, çift sarmal yapılı nükleik asit', example: 'Çekirdekte bulunur, deoksiriboz şeker içerir' },
  { id: 'fc-9-2.2-nucleic-03', subtopicId: '9-2.2-nucleic', orderIndex: 3,
    term: 'RNA', definition: 'Protein sentezinde görev alan, genellikle tek zincirli nükleik asit', example: 'Riboz şeker içerir, Urasil bazı bulunur' },
  { id: 'fc-9-2.2-nucleic-04', subtopicId: '9-2.2-nucleic', orderIndex: 4,
    term: 'Deoksiriboz', definition: 'DNA\'nın yapısındaki 5 karbonlu şeker', example: 'Riboza göre bir oksijen eksiktir' },
  { id: 'fc-9-2.2-nucleic-05', subtopicId: '9-2.2-nucleic', orderIndex: 5,
    term: 'Riboz', definition: 'RNA\'nın yapısındaki 5 karbonlu şeker', example: 'DNA\'daki deoksiriboza göre bir oksijen fazladır' },
  { id: 'fc-9-2.2-nucleic-06', subtopicId: '9-2.2-nucleic', orderIndex: 6,
    term: 'Adenin-Timin (A-T)', definition: 'DNA\'da iki hidrojen bağıyla eşleşen baz çifti', example: 'A oranı her zaman T oranına eşittir' },
  { id: 'fc-9-2.2-nucleic-07', subtopicId: '9-2.2-nucleic', orderIndex: 7,
    term: 'Guanin-Sitozin (G-C)', definition: 'DNA\'da üç hidrojen bağıyla eşleşen baz çifti', example: 'G oranı her zaman C oranına eşittir' },
  { id: 'fc-9-2.2-nucleic-08', subtopicId: '9-2.2-nucleic', orderIndex: 8,
    term: 'Urasil', definition: 'RNA\'da bulunan, DNA\'daki Timin\'in yerini alan baz', example: 'RNA\'da Adenin ile eşleşir' },
  { id: 'fc-9-2.2-nucleic-09', subtopicId: '9-2.2-nucleic', orderIndex: 9,
    term: 'mRNA', definition: 'DNA\'daki bilgiyi ribozoma taşıyan haberci RNA', example: 'Transkripsiyon ürünüdür' },
  { id: 'fc-9-2.2-nucleic-10', subtopicId: '9-2.2-nucleic', orderIndex: 10,
    term: 'tRNA', definition: 'Amino asitleri ribozoma taşıyan taşıyıcı RNA', example: 'Antikodon içerir, yonca yaprağı şeklindedir' },
  { id: 'fc-9-2.2-nucleic-11', subtopicId: '9-2.2-nucleic', orderIndex: 11,
    term: 'rRNA', definition: 'Ribozomun yapısına katılan RNA çeşidi', example: 'Protein sentezinin gerçekleştiği yapıda bulunur' },
  { id: 'fc-9-2.2-nucleic-12', subtopicId: '9-2.2-nucleic', orderIndex: 12,
    term: 'Replikasyon', definition: 'DNA\'nın kendini eşleyerek iki özdeş kopya oluşturması', example: 'Hücre bölünmesi öncesi gerçekleşir' },
];

// ─────────────────────────────────────────────────────────────
// KONU: Organik Moleküller (9BIO-2.2)
// Alt Konu: Vitaminler (9-2.2-vitamins)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_2_vitamins: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.2-vitamins-L1',
    subtopicId: '9-2.2-vitamins',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Vitaminler, vücutta enerji vermeyen ancak metabolik tepkimelerin düzenli yürümesi için az miktarda gerekli olan DÜZENLEYİCİ organik moleküllerdir. Karbohidrat, lipit ve proteinlerin aksine yapı taşı (yapıcı-onarıcı) veya enerji kaynağı değildirler; çoğunlukla enzimlerin yardımcı molekülü (kofaktör/koenzim) olarak görev yaparlar. Çoğu vitamin vücutta üretilemez veya yetersiz miktarda üretilir, bu yüzden besinlerle dışarıdan alınmaları gerekir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Vitaminler, çözünürlük özelliklerine göre 2 gruba ayrılır: 1) YAĞDA ÇÖZÜNEN VİTAMİNLER (A, D, E, K) — vücutta yağ dokusunda depolanabilir. 2) SUDA ÇÖZÜNEN VİTAMİNLER (B grubu, C) — vücutta depolanamaz, fazlası idrarla atılır, düzenli alınmalıdır.',
        },
        {
          type: 'tip',
          text: 'Hatırlama formülü (yağda çözünenler): "A-D-E-K" harfleri = "Kalede" veya "DEAK" şeklinde ezberlenebilir. Geri kalan tüm vitaminler (B grubu ve C) sudadır.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.2-vitamins-L2',
    subtopicId: '9-2.2-vitamins',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-vitaminler',
      body: 'Vitaminleri çözünürlük durumlarına göre iki gruba ayırarak inceleyelim. Yağda çözünen vitaminler (A, D, E, K), lipitlerle birlikte sindirilir ve emilir; karaciğer ve yağ dokusunda depolanabildikleri için her gün alınmaları zorunlu değildir, ancak aşırı alımları toksik etkiye (hipervitaminoz) yol açabilir. Suda çözünen vitaminler (B1, B2, B3, B6, B12, folik asit, C) ise vücutta depolanmaz, fazlası böbrekler yoluyla idrarla atılır; bu nedenle düzenli ve günlük olarak besinlerle alınmaları gerekir. B grubu vitaminlerin çoğu, hücresel solunum ve enerji metabolizmasında görev alan enzimlerin koenzimi olarak çalışır.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'YAĞDA ÇÖZÜNEN (A, D, E, K): Depolanabilir, her gün alınması şart değil, fazlası TOKSİK olabilir (hipervitaminoz riski).\nSUDA ÇÖZÜNEN (B grubu, C): Depolanamaz, fazlası idrarla atılır, DÜZENLİ alınmalı, fazlası genelde toksik değildir.',
        },
        {
          type: 'tip',
          text: 'Vitaminler enerji vermez (kalori değeri yoktur) ama enerji üretiminde görevli enzimlerin (örn. B1, B2, B3 — hücresel solunum koenzimleri) çalışmasına yardımcı olur.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.2-vitamins-L3',
    subtopicId: '9-2.2-vitamins',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Vitaminleri ve eksikliklerinde ortaya çıkan hastalıkları inceleyelim:',
      steps: [
        '1. A VİTAMİNİ (Yağda çözünen) — Görme (özellikle gece görüşü), bağışıklık sistemi ve deri sağlığı için gereklidir. Eksikliğinde GECE KÖRLÜĞÜ ve deri kuruluğu görülür. Kaynak: havuç, karaciğer, süt ürünleri.',
        '2. D VİTAMİNİ (Yağda çözünen) — Kalsiyum ve fosfor emilimini düzenleyerek kemik sağlığını destekler; deride güneş ışığı (UV) etkisiyle de sentezlenebilir. Eksikliğinde çocuklarda RAŞİTİZM (kemik yumuşaması/eğriliği), yetişkinlerde OSTEOMALAZİ görülür.',
        '3. E VİTAMİNİ (Yağda çözünen) — Güçlü bir ANTİOKSİDANDIR; hücre zarlarını oksidatif hasara karşı korur. Eksikliği nadirdir, kısırlık ve sinir sistemi sorunlarıyla ilişkilendirilebilir. Kaynak: bitkisel yağlar, fındık, yeşil yapraklı sebzeler.',
        '4. K VİTAMİNİ (Yağda çözünen) — KAN PIHTILAŞMASI için gerekli proteinlerin sentezinde rol oynar. Eksikliğinde kanama eğilimi artar, yaralar geç pıhtılaşır. Kaynak: yeşil yapraklı sebzeler, bağırsak bakterileri tarafından da üretilebilir.',
        '5. B GRUBU VİTAMİNLERİ (Suda çözünen) — Çoğu, hücresel solunumda enerji üretimini katalizleyen enzimlerin koenzimidir. B1 (Tiamin) eksikliği BERİBERİ (sinir sistemi bozukluğu), B12 (Kobalamin) eksikliği PERNİSİYÖZ ANEMİ (kansızlık, sinir hasarı) ve folik asit eksikliği gebelikte NÖRAL TÜP DEFEKTLERİNE yol açabilir. Kaynak: tahıllar, et, yumurta, yeşil sebzeler.',
        '6. C VİTAMİNİ (Suda çözünen, Askorbik Asit) — Bağışıklık sistemini güçlendirir, kollajen sentezi için gereklidir (yara iyileşmesi, damar sağlığı), güçlü bir antioksidandır. Eksikliğinde SKORBÜT (diş eti kanaması, yara iyileşmesinde gecikme, eklem ağrıları) görülür. Kaynak: turunçgiller, biber, kivi, brokoli.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.2-vitamins-L4',
    subtopicId: '9-2.2-vitamins',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Vitamin: Enerji vermeyen ancak metabolik tepkimeleri düzenleyen, az miktarda gerekli organik molekül.' },
        { type: 'tip', text: 'Yağda Çözünen Vitaminler: A, D, E, K — vücutta (yağ dokusu, karaciğer) depolanabilir.' },
        { type: 'tip', text: 'Suda Çözünen Vitaminler: B grubu ve C — vücutta depolanamaz, düzenli alınmalıdır.' },
        { type: 'tip', text: 'Hipervitaminoz: Yağda çözünen vitaminlerin aşırı alınması sonucu oluşan zehirlenme durumu.' },
        { type: 'tip', text: 'Avitaminoz: Bir vitaminin vücutta yetersizliği sonucu oluşan hastalık durumu.' },
        { type: 'tip', text: 'Koenzim: Enzimlerin işlevini yerine getirebilmesi için gerekli olan, çoğunlukla vitamin kökenli yardımcı molekül.' },
        { type: 'tip', text: 'Antioksidan: Hücreleri serbest radikallerin zararlı etkilerinden koruyan madde (örn. C ve E vitaminleri).' },
        { type: 'tip', text: 'Skorbüt: C vitamini eksikliğine bağlı, diş eti kanaması ve yara iyileşmesinde gecikmeyle karakterize hastalık.' },
        { type: 'tip', text: 'Raşitizm: D vitamini eksikliğine bağlı, çocuklarda görülen kemik yumuşaması/eğriliği hastalığı.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.2-vitamins-L5',
    subtopicId: '9-2.2-vitamins',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Vitaminler de karbohidrat, yağ ve protein gibi enerji verir."\n✅ Vitaminlerin kalori değeri YOKTUR, enerji vermezler. Görevleri DÜZENLEYİCİDİR — metabolik tepkimelerde enzimlere yardımcı (koenzim) olarak çalışırlar.',
        },
        {
          type: 'warning',
          text: '❌ "Tüm vitaminler vücutta depolanabilir, bu yüzden ara sıra almak yeterlidir."\n✅ Sadece YAĞDA ÇÖZÜNEN vitaminler (A, D, E, K) depolanabilir. SUDA ÇÖZÜNEN vitaminler (B grubu, C) depolanamaz; fazlası idrarla atılır ve DÜZENLİ/GÜNLÜK alınmaları gerekir.',
        },
        {
          type: 'warning',
          text: '❌ "Vitaminler ne kadar çok alınırsa o kadar faydalıdır, fazlası zarar vermez."\n✅ Özellikle YAĞDA ÇÖZÜNEN vitaminlerin (A, D, E, K) AŞIRI alınması vücutta birikerek TOKSİK etkiler (hipervitaminoz) oluşturabilir. "Doğal/vitamin = her zaman zararsız" yanlış bir genellemedir.',
        },
        {
          type: 'warning',
          text: '❌ "D vitamini sadece besinlerden alınır."\n✅ D vitamini, güneş ışığının (UV) deride bulunan bir öncül maddeyle etkileşmesiyle de SENTEZLENEBİLİR. Bu yüzden D vitaminine bazen "güneş vitamini" denir.',
        },
        {
          type: 'warning',
          text: '❌ "Vitamin eksikliği sadece beslenme yetersizliği olan ülkelerde görülür, modern toplumlarda sorun değildir."\n✅ Dengesiz beslenme, belirli diyetler (vegan/vejetaryen B12 eksikliği riski) veya emilim bozuklukları nedeniyle vitamin eksiklikleri (örn. D vitamini eksikliği) günümüzde de yaygın bir sağlık sorunudur.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.2-vitamins-L6',
    subtopicId: '9-2.2-vitamins',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdaki vitaminlerden hangisi yağda/suda çözünür?" şeklinde sınıflandırma soruları (A-D-E-K vs B grubu-C).\n2) Vitamin-eksiklik hastalığı eşleştirme soruları: A vitamini→gece körlüğü, D vitamini→raşitizm, C vitamini→skorbüt, K vitamini→kanama eğilimi, B1→beriberi.\n3) "Vitaminlerin organik moleküller içindeki görevi nedir?" sorusunda "düzenleyici" cevabı, "enerji verici" veya "yapı taşı" çeldiricileriyle karıştırılır.\n4) Yağda çözünen vitaminlerin aşırı alımının (hipervitaminoz) zararlı olabileceğine dair öncüllü sorular.',
      aytPattern: 'Vitaminler AYT\'de doğrudan ağırlıklı bir konu değildir; ancak enzim-koenzim ilişkisi (B grubu vitaminlerinin hücresel solunumdaki rolü) ve metabolizma soruları içinde dolaylı olarak karşına çıkabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'En sık çıkan tuzak: "Hangi vitamin grubu vücutta depolanır, hangisi depolanmaz?" Cevap: A-D-E-K (yağda çözünenler) DEPOLANIR; B grubu ve C (suda çözünenler) DEPOLANMAZ, idrarla atılır. Bu ayrım hem eksiklik riskini hem de toksisite riskini belirler.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.2-vitamins-L7',
    subtopicId: '9-2.2-vitamins',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Vitaminleri günlük hayattan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '☀️ Güneşlenme ve D vitamini: Kapalı ortamlarda çok zaman geçiren kişilerde D vitamini eksikliği yaygındır; düzenli güneş ışığı alımı (cilt kanseri riskini de göz önünde bulundurarak) D vitamini sentezine yardımcı olur.',
        },
        {
          type: 'example',
          text: '🍊 Soğuk algınlığı ve C vitamini: Kış aylarında portakal, mandalina gibi C vitamini açısından zengin meyveler tüketmek bağışıklık sistemini destekler; uzun deniz yolculuklarında eskiden denizcilerde görülen skorbüt hastalığı C vitamini eksikliğindendi.',
        },
        {
          type: 'example',
          text: '🥬 Vegan/vejetaryen beslenme ve B12: B12 vitamini ağırlıklı olarak hayvansal ürünlerde bulunur; bu nedenle vegan beslenenlere genellikle B12 takviyesi önerilir, aksi halde pernisiyöz anemi riski oluşur.',
        },
        {
          type: 'example',
          text: '💊 Multivitamin takviyeleri ve aşırı doz uyarısı: A ve D vitamini içeren takviyelerin doktor önerisi olmadan aşırı kullanımı, bu vitaminlerin yağ dokusunda birikerek toksik etkiler (baş ağrısı, kemik ağrısı, karaciğer hasarı) oluşturmasına yol açabilir.',
        },
        {
          type: 'example',
          text: '🩹 Yara iyileşmesi ve K-C vitaminleri: Ameliyat öncesi bazı ilaçların (kan sulandırıcılar) K vitamini ile etkileşimi dikkat gerektirir; C vitamini ise kollajen sentezini destekleyerek yara iyileşmesini hızlandırır.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.2-vitamins-L8',
    subtopicId: '9-2.2-vitamins',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.2-vitamins-L9',
    subtopicId: '9-2.2-vitamins',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Vitaminler
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_2_vitamins: Flashcard[] = [
  { id: 'fc-9-2.2-vitamins-01', subtopicId: '9-2.2-vitamins', orderIndex: 1,
    term: 'Vitamin', definition: 'Enerji vermeyen, metabolik tepkimeleri düzenleyen organik molekül', example: 'A, D, E, K, B grubu, C vitaminleri' },
  { id: 'fc-9-2.2-vitamins-02', subtopicId: '9-2.2-vitamins', orderIndex: 2,
    term: 'Yağda Çözünen Vitaminler', definition: 'A, D, E, K vitaminleri; vücutta depolanabilir', example: 'Karaciğer ve yağ dokusunda birikir' },
  { id: 'fc-9-2.2-vitamins-03', subtopicId: '9-2.2-vitamins', orderIndex: 3,
    term: 'Suda Çözünen Vitaminler', definition: 'B grubu ve C vitamini; vücutta depolanamaz', example: 'Fazlası idrarla atılır, düzenli alınmalı' },
  { id: 'fc-9-2.2-vitamins-04', subtopicId: '9-2.2-vitamins', orderIndex: 4,
    term: 'A Vitamini', definition: 'Görme, bağışıklık ve deri sağlığı için gerekli yağda çözünen vitamin', example: 'Eksikliğinde gece körlüğü' },
  { id: 'fc-9-2.2-vitamins-05', subtopicId: '9-2.2-vitamins', orderIndex: 5,
    term: 'D Vitamini', definition: 'Kalsiyum-fosfor emilimini düzenleyen, güneşle de sentezlenen vitamin', example: 'Eksikliğinde raşitizm' },
  { id: 'fc-9-2.2-vitamins-06', subtopicId: '9-2.2-vitamins', orderIndex: 6,
    term: 'E Vitamini', definition: 'Antioksidan özellikli, hücre zarını koruyan yağda çözünen vitamin', example: 'Bitkisel yağlarda bulunur' },
  { id: 'fc-9-2.2-vitamins-07', subtopicId: '9-2.2-vitamins', orderIndex: 7,
    term: 'K Vitamini', definition: 'Kan pıhtılaşması için gerekli yağda çözünen vitamin', example: 'Eksikliğinde kanama eğilimi artar' },
  { id: 'fc-9-2.2-vitamins-08', subtopicId: '9-2.2-vitamins', orderIndex: 8,
    term: 'B12 Vitamini', definition: 'Kan hücresi yapımı ve sinir sistemi için gerekli suda çözünen vitamin', example: 'Eksikliğinde pernisiyöz anemi' },
  { id: 'fc-9-2.2-vitamins-09', subtopicId: '9-2.2-vitamins', orderIndex: 9,
    term: 'C Vitamini', definition: 'Bağışıklık ve kollajen sentezi için gerekli antioksidan, suda çözünen vitamin', example: 'Eksikliğinde skorbüt' },
  { id: 'fc-9-2.2-vitamins-10', subtopicId: '9-2.2-vitamins', orderIndex: 10,
    term: 'Hipervitaminoz', definition: 'Vitaminin aşırı alınması sonucu oluşan zehirlenme durumu', example: 'Genellikle A ve D vitamininde görülür' },
  { id: 'fc-9-2.2-vitamins-11', subtopicId: '9-2.2-vitamins', orderIndex: 11,
    term: 'Avitaminoz', definition: 'Bir vitaminin yetersizliği sonucu oluşan hastalık durumu', example: 'Skorbüt, raşitizm, beriberi' },
  { id: 'fc-9-2.2-vitamins-12', subtopicId: '9-2.2-vitamins', orderIndex: 12,
    term: 'Koenzim', definition: 'Enzimlerin işlevi için gerekli, çoğu vitamin kökenli yardımcı molekül', example: 'B grubu vitaminleri hücresel solunum enzimlerinde koenzimdir' },
];
