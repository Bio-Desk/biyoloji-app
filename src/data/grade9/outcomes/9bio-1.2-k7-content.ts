import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.2-scientific-method';

export const layers_9bio_1_2_k7: LessonLayer[] = [
  {
    id: '9bio-1.2-k7-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Kontrollü deneylerde değişkenleri doğru ayırt etmek, bilimsel sonuca güvenilir biçimde ulaşmak için önemlidir. Bağımsız değişken araştırmacının değiştirdiği etkendir. Bağımlı değişken bu değişime bağlı olarak ölçülen sonuçtur. Kontrol edilen değişkenler ise deney boyunca aynı tutulan koşullardır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bağımsız değişken değiştirilir, bağımlı değişken ölçülür, kontrol edilen değişkenler sabit tutulur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k7-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.2-k7-infographic',
      body: 'Bu kazanım için üç bölümlü değişken şeması kullanılabilir: "Değiştirilen: Bağımsız değişken", "Ölçülen: Bağımlı değişken", "Sabit tutulan: Kontrol edilen değişkenler". Örnek senaryo olarak ışık miktarının bitki büyümesine etkisi kullanılabilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Işık miktarı değiştirilir; bitki büyümesi ölçülür; su miktarı, toprak türü ve bitki türü aynı tutulur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k7-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bir deney senaryosunda değişkenleri ayırt etmek için şu akışı kullanabilirsin:',
      steps: [
        '1. Araştırmacının bilinçli olarak neyi değiştirdiğini bul; bu bağımsız değişkendir.',
        '2. Değişimin sonucunda neyin ölçüldüğünü veya gözlendiğini bul; bu bağımlı değişkendir.',
        '3. Deneyin adil olması için hangi koşulların aynı tutulduğunu belirle; bunlar kontrol edilen değişkenlerdir.',
        '4. Değişkenleri senaryoya göre yaz: değiştirilen, ölçülen ve sabit tutulan.',
        '5. Bir deneyde mümkün olduğunca tek bağımsız değişken olmasına dikkat et; böylece sonucun hangi etkene bağlı olduğu daha güvenilir anlaşılır.',
      ],
    },
  },
  {
    id: '9bio-1.2-k7-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Kontrollü deneylerde değişkenleri ayırt etmek için şu kavramlar önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Bağımsız değişken: Araştırmacının etkisini görmek için değiştirdiği etkendir.' },
        { type: 'tip', text: 'Bağımlı değişken: Bağımsız değişkene bağlı olarak ölçülen veya gözlenen sonuçtur.' },
        { type: 'tip', text: 'Kontrol edilen değişken: Deney boyunca aynı tutulan koşuldur.' },
        { type: 'tip', text: 'Kontrollü deney: Bir etkenin etkisini anlamak için diğer koşulların sabit tutulduğu deneydir.' },
        { type: 'tip', text: 'Adil karşılaştırma: Gruplar arasında yalnızca araştırılan etkenin farklı olmasıdır.' },
        { type: 'tip', text: 'Deney grubu: Bağımsız değişkenin uygulandığı veya değiştirildiği gruptur.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k7-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Değişkenlerle ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Bağımsız değişken deney sonunda ölçülen sonuçtur. Doğrusu: Bağımsız değişken araştırmacının değiştirdiği etkendir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bağımlı değişken araştırmacının değiştirdiği koşuldur. Doğrusu: Bağımlı değişken değişimden etkilenen ve ölçülen sonuçtur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Kontrol edilen değişkenler önemsizdir. Doğrusu: Sabit tutulan koşullar deneyin adil ve güvenilir olmasını sağlar.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bir deneyde birçok koşul aynı anda değiştirilirse sonuç daha güvenilir olur. Doğrusu: Çok sayıda değişken aynı anda değiştirilirse sonucun hangi etkenden kaynaklandığı anlaşılamaz.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k7-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT düzeyinde bu kazanım genellikle deney senaryosu verip bağımsız, bağımlı veya kontrol edilen değişkeni buldurur.',
      tytPattern: 'Soruda "neyi değiştiriyor?" bağımsız değişkene, "neyi ölçüyor?" bağımlı değişkene, "neyi aynı tutuyor?" kontrol edilen değişkenlere götürür.',
      aytPattern: 'AYT tarzında seçenekler daha benzer olabilir; deneyin amacını okuyup değiştirilen tek etkeni ve ölçülen sonucu ayır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Önce deneyin amacını bul; değişken türleri çoğu zaman amaç cümlesinden anlaşılır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k7-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Değişkenleri ayırt etmek günlük biyolojik gözlemlerde ve okul deneylerinde kullanılabilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Işık miktarının bitki büyümesine etkisi araştırılıyorsa ışık miktarı bağımsız değişkendir.',
        },
        {
          type: 'example',
          text: 'Bitkinin boy artışı veya yaprak sayısı bağımlı değişken olarak ölçülebilir.',
        },
        {
          type: 'example',
          text: 'Su miktarı, toprak türü, saksı büyüklüğü ve bitki türü aynı tutulursa bunlar kontrol edilen değişkenlerdir.',
        },
        {
          type: 'example',
          text: 'Farklı sıcaklıklarda besin bozulması araştırılırsa sıcaklık bağımsız, bozulma süresi bağımlı değişkendir.',
        },
        {
          type: 'example',
          text: 'İnsan sağlığı araştırmasında günlük uyku süresinin dikkat performansına etkisi incelenirse uyku süresi bağımsız, dikkat testi puanı bağımlı değişken; yaş grubu, test süresi ve test ortamı kontrol edilen değişken olabilir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k7-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Bir deneyde araştırmacının değiştirdiği etken hangi değişkendir? 2) Deney sonunda ölçülen sonuç hangi değişkendir? 3) Su miktarı ve toprak türü aynı tutuluyorsa bunlar hangi değişken türüdür? 4) Işık miktarının bitki büyümesine etkisi araştırılırsa bağımsız değişken nedir? 5) Aynı deneyde bağımlı değişken ne olabilir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında "değiştirilen", "ölçülen" ve "sabit tutulan" ayrımını kullan.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k7-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Bir kontrollü deney senaryosunda araştırmacının değiştirdiği etkeni bağımsız değişken, ölçülen sonucu bağımlı değişken ve aynı tutulan koşulları kontrol edilen değişken olarak ayırt edebiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Değişkenleri doğru ayırmak, deney sonucunun hangi etkene bağlı olduğunu anlamanın temelidir.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_2_k7: Flashcard[] = [
  {
    id: 'fc-9bio-1.2-k7-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Bağımsız Değişken',
    definition: 'Araştırmacının etkisini görmek için bilinçli olarak değiştirdiği etkendir.',
    example: 'Işık miktarının bitki büyümesine etkisi araştırılırken ışık miktarı.',
  },
  {
    id: 'fc-9bio-1.2-k7-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Bağımlı Değişken',
    definition: 'Bağımsız değişkene bağlı olarak ölçülen veya gözlenen sonuçtur.',
    example: 'Farklı ışık koşullarında bitkinin boy artışı.',
  },
  {
    id: 'fc-9bio-1.2-k7-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Kontrol Edilen Değişken',
    definition: 'Deney boyunca aynı tutulan koşuldur.',
    example: 'Bitkilere verilen su miktarının ve toprak türünün aynı tutulması.',
  },
  {
    id: 'fc-9bio-1.2-k7-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Kontrollü Deney',
    definition: 'Bir etkenin etkisini anlamak için diğer koşulların sabit tutulduğu deneydir.',
    example: 'Yalnızca ışık miktarını değiştirip diğer koşulları aynı tutarak bitki büyümesini incelemek.',
  },
  {
    id: 'fc-9bio-1.2-k7-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Adil Karşılaştırma',
    definition: 'Deney grupları arasında araştırılan etken dışında koşulların aynı tutulmasıdır.',
    example: 'Aynı tür ve yaştaki bitkileri aynı miktarda sulayıp sadece ışık miktarını değiştirmek.',
  },
  {
    id: 'fc-9bio-1.2-k7-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Deney Grubu',
    definition: 'Araştırılan değişkenin uygulandığı veya farklılaştırıldığı gruptur.',
    example: 'Daha fazla ışık verilen bitki grubu.',
  },
];
