import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.1-intro';

export const layers_9bio_1_1_k5: LessonLayer[] = [
  {
    id: '9bio-1.1-k5-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Biyolojik bilgi günlük yaşam problemlerini anlamak ve çözmek için kullanılır. El yıkama, güvenli gıda saklama, dengeli beslenme, bitki bakımı, çevre kirliliğini azaltma ve hastalıklardan korunma gibi durumlarda canlılar, mikroorganizmalar, beslenme ve ekosistemlerle ilgili bilgiler karar vermeyi kolaylaştırır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda amaç, biyolojiyi yalnızca ders konusu olarak değil; günlük sorunlara bilimsel ve güvenli çözüm arama yolu olarak görmektir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k5-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.1-k5-infographic',
      body: 'Bu kazanım için "günlük problem - biyolojik bilgi - çözüm" şeması kullanılabilir. Örneğin kirli eller problemi mikroorganizmalar ve hijyen bilgisiyle; bozulmuş gıda problemi mikroorganizma çoğalması ve gıda güvenliği bilgisiyle; atık problemi ise ekosistem ve geri dönüşüm bilgisiyle ilişkilendirilebilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Örnek şema: Problem: Gıdanın çabuk bozulması -> Biyolojik bilgi: Mikroorganizmalar uygun sıcaklıkta çoğalır -> Çözüm: Gıdayı uygun koşullarda saklamak.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k5-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Günlük bir problemi biyolojik bilgiyle çözmek için şu adımları izleyebilirsin.',
      steps: [
        '1. Problemi açıkça belirle: Gıda bozulması, hastalık riski, bitki solması veya çevre kirliliği gibi.',
        '2. Problemin canlılarla veya yaşam olaylarıyla ilişkisini kur: Mikroorganizma, beslenme, su, ışık, atık veya ekosistem gibi.',
        '3. İlgili biyolojik bilgiyi seç: Hijyen, dengeli beslenme, gıda güvenliği, fotosentez, geri dönüşüm veya biyoçeşitlilik.',
        '4. Güvenli ve uygulanabilir çözüm öner: El yıkama, besini doğru saklama, bitkiye uygun su ve ışık sağlama ya da atıkları ayırma.',
        '5. Sonucu değerlendir: Çözüm sorunu azalttı mı, yeni bir risk oluşturdu mu, daha doğru bir yöntem gerekir mi?',
      ],
    },
  },
  {
    id: '9bio-1.1-k5-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'K5 kazanımında günlük yaşamla ilişkilendirilen temel kavramlar:',
      highlightBoxes: [
        { type: 'tip', text: 'Hijyen: Hastalık etkenlerinin bulaşma riskini azaltmaya yönelik temizlik uygulamaları.' },
        { type: 'tip', text: 'Mikroorganizma: Gözle görülemeyecek kadar küçük canlı veya canlı benzeri yapılardır; bazıları yararlı, bazıları zararlı olabilir.' },
        { type: 'tip', text: 'Gıda güvenliği: Besinlerin bozulmadan ve sağlığa zarar vermeden tüketilmesi için alınan önlemler.' },
        { type: 'tip', text: 'Dengeli beslenme: Vücudun ihtiyaç duyduğu besinleri yeterli ve uygun oranlarda alma.' },
        { type: 'tip', text: 'Biyolojik mücadele: Zararlı canlılarla mücadelede başka canlılardan yararlanma yöntemi.' },
        { type: 'tip', text: 'Sürdürülebilirlik: Doğal kaynakları gelecek nesillerin ihtiyaçlarını da düşünerek kullanma yaklaşımı.' },
      ],
    },
  },
  {
    id: '9bio-1.1-k5-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bu kazanımda sık görülen yanlış anlamalar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Biyoloji sadece laboratuvarda kullanılır. Doğrusu: Biyoloji bilgisi beslenme, hijyen, çevre ve sağlık gibi günlük kararların çoğunda kullanılır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Bütün mikroorganizmalar zararlıdır. Doğrusu: Bazı mikroorganizmalar hastalık yapabilir; bazıları yoğurt yapımı, ayrıştırma ve biyoteknolojik üretim gibi yararlı süreçlerde rol oynar.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Doğal olan her şey her zaman güvenlidir. Doğrusu: Bir maddenin doğal olması tek başına güvenli olduğunu göstermez; etkisi ve kullanım koşulları değerlendirilmelidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k5-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım genellikle günlük yaşam senaryosu üzerinden sorulur.',
      tytPattern: 'Soru kökünde gıda bozulması, el hijyeni, çevre kirliliği, bitki bakımı veya sağlıklı beslenme gibi bir durum verilir. Senden bu durumu hangi biyolojik bilgiyle açıklayacağını ya da hangi çözümün biyolojik bilgiye dayandığını bulman istenir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Anahtar yöntem: Önce problemi belirle, sonra problemi canlılık bilgisiyle ilişkilendir. "Mikroorganizma mı, beslenme mi, çevre mi, bitki yaşamı mı?" sorusunu sor.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k5-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Biyolojik bilgi günlük yaşamda birçok pratik çözümün temelini oluşturur.',
      highlightBoxes: [
        { type: 'example', text: 'Ellerin sabunla yıkanması, mikroorganizmaların bulaşma riskini azaltmaya yardımcı olur.' },
        { type: 'example', text: 'Bozulabilecek gıdaların buzdolabında saklanması, mikroorganizmaların çoğalma hızını azaltır.' },
        { type: 'example', text: 'Bitkinin solması durumunda su, ışık ve toprak koşulları biyolojik bilgiyle değerlendirilir.' },
        { type: 'example', text: 'Organik atıkların kompost yapılması, ayrıştırıcı canlıların madde döngüsündeki rolüyle ilişkilidir.' },
        { type: 'example', text: 'Zararlılarla mücadelede doğal düşmanlardan yararlanmak, biyolojik mücadeleye örnek olabilir.' },
      ],
    },
  },
  {
    id: '9bio-1.1-k5-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Gıdaların uygun sıcaklıkta saklanması hangi biyolojik bilgiyle ilişkilidir? 2) Bitkisi solan bir öğrencinin hangi yaşam koşullarını kontrol etmesi gerekir? 3) El hijyeninin hastalıklardan korunmadaki biyolojik gerekçesini bir cümleyle açıkla.',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap verirken "problem -> biyolojik bilgi -> çözüm" zincirini kullan.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k5-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Günlük yaşamda karşılaşılan bir problemi biyolojik bilgiyle açıklayabiliyor ve güvenli, uygulanabilir bir çözüm önerebiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Kendini kontrol et: En az üç günlük yaşam problemi için hangi biyolojik bilgiyi kullandığını ve bu bilginin çözümü nasıl desteklediğini açıklayabilmelisin.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_1_k5: Flashcard[] = [
  {
    id: 'fc-9bio-1.1-k5-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Günlük Yaşam Problemi',
    definition: 'Ev, okul, çevre veya sağlıkla ilgili karşılaşılan ve bilimsel bilgiyle açıklanabilen sorunlardır.',
    example: 'Gıdanın bozulması, bitkinin solması veya hastalık bulaşma riski.',
  },
  {
    id: 'fc-9bio-1.1-k5-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Hijyen',
    definition: 'Hastalık etkenlerinin bulaşma olasılığını azaltmak için yapılan temizlik uygulamalarıdır.',
    example: 'Yemekten önce elleri sabunla yıkamak.',
  },
  {
    id: 'fc-9bio-1.1-k5-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Gıda Güvenliği',
    definition: 'Besinlerin bozulma ve hastalık oluşturma riskini azaltacak şekilde saklanması, hazırlanması ve tüketilmesidir.',
    example: 'Süt ve et gibi besinleri uygun sıcaklıkta saklamak.',
  },
  {
    id: 'fc-9bio-1.1-k5-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Dengeli Beslenme',
    definition: 'Vücudun ihtiyaç duyduğu besin çeşitlerini yeterli ve uygun oranlarda almaktır.',
    example: 'Karbonhidrat, protein, yağ, vitamin, mineral ve suyu dengeli tüketmek.',
  },
  {
    id: 'fc-9bio-1.1-k5-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Biyolojik Mücadele',
    definition: 'Zararlı canlıların etkisini azaltmak için başka canlılardan yararlanma yöntemidir.',
    example: 'Bitki zararlılarına karşı onların doğal düşmanlarını kullanmak.',
  },
  {
    id: 'fc-9bio-1.1-k5-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Kompost',
    definition: 'Organik atıkların ayrıştırıcı canlıların etkisiyle toprağı zenginleştiren maddeye dönüşmesidir.',
    example: 'Sebze ve meyve kabuklarının uygun koşullarda kompost yapılması.',
  },
];
