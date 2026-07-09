import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-properties';

export const layers_9bio_1_4_k10: LessonLayer[] = [
  {
    id: '9bio-1.4-k10-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Homeostazi, canlının iç ortam koşullarını yaşam faaliyetlerine uygun sınırlar içinde tutmasıdır. Vücut sıcaklığı, su-mineral miktarı, kan şekeri ve pH gibi değerler değişebilir; düzenleyici süreçler bu değişkenlerin uygun aralıklara dönmesine yardım eder. Böylece hücreler işlevlerini sürdürebilecekleri kararlı bir iç ortamda çalışır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Homeostazi mutlak sabitlik değil, değişimlere rağmen uygun sınırların korunduğu dinamik dengedir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k10-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k10-infographic',
      body: 'Bu kazanım için dairesel bir homeostazi şeması kullanılabilir: Dış veya İç Değişim -> Algılama -> Düzenleyici Yanıt -> İç Dengenin Yeniden Kurulması. Vücut sıcaklığı, su dengesi ve kan şekeri örnekleri paralel döngülerle gösterilmelidir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Alt karşılaştırma paneli: Uyaran-tepki, bir değişime verilen yanıtı; homeostazi, iç koşulların uygun aralıkta tutulmasını; adaptasyon ise nesillerle ilişkili kalıtsal uyumu açıklar.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k10-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Homeostazinin kararlı iç ortamı koruması şu akışla açıklanabilir:',
      steps: [
        '1. Canlının iç ortamındaki bir değişken uygun aralığın dışına yönelir.',
        '2. Bu değişim canlıdaki ilgili yapılar tarafından algılanır.',
        '3. Değişimin etkisini azaltacak düzenleyici bir yanıt oluşturulur.',
        '4. Sıcaklık arttığında ısı kaybını artıran süreçler devreye girebilir.',
        '5. Sıcaklık düştüğünde ısı üretimini artıran süreçler görülebilir.',
        '6. Su, mineral, kan şekeri ve pH gibi değişkenler de uygun sınırlar içinde düzenlenir.',
        '7. Değişken uygun aralığa yaklaştığında düzenleyici yanıt azalır.',
        '8. Böylece hücrelerin çalışmasına uygun kararlı iç ortam korunur.',
      ],
    },
  },
  {
    id: '9bio-1.4-k10-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Homeostaziyi açıklayan temel kavramlar:',
      highlightBoxes: [
        { type: 'tip', text: 'Homeostazi: İç ortam koşullarının uygun sınırlar içinde korunmasıdır.' },
        { type: 'tip', text: 'İç ortam: Hücrelerin çevresini oluşturan ve yaşam faaliyetlerini etkileyen vücut içi koşullardır.' },
        { type: 'tip', text: 'Dinamik denge: Değişimler gerçekleşirken uygun sınırların korunmasıdır.' },
        { type: 'tip', text: 'Normal aralık: Bir değişkenin sağlıklı işleyişe uygun değer sınırlarıdır.' },
        { type: 'tip', text: 'Düzenleyici yanıt: İç değişimin etkisini azaltmaya yardımcı olan biyolojik yanıttır.' },
        { type: 'tip', text: 'Negatif geri bildirim: Bir değişimi azaltarak sistemi uygun aralığa yaklaştıran düzenleme biçimidir.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k10-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Homeostaziyle ilgili sık görülen yanılgılar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Homeostazi bütün değerlerin hiç değişmemesidir. Doğrusu: Değerler değişebilir; önemli olan uygun sınırlar içinde düzenlenmeleridir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Vücut sıcaklığı her an tam olarak 37 °C olmalıdır. Doğrusu: Vücut sıcaklığı küçük değişimler gösterebilir ve uygun bir aralıkta tutulur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Terleme yalnızca boşaltımdır. Doğrusu: Terleme su ve mineral uzaklaştırılmasına katkı sağlarken vücut sıcaklığının düzenlenmesine de yardım eder.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Homeostazi yalnızca insanlarda görülür. Doğrusu: Canlılar yapılarına uygun düzenleyici süreçlerle iç dengelerini korur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Homeostazi adaptasyonla aynı şeydir. Doğrusu: Homeostazi bireyin iç dengesini düzenler; adaptasyon kalıtsal ve nesillerle ilişkili bir özelliktir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k10-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT sorularında düzenlenen iç değişken, değişimin yönü ve yanıtın değişkeni uygun aralığa yaklaştırıp yaklaştırmadığı incelenir.',
      tytPattern: 'Sıcaklık, su-mineral miktarı, kan şekeri veya pH gibi bir iç değişken verildiğinde düzenleyici yanıtın bu değişkeni uygun aralığa döndürmesine odaklan.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: Homeostazi "değişmemek" değil, değişime karşı düzenleme yaparak uygun aralıkta kalmaktır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k10-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Homeostazi günlük yaşamda farklı iç değişkenlerin düzenlenmesiyle gözlenebilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Sıcak bir günde terleme, vücuttan ısı kaybına katkı sağlayarak sıcaklığın uygun aralığa dönmesine yardım eder. Soğukta titreme ise ısı üretimini artırabilir.',
        },
        {
          type: 'example',
          text: 'Yaz ve kış aylarında dış ortam sıcaklığı büyük ölçüde değişse de sağlıklı bir insanın iç vücut sıcaklığı görece dar bir aralıkta kalır. Bu durum ayrıntılı mekanizmalardan bağımsız olarak iç dengenin korunduğunu gösterir.',
        },
        {
          type: 'example',
          text: 'Yemekten sonra kan şekeri yükselebilir; düzenleyici süreçler değerin yeniden uygun aralığa yaklaşmasına yardım eder.',
        },
        {
          type: 'example',
          text: 'Yeterli su alınmadığında vücut su kaybını azaltmaya yönelik düzenlemeler yapabilir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k10-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Homeostazi neden mutlak sabitlik değildir? 2) Sıcak havada terleme hangi iç değişkenin düzenlenmesine yardım eder? 3) Yemek sonrası kan şekerinin uygun aralığa dönmesi hangi canlılık özelliğidir? 4) Homeostazi ile adaptasyon arasındaki temel fark nedir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap: 1) Değerler değişebilir ancak uygun aralıkta tutulur. 2) Vücut sıcaklığı. 3) Homeostazi. 4) Homeostazi bireysel düzenleme, adaptasyon kalıtsal uyum özelliğidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k10-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Bu kazanımı tamamlayan öğrenci homeostaziyi tanımlayabilmeli; kararlı iç ortam ile mutlak sabitliği ayırabilmeli; sıcaklık, su-mineral dengesi, kan şekeri ve pH örneklerini homeostaziyle ilişkilendirebilmelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Başarı ölçütü: Öğrenci değişim, düzenleyici yanıt ve uygun aralığa dönüş akışını açıklayarak uyaran-tepki, homeostazi ve adaptasyonu birbirinden ayırır.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k10: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k10-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Homeostazi',
    definition: 'Canlının iç ortam koşullarını yaşam için uygun sınırlar içinde tutmasıdır.',
    example: 'Vücut sıcaklığının uygun aralıkta korunması.',
  },
  {
    id: 'fc-9bio-1.4-k10-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'İç Ortam',
    definition: 'Hücrelerin çevresini oluşturan ve yaşam faaliyetlerini etkileyen vücut içi koşullardır.',
    example: 'Kan şekeri, pH ve su-mineral düzeyi iç ortamla ilişkilidir.',
  },
  {
    id: 'fc-9bio-1.4-k10-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Dinamik Denge',
    definition: 'Değişimler gerçekleşirken uygun sınırların korunmasıdır.',
    example: 'Vücut sıcaklığının küçük değişimlere rağmen uygun aralıkta kalması.',
  },
  {
    id: 'fc-9bio-1.4-k10-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Normal Aralık',
    definition: 'Bir iç değişkenin sağlıklı işleyişe uygun değer sınırlarıdır.',
    example: 'Kan şekerinin belirli sınırlar içinde tutulması.',
  },
  {
    id: 'fc-9bio-1.4-k10-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Düzenleyici Yanıt',
    definition: 'İç değişimin etkisini azaltarak uygun koşulların korunmasına yardım eden yanıttır.',
    example: 'Sıcak havada terleme.',
  },
  {
    id: 'fc-9bio-1.4-k10-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Negatif Geri Bildirim',
    definition: 'Bir değişimin etkisini azaltarak sistemi uygun aralığa yaklaştıran düzenlemedir.',
    example: 'Sıcaklık yükseldiğinde ısı kaybını artıran süreçlerin devreye girmesi.',
  },
];
