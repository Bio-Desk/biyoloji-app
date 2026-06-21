import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.1-intro';

export const layers_9bio_1_1_k4: LessonLayer[] = [
  {
    id: '9bio-1.1-k4-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Biyolojideki bazı dönüm noktaları insan hayatını doğrudan değiştirmiştir. Mikroskop hücrelerin ve mikroorganizmaların görülmesini sağlamış, aşılar hastalıklardan korunmayı güçlendirmiş, antibiyotikler bakteriyel enfeksiyonların tedavisinde çığır açmış, DNA yapısının keşfi kalıtımın anlaşılmasına yol açmış, genetik mühendisliği ve biyoteknoloji ise canlı bilgisini ürün ve yöntem geliştirmede kullanılır hale getirmiştir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda önemli olan, dönüm noktasını ezberlemek değil; bu gelişmenin insan hayatında hangi soruna çözüm sunduğunu ilişkilendirmektir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k4-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.1-k4-infographic',
      body: 'Bu kazanım için bir "dönüm noktası - etki" eşleştirme şeması kullanılabilir. Sol tarafa mikroskop, aşı, antibiyotik, DNA, genetik mühendisliği ve biyoteknoloji yazılır; sağ tarafa bu gelişmelerin insan hayatındaki etkileri eklenir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Örnek eşleştirme: Mikroskop -> hücre ve mikroorganizmaların görülmesi; Aşı -> hastalıklardan korunma; Antibiyotik -> bakteriyel enfeksiyon tedavisi; DNA -> kalıtımın anlaşılması; Biyoteknoloji -> insülin gibi ürünlerin üretimi.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k4-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bir biyolojik dönüm noktasını insan hayatıyla ilişkilendirirken şu adımları izleyebilirsin.',
      steps: [
        '1. Dönüm noktasını belirle: Mikroskop, aşı, antibiyotik, DNA keşfi, genetik mühendisliği veya biyoteknoloji.',
        '2. Bu gelişmenin hangi bilgiyi ortaya çıkardığını düşün: Hücre, mikrop, bağışıklık, kalıtım veya gen aktarımı gibi.',
        '3. Hangi soruna çözüm sunduğunu bul: Hastalıkların önlenmesi, enfeksiyon tedavisi, kalıtsal bilginin anlaşılması veya üretim kolaylığı.',
        '4. İnsan hayatındaki etkisini açıkla: Yaşam süresi, sağlık, tanı, tedavi, gıda üretimi veya ilaç üretimi gibi.',
        '5. Gelişmelerin birbirini desteklediğini fark et: Mikroskop mikroorganizmaları tanımaya, bu bilgi aşı ve antibiyotik çalışmalarına zemin hazırlamıştır.',
      ],
    },
  },
  {
    id: '9bio-1.1-k4-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'K4 kazanımında geçen temel dönüm noktaları ve kavramlar:',
      highlightBoxes: [
        { type: 'tip', text: 'Mikroskop: Hücreleri ve mikroorganizmaları görmeyi sağlayan araç.' },
        { type: 'tip', text: 'Aşı: Bağışıklık sistemini hastalık etkenine karşı önceden hazırlayan biyolojik ürün.' },
        { type: 'tip', text: 'Antibiyotik: Bakterilerin çoğalmasını durduran veya bakterileri öldüren madde.' },
        { type: 'tip', text: 'DNA: Canlıların kalıtsal bilgisini taşıyan molekül.' },
        { type: 'tip', text: 'Genetik mühendisliği: DNA üzerinde değişiklik yaparak canlılara yeni özellikler kazandırma alanı.' },
        { type: 'tip', text: 'Biyoteknoloji: Canlıları veya canlı ürünlerini kullanarak yararlı ürün ve yöntemler geliştirme alanı.' },
      ],
    },
  },
  {
    id: '9bio-1.1-k4-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bu konuda sık görülen yanlış anlamalar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Aşı ve antibiyotik aynı şeydir. Doğrusu: Aşı hastalığa yakalanmadan önce bağışıklık kazandırmaya yardım eder; antibiyotik ise bakteriyel enfeksiyonların tedavisinde kullanılır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Antibiyotikler virüsleri öldürür. Doğrusu: Antibiyotikler bakterilere etkilidir; virüs kaynaklı hastalıklarda doğrudan etkili değildir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: DNA keşfi sadece teorik bir bilgidir. Doğrusu: DNA bilgisinin tıp, adli bilimler, genetik danışmanlık, biyoteknoloji ve tarım gibi birçok uygulaması vardır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k4-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle "dönüm noktası - etki" eşleştirmesi olarak sorulur.',
      tytPattern: 'Soru kökünde mikroskop, aşı, antibiyotik, DNA veya biyoteknoloji gibi bir gelişme verilir. Senden bu gelişmenin insan hayatına etkisini bulman istenir. Anahtar yöntem: Gelişmenin hangi biyolojik bilgiyi ortaya çıkardığını ve hangi günlük/sağlık sorununa çözüm sunduğunu eşleştir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Karıştırma: Aşı korunma ile, antibiyotik bakteriyel tedavi ile, DNA kalıtımın anlaşılması ile, biyoteknoloji canlılardan ürün elde etme ile ilişkilidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k4-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Biyolojideki dönüm noktaları günlük yaşamda pek çok sonuç doğurur.',
      highlightBoxes: [
        { type: 'example', text: 'Aşılar toplumda bazı bulaşıcı hastalıkların yayılmasını azaltmaya yardımcı olur.' },
        { type: 'example', text: 'Antibiyotikler bakteriyel enfeksiyonların tedavisinde kullanılarak insan sağlığına katkı sağlar.' },
        { type: 'example', text: 'Mikroskop sayesinde mikroorganizmalar incelenmiş, hastalıkların nedenleri daha iyi anlaşılmıştır.' },
        { type: 'example', text: 'DNA yapısının keşfi kalıtsal hastalıkların araştırılmasına ve adli DNA analizlerine katkı sağlamıştır.' },
        { type: 'example', text: 'Biyoteknoloji sayesinde bakteriler kullanılarak insülin gibi yararlı ürünler üretilebilir.' },
      ],
    },
  },
  {
    id: '9bio-1.1-k4-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Aşı ile antibiyotik arasındaki temel fark nedir? 2) DNA yapısının keşfi insan hayatına hangi alanlarda katkı sağlamıştır? 3) Mikroskobun hastalıkların anlaşılmasındaki rolünü bir cümleyle açıkla.',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarını "gelişme -> etki" biçiminde kurarsan bu kazanımı daha kolay pekiştirirsin.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k4-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Mikroskop, aşı, antibiyotik, DNA yapısının keşfi, genetik mühendisliği ve biyoteknoloji gibi dönüm noktalarını insan hayatındaki etkileriyle doğru ilişkilendirebiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Kendini kontrol et: Her dönüm noktası için "ne sağladı?" ve "insan hayatında neyi değiştirdi?" sorularına örnekli cevap verebilmelisin.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_1_k4: Flashcard[] = [
  {
    id: 'fc-9bio-1.1-k4-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Mikroskop',
    definition: 'Hücrelerin ve mikroorganizmaların incelenmesini sağlayan biyolojideki temel dönüm noktalarından biridir.',
    example: 'Bakterilerin ve bazı hastalık etkenlerinin gözlenebilmesi.',
  },
  {
    id: 'fc-9bio-1.1-k4-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Aşı',
    definition: 'Bağışıklık sistemini belirli bir hastalık etkenine karşı önceden hazırlayan biyolojik üründür.',
    example: 'Kızamık veya hepatit gibi hastalıklara karşı koruyucu bağışıklık oluşturma.',
  },
  {
    id: 'fc-9bio-1.1-k4-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Antibiyotik',
    definition: 'Bakteriyel enfeksiyonların tedavisinde kullanılan, bakterileri öldüren veya çoğalmalarını engelleyen maddedir.',
    example: 'Penisilinin bakteriyel enfeksiyonların tedavisinde kullanılması.',
  },
  {
    id: 'fc-9bio-1.1-k4-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'DNA Yapısının Keşfi',
    definition: 'Kalıtsal bilginin nasıl taşındığını ve aktarıldığını anlamaya büyük katkı sağlayan bilimsel gelişmedir.',
    example: 'Genetik hastalıkların ve adli DNA analizlerinin daha iyi anlaşılması.',
  },
  {
    id: 'fc-9bio-1.1-k4-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Genetik Mühendisliği',
    definition: 'Canlıların DNA üzerinde değişiklik yapılarak istenen özelliklerin kazandırılmasıyla ilgili uygulama alanıdır.',
    example: 'Bir bakteriye insan insülini üretmesini sağlayan genin aktarılması.',
  },
  {
    id: 'fc-9bio-1.1-k4-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Biyoteknoloji',
    definition: 'Canlıların veya canlı ürünlerinin teknolojiyle birlikte kullanılarak yararlı ürün ve yöntemler geliştirilmesidir.',
    example: 'Aşı, enzim veya insülin üretimi.',
  },
];
