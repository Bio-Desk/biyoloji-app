import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Hücre Zarından Madde Geçişleri (9BIO-2.6)
// Alt Konu: Pasif ve Aktif Taşıma (9-2.6-transport)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_6_transport: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.6-transport-L1',
    subtopicId: '9-2.6-transport',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Hücre zarı, hücreyi dış ortamdan ayıran ve madde giriş-çıkışını kontrol eden "seçici geçirgen (seçici geçirgen)" bir yapıdır. Bu seçicilik sayesinde hücre, ihtiyaç duyduğu maddeleri alır, ihtiyaç fazlası veya zararlı maddeleri dışarı atar ve iç ortamını (homeostazi) korur. Madde geçişleri, enerji (ATP) harcanıp harcanmamasına göre iki ana grupta incelenir: PASİF TAŞIMA (enerji harcanmaz, madde yoğun ortamdan az yoğun ortama geçer) ve AKTİF TAŞIMA (enerji harcanır, madde az yoğun ortamdan çok yoğun ortama taşınabilir).',
      highlightBoxes: [
        {
          type: 'important',
          text: 'PASİF TAŞIMA: ATP HARCANMAZ. Madde, yoğunluk farkına (konsantrasyon gradyanına) bağlı olarak ÇOK yoğun ortamdan AZ yoğun ortama geçer. Türleri: Difüzyon, Ozmoz, Kolaylaştırılmış difüzyon.',
        },
        {
          type: 'important',
          text: 'AKTİF TAŞIMA: ATP HARCANIR. Madde, taşıyıcı proteinler yardımıyla AZ yoğun ortamdan ÇOK yoğun ortama (yoğunluk gradyanına KARŞI) taşınabilir. Endositoz ve ekzositoz da enerji harcayan taşıma türleridir.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.6-transport-L2',
    subtopicId: '9-2.6-transport',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: ['tyt-madde-gecisleri', 'tyt-egzositoz-endositoz'],
      body: 'Hücre zarı, "akıcı mozaik model"e göre yapılandırılmıştır: temel iskeleti, hidrofilik (suyu seven) baş kısımları dışa, hidrofobik (sudan kaçan) kuyruk kısımları içe bakacak şekilde dizilmiş bir FOSFOLİPİT ÇİFT TABAKADIR. Bu çift tabakanın arasına ve üzerine gömülü PROTEİNLER bulunur — bazıları zarın bir yüzeyinden diğerine geçen "taşıyıcı/kanal proteinler", bazıları yüzeyde duran "yüzey proteinleri"dir. Ayrıca zarda KOLESTEROL (zarın akışkanlığını düzenler) ve glikoprotein/glikolipitler (hücre tanıma, reseptör görevi) bulunur. Küçük, yağda çözünen ve yüksüz moleküller (O₂, CO₂, küçük lipitler) doğrudan fosfolipit tabakadan geçebilirken; büyük, yüklü veya suda çözünen moleküller (glikoz, iyonlar, aminoasitler) taşıyıcı veya kanal proteinlere ihtiyaç duyar.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Zardan DOĞRUDAN (protein gerektirmeden) geçebilen maddeler: O₂, CO₂, su (az miktarda doğrudan, çoğunlukla akuaporin kanalıyla), yağda çözünen vitaminler (A, D, E, K), steroid hormonlar, etanol gibi küçük apolar moleküller.',
        },
        {
          type: 'example',
          text: 'Zardan TAŞIYICI/KANAL PROTEİN gerektiren maddeler: Glikoz, aminoasitler, iyonlar (Na⁺, K⁺, Ca²⁺, Cl⁻), nükleotitler — bunlar büyük veya yüklü oldukları için fosfolipit tabakadan doğrudan geçemez.',
        },
        {
          type: 'tip',
          text: 'Akıcı mozaik model: Zar, sabit bir yapı değildir; fosfolipitler ve proteinler zar düzlemi içinde yanal olarak hareket edebilir — bu "akıcılık" zarın esnekliğini ve onarım kapasitesini sağlar.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.6-transport-L3',
    subtopicId: '9-2.6-transport',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Madde geçiş türlerinin işleyişi ve karşılaştırılması:',
      steps: [
        '1. PASİF TAŞIMA — TANIM — Madde, ATP harcanmadan, yoğunluk farkından kaynaklanan kinetik enerji (moleküllerin kendi hareketi) sayesinde çok yoğun ortamdan az yoğun ortama doğru hareket eder. Sistem, dengeye (eşit dağılıma) ulaşana kadar devam eder.',
        '2. BASİT DİFÜZYON — Küçük, yüksüz, yağda çözünen moleküllerin (O₂, CO₂) fosfolipit çift tabakadan doğrudan, protein yardımı olmadan geçişidir. Yoğunluk farkı ne kadar büyükse geçiş hızı o kadar fazladır.',
        '3. KOLAYLAŞTIRILMIŞ DİFÜZYON — Büyük veya yüklü moleküllerin (glikoz, iyonlar) taşıyıcı veya kanal proteinler aracılığıyla, yine yoğunluk farkına bağlı olarak ve ATP harcamadan geçişidir. Glikozun hücreye girişi genellikle bu yöntemle olur.',
        '4. AKTİF TAŞIMA — TANIM — Madde, taşıyıcı proteinler (pompa proteinleri) aracılığıyla ATP harcanarak az yoğun ortamdan çok yoğun ortama (yoğunluk gradyanına KARŞI, "yokuş yukarı") taşınır. ATP, taşıyıcı proteinin şekil değiştirmesini sağlayarak maddeyi karşı tarafa geçirir.',
        '5. SODYUM-POTASYUM POMPASI ÖRNEĞİ — Sinir hücrelerinde, hücre içinden 3 Na⁺ dışarı, hücre dışından 2 K⁺ içeri taşınır; bu işlem sürekli ATP harcar ve sinir impulsunun iletilmesi için gerekli olan zar potansiyelini oluşturur/korur.',
        '6. ENDOSİTOZ — Hücrenin, büyük partikülleri veya sıvı damlacıklarını hücre zarını içe doğru kıvırarak (zardan kesecik oluşturarak) hücre içine alma işlemidir. ATP harcanır. İki türü vardır: FAGOSİTOZ ("hücre yemesi" — katı partiküllerin alınması, örn. beyaz kan hücrelerinin bakteri yutması) ve PİNOSİTOZ ("hücre içmesi" — sıvı damlacıklarının alınması).',
        '7. EKZOSİTOZ — Hücre içinde kesecik (vezikül) içine paketlenmiş maddelerin, kesecik zarının hücre zarıyla kaynaşması sonucu hücre dışına atılması/salgılanmasıdır. ATP harcanır. Örnek: Salgı bezi hücrelerinin hormon veya enzim salgılaması, sinir hücrelerinde nörotransmitter salınımı.',
        '8. KARŞILAŞTIRMA TABLOSU MANTIGI — Pasif taşıma: enerji harcanmaz, yoğun→seyreltik, taşıyıcı protein gerekebilir veya gerekmeyebilir, sistem dengeye ulaşınca durur. Aktif taşıma: enerji (ATP) harcanır, seyreltik→yoğun (gradyana karşı) olabilir, mutlaka taşıyıcı protein (pompa) gerekir, hücre canlı olduğu sürece devam eder.',
        '9. KONTROLLÜ DENEY ÖRNEĞİ — Bir hücre zarı modelinde (diyaliz tüpü), içine glikozlu çözelti konup dışına saf su konursa, glikoz moleküllerinin zardan geçip geçmediği zaman içinde ölçülerek difüzyon hızı üzerine sıcaklık, yoğunluk farkı ve zar gözenek boyutunun etkisi test edilebilir; bağımsız değişken = sıcaklık veya yoğunluk farkı, bağımlı değişken = birim zamanda geçen madde miktarı, kontrol değişkenleri = zar yüzey alanı, başlangıç hacimleri.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.6-transport-L4',
    subtopicId: '9-2.6-transport',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Seçici Geçirgenlik: Hücre zarının bazı maddelerin geçişine izin verip bazılarını engellemesi özelliği.' },
        { type: 'tip', text: 'Fosfolipit Çift Tabaka: Hücre zarının temel yapısı; hidrofilik baş ve hidrofobik kuyruklardan oluşur.' },
        { type: 'tip', text: 'Akıcı Mozaik Model: Hücre zarının, içinde proteinlerin yüzdüğü akışkan bir fosfolipit tabaka olarak tanımlanması.' },
        { type: 'tip', text: 'Pasif Taşıma: ATP harcanmadan, yoğunluk farkına bağlı madde geçişi (difüzyon, ozmoz, kolaylaştırılmış difüzyon).' },
        { type: 'tip', text: 'Aktif Taşıma: ATP harcanarak, taşıyıcı proteinler yardımıyla yoğunluk gradyanına karşı madde geçişi.' },
        { type: 'tip', text: 'Kolaylaştırılmış Difüzyon: Büyük/yüklü moleküllerin taşıyıcı proteinle, ATP harcanmadan yoğunluk farkına göre geçişi.' },
        { type: 'tip', text: 'Endositoz: Hücrenin maddeleri zarını içe kıvırarak hücre içine alması (fagositoz, pinositoz).' },
        { type: 'tip', text: 'Ekzositoz: Hücre içindeki maddelerin kesecik aracılığıyla hücre dışına atılması/salgılanması.' },
        { type: 'tip', text: 'Fagositoz: Katı partiküllerin (örn. bakteri) endositozla alınması — "hücre yemesi".' },
        { type: 'tip', text: 'Pinositoz: Sıvı damlacıklarının endositozla alınması — "hücre içmesi".' },
        { type: 'tip', text: 'Sodyum-Potasyum Pompası: Aktif taşımayla Na⁺ ve K⁺ iyonlarını zardan karşı yönlere taşıyan protein pompası.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.6-transport-L5',
    subtopicId: '9-2.6-transport',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Taşıyıcı protein kullanan her taşıma aktif taşımadır."\n✅ HAYIR. Kolaylaştırılmış difüzyon da taşıyıcı/kanal protein kullanır ama ATP harcamaz ve yoğunluk farkına göre çalışır — bu PASİF taşımadır. Aktif taşımayı belirleyen, protein kullanımı değil ATP HARCANMASI ve yönün gradyana karşı olabilmesidir.',
        },
        {
          type: 'warning',
          text: '❌ "Pasif taşımada madde her zaman protein gerektirmez."\n✅ Basit difüzyonda protein gerekmez ama kolaylaştırılmış difüzyonda protein GEREKİR. Pasif taşıma = ATP harcanmaması demektir, protein kullanılıp kullanılmaması ayrı bir konudur.',
        },
        {
          type: 'warning',
          text: '❌ "Endositoz ve ekzositoz pasif taşımadır çünkü zar içinden geçiş yoktur."\n✅ Endositoz ve ekzositoz ATP harcar; bu yüzden AKTİF taşıma kategorisinde değerlendirilir, "zardan geçiş" şekli farklı olsa da enerji harcanması belirleyicidir.',
        },
        {
          type: 'warning',
          text: '❌ "Madde her zaman çok yoğundan az yoğuna gider."\n✅ Bu sadece PASİF taşıma için doğrudur. AKTİF taşımada madde, hücrenin ihtiyacına göre az yoğun ortamdan çok yoğun ortama (gradyana KARŞI) taşınabilir — örneğin kök hücrelerinin topraktan mineral alması.',
        },
        {
          type: 'warning',
          text: '❌ "Hücre zarı sabit, hareketsiz bir duvar gibidir."\n✅ Hücre zarı "akıcı mozaik model"e göre dinamik bir yapıdır; fosfolipitler ve proteinler yanal olarak hareket edebilir, bu da zarın esnek ve onarılabilir olmasını sağlar.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.6-transport-L6',
    subtopicId: '9-2.6-transport',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdaki olaylardan hangisi ATP harcanarak gerçekleşir?" → aktif taşıma, endositoz, ekzositoz seçenekleri arasından doğru seçimi yapma.\n2) Verilen bir madde geçişi örneğinde (kökten mineral alımı, böbrekte glikoz geri emilimi, beyaz kan hücresinin bakteri yutması) hangi taşıma türünün gerçekleştiğini belirleme.\n3) "Pasif taşıma ile aktif taşımayı ayıran temel ölçüt nedir?" → ATP kullanımı (enerji harcanması).\n4) Hücre zarı yapısı (fosfolipit, protein, kolesterol) ile ilgili "akıcı mozaik model" tanımlama soruları.',
      aytPattern: 'AYT\'de madde geçişleri, sinir impulsu iletimi (Na⁺-K⁺ pompası ve aksiyon potansiyeli), boşaltım sisteminde geri emilim/salgılama mekanizmaları ve bitkilerde su/mineral taşınması (kök basıncı, aktif mineral alımı) ile entegre edilmiş analiz/grafik soruları şeklinde sorulabilir. Ayrıca "yoğunluk farkı zamanla nasıl değişir, taşıma hızı nasıl etkilenir" gibi grafik yorumlama soruları görülür.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: "Kolaylaştırılmış difüzyon taşıyıcı protein kullandığı için aktif taşımadır" ifadesi YANLIŞTIR. Protein kullanımı değil, ATP HARCANMASI aktif/pasif ayrımının temel kriteridir. Kolaylaştırılmış difüzyon = protein VAR + ATP YOK = PASİF.',
        },
        {
          type: 'important',
          text: 'Soru kalıbı: "Bir hücrede aktif taşıma gerçekleşiyorsa o hücrede mutlaka ___ olmalıdır?" → Mitokondri (ATP üretimi için) ve taşıyıcı protein. Bu tarz "ön koşul" soruları sık çıkar.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.6-transport-L7',
    subtopicId: '9-2.6-transport',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Madde geçişlerini günlük hayattan ve vücudumuzdan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🌱 Bitki kökünde mineral alımı: Topraktaki mineral iyonları (nitrat, fosfat) genellikle kök hücrelerinin içinde topraktakinden DAHA YOĞUN bulunur. Bitkinin bu mineralleri almaya devam edebilmesi AKTİF TAŞIMA (ATP harcayarak gradyana karşı taşıma) ile mümkündür.',
        },
        {
          type: 'example',
          text: '🫁 Akciğerlerde gaz değişimi: O₂, alveollerden kana, CO₂ ise kandan alveollere BASİT DİFÜZYONLA (yoğunluk farkına bağlı, ATP harcanmadan) geçer.',
        },
        {
          type: 'example',
          text: '🦠 Bağışıklık hücreleri ve fagositoz: Makrofajlar ve nötrofiller, bakterileri ve hücre artıklarını FAGOSİTOZ ile (zarlarını içe kıvırarak) hücre içine alır ve lizozom enzimleriyle sindirir.',
        },
        {
          type: 'example',
          text: '💉 İnsülin salgılanması: Pankreasın beta hücreleri, ürettikleri insülin hormonunu kesecikler içinde paketleyip EKZOSİTOZ ile kan dolaşımına salgılar.',
        },
        {
          type: 'example',
          text: '🫘 Böbrekte glikoz geri emilimi: Sağlıklı bir böbrekte, idrar öncesi süzüntüdeki glikozun neredeyse tamamı kana geri taşınır; bu işlem genellikle kolaylaştırılmış difüzyon ve aktif taşımanın birlikte çalışmasıyla gerçekleşir (sodyum-glikoz ko-taşıyıcıları).',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 ─────────────────────────────────────────
  {
    id: '9-2.6-transport-L8',
    subtopicId: '9-2.6-transport',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.6-transport-L9',
    subtopicId: '9-2.6-transport',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Pasif ve Aktif Taşıma
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_6_transport: Flashcard[] = [
  { id: 'fc-9-2.6-transport-01', subtopicId: '9-2.6-transport', orderIndex: 1,
    term: 'Seçici Geçirgenlik', definition: 'Hücre zarının bazı maddelerin geçişine izin verip bazılarını engellemesi', example: 'Hücre, glikozu alır ama her molekülü serbestçe içeri almaz' },
  { id: 'fc-9-2.6-transport-02', subtopicId: '9-2.6-transport', orderIndex: 2,
    term: 'Akıcı Mozaik Model', definition: 'Hücre zarının fosfolipit çift tabaka ve hareketli proteinlerden oluşan yapısı', example: 'Proteinler zar içinde yanal hareket edebilir' },
  { id: 'fc-9-2.6-transport-03', subtopicId: '9-2.6-transport', orderIndex: 3,
    term: 'Basit Difüzyon', definition: 'Küçük, yağda çözünen moleküllerin protein gerektirmeden, yoğun ortamdan az yoğun ortama geçişi', example: 'O₂ ve CO₂ alveollerde değişimi' },
  { id: 'fc-9-2.6-transport-04', subtopicId: '9-2.6-transport', orderIndex: 4,
    term: 'Kolaylaştırılmış Difüzyon', definition: 'Taşıyıcı protein yardımıyla, ATP harcanmadan yoğunluk farkına göre madde geçişi', example: 'Glikozun hücreye girişi' },
  { id: 'fc-9-2.6-transport-05', subtopicId: '9-2.6-transport', orderIndex: 5,
    term: 'Aktif Taşıma', definition: 'ATP harcanarak, taşıyıcı proteinle yoğunluk gradyanına karşı madde geçişi', example: 'Kök hücrelerinin topraktan mineral alması' },
  { id: 'fc-9-2.6-transport-06', subtopicId: '9-2.6-transport', orderIndex: 6,
    term: 'Sodyum-Potasyum Pompası', definition: 'Na⁺ ve K⁺ iyonlarını ATP harcayarak zıt yönlere taşıyan protein pompası', example: 'Sinir hücrelerinde zar potansiyelini korur' },
  { id: 'fc-9-2.6-transport-07', subtopicId: '9-2.6-transport', orderIndex: 7,
    term: 'Endositoz', definition: 'Maddelerin zarın içe kıvrılmasıyla hücre içine alınması', example: 'Fagositoz ve pinositoz türleri vardır' },
  { id: 'fc-9-2.6-transport-08', subtopicId: '9-2.6-transport', orderIndex: 8,
    term: 'Ekzositoz', definition: 'Kesecik içindeki maddelerin hücre dışına atılması/salgılanması', example: 'Pankreasın insülini kana salgılaması' },
  { id: 'fc-9-2.6-transport-09', subtopicId: '9-2.6-transport', orderIndex: 9,
    term: 'Fagositoz', definition: 'Katı partiküllerin endositozla alınması', example: 'Makrofajların bakteri yutması' },
  { id: 'fc-9-2.6-transport-10', subtopicId: '9-2.6-transport', orderIndex: 10,
    term: 'Pinositoz', definition: 'Sıvı damlacıklarının endositozla alınması', example: '"Hücre içmesi" olarak adlandırılır' },
];
