import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.3-ethics';

export const layers_9bio_1_3_k5: LessonLayer[] = [
  {
    id: '9bio-1.3-k5-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilimsel bilgi, yalnızca yeni şeyler öğrenmek için değil, insanlara, canlılara, çevreye ve topluma yarar sağlayacak biçimde kullanılmalıdır. Bilimsel bir buluş ya da yöntem güçlü olabilir; ancak bu gücün etik sorumlulukla, zarar vermeme anlayışıyla ve toplum yararı gözetilerek kullanılması gerekir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimsel olarak mümkün olan her uygulama etik olarak doğru olmayabilir. Bilginin nasıl kullanıldığı da en az bilginin üretilmesi kadar önemlidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k5-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.3-k5-infographic',
      body: 'Bu kazanım için merkezinde "Bilimsel Bilgi" bulunan iki yönlü bir karar akışı kullanılabilir. Bir yanda toplum yararına ve sorumlu kullanım, diğer yanda kötüye kullanım örnekleri yer alır.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Sorumlu kullanım: halk sağlığı, çevre koruma, gıda güvenliği, sürdürülebilir teknoloji. Kötüye kullanım: ayrımcılık, yanlış bilgilendirme, çevre tahribatı, kısa vadeli kişisel çıkar.',
        },
        {
          type: 'tip',
          text: 'Akışın sonunda karar filtresi bulunabilir: "Toplum yararı sağlıyor mu?"',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k5-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bilimsel bilginin toplum yararına kullanılıp kullanılmadığını tartışmak için şu sorular sorulabilir:',
      steps: [
        '1. Bu bilgi veya uygulama insanların, canlıların ya da çevrenin yaşam kalitesini artırıyor mu?',
        '2. Uygulama bazı kişi veya gruplara zarar verme riski taşıyor mu?',
        '3. Bilginin kullanımı adil, şeffaf ve sorumlu biçimde planlanmış mı?',
        '4. Kısa vadeli çıkarlar, toplumun uzun vadeli yararının önüne geçiyor mu?',
        '5. Uygulamanın olası riskleri ve yararları birlikte değerlendirilmiş mi?',
        '6. Bilimsel bilgi, yanıltıcı reklam, ayrımcılık, çevre tahribatı veya zarar verici amaçlarla mı kullanılıyor?',
        '7. Bilginin kullanımı toplum yararını ve etik sorumluluğu birlikte gözetiyorsa savunulabilir.',
      ],
    },
  },
  {
    id: '9bio-1.3-k5-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu kazanımı savunurken şu kavramları doğru kullanmak gerekir:',
      highlightBoxes: [
        { type: 'tip', text: 'Bilimsel keşif: Bilimsel araştırmalarla yeni bilgiye ulaşılmasıdır.' },
        { type: 'tip', text: 'Bilimsel uygulama: Elde edilen bilginin sağlık, çevre, gıda veya teknoloji gibi alanlarda kullanılmasıdır.' },
        { type: 'tip', text: 'Toplum yararı: Bilimsel bilginin insanların, canlıların ve çevrenin iyiliğini gözeterek kullanılmasıdır.' },
        { type: 'tip', text: 'Etik sorumluluk: Bilimsel bilginin kullanımı sırasında zarar vermeme, adil olma ve güvenilir davranma yükümlülüğüdür.' },
        { type: 'tip', text: 'Risk-yarar dengesi: Bir uygulamanın olası yararları ile doğurabileceği zararların birlikte değerlendirilmesidir.' },
        { type: 'tip', text: 'Sorumlu kullanım: Bilimsel bilginin açık, güvenilir, adil ve zarar vermeyecek biçimde uygulanmasıdır.' },
        { type: 'tip', text: 'Kötüye kullanım: Bilimsel bilginin insanlara, canlılara, çevreye veya topluma zarar verecek amaçlarla kullanılmasıdır.' },
        { type: 'tip', text: 'Şeffaflık: Bilimsel bilgiye dayalı kararların açık gerekçelerle ve saklama yapılmadan paylaşılmasıdır.' },
      ],
    },
  },
  {
    id: '9bio-1.3-k5-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bilimsel bilginin kullanımıyla ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Bilimsel bilgi doğruysa her amaçla kullanılabilir. Doğrusu: Bilginin doğru olması, onun her kullanımını etik yapmaz.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Teknolojik olarak mümkün olan her uygulama yapılmalıdır. Doğrusu: Uygulamanın topluma, canlılara ve çevreye etkileri etik olarak değerlendirilmelidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Toplum yararı yalnızca insanlara fayda sağlamak demektir. Doğrusu: Toplum yararı çevre, diğer canlılar ve gelecek kuşaklar açısından da düşünülmelidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Kısa vadeli ekonomik kazanç toplum yararıyla aynıdır. Doğrusu: Toplum yararı uzun vadeli sağlık, güvenlik, adalet ve çevre etkilerini de kapsar.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bilim insanı bilginin kullanımından sorumlu değildir. Doğrusu: Bilimsel bilgi paylaşılırken ve uygulanırken etik sorumluluk devam eder.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k5-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle bilimsel bir bilginin veya biyolojik uygulamanın hangi amaçla kullanıldığını sorgular.',
      tytPattern: 'Doğru seçenek genellikle toplum yararı, zarar vermeme, çevreyi koruma, adil ve sorumlu kullanım vurgusu taşır. Yanlış seçeneklerde kısa vadeli çıkar, zarar verici amaç, yanıltıcı kullanım veya etik sorumluluğu yok sayma bulunur.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Soru "bilimsel bilgi nasıl kullanılmalıdır?" diyorsa yalnızca faydaya değil, bu faydanın etik sorumlulukla sağlanıp sağlanmadığına bak.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k5-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Bilimsel bilginin toplum yararına kullanılması sağlık, çevre, gıda, biyoteknoloji ve bilimsel iş birliği alanlarında görülebilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Sağlık örneği: Aşı bilgisi toplumda hastalıkların yayılmasını azaltmak için güvenilir, açık ve sorumlu biçimde kullanılmalıdır.',
        },
        {
          type: 'example',
          text: 'Açık bilim örneği: Araştırmacıların güvenilir verileri etik kurallara uyarak paylaşması, farklı ülkelerdeki bilim insanlarının hastalıklar, iklim değişikliği veya gıda güvenliği gibi sorunlara birlikte çözüm üretmesini sağlar.',
        },
        {
          type: 'example',
          text: 'Çevre örneği: Mikroorganizmaların kirliliği azaltmadaki rolü, su ve toprak temizliği için toplum yararına kullanılabilir.',
        },
        {
          type: 'example',
          text: 'Gıda örneği: Besin güvenliğiyle ilgili bilimsel bilgiler, halk sağlığını koruyacak şekilde paylaşılmalı; yanıltıcı reklam için kullanılmamalıdır.',
        },
        {
          type: 'example',
          text: 'Genetik bilgi örneği: Genetik test sonuçları hastalık risklerini anlamaya yardımcı olabilir; ancak ayrımcılık veya kişisel bilgileri kötüye kullanma amacıyla kullanılmamalıdır.',
        },
        {
          type: 'example',
          text: 'Biyoteknoloji örneği: Tarımsal verimliliği artıran uygulamalar çevreye, biyoçeşitliliğe ve toplumun uzun vadeli yararına göre değerlendirilmelidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k5-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Bilimsel bilginin toplum yararına kullanılması ne demektir? 2) Bilimsel keşif ile bilimsel uygulama arasındaki fark nedir? 3) Bilimsel olarak mümkün olan her uygulama neden otomatik olarak etik değildir? 4) Genetik bilginin kötüye kullanımına bir örnek ver. 5) Risk-yarar dengesi neden önemlidir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında toplum yararı, etik sorumluluk, zarar vermeme, risk-yarar dengesi ve sorumlu kullanım kavramlarını kullan.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k5-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Bilimsel bilginin toplum yararı gözetilerek kullanılması gerektiğini örneklerle savunabiliyor; bir bilimsel uygulamanın etik sorumluluk, zarar vermeme, çevre ve insan sağlığı açısından uygun olup olmadığını tartışabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda temel başarı, bilimsel bilginin yalnızca üretilmesini değil, nasıl ve hangi amaçla kullanıldığını etik açıdan savunabilmektir.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_3_k5: Flashcard[] = [
  {
    id: 'fc-9bio-1.3-k5-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Toplum Yararı',
    definition: 'Bilimsel bilginin insanların, canlıların, çevrenin ve gelecek kuşakların iyiliğini gözeterek kullanılmasıdır.',
    example: 'Aşı bilgisinin hastalıkların yayılmasını azaltmak için güvenilir biçimde kullanılması.',
  },
  {
    id: 'fc-9bio-1.3-k5-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Etik Sorumluluk',
    definition: 'Bilimsel bilginin kullanımı sırasında zarar vermeme, adil olma ve güvenilir davranma yükümlülüğüdür.',
    example: 'Genetik test sonuçlarını kişilere zarar verecek biçimde paylaşmamak.',
  },
  {
    id: 'fc-9bio-1.3-k5-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Sorumlu Kullanım',
    definition: 'Bilimsel bilginin açık, güvenilir, adil ve toplum yararını gözeten biçimde uygulanmasıdır.',
    example: 'Besin güvenliği bilgisini halk sağlığını korumak için paylaşmak.',
  },
  {
    id: 'fc-9bio-1.3-k5-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Kötüye Kullanım',
    definition: 'Bilimsel bilginin insanlara, canlılara, çevreye veya topluma zarar verecek amaçlarla kullanılmasıdır.',
    example: 'Biyolojik bilgiyi zarar verici bir madde geliştirmek için kullanmak.',
  },
  {
    id: 'fc-9bio-1.3-k5-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Risk-Yarar Dengesi',
    definition: 'Bir bilimsel uygulamanın olası yararları ile doğurabileceği zararların birlikte değerlendirilmesidir.',
    example: 'Yeni bir tarım uygulamasının verim artışıyla çevre etkilerini birlikte incelemek.',
  },
  {
    id: 'fc-9bio-1.3-k5-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Şeffaflık',
    definition: 'Bilimsel bilgiye dayalı kararların açık gerekçelerle, güvenilir verilerle ve saklama yapılmadan paylaşılmasıdır.',
    example: 'Bir halk sağlığı kararının hangi bilimsel verilere dayandığını açıklamak.',
  },
];
