import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Sınıflandırmada Temel Yaklaşımlar (9BIO-1.5)
// Alt Konu: Modern Sınıflandırma Sistemi (9-1.5-classification)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_5_classification: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-1.5-classification-L1',
    subtopicId: '9-1.5-classification',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Dünya üzerinde milyonlarca canlı türü bulunur. Bu denli büyük bir çeşitliliği anlamlandırmak, incelemek ve canlılar arasındaki akrabalık ilişkilerini ortaya koymak için canlılar SINIFLANDIRILIR. Sınıflandırma; canlıları benzerlik ve farklılıklarına göre gruplara ayırma işlemidir. Modern sınıflandırma, canlıların sadece dış görünüşüne değil; DNA benzerliği, protein yapısı, embriyolojik gelişim ve evrimsel akrabalık (filogenetik) ilişkilerine dayanır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınıflandırma Basamakları (büyükten küçüğe): ÂLEM → ŞUBE/FİLUM → SINIF → TAKIM → FAMİLYA → CİNS → TÜR.',
        },
        {
          type: 'tip',
          text: 'Hatırlama formülü: "Adam Şapka Çıkarınca Tam Fark Cins Tükendi" → Â(lem), Ş(ube), S(ınıf), T(akım), F(amilya), C(ins), T(ür). Basamak küçüldükçe ortak özellikler ARTAR, birey sayısı AZALIR.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-1.5-classification-L2',
    subtopicId: '9-1.5-classification',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: ['tyt-siniflandirma-giris', 'tyt-ikili-adlandirma'],
      body: 'Sınıflandırma basamaklarını "ters piramit" veya "huni" şeklinde görselleştirebiliriz: en üstte (en geniş) âlem, en altta (en dar) tür yer alır. Aşağıya indikçe canlı sayısı azalır ama bireyler arasındaki benzerlik artar.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Şema önerisi: Yukarıdan aşağıya daralan bir huni çiz. Her katmana sırasıyla ÂLEM, ŞUBE, SINIF, TAKIM, FAMİLYA, CİNS, TÜR yaz. Sağ tarafına "Kedi" örneğini ekle: Âlem: Animalia (Hayvanlar) → Şube: Chordata (Omurgalılar) → Sınıf: Mammalia (Memeliler) → Takım: Carnivora (Etçiller) → Familya: Felidae (Kedigiller) → Cins: Felis → Tür: Felis catus (Evcil kedi).',
        },
        {
          type: 'example',
          text: 'İkili Adlandırma (Binominal Nomenklatür) şeması: "Felis catus" yazısının altına ok çizerek "Felis = cins adı (büyük harfle başlar, italik)" ve "catus = tür adı (küçük harfle başlar, italik)" notlarını ekle. Bilimsel adlandırmanın evrensel/uluslararası olduğunu vurgula.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-1.5-classification-L3',
    subtopicId: '9-1.5-classification',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Sınıflandırmanın amacından modern yöntemlere kadar tüm süreci adım adım inceleyelim:',
      steps: [
        '1. SINIFLANDIRMANIN AMACI VE FAYDALARI — Canlı çeşitliliğinin incelenmesini kolaylaştırır, türler arası akrabalık ilişkilerini ortaya koyar, bilim insanları arasında ortak bir dil/iletişim sağlar ve yeni keşfedilen türlerin sistematik biçimde yerleştirilmesini mümkün kılar.',
        '2. YAPAY (SUNİ) SINIFLANDIRMA — Canlıların yalnızca dış görünüş, yaşam ortamı veya kullanım amacı gibi yüzeysel benzerliklere göre gruplandırılmasıdır. Örneğin "uçan canlılar" (kuşlar + yarasalar + kelebekler) bir araya konursa bu yapay bir gruplamadır; çünkü bu canlılar evrimsel olarak akraba değildir.',
        '3. DOĞAL (FİLOGENETİK) SINIFLANDIRMA — Canlıların evrimsel akrabalık ilişkilerine, ortak atadan gelişlerine dayanan bilimsel sınıflandırmadır. Modern sınıflandırma sistemi bu yaklaşımı esas alır.',
        '4. MODERN SINIFLANDIRMANIN DAYANDIĞI KANITLAR — (a) DNA ve gen dizisi benzerlikleri: iki tür arasındaki DNA benzerliği ne kadar fazlaysa akrabalık o kadar yakındır. (b) Protein yapı benzerlikleri: ortak proteinlerin (örneğin sitokrom-c) amino asit dizilerindeki benzerlik akrabalığı gösterir. (c) Embriyolojik gelişim benzerlikleri: embriyonik dönemde benzer yapılara sahip olan canlılar (örneğin omurgalı embriyolarındaki yutak yarıkları) ortak atadan geldiğine işaret eder. (d) Anatomik (yapısal) benzerlikler: homolog organlar (örneğin insan kolu, yarasa kanadı, balina yüzgeci — aynı kemik yapısının farklı işlevlere uyarlanması) akrabalığın kanıtıdır.',
        '5. TÜR KAVRAMI — Tür, biyolojik sınıflandırmanın temel birimidir. Aynı türün bireyleri, doğal ortamda birbirleriyle çiftleşip verimli (kısır olmayan) döller verebilen canlı topluluklarıdır. Örneğin at ile eşeğin yavrusu olan katır kısırdır, bu yüzden at ve eşek farklı türlerdir.',
        '6. SINIFLANDIRMA BASAMAKLARI (BÜYÜKTEN KÜÇÜĞE) — Âlem (Kingdom) > Şube/Filum (Phylum/Division) > Sınıf (Class) > Takım (Order) > Familya (Family) > Cins (Genus) > Tür (Species). Basamak küçüldükçe (türe yaklaştıkça) canlılar arasındaki benzerlik artar, ortak özellik sayısı artar; basamak büyüdükçe (âleme yaklaştıkça) canlı çeşitliliği ve sayısı artar ama ortak özellik azalır.',
        '7. İKİLİ ADLANDIRMA SİSTEMİ (BİNOMİNAL NOMENKLATÜR) — Carl Linnaeus tarafından geliştirilen bu sistemde her tür, "Cins adı + tür adı" şeklinde iki kelimeyle Latince olarak adlandırılır (örneğin Homo sapiens, Felis catus). Cins adı büyük harfle, tür adı küçük harfle başlar; ikisi de italik yazılır.',
        '8. İKİLİ ADLANDIRMANIN ÖNEMİ — Farklı dilleri konuşan bilim insanlarının aynı canlıdan bahsettiğinden emin olmasını sağlar (evrensel iletişim). Yerel/halk isimleri (örneğin "ayçiçeği" Türkçede farklı bitkilere de verilebilir) karışıklığa yol açabilirken, bilimsel adlar tüm dünyada standarttır ve karışıklığı önler.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-1.5-classification-L4',
    subtopicId: '9-1.5-classification',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Sınıflandırma (Taksonomi): Canlıları benzerlik ve akrabalık derecelerine göre gruplara ayırma bilimi.' },
        { type: 'tip', text: 'Yapay Sınıflandırma: Canlıları yalnızca dış görünüş veya kullanım amacına göre yüzeysel olarak gruplandırma.' },
        { type: 'tip', text: 'Doğal (Filogenetik) Sınıflandırma: Canlıları evrimsel akrabalık ilişkilerine göre gruplandırma.' },
        { type: 'tip', text: 'Tür: Doğal koşullarda çiftleşip verimli döl verebilen bireylerin oluşturduğu topluluk; sınıflandırmanın temel birimi.' },
        { type: 'tip', text: 'Homolog Organ: Farklı işlev görse de aynı evrimsel kökenden gelen, benzer iç yapıya sahip organ.' },
        { type: 'tip', text: 'İkili Adlandırma (Binominal Nomenklatür): Her türün "cins + tür adı" şeklinde Latince iki kelimeyle adlandırılması.' },
        { type: 'tip', text: 'Filogeni: Canlı gruplarının evrimsel geçmişi ve akrabalık ilişkileri.' },
        { type: 'tip', text: 'Âlem (Kingdom): Sınıflandırmanın en geniş kapsamlı basamaklarından biri.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-1.5-classification-L5',
    subtopicId: '9-1.5-classification',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Sınıflandırma basamağı büyüdükçe (türden âleme gidildikçe) canlılar arasındaki benzerlik artar."\n✅ Tam tersi! Türe yaklaştıkça (basamak küçüldükçe) ortak özellik sayısı ve benzerlik ARTAR. Âleme yaklaştıkça canlı çeşitliliği ve sayısı artar ama ortak özellikler AZALIR.',
        },
        {
          type: 'warning',
          text: '❌ "Yapay sınıflandırma da bilimsel ve geçerli bir sınıflandırmadır."\n✅ Yapay sınıflandırma, yalnızca pratik/günlük amaçlarla yapılan yüzeysel bir gruplamadır (örneğin "evcil hayvanlar"). Modern bilim, akrabalığa dayanan DOĞAL (filogenetik) sınıflandırmayı esas alır.',
        },
        {
          type: 'warning',
          text: '❌ "Aynı görünüme sahip canlılar mutlaka aynı türdendir."\n✅ Dış görünüş yanıltıcı olabilir (örneğin yarasa ve kuş ikisi de uçar ama farklı sınıflardandır). Tür belirlemede asıl kriter, doğal koşullarda çiftleşip VERİMLİ döl verebilmektir.',
        },
        {
          type: 'warning',
          text: '❌ "İkili adlandırmada cins ve tür adlarının ikisi de büyük harfle başlar."\n✅ Sadece CİNS adı büyük harfle başlar (Felis), tür adı küçük harfle yazılır (catus). İkisi birlikte italik yazılır: Felis catus.',
        },
        {
          type: 'warning',
          text: '❌ "DNA benzerliği sadece görünüşte benzeyen canlılar arasında aranır."\n✅ DNA ve protein benzerlikleri, görünüşte çok farklı olan canlılar arasında bile akrabalığı ortaya koyabilir. Örneğin insan ile şempanze arasındaki yüksek DNA benzerliği, görsel farklılığa rağmen yakın akrabalığı gösterir.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-1.5-classification-L6',
    subtopicId: '9-1.5-classification',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) Sınıflandırma basamaklarının doğru sıralanması (büyükten küçüğe veya küçükten büyüğe).\n2) "Basamak küçüldükçe/büyüdükçe ne artar, ne azalır?" tarzı kıyaslama soruları (canlı sayısı, ortak özellik sayısı, akrabalık derecesi).\n3) İkili adlandırma kurallarının (büyük/küçük harf, italik yazım, cins+tür) doğru uygulanıp uygulanmadığının sorulması.\n4) Yapay sınıflandırma ile doğal sınıflandırma örneklerinin ayırt edilmesi.',
      aytPattern: 'AYT\'de modern sınıflandırmanın dayandığı kanıtlar (DNA benzerliği, protein yapısı, embriyolojik gelişim, homolog organlar) üzerinden akrabalık derecesi çıkarımı yapılan, verilen canlı gruplarının karşılaştırıldığı yorum soruları sorulur. "Hangi iki canlı türü arasındaki akrabalık daha yakındır?" gibi DNA/protein benzerlik yüzdesi tabloları verilebilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sıkça karıştırılan basamak sıralaması: ÂLEM (en geniş) → ŞUBE → SINIF → TAKIM → FAMİLYA → CİNS → TÜR (en dar). Sınavda "İnsan ile şempanze hangi basamağa kadar ortaktır?" gibi sorularla bu sıralamanın bilinmesi test edilir.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-1.5-classification-L7',
    subtopicId: '9-1.5-classification',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Sınıflandırma sistemini günlük hayattan örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🐱 Evcil kedi (Felis catus): Bilimsel adı sayesinde dünyanın her yerindeki bilim insanları, yerel isimler (cat, kedi, gato) ne olursa olsun aynı türden bahsettiklerini bilir.',
        },
        {
          type: 'example',
          text: '📚 Kütüphane raflama sistemi: Kitapların konu, yazar ve türe göre raflara dizilmesi gibi, canlılar da ortak özelliklerine göre gruplara ayrılarak incelenmesi kolaylaştırılır.',
        },
        {
          type: 'example',
          text: '🦴 İnsan kolu - Yarasa kanadı - Balina yüzgeci: Üçü de farklı işlev görse de kemik yapıları (humerus, radius, ulna) aynıdır. Bu homoloji, ortak bir atadan geldiklerinin kanıtıdır.',
        },
        {
          type: 'example',
          text: '🧬 Genetik testler: Köpek ırkı belirleme testleri, köpeğin DNA\'sını analiz ederek hangi ırklara ait genler taşıdığını ortaya koyar — DNA benzerliğine dayalı modern sınıflandırmanın bir uygulamasıdır.',
        },
        {
          type: 'example',
          text: '🌍 Yeni tür keşifleri: Bilim insanları yeni bir böcek türü keşfettiğinde, onu önce hangi âlem, şube, sınıf, takım, familya ve cinse ait olduğunu belirleyerek sisteme yerleştirir ve ikili adlandırma ile isimlendirir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-1.5-classification-L8',
    subtopicId: '9-1.5-classification',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'MINI_QUIZ_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
  {
    id: '9-1.5-classification-L9',
    subtopicId: '9-1.5-classification',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'ASSESSMENT_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Modern Sınıflandırma Sistemi
// ─────────────────────────────────────────────────────────────

export const flashcards_9_1_5_classification: Flashcard[] = [
  { id: 'fc-9-1.5-01', subtopicId: '9-1.5-classification', orderIndex: 1,
    term: 'Sınıflandırma (Taksonomi)', definition: 'Canlıları benzerlik ve akrabalık derecelerine göre gruplara ayırma bilimi', example: 'Kedinin Animalia âleminde, Felidae familyasında sınıflandırılması' },
  { id: 'fc-9-1.5-02', subtopicId: '9-1.5-classification', orderIndex: 2,
    term: 'Yapay Sınıflandırma', definition: 'Canlıları yalnızca dış görünüş veya kullanım amacına göre yüzeysel olarak gruplandırma', example: '"Uçan canlılar" grubuna kuş, yarasa ve kelebeği birlikte koymak' },
  { id: 'fc-9-1.5-03', subtopicId: '9-1.5-classification', orderIndex: 3,
    term: 'Doğal (Filogenetik) Sınıflandırma', definition: 'Canlıları evrimsel akrabalık ilişkilerine göre gruplandırma', example: 'İnsan ve şempanzenin yakın akraba olarak sınıflandırılması' },
  { id: 'fc-9-1.5-04', subtopicId: '9-1.5-classification', orderIndex: 4,
    term: 'Tür', definition: 'Doğal koşullarda çiftleşip verimli döl verebilen bireylerin oluşturduğu topluluk', example: 'At ve eşeğin farklı tür olması (katır kısırdır)' },
  { id: 'fc-9-1.5-05', subtopicId: '9-1.5-classification', orderIndex: 5,
    term: 'Homolog Organ', definition: 'Farklı işlev görse de aynı evrimsel kökenden gelen, benzer iç yapıya sahip organ', example: 'İnsan kolu, yarasa kanadı, balina yüzgeci' },
  { id: 'fc-9-1.5-06', subtopicId: '9-1.5-classification', orderIndex: 6,
    term: 'İkili Adlandırma (Binominal Nomenklatür)', definition: 'Her türün cins ve tür adından oluşan iki kelimelik Latince bilimsel adı', example: 'Homo sapiens (insan), Felis catus (evcil kedi)' },
  { id: 'fc-9-1.5-07', subtopicId: '9-1.5-classification', orderIndex: 7,
    term: 'Sınıflandırma Basamakları', definition: 'Âlem, şube, sınıf, takım, familya, cins, tür şeklinde sıralanan basamaklar', example: 'Hatırlatma: "Adam Şapka Çıkarınca Tam Fark Cins Tükendi"' },
  { id: 'fc-9-1.5-08', subtopicId: '9-1.5-classification', orderIndex: 8,
    term: 'Filogeni', definition: 'Canlı gruplarının evrimsel geçmişi ve akrabalık ilişkileri', example: 'Filogenetik ağaçlarda türlerin ortak atadan dallanması' },
  { id: 'fc-9-1.5-09', subtopicId: '9-1.5-classification', orderIndex: 9,
    term: 'Cins (Genus)', definition: 'Birbirine yakın akraba türleri kapsayan sınıflandırma basamağı', example: 'Felis cinsi: Felis catus (evcil kedi), Felis silvestris (yaban kedisi)' },
  { id: 'fc-9-1.5-10', subtopicId: '9-1.5-classification', orderIndex: 10,
    term: 'Carl Linnaeus', definition: 'İkili adlandırma sistemini geliştiren İsveçli bilim insanı', example: '18. yüzyılda modern taksonominin temellerini atmıştır' },
];
