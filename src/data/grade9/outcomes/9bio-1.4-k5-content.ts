import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-properties';

export const layers_9bio_1_4_k5: LessonLayer[] = [
  {
    id: '9bio-1.4-k5-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Canlılar büyüme, hareket, madde taşıma, onarım, sentez ve iç dengenin sürdürülmesi gibi yaşam faaliyetleri için enerji kullanır. Besinlerdeki kimyasal enerji, hücresel solunumla hücrenin kullanabileceği ATP enerjisine dönüştürülür.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Beslenme besinin elde edilmesidir; hücresel solunum besindeki enerjinin kullanılabilir hale getirilmesidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k5-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k5-infographic',
      body: 'Bu kazanım için dairesel enerji akışı görseli kullanılabilir: Besinler -> Hücresel solunum -> ATP -> Yaşam faaliyetleri -> Artan enerji ihtiyacı. Yaşam faaliyetleri bölümünde hareket, aktif taşıma, biyosentez, büyüme, onarım ve homeostazi ikonları yer alabilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Görselde besinlerdeki kimyasal enerjinin ATP’ye dönüştüğü ve ATP’nin farklı yaşam faaliyetlerinde tüketildiği gösterilir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k5-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Enerji üretme ve tüketme ilişkisi şu sırayla açıklanabilir:',
      steps: [
        '1. Canlı besin veya besin yapı taşlarına ulaşır.',
        '2. Besinlerde kimyasal enerji bulunur.',
        '3. Hücresel solunum bu kimyasal enerjiyi ATP’ye dönüştürür.',
        '4. ATP hücrede kısa süreli kullanılabilir enerji taşıyıcısıdır.',
        '5. Hücre ATP’yi hareket, madde taşınması, sentez, büyüme ve onarım gibi olaylarda tüketir.',
        '6. Yaşam faaliyetleri arttığında hücrenin ATP ihtiyacı da artar.',
        '7. Enerji üretimi ve tüketimi birlikte yaşam faaliyetlerinin sürmesini sağlar.',
      ],
    },
  },
  {
    id: '9bio-1.4-k5-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu kazanımda enerji ilişkisini açıklayan temel kavramlar:',
      highlightBoxes: [
        { type: 'tip', text: 'Hücresel solunum: Besinlerdeki kimyasal enerjinin ATP’ye dönüştürülmesidir.' },
        { type: 'tip', text: 'ATP: Hücrede kullanılabilir enerji taşıyan moleküldür.' },
        { type: 'tip', text: 'Enerji üretimi: Besindeki enerjinin hücre tarafından kullanılabilir hale getirilmesidir.' },
        { type: 'tip', text: 'Enerji tüketimi: ATP’nin yaşam faaliyetlerinde kullanılmasıdır.' },
        { type: 'tip', text: 'Oksijenli solunum: Oksijen kullanılarak enerji elde edilmesidir.' },
        { type: 'tip', text: 'Oksijensiz enerji elde etme: Oksijen kullanılmadan ATP elde edilmesine yönelik temel düzey açıklamadır.' },
        { type: 'tip', text: 'Gaz alışverişi: Solunum sisteminde oksijen ve karbondioksit değişimidir; hücresel solunumla aynı şey değildir.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k5-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Enerji ve solunumla ilgili sık görülen yanılgılar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Solunum yalnızca nefes alıp vermektir. Doğrusu: Hücresel solunum besinlerden ATP elde edilmesidir; nefes alma gaz alışverişidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Sadece hayvanlar enerji üretir. Doğrusu: Bitkiler, mantarlar, bakteriler ve hayvanlar yaşam faaliyetleri için enerji üretir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Ototrof canlılar solunum yapmaz. Doğrusu: Ototrof canlılar besin üretebilir ama bu besinden ATP elde etmek için solunum yapar.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Enerji yalnızca hareket için kullanılır. Doğrusu: Enerji büyüme, onarım, madde taşınması, sentez ve homeostazi gibi birçok olayda kullanılır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k5-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle solunum-nefes alma ayrımı, ATP’nin görevi ve enerjinin hangi yaşam faaliyetlerinde kullanıldığı üzerinden sorulur.',
      tytPattern: 'Soru kökünde "besindeki enerjinin kullanılabilir hale gelmesi" deniyorsa hücresel solunum; "enerjinin hareket, büyüme veya madde taşınmasında kullanılması" deniyorsa enerji tüketimi aranır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Ototrof-heterotrof ayrımı besinin nasıl elde edildiğiyle; solunum ise besinden enerji elde edilmesiyle ilgilidir.',
        },
        {
          type: 'tip',
          text: 'Fotosentez besin üretir, hücresel solunum ATP üretir, nefes alma ise gaz alışverişidir. Bu üç kavram aynı süreç değildir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k5-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Günlük yaşam ve biyolojik olaylarda enerji ilişkisi kolay gözlenir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Koşan bir öğrencinin kas hücreleri daha fazla ATP tüketir; bu nedenle enerji ihtiyacı artar.',
        },
        {
          type: 'example',
          text: 'Yoğun egzersiz sırasında sporcular daha hızlı nefes alır. Bunun nedeni yalnızca gaz alışverişi değildir; kas hücrelerinin artan ATP ihtiyacı için daha fazla oksijene ve enerji üretimine ihtiyaç duyulmasıdır.',
        },
        {
          type: 'example',
          text: 'Çimlenen bir tohum büyümeye başlarken depoladığı besinlerdeki enerjiyi ATP’ye dönüştürür.',
        },
        {
          type: 'example',
          text: 'Bitki gündüz fotosentezle besin üretebilir, ancak hem gündüz hem gece hücresel solunumla ATP üretir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k5-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: Bir kas hücresinin kasılması, bir kök hücresinin mineral alması ve bir yaranın onarılması enerji tüketimi gerektirir mi?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap: Evet. Hareket, aktif madde taşınması ve onarım ATP tüketen yaşam faaliyetleridir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k5-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Bu kazanımı tamamlayan öğrenci, hücresel solunumun ATP üretimiyle ilişkisini açıklayabilmeli ve ATP’nin hangi yaşam faaliyetlerinde tüketildiğini örneklerle ilişkilendirebilmelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Başarı ölçütü: Öğrenci enerji üretimini "ATP elde etme", enerji tüketimini ise "ATP’yi yaşam faaliyetlerinde kullanma" olarak ayırt eder.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k5: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k5-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Hücresel Solunum',
    definition: 'Besinlerdeki kimyasal enerjinin ATP’ye dönüştürülmesidir.',
    example: 'Kas hücreleri hareket için gerekli ATP’yi hücresel solunumla sağlar.',
  },
  {
    id: 'fc-9bio-1.4-k5-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'ATP',
    definition: 'Hücrede kısa süreli kullanılabilir enerji taşıyan moleküldür.',
    example: 'Aktif taşıma ve kas kasılması sırasında ATP tüketilir.',
  },
  {
    id: 'fc-9bio-1.4-k5-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Enerji Üretimi',
    definition: 'Besinlerdeki enerjinin hücre tarafından kullanılabilir hale getirilmesidir.',
    example: 'Besindeki kimyasal enerjinin ATP’ye dönüştürülmesi enerji üretimidir.',
  },
  {
    id: 'fc-9bio-1.4-k5-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Enerji Tüketimi',
    definition: 'ATP’nin yaşam faaliyetlerinde kullanılmasıdır.',
    example: 'Büyüme, onarım, hareket ve madde taşınması enerji tüketir.',
  },
  {
    id: 'fc-9bio-1.4-k5-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Oksijenli Solunum',
    definition: 'Oksijen kullanılarak besinlerden ATP elde edilmesidir.',
    example: 'İnsan hücreleri çoğu durumda oksijenli solunumla ATP üretir.',
  },
  {
    id: 'fc-9bio-1.4-k5-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Gaz Alışverişi',
    definition: 'Canlılarda oksijen ve karbondioksit değişimidir; hücresel solunumla aynı şey değildir.',
    example: 'Spor yaparken nefes alıp verme hızının artması gaz alışverişiyle ilgilidir; ATP üretimi ise hücresel solunumla gerçekleşir.',
  },
];
