import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.2-scientific-method';

export const layers_9bio_1_2_k2: LessonLayer[] = [
  {
    id: '9bio-1.2-k2-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilimsel bilgi kanıta dayanır, test edilebilir ve eleştirel düşünmeye açıktır. Bu nedenle bilimsel bilgi güvenilirdir; ancak yeni gözlemler, deneyler ve kanıtlar ortaya çıktığında bilimsel açıklamalar gelişebilir veya güncellenebilir. Bilimsel bilginin değişebilir olması onun zayıf olduğu anlamına gelmez; tam tersine, kanıta göre kendini düzeltebilmesi bilimin güçlü yönlerinden biridir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimsel bilgi hem güvenilirdir hem de yeni kanıtlarla gelişebilir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k2-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.2-k2-infographic',
      body: 'Bu kazanım için döngü şeklinde bir görsel kullanılabilir: Bilimsel iddia -> test edilebilir soru -> gözlem veya deney -> kanıt -> eleştirel değerlendirme -> güçlenen veya güncellenen bilimsel bilgi.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bu döngü, bilimsel bilginin rastgele değil, kanıtlara göre geliştiğini gösterir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k2-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bir bilimsel iddiayı değerlendirirken şu akışı kullanabilirsin.',
      steps: [
        '1. İddianın bilimsel olup olmadığını anlamak için test edilebilirliğine bak.',
        '2. İddianın hangi kanıtlara dayandığını incele.',
        '3. Kanıtların gözlem veya deneyle desteklenip desteklenmediğini değerlendir.',
        '4. Farklı kanıtlar ortaya çıktığında açıklamanın değişip değişmediğini kontrol et.',
        '5. Eleştirel düşünerek "Bu açıklama kanıtlarla uyumlu mu?" sorusunu sor.',
        '6. Kanıtlarla daha iyi desteklenen açıklamayı tercih et.',
      ],
    },
  },
  {
    id: '9bio-1.2-k2-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu kazanımda şu kavramları net ayırt etmek önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Bilimsel bilgi: Gözlem, deney ve kanıtlara dayalı olarak üretilen bilgi.' },
        { type: 'tip', text: 'Kanıt: Bir açıklamayı destekleyen veri, gözlem veya deney sonucu.' },
        { type: 'tip', text: 'Test edilebilirlik: Bir iddianın gözlem veya deneyle sınanabilir olması.' },
        { type: 'tip', text: 'Değişebilirlik: Bilimsel açıklamaların yeni kanıtlarla gelişebilmesi veya güncellenebilmesi.' },
        { type: 'tip', text: 'Eleştirel düşünme: Bilgiyi kanıt, mantık ve güvenilirlik açısından sorgulama.' },
        { type: 'tip', text: 'Bilimsel iddia: Kanıtlarla desteklenmesi gereken açıklama veya önerme.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k2-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bu kazanımda sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Bilimsel bilgi değişebiliyorsa güvenilmezdir. Doğrusu: Bilimsel bilgi yeni kanıtlarla gelişebilir; bu, bilimin kendini düzeltme gücünü gösterir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bilimsel bilgi kişisel görüşlerle aynı şeydir. Doğrusu: Bilimsel bilgi kanıta ve test edilebilir açıklamalara dayanır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bir iddia test edilemiyorsa da bilimsel kabul edilir. Doğrusu: Bilimsel iddialar gözlem veya deneyle sınanabilir olmalıdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Eleştirel düşünme bilime karşı çıkmak demektir. Doğrusu: Eleştirel düşünme, bilgiyi kanıt ve mantık açısından değerlendirmektir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k2-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle bilimsel bilginin özelliklerini ayırt etmeye yönelik sorulur. Seçeneklerde "kesinlikle değişmez", "kanıta gerek yoktur", "test edilemez" gibi ifadeler varsa dikkatli ol.',
      tytPattern: 'Bilimsel bilgiyle ilgili doğru ifadeyi bulmak için kanıt, test edilebilirlik, yeni kanıtlarla gelişebilme ve eleştirel düşünmeye açıklık ölçütlerini ara.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimsel bilgi rastgele değişmez; yeni ve güçlü kanıtlar olduğunda gelişir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k2-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Bilimsel bilginin özellikleri günlük yaşamda bilgi değerlendirirken de kullanılır.',
      highlightBoxes: [
        { type: 'example', text: 'Yeni mikroskop teknolojileri geliştikçe hücreler ve mikroorganizmalar hakkında daha ayrıntılı bilgiler elde edilmiştir.' },
        { type: 'example', text: 'Bir sağlık bilgisinin güvenilir olup olmadığını anlamak için kanıta ve kaynağa bakmak gerekir.' },
        { type: 'example', text: 'Bir besinle ilgili iddia, deneysel veri veya güvenilir araştırma olmadan bilimsel kabul edilmez.' },
        { type: 'example', text: 'Çevre kirliliğinin canlılara etkisi hakkında yeni veriler toplandıkça açıklamalar güçlenebilir.' },
        { type: 'example', text: 'Bilimsel bir açıklama, yeni kanıtlarla desteklenirse daha güvenilir hale gelir.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k2-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Bilimsel bilginin değişebilir olması neden onun güvenilmez olduğu anlamına gelmez? 2) Test edilebilirlik bilimsel bilgi için neden önemlidir? 3) Kanıt ile kişisel görüş arasındaki fark nedir? 4) Eleştirel düşünme bilimsel bilgiyi nasıl güçlendirir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında kanıt, test edilebilirlik, değişebilirlik ve eleştirel düşünme kavramlarını kullan.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k2-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Bilimsel bilginin kanıta dayalı, test edilebilir, yeni kanıtlarla gelişebilir ve eleştirel düşünmeye açık olduğunu açıklayabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimsel bilginin güvenilirliğini kanıta dayanmasıyla, gelişebilirliğini ise yeni kanıtlarla güncellenebilmesiyle açıklayabilmelisin.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_2_k2: Flashcard[] = [
  {
    id: 'fc-9bio-1.2-k2-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Bilimsel Bilgi',
    definition: 'Gözlem, deney ve kanıtlara dayalı olarak üretilen güvenilir bilgidir.',
    example: 'Bir bitkinin büyümesini etkileyen koşulların deneylerle araştırılması.',
  },
  {
    id: 'fc-9bio-1.2-k2-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Kanıta Dayalı Bilgi',
    definition: 'Bir açıklamanın veri, gözlem veya deney sonuçlarıyla desteklenmesidir.',
    example: 'Bir hastalık etkeninin mikroskop ve testlerle belirlenmesi.',
  },
  {
    id: 'fc-9bio-1.2-k2-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Test Edilebilirlik',
    definition: 'Bir iddianın gözlem veya deneyle sınanabilir olmasıdır.',
    example: '"Işık bitki büyümesini etkiler mi?" sorusunun deneyle araştırılabilmesi.',
  },
  {
    id: 'fc-9bio-1.2-k2-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Değişebilirlik',
    definition: 'Bilimsel açıklamaların yeni kanıtlarla gelişebilmesi veya güncellenebilmesidir.',
    example: 'Daha gelişmiş mikroskoplarla hücre hakkında daha ayrıntılı bilgi edinilmesi.',
  },
  {
    id: 'fc-9bio-1.2-k2-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Eleştirel Düşünme',
    definition: 'Bir bilgiyi kanıt, mantık ve güvenilirlik açısından sorgulama becerisidir.',
    example: 'Bir sağlık bilgisinin kaynağını ve kanıtını kontrol etmek.',
  },
  {
    id: 'fc-9bio-1.2-k2-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Bilimsel İddia',
    definition: 'Kanıtlarla desteklenmesi ve test edilebilmesi gereken açıklama veya önermedir.',
    example: '"Bu ortamda bakteriler daha hızlı çoğalır" ifadesinin deneyle sınanması.',
  },
];
