import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-viruses';

export const layers_9bio_1_4_k12: LessonLayer[] = [
  {
    id: '9bio-1.4-k12-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Virüsler genetik materyal taşır, değişime uğrayabilir ve uygun konak hücre içinde yeni virüs parçacıkları oluşturabilir. Buna karşılık hücresel yapıları yoktur, bağımsız metabolizma gerçekleştiremez ve konak hücre dışında kendi başlarına çoğalamazlar. Canlılık ölçütlerinin bazılarıyla ilişkili özellik taşırken tümünü karşılamadıkları için özel bir konumda değerlendirilirler.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Virüsler konak hücre içine girdiklerinde hücreye dönüşmez; çoğalmak için konağın hücresel sistemlerinden yararlanırlar.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k12-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k12-infographic',
      body: 'Bu kazanım için dengeli bir karşılaştırma kullanılabilir. Canlılıkla ilişkili özellikler ve canlı kabul edilmelerini sınırlayan özellikler iki sütunda gösterilmeli, iki sütun "Virüsler bazı fakat tüm canlılık özelliklerini karşılamadıkları için özel konumdadır" sonucunda birleşmelidir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Karşılaştırma şeridi: Hücresel canlı hücre yapısı, genetik materyal, bağımsız metabolizma ve bağımsız çoğalma gösterir; virüs genetik materyal taşır ancak hücresel değildir ve konağa bağımlıdır; cansız nesne hücresel organizasyon, genetik materyal ve metabolizma göstermez.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k12-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Virüslerin canlılık bakımından özel konumu şu ölçütlerle değerlendirilir:',
      steps: [
        '1. Bir varlık hücresel yapı, metabolizma ve bağımsız çoğalma gibi canlılık ölçütleriyle değerlendirilir.',
        '2. Virüslerin genetik materyal taşıdığı belirlenir.',
        '3. Viral genetik materyalde değişimler oluşabilir ve virüs popülasyonları evrimleşebilir.',
        '4. Virüsler uygun konak hücre içinde yeni virüs parçacıkları oluşturabilir.',
        '5. Virüslerin hücresel organizasyona sahip olmadığı görülür.',
        '6. Kendi başlarına enerji üretimi ve metabolik faaliyet gerçekleştiremezler.',
        '7. Konak hücre dışında bağımsız biçimde çoğalamazlar.',
        '8. Bu karşıt özellikler nedeniyle virüsler canlılık bakımından özel konumda değerlendirilir.',
      ],
    },
  },
  {
    id: '9bio-1.4-k12-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Virüslerin özel konumunu açıklayan temel kavramlar:',
      highlightBoxes: [
        { type: 'tip', text: 'Virüs: Genetik materyal ve protein kılıf taşıyan, çoğalmak için konak hücreye bağımlı hücresel olmayan yapıdır.' },
        { type: 'tip', text: 'Hücresel olmayan: Hücre zarı, sitoplazma ve organellerden oluşan bir hücre yapısına sahip olmamadır.' },
        { type: 'tip', text: 'Genetik materyal: Kalıtsal bilgiyi taşıyan DNA veya RNA’dır.' },
        { type: 'tip', text: 'Kapsit: Viral genetik materyali çevreleyen protein kılıftır.' },
        { type: 'tip', text: 'Konak hücre: Virüsün çoğalmak için sistemlerinden yararlandığı canlı hücredir.' },
        { type: 'tip', text: 'Zorunlu hücre içi bağımlılık: Virüsün yeni parçacıklar oluşturmak için canlı hücreye ihtiyaç duymasıdır.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k12-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Virüslerin canlılığıyla ilgili sık görülen yanılgılar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Virüsler küçük hücrelerdir. Doğrusu: Virüslerin hücresel yapısı yoktur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Virüsler konak hücreye girince tam bir canlıya dönüşür. Doğrusu: Konak hücrenin sistemlerinden yararlanırlar; kendileri hücreye dönüşmez.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Virüsler kendi başlarına enerji üretir. Doğrusu: Bağımsız metabolizmaları yoktur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bütün virüsler hem DNA hem RNA taşır. Doğrusu: Bir virüsün genomu DNA veya RNA temellidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Genetik materyal taşımak bir yapının kesinlikle canlı olduğunu gösterir. Doğrusu: Canlılık hücresel organizasyon, metabolizma ve bağımsız çoğalma gibi birden fazla ölçütle değerlendirilir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k12-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT sorularında virüs özellikleri canlılıkla ilişkili olanlar ve canlı kabul edilmelerini sınırlayanlar olarak ayrılır.',
      tytPattern: 'Genetik materyal, mutasyon ve konak içinde çoğalma canlılıkla ilişkili; hücresel yapısızlık, bağımsız metabolizma yapamama ve konak bağımlılığı canlı kabul edilmelerini sınırlayan özelliklerdir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: "Virüsler ürer" yerine "uygun konak hücre içinde çoğalabilir" ifadesi daha doğrudur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k12-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Virüslerin konak dışındaki kalıcılığı, bağımsız yaşam sürdürebildikleri anlamına gelmez.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bir virüs hücre içermeyen uygun bir besin ortamına konulduğunda kendi başına çoğalamaz. Uygun canlı hücrelerin bulunduğu ortamda ise bu hücrelerin sistemlerinden yararlanarak yeni virüs parçacıkları oluşturabilir.',
        },
        {
          type: 'example',
          text: 'Bazı virüs parçacıkları konak hücre dışında belirli koşullarda uzun süre etkinliğini koruyabilir. Ancak bu kalıcılık sırasında bağımsız metabolizma yapmaz veya çoğalmaz; kalıcılık bağımsız yaşamla aynı değildir.',
        },
        {
          type: 'example',
          text: 'Grip virüsü uygun konak hücreye ulaştığında genetik bilgisini çoğaltmak için hücrenin sistemlerinden yararlanır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k12-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Virüslerin canlılıkla ilişkili iki özelliğini yaz. 2) Canlı kabul edilmelerini sınırlayan iki özellik nedir? 3) Virüsler neden uygun besin ortamında tek başına çoğalamaz? 4) Genetik materyal taşımak canlı kabul edilmek için tek başına yeterli midir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap: Genetik materyal ve değişim; hücresel yapısızlık ve bağımsız metabolizma eksikliği; konak hücre sistemlerine ihtiyaç; canlılık için tek başına yeterli değildir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k12-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Bu kazanımı tamamlayan öğrenci virüslerin canlılıkla ilişkili özelliklerini ve canlı kabul edilmelerini sınırlayan özelliklerini belirleyerek neden özel konumda değerlendirildiklerini açıklayabilmelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Başarı ölçütü: Öğrenci hücresel canlı, virüs ve cansız nesneyi hücresel organizasyon, genetik materyal, bağımsız metabolizma, bağımsız çoğalma ve konak gereksinimi ölçütleriyle karşılaştırır.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k12: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k12-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Virüs',
    definition: 'Genetik materyal taşıyan ve çoğalmak için konak hücreye bağımlı hücresel olmayan yapıdır.',
    example: 'Grip virüsü.',
  },
  {
    id: 'fc-9bio-1.4-k12-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Hücresel Olmayan',
    definition: 'Hücre zarı, sitoplazma ve organellerden oluşan bir hücre yapısına sahip olmamadır.',
    example: 'Virüsler hücresel olmayan yapılardır.',
  },
  {
    id: 'fc-9bio-1.4-k12-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Genetik Materyal',
    definition: 'Kalıtsal bilgiyi taşıyan DNA veya RNA’dır.',
    example: 'Virüsler DNA veya RNA temelli bir genom taşır.',
  },
  {
    id: 'fc-9bio-1.4-k12-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Kapsit',
    definition: 'Virüsün genetik materyalini çevreleyen protein kılıftır.',
    example: 'Kapsit viral genetik materyalin korunmasına yardım eder.',
  },
  {
    id: 'fc-9bio-1.4-k12-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Konak Hücre',
    definition: 'Virüsün çoğalmak için sistemlerinden yararlandığı canlı hücredir.',
    example: 'Grip virüsünün solunum yolu hücrelerinden yararlanması.',
  },
  {
    id: 'fc-9bio-1.4-k12-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Zorunlu Hücre İçi Bağımlılık',
    definition: 'Virüsün yeni virüs parçacıkları oluşturmak için canlı bir hücreye ihtiyaç duymasıdır.',
    example: 'Virüsün hücre içermeyen besin ortamında çoğalamaması.',
  },
];
