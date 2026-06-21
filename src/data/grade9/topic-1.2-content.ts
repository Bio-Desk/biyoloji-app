import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Bilim, Bilimin Doğası ve Bilimsel Araştırma (9BIO-1.2)
// Alt Konu: Bilimsel Yöntem Basamakları (9-1.2-scientific-method)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_2_scientific_method: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-1.2-scientific-method-L1',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilim; gözlem, deney, kanıt, sorgulama ve akıl yürütmeye dayanan, sistematik bir bilgi üretme sürecidir. Bilimsel bilgi; nesnel (kişisel görüşten bağımsız), test edilebilir, kanıta dayalı, tekrar edilebilir ve eleştirel düşünmeye açık olmalıdır. Bilim, "kesin ve değişmez doğrular" üretmez; yeni kanıtlar elde edildikçe bilgiler güncellenebilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimin Doğasının Temel Özellikleri: Nesnellik · Tekrar Edilebilirlik · Şüphecilik (her bilgi sorgulanır) · Açıklık (yöntem ve veriler paylaşılır) · Etik Sorumluluk · Değişebilirlik (yeni kanıtlarla güncellenir).',
        },
        {
          type: 'tip',
          text: 'Hatırlama formülü: "Bilim, GÖZLEM ile başlar, DENEY ile test edilir, KANIT ile desteklenir." Bilimsel bilgi asla %100 "kesin son söz" değildir — her zaman test edilmeye ve geliştirilmeye açıktır.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-1.2-scientific-method-L2',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-bilimsel-yontem',
      body: 'Bilimsel yöntemin basamaklarını döngüsel bir akış şeması olarak düşünebiliriz; çünkü sonuçlar yeni gözlemlere ve yeni problemlere yol açabilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Şema önerisi: Bir daire (döngü) çiz. Daire üzerine sırasıyla şu kutucukları yerleştir: 1) Gözlem → 2) Problem Belirleme → 3) Bilgi Toplama (Veri Toplama) → 4) Hipotez Kurma → 5) Tahmin Yapma → 6) Deney Tasarlama (Kontrollü Deney) → 7) Verileri Analiz Etme → 8) Sonuç Çıkarma. Sondan başa doğru kesik bir ok çiz: "Sonuç yeni bir gözleme/soruya yol açabilir → döngü tekrar başlar."',
        },
        {
          type: 'example',
          text: 'Kontrollü deney şeması: Bir kutuda "Deney Grubu" (bağımsız değişkenin uygulandığı grup) ve yanında "Kontrol Grubu" (bağımsız değişkenin uygulanmadığı, karşılaştırma için kullanılan grup) çizilir. İkisinde de "kontrol edilen değişkenler" (sıcaklık, ışık, süre vb.) AYNI tutulmalıdır; sadece bağımsız değişken farklıdır.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-1.2-scientific-method-L3',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bilimsel yöntemin basamaklarını örnek bir biyolojik problem üzerinden inceleyelim — "Bitkiler ışık olmadan büyüyebilir mi?" sorusu üzerinden:',
      steps: [
        '1. GÖZLEM — Araştırmacı, güneş ışığı almayan bir köşedeki bitkinin solgun ve cılız büyüdüğünü fark eder.',
        '2. PROBLEM BELİRLEME — "Işık miktarı, bitkinin büyüme hızını etkiler mi?" sorusu ortaya konur. Problem net ve test edilebilir olmalıdır.',
        '3. BİLGİ (VERİ) TOPLAMA — Konuyla ilgili daha önce yapılmış araştırmalar, kitaplar, güvenilir kaynaklar incelenir; ön bilgi edinilir.',
        '4. HİPOTEZ KURMA — Probleme yönelik, test edilebilir bir açıklama önerilir: "Eğer bir bitki daha fazla ışık alırsa, fotosentez hızı artar ve bitki daha hızlı büyür."',
        '5. TAHMİN YAPMA — Hipoteze dayanarak, deneyin sonucunda ne gözlemleneceği önceden belirtilir: "Bol ışık alan bitkinin boyu, az ışık alan bitkiden 2 hafta sonra daha uzun olacaktır." (Tahmin, hipotezden TÜRETİLEN, sayısal/somut bir öngörüdür.)',
        '6. DENEY TASARLAMA (KONTROLLÜ DENEY) — Aynı türden, aynı yaştaki iki bitki grubu alınır. Birinci gruba (deney grubu) bol ışık, ikinci gruba (kontrol grubu) az ışık verilir. Su miktarı, toprak türü, sıcaklık gibi diğer tüm koşullar HER İKİ GRUPTA DA AYNI tutulur.',
        '7. DEĞİŞKENLERİ BELİRLEME — Bağımsız değişken: araştırmacının bilerek değiştirdiği faktördür (ışık miktarı). Bağımlı değişken: bağımsız değişkene bağlı olarak değişen ve ölçülen sonuçtur (bitki boyu). Kontrol edilen değişkenler: sabit tutulan tüm diğer faktörlerdir (su, sıcaklık, toprak, tohum türü).',
        '8. VERİ ANALİZİ — Belirli aralıklarla (örneğin her hafta) bitkilerin boyu ölçülür, tablo ve grafiklerle kaydedilir, gruplar karşılaştırılır.',
        '9. SONUÇ ÇIKARMA — Veriler hipotezi destekliyorsa (bol ışık alan bitki gerçekten daha hızlı büyüdüyse) hipotez kabul edilir; desteklemiyorsa hipotez reddedilir veya yeniden düzenlenir. Sonuçlar bilimsel bir raporla paylaşılır ve diğer bilim insanlarınca tekrar test edilebilir.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-1.2-scientific-method-L4',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Gözlem: Duyu organları veya araçlar yardımıyla bir olay/varlık hakkında bilgi edinme.' },
        { type: 'tip', text: 'Hipotez: Bir probleme yönelik öne sürülen, test edilebilir, geçici açıklama (henüz kanıtlanmamış öneri).' },
        { type: 'tip', text: 'Tahmin: Hipoteze dayanarak yapılan, deney sonucunda ne olacağına dair somut/ölçülebilir öngörü.' },
        { type: 'tip', text: 'Bağımsız değişken: Araştırmacının bilerek ve kontrollü olarak değiştirdiği faktör.' },
        { type: 'tip', text: 'Bağımlı değişken: Bağımsız değişkene bağlı olarak değişen, deneyde ölçülen sonuç.' },
        { type: 'tip', text: 'Kontrol edilen değişkenler: Deney boyunca sabit tutulan, sonuçları etkilememesi gereken faktörler.' },
        { type: 'tip', text: 'Kontrol grubu: Bağımsız değişkenin uygulanmadığı, karşılaştırma referansı olan grup.' },
        { type: 'tip', text: 'Deney grubu: Bağımsız değişkenin uygulandığı grup.' },
        { type: 'tip', text: 'Teori (Kuram): Çok sayıda kanıtla desteklenmiş, geniş kapsamlı bilimsel açıklama.' },
        { type: 'tip', text: 'Tekrar edilebilirlik: Bir deneyin başka araştırmacılar tarafından aynı koşullarda yapıldığında benzer sonuçlar vermesi.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-1.2-scientific-method-L5',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Hipotez ile tahmin aynı şeydir."\n✅ Hipotez, probleme yönelik genel bir AÇIKLAMA önerisidir. Tahmin ise bu hipoteze dayanarak yapılan, deneyde gözlemlenecek SOMUT/SAYISAL bir öngörüdür. Önce hipotez kurulur, sonra ondan tahmin türetilir.',
        },
        {
          type: 'warning',
          text: '❌ "Bilimsel yöntem her zaman aynı sırayla, değişmeden uygulanır."\n✅ Basamaklar genel bir çerçevedir; araştırmacı bazen bir basamağa geri dönebilir, sonuçlara göre hipotezini değiştirebilir. Bilimsel yöntem döngüsel ve esnektir.',
        },
        {
          type: 'warning',
          text: '❌ "Bir hipotez yanlış çıkarsa, deney başarısız olmuştur."\n✅ Hipotezin yanlış çıkması da değerli bir bilimsel sonuçtur; bu, bilginin ilerlemesini sağlar. "Başarısız" deney yoktur, sadece beklenen sonucu desteklemeyen veriler vardır.',
        },
        {
          type: 'warning',
          text: '❌ "Kontrol grubuna hiçbir işlem uygulanmaz, deney grubuna ise her şey uygulanır."\n✅ Kontrol grubuna SADECE bağımsız değişken uygulanmaz; diğer tüm koşullar (kontrol edilen değişkenler) deney grubuyla AYNI olmalıdır. Aksi hâlde karşılaştırma anlamsız olur.',
        },
        {
          type: 'warning',
          text: '❌ "Bilimsel bilgiler kesindir, asla değişmez."\n✅ Bilimsel bilgi; yeni kanıtlar, gelişmiş teknolojiler ve yeni gözlemlerle güncellenebilir, değişebilir. Bilimin doğasının en önemli özelliklerinden biri budur.',
        },
        {
          type: 'warning',
          text: '❌ "Tek bir deney sonucu, bir bilgiyi kanıtlamak için yeterlidir."\n✅ Bilimsel bilginin güvenilir olması için deneyin tekrar edilebilir olması ve farklı araştırmacılar tarafından benzer sonuçların elde edilmesi gerekir.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-1.2-scientific-method-L6',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) Verilen bir deney senaryosunda bağımsız değişken, bağımlı değişken ve kontrol edilen değişkenlerin belirlenmesi (en sık çıkan soru tipidir).\n2) "Aşağıdakilerden hangisi hipotez, hangisi tahmindir?" şeklinde ayırt etme soruları.\n3) Bilimsel yöntemin basamaklarının doğru sıralanması veya eksik basamağın bulunması.\n4) "Bilimin doğasıyla ilgili verilenlerden hangisi/hangileri doğrudur?" tarzı öncüllü (I, II, III) sorular — nesnellik, tekrar edilebilirlik, değişebilirlik kavramları test edilir.',
      aytPattern: 'AYT\'de genellikle bir deney/grafik verilerek; "Bu deneyde kaç farklı bağımsız değişken vardır?", "Kontrol grubu hangisidir?", "Verilere göre hangi sonuca ulaşılabilir?" gibi yorum gerektiren, çok aşamalı deney tasarımı soruları sorulur. Birden fazla değişkenin aynı anda değiştirildiği "hatalı deney tasarımı" örnekleri verilip yanlışın bulunması istenebilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'KRİTİK KURAL: Geçerli bir kontrollü deneyde AYNI ANDA SADECE BİR bağımsız değişken değiştirilmelidir. Birden fazla değişken aynı anda değiştirilirse, sonucun hangi değişkenden kaynaklandığı belirlenemez — bu, sınavlarda en sık sorulan "hatalı deney tasarımı" tuzağıdır.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-1.2-scientific-method-L7',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Bilimsel yöntemi günlük hayattan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🌱 Bahçıvanlık: Bir kişi "Bitkiler müzikle daha mı hızlı büyür?" sorusunu test etmek için iki aynı saksı bitkisinden birine müzik dinletir, diğerine dinletmez; su, ışık ve toprak miktarını eşit tutar. Bu, klasik bir kontrollü deney tasarımıdır.',
        },
        {
          type: 'example',
          text: '🍞 Mutfak deneyleri: "Mayalı hamur, sıcak ortamda mı yoksa soğuk ortamda mı daha hızlı kabarır?" sorusunu test etmek için aynı miktarda hamuru iki farklı sıcaklıkta bekletmek bir deney tasarımıdır.',
        },
        {
          type: 'example',
          text: '🦷 Diş macunu reklamları: "X markası dişleri %50 daha beyaz yapar" iddiası, bilimsel bir deneyle (kontrol grubu, deney grubu, ölçülebilir veri) desteklenmediği sürece güvenilir bir bilgi sayılmaz.',
        },
        {
          type: 'example',
          text: '💊 İlaç geliştirme: Yeni bir ilacın etkinliğini test etmek için bir gruba ilaç, diğer gruba plasebo (etkisiz hap) verilir; ikisi de aynı koşullarda izlenir. Bu, kontrollü deneyin tıptaki en önemli uygulamasıdır.',
        },
        {
          type: 'example',
          text: '📊 Hava durumu tahminleri: Meteorologlar geçmiş verilere (gözlem) dayanarak hipotezler kurar, modellerle tahmin yapar ve gerçekleşen hava durumuyla karşılaştırarak modellerini geliştirir — bu da döngüsel bilimsel yöntemin bir örneğidir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-1.2-scientific-method-L8',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'MINI_QUIZ_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
  {
    id: '9-1.2-scientific-method-L9',
    subtopicId: '9-1.2-scientific-method',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'ASSESSMENT_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Bilimsel Yöntem Basamakları
// ─────────────────────────────────────────────────────────────

export const flashcards_9_1_2_scientific_method: Flashcard[] = [
  { id: 'fc-9-1.2-01', subtopicId: '9-1.2-scientific-method', orderIndex: 1,
    term: 'Gözlem', definition: 'Duyu organları veya araçlar kullanılarak bir olay ya da varlık hakkında bilgi edinme', example: 'Güneş almayan bitkinin solgun büyüdüğünü fark etmek' },
  { id: 'fc-9-1.2-02', subtopicId: '9-1.2-scientific-method', orderIndex: 2,
    term: 'Hipotez', definition: 'Bir probleme yönelik öne sürülen, test edilebilir geçici açıklama', example: '"Işık miktarı arttıkça bitkinin büyüme hızı artar."' },
  { id: 'fc-9-1.2-03', subtopicId: '9-1.2-scientific-method', orderIndex: 3,
    term: 'Tahmin', definition: 'Hipoteze dayanarak yapılan, deney sonucunda gözlemlenecek somut öngörü', example: '"Bol ışık alan bitki, 2 hafta sonra az ışık alandan daha uzun olacaktır."' },
  { id: 'fc-9-1.2-04', subtopicId: '9-1.2-scientific-method', orderIndex: 4,
    term: 'Bağımsız Değişken', definition: 'Araştırmacının bilerek ve kontrollü şekilde değiştirdiği faktör', example: 'Bitkiye verilen ışık miktarı' },
  { id: 'fc-9-1.2-05', subtopicId: '9-1.2-scientific-method', orderIndex: 5,
    term: 'Bağımlı Değişken', definition: 'Bağımsız değişkene bağlı olarak değişen ve ölçülen sonuç', example: 'Bitkinin boyundaki artış' },
  { id: 'fc-9-1.2-06', subtopicId: '9-1.2-scientific-method', orderIndex: 6,
    term: 'Kontrol Edilen Değişkenler', definition: 'Deney boyunca sabit tutulan, sonucu etkilememesi gereken faktörler', example: 'Su miktarı, toprak türü, sıcaklık' },
  { id: 'fc-9-1.2-07', subtopicId: '9-1.2-scientific-method', orderIndex: 7,
    term: 'Kontrol Grubu', definition: 'Bağımsız değişkenin uygulanmadığı, karşılaştırma için kullanılan grup', example: 'Az ışık verilen bitki grubu' },
  { id: 'fc-9-1.2-08', subtopicId: '9-1.2-scientific-method', orderIndex: 8,
    term: 'Deney Grubu', definition: 'Bağımsız değişkenin uygulandığı grup', example: 'Bol ışık verilen bitki grubu' },
  { id: 'fc-9-1.2-09', subtopicId: '9-1.2-scientific-method', orderIndex: 9,
    term: 'Tekrar Edilebilirlik', definition: 'Bir deneyin farklı araştırmacılarca aynı koşullarda yapıldığında benzer sonuçlar vermesi', example: 'Bir ilaç deneyinin farklı laboratuvarlarda aynı sonucu vermesi' },
  { id: 'fc-9-1.2-10', subtopicId: '9-1.2-scientific-method', orderIndex: 10,
    term: 'Teori (Kuram)', definition: 'Çok sayıda kanıtla desteklenmiş, geniş kapsamlı bilimsel açıklama', example: 'Hücre teorisi, evrim teorisi' },
];
