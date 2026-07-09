import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-properties';

export const layers_9bio_1_4_k2: LessonLayer[] = [
  {
    id: '9bio-1.4-k2-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Hücresel yapı, canlılığın temel koşullarından biridir. Çünkü canlıların yaşamsal olayları hücre içinde gerçekleşir. Bir canlı tek hücreli de olsa çok hücreli de olsa en az bir hücreden oluşur.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Hücre, canlıların temel yapı ve işlev birimidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k2-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k2-infographic',
      body: 'Bu kazanım için "Hücre = Canlılığın Temel Yapı ve İşlev Birimi" merkezli bir kavram haritası kullanılabilir. Dallar: Hücre, Tek Hücreli Canlılar, Çok Hücreli Canlılar, Hücresel Olmayan Yapılar.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Tek hücreli canlı: bakteri. Çok hücreli canlı: insan, bitki veya hayvan. Hücresel olmayan yapı: virüs. Bu ayrım hücresel yapının canlılık için neden önemli olduğunu gösterir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k2-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Hücresel yapının canlılık için neden temel koşul olduğunu şu akışla açıklayabiliriz:',
      steps: [
        '1. Canlılar bir veya daha fazla hücreden oluşur.',
        '2. Hücre, canlı yapısının en küçük işlevsel birimidir.',
        '3. Beslenme, solunum, büyüme ve madde alışverişi gibi yaşamsal olaylar hücresel düzeyde yürütülür.',
        '4. Tek hücreli canlılarda tüm yaşamsal olaylar tek hücre içinde gerçekleşir.',
        '5. Çok hücreli canlılarda farklı hücreler birlikte çalışarak organizmayı oluşturur.',
        '6. Hücresel yapısı olmayan varlıklar, canlılık açısından özel şekilde değerlendirilir.',
      ],
    },
  },
  {
    id: '9bio-1.4-k2-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Hücresel yapıyı açıklamak için şu kavramlar önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Hücre: Canlıların temel yapı ve işlev birimidir.' },
        { type: 'tip', text: 'Hücresel yapı: Bir varlığın bir veya daha fazla hücreden oluşmasıdır.' },
        { type: 'tip', text: 'Tek hücreli canlı: Tüm yaşamsal olaylarını tek hücreyle sürdüren canlıdır.' },
        { type: 'tip', text: 'Çok hücreli canlı: Çok sayıda hücrenin birlikte çalışmasıyla oluşan canlıdır.' },
        { type: 'tip', text: 'Hücre zarı: Hücreyi dış ortamdan ayıran temel sınırdır.' },
        { type: 'tip', text: 'Sitoplazma: Hücre içindeki yaşamsal olayların gerçekleştiği sıvı ortamdır.' },
        { type: 'tip', text: 'Kalıtsal materyal: Hücrenin yaşamsal özelliklerini belirleyen DNA veya benzeri genetik bilgidir.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k2-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Hücresel yapı ile ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Sadece çok hücreli varlıklar canlıdır. Doğrusu: Bakteri ve amip gibi tek hücreli canlılar da canlıdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Canlı olmak için insan veya hayvan gibi görünmek gerekir. Doğrusu: Bitkiler, bakteriler ve mantarlar da hücresel yapıya sahip canlılardır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Hareket eden her varlık hücresel yapıya sahiptir. Doğrusu: Araba hareket eder ama hücrelerden oluşmaz.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Virüsler hücredir. Doğrusu: Virüslerin hücresel yapısı yoktur; bu nedenle canlılık açısından özel konumda değerlendirilir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Hücre yalnızca hayvanlarda bulunur. Doğrusu: Bitki, mantar, bakteri ve protistlerde de hücre bulunur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k2-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle "hücresel yapı canlılık için neden gereklidir?" veya "aşağıdakilerden hangisi hücresel yapıya sahiptir?" biçiminde sorulur.',
      tytPattern: 'Doğru seçeneklerde hücrenin temel yapı ve işlev birimi olması, tek hücreli ve çok hücreli canlıların hücrelerden oluşması veya virüslerin hücresel yapıya sahip olmaması vurgulanır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: Virüsler çoğalabilir ama hücresel yapıya sahip değildir. Bu ayrıntı K12-K13’te derinleşir; K2’de yalnızca kısa uyarı olarak bilinmelidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k2-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Hücresel yapı günlük yaşamda mikroskop gözlemleri, canlı-cansız ayrımı ve bazı sağlık örnekleriyle anlaşılabilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bir damla göl suyunda mikroskopla tek hücreli canlılar gözlenebilir.',
        },
        {
          type: 'example',
          text: 'Soğan zarı mikroskopta incelendiğinde yan yana dizilmiş bitki hücreleri görülebilir.',
        },
        {
          type: 'example',
          text: 'İnsan vücudu çok sayıda hücreden oluşur; deri, kas ve kan hücreleri farklı görevler üstlenir.',
        },
        {
          type: 'example',
          text: 'Bir taş veya plastik parçası hücrelerden oluşmadığı için canlı değildir.',
        },
        {
          type: 'example',
          text: 'Yoğurt yapımında rol alan bakteriler tek hücreli canlılara örnektir.',
        },
        {
          type: 'example',
          text: 'Antibiyotikler bakterilerin hücresel yapılarını veya hücresel işleyişlerini hedefleyebilir; virüslerin hücresel yapısı olmadığı için antibiyotikler virüslere etki etmez.',
        },
        {
          type: 'tip',
          text: 'Sonraki kazanıma hazırlık: Hücreler bir araya gelerek dokuları, dokular organları, organlar da organ sistemlerini oluşturabilir. Bu sadece kısa bir ön bilgidir; organizasyon düzeyleri K3’te ayrıntılı işlenecektir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k2-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Hücresel yapı neden canlılığın temel koşullarındandır? 2) Tek hücreli canlıya iki örnek ver. 3) Çok hücreli canlıya iki örnek ver. 4) Virüsler neden hücresel yapı bakımından özel konumdadır? 5) Hücrenin temel yapı ve işlev birimi olması ne demektir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında hücre, hücresel yapı, tek hücreli canlı, çok hücreli canlı ve canlılık kavramlarını kullan.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k2-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Hücresel yapının canlılığın temel koşullarından biri olduğunu açıklayabiliyor; tek hücreli ve çok hücreli canlı örnekleri verebiliyor; hücresel yapıya sahip olmayan varlıkların canlılık açısından özel değerlendirilmesi gerektiğini söyleyebiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda başarı ölçütü, hücreyi yalnızca bir yapı olarak değil, canlılık olaylarının gerçekleştiği temel birim olarak açıklayabilmektir.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k2: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k2-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Hücresel Yapı',
    definition: 'Canlıların bir veya daha fazla hücreden oluşmasıdır.',
    example: 'Bakteri tek hücrelidir; insan çok hücrelidir.',
  },
  {
    id: 'fc-9bio-1.4-k2-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Hücre',
    definition: 'Canlıların temel yapı ve işlev birimidir.',
    example: 'Deri hücresi, bakteri hücresi ve bitki hücresi hücre örnekleridir.',
  },
  {
    id: 'fc-9bio-1.4-k2-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Tek Hücreli Canlı',
    definition: 'Tüm yaşamsal olaylarını tek bir hücreyle sürdüren canlıdır.',
    example: 'Bakteri, amip ve maya tek hücreli canlılara örnek olabilir.',
  },
  {
    id: 'fc-9bio-1.4-k2-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Çok Hücreli Canlı',
    definition: 'Birçok hücrenin birlikte çalışmasıyla oluşan canlıdır.',
    example: 'İnsan, çam ağacı ve kedi çok hücreli canlıdır.',
  },
  {
    id: 'fc-9bio-1.4-k2-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Temel Yapı ve İşlev Birimi',
    definition: 'Canlı yapısını oluşturan ve yaşamsal olayları gerçekleştiren en küçük canlı birimdir.',
    example: 'Tek hücreli bir bakteride beslenme ve çoğalma aynı hücrede gerçekleşir.',
  },
  {
    id: 'fc-9bio-1.4-k2-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Hücresel Yapıya Sahip Olmama',
    definition: 'Bir varlığın hücre zarı, sitoplazma ve hücresel düzen taşıyan bir hücreden oluşmamasıdır.',
    example: 'Virüsler hücresel yapıya sahip değildir ve bu yüzden canlılık açısından özel konumda değerlendirilir.',
  },
];
