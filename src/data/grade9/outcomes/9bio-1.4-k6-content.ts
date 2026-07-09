import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.4-properties';

export const layers_9bio_1_4_k6: LessonLayer[] = [
  {
    id: '9bio-1.4-k6-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Boşaltım, hücrelerde gerçekleşen metabolik olaylar sonucunda oluşan atık maddelerin ve bazı fazla maddelerin canlıdan uzaklaştırılmasıdır. Karbondioksit, fazla su, fazla mineral ve azotlu atıklar biriktiğinde hücrelerin çalıştığı iç ortam olumsuz etkilenebilir. Bu nedenle boşaltım, iç dengenin korunmasına katkıda bulunan yaşamsal bir faaliyettir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Boşaltım yalnızca idrar oluşturmak değildir; metabolik atıkların uzaklaştırılmasının genel adıdır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k6-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.4-k6-infographic',
      body: 'Bu kazanım için bir akış diyagramı kullanılabilir: Hücre Metabolizması -> Metabolik Atık Oluşumu -> Boşaltım Yapıları -> Atığın Uzaklaştırılması -> İç Dengenin Korunması. Karbondioksit, azotlu atıklar ve fazla su-mineraller farklı renklerle gösterilmelidir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'İnsanda karbondioksit akciğerlerle; üre, fazla su ve mineraller ise ağırlıkla böbreklerle uzaklaştırılır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k6-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Boşaltımın iç dengeye katkısı şu sırayla açıklanabilir:',
      steps: [
        '1. Hücrelerde besinlerin kullanılmasıyla metabolik faaliyetler gerçekleşir.',
        '2. Bu faaliyetler sonucunda karbondioksit ve azotlu atıklar gibi maddeler oluşur.',
        '3. Canlının vücudunda fazla su ve mineraller de birikebilir.',
        '4. Atık veya fazla maddeler uygun boşaltım yapılarıyla uzaklaştırılır.',
        '5. Maddelerin gerektiğinden fazla birikmesi önlenir.',
        '6. Hücrelerin çalıştığı iç ortam daha dengeli kalır.',
        '7. Böylece boşaltım, canlılığın sürmesine katkıda bulunur.',
      ],
    },
  },
  {
    id: '9bio-1.4-k6-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Boşaltımın iç dengeyle ilişkisini açıklayan temel kavramlar:',
      highlightBoxes: [
        { type: 'tip', text: 'Boşaltım: Metabolik atıkların ve bazı fazla maddelerin canlıdan uzaklaştırılmasıdır.' },
        { type: 'tip', text: 'Metabolik atık: Hücrelerin faaliyetleri sonucunda oluşan, birikmesi zararlı olabilen maddedir.' },
        { type: 'tip', text: 'Azotlu atık: Protein ve nükleik asit metabolizmasıyla ilişkili oluşan atık grubudur; insanda üre örnektir.' },
        { type: 'tip', text: 'İç denge: Hücrelerin çalışmasına uygun iç koşulların belirli sınırlar içinde korunmasıdır.' },
        { type: 'tip', text: 'Dışkılama: Sindirilemeyen besin artıklarının uzaklaştırılmasıdır; metabolik boşaltımla aynı değildir.' },
        { type: 'tip', text: 'Salgılama: Bir maddenin canlının yararına kullanılmak üzere hücre veya bezlerce üretilip verilmesidir.' },
      ],
    },
  },
  {
    id: '9bio-1.4-k6-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Boşaltımla ilgili sık görülen yanılgılar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Boşaltım sadece idrar yapmaktır. Doğrusu: İdrar oluşumu boşaltıma örnektir; karbondioksitin akciğerlerle uzaklaştırılması da boşaltımdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Dışkılama her zaman boşaltımdır. Doğrusu: Dışkılama sindirilemeyen besin artıklarının atılmasıdır; boşaltım metabolik atıkların uzaklaştırılmasıdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Salgılama bir boşaltımdır. Doğrusu: Salgılar, canlının kullanımı için üretilir; atık maddeler ise boşaltımla uzaklaştırılır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Boşaltım yalnızca insanlarda görülür. Doğrusu: Tüm canlılar metabolik atıklarını yapılarına uygun yollarla uzaklaştırır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k6-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde boşaltım sorularında önce maddenin kaynağına bakılır.',
      tytPattern: 'Hücre solunumu sonucu oluşuyorsa karbondioksit metabolik atıktır. Protein metabolizmasıyla ilişkiliyse üre boşaltım ürünüdür. Sindirilemeyen besin artığı ise metabolik boşaltım ürünü değildir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: "Akciğer sadece solunum organıdır" ifadesi eksiktir. Akciğerler karbondioksiti uzaklaştırdığı için boşaltıma da katkıda bulunur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k6-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Boşaltım, günlük yaşamda vücudun dengeli çalışmasını destekler.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Yoğun egzersizde hücrelerde daha fazla karbondioksit oluşur. Solunum hızının artması, oluşan karbondioksitin uzaklaştırılmasına da yardım eder.',
        },
        {
          type: 'example',
          text: 'Yeterli su içmek, vücudun normal boşaltım işlevlerini destekler. Bu, böbrek fizyolojisinin ayrıntılarına girmeden, suyun metabolik atıkların uzaklaştırılmasındaki rolünü gösterir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k6-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Hücre solunumu sonucu oluşan hangi madde akciğerlerle uzaklaştırılır? 2) Üre ve dışkının hangisi metabolik atıktır? 3) Boşaltım iç dengeye nasıl katkıda bulunur?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap: 1) Karbondioksit. 2) Üre. 3) Atık ve fazla maddelerin birikmesini önleyerek iç ortam dengesine katkıda bulunur.',
        },
      ],
    },
  },
  {
    id: '9bio-1.4-k6-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Bu kazanımı tamamlayan öğrenci, boşaltımı metabolik atıkların uzaklaştırılması olarak tanımlayabilmeli; karbondioksit ve üreyi metabolik atığa örnek verebilmeli; boşaltımla dışkılamayı ayırt edebilmelidir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Başarı ölçütü: Öğrenci, boşaltımın atık ve fazla maddelerin birikmesini önleyerek iç dengeye katkıda bulunduğunu açıklar.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_4_k6: Flashcard[] = [
  {
    id: 'fc-9bio-1.4-k6-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Boşaltım',
    definition: 'Metabolik atıkların ve bazı fazla maddelerin canlıdan uzaklaştırılmasıdır.',
    example: 'Karbondioksitin akciğerlerle vücuttan atılması.',
  },
  {
    id: 'fc-9bio-1.4-k6-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Metabolik Atık',
    definition: 'Hücrelerin faaliyetleri sonucunda oluşan ve birikmesi canlı için zararlı olabilen maddedir.',
    example: 'Hücre solunumuyla oluşan karbondioksit.',
  },
  {
    id: 'fc-9bio-1.4-k6-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Azotlu Atık',
    definition: 'Protein ve nükleik asit metabolizmasıyla ilişkili oluşan atık maddelerdir.',
    example: 'İnsanda ürenin böbrekler aracılığıyla uzaklaştırılması.',
  },
  {
    id: 'fc-9bio-1.4-k6-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'İç Denge',
    definition: 'Hücrelerin çalışmasına uygun iç koşulların belirli sınırlar içinde korunmasıdır.',
    example: 'Fazla su ve minerallerin uzaklaştırılmasıyla vücut sıvılarının dengelenmesi.',
  },
  {
    id: 'fc-9bio-1.4-k6-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Dışkılama',
    definition: 'Sindirilemeyen besin artıklarının vücuttan uzaklaştırılmasıdır; metabolik boşaltımla aynı değildir.',
    example: 'Besinlerin sindirilemeyen lifli kısmının dışkı ile atılması.',
  },
  {
    id: 'fc-9bio-1.4-k6-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Salgılama',
    definition: 'Bir maddenin canlının yararına kullanılmak üzere hücre veya bezlerce üretilip verilmesidir.',
    example: 'Tükürük bezlerinin sindirime yardımcı salgı üretmesi.',
  },
];
