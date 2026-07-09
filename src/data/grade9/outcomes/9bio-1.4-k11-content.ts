import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-properties';

export const layers_9bio_1_4_k11: LessonLayer[] = [
  {
    id: '9bio-1.4-k11-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Varyasyon, aynı türün bireyleri arasında görülen farklılıklardır. Bu farklılıkların bazıları kalıtsal, bazıları ise çevresel etkilerle oluşabilir. Adaptasyon, belirli bir çevrede canlının yaşama ve üreme başarısına katkı sağlayan kalıtsal özelliktir. Kalıtsal varyasyonlar, avantaj sağlayan özelliklerin nesiller boyunca yaygınlaşmasına zemin hazırlar.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bireyler ihtiyaç duydukları için adaptasyon geliştirmez; adaptasyonlar popülasyonlarda nesiller boyunca yaygınlaşır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k11-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k11-infographic',
      body: 'Bu kazanım için görsel ilerleme kullanılabilir: Varyasyon -> Çevre Koşulları -> Yaşama ve Üreme Avantajı -> Gelecek Nesillerde Daha Sık Görülme -> Adaptasyon. Kalıtsal varyasyon, çevresel varyasyon, aklimatizasyon ve adaptasyon farklı renklerle gösterilmelidir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Karşılaştırma tablosu: Varyasyon bireyler arası farktır; çevresel varyasyon kalıtsal olmak zorunda değildir; kalıtsal varyasyon nesillere aktarılabilir; aklimatizasyon bireysel ve geçicidir; adaptasyon kalıtsal ve nesillerle ilişkilidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k11-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Kalıtsal varyasyon ve adaptasyon ilişkisi şu akışla açıklanabilir:',
      steps: [
        '1. Aynı türün bireyleri arasında farklı özellikler bulunur.',
        '2. Bu farklılıkların bir bölümü kalıtsaldır.',
        '3. Çevre koşulları bazı kalıtsal özelliklere sahip bireylere avantaj sağlayabilir.',
        '4. Avantajlı bireylerin yaşama ve üreme olasılığı daha yüksek olabilir.',
        '5. Bu bireyler özelliklerini yavrularına aktarabilir.',
        '6. Özellik nesiller boyunca popülasyonda daha yaygın hâle gelebilir.',
        '7. Belirli çevrede yaşama ve üreme başarısını artıran kalıtsal özellik adaptasyon olarak değerlendirilir.',
        '8. Her varyasyon adaptasyon değildir; çevresel ve kalıtsal olmayan farklılıklar da görülebilir.',
      ],
    },
  },
  {
    id: '9bio-1.4-k11-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Varyasyon ve adaptasyon ilişkisini açıklayan temel kavramlar:',
      highlightBoxes: [
        { type: 'tip', text: 'Varyasyon: Aynı tür bireyleri arasındaki farklılıklardır.' },
        { type: 'tip', text: 'Kalıtsal varyasyon: Nesillere aktarılabilen farklılıktır.' },
        { type: 'tip', text: 'Çevresel varyasyon: Çevre koşullarının etkisiyle oluşan ve kalıtsal olmak zorunda olmayan farklılıktır.' },
        { type: 'tip', text: 'Adaptasyon: Belirli çevrede yaşama ve üreme başarısına katkı sağlayan kalıtsal özelliktir.' },
        { type: 'tip', text: 'Doğal seçilim: Avantaj sağlayan kalıtsal özelliklerin nesiller boyunca yaygınlaşabilmesi sürecidir.' },
        { type: 'tip', text: 'Aklimatizasyon: Bireyin çevre değişimine yaşamı sırasında gösterdiği, kalıtsal olmayan uyumdur.' },
        { type: 'tip', text: 'Yapay seçilim: İnsanların istenen kalıtsal özelliklere sahip bireyleri üretim için seçmesidir.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k11-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Varyasyon ve adaptasyonla ilgili sık görülen yanılgılar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Canlı ihtiyaç duyduğu özelliği kazanarak adapte olur. Doğrusu: Adaptasyonlar kalıtsaldır ve popülasyonlarda nesiller boyunca yaygınlaşır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Her varyasyon adaptasyondur. Doğrusu: Adaptasyon belirli çevrede avantaj sağlayan kalıtsal özelliktir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Sporla gelişen kaslar yavrulara aktarılır. Doğrusu: Egzersizle oluşan bu değişim çevreseldir ve kalıtsal adaptasyon değildir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Adaptasyon ile homeostazi aynı olaydır. Doğrusu: Homeostazi bireyin iç dengesini; adaptasyon popülasyonun nesiller boyunca çevreye kalıtsal uyumunu açıklar.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Doğal seçilim ve yapay seçilim aynıdır. Doğrusu: Doğal seçilimde çevre koşulları, yapay seçilimde ise insanlar hangi bireylerin üretimde tercih edileceğini etkiler.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k11-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT sorularında kalıtsallık, çevresel avantaj ve nesiller boyunca yaygınlaşma ölçütleri birlikte aranır.',
      tytPattern: 'Özellik aynı tür bireyleri arasında farklılık oluşturuyor mu, kalıtsal mı, belirli çevrede yaşama veya üreme başarısına katkı sağlıyor mu ve nesiller boyunca yaygınlaşmış mı sorularını kullan.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: "Çevreye uyum" ifadesi tek başına adaptasyon demek değildir. Kalıtsallık ve nesiller boyunca yaygınlaşma aranmalıdır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k11-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Varyasyon ve seçilim günlük yaşamda ve tarımsal üretimde farklı biçimlerde gözlenebilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Kurak bölgelerde yaşayan bazı bitkilerin su kaybını azaltan kalın yüzeylere veya su depolayan yapılara sahip olması adaptasyon örneğidir.',
        },
        {
          type: 'example',
          text: 'Aynı tür salyangozların farklı kabuk renkleri kalıtsal varyasyon oluşturabilir. Ortamda daha az fark edilen renkler bazı bireylerin avcılardan korunmasına katkı sağlayabilir.',
        },
        {
          type: 'example',
          text: 'Çiftçiler daha verimli veya hastalıklara dayanıklı kalıtsal özelliklere sahip bitkileri üretim için seçebilir. Bu yapay seçilimdir; doğal seçilimden farklı olarak seçimi çevre koşulları yerine insan tercihi yönlendirir.',
        },
        {
          type: 'example',
          text: 'Düzenli egzersiz yapan bir insanın kaslarının gelişmesi çevresel değişimdir; adaptasyon değildir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k11-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Varyasyon nedir? 2) Her varyasyon neden adaptasyon değildir? 3) Adaptasyon hangi düzeyde ve ne kadar sürede yaygınlaşır? 4) Egzersizle kas gelişmesi adaptasyon mudur? 5) Yapay seçilim ile doğal seçilim arasındaki fark nedir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap: 1) Aynı tür bireyleri arasındaki farklılık. 2) Kalıtsal ve avantajlı olmayabilir. 3) Popülasyonda nesiller boyunca. 4) Hayır. 5) Yapay seçilimi insan tercihi, doğal seçilimi çevre koşulları yönlendirir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k11-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Bu kazanımı tamamlayan öğrenci varyasyon ve adaptasyonu tanımlayabilmeli; kalıtsal ve çevresel varyasyonları ayırabilmeli; bir özelliğin adaptasyon olup olmadığını kalıtsallık ve çevresel avantaj ölçütleriyle değerlendirebilmelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Başarı ölçütü: Öğrenci varyasyon, çevresel varyasyon, kalıtsal varyasyon, aklimatizasyon ve adaptasyonu karşılaştırarak doğal seçilim ile yapay seçilimi ayırır.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k11: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k11-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Varyasyon',
    definition: 'Aynı tür bireyleri arasında görülen farklılıklardır.',
    example: 'Aynı tür salyangozların farklı kabuk renklerine sahip olması.',
  },
  {
    id: 'fc-9bio-1.4-k11-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Kalıtsal Varyasyon',
    definition: 'Genetik temeli bulunan ve nesillere aktarılabilen farklılıktır.',
    example: 'Bir bitki türünde kalıtsal çiçek rengi farklılıkları.',
  },
  {
    id: 'fc-9bio-1.4-k11-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Çevresel Varyasyon',
    definition: 'Çevre koşullarının etkisiyle oluşan ve kalıtsal olmak zorunda olmayan farklılıktır.',
    example: 'Egzersiz yapan bireyin kaslarının gelişmesi.',
  },
  {
    id: 'fc-9bio-1.4-k11-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Adaptasyon',
    definition: 'Belirli çevrede yaşama ve üreme başarısına katkı sağlayan kalıtsal özelliktir.',
    example: 'Kurak bölge bitkilerinde su kaybını azaltan kalın yüzey.',
  },
  {
    id: 'fc-9bio-1.4-k11-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Doğal Seçilim',
    definition: 'Avantaj sağlayan kalıtsal özelliklerin nesiller boyunca yaygınlaşabilmesi sürecidir.',
    example: 'Ortamda daha az fark edilen kalıtsal renge sahip bireylerin daha sık üremesi.',
  },
  {
    id: 'fc-9bio-1.4-k11-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Aklimatizasyon',
    definition: 'Bireyin çevre değişimine yaşamı sırasında gösterdiği, kalıtsal olmayan uyumdur.',
    example: 'Yüksek rakıma çıkan bireyin zamanla ortam koşullarına alışması.',
  },
];
