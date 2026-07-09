import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.2-scientific-method';

export const layers_9bio_1_2_k1: LessonLayer[] = [
  {
    id: '9bio-1.2-k1-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilim, doğayı ve canlıları anlamak için gözlem, deney, kanıt, sorgulama ve akıl yürütmeye dayalı bir bilgi üretme sürecidir. Bilimde bir düşüncenin kabul edilmesi için yalnızca kişisel görüş yeterli değildir; gözlem ve deneylerden elde edilen kanıtlarla desteklenmesi gerekir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilim, "ben böyle düşünüyorum" demek değildir. Bilim, kanıta dayanarak açıklama yapma sürecidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k1-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.2-k1-infographic',
      body: 'Bu kazanım için döngü şeklinde bir görsel kullanılabilir: Merak veya soru -> gözlem -> deney ya da araştırma -> kanıt toplama -> akıl yürütme -> bilimsel açıklama.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bu döngü, bilimin tek seferlik bir ezber değil, sürekli işleyen bir bilgi üretme süreci olduğunu gösterir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k1-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bilimsel bilgiye ulaşırken temel düşünme akışı şu şekilde ilerler.',
      steps: [
        '1. Merak edilen bir durum veya problem fark edilir.',
        '2. Durum dikkatli gözlemle incelenir.',
        '3. Gerekirse deney veya araştırma yapılır.',
        '4. Gözlem ve deneylerden veri toplanır.',
        '5. Veriler kanıt olarak değerlendirilir.',
        '6. Akıl yürütme ile açıklama yapılır.',
        '7. Açıklama kanıtlarla desteklenirse bilimsel bilgiye katkı sağlar.',
      ],
    },
  },
  {
    id: '9bio-1.2-k1-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu kazanımda bilimin bilgi üretme sürecini anlamak için şu kavramlar önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Bilim: Doğa, canlılar ve olaylar hakkında kanıta dayalı bilgi üretme süreci.' },
        { type: 'tip', text: 'Gözlem: Bir olayı veya varlığı dikkatli biçimde inceleme.' },
        { type: 'tip', text: 'Deney: Bir soruyu araştırmak için kontrollü koşullarda yapılan uygulama.' },
        { type: 'tip', text: 'Kanıt: Bir açıklamayı destekleyen gözlem, veri veya deney sonucu.' },
        { type: 'tip', text: 'Sorgulama: Bir olayı anlamak için soru sorma ve nedenini araştırma.' },
        { type: 'tip', text: 'Akıl yürütme: Verilerden ve kanıtlardan mantıklı sonuç çıkarma.' },
        { type: 'tip', text: 'Veri: Gözlem veya deney sonucu elde edilen bilgi.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k1-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bilimle ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Bilim sadece ezberlenmiş bilgilerden oluşur. Doğrusu: Bilim, kanıta dayalı bilgi üretme sürecidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bir kişinin fikri bilimsel bilgi için yeterlidir. Doğrusu: Bilimsel açıklamalar gözlem, deney ve kanıtlarla desteklenmelidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Gözlem sadece bakmak demektir. Doğrusu: Bilimsel gözlem dikkatli, amaçlı ve kaydedilebilir incelemedir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Deney yapılınca sonuç her zaman beklenen gibi çıkar. Doğrusu: Beklenmeyen sonuçlar da kanıta göre değerlendirilir ve öğrenme sağlar.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k1-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle "hangi ifade bilimin doğasına uygundur?" veya "hangi davranış bilimsel bilgi üretmeye örnektir?" biçiminde sorulur.',
      tytPattern: 'Bilimsel olan seçeneği bulmak için kanıt, gözlem, deney, sorgulama ve akıl yürütme kavramlarını ara.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Kişisel görüş, tahmin veya kulaktan dolma bilgi tek başına bilimsel bilgi değildir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k1-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Bilimsel bilgi üretme süreci günlük yaşamda ve basit biyolojik örneklerde görülebilir.',
      highlightBoxes: [
        { type: 'example', text: 'Bir öğrencinin bitkisinin neden solduğunu anlamak için sulama, ışık ve toprak durumunu gözlemlemesi.' },
        { type: 'example', text: 'Bir besinin bozulup bozulmadığını koku, renk ve saklama koşulları gibi kanıtlarla değerlendirmesi.' },
        { type: 'example', text: 'Mikroskopla soğan zarı hücresini inceleyerek hücresel yapıyı gözlemlemesi.' },
        { type: 'example', text: 'Bir deneyde elde ettiği sonuçları tabloya kaydedip yorumlaması.' },
        { type: 'example', text: '"Bu durum neden oldu?" diye sorup kanıt araması.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k1-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Bilimsel bilgi neden kişisel görüşten farklıdır? 2) Gözlem ve deney bilimsel bilgi üretiminde neden önemlidir? 3) Kanıt olmadan yapılan açıklama neden bilimsel kabul edilmez? 4) Akıl yürütme bilimsel süreçte ne işe yarar?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında gözlem, deney, kanıt, sorgulama ve akıl yürütme kavramlarını kullanmaya çalış.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k1-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Bilimi kanıta dayalı bilgi üretme süreci olarak açıklayabiliyor; gözlem, deney, kanıt, sorgulama ve akıl yürütmenin bu süreçteki rolünü örneklerle gösterebiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimin yalnızca bilgi ezberlemek değil, kanıta dayanarak açıklama üretme süreci olduğunu açıklayabilmelisin.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_2_k1: Flashcard[] = [
  {
    id: 'fc-9bio-1.2-k1-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Bilim',
    definition: 'Doğa, canlılar ve olaylar hakkında gözlem, deney ve kanıtlara dayanarak bilgi üretme sürecidir.',
    example: 'Bir bitkinin büyümesini etkileyen koşulları araştırmak.',
  },
  {
    id: 'fc-9bio-1.2-k1-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Gözlem',
    definition: 'Bir olayı veya varlığı dikkatli ve amaçlı biçimde incelemektir.',
    example: 'Bir yaprağın rengini, şeklini ve yapısındaki değişimleri kaydetmek.',
  },
  {
    id: 'fc-9bio-1.2-k1-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Deney',
    definition: 'Bir soruya cevap aramak için belirli koşullar altında yapılan uygulamadır.',
    example: 'Işığın bitki gelişimine etkisini araştırmak.',
  },
  {
    id: 'fc-9bio-1.2-k1-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Kanıt',
    definition: 'Bir açıklamayı destekleyen gözlem, veri veya deney sonucudur.',
    example: 'Deney sonunda ölçülen bitki boylarının tabloya kaydedilmesi.',
  },
  {
    id: 'fc-9bio-1.2-k1-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Sorgulama',
    definition: 'Bir olayı anlamak için soru sorma ve nedenlerini araştırma sürecidir.',
    example: '"Bu bitki neden daha az büyüdü?" sorusunu sormak.',
  },
  {
    id: 'fc-9bio-1.2-k1-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Akıl Yürütme',
    definition: 'Kanıtları kullanarak mantıklı sonuçlara ulaşma sürecidir.',
    example: 'Daha az ışık alan bitkinin daha yavaş büyüdüğü sonucuna varmak.',
  },
];
