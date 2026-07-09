import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.2-scientific-method';

export const layers_9bio_1_2_k5: LessonLayer[] = [
  {
    id: '9bio-1.2-k5-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilimsel yöntem yalnızca basamakları ezberlemek için değil, gerçek bir biyolojik problemi düzenli biçimde araştırmak için kullanılır. Örneğin bir bitkinin yapraklarının sararması; gözlem yapma, problem belirleme, veri toplama, hipotez kurma, tahmin yapma, basit bir deney tasarlama, elde edilen verileri analiz etme ve sonuç çıkarma yoluyla incelenebilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda amaç, bilimsel yöntem basamaklarını basit bir biyolojik problem üzerinde uygulayabilmektir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k5-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.2-k5-infographic',
      body: 'Bu kazanım için örnek senaryo akış şeması kullanılabilir: Yaprak sararması gözlemi -> "Neden sarardı?" problemi -> ışık, su ve toprak bilgisi toplama -> az ışık hipotezi -> daha fazla ışık alan bitkide iyileşme tahmini -> basit karşılaştırmalı deney -> gözlem sonuçlarını tabloya alma -> sonuç çıkarma.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Görsel, bilimsel yöntemin bir biyolojik problemi çözmek için nasıl adım adım kullanıldığını göstermelidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k5-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Basit bir biyolojik problem üzerinde bilimsel yöntem şu şekilde uygulanabilir. Bulgular hipotezi desteklemezse çalışma boşa gitmez; elde edilen kanıtlara göre yeni bir hipotez kurulabilir.',
      steps: [
        '1. Gözlem: Saksı bitkisinin yapraklarında sararma fark edilir.',
        '2. Problem belirleme: "Bitkinin yaprakları neden sararıyor?" sorusu oluşturulur.',
        '3. Veri toplama: Bitkinin aldığı ışık, sulama sıklığı, toprak durumu ve ortam koşulları incelenir.',
        '4. Hipotez: "Bitki yeterli ışık alamadığı için yaprakları sararıyor olabilir." açıklaması kurulur.',
        '5. Tahmin: "Bitki daha aydınlık bir yere alınırsa yeni yaprakları daha sağlıklı gelişebilir." ifadesi oluşturulur.',
        '6. Deney tasarlama: Benzer iki bitkiden biri daha aydınlık, diğeri daha az ışıklı ortamda izlenir.',
        '7. Analiz: Günlere göre yaprak rengi ve büyüme gözlemleri tabloya yazılır ve karşılaştırılır.',
        '8. Sonuç çıkarma: Bulgular hipotezi destekliyorsa ışık eksikliğinin etkili olabileceği belirtilir; desteklemiyorsa başka nedenler araştırılır.',
      ],
    },
  },
  {
    id: '9bio-1.2-k5-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu kazanımda bilimsel yöntemi uygulamak için şu kavramlar kullanılır:',
      highlightBoxes: [
        { type: 'tip', text: 'Biyolojik problem: Canlılar veya canlılık olaylarıyla ilgili araştırılabilir sorundur.' },
        { type: 'tip', text: 'Gözlem: Problemi fark etmeyi sağlayan dikkatli incelemedir.' },
        { type: 'tip', text: 'Veri toplama: Problemle ilgili bilgi, ölçüm veya gözlem elde etmektir.' },
        { type: 'tip', text: 'Hipotez: Probleme yönelik geçici ve test edilebilir açıklamadır.' },
        { type: 'tip', text: 'Tahmin: Hipotez doğruysa beklenen durumu ifade etmektir.' },
        { type: 'tip', text: 'Deney tasarlama: Hipotezi sınamak için düzenli bir çalışma planlamaktır.' },
        { type: 'tip', text: 'Sonuç çıkarma: Bulgulara dayanarak hipotezin desteklenip desteklenmediğini açıklamaktır.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k5-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bilimsel yöntemi uygularken sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Gözlem yapmak problemi çözmek için yeterlidir. Doğrusu: Gözlem problemi fark ettirir; sonuç için veri toplama, deneme ve analiz gerekir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Hipotez kesin sonuçtur. Doğrusu: Hipotez test edilecek geçici açıklamadır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Tahmin ile sonuç aynı şeydir. Doğrusu: Tahmin araştırmadan önce beklenen durumu, sonuç ise elde edilen bulgulara dayalı değerlendirmeyi ifade eder.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Sonuç beklenenden farklı çıkarsa çalışma boşa gitmiştir. Doğrusu: Beklenmeyen sonuçlar da yeni araştırma soruları oluşturabilir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k5-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım, verilen bir biyolojik senaryoda hangi ifadenin gözlem, problem, hipotez, tahmin, analiz veya sonuç olduğunu ayırt ettirebilir.',
      tytPattern: 'Senaryo sorularında önce olayın ne olduğuna bak: fark edilen durum gözlem, soru cümlesi problem, geçici açıklama hipotez, beklenen durum tahmin, bulguların karşılaştırılması analiz, bulgulara dayalı karar ise sonuçtur.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Soru bir senaryo veriyorsa, her cümlenin bilimsel yöntemde hangi basamağa karşılık geldiğini tek tek belirle.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k5-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Bilimsel yöntem okulda, evde veya doğada karşılaşılan basit biyolojik sorunları anlamak için kullanılabilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bir yoğurdun buzdolabı dışında daha hızlı bozulduğunu fark etmek gözleme örnektir.',
        },
        {
          type: 'example',
          text: '"Sıcak ortam besin bozulmasını hızlandırır mı?" sorusu biyolojik probleme örnektir.',
        },
        {
          type: 'example',
          text: 'Aynı besinin farklı sıcaklıklarda belirli süre gözlenmesi basit deney tasarımına örnektir.',
        },
        {
          type: 'example',
          text: 'Gözlenen koku, renk ve yapı değişimlerini tabloya yazıp karşılaştırmak analiz basamağına örnektir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k5-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) "Bitki yaprakları sarardı" ifadesi hangi basamaktır? 2) "Yapraklar neden sarardı?" ifadesi hangi basamaktır? 3) "Az ışık yaprak sararmasına neden olabilir" ifadesi hangi basamaktır? 4) Daha fazla ışık verilirse ne beklenir? 5) Gözlem sonuçları karşılaştırıldıktan sonra hangi basamak yapılır?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında senaryodaki ifadeleri bilimsel yöntem basamaklarıyla eşleştir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k5-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Basit bir biyolojik problem verildiğinde gözlemi, problemi, veri toplama yolunu, hipotezi, tahmini, deney tasarımını, analizi ve sonucu ayırt edip sıralayabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda başarı ölçütü, bilimsel yöntem basamaklarını gerçek bir biyolojik örnek üzerinde doğru uygulamaktır.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_2_k5: Flashcard[] = [
  {
    id: 'fc-9bio-1.2-k5-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Biyolojik Problem',
    definition: 'Canlılar veya canlılık olaylarıyla ilgili araştırılabilir bilimsel sorudur.',
    example: '"Bitkinin yaprakları neden sararıyor?" sorusu.',
  },
  {
    id: 'fc-9bio-1.2-k5-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Uygulamalı Gözlem',
    definition: 'Bir biyolojik problemi fark etmeyi sağlayan dikkatli incelemedir.',
    example: 'Saksı bitkisinin yapraklarının sarardığını fark etmek.',
  },
  {
    id: 'fc-9bio-1.2-k5-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Veri Toplama',
    definition: 'Problemle ilgili gözlem, ölçüm veya kaynak bilgisi elde etme sürecidir.',
    example: 'Bitkinin aldığı ışık, su miktarı ve toprak durumu hakkında bilgi toplamak.',
  },
  {
    id: 'fc-9bio-1.2-k5-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Uygulamalı Hipotez',
    definition: 'Biyolojik probleme yönelik geçici ve test edilebilir açıklamadır.',
    example: 'Bitkinin yaprakları yeterli ışık alamadığı için sararıyor olabilir.',
  },
  {
    id: 'fc-9bio-1.2-k5-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Deney Tasarlama',
    definition: 'Hipotezi sınamak için yapılacak çalışmanın düzenli biçimde planlanmasıdır.',
    example: 'Benzer iki bitkiyi farklı ışık koşullarında gözlemlemek.',
  },
  {
    id: 'fc-9bio-1.2-k5-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Analiz ve Sonuç',
    definition: 'Elde edilen bulguları karşılaştırıp hipotezin desteklenip desteklenmediğini açıklamaktır.',
    example: 'Daha fazla ışık alan bitkide yeni yaprakların daha sağlıklı geliştiğini belirtmek.',
  },
];
