import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.2-scientific-method';

export const layers_9bio_1_2_k4: LessonLayer[] = [
  {
    id: '9bio-1.2-k4-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilimsel yöntem, bilimsel bir soruya kanıta dayalı cevap ararken izlenen düzenli düşünme ve araştırma yoludur. Bu süreç gözlemle başlar, problem belirleme ve veri toplama ile devam eder; hipotez kurma, tahmin yapma, deney ya da araştırma yürütme, sonuçları analiz etme, sonuca ulaşma ve bilgiyi paylaşma basamaklarını içerir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimsel yöntem ezberlenecek katı bir liste değil, bilimsel sorulara düzenli ve kanıta dayalı cevap arama yoludur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k4-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.2-k4-infographic',
      body: 'Bu kazanım için sıralı akış şeması kullanılabilir: Gözlem -> Problem belirleme -> Veri toplama -> Hipotez kurma -> Tahmin -> Deney veya araştırma -> Analiz -> Sonuç çıkarma -> Raporlama ve paylaşma.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Akış şeması, bilimsel yöntemin bir düşünme düzeni olduğunu ve basamakların birbirini desteklediğini gösterir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k4-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bilimsel yöntemin temel basamakları şu sırayla özetlenebilir. Veri toplama, araştırma öncesinde konu hakkında bilgi ve gözlem biriktirmeyi; deney veya araştırma ise hipotezi sınamak için planlı çalışma yürütmeyi ifade eder.',
      steps: [
        '1. Gözlem yapılır: Dikkat çeken olay veya durum incelenir.',
        '2. Problem belirlenir: Araştırılacak soru netleştirilir.',
        '3. Veri toplanır: Konuyla ilgili gözlem, ölçüm veya kaynak bilgisi elde edilir.',
        '4. Hipotez kurulur: Probleme yönelik geçici ve test edilebilir açıklama oluşturulur.',
        '5. Tahmin yapılır: Hipotez doğruysa beklenen durum ifade edilir.',
        '6. Deney veya araştırma yapılır: Hipotezi sınayacak çalışma yürütülür.',
        '7. Veriler analiz edilir: Elde edilen bulgular düzenlenir ve değerlendirilir.',
        '8. Sonuç çıkarılır: Bulguların hipotezi destekleyip desteklemediği açıklanır.',
        '9. Raporlanır ve paylaşılır: Yöntem, bulgular ve sonuçlar başkalarının değerlendirmesine sunulur.',
      ],
    },
  },
  {
    id: '9bio-1.2-k4-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bilimsel yöntemi anlamak için şu kavramlar önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Gözlem: Bir olay veya durumun dikkatli biçimde incelenmesidir.' },
        { type: 'tip', text: 'Problem: Araştırmada cevap aranacak bilimsel sorudur.' },
        { type: 'tip', text: 'Veri: Gözlem, ölçüm veya araştırma sonucunda elde edilen bilgidir.' },
        { type: 'tip', text: 'Hipotez: Probleme yönelik geçici ve test edilebilir açıklamadır.' },
        { type: 'tip', text: 'Tahmin: Hipoteze dayanarak beklenen sonucun ifade edilmesidir.' },
        { type: 'tip', text: 'Analiz: Elde edilen verilerin düzenlenip anlamlandırılmasıdır.' },
        { type: 'tip', text: 'Sonuç: Bulgulara dayanarak ulaşılan bilimsel değerlendirmedir.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k4-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bilimsel yöntemle ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Bilimsel yöntem yalnızca deney yapmaktır. Doğrusu: Deney önemli bir basamak olabilir; ancak gözlem, problem, veri, analiz ve sonuç da sürecin parçalarıdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Hipotez kesin doğrudur. Doğrusu: Hipotez test edilmesi gereken geçici açıklamadır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Sonuç hipotezi desteklemezse çalışma başarısızdır. Doğrusu: Desteklemeyen sonuçlar da bilimsel bilgi üretir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bilimsel yöntemde sonuçlar paylaşılmaz. Doğrusu: Raporlama ve paylaşma bilimsel bilginin kontrol edilmesini sağlar.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k4-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle bilimsel yöntem basamaklarını doğru sıraya koyma veya verilen bir davranışın hangi basamağa ait olduğunu bulma biçiminde sorulur.',
      tytPattern: 'Sıralama sorularında önce gözlem ve problem belirleme gelir; hipotez ve tahmin araştırma öncesi düşünme basamaklarıdır; analiz ve sonuç ise çalışma tamamlandıktan sonra gelir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Problem belirlemeden hipotez kurulmaz; veri analiz edilmeden bilimsel sonuca ulaşılmaz.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k4-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Bilimsel yöntem günlük yaşamda ve biyoloji çalışmalarında düzenli düşünmeyi sağlar.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bir öğrencinin saksı bitkisinin yapraklarının sarardığını fark etmesi gözleme örnektir.',
        },
        {
          type: 'example',
          text: '"Bitkinin yaprakları neden sarardı?" sorusu problem belirlemeye örnektir.',
        },
        {
          type: 'example',
          text: 'Bitkinin aldığı ışık, su miktarı ve toprak durumu hakkında bilgi toplamak veri toplamaya örnektir.',
        },
        {
          type: 'example',
          text: 'Çalışmanın sonunda bulguları tablo ve kısa açıklamayla sunmak raporlama ve paylaşmaya örnektir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k4-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Bilimsel yöntem hangi basamakla başlar? 2) Problem belirleme neden hipotezden önce gelir? 3) Hipotez neden test edilebilir olmalıdır? 4) Analiz ile sonuç çıkarma arasında nasıl bir ilişki vardır? 5) Raporlama ve paylaşma bilimsel süreçte neden önemlidir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında bilimsel yöntem basamaklarını doğru sırayla kullanmaya çalış.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k4-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Bilimsel yöntemin basamaklarını doğru sırayla sayabiliyor; gözlem, problem, veri toplama, hipotez, tahmin, deney veya araştırma, analiz, sonuç ve raporlama basamaklarının ne işe yaradığını açıklayabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda amaç, bilimsel yöntemin basamaklarını sıralamak ve her basamağın görevini açıklamaktır.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_2_k4: Flashcard[] = [
  {
    id: 'fc-9bio-1.2-k4-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Bilimsel Yöntem',
    definition: 'Bilimsel bir soruya kanıta dayalı cevap ararken izlenen düzenli araştırma ve düşünme yoludur.',
    example: 'Bir bitkinin neden solduğunu gözlem, veri toplama, hipotez ve sonuç basamaklarıyla araştırmak.',
  },
  {
    id: 'fc-9bio-1.2-k4-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Gözlem',
    definition: 'Bir olay, canlı veya durumun dikkatli ve amaçlı biçimde incelenmesidir.',
    example: 'Bir bitkinin yapraklarının sarardığını fark etmek.',
  },
  {
    id: 'fc-9bio-1.2-k4-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Problem Belirleme',
    definition: 'Araştırmada cevap aranacak bilimsel sorunun net biçimde ifade edilmesidir.',
    example: '"Bitkinin yaprakları neden sarardı?" sorusunu oluşturmak.',
  },
  {
    id: 'fc-9bio-1.2-k4-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Hipotez',
    definition: 'Belirlenen probleme yönelik geçici ve test edilebilir açıklamadır.',
    example: 'Bitkinin yapraklarının az ışık aldığı için sarardığını öne sürmek.',
  },
  {
    id: 'fc-9bio-1.2-k4-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Analiz',
    definition: 'Araştırmada elde edilen verilerin düzenlenip değerlendirilmesidir.',
    example: 'Farklı günlerde kaydedilen bitki boylarını tablo hâline getirip karşılaştırmak.',
  },
  {
    id: 'fc-9bio-1.2-k4-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Sonuç ve Raporlama',
    definition: 'Bulgulara dayanarak değerlendirme yapma ve yöntemi, bulguları, sonucu paylaşma basamağıdır.',
    example: 'Bitki gözlemiyle ilgili bulguları kısa bir rapor hâlinde sunmak.',
  },
];
