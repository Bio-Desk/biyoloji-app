import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-properties';

export const layers_9bio_1_4_k8: LessonLayer[] = [
  {
    id: '9bio-1.4-k8-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Üreme, canlıların kendilerine benzer yeni bireyler oluşturmasıdır. Bir bireyin beslenmesi, solunum yapması veya iç dengesini koruması kendi yaşamını sürdürürken üreme, canlı türünün nesiller boyunca devam etmesini sağlar. Üreme eşeyli veya eşeysiz olabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Üreyemeyen bir birey yine canlıdır; üreme bireyin yaşamı için değil, türün devamlılığı için gereklidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k8-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k8-infographic',
      body: 'Bu kazanım için eşeyli ve eşeysiz üremeyi yan yana karşılaştıran bir tablo kullanılabilir. Tablo; ata canlı sayısı, gametlerin bulunması, döllenme, yavruların genetik benzerliği ve örnekler başlıklarını içermelidir. İki üreme kolu "Yeni bireyler -> Türün devamlılığı" sonucunda birleşmelidir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Eşeysiz üreme: genellikle tek ata canlı, gamet ve döllenme yok, benzer yavrular. Eşeyli üreme: gamet ve döllenme var, genetik açıdan farklı yavrular. Ayırt edici ölçüt ebeveyn sayısı değil, gamet ve döllenmedir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k8-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Eşeyli ve eşeysiz üremenin türün devamlılığına katkısı şu akışla açıklanabilir:',
      steps: [
        '1. Canlı, kalıtsal bilgisini yeni bireylere aktarır.',
        '2. Eşeysiz üremede yeni birey tek bir ata canlıdan oluşur.',
        '3. Eşeysiz üremede gamet birleşmesi ve döllenme gerçekleşmez.',
        '4. Eşeysiz üremeyle oluşan yavrular, mutasyonlar dışında ata canlıya genetik olarak büyük ölçüde benzer.',
        '5. Eşeyli üremede gametler oluşur ve döllenmeyle birleşir.',
        '6. Döllenme sonucunda zigot meydana gelir.',
        '7. Eşeyli üreme genetik açıdan farklı yavruların oluşmasına katkı sağlar.',
        '8. Her iki üreme biçimi de yeni bireyler oluşturarak türün devamlılığını destekler.',
      ],
    },
  },
  {
    id: '9bio-1.4-k8-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Üreme biçimlerini karşılaştırmak için şu temel kavramlar kullanılır:',
      highlightBoxes: [
        { type: 'tip', text: 'Üreme: Yeni bireylerin meydana gelmesini sağlayan yaşamsal olaydır.' },
        { type: 'tip', text: 'Eşeysiz üreme: Döllenme olmadan tek ata canlıdan yeni birey oluşmasıdır.' },
        { type: 'tip', text: 'Eşeyli üreme: Gametlerin döllenmeyle birleşmesine dayanan üreme biçimidir.' },
        { type: 'tip', text: 'Gamet: Eşeyli üremede birleşme özelliğine sahip üreme hücresidir.' },
        { type: 'tip', text: 'Döllenme: Gametlerin birleşmesi olayıdır.' },
        { type: 'tip', text: 'Zigot: Döllenme sonucunda oluşan ilk hücredir.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k8-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Üremeyle ilgili sık görülen yanılgılar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Üremeyen birey canlı değildir. Doğrusu: Üreme türün devamı için önemlidir; bireyin üreyememesi canlılığını ortadan kaldırmaz.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: İki organizmanın yer aldığı her olay eşeyli üremedir. Doğrusu: Eşeyli üremenin belirleyici ölçütü gametlerin bulunması ve döllenmenin gerçekleşmesidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Eşeysiz üremede oluşan yavrular her koşulda tamamen aynıdır. Doğrusu: Yavrular genellikle genetik olarak benzerdir; mutasyonlar farklılık oluşturabilir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Üreme ile büyüme aynı olaydır. Doğrusu: Büyüme bir bireyin boyut artışı, üreme ise yeni birey oluşmasıdır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k8-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT sorularında önce gamet ve döllenmenin bulunup bulunmadığı incelenir.',
      tytPattern: 'Döllenme yoksa eşeysiz; gametlerin birleşmesi ve döllenme varsa eşeyli üreme aranır. Bölünme, tomurcuklanma ve vejetatif üreme eşeysiz üreme örnekleridir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: Eşeyli üremeyi yalnızca "iki ebeveyn" ifadesiyle tanımlama. Güvenilir ölçüt gamet ve döllenmenin varlığıdır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k8-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Üreme biçimleri tarımda ve günlük yaşamda farklı amaçlarla kullanılır.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Çilek bitkisi sürünücü gövdeleriyle döllenme olmadan yeni bitkiler oluşturabilir. Bu olay eşeysiz üremedir.',
        },
        {
          type: 'example',
          text: 'Çiftçiler beğenilen meyve rengi, tat veya verim gibi özellikleri korumak için çoğu zaman vejetatif üremeyi tercih eder. Islah çalışmalarında eşeyli üreme ise genetik çeşitliliğe katkı sağlayabilir.',
        },
        {
          type: 'example',
          text: 'Ekmek mayasının tomurcuklanması eşeysiz; insanlarda yumurta ve sperm hücrelerinin birleşmesi eşeyli üreme örneğidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k8-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Üreme bireyin mi, türün mü devamlılığı için gereklidir? 2) Döllenme görülmeyen üreme biçimi hangisidir? 3) Gametlerin birleşmesiyle oluşan ilk hücrenin adı nedir? 4) Çileğin sürünücü gövdeyle çoğalması hangi üreme biçimidir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap: 1) Türün. 2) Eşeysiz üreme. 3) Zigot. 4) Eşeysiz üreme.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k8-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Bu kazanımı tamamlayan öğrenci, üremenin türün devamlılığındaki rolünü açıklayabilmeli; eşeyli ve eşeysiz üremeyi döllenme ölçütüyle ayırabilmeli ve verilen canlı örneklerini doğru üreme biçimiyle eşleştirebilmelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Başarı ölçütü: Öğrenci, gamet ve döllenmenin varlığını kullanarak üreme biçimini gerekçeli olarak belirler.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k8: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k8-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Üreme',
    definition: 'Canlıların kendilerine benzer yeni bireyler oluşturmasıdır.',
    example: 'Bir bitkinin yeni bitkilerin meydana gelmesini sağlaması.',
  },
  {
    id: 'fc-9bio-1.4-k8-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Eşeysiz Üreme',
    definition: 'Döllenme olmadan tek ata canlıdan yeni birey oluşmasıdır.',
    example: 'Mayaların tomurcuklanması.',
  },
  {
    id: 'fc-9bio-1.4-k8-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Eşeyli Üreme',
    definition: 'Gametlerin döllenmeyle birleşmesine dayanan üreme biçimidir.',
    example: 'İnsanlarda yumurta ve sperm hücrelerinin birleşmesi.',
  },
  {
    id: 'fc-9bio-1.4-k8-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Gamet',
    definition: 'Eşeyli üremede birleşme özelliğine sahip üreme hücresidir.',
    example: 'Yumurta ve sperm birer gamettir.',
  },
  {
    id: 'fc-9bio-1.4-k8-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Döllenme',
    definition: 'Gametlerin birleşerek zigotu oluşturmasıdır.',
    example: 'Yumurta ve sperm hücrelerinin birleşmesi.',
  },
  {
    id: 'fc-9bio-1.4-k8-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Zigot',
    definition: 'Döllenme sonucunda oluşan ilk hücredir.',
    example: 'Eşeyli üremede yeni bireyin gelişimi zigotla başlar.',
  },
];
