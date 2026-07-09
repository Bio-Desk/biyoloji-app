import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.2-scientific-method';

export const layers_9bio_1_2_k6: LessonLayer[] = [
  {
    id: '9bio-1.2-k6-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Hipotez ve tahmin bilimsel araştırmada birbiriyle ilişkili fakat aynı anlama gelmeyen iki kavramdır. Hipotez, bir probleme yönelik geçici ve test edilebilir açıklamadır. Tahmin ise hipotez doğruysa araştırmada ne gözlenmesinin beklendiğini ifade eder.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Hipotez "neden olabilir?" sorusuna açıklama getirir; tahmin "hipotez doğruysa ne beklenir?" sorusuna cevap verir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k6-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.2-k6-infographic',
      body: 'Bu kazanım için iki parçalı karşılaştırma şeması kullanılabilir: Problem -> Hipotez -> Tahmin. Örnek: "Bitki yaprakları neden sarardı?" problemi için hipotez "Bitki yeterli ışık alamadığı için sararmış olabilir"; tahmin ise "Bitki daha aydınlık ortama alınırsa yeni yaprakları daha sağlıklı gelişir" şeklinde gösterilebilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Görselde hipotez açıklama, tahmin beklenen sonuç olarak ayrı renkte gösterilmelidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k6-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Hipotez ve tahmin arasındaki ilişki şu düşünme akışıyla anlaşılabilir:',
      steps: [
        '1. Önce araştırılacak problem belirlenir.',
        '2. Probleme yönelik geçici ve test edilebilir açıklama kurulur; bu hipotezdir.',
        '3. Hipotez doğru kabul edilirse ne gözlenmesi beklendiği ifade edilir; bu tahmindir.',
        '4. Tahmin genellikle "Eğer hipotez doğruysa, şu durum gözlenir" mantığıyla kurulur.',
        '5. Araştırma veya deney sonucu, tahminin gerçekleşip gerçekleşmediğini kontrol etmeye yardım eder.',
        '6. Tahmin desteklenirse hipotez güçlenebilir; desteklenmezse hipotez gözden geçirilebilir.',
      ],
    },
  },
  {
    id: '9bio-1.2-k6-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu kazanımda şu kavramları net ayırt etmek önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Hipotez: Probleme yönelik geçici, mantıklı ve test edilebilir açıklamadır.' },
        { type: 'tip', text: 'Tahmin: Hipotez doğruysa beklenen olay veya sonucun ifade edilmesidir.' },
        { type: 'tip', text: 'Test edilebilirlik: Hipotezin gözlem veya deneyle sınanabilir olmasıdır.' },
        { type: 'tip', text: 'Beklenen sonuç: Tahminin araştırma sonunda gözlenmesi beklenen durumudur.' },
        { type: 'tip', text: 'Desteklenme: Araştırma bulgularının hipotezle uyumlu olmasıdır.' },
        { type: 'tip', text: 'Gözden geçirme: Bulgular desteklemezse hipotezin yeniden değerlendirilmesidir.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k6-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Hipotez ve tahmin konusunda sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Hipotez ve tahmin aynı şeydir. Doğrusu: Hipotez açıklama, tahmin ise beklenen sonuçtur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Hipotez kesin doğru bilgidir. Doğrusu: Hipotez test edilmesi gereken geçici açıklamadır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Tahmin rastgele tahmindir. Doğrusu: Bilimsel tahmin hipoteze dayanır ve araştırmayla kontrol edilebilir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Tahmin gerçekleşmezse araştırma değersizdir. Doğrusu: Tahmin desteklenmezse hipotez gözden geçirilir ve yeni sorular oluşabilir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k6-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle bir senaryo içinde hipotez veya tahmin cümlesini ayırt ettirir. Hipotez neden-sonuç ilişkisi kuran açıklamadır; tahmin ise hipotez doğruysa beklenen gözlem veya sonucu söyler.',
      tytPattern: 'Cümlede "olabilir", "nedeni olabilir" gibi açıklama varsa hipoteze; "olursa ... gözlenir", "artarsa ... beklenir" gibi beklenen sonuç varsa tahmine dikkat et.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınavda hipotezi açıklama, tahmini beklenen sonuç olarak düşün.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k6-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Hipotez ve tahmin günlük biyolojik gözlemlerde kolayca ayırt edilebilir.',
      highlightBoxes: [
        { type: 'example', text: 'Gözlem: Bir bitkinin yaprakları sararmıştır.' },
        { type: 'example', text: 'Problem: Bitkinin yaprakları neden sarardı?' },
        { type: 'example', text: 'Hipotez: Bitki yeterli ışık alamadığı için yaprakları sararmış olabilir.' },
        { type: 'example', text: 'Tahmin: Bitki daha aydınlık bir yere alınırsa yeni yaprakları daha sağlıklı gelişir.' },
        {
          type: 'example',
          text: 'Beslenme örneği: Bir besinin sıcak ortamda daha hızlı bozulduğu düşünülüyorsa hipotez sıcaklığın mikroorganizmaların çoğalmasını hızlandırdığı, tahmin ise sıcak ortamda bekletilen besinin daha kısa sürede bozulacağıdır.',
        },
        {
          type: 'example',
          text: 'İnsan sağlığı örneği: Düzenli uykunun dikkat süresini artırdığı hipotezse, tahmin yeterli uyuyan öğrencilerin dikkat testinde daha iyi performans göstermesidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k6-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) "Bitki az ışık aldığı için sararmış olabilir" hipotez mi tahmin mi? 2) "Bitki aydınlık ortama alınırsa yeni yaprakları sağlıklı gelişir" hipotez mi tahmin mi? 3) Hipotez neden test edilebilir olmalıdır? 4) Tahmin neden hipoteze dayanmalıdır?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında hipotezi açıklama, tahmini beklenen sonuç olarak ayır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k6-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Verilen bir biyolojik senaryoda hipotez cümlesini ve tahmin cümlesini ayırt edebiliyor; hipotezin probleme yönelik test edilebilir açıklama, tahminin ise hipoteze dayalı beklenen sonuç olduğunu açıklayabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Hipotez açıklamadır; tahmin hipoteze bağlı beklenen sonuçtur.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_2_k6: Flashcard[] = [
  {
    id: 'fc-9bio-1.2-k6-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Hipotez',
    definition: 'Bir probleme yönelik geçici, mantıklı ve test edilebilir açıklamadır.',
    example: 'Bitkinin yaprakları yeterli ışık alamadığı için sararmış olabilir.',
  },
  {
    id: 'fc-9bio-1.2-k6-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Tahmin',
    definition: 'Hipotez doğruysa araştırmada gözlenmesi beklenen durumdur.',
    example: 'Bitki daha aydınlık ortama alınırsa yeni yaprakları daha sağlıklı gelişir.',
  },
  {
    id: 'fc-9bio-1.2-k6-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Test Edilebilir Açıklama',
    definition: 'Gözlem veya deneyle kontrol edilebilen hipotez özelliğidir.',
    example: 'Işık miktarının bitki gelişimiyle ilişkili olduğunu araştırmak.',
  },
  {
    id: 'fc-9bio-1.2-k6-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Beklenen Sonuç',
    definition: 'Hipoteze dayanarak araştırma sonunda gözlenmesi beklenen durumdur.',
    example: 'Aydınlık ortamda tutulan bitkinin yeni yapraklarının daha yeşil olması.',
  },
  {
    id: 'fc-9bio-1.2-k6-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Hipotez-Tahmin İlişkisi',
    definition: 'Tahmin, hipotezden yola çıkarak oluşturulan beklenen sonuç ifadesidir.',
    example: 'Hipotez ışık eksikliğiyse, tahmin ışık artırıldığında gelişimin düzeleceğidir.',
  },
  {
    id: 'fc-9bio-1.2-k6-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Hipotezi Gözden Geçirme',
    definition: 'Bulgular hipotezi desteklemezse açıklamanın yeniden değerlendirilmesidir.',
    example: 'Işık artırıldığı hâlde yapraklar sararmaya devam ederse su veya mineral eksikliği araştırılır.',
  },
];
