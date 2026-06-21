import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Difüzyon ve Ozmoz (9BIO-2.7)
// Alt Konu: Difüzyon (9-2.7-diffusion)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_7_diffusion: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.7-diffusion-L1',
    subtopicId: '9-2.7-diffusion',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Difüzyon, maddenin (atom, iyon veya molekülün) kendi kinetik enerjisiyle, çok yoğun olduğu bölgeden az yoğun olduğu bölgeye doğru, rastgele hareketler sonucu yayılmasıdır. Bu hareket için ATP harcanmaz, çünkü taneciklerin kendi öz hareket enerjisi (Brown hareketi) yeterlidir. Difüzyon, derişim farkı ortadan kalkıp tanecikler her yere eşit dağılana (dinamik denge) kadar devam eder.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Difüzyon = Pasif taşıma. Yön: Çok yoğun (yüksek derişim) → Az yoğun (düşük derişim). Enerji (ATP) HARCANMAZ. Hücre canlı da olsa cansız da olsa gerçekleşir.',
        },
        {
          type: 'tip',
          text: 'Dinamik denge: Derişimler eşitlendiğinde tanecik hareketi DURMAZ; her iki yöne de eşit sayıda tanecik geçişi devam eder. Net (toplam) geçiş sıfırlanır.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.7-diffusion-L2',
    subtopicId: '9-2.7-diffusion',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-madde-gecisleri',
      body: 'Bir kabın içine konan parfüm damlası ya da bir bardak suya atılan mürekkep damlası düşünelim. Başlangıçta tanecikler tek bir noktada yoğunlaşmıştır (yüksek derişim bölgesi). Zamanla tanecikler rastgele hareketleri sayesinde ortamın her yanına yayılır ve sonunda tüm ortamda eşit dağılım (homojen karışım) oluşur. Hücre düzeyinde ise difüzyon, hücre zarından (fosfolipit çift katmanından) veya zardaki kanal proteinlerinden gerçekleşebilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Zardan doğrudan geçiş: Küçük, yağda çözünen veya yüksüz moleküller (O₂, CO₂, yağ asitleri, alkol, vitamin A-D-E-K) fosfolipit tabakadan doğrudan geçer.\nKanal/taşıyıcı protein ile geçiş: Suda çözünen, yüklü veya büyük moleküller (glikoz, iyonlar, su) zar proteinleri aracılığıyla geçer — buna "kolaylaştırılmış difüzyon" denir.',
        },
        {
          type: 'tip',
          text: 'Şema mantığı: [Yüksek derişim bölgesi] —(tanecik akışı)→ [Düşük derişim bölgesi]. Ok yönü her zaman "çoktan aza"dır ve derişim farkı (konsantrasyon gradyanı) azaldıkça akış hızı da azalır.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.7-diffusion-L3',
    subtopicId: '9-2.7-diffusion',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Difüzyon hızını etkileyen faktörler ve bir difüzyon deneyinin/grafiğinin yorumlanma adımları:',
      steps: [
        '1. DERİŞİM FARKI (KONSANTRASYON GRADYANI) — İki ortam arasındaki yoğunluk farkı ne kadar büyükse difüzyon o kadar HIZLI gerçekleşir. Fark azaldıkça hız azalır.',
        '2. SICAKLIK — Sıcaklık arttıkça taneciklerin kinetik enerjisi (hareket hızı) artar, difüzyon hızlanır. Soğukta tanecikler yavaşlar, difüzyon yavaşlar.',
        '3. TANECİK BÜYÜKLÜĞÜ VE KÜTLESİ — Küçük ve hafif tanecikler (O₂, CO₂) büyük moleküllere (proteinler, nişasta) göre daha hızlı difüze olur.',
        '4. ORTAMIN YOĞUNLUĞU (FAZ HALİ) — Difüzyon gazlarda > sıvılarda > katılarda en hızlı gerçekleşir; ortam ne kadar akışkansa tanecikler o kadar hızlı yayılır.',
        '5. YÜZEY ALANI — Difüzyonun gerçekleştiği yüzey alanı (örneğin hücre zarının yüzey alanı) ne kadar genişse, birim zamanda geçen tanecik miktarı o kadar fazladır.',
        '6. ZARIN KALINLIĞI VE GEÇİRGENLİĞİ — Zar ne kadar inceyse ve geçirgenliği o tanecik için ne kadar yüksekse difüzyon o kadar hızlı olur.',
        '7. GRAFİK YORUMU — Bir difüzyon-zaman grafiğinde, derişim farkı fazla olduğu başlangıç anında eğim (hız) DİKtir; zaman ilerledikçe derişimler eşitlendiğinden eğri yataylaşır ve dinamik dengeye (plato) ulaşır. Eğrinin yatay hale geldiği nokta, "net geçişin sıfır olduğu" anı gösterir, "geçişin durduğu" anı DEĞİL.',
        '8. DENEY TASARIMI ÖRNEĞİ — Diyaliz tüpüne (yarı geçirgen zar) yoğun şeker çözeltisi konup saf su içeren behere daldırılırsa: su tüpe girer (tüpün ağırlığı artar), şeker zardan geçemiyorsa derişim farkı uzun süre korunur ve su girişi belirli bir noktaya kadar devam eder.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.7-diffusion-L4',
    subtopicId: '9-2.7-diffusion',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Difüzyon: Taneciklerin çok yoğun ortamdan az yoğun ortama, kendi kinetik enerjileriyle (ATP harcamadan) yayılması.' },
        { type: 'tip', text: 'Derişim (Konsantrasyon) Gradyanı: İki bölge arasındaki derişim farkı; difüzyonun "itici gücü"dür.' },
        { type: 'tip', text: 'Dinamik Denge: Derişimlerin eşitlendiği, net tanecik geçişinin sıfır olduğu ama tanecik hareketinin DEVAM ettiği durum.' },
        { type: 'tip', text: 'Kolaylaştırılmış Difüzyon: Zarda bulunan kanal veya taşıyıcı proteinler aracılığıyla, derişim farkına göre (yoğundan seyreğe) gerçekleşen pasif taşıma.' },
        { type: 'tip', text: 'Basit Difüzyon: Maddenin doğrudan fosfolipit çift katmandan geçişi (protein gerekmez).' },
        { type: 'tip', text: 'Pasif Taşıma: ATP harcanmadan, derişim farkına bağlı gerçekleşen taşıma türlerinin genel adı (difüzyon, ozmoz, kolaylaştırılmış difüzyon).' },
        { type: 'tip', text: 'Brown Hareketi: Taneciklerin sıvı veya gaz ortamda sürekli, rastgele ve düzensiz hareketi; difüzyonun temel nedenidir.' },
        { type: 'tip', text: 'Permeabilite (Geçirgenlik): Bir zarın belirli bir maddeyi geçirme yeteneği.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.7-diffusion-L5',
    subtopicId: '9-2.7-diffusion',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Dinamik dengeye ulaşıldığında tanecik hareketi durur."\n✅ Tanecikler hareket etmeye devam eder; sadece her iki yöne geçen tanecik sayısı eşitlendiği için NET (toplam) geçiş sıfır olur.',
        },
        {
          type: 'warning',
          text: '❌ "Difüzyon yalnızca canlı hücrelerde gerçekleşir."\n✅ Difüzyon fiziksel bir olaydır; cansız ortamlarda (örneğin bir bardak suya damlatılan mürekkepte) da gerçekleşir. Hücre canlılığı şart değildir.',
        },
        {
          type: 'warning',
          text: '❌ "Difüzyon için mutlaka bir zar (membran) gereklidir."\n✅ Difüzyon zarsız ortamlarda da (havada koku yayılması, suda boya yayılması) gerçekleşebilir. Zar varsa geçirgen olması gerekir.',
        },
        {
          type: 'warning',
          text: '❌ "Difüzyonda enerji (ATP) harcanır."\n✅ Difüzyon pasif bir taşıma türüdür; tanecikler kendi kinetik enerjileriyle hareket eder, hücre ATP harcamaz.',
        },
        {
          type: 'warning',
          text: '❌ "Kolaylaştırılmış difüzyon, aktif taşımadır."\n✅ Kolaylaştırılmış difüzyon da pasif taşımadır (yoğundan seyreğe, ATP harcamadan); sadece taşıyıcı/kanal protein kullanır. Aktif taşımada ise madde AZ yoğundan ÇOK yoğuna, ATP harcanarak taşınır.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.7-diffusion-L6',
    subtopicId: '9-2.7-diffusion',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavlarında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Difüzyon hızını etkileyen faktörler hangileridir?" → sıcaklık, derişim farkı, tanecik büyüklüğü, ortamın yoğunluğu, yüzey alanı.\n2) Verilen bir kapta iki gazın (örneğin amonyak ve hidroklorik asit) karşılıklı difüzyonunda hangi gazın daha hızlı yayılacağını sorma (küçük/hafif olan daha hızlıdır).\n3) "Difüzyon ile ilgili verilenlerden hangisi yanlıştır?" tarzı öncül (I, II, III) soruları — "ATP harcanır" ifadesi her zaman yanlış öncüldür.\n4) Zaman-derişim grafiği verilip "dinamik dengeye hangi noktada ulaşılmıştır?" sorusu — eğrinin yataylaştığı (sabitlendiği) nokta.',
      aytPattern: 'AYT\'de difüzyon, hücre zarından madde geçişi (taşıma sistemleri) ve solunum/fotosentez gaz alışverişi (alveol, yaprak gözenekleri) konularıyla birleştirilerek sorulur. Ayrıca enzim çalışma hızı-difüzyon hızı ilişkili grafik soruları çıkabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: "Difüzyon canlı hücrede daha hızlı gerçekleşir" gibi ifadeler YANLIŞTIR — difüzyon hızı canlılığa değil, sıcaklık/derişim farkı/tanecik boyutu gibi fiziksel faktörlere bağlıdır. Hücre zarındaki taşıyıcı protein sayısı ise kolaylaştırılmış difüzyon hızını etkiler.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.7-diffusion-L7',
    subtopicId: '9-2.7-diffusion',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Difüzyonu günlük hayattan ve laboratuvardan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '☕ Çay demleme: Demlikteki çay tanecikleri (yoğun bölge), bardaktaki sıcak suya (seyreltik bölge) doğru yayılarak suyun rengini ve tadını değiştirir. Sıcak su, soğuk sudan daha hızlı demlenmeyi sağlar (sıcaklık etkisi).',
        },
        {
          type: 'example',
          text: '🌬️ Akciğerlerde gaz değişimi: Alveollerdeki O₂ derişimi kandakinden yüksek, CO₂ derişimi ise düşüktür. Bu derişim farkı sayesinde O₂ kana, CO₂ alveole difüzyonla geçer — hiçbir ATP harcanmaz.',
        },
        {
          type: 'example',
          text: '🧪 Parfüm/koku yayılması: Bir odanın bir köşesinde sıkılan parfüm zamanla tüm odaya yayılır. Bu, gaz hâlindeki taneciklerin difüzyonudur ve sıcak ortamda daha hızlı gerçekleşir.',
        },
        {
          type: 'example',
          text: '🩸 Doku düzeyinde besin ve atık alışverişi: Kapiler damarlardaki besin ve O₂, derişim farkı nedeniyle dokulara difüzyonla geçer; dokulardaki CO₂ ve atıklar da kana aynı şekilde geçer.',
        },
        {
          type: 'example',
          text: '🥄 Şeker/tuzun suda çözünmesi: Bir bardak suya atılan şeker, karıştırılmasa bile zamanla tüm suya yayılır ve homojen tatlı bir çözelti oluşur — klasik bir difüzyon deneyi olarak okulda gözlemlenebilir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.7-diffusion-L8',
    subtopicId: '9-2.7-diffusion',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.7-diffusion-L9',
    subtopicId: '9-2.7-diffusion',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Difüzyon
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_7_diffusion: Flashcard[] = [
  { id: 'fc-9-2.7-diffusion-01', subtopicId: '9-2.7-diffusion', orderIndex: 1,
    term: 'Difüzyon', definition: 'Taneciklerin çok yoğun ortamdan az yoğun ortama, ATP harcamadan, kendi kinetik enerjileriyle yayılması', example: 'Mürekkep damlasının suda yayılması' },
  { id: 'fc-9-2.7-diffusion-02', subtopicId: '9-2.7-diffusion', orderIndex: 2,
    term: 'Derişim (Konsantrasyon) Gradyanı', definition: 'İki bölge arasındaki yoğunluk farkı; difüzyonun itici gücüdür', example: 'Alveol ile kan arasındaki O₂ derişim farkı' },
  { id: 'fc-9-2.7-diffusion-03', subtopicId: '9-2.7-diffusion', orderIndex: 3,
    term: 'Dinamik Denge', definition: 'Derişimlerin eşitlendiği, net tanecik geçişinin sıfır olduğu ama hareketin sürdüğü durum', example: 'Şekerli suyun her tarafının eşit tatlılıkta olması' },
  { id: 'fc-9-2.7-diffusion-04', subtopicId: '9-2.7-diffusion', orderIndex: 4,
    term: 'Basit Difüzyon', definition: 'Maddenin doğrudan fosfolipit çift katmandan, protein kullanmadan geçişi', example: 'O₂ ve CO₂ gazlarının hücre zarından geçişi' },
  { id: 'fc-9-2.7-diffusion-05', subtopicId: '9-2.7-diffusion', orderIndex: 5,
    term: 'Kolaylaştırılmış Difüzyon', definition: 'Kanal veya taşıyıcı proteinler aracılığıyla, derişim farkına göre gerçekleşen pasif taşıma', example: 'Glikozun taşıyıcı proteinle hücreye girişi' },
  { id: 'fc-9-2.7-diffusion-06', subtopicId: '9-2.7-diffusion', orderIndex: 6,
    term: 'Pasif Taşıma', definition: 'ATP harcanmadan, derişim farkına bağlı gerçekleşen taşıma türlerinin genel adı', example: 'Difüzyon, ozmoz ve kolaylaştırılmış difüzyon' },
  { id: 'fc-9-2.7-diffusion-07', subtopicId: '9-2.7-diffusion', orderIndex: 7,
    term: 'Brown Hareketi', definition: 'Taneciklerin sıvı veya gaz ortamda sürekli, rastgele ve düzensiz hareketi', example: 'Sıvı içindeki polen tanelerinin titreşimli hareketi' },
  { id: 'fc-9-2.7-diffusion-08', subtopicId: '9-2.7-diffusion', orderIndex: 8,
    term: 'Difüzyon Hızını Etkileyen Faktörler', definition: 'Sıcaklık, derişim farkı, tanecik büyüklüğü, ortam yoğunluğu, yüzey alanı, zar geçirgenliği', example: 'Sıcak suda şekerin daha hızlı dağılması' },
];

// ─────────────────────────────────────────────────────────────
// KONU: Difüzyon ve Ozmoz (9BIO-2.7)
// Alt Konu: Ozmoz ve Hücre Davranışları (9-2.7-osmosis)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_7_osmosis: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.7-osmosis-L1',
    subtopicId: '9-2.7-osmosis',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Ozmoz, su moleküllerinin SEÇİCİ GEÇİRGEN (yarı geçirgen) bir zardan, çözünen madde (çözünen tanecik) derişimi az olan ortamdan (su derişimi yüksek) çözünen madde derişimi fazla olan ortama (su derişimi düşük) doğru geçişidir. Kısaca ozmoz, suyun "özel bir difüzyonudur": sadece SU molekülünün, sadece seçici geçirgen zardan, az yoğun çözeltiden çok yoğun çözeltiye geçişidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Ozmoz = Suyun yarı geçirgen zardan, su derişimi YÜKSEK olan ortamdan su derişimi DÜŞÜK olan ortama (yani çözünen madde derişimi az olandan çok olana) geçişi. Bu da bir tür pasif taşımadır, ATP harcanmaz.',
        },
        {
          type: 'tip',
          text: 'Hatırlama: "Su, çözünenin AZ olduğu yerden ÇOK olduğu yere gider." Ya da: "Su, kendi derişiminin yüksek olduğu yerden düşük olduğu yere gider."',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.7-osmosis-L2',
    subtopicId: '9-2.7-osmosis',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-cozelti-osmoz',
      body: 'Bir hücreyi, içinde belirli derişimde madde bulunan ve seçici geçirgen bir zarla çevrili "torba" gibi düşünelim. Bu hücre üç farklı ortama konulabilir: 1) Hipotonik ortam — hücre içinden daha SEYRELTİK (su derişimi dışarıda yüksek), 2) İzotonik ortam — hücre içiyle EŞİT derişimde, 3) Hipertonik ortam — hücre içinden daha YOĞUN (su derişimi dışarıda düşük). Her durumda su, yarı geçirgen zardan ozmozla hareket eder ve hücrenin şekli/hacmi değişir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Hayvan hücresi (örn. alyuvar):\n• Hipotonik ortamda → su hücreye girer → şişer, aşırı durumda PATLAR (hemoliz).\n• İzotonik ortamda → giriş-çıkış dengeli → hacim sabit kalır.\n• Hipertonik ortamda → su hücreden çıkar → büzülür (krenasyon).',
        },
        {
          type: 'example',
          text: 'Bitki hücresi (hücre çeperi sayesinde patlamaz):\n• Hipotonik ortamda → su girer → koful büyür, sitoplazma hücre çeperine baskı yapar → TURGOR basıncı oluşur, hücre "turgor" hâlindedir (diri, sert).\n• Hipertonik ortamda → su çıkar → sitoplazma ve zar çeperden uzaklaşır → PLAZMOLİZ (büzülme).\n• Plazmolize uğramış hücre tekrar hipotonik ortama konursa su geri girer ve sitoplazma çepere yeniden yaslanır → DEPLAZMOLİZ.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.7-osmosis-L3',
    subtopicId: '9-2.7-osmosis',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Ozmoz deneyleri ve grafik yorumlama için adım adım mantık:',
      steps: [
        '1. ORTAMI TANIMLA — Hücrenin bulunduğu ortamın hücre sıvısına göre hipotonik mi, izotonik mi yoksa hipertonik mi olduğunu belirle. Bu, "çözünen madde derişimi" karşılaştırmasıyla yapılır.',
        '2. SU YÖNÜNÜ BELİRLE — Su her zaman KENDİ derişiminin yüksek olduğu yerden (çözünenin az olduğu yerden) düşük olduğu yere (çözünenin çok olduğu yere) gider.',
        '3. HACİM/KÜTLE DEĞİŞİMİNİ ÖNGÖR — Su giren hücrenin hacmi/kütlesi ARTAR, su kaybeden hücrenin hacmi/kütlesi AZALIR.',
        '4. HAYVAN HÜCRESİ İÇİN SONUÇ — Hipotonik ortamda hemoliz (patlama) riski, hipertonik ortamda krenasyon (büzülme) görülür; hücre çeperi olmadığı için aşırı su girişine karşı koruma yoktur.',
        '5. BİTKİ HÜCRESİ İÇİN SONUÇ — Hipotonik ortamda hücre çeperi sayesinde patlamaz, turgor basıncı oluşur (turgor hücre = diri). Hipertonik ortamda plazmoliz (sitoplazmanın çeperden ayrılması) görülür.',
        '6. DENEY: PATATES/HAVUÇ DİLİMİ DENEYİ — Eşit kütlede patates dilimleri farklı tuz derişimindeki çözeltilere konur, belirli süre sonra tekrar tartılır. Saf suya konan dilim ağırlık KAZANIR (su girişi), yoğun tuzlu suya konan dilim ağırlık KAYBEDER (su çıkışı, plazmoliz).',
        '7. GRAFİK YORUMU — "Kütle değişimi - zaman" grafiğinde, dilimin kütlesi artıyorsa ortam o doku için HİPOTONİKtir; kütle azalıyorsa ortam HİPERTONİKtir; kütle değişmiyorsa İZOTONİKtir (eşit derişim, dinamik denge).',
        '8. PLAZMOLİZ-DEPLAZMOLİZ DÖNGÜSÜ — Soğan zarı hücresi önce hipertonik tuzlu suya konup mikroskopta plazmoliz gözlemlenir (sitoplazma büzülür, hücre çeperinden ayrılır); ardından saf suya konursa su geri girer ve hücre eski hâline döner (deplazmoliz) — bu işlem hücrenin canlılığını gösterir.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.7-osmosis-L4',
    subtopicId: '9-2.7-osmosis',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Ozmoz: Suyun seçici geçirgen zardan, su derişimi yüksek ortamdan düşük ortama (çözünen az olandan çok olana) geçişi.' },
        { type: 'tip', text: 'Hipotonik Ortam: Karşılaştırılan ortama göre çözünen madde derişimi DAHA AZ (su derişimi daha fazla) olan ortam.' },
        { type: 'tip', text: 'Hipertonik Ortam: Karşılaştırılan ortama göre çözünen madde derişimi DAHA FAZLA (su derişimi daha az) olan ortam.' },
        { type: 'tip', text: 'İzotonik Ortam: İki ortamın çözünen madde derişiminin EŞİT olduğu durum; net su geçişi olmaz.' },
        { type: 'tip', text: 'Turgor Basıncı: Hipotonik ortamdaki bitki hücresinde su girişiyle sitoplazmanın hücre çeperine yaptığı baskı; hücreyi diri/sert tutar.' },
        { type: 'tip', text: 'Plazmoliz: Hipertonik ortamda bitki hücresinin su kaybederek sitoplazmasının hücre çeperinden ayrılması (büzülme).' },
        { type: 'tip', text: 'Deplazmoliz: Plazmolize uğramış bir hücrenin hipotonik ortama konularak su alıp eski hâline dönmesi.' },
        { type: 'tip', text: 'Hemoliz: Hipotonik ortamdaki hayvan hücresinin (alyuvar) aşırı su alarak patlaması.' },
        { type: 'tip', text: 'Krenasyon: Hipertonik ortamdaki hayvan hücresinin su kaybederek büzülmesi.' },
        { type: 'tip', text: 'Seçici (Yarı) Geçirgen Zar: Bazı maddelerin geçişine izin verirken bazılarına izin vermeyen, hücre zarının temel özelliği.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.7-osmosis-L5',
    subtopicId: '9-2.7-osmosis',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Hipotonik ortam = az derişimli, hipertonik ortam = çok derişimli demek mutlak bir kavramdır."\n✅ Hipotonik ve hipertonik kavramları DAİMA KARŞILAŞTIRMALIDIR — bir ortam, başka bir ortama göre hipotonik veya hipertonik olabilir. "Mutlak hipotonik bir çözelti" diye bir şey yoktur.',
        },
        {
          type: 'warning',
          text: '❌ "Bitki hücresi hipotonik ortamda da hayvan hücresi gibi patlar."\n✅ Bitki hücresinde hücre çeperi (selüloz) bulunduğu için aşırı su girişinde hücre PATLAMAZ; turgor basıncı oluşur, hücre sertleşir (turgor hâli).',
        },
        {
          type: 'warning',
          text: '❌ "Plazmolize uğramış bir hücre artık ölmüştür, geri dönemez."\n✅ Plazmoliz geri dönüşümlü bir olaydır. Hücre hipotonik ortama alınırsa su tekrar girer ve deplazmoliz gerçekleşir — hücre canlıdır.',
        },
        {
          type: 'warning',
          text: '❌ "Ozmozda madde (çözünen) hareket eder."\n✅ Ozmozda hareket eden taneciğin SADECE SU olduğunu unutma. Çözünen madde (tuz, şeker vb.) zardan geçemediği için derişim farkı oluşur ve suyu hareket ettirir.',
        },
        {
          type: 'warning',
          text: '❌ "Difüzyon ile ozmoz aynı şeydir."\n✅ Ozmoz, difüzyonun SADECE SUYA ÖZGÜ ve SADECE SEÇİCİ GEÇİRGEN ZARDAN gerçekleşen özel bir hâlidir. Difüzyon her tanecik için, her ortamda (zarsız da olabilir) gerçekleşebilir.',
        },
        {
          type: 'warning',
          text: '❌ "Dinamik dengeye ulaşan hücrede su girişi-çıkışı tamamen durur."\n✅ Su molekülleri her iki yönde de hareket etmeye devam eder; sadece NET (toplam) su geçişi sıfırlanır, hücre hacmi sabitlenir.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.7-osmosis-L6',
    subtopicId: '9-2.7-osmosis',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavlarında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) Üç farklı derişimdeki çözeltiye (A, B, C) konan aynı tür hücrelerin (genelde patates/havuç dilimi veya alyuvar) kütle değişim grafiği verilip "hangisi hipotonik/hipertonik/izotonik ortamdır?" sorusu — kütle artan = hipotonik, kütle azalan = hipertonik, değişmeyen = izotonik.\n2) Plazmoliz-deplazmoliz şekilleri verilip sıralama veya yorum sorusu.\n3) Bitki ve hayvan hücresinin aynı hipotonik ortamdaki davranış farkını sorma (bitki turgor olur, hayvan patlar).\n4) "Ozmozla ilgili verilenlerden hangisi yanlıştır?" tarzı öncül sorular — "çözünen madde de zardan geçer" ifadesi her zaman yanlıştır.',
      aytPattern: 'AYT\'de bu konu, bitkilerde su ve mineral taşınması (kök basıncı, terleme), böbreklerde su geri emilimi (osmoregülasyon) ve hücre zarı taşıma sistemleriyle (aktif taşıma, endositoz) bütünleşik sorularla karşına çıkar. Ayrıca farklı tuz derişimlerinde tohum çimlenmesi gibi deney tasarımı soruları görülür.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: Bir hücre izotonik ortama konulduğunda "hiçbir su hareketi olmaz" denir ama doğrusu şudur: su molekülleri HER İKİ yöne de eşit hızda geçmeye devam eder, sadece NET geçiş sıfırdır. "Hareket durur" ifadesi yanlıştır.',
        },
        {
          type: 'important',
          text: 'Soğan zarı deneyinde plazmoliz mikroskopta gözlemlenirken sitoplazmanın hücre çeperinden ayrıldığı, ÇEPERİN ŞEKLİNİN değişmediği unutulmamalıdır — çeper sert ve esnemez, sadece içerideki zar/sitoplazma büzülür.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.7-osmosis-L7',
    subtopicId: '9-2.7-osmosis',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Ozmozu günlük hayattan ve laboratuvardan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🥒 Salatalık turşusu / salamura: Salatalıklar yoğun tuzlu suya (hipertonik ortam) konduğunda hücreleri su kaybeder, büzülür ve salatalıklar büzüşür/kıvamı değişir — plazmoliz olayının gerçek hayattaki örneğidir.',
        },
        {
          type: 'example',
          text: '🥬 Solmuş marulun canlanması: Buzdolabında solmuş bir marul yaprağı musluk suyuna (hipotonik ortam) bırakılırsa hücreler su alır, turgor basıncı oluşur ve yaprak yeniden dirileşir — deplazmoliz örneği.',
        },
        {
          type: 'example',
          text: '🩺 Serum (intravenöz sıvı): Hastalara verilen serumlar genellikle izotoniktir (%0,9 NaCl - serum fizyolojik), çünkü hipotonik serum alyuvarların şişip patlamasına (hemoliz), hipertonik serum ise büzülmesine (krenasyon) yol açar.',
        },
        {
          type: 'example',
          text: '🌱 Aşırı gübreleme sonucu bitkilerin solması: Toprağa çok fazla gübre (tuz) atıldığında toprak çözeltisi kök hücrelerine göre hipertonik hâle gelir; kökler su alamaz, hatta su kaybeder ve bitki solar/kurur — "gübre yanığı".',
        },
        {
          type: 'example',
          text: '🍇 Kuru üzüm/kuru kayısının suda şişmesi: Kurutulmuş meyveler suya bırakıldığında (hipotonik ortam), hücreleri ozmozla su alır ve meyveler şişerek eski hacimlerine yaklaşır.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.7-osmosis-L8',
    subtopicId: '9-2.7-osmosis',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.7-osmosis-L9',
    subtopicId: '9-2.7-osmosis',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Ozmoz ve Hücre Davranışları
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_7_osmosis: Flashcard[] = [
  { id: 'fc-9-2.7-osmosis-01', subtopicId: '9-2.7-osmosis', orderIndex: 1,
    term: 'Ozmoz', definition: 'Suyun seçici geçirgen zardan, su derişimi yüksek ortamdan düşük ortama geçişi', example: 'Suyun saf sudan tuzlu suya doğru zardan geçişi' },
  { id: 'fc-9-2.7-osmosis-02', subtopicId: '9-2.7-osmosis', orderIndex: 2,
    term: 'Hipotonik Ortam', definition: 'Karşılaştırılan ortama göre çözünen madde derişimi daha az olan ortam', example: 'Saf suyun, tuzlu suya göre hipotonik olması' },
  { id: 'fc-9-2.7-osmosis-03', subtopicId: '9-2.7-osmosis', orderIndex: 3,
    term: 'Hipertonik Ortam', definition: 'Karşılaştırılan ortama göre çözünen madde derişimi daha fazla olan ortam', example: 'Salamura suyunun hücre sıvısına göre hipertonik olması' },
  { id: 'fc-9-2.7-osmosis-04', subtopicId: '9-2.7-osmosis', orderIndex: 4,
    term: 'İzotonik Ortam', definition: 'İki ortamın çözünen madde derişiminin eşit olduğu, net su geçişinin olmadığı durum', example: 'Serum fizyolojik (%0,9 NaCl) ile kan plazması' },
  { id: 'fc-9-2.7-osmosis-05', subtopicId: '9-2.7-osmosis', orderIndex: 5,
    term: 'Turgor Basıncı', definition: 'Hipotonik ortamda su alan bitki hücresinde sitoplazmanın hücre çeperine yaptığı baskı', example: 'Sulanmış bir bitkinin yapraklarının dik durması' },
  { id: 'fc-9-2.7-osmosis-06', subtopicId: '9-2.7-osmosis', orderIndex: 6,
    term: 'Plazmoliz', definition: 'Hipertonik ortamda bitki hücresinin su kaybedip sitoplazmasının çeperden ayrılması', example: 'Tuzlu suya konan soğan zarı hücresinin büzülmesi' },
  { id: 'fc-9-2.7-osmosis-07', subtopicId: '9-2.7-osmosis', orderIndex: 7,
    term: 'Deplazmoliz', definition: 'Plazmolize uğramış hücrenin hipotonik ortamda su alarak eski hâline dönmesi', example: 'Plazmolize uğramış soğan hücresinin saf suya konunca eski hâline dönmesi' },
  { id: 'fc-9-2.7-osmosis-08', subtopicId: '9-2.7-osmosis', orderIndex: 8,
    term: 'Hemoliz', definition: 'Hipotonik ortamda hayvan hücresinin (alyuvar) aşırı su alarak patlaması', example: 'Alyuvarın saf suya konunca patlaması' },
  { id: 'fc-9-2.7-osmosis-09', subtopicId: '9-2.7-osmosis', orderIndex: 9,
    term: 'Krenasyon', definition: 'Hipertonik ortamda hayvan hücresinin su kaybederek büzülmesi', example: 'Alyuvarın yoğun tuzlu suya konunca büzülmesi' },
  { id: 'fc-9-2.7-osmosis-10', subtopicId: '9-2.7-osmosis', orderIndex: 10,
    term: 'Seçici (Yarı) Geçirgen Zar', definition: 'Bazı maddelerin geçişine izin verirken bazılarına izin vermeyen zar', example: 'Hücre zarı, diyaliz tüpü zarı' },
];
