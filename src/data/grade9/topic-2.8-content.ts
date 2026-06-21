import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Hücre, Doku, Organ ve Sistemlerin Organizasyonu (9BIO-2.8)
// Alt Konu: Organizasyon Düzeyleri (9-2.8-organization)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_8_organization: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.8-organization-L1',
    subtopicId: '9-2.8-organization',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Canlılarda yapı ve işlev, en küçük birimden en büyük bütüne doğru basamaklı (hiyerarşik) bir düzen içinde organize olmuştur. Bu organizasyon basamakları: Atom → Molekül → Organel → Hücre → Doku → Organ → Sistem → Organizma şeklinde sıralanır. Her basamak, kendinden bir önceki basamaktaki yapı taşlarından oluşur ve bir üst basamağa daha karmaşık bir işlev kazandırır. Tek hücreli canlılarda bu hiyerarşi hücre düzeyinde sona erer; çok hücreli canlılarda ise doku, organ ve sistem düzeylerine kadar genişler.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Organizasyon Basamakları: Atom → Molekül → Organel → Hücre → Doku → Organ → Sistem → Organizma. Her basamak bir öncekinin üzerine inşa edilir; bütün, parçaların toplamından daha fazlasını ifade eder.',
        },
        {
          type: 'tip',
          text: 'Hatırlama: "Atomlar Molekül olur, Moleküller Organeli, Organeller Hücreyi, Hücreler Dokuyu, Dokular Organı, Organlar Sistemi, Sistemler de Organizmayı oluşturur."',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.8-organization-L2',
    subtopicId: '9-2.8-organization',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-organizasyon-duzeyleri',
      body: 'Organizasyon basamaklarını bir insan vücudu örneği üzerinden piramit şeklinde düşünelim. En altta atomlar (C, H, O, N gibi) yer alır; bunlar birleşerek molekülleri (su, glikoz, protein, DNA) oluşturur. Moleküller bir araya gelerek hücre organellerini (mitokondri, çekirdek, ribozom) meydana getirir. Organeller bir hücre zarı içinde organize olduğunda HÜCRE oluşur — canlılığın en küçük yapısal ve işlevsel birimidir. Benzer yapı ve görevdeki hücreler bir araya gelerek DOKUyu, farklı dokular birleşerek belirli bir görevi yerine getiren ORGANı, ortak bir amaca hizmet eden organlar bir araya gelerek SİSTEMi ve tüm sistemler birlikte çalışarak bütün bir ORGANİZMAyı oluşturur.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'İNSAN örneği: Karbon atomu → Glikoz molekülü → Mitokondri organeli → Kas hücresi → Kas dokusu → Kalp organı → Dolaşım sistemi → İnsan organizması.',
        },
        {
          type: 'example',
          text: 'BİTKİ örneği: Karbon, hidrojen, oksijen atomları → Klorofil/Selüloz molekülü → Kloroplast organeli → Yaprak parankima hücresi → Temel doku → Yaprak organı → (bitkilerde sistem ayrımı insan kadar belirgin değildir, "kök sistemi/sürgün sistemi" denir) → Bitki organizması.',
        },
        {
          type: 'tip',
          text: 'Şema okuma ipucu: Bir basamak şeklinde verilen organizasyon görselinde, oklar her zaman "küçükten büyüğe / basitten karmaşığa" doğru ilerler. Tersi yönde bir soru (örneğin "organ hangi atomlardan oluşur?") da aynı hiyerarşi üzerinden, geriye doğru okunarak cevaplanır.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.8-organization-L3',
    subtopicId: '9-2.8-organization',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Organizasyon basamaklarının her birinin tanımı ve örnekleri:',
      steps: [
        '1. ATOM — Maddenin kimyasal özelliğini taşıyan en küçük yapı taşıdır. Canlı vücudunda en çok bulunan atomlar: C, H, O, N, P, S, Ca gibi.',
        '2. MOLEKÜL — İki veya daha fazla atomun kimyasal bağlarla birleşmesiyle oluşur. Örnek: su (H₂O), glikoz (C₆H₁₂O₆), protein, DNA, lipit.',
        '3. ORGANEL — Belirli moleküllerin (protein, lipit, nükleik asit) bir araya gelerek oluşturduğu, hücre içinde özel bir görevi olan yapılardır. Örnek: mitokondri (solunum/ATP üretimi), çekirdek (kalıtım materyali), ribozom (protein sentezi), kloroplast (fotosentez).',
        '4. HÜCRE — Organellerin bir hücre zarı (ve bitkilerde ayrıca hücre çeperi) içinde bir araya gelmesiyle oluşan, canlılığın en küçük yapısal ve işlevsel birimidir. Tek başına tüm yaşamsal faaliyetleri (beslenme, solunum, üreme vb.) gerçekleştirebilir.',
        '5. DOKU — Benzer yapı ve görevdeki hücrelerin bir araya gelerek belirli bir işlevi ortaklaşa yerine getirmesiyle oluşur. İnsanda 4 temel doku: epitel, bağ, kas, sinir dokusu. Bitkide: meristem, temel, iletim, örtü dokusu.',
        '6. ORGAN — Birden fazla dokunun belirli bir görevi yerine getirmek üzere bir araya gelmesiyle oluşur. Örnek: kalp (kas, bağ, sinir, epitel dokuları birlikte çalışır → kan pompalama), yaprak (epidermis, parankima, iletim dokusu birlikte → fotosentez ve madde taşınması).',
        '7. SİSTEM — Ortak bir amaca hizmet eden organların bir araya gelmesiyle oluşur. Örnek: Dolaşım sistemi (kalp, damarlar, kan → madde taşınması), Sindirim sistemi (ağız, mide, ince bağırsak, karaciğer, pankreas → besinlerin sindirimi).',
        '8. ORGANİZMA — Tüm sistemlerin uyum içinde, birbirini tamamlayarak çalışmasıyla ortaya çıkan bütün canlı varlıktır. Bir sistemdeki aksaklık, diğer sistemleri ve dolayısıyla tüm organizmayı etkiler (bütüncül sistem).',
        '9. TEK HÜCRELİ vs ÇOK HÜCRELİ FARKI — Tek hücreli canlılarda (bakteri, amip, öglena, paramesyum) hiyerarşi HÜCRE düzeyinde durur; tek bir hücre, beslenme, solunum, boşaltım, üreme gibi tüm yaşamsal işlevleri kendi başına gerçekleştirir. Çok hücreli canlılarda ise iş bölümü vardır: farklı hücre grupları farklı görevlere özelleşmiştir (hücre farklılaşması) ve doku-organ-sistem düzeylerine kadar organizasyon devam eder.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.8-organization-L4',
    subtopicId: '9-2.8-organization',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Atom: Maddenin kimyasal özelliğini taşıyan en küçük birimi (C, H, O, N, P, S, Ca).' },
        { type: 'tip', text: 'Molekül: İki veya daha fazla atomun birleşmesiyle oluşan yapı (su, glikoz, protein, DNA, lipit).' },
        { type: 'tip', text: 'Organel: Hücre içinde belirli bir görevi olan, moleküllerden oluşan yapı (mitokondri, çekirdek, ribozom, kloroplast).' },
        { type: 'tip', text: 'Hücre: Canlılığın en küçük yapısal ve işlevsel (fonksiyonel) birimi.' },
        { type: 'tip', text: 'Doku: Benzer yapı ve görevdeki hücrelerin oluşturduğu topluluk (epitel, bağ, kas, sinir dokusu — insanda).' },
        { type: 'tip', text: 'Organ: Belirli bir görevi yerine getirmek üzere bir araya gelen farklı dokuların oluşturduğu yapı (kalp, mide, yaprak, kök).' },
        { type: 'tip', text: 'Sistem: Ortak bir amaca hizmet eden organların oluşturduğu bütün (dolaşım sistemi, sindirim sistemi, sinir sistemi).' },
        { type: 'tip', text: 'Organizma: Tüm sistemlerin uyum içinde çalışmasıyla oluşan bütün canlı.' },
        { type: 'tip', text: 'Hücre Farklılaşması: Çok hücreli canlılarda hücrelerin belirli görevlere özelleşmesi (örn. kas hücresi, sinir hücresi).' },
        { type: 'tip', text: 'Tek Hücreli Canlı: Tüm yaşamsal işlevlerini tek bir hücre ile gerçekleştiren canlı (bakteri, amip, öglena, maya).' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.8-organization-L5',
    subtopicId: '9-2.8-organization',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Organizasyon basamakları her canlıda aynı sayıda ve aynı şekilde gerçekleşir."\n✅ Tek hücreli canlılarda hiyerarşi HÜCRE düzeyinde sona erer; doku, organ, sistem düzeyleri YOKTUR. Bu canlılarda tek hücre tüm işlevleri (beslenme, solunum, üreme, boşaltım) kendisi yapar.',
        },
        {
          type: 'warning',
          text: '❌ "Bir organ tek bir dokudan oluşur."\n✅ Organlar genellikle BİRDEN FAZLA doku türünün bir araya gelmesiyle oluşur. Örneğin kalp; kas dokusu, bağ dokusu, sinir dokusu ve epitel dokusunu (endokardiyum) birlikte içerir.',
        },
        {
          type: 'warning',
          text: '❌ "Organeller hücreden büyüktür ya da hücreyle aynı düzeydedir."\n✅ Organeller, hücrenin İÇİNDE yer alan, hücreden daha küçük yapılardır. Hiyerarşide organel < hücre şeklindedir.',
        },
        {
          type: 'warning',
          text: '❌ "Sistemler birbirinden bağımsız, ayrı ayrı çalışır."\n✅ Sistemler birbirleriyle sürekli etkileşim hâlindedir (bütüncül sistem). Örneğin sindirim sisteminde emilen besinler dolaşım sistemiyle taşınır, boşaltım sistemiyle atıklar uzaklaştırılır — biri aksarsa diğerleri de etkilenir.',
        },
        {
          type: 'warning',
          text: '❌ "Bitkilerde de insandaki gibi \'sistem\' kavramı birebir aynı şekilde kullanılır."\n✅ Bitkilerde organ düzeyi (kök, gövde, yaprak, çiçek) belirgindir ancak "sistem" kavramı insandaki kadar net ayrışmaz; genellikle "kök sistemi" ve "sürgün (gövde-yaprak) sistemi" gibi daha genel gruplamalar yapılır.',
        },
        {
          type: 'warning',
          text: '❌ "Doku, aynı tür hücrelerin rastgele bir araya gelmesidir."\n✅ Doku oluşumu rastgele değildir; hücreler ORTAK bir görevi yerine getirmek üzere belirli bir düzen ve organizasyonla bir araya gelir (örneğin kas dokusundaki hücreler kasılma için özel olarak dizilmiştir).',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.8-organization-L6',
    subtopicId: '9-2.8-organization',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdaki organizasyon basamaklarını küçükten büyüğe sıralayınız" tarzı sıralama soruları (atom, doku, organ, hücre, sistem, molekül, organizma, organel karışık verilir).\n2) Bir organ veya sistem örneği verilip "bu hangi organizasyon basamağına aittir?" sorusu (örn. "mide" → organ, "sindirim sistemi" → sistem).\n3) "Tek hücreli canlılarda hangi organizasyon basamağı bulunmaz?" → doku, organ, sistem (hücre düzeyinde kalır).\n4) Verilen öncüllerde (I, II, III) doku-organ-sistem örneklerinin doğru eşleştirilip eşleştirilmediğinin sorgulanması.\n5) İnsan vücudundaki bir sistemin (örn. dolaşım, sindirim, solunum, boşaltım, sinir, endokrin) görevini organlarıyla ilişkilendirme.',
      aytPattern: 'AYT\'de bu konu doğrudan az sorulur; ancak organ-sistem işlevleri, fizyoloji konularının (sindirim, dolaşım, solunum, boşaltım, sinir-endokrin sistem) temelini oluşturduğu için dolaylı olarak her zaman karşına çıkar.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: "Organizmadan organele doğru" sıralama istenirse basamaklar TERS sırada yazılmalıdır: Organizma → Sistem → Organ → Doku → Hücre → Organel → Molekül → Atom. Soru kökünü dikkatli oku; "küçükten büyüğe" mi "büyükten küçüğe" mi isteniyor?',
        },
        {
          type: 'important',
          text: 'Tek hücreli canlı (örn. amip, paramesyum, öglena, bakteri) örneği verilip "bu canlıda hangi organizasyon düzeyleri görülür?" sorusunda doğru cevap: atom, molekül, organel, hücre — DOKU, ORGAN, SİSTEM YOKTUR.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.8-organization-L7',
    subtopicId: '9-2.8-organization',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Organizasyon düzeylerini günlük hayattan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🏃 Egzersiz sırasında sistemler birlikte çalışır: Koşarken kas dokusu (organ: bacak kasları) enerji ihtiyacı duyar → solunum sistemi O₂ alımını artırır → dolaşım sistemi kanı hızlandırır → boşaltım sistemi terlemeyle ısı/atık dengeler. Tüm sistemler tek bir amaç (hareket) için koordineli çalışır.',
        },
        {
          type: 'example',
          text: '🧱 LEGO benzetmesi: Atomlar tek tek LEGO parçaları gibidir; moleküller bu parçalardan yapılan küçük gruplar; organeller bu gruplardan oluşan bölümler; hücre tamamlanmış küçük bir model; dokular aynı modellerin bir araya gelmesi; organ ve sistemler ise modellerin oluşturduğu büyük bir şehir (organizma).',
        },
        {
          type: 'example',
          text: '🦠 Amip (tek hücreli) ile insan (çok hücreli) karşılaştırması: Amip, tek hücresiyle hem besin alır hem sindirir hem boşaltım yapar hem ürer. İnsanda ise bu görevler ayrı sistemlere (sindirim, boşaltım, üreme sistemleri) dağılmıştır — iş bölümü sayesinde daha karmaşık ve verimli yaşam mümkün olur.',
        },
        {
          type: 'example',
          text: '🌳 Bir ağaç örneği: Kök hücreleri → kök dokusu (emici doku) → kök organı → su ve mineral alımını sağlayan "kök sistemi". Yapraktaki kloroplast organeli → fotosentez yapan parankima hücreleri → temel doku → yaprak organı → fotosentez ve gaz alışverişini sağlayan "sürgün sistemi"nin parçası.',
        },
        {
          type: 'example',
          text: '🏥 Hastalıkların organizasyon düzeyiyle ilişkisi: Bir gen (molekül düzeyinde DNA) mutasyonu, bir organelin (örn. mitokondri) çalışmasını bozabilir; bu da hücreyi, hücre dokuyu, doku organı, organ ise sistemi etkileyerek tüm organizmada (örneğin kalp yetmezliği) belirti verebilir — bütüncül etkiyi gösterir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.8-organization-L8',
    subtopicId: '9-2.8-organization',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.8-organization-L9',
    subtopicId: '9-2.8-organization',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Organizasyon Düzeyleri
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_8_organization: Flashcard[] = [
  { id: 'fc-9-2.8-organization-01', subtopicId: '9-2.8-organization', orderIndex: 1,
    term: 'Organizasyon Basamakları', definition: 'Atom → Molekül → Organel → Hücre → Doku → Organ → Sistem → Organizma şeklindeki hiyerarşik düzen', example: 'Karbon atomu → Glikoz → Mitokondri → Kas hücresi → Kas dokusu → Kalp → Dolaşım sistemi → İnsan' },
  { id: 'fc-9-2.8-organization-02', subtopicId: '9-2.8-organization', orderIndex: 2,
    term: 'Atom', definition: 'Maddenin kimyasal özelliğini taşıyan en küçük yapı taşı', example: 'Karbon (C), Hidrojen (H), Oksijen (O), Azot (N)' },
  { id: 'fc-9-2.8-organization-03', subtopicId: '9-2.8-organization', orderIndex: 3,
    term: 'Molekül', definition: 'İki veya daha fazla atomun kimyasal bağlarla birleşmesiyle oluşan yapı', example: 'Su (H₂O), glikoz, protein, DNA' },
  { id: 'fc-9-2.8-organization-04', subtopicId: '9-2.8-organization', orderIndex: 4,
    term: 'Organel', definition: 'Hücre içinde belirli bir görevi olan, moleküllerden oluşan yapı', example: 'Mitokondri, çekirdek, ribozom, kloroplast' },
  { id: 'fc-9-2.8-organization-05', subtopicId: '9-2.8-organization', orderIndex: 5,
    term: 'Hücre', definition: 'Canlılığın en küçük yapısal ve işlevsel birimi', example: 'Kas hücresi, sinir hücresi, alyuvar' },
  { id: 'fc-9-2.8-organization-06', subtopicId: '9-2.8-organization', orderIndex: 6,
    term: 'Doku', definition: 'Benzer yapı ve görevdeki hücrelerin bir araya gelmesiyle oluşan topluluk', example: 'Kas dokusu, sinir dokusu, epitel dokusu' },
  { id: 'fc-9-2.8-organization-07', subtopicId: '9-2.8-organization', orderIndex: 7,
    term: 'Organ', definition: 'Birden fazla dokunun belirli bir görevi yerine getirmek üzere bir araya gelmesi', example: 'Kalp, mide, yaprak, kök' },
  { id: 'fc-9-2.8-organization-08', subtopicId: '9-2.8-organization', orderIndex: 8,
    term: 'Sistem', definition: 'Ortak bir amaca hizmet eden organların bir araya gelmesiyle oluşan bütün', example: 'Dolaşım sistemi, sindirim sistemi, sinir sistemi' },
  { id: 'fc-9-2.8-organization-09', subtopicId: '9-2.8-organization', orderIndex: 9,
    term: 'Organizma', definition: 'Tüm sistemlerin uyum içinde çalışmasıyla oluşan bütün canlı', example: 'İnsan, bir ağaç, bir kelebek' },
  { id: 'fc-9-2.8-organization-10', subtopicId: '9-2.8-organization', orderIndex: 10,
    term: 'Hücre Farklılaşması', definition: 'Çok hücreli canlılarda hücrelerin belirli görevlere özelleşmesi', example: 'Bir kök hücrenin kas hücresine veya sinir hücresine dönüşmesi' },
  { id: 'fc-9-2.8-organization-11', subtopicId: '9-2.8-organization', orderIndex: 11,
    term: 'Tek Hücreli Canlı', definition: 'Tüm yaşamsal işlevlerini tek bir hücreyle gerçekleştiren, dokusu/organı/sistemi olmayan canlı', example: 'Amip, paramesyum, öglena, bakteri' },
];
