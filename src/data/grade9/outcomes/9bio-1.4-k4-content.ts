import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-properties';

export const layers_9bio_1_4_k4: LessonLayer[] = [
  {
    id: '9bio-1.4-k4-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Beslenme, canlıların madde ve enerji ihtiyacını karşılamasıdır. Canlılar besin elde etme biçimlerine göre ototrof ve heterotrof olarak iki ana grupta incelenir. Ototrof canlılar kendi organik besinini üretir; heterotrof canlılar ise organik besini dışarıdan hazır alır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Ayırt edici soru şudur: Canlı kendi organik besinini üretiyor mu, yoksa hazır organik besin mi alıyor?',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k4-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k4-infographic',
      body: 'Bu kazanım için karar ağacı biçiminde bir görsel kullanılabilir. Merkez soru: "Canlı kendi organik besinini üretebilir mi?" Evet yanıtı ototrof, hayır yanıtı heterotrof beslenmeye götürür.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Ototrof örnekleri: bitki, alg, fotosentetik bakteri. Heterotrof örnekleri: insan, mantar, aslan, çoğu bakteri. Küçük hatırlatma: Ototrof canlılar da hücresel solunum yapar.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k4-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bir canlının beslenme biçimi şu akışla belirlenebilir:',
      steps: [
        '1. Canlının organik besini kendisinin üretip üretmediği sorulur.',
        '2. Kendi organik besinini üretiyorsa ototrof olarak değerlendirilir.',
        '3. Ototrof canlılar fotosentez veya kemosentez yoluyla besin üretebilir.',
        '4. Besinini başka canlılardan veya organik maddelerden hazır alıyorsa heterotroftur.',
        '5. Hayvanlar, mantarlar ve çoğu bakteri heterotrof beslenir.',
        '6. Üretici-tüketici ayrımı yapılırken temel ölçüt besinin nasıl elde edildiğidir.',
      ],
    },
  },
  {
    id: '9bio-1.4-k4-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Ototrof ve heterotrof beslenmeyi ayırt etmek için şu kavramlar önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Beslenme: Canlının madde ve enerji ihtiyacını karşılamasıdır.' },
        { type: 'tip', text: 'Ototrof: Kendi organik besinini üretebilen canlıdır.' },
        { type: 'tip', text: 'Heterotrof: Organik besinini dışarıdan hazır alan canlıdır.' },
        { type: 'tip', text: 'Fotosentez: Işık enerjisi kullanılarak organik besin üretilmesidir.' },
        { type: 'tip', text: 'Kemosentez: Kimyasal enerji kullanılarak organik besin üretilmesidir.' },
        { type: 'tip', text: 'Üretici: Ekosistemde kendi besinini üreten canlıdır.' },
        { type: 'tip', text: 'Tüketici: Besinini başka canlılardan hazır alan canlıdır.' },
        { type: 'tip', text: 'Ayrıştırıcı: Ölü organizma ve atıklardaki organik maddeleri kullanan heterotrof canlıdır.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k4-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Ototrof ve heterotrof beslenmeyle ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Ototrof canlılar hiç dış ortamdan madde almaz. Doğrusu: Ototrof canlılar su, mineral ve karbondioksit gibi maddeleri dış ortamdan alır; organik besini kendileri üretir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Heterotrof canlılar enerji üretmez. Doğrusu: Heterotrof canlılar besini hazır alır, ancak bu besinden enerji elde etmek için solunum yapabilir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bütün bakteriler heterotroftur. Doğrusu: Bazı bakteriler fotosentez veya kemosentez yaparak ototrof beslenebilir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Mantarlar bitki gibi ototroftur. Doğrusu: Mantarlar klorofil taşımaz ve besinini hazır aldığı için heterotroftur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Beslenme ve solunum aynı süreçtir. Doğrusu: Beslenme besinin elde edilmesidir; hücresel solunum ise besindeki enerjinin kullanılabilir hale getirilmesidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k4-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle örnek canlıların ototrof veya heterotrof olarak sınıflandırılmasıyla sorulur.',
      tytPattern: 'Bitki, alg ve bazı bakteriler ototrof; hayvan, mantar ve çoğu bakteri heterotrof örnekleri olarak verilebilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: Ototrof canlılar da solunum yapar. Ototrof olmak besin üretme biçimiyle ilgilidir; solunum yapıp yapmamakla karıştırılmamalıdır.',
        },
        {
          type: 'tip',
          text: 'Beslenme besinin elde edilmesi, hücresel solunum ise besinden enerji elde edilmesidir. Bu ayrım özellikle seçenek elemede işe yarar.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k4-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Günlük yaşamda ototrof ve heterotrof beslenme ayrımı kolay gözlenebilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bir saksı bitkisi ışık, su ve karbondioksit kullanarak kendi organik besinini üretir; bu nedenle ototroftur.',
        },
        {
          type: 'example',
          text: 'Yeşil bitkiler ototrof olsa da gübre ve minerallere ihtiyaç duyar. Çünkü ototrof olmak, organik besini üretmek anlamına gelir; su ve mineral gibi inorganik maddeleri dış ortamdan alma ihtiyacını ortadan kaldırmaz.',
        },
        {
          type: 'example',
          text: 'Bir insan, elma veya ekmek gibi hazır organik besinleri dışarıdan alır; bu nedenle heterotroftur.',
        },
        {
          type: 'example',
          text: 'Mantarlar toprağın veya organik artıkların üzerindeki hazır organik maddeleri kullanır; bu nedenle bitkiye benzese de heterotroftur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k4-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: Bitki, mantar, alg, insan ve fotosentetik bakteri örneklerini ototrof veya heterotrof olarak sınıflandır.',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap: Bitki, alg ve fotosentetik bakteri ototrof; mantar ve insan heterotroftur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k4-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Bu kazanımı tamamlayan öğrenci, ototrof ve heterotrof beslenmeyi tanımlayabilmeli, örnek canlıları doğru sınıflandırabilmeli ve mantarların neden heterotrof olduğunu açıklayabilmelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Başarı ölçütü: Öğrenci "kendi organik besinini üretme" ile "hazır organik besin alma" ayrımını doğru kurar.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k4: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k4-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Beslenme',
    definition: 'Canlıların madde ve enerji ihtiyacını karşılamasıdır.',
    example: 'Bitkilerin besin üretmesi, insanların besinleri dışarıdan alması beslenmeye örnektir.',
  },
  {
    id: 'fc-9bio-1.4-k4-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Ototrof Beslenme',
    definition: 'Canlının kendi organik besinini üretebilmesidir.',
    example: 'Yeşil bitkilerin fotosentezle glikoz üretmesi ototrof beslenmedir.',
  },
  {
    id: 'fc-9bio-1.4-k4-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Heterotrof Beslenme',
    definition: 'Canlının organik besinini dışarıdan hazır almasıdır.',
    example: 'İnsanların, hayvanların ve mantarların hazır besin alması heterotrof beslenmedir.',
  },
  {
    id: 'fc-9bio-1.4-k4-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Fotosentez',
    definition: 'Işık enerjisi kullanılarak organik besin üretilmesidir.',
    example: 'Bitkiler ve algler fotosentez yaparak ototrof beslenir.',
  },
  {
    id: 'fc-9bio-1.4-k4-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Kemosentez',
    definition: 'Kimyasal enerji kullanılarak organik besin üretilmesidir.',
    example: 'Bazı bakteriler kemosentez yaparak ototrof beslenebilir.',
  },
  {
    id: 'fc-9bio-1.4-k4-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Ayrıştırıcı',
    definition: 'Ölü organizma ve atıklardaki organik maddeleri kullanarak beslenen heterotrof canlıdır.',
    example: 'Mantarlar ve bazı bakteriler ayrıştırıcı olarak görev yapar.',
  },
];
