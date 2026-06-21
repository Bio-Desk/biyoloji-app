import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Biyoçeşitlilik (9BIO-1.7)
// Alt Konu: Biyoçeşitlilik ve Korunması (9-1.7-biodiversity)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_7_biodiversity: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-1.7-biodiversity-L1',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Biyoçeşitlilik (biyolojik çeşitlilik), bir bölgede veya tüm dünyada yaşayan canlıların ve bu canlıların oluşturduğu ekosistemlerin çeşitliliğidir. Üç boyutta incelenir: genetik çeşitlilik, tür çeşitliliği ve ekosistem çeşitliliği. Bu üç düzey birbiriyle sıkı bir etkileşim içindedir; birinin azalması diğerlerini de olumsuz etkiler.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Biyoçeşitliliğin 3 Boyutu:\n1) Genetik Çeşitlilik — aynı tür içindeki bireyler arasındaki farklılıklar (gen havuzu zenginliği)\n2) Tür Çeşitliliği — bir bölgedeki farklı tür sayısı ve dağılımı\n3) Ekosistem Çeşitliliği — bir bölgedeki farklı habitat ve ekosistem tiplerinin (orman, sulak alan, step, mercan resifi vb.) çeşitliliği',
        },
        {
          type: 'tip',
          text: 'Biyoçeşitlilik, ekosistemlerin dengesini, kararlılığını ve sürdürülebilirliğini sağlayan temel unsurdur. Çeşitliliği yüksek ekosistemler, çevresel değişikliklere ve hastalıklara karşı daha dirençlidir.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-1.7-biodiversity-L2',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-biyolojik-cesitlilik',
      body: 'Biyoçeşitliliğin üç boyutunu ve Türkiye\'nin biyoçeşitlilik açısından konumunu bir şema üzerinden inceleyelim. Türkiye, Avrupa-Sibirya, Akdeniz ve İran-Turan olmak üzere üç farklı fitocoğrafik bölgenin kesişim noktasında yer alır. Bu konum, ülkemizi biyoçeşitlilik bakımından son derece zengin kılar.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Genetik çeşitlilik örneği: Aynı köpek türünün (Canis familiaris) içinde onlarca farklı ırk bulunması (Kangal, Akbaş, Golden Retriever).\nTür çeşitliliği örneği: Bir ormanda meşe, çam, geyik, sincap, baykuş gibi farklı türlerin bir arada yaşaması.\nEkosistem çeşitliliği örneği: Türkiye\'de aynı anda orman, step, sulak alan, dağ ve kıyı ekosistemlerinin bulunması.',
        },
        {
          type: 'tip',
          text: 'Türkiye, üç fitocoğrafik bölgenin (Avrupa-Sibirya, Akdeniz, İran-Turan) kesiştiği nokta olduğu, üç tarafının denizlerle çevrili olması ve farklı iklim tiplerine sahip olması nedeniyle Avrupa\'nın en zengin bitki çeşitliliğine sahip ülkelerinden biridir; binlerce bitki türünün yaklaşık üçte biri endemiktir.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-1.7-biodiversity-L3',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Biyoçeşitliliği tehdit eden faktörler ve bu faktörlerin etkileri sırasıyla şöyledir:',
      steps: [
        '1. HABİTAT KAYBI VE PARÇALANMASI — Ormansızlaşma, tarım alanlarının genişlemesi ve kentleşme nedeniyle canlıların yaşam alanları daralır veya küçük parçalara bölünür. En büyük tehdit kaynağıdır.',
        '2. KİRLİLİK — Hava, su ve toprak kirliliği (plastik atıklar, kimyasal gübre/ilaç kalıntıları, petrol sızıntıları) canlıların yaşam koşullarını bozar ve besin zincirine zararlı maddelerin girmesine yol açar.',
        '3. İKLİM DEĞİŞİKLİĞİ — Küresel ısınma, türlerin yayılış alanlarını değiştirir, göç zamanlarını şaşırtır, deniz seviyesinin yükselmesi kıyı ekosistemlerini tehdit eder.',
        '4. AŞIRI AVLANMA VE TÜKETİM — Bilinçsiz avlanma ve aşırı balıkçılık, bazı türlerin popülasyonlarını kritik seviyelere düşürür veya nesillerinin tükenmesine neden olur.',
        '5. İSTİLACI (YABANCI) TÜRLER — Bir ekosisteme doğal olmayan yollarla giren türler, yerli türlerle besin ve yaşam alanı için rekabete girerek yerli türlerin azalmasına veya yok olmasına neden olabilir.',
        '6. SONUÇ: BİYOÇEŞİTLİLİK KAYBI — Tüm bu etkenler bir araya gelince tür sayısı azalır, gen havuzu daralır, ekosistem hizmetleri (temiz hava, su, tozlaşma, toprak verimliliği) zarar görür.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-1.7-biodiversity-L4',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Biyoçeşitlilik: Genetik, tür ve ekosistem düzeyindeki canlı çeşitliliğinin tamamı.' },
        { type: 'tip', text: 'Genetik Çeşitlilik: Aynı tür içindeki bireyler arasındaki kalıtsal farklılıklar.' },
        { type: 'tip', text: 'Endemik Tür: Yalnızca belirli bir coğrafi bölgede doğal olarak yetişen/yaşayan ve dünyanın başka hiçbir yerinde bulunmayan tür.' },
        { type: 'tip', text: 'Habitat: Bir canlının doğal olarak yaşadığı, üreyip beslendiği ortam.' },
        { type: 'tip', text: 'İstilacı Tür: Bir ekosisteme insan etkisiyle (kasıtlı veya kazara) giren ve yerli türlere zarar veren yabancı tür.' },
        { type: 'tip', text: 'Sürdürülebilirlik: Doğal kaynakların gelecek nesillerin ihtiyaçlarını da gözeterek, tükenmeden kullanılması.' },
        { type: 'tip', text: 'Koruma Alanı: Biyoçeşitliliğin korunması için yasalarla belirlenmiş, insan müdahalesinin sınırlandırıldığı alanlar (milli park, tabiat parkı, sulak alan).' },
        { type: 'tip', text: 'Ulusal Biyolojik Çeşitlilik Veri Tabanı: Türkiye\'deki türlerin dağılımı, bolluğu ve tehdit durumlarının izlendiği, koruma kararlarına temel oluşturan bilgi sistemi.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-1.7-biodiversity-L5',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Biyoçeşitlilik sadece hayvan ve bitki türü sayısı demektir."\n✅ Biyoçeşitlilik üç boyutludur: genetik çeşitlilik, tür çeşitliliği VE ekosistem çeşitliliği. Sadece tür sayısına bakmak eksik bir tanımdır.',
        },
        {
          type: 'warning',
          text: '❌ "Endemik tür = nadir tür."\n✅ Endemik, "yalnızca o bölgeye özgü" demektir; bazı endemik türler bol miktarda bulunabilir. Nadir olmak ile endemik olmak farklı kavramlardır, ancak endemik türler genellikle dar yayılış alanları nedeniyle yok olma riskine daha açıktır.',
        },
        {
          type: 'warning',
          text: '❌ "Bir bölgeye yeni bir canlı türü getirmek biyoçeşitliliği artırır."\n✅ İstilacı türler, yerli türlerle rekabet ederek onların azalmasına/yok olmasına neden olabilir; bu durum uzun vadede biyoçeşitliliği AZALTIR.',
        },
        {
          type: 'warning',
          text: '❌ "İklim değişikliği sadece kutuplardaki canlıları etkiler."\n✅ İklim değişikliği, sıcaklık ve yağış rejimlerini değiştirerek tüm ekosistemlerdeki türlerin yayılış alanlarını, göç zamanlarını ve üreme döngülerini etkiler.',
        },
        {
          type: 'warning',
          text: '❌ "Türkiye\'nin zengin biyoçeşitliliği yalnızca hayvan türü çeşitliliğinden kaynaklanır."\n✅ Türkiye\'nin zenginliği özellikle bitki türü ve endemizm açısından öne çıkar; üç fitocoğrafik bölgenin kesişiminde olması ve farklı iklim tiplerine sahip olması bunun nedenidir.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-1.7-biodiversity-L6',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Biyoçeşitliliğin boyutları aşağıdakilerden hangisinde doğru verilmiştir?" → Genetik, tür, ekosistem çeşitliliği.\n2) "Aşağıdakilerden hangisi biyoçeşitliliği tehdit eden faktörlerden biri değildir?" → Habitat kaybı, kirlilik, iklim değişikliği, aşırı avlanma, istilacı türler arasından DOĞRU/YANLIŞ ayırt etme.\n3) Endemik tür örnekleri verilip "bu türlerin korunması neden önemlidir?" tarzı yorum soruları.\n4) Türkiye\'nin biyoçeşitlilik açısından zengin olmasının nedenlerini sorgulayan sorular (üç fitocoğrafik bölge, farklı iklimler, üç tarafının denizlerle çevrili olması).',
      aytPattern: 'AYT\'de bu konu doğrudan az sorulur; ancak ekosistem ekolojisi ve popülasyon konularıyla bütünleşik sorularda biyoçeşitlilik kaybının besin zincirine etkisi sorgulanabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınavlarda "biyoçeşitliliği koruma yöntemleri" ile "biyoçeşitliliği tehdit eden faktörler" sıkça karıştırılır. Koruma alanı oluşturmak, geri dönüşüm, bilinçli tüketim, yasal düzenlemeler → KORUMA. Habitat kaybı, kirlilik, istilacı türler, aşırı avlanma → TEHDİT.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-1.7-biodiversity-L7',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Biyoçeşitlilik kavramını günlük hayattan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🌷 Endemik tür örneği: Van Gölü Havzası\'ndaki "Vanellus" türleri ve İstanbul Adalar\'daki bazı orkide türleri yalnızca Türkiye\'de bulunur. Bu türlerin yok olması, dünya üzerinde geri getirilemez bir kayıptır.',
        },
        {
          type: 'example',
          text: '🐝 Tozlayıcı kaybı: Arı popülasyonlarındaki azalma (pestisit kullanımı, habitat kaybı) birçok meyve ve sebzenin verimini düşürerek tarımı ve gıda güvenliğini doğrudan etkiler.',
        },
        {
          type: 'example',
          text: '♻️ Bireysel çözümler: Geri dönüşüm yapmak, plastik tüketimini azaltmak, yerel ve mevsiminde üretilen ürünleri tercih etmek, doğa yürüyüşlerinde çöp bırakmamak biyoçeşitliliğin korunmasına katkı sağlar.',
        },
        {
          type: 'example',
          text: '🏞️ Koruma alanları: Kaçkar Dağları Milli Parkı, Köprülü Kanyon ve Sultan Sazlığı gibi koruma altındaki alanlar, hem nesli tehlikedeki türleri hem de ekosistem hizmetlerini korur.',
        },
        {
          type: 'example',
          text: '🐟 İstilacı tür örneği: Aslan balığı (lionfish), Akdeniz\'e Kızıldeniz üzerinden geçerek yerleşmiş ve yerli balık türleriyle besin/habitat rekabetine girerek bölgesel tür dengesini bozmuştur.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-1.7-biodiversity-L8',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-1.7-biodiversity-L9',
    subtopicId: '9-1.7-biodiversity',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Biyoçeşitlilik ve Korunması
// ─────────────────────────────────────────────────────────────

export const flashcards_9_1_7_biodiversity: Flashcard[] = [
  { id: 'fc-9-1.7-biodiversity-01', subtopicId: '9-1.7-biodiversity', orderIndex: 1,
    term: 'Biyoçeşitlilik', definition: 'Genetik, tür ve ekosistem düzeylerindeki canlı çeşitliliğinin tamamı', example: 'Bir ormanda yüzlerce bitki ve hayvan türünün, farklı genetik özelliklere sahip bireylerin ve farklı habitatların bir arada bulunması' },
  { id: 'fc-9-1.7-biodiversity-02', subtopicId: '9-1.7-biodiversity', orderIndex: 2,
    term: 'Genetik Çeşitlilik', definition: 'Aynı tür içindeki bireyler arasındaki kalıtsal farklılıklar', example: 'Köpek ırkları arasındaki farklılıklar (Kangal, Golden Retriever)' },
  { id: 'fc-9-1.7-biodiversity-03', subtopicId: '9-1.7-biodiversity', orderIndex: 3,
    term: 'Tür Çeşitliliği', definition: 'Bir bölgedeki farklı canlı türlerinin sayısı ve dağılımı', example: 'Bir ormanda meşe, çam, geyik ve sincabın bir arada bulunması' },
  { id: 'fc-9-1.7-biodiversity-04', subtopicId: '9-1.7-biodiversity', orderIndex: 4,
    term: 'Ekosistem Çeşitliliği', definition: 'Bir bölgedeki farklı habitat ve ekosistem tiplerinin çeşitliliği', example: 'Türkiye\'de orman, step, sulak alan ve kıyı ekosistemlerinin bir arada bulunması' },
  { id: 'fc-9-1.7-biodiversity-05', subtopicId: '9-1.7-biodiversity', orderIndex: 5,
    term: 'Endemik Tür', definition: 'Yalnızca belirli bir coğrafi bölgede doğal olarak yaşayan ve başka hiçbir yerde bulunmayan tür', example: 'Bazı orkide türleri yalnızca İstanbul Adalar\'da yetişir' },
  { id: 'fc-9-1.7-biodiversity-06', subtopicId: '9-1.7-biodiversity', orderIndex: 6,
    term: 'Habitat Kaybı', definition: 'Canlıların doğal yaşam alanlarının ormansızlaşma, kentleşme veya tarım nedeniyle daralması veya yok olması', example: 'Yağmur ormanlarının tarım arazisine dönüştürülmesi' },
  { id: 'fc-9-1.7-biodiversity-07', subtopicId: '9-1.7-biodiversity', orderIndex: 7,
    term: 'İstilacı Tür', definition: 'Bir ekosisteme insan etkisiyle giren ve yerli türlerle rekabet ederek zarar veren yabancı tür', example: 'Akdeniz\'e yerleşen aslan balığının yerli balık türleriyle rekabeti' },
  { id: 'fc-9-1.7-biodiversity-08', subtopicId: '9-1.7-biodiversity', orderIndex: 8,
    term: 'Aşırı Avlanma', definition: 'Bir türün popülasyonunun, doğal yenilenme hızından daha fazla avlanarak azaltılması', example: 'Bazı balık türlerinin aşırı avlanma nedeniyle nesli tehlikeye girmesi' },
  { id: 'fc-9-1.7-biodiversity-09', subtopicId: '9-1.7-biodiversity', orderIndex: 9,
    term: 'Fitocoğrafik Bölge', definition: 'Bitki örtüsü ve iklim özelliklerine göre ayrılan coğrafi bölge', example: 'Türkiye, Avrupa-Sibirya, Akdeniz ve İran-Turan fitocoğrafik bölgelerinin kesişiminde yer alır' },
  { id: 'fc-9-1.7-biodiversity-10', subtopicId: '9-1.7-biodiversity', orderIndex: 10,
    term: 'Ulusal Biyolojik Çeşitlilik Veri Tabanı', definition: 'Türkiye\'deki türlerin dağılım ve tehdit durumlarının izlendiği bilgi sistemi', example: 'Koruma kararlarının alınmasında ve nesli tükenmekte olan türlerin tespitinde kullanılır' },
];
