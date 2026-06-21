import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.1-intro';

export const layers_9bio_1_1_k2: LessonLayer[] = [
  {
    id: '9bio-1.1-k2-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Biyoloji bilgisi; sağlık, tarım, çevre, genetik, biyoteknoloji, ekoloji ve sürdürülebilirlik gibi alanlarda canlı yaşamını anlamak ve sorunlara çözüm üretmek için kullanılır. Bu kazanımda önemli olan, biyolojinin sadece bir ders değil, günlük yaşamı ve toplum sağlığını etkileyen bir bilim olduğunu örneklerle görebilmektir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Biyolojinin önemi, canlılarla ilgili bilgiyi gerçek yaşam problemlerine uygulayabilmesinden gelir.',
        },
        {
          type: 'example',
          text: 'Aşı geliştirme sağlıkla, verimli tohum üretimi tarımla, kirliliğin canlılara etkisini inceleme çevre biyolojisiyle ilişkilidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k2-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.1-k2-infographic',
      body: 'Bu kazanım için merkezinde "Biyoloji" bulunan bir kavram haritası düşünülebilir. Merkezden sağlık, tarım, çevre, genetik, biyoteknoloji, ekoloji ve sürdürülebilirlik başlıklarına oklar çıkar. Her başlığın yanına bir gerçek yaşam örneği eklenir.',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Şema fikri: Biyoloji merkezde, çevresinde yedi uygulama alanı. Her alanın ucunda kısa bir örnek: aşı, verimli tohum, geri dönüşüm, DNA testi, insülin üretimi, ekosistem dengesi, sürdürülebilir tarım.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k2-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Biyoloji bilgisinin bir probleme çözüm üretme süreci genellikle benzer adımlarla ilerler.',
      steps: [
        '1. Problem belirlenir: Örneğin bir hastalık yayılıyor, tarım verimi düşüyor veya bir gölde canlı çeşitliliği azalıyor.',
        '2. Canlılarla ilgili veriler toplanır: Hastalık etkeni, toprak yapısı, su kirliliği veya tür sayısı incelenir.',
        '3. Biyolojik bilgi kullanılır: Mikroorganizmalar, genetik özellikler, ekosistem ilişkileri veya canlıların ihtiyaçları değerlendirilir.',
        '4. Çözüm geliştirilir: Aşı, biyolojik mücadele, çevre koruma planı veya sürdürülebilir üretim yöntemi uygulanabilir.',
        '5. Sonuç izlenir: Çözümün canlılar, insanlar ve çevre üzerindeki etkisi takip edilir.',
      ],
    },
  },
  {
    id: '9bio-1.1-k2-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu kazanımda sık geçen kavramlar biyolojinin farklı uygulama alanlarını anlamana yardım eder.',
      highlightBoxes: [
        { type: 'tip', text: 'Sağlık: Hastalıkların tanınması, aşıların geliştirilmesi ve tedavi yöntemlerinin oluşturulması.' },
        { type: 'tip', text: 'Tarım: Verimli, dayanıklı ve kaliteli ürün elde etmek için canlı bilgisinin kullanılması.' },
        { type: 'tip', text: 'Genetik: Kalıtsal özelliklerin ve hastalıkların DNA ile ilişkisinin incelenmesi.' },
        { type: 'tip', text: 'Biyoteknoloji: Canlıların veya canlı ürünlerinin teknolojiyle birlikte kullanılması.' },
        { type: 'tip', text: 'Ekoloji: Canlıların birbirleriyle ve çevreleriyle ilişkilerini inceleyen biyoloji alanı.' },
        { type: 'tip', text: 'Sürdürülebilirlik: Doğal kaynakları tüketmeden, gelecek nesilleri de düşünerek kullanma yaklaşımı.' },
      ],
    },
  },
  {
    id: '9bio-1.1-k2-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bu kazanımda öğrencilerin sık karıştırdığı bazı noktalar vardır.',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Biyoloji sadece insan sağlığıyla ilgilidir. Doğrusu: Biyoloji sağlık dışında tarım, çevre, ekoloji, genetik, biyoteknoloji ve sürdürülebilirlik alanlarında da kullanılır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Tarım sadece toprak ve hava koşullarıyla ilgilidir. Doğrusu: Bitki ıslahı, zararlılarla mücadele, tohum seçimi ve mikroorganizmalar tarımda biyoloji bilgisinin kullanıldığı alanlardır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Sürdürülebilirlik sadece geri dönüşüm demektir. Doğrusu: Sürdürülebilirlik; kaynak kullanımı, biyoçeşitlilik, tarım, enerji ve ekosistem dengesiyle birlikte düşünülür.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k2-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle örnek-alan eşleştirme soruları şeklinde gelir.',
      tytPattern: 'Bir örnek verilir ve hangi biyoloji alanıyla ilişkili olduğu sorulur. Aşı geliştirme sağlık ve biyoteknolojiyle, verimli tohum geliştirme tarımla, biyoçeşitliliğin korunması ekoloji ve sürdürülebilirlikle ilişkilendirilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Soru çözerken örnekteki ana problemi bul: hastalık mı, üretim mi, çevre mi, kalıtım mı, ekosistem mi? Ana problem doğru alanı gösterir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k2-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Biyoloji bilgisinin günlük ve toplumsal yaşamda birçok somut karşılığı vardır.',
      highlightBoxes: [
        { type: 'example', text: 'Sağlık: Aşılar ve bazı ilaçlar biyolojik araştırmalar sayesinde geliştirilir.' },
        { type: 'example', text: 'Tarım: Kuraklığa dayanıklı bitki çeşitleri gıda üretimini destekleyebilir.' },
        { type: 'example', text: 'Çevre: Su kirliliğinin balıklar ve mikroorganizmalar üzerindeki etkisi biyolojiyle incelenir.' },
        { type: 'example', text: 'Genetik: Kalıtsal hastalık riskleri DNA bilgisiyle değerlendirilebilir.' },
        { type: 'example', text: 'Sürdürülebilirlik: Kompost yapımı, organik atıkların canlılar yardımıyla yeniden değerlendirilmesine örnektir.' },
      ],
    },
  },
  {
    id: '9bio-1.1-k2-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Aşı geliştirme hangi alanlarla ilişkilidir? 2) Verimli tohum üretimi hangi yaşam problemine çözüm sunar? 3) Biyoçeşitliliğin korunması neden sürdürülebilirlikle ilgilidir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarını alan adı + örnek biçiminde kur: "Sağlık, çünkü..." veya "Tarım, çünkü..."',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k2-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Biyolojinin farklı alanlardaki önemini açıklarken her alan için en az bir örnek verebilmelisin. Örneğin sağlık için aşı, tarım için dayanıklı tohum, çevre için kirlilik takibi, genetik için DNA testi, sürdürülebilirlik için kaynakların bilinçli kullanımı örnek verilebilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımı tamamladığını göstermek için sadece alan adlarını sayman yetmez; her alanın yaşamda hangi probleme çözüm sunduğunu açıklamalısın.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_1_k2: Flashcard[] = [
  {
    id: 'fc-9bio-1.1-k2-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Sağlıkta Biyoloji',
    definition: 'Hastalıkların tanınması, önlenmesi ve tedavisinde canlılarla ilgili bilgilerin kullanılmasıdır.',
    example: 'Aşı geliştirme ve mikroorganizmaların hastalıklarla ilişkisinin araştırılması.',
  },
  {
    id: 'fc-9bio-1.1-k2-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Tarımda Biyoloji',
    definition: 'Bitkilerin, toprağın, zararlı canlıların ve mikroorganizmaların bilgisiyle üretimi artırmaya katkı sağlar.',
    example: 'Kuraklığa dayanıklı bitki çeşitlerinin geliştirilmesi.',
  },
  {
    id: 'fc-9bio-1.1-k2-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Biyoteknoloji',
    definition: 'Canlıların veya canlı ürünlerinin teknolojiyle birlikte kullanılarak yararlı ürünler elde edilmesidir.',
    example: 'Bakterilerden insülin üretimi.',
  },
  {
    id: 'fc-9bio-1.1-k2-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Ekoloji',
    definition: 'Canlıların birbirleriyle ve çevreleriyle olan ilişkilerini inceleyen biyoloji alanıdır.',
    example: 'Bir göldeki kirliliğin balık ve alg topluluklarına etkisinin incelenmesi.',
  },
  {
    id: 'fc-9bio-1.1-k2-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Sürdürülebilirlik',
    definition: 'Doğal kaynakların bugünün ihtiyaçlarını karşılarken gelecek nesiller için de korunmasıdır.',
    example: 'Biyoçeşitliliği koruyan tarım yöntemlerinin tercih edilmesi.',
  },
  {
    id: 'fc-9bio-1.1-k2-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Genetik',
    definition: 'Canlıların kalıtsal özelliklerini ve bu özelliklerin nesilden nesile aktarılmasını inceler.',
    example: 'Kalıtsal hastalık risklerinin DNA bilgisiyle değerlendirilmesi.',
  },
];
