import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Üç Üst Âlem (Domain) Sistemi (9BIO-1.6)
// Alt Konu 1: Bacteria, Archaea ve Eukarya (9-1.6-domains)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_6_domains: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-1.6-domains-L1',
    subtopicId: '9-1.6-domains',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Modern biyolojide tüm canlılar, hücre yapısı, genetik özellikler ve metabolik farklılıklara dayanılarak üç büyük "domain" (üst âlem) altında toplanır: BACTERIA (Bakteriler), ARCHAEA (Arkeler) ve EUKARYA (Ökaryotlar). Bu sistem, geleneksel "5 âlem" sınıflandırmasının üzerine inşa edilmiş, DNA dizilimi karşılaştırmalarına dayanan en güncel ve kapsamlı sınıflandırmadır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Üç Domain: BACTERIA (prokaryot, hücre çeperi peptidoglikandan) · ARCHAEA (prokaryot, ekstrem ortamlarda yaşayabilir, hücre çeperi farklı) · EUKARYA (ökaryot; Protista, Bitkiler, Mantarlar, Hayvanlar âlemlerini içerir).',
        },
        {
          type: 'tip',
          text: 'Hatırlama: Bacteria ve Archaea İKİSİ DE prokaryottur (çekirdek zarı yok) ama birbirinden FARKLI gruplardır — aralarındaki fark, insan ile bakteri arasındaki farktan bile büyük olabilir! Eukarya ise tüm çekirdekli (zarla çevrili çekirdeğe sahip) canlıları kapsar.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-1.6-domains-L2',
    subtopicId: '9-1.6-domains',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-arkeler',
      body: 'Üç domain sistemini bir "yaşam ağacı" (filogenetik ağaç) olarak şematize edebiliriz; ortak bir atadan üç ana dala ayrılan bir yapı şeklinde.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Şema önerisi: Alt kısımda "Ortak Ata" yaz, oradan üç dal çiz: Sol dal "BACTERIA" (bakteri şekli — basit çubuk/küre), orta dal "ARCHAEA" (volkan/sıcak su kaynağı/tuz gölü gibi ekstrem ortam ikonlarıyla), sağ dal "EUKARYA" (bu daldan dört alt dal daha çıkar: Protista, Bitkiler, Mantarlar, Hayvanlar). Her dalın altına "hücre tipi: prokaryot/ökaryot" notunu ekle.',
        },
        {
          type: 'example',
          text: 'Karşılaştırma tablosu önerisi — 3 sütun (Bacteria | Archaea | Eukarya), satırlar: Hücre tipi (prokaryot | prokaryot | ökaryot), Çekirdek zarı (yok | yok | var), Hücre çeperi (peptidoglikan | farklı bileşikler, peptidoglikan yok | bazılarında selüloz/kitin var), Yaşam ortamı (her yer | genellikle ekstrem ortamlar | her yer), Örnek (E. coli | metan üreten arkeler, tuz sevenler | insan, bitki, mantar, amip).',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-1.6-domains-L3',
    subtopicId: '9-1.6-domains',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Üç domain sistemini ve her bir domain\'in özelliklerini adım adım inceleyelim:',
      steps: [
        '1. ÜÇ DOMAIN SİSTEMİNİN ORTAYA ÇIKIŞI — Bilim insanı Carl Woese, ribozomal RNA dizilerini karşılaştırarak prokaryotların aslında tek bir grup olmadığını, iki ayrı ve birbirinden çok farklı grup (Bacteria ve Archaea) olduğunu ortaya koymuş ve üç domain sistemini önermiştir: BACTERIA, ARCHAEA, EUKARYA.',
        '2. BACTERIA (BAKTERİLER) — Prokaryot hücre yapısına sahiptir: zarla çevrili çekirdekleri ve zarlı organelleri yoktur. Genetik materyal (genellikle halkasal DNA) sitoplazmada serbest hâlde bulunur. Hücre çeperleri PEPTİDOGLİKAN adı verilen bir madde içerir. Hemen her ortamda (toprak, su, hava, canlı vücutları) bulunabilirler.',
        '3. BAKTERİLERİN EKOLOJİK ÖNEMİ — Ayrıştırıcı olarak ölü organizmaları parçalayarak madde döngülerine (azot döngüsü, karbon döngüsü) katkıda bulunurlar. Toprağı verimli hâle getirirler.',
        '4. BAKTERİLERİN SAĞLIKLA İLGİLİ ÖNEMİ — Bazıları hastalık etkenidir (patojen): tüberküloz, tetanos, salmonella gibi. Bazıları ise insan vücudunda yararlı işlevler görür (örneğin bağırsak florasındaki bakteriler vitamin K ve B12 üretimine katkıda bulunur, sindirime yardımcı olur).',
        '5. BAKTERİLERİN EKONOMİK ÖNEMİ — Yoğurt, peynir, turşu, sirke gibi besinlerin üretiminde (fermantasyon) kullanılırlar. Biyoteknolojide insülin, antibiyotik üretimi gibi alanlarda da bakterilerden yararlanılır.',
        '6. ARCHAEA (ARKELER) — Prokaryot hücre yapısına sahiptir ancak hücre çeperleri Bacteria\'dan farklıdır (peptidoglikan İÇERMEZ). Genetik ve biyokimyasal özellikleri bakımından Bacteria\'dan çok, Eukarya\'ya daha yakındır.',
        '7. ARKELERİN EKSTREMOFİL ÖZELLİKLERİ — Birçok arke türü, diğer canlıların yaşayamayacağı EKSTREM (aşırı) ortamlarda yaşayabilir: kaynar su kaynaklarında (termofiller, 80-100°C), çok tuzlu göllerde (halofiller, Tuz Gölü gibi), oksijensiz bataklık ve sindirim sistemlerinde (metanojenler, metan gazı üretirler), çok asidik veya çok bazik ortamlarda (asidofil/alkalifil).',
        '8. EUKARYA (ÖKARYOTLAR) — Hücrelerinde zarla çevrili gerçek bir çekirdek ve zarlı organeller (mitokondri, endoplazmik retikulum, Golgi aygıtı vb.) bulunur. Protista, Bitkiler (Plantae), Mantarlar (Fungi) ve Hayvanlar (Animalia) âlemlerinin tamamını kapsar.',
        '9. ÖKARYOTLARIN PROKARYOTLARDAN FARKLARI — Ökaryot hücreler genellikle prokaryotlardan daha büyüktür, zarla çevrili çekirdek ve organellere sahiptir, DNA\'ları çekirdek içinde proteinlerle (histon) sarılı kromozomlar hâlinde bulunur. Prokaryotlarda (Bacteria ve Archaea) bu yapılar yoktur; DNA sitoplazmada serbesttir ve zarlı organel bulunmaz.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-1.6-domains-L4',
    subtopicId: '9-1.6-domains',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Domain (Üst Âlem): Sınıflandırmanın âlemden de büyük, en kapsamlı basamağı; Bacteria, Archaea, Eukarya olmak üzere üçtür.' },
        { type: 'tip', text: 'Prokaryot Hücre: Zarla çevrili çekirdeği ve zarlı organelleri olmayan hücre tipi (Bacteria ve Archaea).' },
        { type: 'tip', text: 'Ökaryot Hücre: Zarla çevrili gerçek çekirdeğe ve zarlı organellere sahip hücre tipi (Eukarya).' },
        { type: 'tip', text: 'Peptidoglikan: Bacteria domain\'indeki canlıların hücre çeperinde bulunan, Archaea\'da bulunmayan madde.' },
        { type: 'tip', text: 'Ekstremofil: Aşırı sıcaklık, tuzluluk, asidite gibi olağandışı koşullarda yaşayabilen canlı (genellikle arkeler).' },
        { type: 'tip', text: 'Termofil: Yüksek sıcaklıkta (kaynar su kaynakları gibi) yaşayabilen arke türü.' },
        { type: 'tip', text: 'Halofil: Çok tuzlu ortamlarda (Tuz Gölü gibi) yaşayabilen arke türü.' },
        { type: 'tip', text: 'Metanojen: Oksijensiz ortamda yaşayıp metan gazı üreten arke türü.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-1.6-domains-L5',
    subtopicId: '9-1.6-domains',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Bacteria ve Archaea aynı domain\'e dahil edilir, çünkü ikisi de prokaryottur."\n✅ İkisi de prokaryot olsa da (zarla çevrili çekirdekleri yoktur), genetik ve biyokimyasal yapıları (hücre çeperi, RNA dizileri) çok farklıdır. Bu yüzden AYRI domain\'ler olarak sınıflandırılırlar.',
        },
        {
          type: 'warning',
          text: '❌ "Archaea, Eukarya\'dan çok Bacteria\'ya yakındır, çünkü ikisi de prokaryottur."\n✅ Yapısal olarak (hücre tipi açısından) prokaryot olsalar da, genetik/biyokimyasal açıdan Archaea, Bacteria\'dan çok Eukarya\'ya daha yakındır.',
        },
        {
          type: 'warning',
          text: '❌ "Tüm bakteriler hastalık yapar, zararlıdır."\n✅ Bakterilerin büyük çoğunluğu zararsız hatta yararlıdır: bağırsak florası, toprak verimliliği, fermantasyon (yoğurt, peynir) gibi pek çok faydalı işlevleri vardır. Sadece bazı türler patojendir.',
        },
        {
          type: 'warning',
          text: '❌ "Arkeler sadece volkanik/aşırı sıcak ortamlarda yaşar."\n✅ Bazı arkeler (termofiller) sıcak ortamlarda yaşasa da, halofiller (tuzlu göller), metanojenler (bataklıklar, sindirim sistemleri) gibi farklı ekstrem ortamlarda yaşayan çok çeşitli arke türleri vardır.',
        },
        {
          type: 'warning',
          text: '❌ "Eukarya domain\'i sadece hayvanları kapsar."\n✅ Eukarya domain\'i; Protista, Bitkiler, Mantarlar ve Hayvanlar olmak üzere DÖRT âlemi birden kapsar. İnsan dahil tüm çok hücreli canlılar ve tek hücreli ökaryotlar (amip gibi) bu domain\'dedir.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-1.6-domains-L6',
    subtopicId: '9-1.6-domains',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdaki özelliklerden hangisi/hangileri Bacteria, Archaea ve Eukarya için ortak/farklıdır?" tarzı öncüllü (I, II, III) karşılaştırma soruları.\n2) Verilen bir canlının (örneğin "kaynar su kaynağında yaşayan bir mikroorganizma") hangi domain\'e ait olduğunun çıkarılması.\n3) Prokaryot-ökaryot hücre yapısı farklarının domain sistemiyle ilişkilendirilmesi.\n4) Bakterilerin ekolojik, sağlık ve ekonomik önemine dair örnek-kavram eşleştirmesi.',
      aytPattern: 'AYT\'de domain\'ler arası genetik/biyokimyasal benzerlik dereceleri (örneğin "Archaea, Bacteria\'dan çok Eukarya\'ya yakındır" bilgisi) üzerinden filogenetik ağaç yorumlama soruları sorulabilir. Hücre zarı lipit yapısındaki farklılıklar (Archaea\'ya özgü) gibi detaylı karşılaştırmalar AYT düzeyinde çıkabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sık çıkan tuzak: "Prokaryot = Bacteria" eşleştirmesi YANLIŞTIR. Prokaryot hücre yapısı hem Bacteria hem de Archaea domain\'inde bulunur. "Tüm prokaryotlar Bacteria\'dır" ifadesi bu yüzden YANLIŞ kabul edilir.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-1.6-domains-L7',
    subtopicId: '9-1.6-domains',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Üç domain sistemini günlük hayattan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🥛 Yoğurt yapımı: Sütün yoğurda dönüşmesini sağlayan Lactobacillus bakterileri, Bacteria domain\'ine örnektir ve fermantasyon yoluyla ekonomik değer yaratır.',
        },
        {
          type: 'example',
          text: '🌋 Sıcak su kaynakları: Yellowstone Milli Parkı\'ndaki kaynar sıcak su kaynaklarının canlı renklerinden sorumlu olan termofilik arkeler, Archaea domain\'inin ekstrem ortam canlılarına örnektir.',
        },
        {
          type: 'example',
          text: '🧂 Tuz Gölü: Türkiye\'deki Tuz Gölü gibi aşırı tuzlu sularda yaşayabilen halofilik arkeler, suyun zaman zaman pembe/kırmızı renk almasına katkıda bulunabilir.',
        },
        {
          type: 'example',
          text: '🦠 Bağırsak florası: İnsan bağırsağında yaşayan trilyonlarca bakteri (Bacteria domain\'i), sindirime yardımcı olur ve bazı vitaminlerin (K, B12) üretimine katkı sağlar.',
        },
        {
          type: 'example',
          text: '🐄 İnek midesi (rumen): Sığırların midesindeki metanojen arkeler, selülozun sindirilmesine yardımcı olurken metan gazı üretir — bu, küresel ısınma tartışmalarında da gündeme gelen bir konudur.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-1.6-domains-L8',
    subtopicId: '9-1.6-domains',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'MINI_QUIZ_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
  {
    id: '9-1.6-domains-L9',
    subtopicId: '9-1.6-domains',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'ASSESSMENT_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Bacteria, Archaea ve Eukarya
// ─────────────────────────────────────────────────────────────

export const flashcards_9_1_6_domains: Flashcard[] = [
  { id: 'fc-9-1.6-dom-01', subtopicId: '9-1.6-domains', orderIndex: 1,
    term: 'Domain (Üst Âlem)', definition: 'Sınıflandırmanın âlemden de büyük, en kapsamlı basamağı', example: 'Bacteria, Archaea, Eukarya' },
  { id: 'fc-9-1.6-dom-02', subtopicId: '9-1.6-domains', orderIndex: 2,
    term: 'Bacteria', definition: 'Prokaryot, hücre çeperinde peptidoglikan bulunan canlıları kapsayan domain', example: 'E. coli, Lactobacillus' },
  { id: 'fc-9-1.6-dom-03', subtopicId: '9-1.6-domains', orderIndex: 3,
    term: 'Archaea', definition: 'Prokaryot, hücre çeperinde peptidoglikan bulunmayan, genellikle ekstrem ortamlarda yaşayan canlıları kapsayan domain', example: 'Termofil, halofil ve metanojen arkeler' },
  { id: 'fc-9-1.6-dom-04', subtopicId: '9-1.6-domains', orderIndex: 4,
    term: 'Eukarya', definition: 'Zarla çevrili çekirdeğe ve organellere sahip canlıları kapsayan domain', example: 'Protista, Bitkiler, Mantarlar, Hayvanlar' },
  { id: 'fc-9-1.6-dom-05', subtopicId: '9-1.6-domains', orderIndex: 5,
    term: 'Prokaryot Hücre', definition: 'Zarla çevrili çekirdeği ve zarlı organelleri olmayan hücre tipi', example: 'Bakteri ve arke hücreleri' },
  { id: 'fc-9-1.6-dom-06', subtopicId: '9-1.6-domains', orderIndex: 6,
    term: 'Ekstremofil', definition: 'Aşırı sıcaklık, tuzluluk veya asidite gibi olağandışı koşullarda yaşayabilen canlı', example: 'Kaynar su kaynaklarında yaşayan termofil arkeler' },
  { id: 'fc-9-1.6-dom-07', subtopicId: '9-1.6-domains', orderIndex: 7,
    term: 'Peptidoglikan', definition: 'Bacteria domain\'indeki hücre çeperinde bulunan, Archaea\'da bulunmayan madde', example: 'Bakteri hücre duvarının yapı taşı' },
  { id: 'fc-9-1.6-dom-08', subtopicId: '9-1.6-domains', orderIndex: 8,
    term: 'Carl Woese', definition: 'Ribozomal RNA karşılaştırmalarıyla üç domain sistemini öneren bilim insanı', example: 'Archaea\'yı ayrı bir domain olarak tanımlamıştır' },
];

// ─────────────────────────────────────────────────────────────
// Alt Konu 2: Ökaryotik Canlıların Sınıflandırılması (9-1.6-kingdoms)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_6_kingdoms: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-1.6-kingdoms-L1',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Eukarya domain\'i (ökaryotik canlılar), dört büyük âleme ayrılır: PROTİSTA, BİTKİLER (Plantae), MANTARLAR (Fungi) ve HAYVANLAR (Animalia). Bu âlemler; beslenme şekli (ototrof/heterotrof), hücre yapısı (hücre çeperinin varlığı/yokluğu ve içeriği), hareket yeteneği ve üreme biçimleri gibi temel özelliklere göre birbirinden ayrılır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Dört Ökaryot Âlem: PROTİSTA (genellikle tek hücreli, çeşitli) · BİTKİLER (çok hücreli, fotosentez yapar, hücre çeperi selüloz) · MANTARLAR (heterotrof, hücre dışı sindirim, hücre çeperi kitin, ayrıştırıcı) · HAYVANLAR (çok hücreli, heterotrof, hareketli, hücre çeperi yok).',
        },
        {
          type: 'tip',
          text: 'Hatırlama: Bitkiler "ÜRETİCİ" (ototrof), Mantarlar "AYRIŞTIRICI" (heterotrof, hücre dışı sindirim), Hayvanlar "TÜKETİCİ" (heterotrof, hücre içi sindirim ve aktif hareket). Protista ise bu üç grubun da özelliklerini taşıyabilen "karışık" bir âlemdir.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-1.6-kingdoms-L2',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: ['tyt-protista-alemi', 'tyt-mantarlar-alemi', 'tyt-damarli-bitkiler'],
      body: 'Dört ökaryot âlemi ve omurgalı hayvan gruplarını karşılaştırmalı tablo ve dallanma şemalarıyla görselleştirebiliriz.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Şema önerisi 1 — 4 sütunlu karşılaştırma tablosu (Protista | Bitkiler | Mantarlar | Hayvanlar): Hücre sayısı (genellikle tek | çok | çoğu çok | çok), Beslenme (değişken | ototrof | heterotrof, hücre dışı sindirim | heterotrof, hücre içi sindirim), Hücre çeperi (bazılarında var | selüloz | kitin | yok), Hareket (bazıları hareketli | hareketsiz | hareketsiz | aktif hareketli), Örnek (amip, öglena | çiçekli bitkiler, eğrelti | küf, mantar, maya | insan, böcek, balık).',
        },
        {
          type: 'example',
          text: 'Şema önerisi 2 — Hayvanlar âlemi dallanma şeması: "Hayvanlar (Animalia)" kutusundan iki dal çıkar: "Omurgasızlar" (iskelet sisteminde omurga yok — örnek: solucan, böcek, ahtapot, deniz yıldızı) ve "Omurgalılar" (omurgaya sahip — bu daldan 5 alt dal çıkar: Balıklar, İki Yaşamlılar (Amfibiler), Sürüngenler, Kuşlar, Memeliler). Her birine birer örnek canlı resmi/adı ekle.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-1.6-kingdoms-L3',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Dört ökaryot âlemi ve hayvanlar âleminin alt gruplarını adım adım inceleyelim:',
      steps: [
        '1. PROTİSTA ÂLEMİ — Genellikle tek hücreli, ökaryot canlıları içerir. Çok çeşitli bir âlemdir: bazıları ototrof (algler, öglena — fotosentez yapar), bazıları heterotrof (amip, paramesyum), bazıları hem hareketli hem hareketsiz olabilir. "Diğer üç âleme tam uymayan ökaryotlar" olarak da düşünülebilir.',
        '2. BİTKİLER (PLANTAE) ÂLEMİ — Çok hücreli, ototrof (fotosentez yaparak kendi besinini üretir) canlılardır. Hücrelerinde SELÜLOZ yapılı hücre çeperi ve fotosentez yapan KLOROPLAST organeli bulunur. Genellikle hareketsizdirler (yer değiştiremezler). Örnek: çiçekli bitkiler, eğrelti otları, yosunlar.',
        '3. MANTARLAR (FUNGI) ÂLEMİ — Heterotrof canlılardır ancak hayvanlardan farklı olarak besinlerini HÜCRE DIŞINDA sindirirler: enzim salgılayarak çevredeki organik maddeyi parçalar, sonra emerek alırlar. Hücre çeperleri KİTİN içerir (selüloz değil). SPORLA ÜREME yaygındır. Ekosistemde AYRIŞTIRICI rolü üstlenirler; ölü organik maddeleri parçalayarak madde döngüsüne katkıda bulunurlar. Örnek: küf mantarları, şapkalı mantarlar, mayalar.',
        '4. HAYVANLAR (ANIMALIA) ÂLEMİ — Çok hücreli, heterotrof canlılardır; besinlerini HÜCRE İÇİNDE sindirirler. Hücre çeperleri YOKTUR. Çoğu AKTİF HAREKET yeteneğine sahiptir (kas ve sinir sistemi sayesinde). Üreme genellikle eşeylidir.',
        '5. OMURGASIZ HAYVANLAR — İç iskelette omurga (vertebra) bulunmayan hayvanlardır. Örnekler: süngerler, sölenterler (denizanası, mercan), solucanlar, yumuşakçalar (salyangoz, ahtapot), eklembacaklılar (böcekler, örümcekler, kabuklular), derisidikenliler (deniz yıldızı, deniz kestanesi). Hayvanlar âleminin büyük çoğunluğunu (yaklaşık %95\'ini) omurgasızlar oluşturur.',
        '6. OMURGALI HAYVANLAR — İç iskelette omurga (vertebra) bulunan, daha gelişmiş bir sinir sistemine sahip hayvanlardır. Beş ana grup hâlinde sınıflandırılır.',
        '7. BALIKLAR — Suda yaşar, solungaçla solunum yapar, vücutları genellikle pullarla kaplıdır, soğukkanlıdır (ektoterm). Örnek: alabalık, hamsi, köpekbalığı.',
        '8. İKİ YAŞAMLILAR (AMFİBİLER) — Yaşamlarının bir kısmını suda (solungaçla solunum yapan larva/yavru hâli) bir kısmını karada (akciğer ve deri solunumu yapan ergin hâli) geçirirler. Soğukkanlıdır. Örnek: kurbağa, semender.',
        '9. SÜRÜNGENLER — Karada yaşamaya tam uyum sağlamış, kuru ve pullu derili, akciğer solunumu yapan, soğukkanlı hayvanlardır. Yumurtalarının kabuğu vardır (karada bırakılabilir). Örnek: yılan, kertenkele, kaplumbağa, timsah.',
        '10. KUŞLAR — Vücutları tüylerle kaplıdır, ön ekstremiteleri kanada dönüşmüştür (uçma için), akciğer solunumu yapar, sıcakkanlıdır (endoterm). Sert kabuklu yumurta bırakırlar. Örnek: serçe, kartal, penguen.',
        '11. MEMELİLER — Vücutları kıl/tüyle kaplıdır, sıcakkanlıdır (endoterm), yavrularını SÜT BEZLERİ ile besler (memeli adının kaynağı budur), akciğer solunumu yapar. Çoğu canlı doğurur. Örnek: insan, kedi, balina, yarasa.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-1.6-kingdoms-L4',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Protista: Genellikle tek hücreli, çok çeşitli özellikler gösteren ökaryot canlıların âlemi.' },
        { type: 'tip', text: 'Plantae (Bitkiler): Çok hücreli, ototrof, hücre çeperi selüloz olan, kloroplast içeren canlıların âlemi.' },
        { type: 'tip', text: 'Fungi (Mantarlar): Heterotrof, hücre dışı sindirim yapan, hücre çeperi kitin olan, sporla üreyen ayrıştırıcı canlıların âlemi.' },
        { type: 'tip', text: 'Animalia (Hayvanlar): Çok hücreli, heterotrof, hücre içi sindirim yapan, hücre çeperi olmayan, genellikle hareketli canlıların âlemi.' },
        { type: 'tip', text: 'Omurgasız: İç iskelette omurga bulunmayan hayvan grubu.' },
        { type: 'tip', text: 'Omurgalı: İç iskelette omurga bulunan hayvan grubu.' },
        { type: 'tip', text: 'Endoterm (Sıcakkanlı): Vücut sıcaklığını ortam sıcaklığından bağımsız olarak sabit tutabilen canlı (kuşlar, memeliler).' },
        { type: 'tip', text: 'Ektoterm (Soğukkanlı): Vücut sıcaklığı ortam sıcaklığına göre değişen canlı (balık, amfibi, sürüngen).' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-1.6-kingdoms-L5',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Mantarlar bitkidir, çünkü hareket etmezler ve hücre çeperleri vardır."\n✅ Mantarlar AYRI bir âlemdir (Fungi). Hücre çeperleri selüloz değil KİTİN\'dir. En önemli fark: mantarlar HETEROTROFTUR, fotosentez yapamazlar; bitkiler ise ototroftur.',
        },
        {
          type: 'warning',
          text: '❌ "Tüm Protista canlıları aynı özelliklere sahiptir."\n✅ Protista, "diğer âlemlere tam uymayan" çok çeşitli canlıları içeren bir âlemdir. Bazıları ototrof (öglena, algler), bazıları heterotrof (amip), bazıları hareketli, bazıları hareketsizdir.',
        },
        {
          type: 'warning',
          text: '❌ "Yarasa kuştur, çünkü uçabilir."\n✅ Yarasa bir MEMELİDİR: vücudu kıllarla kaplıdır, yavrularını sütle besler, sıcakkanlıdır. Kuşlar ise tüylüdür ve yumurtlar. Uçma yeteneği, sınıflandırma için tek başına yeterli bir kriter değildir.',
        },
        {
          type: 'warning',
          text: '❌ "Penguen ve devekuşu uçamadığı için kuş değildir."\n✅ Bir hayvanın "kuş" sınıfına dahil olması için temel kriterler tüylü vücut, kanat yapısı, gagaya sahip olma ve yumurtlamadır — uçabilme zorunlu değildir. Penguen ve devekuşu uçamayan kuşlardır.',
        },
        {
          type: 'warning',
          text: '❌ "Tüm omurgasızlar küçük ve basit yapılıdır."\n✅ Ahtapot gibi bazı omurgasızlar oldukça karmaşık sinir sistemlerine ve gelişmiş davranışlara sahiptir. Omurgasız olmak, "basit" anlamına gelmez; sadece omurga (iç iskelet) bulunmadığını ifade eder.',
        },
        {
          type: 'warning',
          text: '❌ "Kurbağalar tüm hayatları boyunca suda yaşar."\n✅ Kurbağalar İKİ YAŞAMLIDIR (amfibi): larva (iribaş) döneminde suda solungaçla, ergin döneminde ise karada akciğer ve deriyle solunum yapabilirler.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-1.6-kingdoms-L6',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) Verilen canlı örneklerinin (örnek: amip, eğrelti otu, küf, balina) doğru âleme yerleştirilmesi.\n2) "Bitkiler, Mantarlar ve Hayvanlar âlemlerinin ortak/farklı özellikleri nelerdir?" tarzı öncüllü (I, II, III) karşılaştırma soruları — özellikle beslenme şekli ve hücre çeperi içeriği üzerinden.\n3) Omurgalı hayvan gruplarının (balık, amfibi, sürüngen, kuş, memeli) ayırt edici özelliklerinin (solunum, vücut örtüsü, üreme, ısı düzenleme) eşleştirilmesi.\n4) Omurgasız-omurgalı ayrımı ve örnek canlıların gruplandırılması.',
      aytPattern: 'AYT\'de mantarların ekosistemdeki ayrıştırıcı rolü, madde döngüleriyle ilişkilendirilerek; ayrıca omurgalı gruplarının evrimsel sıralaması (balık → amfibi → sürüngen → kuş/memeli) ile kara yaşamına geçiş adaptasyonları (yumurta kabuğu, akciğer solunumu, sıcakkanlılık) bağlamında sorulabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sık çıkan tuzak: "Mantarlar fotosentez yapar mı?" sorusunun cevabı HAYIR\'dır — mantarlar HETEROTROFTUR ve kloroplastları yoktur. Ayrıca "Mantarların hücre çeperi selüloz mu kitin mi?" ayrımı (KİTİN) sınavlarda sıkça sorulur.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-1.6-kingdoms-L7',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Ökaryot âlemleri günlük hayattan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🍄 Ekmek küfü: Bayat ekmeğin üzerinde oluşan küf, Fungi âlemine aittir; ekmekteki organik maddeyi hücre dışı sindirimle parçalayarak beslenir.',
        },
        {
          type: 'example',
          text: '🦠 Su birikintisindeki amip: Bir damla gölet suyunu mikroskopta incelediğinizde gördüğünüz amip ve paramesyum gibi tek hücreli canlılar Protista âlemine örnektir.',
        },
        {
          type: 'example',
          text: '🌳 Bahçedeki ağaç: Fotosentez yaparak kendi besinini üreten, hücre çeperi selülozdan oluşan ve yer değiştiremeyen bir ağaç, Plantae âlemine örnektir.',
        },
        {
          type: 'example',
          text: '🐧 Penguen: Tüylü vücudu, kanatları ve yumurtlama özelliğiyle bir kuştur; ancak uçamaz — bu da "uçma = kuş olma kriteri" yanılgısını çürüten güzel bir örnektir.',
        },
        {
          type: 'example',
          text: '🐙 Ahtapot: Omurgasız bir hayvan olmasına rağmen oldukça gelişmiş bir sinir sistemine ve problem çözme yeteneğine sahiptir — "omurgasız = basit" yanılgısını gösteren iyi bir örnektir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-1.6-kingdoms-L8',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'MINI_QUIZ_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
  {
    id: '9-1.6-kingdoms-L9',
    subtopicId: '9-1.6-kingdoms',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'ASSESSMENT_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Ökaryotik Canlıların Sınıflandırılması
// ─────────────────────────────────────────────────────────────

export const flashcards_9_1_6_kingdoms: Flashcard[] = [
  { id: 'fc-9-1.6-king-01', subtopicId: '9-1.6-kingdoms', orderIndex: 1,
    term: 'Protista', definition: 'Genellikle tek hücreli, çok çeşitli özellikler gösteren ökaryot canlıların âlemi', example: 'Amip, paramesyum, öglena, algler' },
  { id: 'fc-9-1.6-king-02', subtopicId: '9-1.6-kingdoms', orderIndex: 2,
    term: 'Plantae (Bitkiler)', definition: 'Çok hücreli, ototrof, hücre çeperi selüloz olan canlıların âlemi', example: 'Çiçekli bitkiler, eğrelti otları, yosunlar' },
  { id: 'fc-9-1.6-king-03', subtopicId: '9-1.6-kingdoms', orderIndex: 3,
    term: 'Fungi (Mantarlar)', definition: 'Heterotrof, hücre dışı sindirim yapan, hücre çeperi kitin olan, ayrıştırıcı canlıların âlemi', example: 'Küf mantarları, şapkalı mantarlar, mayalar' },
  { id: 'fc-9-1.6-king-04', subtopicId: '9-1.6-kingdoms', orderIndex: 4,
    term: 'Animalia (Hayvanlar)', definition: 'Çok hücreli, heterotrof, hücre içi sindirim yapan, hücre çeperi olmayan canlıların âlemi', example: 'İnsan, balık, böcek, kuş' },
  { id: 'fc-9-1.6-king-05', subtopicId: '9-1.6-kingdoms', orderIndex: 5,
    term: 'Omurgasız', definition: 'İç iskelette omurga bulunmayan hayvan grubu', example: 'Solucan, böcek, ahtapot, deniz yıldızı' },
  { id: 'fc-9-1.6-king-06', subtopicId: '9-1.6-kingdoms', orderIndex: 6,
    term: 'Omurgalı', definition: 'İç iskelette omurga bulunan hayvan grubu', example: 'Balık, kurbağa, yılan, kuş, memeli' },
  { id: 'fc-9-1.6-king-07', subtopicId: '9-1.6-kingdoms', orderIndex: 7,
    term: 'Balıklar', definition: 'Suda yaşayan, solungaçla solunum yapan, soğukkanlı omurgalı hayvan grubu', example: 'Alabalık, hamsi, köpekbalığı' },
  { id: 'fc-9-1.6-king-08', subtopicId: '9-1.6-kingdoms', orderIndex: 8,
    term: 'İki Yaşamlılar (Amfibiler)', definition: 'Yaşamlarının bir kısmını suda bir kısmını karada geçiren, soğukkanlı omurgalı hayvan grubu', example: 'Kurbağa, semender' },
  { id: 'fc-9-1.6-king-09', subtopicId: '9-1.6-kingdoms', orderIndex: 9,
    term: 'Sürüngenler', definition: 'Kuru pullu derili, akciğer solunumu yapan, soğukkanlı omurgalı hayvan grubu', example: 'Yılan, kertenkele, kaplumbağa, timsah' },
  { id: 'fc-9-1.6-king-10', subtopicId: '9-1.6-kingdoms', orderIndex: 10,
    term: 'Kuşlar', definition: 'Tüylü, kanatlı, akciğer solunumu yapan, sıcakkanlı omurgalı hayvan grubu', example: 'Serçe, kartal, penguen, devekuşu' },
  { id: 'fc-9-1.6-king-11', subtopicId: '9-1.6-kingdoms', orderIndex: 11,
    term: 'Memeliler', definition: 'Kıllı/tüylü, sıcakkanlı, yavrularını süt bezleriyle besleyen omurgalı hayvan grubu', example: 'İnsan, kedi, balina, yarasa' },
  { id: 'fc-9-1.6-king-12', subtopicId: '9-1.6-kingdoms', orderIndex: 12,
    term: 'Endoterm / Ektoterm', definition: 'Endoterm: vücut ısısını sabit tutabilen (sıcakkanlı). Ektoterm: vücut ısısı ortama göre değişen (soğukkanlı)', example: 'Kuş ve memeliler endoterm; balık, amfibi, sürüngen ektotermdir' },
];
