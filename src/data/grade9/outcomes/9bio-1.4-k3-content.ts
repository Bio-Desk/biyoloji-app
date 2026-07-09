import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-properties';

export const layers_9bio_1_4_k3: LessonLayer[] = [
  {
    id: '9bio-1.4-k3-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Organizasyon, canlı yapılarının belirli bir düzen içinde çalışmasıdır. Tek hücreli canlılarda tüm yaşamsal olaylar tek hücre içinde yürütülürken, çok hücreli canlılarda farklı hücreler görev paylaşımı yapar ve doku, organ, sistem gibi daha üst düzey yapıları oluşturur.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Tek hücreli canlılarda organizasyon hücre düzeyinde; çok hücreli canlılarda ise hücreden organizmaya uzanan basamaklar hâlinde görülür.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k3-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k3-infographic',
      body: 'Bu kazanım için iki sütunlu bir karşılaştırma görseli kullanılabilir. Sol sütun: Tek hücreli canlılarda organizasyon. Sağ sütun: Çok hücreli canlılarda organizasyon düzeyleri.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Tek hücreli: Hücre = Organizma. Çok hücreli: Hücre -> Doku -> Organ -> Sistem -> Organizma.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k3-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Tek hücreli ve çok hücreli canlılarda organizasyon şu şekilde karşılaştırılır:',
      steps: [
        '1. Tek hücreli canlılarda tek bir hücre hem yapı hem de organizma görevini üstlenir.',
        '2. Tek hücreli canlılarda beslenme, solunum, boşaltım ve çoğalma gibi olaylar aynı hücre içinde yürütülür.',
        '3. Çok hücreli canlılarda hücreler farklı görevler için özelleşebilir.',
        '4. Benzer görev yapan hücreler dokuları oluşturur.',
        '5. Farklı dokular birlikte çalışarak organları oluşturur.',
        '6. Birbiriyle ilişkili organlar sistemleri oluşturur.',
        '7. Sistemlerin birlikte çalışması organizmayı meydana getirir.',
      ],
    },
  },
  {
    id: '9bio-1.4-k3-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Organizasyon düzeylerini karşılaştırmak için şu kavramlar önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Organizasyon: Canlı yapılarının belirli bir düzen ve iş bölümü içinde çalışmasıdır.' },
        { type: 'tip', text: 'Özelleşme: Hücrelerin belirli görevleri daha etkili yapmak üzere yapı ve görev bakımından farklılaşmasıdır.' },
        { type: 'tip', text: 'Tek hücreli canlı: Yaşamsal olaylarını tek hücreyle sürdüren canlıdır.' },
        { type: 'tip', text: 'Çok hücreli canlı: Çok sayıda hücrenin iş birliğiyle oluşan canlıdır.' },
        { type: 'tip', text: 'Doku: Benzer yapı ve göreve sahip hücrelerin oluşturduğu topluluktur.' },
        { type: 'tip', text: 'Organ: Farklı dokuların belirli bir görevi yapmak için bir araya gelmesiyle oluşur.' },
        { type: 'tip', text: 'Sistem: Birbiriyle ilişkili organların birlikte çalışmasıyla oluşur.' },
        { type: 'tip', text: 'Organizma: Canlının bütünüdür.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k3-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Organizasyon düzeyleriyle ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Tek hücreli canlılarda organizasyon yoktur. Doğrusu: Tek hücreli canlılarda organizasyon tek hücre içinde gerçekleşir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Doku, organ ve sistem aynı düzeydir. Doğrusu: Bunlar farklı organizasyon basamaklarıdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Çok hücreli canlılarda her hücre aynı görevi yapar. Doğrusu: Çok hücreli canlılarda hücreler görev bakımından özelleşebilir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Hücreden sonra doğrudan organizma gelir. Doğrusu: Çok hücreli canlılarda hücre, doku, organ, sistem ve organizma basamakları bulunur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Organizasyon yalnızca hayvanlarda görülür. Doğrusu: Bitkilerde de hücre, doku, organ ve organizma düzeyleri bulunur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k3-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle organizasyon basamaklarının sıralanması veya tek hücreli-çok hücreli canlıların karşılaştırılması şeklinde sorulur.',
      tytPattern: 'Doğru sıralama çok hücreli canlılar için Hücre -> Doku -> Organ -> Sistem -> Organizma biçimindedir. Tek hücreli canlılarda ise tek hücre doğrudan organizmanın kendisidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: Tek hücreli canlılarda doku, organ ve sistem bulunmaz; yaşamsal olaylar tek hücrede yürütülür.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k3-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Organizasyon düzeyleri günlük yaşamda insan, bitki ve tek hücreli canlı örnekleriyle anlaşılabilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bakteri tek hücrelidir; aynı hücre canlılık olaylarını yürütür ve organizmanın tamamını oluşturur.',
        },
        {
          type: 'example',
          text: 'İnsanda kas hücreleri bir araya gelerek kas dokusunu, kas dokuları bazı organların yapısını oluşturur.',
        },
        {
          type: 'example',
          text: 'Kalp bir organdır; kalpte oluşan ciddi bir sorun dolaşım sisteminin tamamını etkileyebilir. Bu durum organların sistem içinde birlikte çalıştığını gösterir.',
        },
        {
          type: 'example',
          text: 'Bitkide yaprak bir organdır; yaprak dokuları ve hücreleri birlikte çalışır.',
        },
        {
          type: 'example',
          text: 'Bir amip tek hücrelidir; buna rağmen beslenme, hareket ve çoğalma gibi yaşamsal olayları tek hücresinde sürdürebilir.',
        },
        {
          type: 'tip',
          text: 'Karşılaştırma: Özelleşme, hücrelerin belirli görevleri üstlenmesidir. Organizasyon ise özelleşmiş hücre, doku, organ ve sistemlerin düzenli biçimde birlikte çalışmasıdır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k3-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Çok hücreli canlılarda organizasyon basamaklarını sırala. 2) Tek hücreli canlılarda doku ve organ bulunur mu? 3) Doku ile organ arasındaki fark nedir? 4) İnsandan bir organ ve sistem örneği ver. 5) Tek hücreli canlılarda yaşamsal olaylar nerede gerçekleşir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında hücre, doku, organ, sistem, organizma, tek hücreli ve çok hücreli kavramlarını kullan.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k3-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Tek hücreli canlılarda organizasyonun tek hücre içinde gerçekleştiğini; çok hücreli canlılarda hücre, doku, organ, sistem ve organizma basamaklarının bulunduğunu açıklayabiliyor ve bu iki durumu örneklerle karşılaştırabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda temel başarı, tek hücreli ve çok hücreli canlılarda organizasyonun aynı şekilde olmadığını ayırt etmektir.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k3: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k3-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Organizasyon',
    definition: 'Canlı yapılarının belirli bir düzen ve iş bölümü içinde çalışmasıdır.',
    example: 'Çok hücreli canlılarda hücrelerin dokuları, dokuların organları oluşturması.',
  },
  {
    id: 'fc-9bio-1.4-k3-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Tek Hücreli Organizasyon',
    definition: 'Tüm yaşamsal olayların tek bir hücre içinde yürütülmesidir.',
    example: 'Bakterinin beslenme, solunum ve çoğalma olaylarını tek hücrede sürdürmesi.',
  },
  {
    id: 'fc-9bio-1.4-k3-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Çok Hücreli Organizasyon',
    definition: 'Farklı hücrelerin görev paylaşımı yaparak doku, organ, sistem ve organizmayı oluşturmasıdır.',
    example: 'İnsanda kas hücrelerinin kas dokusunu oluşturması.',
  },
  {
    id: 'fc-9bio-1.4-k3-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Doku',
    definition: 'Benzer yapı ve göreve sahip hücrelerin oluşturduğu topluluktur.',
    example: 'Kas hücrelerinin oluşturduğu kas dokusu.',
  },
  {
    id: 'fc-9bio-1.4-k3-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Organ',
    definition: 'Farklı dokuların belirli bir görevi yapmak için bir araya gelmesiyle oluşan yapıdır.',
    example: 'Kalp bir organdır.',
  },
  {
    id: 'fc-9bio-1.4-k3-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Sistem',
    definition: 'Birbiriyle ilişkili organların birlikte çalışmasıyla oluşan organizasyon düzeyidir.',
    example: 'Kalp ve damarların birlikte dolaşım sisteminde görev yapması.',
  },
];
