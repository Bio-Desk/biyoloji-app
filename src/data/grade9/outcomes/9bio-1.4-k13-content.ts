import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-viruses';

export const layers_9bio_1_4_k13: LessonLayer[] = [
  {
    id: '9bio-1.4-k13-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Virüsler hücre değildir. Sitoplazma, ribozom ve organellerden oluşan hücresel organizasyonları bulunmaz. Kendi başlarına ATP üretemez, protein sentezleyemez ve metabolik tepkimeleri sürdüremezler. Yeni virüs parçacıkları ancak uygun canlı konak hücrenin enerji, madde ve hücresel sistemlerinden yararlanılarak oluşturulabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bazı virüslerin lipit yapılı bir zarf taşıması, onların hücresel yapıya sahip olduğu anlamına gelmez.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k13-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k13-infographic',
      body: 'Üç kanıt birlikte değerlendirilir: Virüste sitoplazma, ribozom ve organel bulunmaması hücresel olmadığını; bağımsız ATP üretimi ve protein sentezi yapamaması metabolizma gerçekleştiremediğini; yeni parçacıkların yalnızca uygun canlı hücrelerde oluşması ise konak hücreye bağımlı olduğunu gösterir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Karşılaştırma matrisi: Bakteride hücresel yapı, ribozom, ATP üretimi, protein sentezi ve uygun koşullarda bağımsız çoğalma bulunur; virüste bu özellikler bağımsız olarak bulunmaz.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k13-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bir virüsün üç temel özelliği şu kanıt sırasıyla değerlendirilir:',
      steps: [
        '1. Yapının sitoplazma ve ribozom içeren hücresel organizasyona sahip olup olmadığı incelenir.',
        '2. Virüste sitoplazma, ribozom ve organel bulunmadığı belirlenir.',
        '3. Hücre içermeyen ortamda bağımsız ATP üretimi veya protein sentezi yapıp yapamadığı araştırılır.',
        '4. Virüsün bu metabolik faaliyetleri bağımsız gerçekleştiremediği görülür.',
        '5. Hücre içermeyen besin ortamında yeni virüs parçacığı oluşup oluşmadığı gözlenir.',
        '6. Aynı virüs uygun canlı konak hücrelerin bulunduğu ortama aktarılır.',
        '7. Yeni parçacıkların yalnızca canlı konak hücre bulunan ortamda oluştuğu belirlenir.',
        '8. Kanıtlar birlikte değerlendirilerek virüsün hücresel olmayan, bağımsız metabolizma yapamayan ve çoğalmak için konak hücreye bağımlı bir yapı olduğu sonucuna ulaşılır.',
      ],
    },
  },
  {
    id: '9bio-1.4-k13-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Virüslerin hücresel ve metabolik özelliklerini değerlendirmede kullanılan temel kavramlar:',
      highlightBoxes: [
        { type: 'tip', text: 'Hücresel yapı: Sitoplazma ve hücresel yapılardan oluşan canlılık organizasyonudur.' },
        { type: 'tip', text: 'Hücresel olmayan: Hücre biçiminde organize olmamış yapıdır.' },
        { type: 'tip', text: 'Metabolizma: Canlı hücrelerde gerçekleşen yapım ve yıkım tepkimelerinin bütünüdür.' },
        { type: 'tip', text: 'Konak hücre: Virüsün yeni parçacıklar oluştururken sistemlerinden yararlandığı canlı hücredir.' },
        { type: 'tip', text: 'Viral çoğalma: Konak hücrenin sistemleri kullanılarak yeni virüs parçacıklarının oluşturulmasıdır.' },
        { type: 'tip', text: 'Zorunlu hücre içi bağımlılık: Virüsün çoğalmak için uygun canlı hücreye ihtiyaç duymasıdır.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k13-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Virüslerin hücresel yapısı, metabolizması ve çoğalmasıyla ilgili sık görülen yanılgılar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Virüsler çok küçük hücrelerdir. Doğrusu: Virüslerin sitoplazma, ribozom ve organel içeren hücresel organizasyonu yoktur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Zarflı virüslerde hücre zarı bulunur. Doğrusu: Viral zarf hücresel organizasyon oluşturmaz; sitoplazma ve ribozom içermez.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Virüsler konak hücre dışında beslenir fakat çoğalamaz. Doğrusu: Konak dışında bağımsız beslenme veya metabolizma gerçekleştirmezler.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Virüs kendi ribozomuyla protein üretir. Doğrusu: Viral proteinlerin üretiminde konak hücrenin ribozomlarından yararlanılır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Uygun sıcaklık ve besin sağlanırsa virüs tek başına çoğalabilir. Doğrusu: Besin tek başına yeterli değildir; uygun canlı konak hücre gerekir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k13-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT sorularında virüsler değerlendirilirken hücresel yapının bulunmaması, bağımsız metabolizma yapılamaması ve konak hücreye bağımlı çoğalma birlikte aranır.',
      tytPattern: 'Genetik materyal veya zarf taşımak hücresel yapı kanıtı değildir. Hücre içermeyen besin ortamında çoğalamama ise yalnızca besin eksikliğiyle değil, canlı konak hücre sistemlerine duyulan gereksinimle açıklanır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav anahtarı: Hücresel yapı yok + bağımsız metabolizma yok + çoğalma için canlı konak hücre gerekli.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k13-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Laboratuvarda bakteri ve virüslerin karşılaştırılması konak bağımlılığını açık biçimde gösterir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bakteriler uygun besin içeren hücresiz bir ortamda metabolik faaliyet gösterebilir ve bölünebilir. Virüsler aynı ortamda besin bulunsa bile ATP üretemez, protein sentezleyemez ve yeni parçacık oluşturamaz.',
        },
        {
          type: 'example',
          text: 'Virüs uygun canlı hücre kültürüne aktarıldığında hücrenin enerji, ribozom ve diğer sistemlerinden yararlanılarak yeni virüs parçacıkları oluşturulabilir.',
        },
        {
          type: 'example',
          text: 'Bir virüsün yüzeyde veya damlacık içinde bir süre yapısını koruması metabolizma yaptığı anlamına gelmez. Ortamda kalıcılık göstermek ile bağımsız yaşam sürdürmek farklıdır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k13-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Virüslerin hücresel olmadığını gösteren iki özellik nedir? 2) Virüsler neden kendi başlarına protein sentezleyemez? 3) Hücre içermeyen besin ortamı neden viral çoğalma için yeterli değildir? 4) Viral zarf neden hücresel yapı kanıtı değildir? 5) Konak hücrenin viral çoğalmadaki rolü nedir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap özeti: Sitoplazma ve ribozom yokluğu; protein sentezi için ribozom bulunmaması; canlı hücre sistemlerine ihtiyaç; zarfın hücresel organizasyon oluşturmaması; konağın enerji ve hücresel sistemlerinin kullanılması.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k13-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Bu kazanımı tamamlayan öğrenci, virüslere ilişkin gözlem veya deney sonuçlarından hareketle hücresel yapının bulunmadığını, bağımsız metabolizma gerçekleştirilemediğini ve çoğalmanın yalnızca uygun canlı konak hücre içinde gerçekleştiğini ayrı ayrı gerekçelendirebilmelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Başarı ölçütü: Öğrenci virüsü bakteriden yalnızca boyut veya hastalık yapma özelliğiyle değil; hücresel organizasyon, metabolizma ve bağımsız çoğalma ölçütleriyle ayırt eder.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k13: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k13-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Hücresel Olmayan Yapı',
    definition: 'Sitoplazma, ribozom ve organellerden oluşan hücresel organizasyona sahip olmayan yapıdır.',
    example: 'Virüsler hücresel olmayan yapılardır.',
  },
  {
    id: 'fc-9bio-1.4-k13-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Bağımsız Metabolizma',
    definition: 'Bir hücrenin kendi sistemleriyle enerji üretmesi ve yapım-yıkım tepkimelerini gerçekleştirmesidir.',
    example: 'Virüsler bağımsız metabolizma gerçekleştiremez.',
  },
  {
    id: 'fc-9bio-1.4-k13-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Konak Hücre',
    definition: 'Virüsün çoğalmak için enerji ve hücresel sistemlerinden yararlandığı canlı hücredir.',
    example: 'Grip virüsünün uygun solunum yolu hücresinden yararlanması.',
  },
  {
    id: 'fc-9bio-1.4-k13-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Ribozom Eksikliği',
    definition: 'Virüslerin kendi başlarına protein sentezleyememesinin temel nedenlerinden biridir.',
    example: 'Viral proteinler konak hücrenin ribozomlarından yararlanılarak üretilir.',
  },
  {
    id: 'fc-9bio-1.4-k13-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Viral Çoğalma',
    definition: 'Konak hücrenin sistemleri kullanılarak yeni virüs parçacıklarının oluşturulmasıdır.',
    example: 'Hücre içermeyen besin ortamında viral çoğalma gerçekleşmez.',
  },
  {
    id: 'fc-9bio-1.4-k13-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Zorunlu Hücre İçi Bağımlılık',
    definition: 'Virüsün yeni parçacık oluşturabilmek için uygun canlı hücreye ihtiyaç duymasıdır.',
    example: 'Virüsün yalnızca uygun konak hücre bulunduğunda çoğalması.',
  },
];
