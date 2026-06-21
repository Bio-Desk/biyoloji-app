import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Canlılık İçin Enerjinin Önemi (10BIO-1.1)
// Alt Konu: ATP'nin Yapısı ve Enerji Aktarımındaki Rolü (10-1.1-atp)
// ─────────────────────────────────────────────────────────────

export const layers_10_1_1_atp: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '10-1.1-atp-L1',
    subtopicId: '10-1.1-atp',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: "Canlılar; büyüme, hareket, üreme, sentez (yapım reaksiyonları), boşaltım ve aktif taşıma gibi tüm yaşamsal faaliyetlerini sürdürebilmek için sürekli enerjiye ihtiyaç duyar. Bu enerji, hücrelerde kullanılabilir hale getirilmeden önce ATP (Adenozin Trifosfat) adı verilen özel bir molekülde depolanır. ATP, bir nükleotit yapısındadır ve adenin bazı, riboz şekeri ile bu şekere bağlı üç fosfat grubundan oluşur.",
      highlightBoxes: [
        {
          type: 'important',
          text: "ATP'nin Yapısı: Adenin (organik baz) + Riboz (5 karbonlu şeker) + 3 Fosfat grubu (Pi-Pi-Pi). Adenin ve riboz birlikte 'adenozin' olarak adlandırılır; adenozine bağlanan fosfat sayısına göre AMP, ADP veya ATP oluşur.",
        },
        {
          type: 'tip',
          text: "Hatırlama: 'ATP = Hücrenin Para Birimi'. Tıpkı paranın farklı işlemlerde kullanılması gibi, ATP de hücredeki tüm enerji gerektiren olaylarda 'ortak enerji para birimi' olarak kullanılır.",
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '10-1.1-atp-L2',
    subtopicId: '10-1.1-atp',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'ayt-canlilik-enerji',
      body: "ATP molekülünün yapısı şematik olarak şu şekilde gösterilir: Merkezde altı köşeli bir adenin halkası bulunur, buna beş köşeli bir riboz şekeri bağlanır (bu ikisi birlikte 'adenozin'i oluşturur). Riboz şekerinin ucuna sırasıyla birinci, ikinci ve üçüncü fosfat grupları zincir şeklinde eklenir. İkinci ve üçüncü fosfat grupları arasındaki bağ ile birinci ve ikinci fosfat grupları arasındaki bağ 'yüksek enerjili fosfat bağı' olarak gösterilir ve genellikle dalgalı (~) bir çizgiyle belirtilir. ATP'den ADP'ye dönüşüm, en uçtaki (üçüncü) fosfat grubunun hidroliz ile koparılmasıyla gösterilir; ADP'den ATP'ye dönüşüm ise enerji harcanarak bir fosfat grubunun eklenmesiyle gösterilir (ATP-ADP döngüsü, dairesel bir okla resmedilir).",
      highlightBoxes: [
        {
          type: 'example',
          text: "Şema önerisi: Bir daire çiz ve dairenin üst yarısına 'ATP' (Adenin-Riboz-P~P~P), alt yarısına 'ADP + Pi' (Adenin-Riboz-P~P) yaz. Üstten alta giden okun üzerine 'enerji açığa çıkar (hidroliz)', alttan üste giden okun üzerine 'enerji harcanır (fotosentez/solunumdan gelen enerji ile)' yaz. Bu döngüsel şema ATP-ADP döngüsünü gösterir.",
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '10-1.1-atp-L3',
    subtopicId: '10-1.1-atp',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: "ATP'nin yapısından hücredeki enerji aktarım rolüne kadar olan süreci adım adım inceleyelim:",
      steps: [
        "1. ENERJİYE NEDEN İHTİYAÇ DUYULUR — Canlılar; büyüme (yeni hücre/doku oluşumu), hareket (kas kasılması, kamçı/sil hareketi), üreme (DNA replikasyonu, hücre bölünmesi), sentez (protein, yağ, nükleik asit yapımı), boşaltım (aktif taşımayla madde atımı) ve madde taşıma (hücre zarından aktif taşıma, ekzositoz/endositoz) gibi tüm faaliyetlerde enerji harcar.",
        "2. ATP'NİN YAPI TAŞLARI — ATP bir nükleotittir: 1 adenin (organik baz, pürin grubu) + 1 riboz şekeri (5 karbonlu, pentoz) + 3 fosfat grubu. Adenin + riboz = 'adenozin'. Adenozine 1 fosfat eklenirse AMP, 2 fosfat eklenirse ADP, 3 fosfat eklenirse ATP oluşur.",
        "3. YÜKSEK ENERJİLİ FOSFAT BAĞLARI — ATP'deki son iki fosfat grubu arasındaki bağlar 'yüksek enerjili fosfat bağı' olarak adlandırılır. Bu bağlar, fosfat gruplarının birbirini iten negatif yükleri nedeniyle gerilim taşır ve koptuklarında ortalama 7,3 kcal/mol (yaklaşık 30,5 kJ/mol) enerji açığa çıkarır.",
        "4. ATP HİDROLİZİ — ATP'nin en uçtaki fosfat bağının suyla tepkimeye girerek (hidroliz) kopması sonucu ATP, ADP (Adenozin Difosfat) ve serbest bir fosfat grubuna (Pi) ayrışır. Bu tepkime sırasında açığa çıkan enerji, hücredeki enerji gerektiren tepkimelerde doğrudan kullanılır: ATP + H2O → ADP + Pi + Enerji.",
        "5. ATP SENTEZİ (FOSFORİLASYON) — ADP'ye bir fosfat grubunun eklenmesiyle (fosforilasyon) tekrar ATP oluşturulur. Bu işlem enerji gerektirir ve bu enerji; oksijenli/oksijensiz solunum, fotosentez veya kemosentez gibi enerji üretim süreçlerinden karşılanır: ADP + Pi + Enerji → ATP.",
        "6. ATP-ADP DÖNGÜSÜ — Hücrede ATP sürekli üretilip sürekli tüketilir; bu sürekli dönüşüm 'ATP-ADP döngüsü' olarak adlandırılır. ATP üretildiği yerde depolanmaz, hemen kullanılır; bu yüzden hücrede ATP miktarı her an düşük tutulur ve döngü kesintisiz devam eder.",
        "7. ATP'NİN EVRENSEL ENERJİ TAŞIYICISI OLMASI — ATP, tüm canlı hücrelerde (bakteriden insana) aynı yapıda bulunur ve enerji üretim süreçleri ile enerji tüketim süreçleri arasında 'ortak para birimi' görevi görür. Bu sayede farklı kaynaklardan (güneş ışığı, besin molekülleri, inorganik maddeler) elde edilen enerji, ortak bir formda hücrenin her yerinde kullanılabilir hale gelir.",
        "8. ATP'NİN KULLANIM ALANLARINA ÖRNEKLER — Kas kasılmasında aktin-miyozin filamentlerinin kayması, sinir hücrelerinde Na+/K+ pompasının çalışması (aktif taşıma), ribozomlarda protein sentezi (peptit bağı oluşumu), DNA ve RNA sentezi, ışık üreten canlılarda biyolüminesans (örn. ateş böceği) ATP enerjisiyle gerçekleşir.",
        "9. ATP'NİN DEPOLANAMAMASININ SONUCU — ATP uzun süre depolanabilen bir molekül değildir; hücreler enerji ihtiyacı arttığında ATP'yi anlık olarak üretmek zorundadır. Bu nedenle hücrede sürekli olarak solunum (mitokondri) veya fotosentez (kloroplast) gibi süreçlerle ATP üretimi devam eder.",
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '10-1.1-atp-L4',
    subtopicId: '10-1.1-atp',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: "ATP (Adenozin Trifosfat): Adenin, riboz şekeri ve üç fosfat grubundan oluşan, hücrenin evrensel enerji taşıyıcı molekülü." },
        { type: 'tip', text: "Adenozin: Adenin bazı ile riboz şekerinin birleşmesinden oluşan yapı; ATP'nin fosfatsız kısmıdır." },
        { type: 'tip', text: "ADP (Adenozin Difosfat): Adenozine iki fosfat grubunun bağlanmasıyla oluşan, ATP'nin hidrolizi sonucu açığa çıkan molekül." },
        { type: 'tip', text: "Yüksek Enerjili Fosfat Bağı: ATP'deki son iki fosfat grubu arasındaki, koptuğunda yüksek miktarda enerji açığa çıkaran kovalent bağ." },
        { type: 'tip', text: "Hidroliz: Bir molekülün su ile tepkimeye girerek parçalanması; ATP'nin ADP ve Pi'ye ayrışması bu yolla gerçekleşir." },
        { type: 'tip', text: "Fosforilasyon: Bir moleküle (örneğin ADP'ye) fosfat grubu eklenmesi işlemi; enerji gerektiren bir tepkimedir." },
        { type: 'tip', text: "ATP-ADP Döngüsü: Hücrede ATP'nin sürekli üretilip enerji vererek ADP'ye dönüşmesi ve tekrar ATP'ye fosforillenmesi döngüsü." },
        { type: 'tip', text: "Pi (İnorganik Fosfat): ATP'nin hidrolizi sonucunda serbest kalan fosfat grubu (PO4 3-)." },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '10-1.1-atp-L5',
    subtopicId: '10-1.1-atp',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: "❌ \"ATP, hücrede uzun süre depolanan bir enerji deposudur.\"\n✅ ATP depolanan değil, anlık olarak kullanılan ve sürekli yenilenen bir enerji taşıyıcısıdır. Enerji depolama görevini yağlar ve karbonhidratlar (glikojen, nişasta) üstlenir.",
        },
        {
          type: 'warning',
          text: "❌ \"ATP'deki tüm fosfat bağları aynı miktarda ve aynı türde enerji içerir.\"\n✅ Sadece ATP'deki son iki fosfat bağı (2.-3. ve 1.-2. fosfat arası) 'yüksek enerjili fosfat bağı' olarak adlandırılır; adenozin ile birinci fosfat arasındaki bağ yüksek enerjili değildir.",
        },
        {
          type: 'warning',
          text: "❌ \"ATP sadece hayvan hücrelerinde bulunur, bitkiler enerjilerini doğrudan güneşten kullanır.\"\n✅ ATP tüm canlı hücrelerde (bitki, hayvan, bakteri, mantar) bulunan evrensel bir moleküldür. Bitkiler de fotosentezde üretilen ATP'yi Calvin döngüsünde ve diğer yaşamsal faaliyetlerinde kullanır.",
        },
        {
          type: 'warning',
          text: "❌ \"ATP üretildiği organelde kalır, başka bölgelere taşınmaz.\"\n✅ ATP, üretildiği yerden (mitokondri, kloroplast) sitoplazmaya difüzyonla yayılarak ihtiyaç duyulan her bölgede kullanılabilir; bu da onu 'evrensel enerji taşıyıcı' yapan özelliklerden biridir.",
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '10-1.1-atp-L6',
    subtopicId: '10-1.1-atp',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: "1) \"ATP'nin yapısında bulunan moleküller nelerdir?\" → adenin, riboz şekeri, 3 fosfat grubu sayma/eşleştirme soruları.\n2) \"ATP-ADP dönüşümünde hangi tepkime enerji açığa çıkarır, hangisi enerji harcar?\" tarzı yön belirleme soruları.\n3) Verilen bir yaşamsal faaliyet (kas kasılması, aktif taşıma, protein sentezi vb.) için \"bu olay gerçekleşirken ATP kullanılır mı?\" sorgusu.\n4) \"ATP neden hücrenin enerji para birimi olarak adlandırılır?\" tarzı kavramsal sorular.",
      aytPattern: "AYT'de ATP'nin yapısı, fotosentez ve solunumla (ışığa bağlı reaksiyonlar, oksidatif fosforilasyon, substrat düzeyinde fosforilasyon) ilişkilendirilerek sorulur. ATP üretim/tüketim dengesinin grafik üzerinde yorumlanması, ATP sentaz enziminin rolü ve kemiozmotik (kemiosmotik) ATP sentezi gibi ileri düzey kavramlarla bağlantı kurulabilir.",
      highlightBoxes: [
        {
          type: 'important',
          text: "Sıkça karıştırılan nokta: 'Enerji açığa çıkması' ile 'ATP'nin parçalanması' (hidroliz, ATP→ADP) aynı yöndür; 'enerji harcanması' ile 'ATP'nin sentezlenmesi' (fosforilasyon, ADP→ATP) aynı yöndür. Bu yön karışıklığı sınavda en çok hata yapılan noktadır.",
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '10-1.1-atp-L7',
    subtopicId: '10-1.1-atp',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: "ATP'nin günlük hayattaki ve canlılardaki rolünü örneklerle pekiştirelim:",
      highlightBoxes: [
        {
          type: 'example',
          text: "💪 Egzersiz ve kas yorgunluğu: Yoğun egzersiz sırasında kaslardaki ATP hızla tüketilir; ATP üretimi yetişemediğinde kaslar yorulur ve kasılma gücü azalır.",
        },
        {
          type: 'example',
          text: "🦟 Ateş böceği ışığı: Ateş böceklerinin karın bölgesindeki özel hücrelerde luciferin maddesi, ATP enerjisi kullanılarak oksitlenir ve ışık (biyolüminesans) üretilir.",
        },
        {
          type: 'example',
          text: "🧠 Sinir iletimi: Sinir hücrelerinde Na+/K+ pompasının çalışarak hücre zarı potansiyelini koruması, doğrudan ATP enerjisiyle gerçekleştirilen bir aktif taşıma örneğidir.",
        },
        {
          type: 'example',
          text: "🌱 Tohum çimlenmesi: Toprağa ekilen bir tohum, depo besinlerini (nişasta, yağ) parçalayarak ATP üretir ve bu enerjiyle kök/gövde hücrelerinin büyümesi için gerekli sentez tepkimelerini gerçekleştirir.",
        },
        {
          type: 'example',
          text: "🔋 Powerbank benzetmesi: ATP, tıpkı bir telefonun şarj edilip enerjisinin kullanılması gibi, hücrede sürekli 'şarj edilip (ADP→ATP) boşaltılan (ATP→ADP)' bir enerji taşıyıcısı gibi davranır.",
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '10-1.1-atp-L8',
    subtopicId: '10-1.1-atp',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '10-1.1-atp-L9',
    subtopicId: '10-1.1-atp',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — ATP'nin Yapısı ve Enerji Aktarımındaki Rolü
// ─────────────────────────────────────────────────────────────

export const flashcards_10_1_1_atp: Flashcard[] = [
  { id: 'fc-10-1.1-01', subtopicId: '10-1.1-atp', orderIndex: 1,
    term: 'ATP (Adenozin Trifosfat)', definition: "Adenin, riboz şekeri ve üç fosfat grubundan oluşan, hücrenin evrensel enerji taşıyıcı molekülü", example: "Hücrenin 'enerji para birimi' olarak adlandırılır" },
  { id: 'fc-10-1.1-02', subtopicId: '10-1.1-atp', orderIndex: 2,
    term: 'Adenozin', definition: 'Adenin bazı ile riboz şekerinin birleşmesinden oluşan yapı', example: "Adenozine fosfat eklenerek AMP, ADP, ATP oluşur" },
  { id: 'fc-10-1.1-03', subtopicId: '10-1.1-atp', orderIndex: 3,
    term: 'ADP (Adenozin Difosfat)', definition: "ATP'nin bir fosfat grubunu kaybetmesiyle oluşan, iki fosfat grubu içeren molekül", example: "ATP hidrolizi sonucunda ADP ve Pi oluşur" },
  { id: 'fc-10-1.1-04', subtopicId: '10-1.1-atp', orderIndex: 4,
    term: 'Yüksek Enerjili Fosfat Bağı', definition: "ATP'deki son iki fosfat grubu arasındaki, koptuğunda enerji açığa çıkaran bağ", example: "ATP'de iki adet yüksek enerjili fosfat bağı bulunur" },
  { id: 'fc-10-1.1-05', subtopicId: '10-1.1-atp', orderIndex: 5,
    term: 'Hidroliz (ATP)', definition: "ATP'nin su ile tepkimeye girerek ADP ve Pi'ye parçalanması, enerji açığa çıkaran tepkime", example: "ATP + H2O → ADP + Pi + Enerji" },
  { id: 'fc-10-1.1-06', subtopicId: '10-1.1-atp', orderIndex: 6,
    term: 'Fosforilasyon', definition: "ADP'ye bir fosfat grubu eklenerek ATP oluşturulması, enerji gerektiren tepkime", example: "ADP + Pi + Enerji → ATP" },
  { id: 'fc-10-1.1-07', subtopicId: '10-1.1-atp', orderIndex: 7,
    term: 'ATP-ADP Döngüsü', definition: "ATP'nin sürekli ADP'ye parçalanıp tekrar ATP'ye fosforillenmesi süreci", example: "Hücrede kesintisiz devam eden bir enerji döngüsüdür" },
  { id: 'fc-10-1.1-08', subtopicId: '10-1.1-atp', orderIndex: 8,
    term: 'Evrensel Enerji Taşıyıcı', definition: "ATP'nin tüm canlı hücrelerde aynı yapıda bulunarak enerji üretim ve tüketim süreçleri arasında ortak rol oynaması", example: "Bakteriden insana her canlıda ATP kullanılır" },
  { id: 'fc-10-1.1-09', subtopicId: '10-1.1-atp', orderIndex: 9,
    term: 'Pi (İnorganik Fosfat)', definition: "ATP'nin hidrolizi sonucunda serbest kalan fosfat grubu", example: "ADP + Pi → tekrar ATP sentezinde kullanılır" },
  { id: 'fc-10-1.1-10', subtopicId: '10-1.1-atp', orderIndex: 10,
    term: 'Aktif Taşıma', definition: 'Maddelerin hücre zarından ATP enerjisi harcanarak taşınması', example: 'Na+/K+ pompasının çalışması' },
];
