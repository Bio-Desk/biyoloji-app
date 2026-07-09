import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.3-ethics';

export const layers_9bio_1_3_k4: LessonLayer[] = [
  {
    id: '9bio-1.3-k4-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Canlılar üzerinde yapılan araştırmalarda etik kurallar, insan, hayvan, bitki ve çevrenin gereksiz zarar görmesini önlemek için uygulanır. Bu kurallar araştırmanın bilimsel değerini korurken canlıların yaşam hakkına, sağlığına, refahına ve mahremiyetine saygı gösterilmesini sağlar.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Canlılar üzerinde araştırma yapılırken temel amaç, bilimsel bilgi üretirken canlılara verilebilecek zararı en aza indirmektir.',
        },
        {
          type: 'tip',
          text: 'Bilimsel gereklilik etik sorumluluğu ortadan kaldırmaz; önemli bir araştırma bile canlılara gereksiz zarar verecek biçimde yürütülemez.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k4-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.3-k4-infographic',
      body: 'Bu kazanım için dört bölümlü bir görsel kullanılabilir: İnsan Araştırmaları, Hayvan Araştırmaları, Bitki Araştırmaları, Çevre ve Ekosistem Araştırmaları. Her bölümde korunması gereken temel etik ilke ve örnek davranış gösterilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'İnsan araştırmaları: gönüllülük ve bilgilendirilmiş onam; hayvan araştırmaları: gereksiz acıyı azaltma; bitki araştırmaları: gereksiz yok etmeme; çevre araştırmaları: ekosisteme zarar vermeme.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k4-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Canlılar üzerinde yapılacak bir araştırmanın etik uygunluğu şu sorularla tartışılabilir:',
      steps: [
        '1. Araştırmanın amacı canlılara verilebilecek riski haklı çıkaracak kadar açık ve bilimsel midir?',
        '2. İnsan katılımcılar araştırmanın amacı, süreci ve olası riskleri hakkında bilgilendirilmiş midir?',
        '3. İnsan katılımcıların gönüllü onamı alınmış ve kişisel bilgileri gizli tutulmuş mudur?',
        '4. Hayvanlar üzerinde çalışılıyorsa gereksiz acı, stres ve zarar en aza indirilmiş midir?',
        '5. Hayvan kullanımı yerine hücre kültürü, bilgisayar modeli veya gözlem gibi alternatifler mümkün müdür?',
        '6. Bitki, habitat veya ekosistem üzerinde gereksiz tahribat oluşması önlenmiş midir?',
        '7. Araştırma başlamadan önce gerekli izinler ve etik kurul değerlendirmesi yapılmış mıdır?',
      ],
    },
  },
  {
    id: '9bio-1.3-k4-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Canlılar üzerinde yapılan araştırmalarda şu kavramlar önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Bilgilendirilmiş onam: Katılımcının araştırmanın amacı, süreci ve riskleri hakkında bilgilendirildikten sonra gönüllü olarak katılmayı kabul etmesidir.' },
        { type: 'tip', text: 'Gönüllülük: İnsan katılımcının baskı altında kalmadan araştırmaya katılma ya da katılmama hakkına sahip olmasıdır.' },
        { type: 'tip', text: 'Mahremiyet: Katılımcıya ait kişisel bilgilerin izinsiz paylaşılmaması ve gizli tutulmasıdır.' },
        { type: 'tip', text: 'Hayvan refahı: Deney hayvanlarının gereksiz acı, stres ve kötü koşullardan korunmasıdır.' },
        { type: 'tip', text: 'Alternatif yöntem: Canlıya zarar vermeyi azaltan veya canlı kullanımını gereksiz kılan yöntemdir.' },
        { type: 'tip', text: 'Etik kurul: Araştırmanın canlılar açısından uygunluğunu değerlendiren yetkili kuruldur.' },
      ],
    },
  },
  {
    id: '9bio-1.3-k4-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Canlı araştırmalarında etik kurallarla ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Bilim için canlılara her türlü zarar verilebilir. Doğrusu: Bilimsel amaç olsa bile gereksiz zarar etik değildir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: İnsan katılımcı bir kez kabul ederse araştırmadan ayrılamaz. Doğrusu: Gönüllülük esastır; katılımcı araştırmadan ayrılma hakkına sahiptir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Hayvan deneylerinde etik kurallar sadece büyük hayvanlar için geçerlidir. Doğrusu: Deneyde kullanılan tüm hayvanların refahı gözetilmelidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bitki ve çevre araştırmalarında etik gerekmez. Doğrusu: Bitkiler, habitatlar ve ekosistemler de gereksiz tahribattan korunmalıdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Etik kurul araştırmayı yavaşlatan gereksiz bir aşamadır. Doğrusu: Etik kurul, canlıların korunması ve araştırmanın güvenilirliği için gereklidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k4-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle canlılar üzerinde yapılan bir araştırma senaryosu verip hangi davranışın etik olduğunu ya da etik olmadığını sorar.',
      tytPattern: 'İnsan araştırmalarında bilgilendirilmiş onam ve gizlilik; hayvan araştırmalarında gereksiz acıyı azaltma ve alternatif yöntem; bitki/çevre araştırmalarında gereksiz zarar vermeme vurgusu aranır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Soru canlılar üzerinde araştırma diyorsa, sadece sonuçlara değil; canlıların nasıl korunduğuna, izin/onam alınıp alınmadığına ve zararın azaltılıp azaltılmadığına bak.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k4-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Canlılar üzerinde araştırma etiği sağlık, çevre, tarım ve okul araştırmalarında karşımıza çıkar.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'İnsan araştırması: Bir sağlık anketinde katılımcılara araştırmanın amacı açıklanır, gönüllü onam alınır ve kişisel bilgiler gizli tutulur.',
        },
        {
          type: 'example',
          text: 'Klinik araştırma örneği: Bir aşı geliştirme çalışmasında gönüllüler araştırmanın amacı, olası yararları ve riskleri hakkında bilgilendirilir; güvenlik izlemi yapılır ve katılımcı mahremiyeti korunur.',
        },
        {
          type: 'example',
          text: 'Hayvan araştırması: Bir ilaç çalışmasında hayvan kullanımı zorunluysa gereksiz acıyı azaltacak yöntemler seçilir ve etik kurul izni alınır.',
        },
        {
          type: 'example',
          text: 'Alternatif yöntem: Canlı hayvan kullanmak yerine hücre kültürü veya bilgisayar modeli kullanılabiliyorsa bu yöntemler tercih edilir.',
        },
        {
          type: 'example',
          text: 'Bitki araştırması: Bir okul deneyinde gereğinden fazla bitki koparmak yerine sınırlı örnekle gözlem yapılır.',
        },
        {
          type: 'example',
          text: 'Çevre araştırması: Bir göl ekosisteminden örnek alınırken canlı yaşamına ve habitat yapısına zarar vermeyecek yöntem kullanılır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k4-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Bilgilendirilmiş onam neden önemlidir? 2) Hayvan araştırmalarında gereksiz acıyı azaltmak hangi etik sorumlulukla ilgilidir? 3) Bitki ve çevre araştırmalarında etik neden gereklidir? 4) Etik kurulun canlı araştırmalarındaki görevi nedir? 5) Alternatif yöntem tercih etmek neden etik bir davranıştır?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında gönüllülük, mahremiyet, hayvan refahı, alternatif yöntem, etik kurul ve zarar vermeme kavramlarını kullan.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k4-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Canlılar üzerinde yapılan araştırmalarda etik kuralların neden önemli olduğunu insan, hayvan, bitki ve çevre örnekleriyle tartışabiliyor; bilgilendirilmiş onam, mahremiyet, hayvan refahı, alternatif yöntem ve etik kurul kavramlarını doğru kullanabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda temel ölçüt, canlılar üzerinde araştırma yapılırken bilimsel amaç ile canlıların korunması arasındaki etik dengeyi açıklayabilmektir.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_3_k4: Flashcard[] = [
  {
    id: 'fc-9bio-1.3-k4-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Canlı Araştırmalarında Etik',
    definition: 'İnsan, hayvan, bitki ve çevre üzerinde yapılan araştırmalarda canlılara gereksiz zarar vermemeyi amaçlayan kurallar bütünüdür.',
    example: 'Bir deneyde canlılara zarar vermeyen ya da en az zarar veren yöntemi seçmek.',
  },
  {
    id: 'fc-9bio-1.3-k4-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Bilgilendirilmiş Onam',
    definition: 'Katılımcının araştırmanın amacı, süreci ve riskleri hakkında bilgilendirildikten sonra gönüllü olarak katılmayı kabul etmesidir.',
    example: 'Sağlık araştırmasına katılacak kişiye araştırma açıklanıp yazılı onay alınması.',
  },
  {
    id: 'fc-9bio-1.3-k4-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Mahremiyet',
    definition: 'Araştırmaya katılan kişilerin özel bilgilerinin izinsiz paylaşılmaması ve gizli tutulmasıdır.',
    example: 'Bir sağlık anketinde katılımcı adlarının raporda açıkça yazılmaması.',
  },
  {
    id: 'fc-9bio-1.3-k4-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Hayvan Refahı',
    definition: 'Araştırmalarda hayvanların gereksiz acı, stres ve kötü koşullardan korunmasıdır.',
    example: 'Deney hayvanlarına gereksiz acı vermeyen yöntemlerin kullanılması.',
  },
  {
    id: 'fc-9bio-1.3-k4-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Alternatif Yöntem',
    definition: 'Canlı kullanımını azaltan veya canlıya verilecek zararı en aza indiren araştırma yöntemidir.',
    example: 'Hayvan deneyi yerine hücre kültürü veya bilgisayar modeli kullanmak.',
  },
  {
    id: 'fc-9bio-1.3-k4-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Etik Kurul',
    definition: 'Canlılar üzerinde yapılacak araştırmanın etik kurallara uygunluğunu değerlendiren yetkili kuruldur.',
    example: 'Hayvan deneyine başlamadan önce etik kurul izni alınması.',
  },
];
