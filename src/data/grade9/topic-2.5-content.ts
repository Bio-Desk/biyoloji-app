import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Hücre ve Alt Birimleri (9BIO-2.5)
// Alt Konu 1: Prokaryot ve Ökaryot Hücre (9-2.5-cell-types)
// Alt Konu 2: Organeller ve Görevleri (9-2.5-organelles)
// ─────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════
// ALT KONU 1: PROKARYOT VE ÖKARYOT HÜCRE
// ═══════════════════════════════════════════════════════════

export const layers_9_2_5_cell_types: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.5-cell-types-L1',
    subtopicId: '9-2.5-cell-types',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Hücre, canlıların yapı, görev ve üreme bakımından en küçük birimidir; tüm canlılar bir veya daha fazla hücreden oluşur. Hücreler, çekirdek (nükleus) ve zarla çevrili organellere sahip olup olmamalarına göre iki temel gruba ayrılır: PROKARYOT hücreler (gerçek çekirdeği olmayan) ve ÖKARYOT hücreler (gerçek çekirdeği olan). Bu ayrım, canlıların üç domaine (Bacteria, Archaea, Eukarya) ayrılmasının da temelini oluşturur.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'PROKARYOT: Zarla çevrili çekirdek YOK, zarlı organel YOK (ribozom hariç). Genetik materyal sitoplazmada, "nükleoid bölge" adı verilen alanda serbest halde bulunur. Örnek: Bakteriler ve arkeler.',
        },
        {
          type: 'important',
          text: 'ÖKARYOT: Zarla çevrili gerçek çekirdek VAR, zarlı organeller (mitokondri, ER, Golgi vb.) VAR. Örnek: Bitki, hayvan, mantar ve protista hücreleri.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.5-cell-types-L2',
    subtopicId: '9-2.5-cell-types',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-hucre-prokaryot-okaryot',
      body: 'Bir prokaryot hücrenin (örn. bakteri) yapısı oldukça basittir: en dışta hücre duvarı, onun altında hücre zarı, içeride sitoplazma, sitoplazmada serbest halde dağılmış halkasal DNA (nükleoid bölge) ve çok sayıda küçük ribozom bulunur. Bazı bakterilerde ayrıca kapsül, kamçı (flagella) ve plazmid (küçük ekstra DNA halkaları) görülebilir. Buna karşılık ökaryot hücrede (örn. hayvan veya bitki hücresi) belirgin bir çekirdek (çift katlı zarla çevrili, içinde DNA ve çekirdekçik bulunan), sitoplazmada zarla çevrili pek çok organel (mitokondri, endoplazmik retikulum, Golgi aygıtı, lizozom, koful vb.) ve daha büyük, karmaşık bir iç organizasyon bulunur. Bitki hücresinde ayrıca hücre duvarı, büyük bir merkezi koful ve kloroplast bulunurken, hayvan hücresinde sentrozom bulunur ve koful küçük/yoktur.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'PROKARYOT (bakteri) yapı bileşenleri: Hücre duvarı → Hücre zarı → Sitoplazma → Nükleoid bölge (halkasal DNA) → Ribozomlar → (varsa) Plazmid, kapsül, kamçı.',
        },
        {
          type: 'example',
          text: 'ÖKARYOT (hayvan hücresi) yapı bileşenleri: Hücre zarı → Sitoplazma → Çekirdek (çekirdek zarı + DNA + çekirdekçik) → Mitokondri → Endoplazmik retikulum → Golgi aygıtı → Lizozom → Ribozomlar → Sentrozom.',
        },
        {
          type: 'example',
          text: 'ÖKARYOT (bitki hücresi) ek/farklı bileşenler: Hücre duvarı (selüloz) → Büyük merkezi koful → Kloroplast (mitokondriye ek olarak). Bitki hücresinde sentrozom YOKTUR.',
        },
        {
          type: 'tip',
          text: 'Boyut karşılaştırması: Prokaryot hücreler genellikle 1-10 mikrometre, ökaryot hücreler ise 10-100 mikrometre çapındadır — ökaryot hücreler prokaryotlardan yaklaşık 10 kat daha büyüktür.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.5-cell-types-L3',
    subtopicId: '9-2.5-cell-types',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Prokaryot ve ökaryot hücrelerin karşılaştırılması; bitki ve hayvan hücrelerinin ayırt edilmesi:',
      steps: [
        '1. ÇEKİRDEK — Prokaryotta zarla çevrili gerçek çekirdek YOK (DNA, nükleoid bölgede serbest). Ökaryotta çift katlı zarla çevrili, içinde çekirdekçik bulunan gerçek çekirdek VAR.',
        '2. GENETİK MATERYAL — Prokaryotta genellikle tek, halkasal (dairesel) DNA + bazen plazmidler. Ökaryotta DNA, proteinlerle (histon) sarılı, doğrusal kromozomlar şeklinde çekirdek içinde paketlenmiştir.',
        '3. ZARLI ORGANELLER — Prokaryotta zarla çevrili organel YOKTUR (mitokondri, ER, Golgi, lizozom, kloroplast bulunmaz). Ökaryotta tüm bu zarlı organeller mevcuttur.',
        '4. RİBOZOM — Her iki hücre tipinde de bulunur, ancak prokaryot ribozomları (70S) ökaryot ribozomlarından (80S) daha küçüktür. Ribozom zarla çevrili olmadığı için "organel" değil "organel benzeri yapı" sayılır ve prokaryotta da bulunabilir.',
        '5. BÜYÜKLÜK VE KARMAŞIKLIK — Prokaryot hücreler daha küçük ve yapısal olarak daha basittir. Ökaryot hücreler daha büyük, iç zar sistemleriyle bölmelere ayrılmış (kompartımanlı) ve daha karmaşıktır.',
        '6. HÜCRE DUVARI — Prokaryotlarda (bakterilerde) peptidoglikan içeren hücre duvarı bulunur. Bitki hücrelerinde selüloz, mantar hücrelerinde kitin yapılı hücre duvarı bulunur. Hayvan hücrelerinde hücre duvarı YOKTUR.',
        '7. BİTKİ vs HAYVAN HÜCRESİ — Bitki hücresinde VAR olup hayvan hücresinde YOK olanlar: hücre duvarı, büyük merkezi koful, kloroplast (ve diğer plastitler). Hayvan hücresinde VAR olup bitki hücresinde tipik olarak YOK olan: sentrozom (sentriol çifti) — bölünme sırasında iğ ipliklerinin organizasyonunda görev alır.',
        '8. ÖRNEKLER — Prokaryot: Bacteria domaini (E. coli, siyanobakteriler) ve Archaea domaini (ekstremofil arkeler). Ökaryot: Eukarya domaini — bitkiler, hayvanlar, mantarlar, protistalar (amip, öglena, paramesyum).',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.5-cell-types-L4',
    subtopicId: '9-2.5-cell-types',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Prokaryot Hücre: Zarla çevrili gerçek çekirdeği ve zarlı organelleri olmayan hücre tipi (bakteri, arke).' },
        { type: 'tip', text: 'Ökaryot Hücre: Zarla çevrili gerçek çekirdeği ve zarlı organelleri olan hücre tipi (bitki, hayvan, mantar, protista).' },
        { type: 'tip', text: 'Nükleoid Bölge: Prokaryot hücrede halkasal DNA\'nın bulunduğu, zarla çevrili olmayan bölge.' },
        { type: 'tip', text: 'Plazmid: Bazı bakterilerde bulunan, ana DNA\'dan bağımsız küçük halkasal DNA parçacığı.' },
        { type: 'tip', text: 'Hücre Duvarı: Hücre zarının dışında bulunan, hücreye şekil ve destek veren sert tabaka (bitkide selüloz, mantarda kitin, bakteride peptidoglikan).' },
        { type: 'tip', text: 'Sentrozom (Sentriol): Hayvan hücrelerinde bulunan, hücre bölünmesinde iğ ipliği oluşumuna katılan organel.' },
        { type: 'tip', text: 'Koful: Hücre içinde madde depolama, atık biriktirme ve turgor basıncı sağlama görevi gören kesecik; bitki hücresinde büyük ve merkezi, hayvan hücresinde küçük/geçicidir.' },
        { type: 'tip', text: '70S / 80S Ribozom: Prokaryot (70S) ve ökaryot (80S) hücrelerdeki ribozom büyüklük sınıflandırması.' },
        { type: 'tip', text: 'Domain (Üst Âlem): Canlıları en üst düzeyde sınıflandıran üç grup: Bacteria, Archaea, Eukarya.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.5-cell-types-L5',
    subtopicId: '9-2.5-cell-types',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Prokaryot hücrelerde DNA hiç yoktur."\n✅ Prokaryot hücrelerde DNA vardır, ancak zarla çevrili bir çekirdek içinde değil, sitoplazmada "nükleoid bölge" denilen alanda serbest halde bulunur.',
        },
        {
          type: 'warning',
          text: '❌ "Prokaryotlarda hiç organel yoktur."\n✅ Prokaryotlarda ZARLI organel (mitokondri, ER, Golgi vb.) yoktur, ancak ribozom (zarsız organel benzeri yapı) bulunur.',
        },
        {
          type: 'warning',
          text: '❌ "Bütün ökaryot hücreler aynıdır."\n✅ Bitki, hayvan, mantar ve protista hücreleri ökaryottur ama yapısal farklılıklar gösterirler: bitki hücresinde hücre duvarı, kloroplast ve büyük koful varken, hayvan hücresinde sentrozom vardır, hücre duvarı yoktur.',
        },
        {
          type: 'warning',
          text: '❌ "Hücre duvarı ve hücre zarı aynı şeydir."\n✅ Hücre zarı tüm hücrelerde bulunan, seçici geçirgen, fosfolipit-protein yapılı zardır. Hücre duvarı ise hücre zarının DIŞINDA bulunan, daha kalın ve sert, destek sağlayan ek bir yapıdır (bitki, mantar, bakteri hücrelerinde bulunur; hayvan hücresinde yoktur).',
        },
        {
          type: 'warning',
          text: '❌ "Virüsler prokaryot hücredir."\n✅ Virüslerin hücresel yapısı yoktur; ne prokaryot ne ökaryottur. Hücre tanımına dahi girmezler (bkz. 9-1.4 Virüsler konusu).',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.5-cell-types-L6',
    subtopicId: '9-2.5-cell-types',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "Aşağıdaki yapılardan hangisi prokaryot hücrede bulunmaz?" → mitokondri, Golgi, ER, lizozom, çekirdek gibi zarlı yapılar.\n2) Bitki ve hayvan hücresi şeması verilip, sadece birinde bulunan yapıları (hücre duvarı, kloroplast, koful / sentrozom) işaretletme.\n3) "Prokaryot hücrede DNA nerede bulunur?" → nükleoid bölge cevabı.\n4) Üç domain sistemiyle ilişkilendirme: "Bacteria ve Archaea domainindeki canlılar hangi hücre tipine sahiptir?" → prokaryot.',
      aytPattern: 'AYT\'de prokaryot-ökaryot karşılaştırması, hücre teorisi ve evrimsel köken (endosimbiyoz teorisi: mitokondri ve kloroplastın bağımsız prokaryotlardan evrimleştiği) ile ilişkilendirilebilir. Ayrıca hücre boyutu-yüzey/hacim oranı ile ilgili sayısal/grafik sorular AYT\'de görülebilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınavda en sık karşılaşılan tuzak: "Ribozom hem prokaryot hem ökaryot hücrede bulunur" ifadesi DOĞRUDUR ama "ribozom zarlı organeldir" ifadesi YANLIŞTIR — ribozom zarsız bir yapıdır, bu yüzden prokaryotta da bulunabilir.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.5-cell-types-L7',
    subtopicId: '9-2.5-cell-types',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Prokaryot ve ökaryot hücreleri günlük hayattan ve laboratuvardan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🦠 Yoğurt mayası: Yoğurt yapımında kullanılan Lactobacillus ve Streptococcus bakterileri prokaryot hücrelerdir; sütteki laktozu fermente ederek laktik asit üretirler.',
        },
        {
          type: 'example',
          text: '🔬 Mikroskop altında karşılaştırma: Bir damla göl suyu incelendiğinde, küçük ve basit yapılı bakteri hücreleri ile büyük, çekirdekli ve hareketli protista hücreleri (paramesyum, öglena) aynı görüş alanında ayırt edilebilir.',
        },
        {
          type: 'example',
          text: '🌱 Soğan zarı vs yanak hücresi deneyi: Mikroskopta incelenen soğan zarı hücrelerinde belirgin hücre duvarı ve köşeli şekil görülürken, insan yanak epiteli hücrelerinde hücre duvarı yoktur, şekil daha düzensizdir — bitki ve hayvan hücresi farkının klasik gözlemidir.',
        },
        {
          type: 'example',
          text: '💊 Antibiyotiklerin seçiciliği: Antibiyotikler genellikle prokaryot hücrelere özgü yapıları (örn. peptidoglikan hücre duvarı) hedef alır; bu sayede insan (ökaryot) hücrelerine zarar vermeden bakterileri öldürebilirler.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 ─────────────────────────────────────────
  {
    id: '9-2.5-cell-types-L8',
    subtopicId: '9-2.5-cell-types',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.5-cell-types-L9',
    subtopicId: '9-2.5-cell-types',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Prokaryot ve Ökaryot Hücre
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_5_cell_types: Flashcard[] = [
  { id: 'fc-9-2.5-cell-types-01', subtopicId: '9-2.5-cell-types', orderIndex: 1,
    term: 'Prokaryot Hücre', definition: 'Zarla çevrili gerçek çekirdeği ve zarlı organelleri olmayan hücre', example: 'Bakteri ve arke hücreleri' },
  { id: 'fc-9-2.5-cell-types-02', subtopicId: '9-2.5-cell-types', orderIndex: 2,
    term: 'Ökaryot Hücre', definition: 'Zarla çevrili gerçek çekirdeği ve zarlı organelleri olan hücre', example: 'Bitki, hayvan, mantar, protista hücreleri' },
  { id: 'fc-9-2.5-cell-types-03', subtopicId: '9-2.5-cell-types', orderIndex: 3,
    term: 'Nükleoid Bölge', definition: 'Prokaryot hücrede halkasal DNA\'nın bulunduğu zarsız bölge', example: 'Bakteri DNA\'sı bu bölgede serbest halde durur' },
  { id: 'fc-9-2.5-cell-types-04', subtopicId: '9-2.5-cell-types', orderIndex: 4,
    term: 'Plazmid', definition: 'Bakterilerde ana DNA\'dan bağımsız küçük halkasal DNA parçası', example: 'Genetik mühendisliğinde gen aktarımında kullanılır' },
  { id: 'fc-9-2.5-cell-types-05', subtopicId: '9-2.5-cell-types', orderIndex: 5,
    term: 'Hücre Duvarı', definition: 'Hücre zarının dışında destek sağlayan sert tabaka', example: 'Bitkide selüloz, mantarda kitin, bakteride peptidoglikan' },
  { id: 'fc-9-2.5-cell-types-06', subtopicId: '9-2.5-cell-types', orderIndex: 6,
    term: 'Sentrozom', definition: 'Hayvan hücresinde bulunan, hücre bölünmesinde iğ ipliği oluşturan yapı', example: 'Bitki hücresinde tipik olarak bulunmaz' },
  { id: 'fc-9-2.5-cell-types-07', subtopicId: '9-2.5-cell-types', orderIndex: 7,
    term: 'Merkezi Koful', definition: 'Bitki hücresinde büyük, madde depolayan ve turgor sağlayan kese', example: 'Hayvan hücresinde küçük ve geçicidir' },
  { id: 'fc-9-2.5-cell-types-08', subtopicId: '9-2.5-cell-types', orderIndex: 8,
    term: '70S / 80S Ribozom', definition: 'Prokaryot (70S) ve ökaryot (80S) hücrelerdeki ribozom boyut farkı', example: 'Bazı antibiyotikler sadece 70S ribozomu hedefler' },
];

// ═══════════════════════════════════════════════════════════
// ALT KONU 2: ORGANELLER VE GÖREVLERİ
// ═══════════════════════════════════════════════════════════

export const layers_9_2_5_organelles: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.5-organelles-L1',
    subtopicId: '9-2.5-organelles',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Ökaryot hücrede sitoplazma, zarla çevrili veya zarsız özelleşmiş yapılar olan "organeller"i barındırır. Her organel, hücrenin yaşamsal faaliyetlerinden birini (enerji üretimi, protein sentezi, madde taşıma, sindirim, fotosentez vb.) gerçekleştirmek için özelleşmiştir. Organellerin bu görev paylaşımı, hücrenin "iş bölümü" yapan küçük bir fabrikaya benzetilmesini sağlar.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Hücre = Mini fabrika benzetmesi: Çekirdek = yönetim merkezi, Mitokondri = enerji santrali, Ribozom = üretim bandı, ER ve Golgi = paketleme/dağıtım departmanı, Lizozom = geri dönüşüm/atık birimi, Kloroplast = güneş enerjisi santrali (sadece bitkilerde).',
        },
        {
          type: 'tip',
          text: 'Organeller iki ana grupta incelenir: (1) ZARLI organeller — çekirdek, mitokondri, ER, Golgi, lizozom, koful, kloroplast (çift veya tek katlı zarla çevrili). (2) ZARSIZ yapılar — ribozom, sentrozom (zar içermez, ama yine de hücresel görev üstlenirler).',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.5-organelles-L2',
    subtopicId: '9-2.5-organelles',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: ['tyt-organeller', 'tyt-mitokondri', 'tyt-endoplazmik-retikulum', 'tyt-golgi', 'tyt-ribozom', 'tyt-kloroplast', 'tyt-cekirdekcik', 'tyt-hucre-iskeleti'],
      body: 'Hücre içindeki organellerin konumları ve birbirleriyle ilişkisi şu şekilde özetlenebilir: Çekirdek, hücrenin merkezinde yer alır; çift katlı çekirdek zarı üzerinde "çekirdek por"ları bulunur ve bu porlardan RNA ve proteinler geçiş yapar. Çekirdeğe bitişik konumdaki Endoplazmik Retikulum (ER) iki türdedir: üzerinde ribozom bulunan "granüllü (pürüzlü) ER" protein sentezi ve taşınmasında, ribozomsuz "düz (granülsüz) ER" ise lipit sentezi ve detoksifikasyonda görev alır. Granüllü ER\'den ayrılan kesecikler Golgi aygıtına taşınır; Golgi, gelen molekülleri işler, paketler ve hücre içi/dışı hedeflere gönderir. Golgi\'den oluşan bazı keseler Lizozom haline gelerek hücre içi sindirimde görev alır. Mitokondri, çift katlı zarlı, kendi DNA\'sına sahip bir organeldir ve hücresel solunumla ATP üretir. Bitki hücrelerinde ayrıca çift katlı zarlı, klorofil içeren Kloroplast bulunur ve fotosentez yapar.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Protein sentezi ve taşınma yolu: Çekirdek (DNA → mRNA) → Ribozom (protein sentezi) → Granüllü ER (protein paketlenir) → Golgi aygıtı (işlenir, etiketlenir) → Salgı kesecikleri (hücre dışına ekzositozla atılır veya hücre içinde kullanılır).',
        },
        {
          type: 'example',
          text: 'Çift katlı zarlı organeller: Çekirdek, Mitokondri, Kloroplast (bu üçü kendi DNA\'sına da sahiptir — endosimbiyoz teorisinin kanıtı).\nTek katlı zarlı organeller: ER, Golgi aygıtı, Lizozom, Koful.\nZarsız yapılar: Ribozom, Sentrozom.',
        },
        {
          type: 'tip',
          text: 'Mitokondri ve kloroplast karşılaştırması: Mitokondri TÜM ökaryot hücrelerde (bitki + hayvan) bulunur ve solunumla ATP üretir. Kloroplast SADECE bitki ve bazı protista (alg) hücrelerinde bulunur ve fotosentezle glikoz/ATP üretir. Bitki hücresi her iki organele de sahiptir.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.5-organelles-L3',
    subtopicId: '9-2.5-organelles',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Her organelin görevi ve hücresel süreçlerdeki rolü:',
      steps: [
        '1. ÇEKİRDEK (Nükleus) — Genetik materyali (DNA/kromozom) taşır, hücrenin yönetim merkezidir. İçindeki çekirdekçik (nukleolus) ribozom alt birimlerinin üretildiği yerdir. Hücrenin tüm faaliyetlerini DNA üzerindeki bilgiyle yönlendirir.',
        '2. HÜCRE ZARI — Hücreyi dış ortamdan ayıran, fosfolipit çift tabaka ve protein içeren, seçici geçirgen yapıdır. Madde giriş-çıkışını kontrol eder (detaylar 9-2.6 konusunda).',
        '3. SİTOPLAZMA — Çekirdek ile hücre zarı arasındaki, organelleri içinde barındıran jelimsi sıvı kısımdır. Birçok metabolik tepkime burada gerçekleşir.',
        '4. RİBOZOM — Protein sentezinin gerçekleştiği zarsız yapıdır. Sitoplazmada serbest halde veya granüllü ER üzerine tutunmuş halde bulunabilir. Hem prokaryot hem ökaryot hücrelerde vardır.',
        '5. ENDOPLAZMİK RETİKULUM (ER) — Granüllü ER: üzerindeki ribozomlarla protein sentezi ve taşınmasında görevlidir. Düz ER: lipit (yağ) sentezi, karbonhidrat metabolizması ve zararlı maddelerin (ilaç, alkol) detoksifikasyonunda görevlidir; ayrıca kas hücrelerinde kalsiyum depolar.',
        '6. GOLGI AYGITI — ER\'den gelen proteinleri ve lipitleri işler (modifiye eder), paketler ve hücre içindeki veya dışındaki hedeflerine gönderir. "Hücrenin paketleme ve dağıtım merkezi" olarak bilinir. Lizozomların oluşumunda da rol oynar.',
        '7. LİZOZOM — İçinde sindirim enzimleri taşıyan kesecik. Hücre içine alınan besinleri, yaşlı/zarar görmüş organelleri ve istenmeyen yapıları sindirir (otofaji). "Hücrenin geri dönüşüm/temizlik birimi" olarak bilinir.',
        '8. MİTOKONDRİ — Çift katlı zarlı, kendi DNA ve ribozomuna sahip organeldir. Hücresel solunum (oksijenli solunum) burada gerçekleşir; besin moleküllerindeki kimyasal enerji ATP\'ye dönüştürülür. "Hücrenin enerji santrali" olarak bilinir. Faaliyeti yüksek hücrelerde (kas, karaciğer, sperm kuyruğu) sayıca daha fazladır.',
        '9. KLOROPLAST — Sadece bitki ve bazı protista (alg) hücrelerinde bulunan, çift katlı zarlı, klorofil pigmenti içeren organeldir. Fotosentez yoluyla ışık enerjisini kullanarak organik besin (glikoz) ve oksijen üretir.',
        '10. KOFUF (VAKUOL) — Hücre içinde su, besin, atık madde veya pigment depolayan kesecik. Bitki hücresinde tek ve büyük (merkezi koful), turgor basıncını sağlar; hayvan hücresinde küçük ve sayıca fazladır.',
        '11. SENTROZOM — Hayvan hücrelerinde bulunan, iki sentriolden oluşan zarsız yapı; hücre bölünmesi sırasında iğ ipliklerinin oluşumunu organize eder.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.5-organelles-L4',
    subtopicId: '9-2.5-organelles',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Çekirdek (Nükleus): Genetik materyali taşıyan, hücrenin yönetim merkezi olan organel.' },
        { type: 'tip', text: 'Çekirdekçik (Nukleolus): Çekirdek içinde ribozom alt birimlerinin üretildiği yapı.' },
        { type: 'tip', text: 'Granüllü (Pürüzlü) ER: Üzerinde ribozom bulunan, protein sentezi/taşınmasında görevli ER türü.' },
        { type: 'tip', text: 'Düz (Granülsüz) ER: Ribozomsuz, lipit sentezi ve detoksifikasyonda görevli ER türü.' },
        { type: 'tip', text: 'Golgi Aygıtı: Proteinleri/lipitleri işleyen, paketleyen ve hedeflerine gönderen organel.' },
        { type: 'tip', text: 'Lizozom: Sindirim enzimleri içeren, hücre içi sindirim ve atık temizliği yapan kesecik.' },
        { type: 'tip', text: 'Mitokondri: Hücresel solunumla ATP üreten, çift katlı zarlı, kendi DNA\'sına sahip organel.' },
        { type: 'tip', text: 'Kloroplast: Fotosentez yapan, klorofil içeren, çift katlı zarlı organel (sadece bitki/alg).' },
        { type: 'tip', text: 'Koful (Vakuol): Madde depolama ve turgor basıncı sağlayan kesecik.' },
        { type: 'tip', text: 'Endosimbiyoz Teorisi: Mitokondri ve kloroplastın, geçmişte bağımsız yaşayan prokaryotların başka bir hücre tarafından içe alınmasıyla evrimleştiğini öne süren teori.' },
        { type: 'tip', text: 'Otofaji: Lizozomların hücrenin kendi yaşlı/zarar görmüş organellerini sindirmesi.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.5-organelles-L5',
    subtopicId: '9-2.5-organelles',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Mitokondri sadece hayvan hücresinde, kloroplast sadece bitki hücresinde bulunur."\n✅ Mitokondri HEM bitki HEM hayvan hücresinde bulunur (her ikisi de solunum yapar). Kloroplast ise SADECE bitki ve bazı protista (alg) hücrelerinde bulunur — hayvan hücresinde yoktur.',
        },
        {
          type: 'warning',
          text: '❌ "Ribozom bir organeldir ve zarla çevrilidir."\n✅ Ribozom ZARSIZ bir yapıdır; bu yüzden bazı kaynaklarda "organel" yerine "organel benzeri yapı" denir. Zarsız olduğu için prokaryot hücrede de bulunabilir.',
        },
        {
          type: 'warning',
          text: '❌ "Lizozom sadece bakteri/yabancı madde sindirir."\n✅ Lizozom hem dışarıdan alınan besinleri/mikroorganizmaları HEM DE hücrenin kendi yaşlı/hasarlı organellerini (otofaji) sindirir.',
        },
        {
          type: 'warning',
          text: '❌ "Koful her hücrede aynı büyüklükte ve sayıdadır."\n✅ Bitki hücresinde genellikle tek, büyük ve merkezi bir koful bulunur (turgor basıncı sağlar); hayvan hücresinde ise küçük ve sayıca fazla, geçici kofullar bulunur.',
        },
        {
          type: 'warning',
          text: '❌ "Golgi aygıtı protein/lipit ÜRETİR."\n✅ Golgi aygıtı protein ve lipit ÜRETMEZ; ER\'den gelen molekülleri İŞLER, PAKETLER ve hedeflerine GÖNDERİR. Üretim ribozom (protein) ve düz ER\'de (lipit) gerçekleşir.',
        },
        {
          type: 'warning',
          text: '❌ "Mitokondri ve kloroplastın DNA\'sı yoktur, çekirdekteki DNA\'yı kullanırlar."\n✅ Mitokondri ve kloroplastın KENDİ halkasal DNA\'ları ve ribozomları vardır — bu, endosimbiyoz teorisinin önemli kanıtlarından biridir.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.5-organelles-L6',
    subtopicId: '9-2.5-organelles',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "X organeli hangi görevi yapar?" eşleştirme soruları (mitokondri-ATP, ribozom-protein, kloroplast-fotosentez, lizozom-sindirim).\n2) "Aşağıdaki organellerden hangisi hem bitki hem hayvan hücresinde bulunur?" → mitokondri, ribozom, ER, Golgi, lizozom (bitki hücresinde lizozom azdır ama bulunabilir); kloroplast, büyük koful, hücre duvarı sadece bitkide; sentrozom sadece hayvanda.\n3) Salgı bezi hücresi gibi belirli bir hücrede hangi organelin daha fazla bulunacağının yorumlanması (örn. kas hücresinde mitokondri fazla, salgı bezinde Golgi ve granüllü ER fazla).\n4) Çift katlı zarlı organelleri sayma: çekirdek, mitokondri, kloroplast.',
      aytPattern: 'AYT\'de organellerin moleküler işlevleri (kemosentez, fotosentez/solunum biyokimyası ile bağlantı), endosimbiyoz teorisinin kanıtları (mitokondri/kloroplastın kendi DNA\'sı, çift zarı, bakteri benzeri ribozomları, ikiye bölünerek çoğalması) ve hücre organelleri ile metabolik yollar arasındaki ilişkiler daha derin sorulabilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınav tuzağı: "Bir hücrede mitokondri sayısı fazlaysa o hücre ne yapar?" → Enerji ihtiyacı yüksek bir hücredir (kas hücresi, karaciğer hücresi, sperm kuyruğu gibi). Bu tarz "organel sayısından hücre fonksiyonu çıkarma" soruları sıkça gelir.',
        },
        {
          type: 'important',
          text: 'Endosimbiyoz teorisinin kanıtları AYT\'de sıkça sorulur: (1) Kendi DNA\'ları halkasal ve bakteri DNA\'sına benzer, (2) Çift katlı zar taşırlar, (3) Kendi ribozomları (70S, bakteri tipi) vardır, (4) İkiye bölünerek (binary fission) çoğalırlar — tıpkı bakteriler gibi.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.5-organelles-L7',
    subtopicId: '9-2.5-organelles',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Hücre organellerini günlük hayattan ve vücudumuzdan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '💪 Kas hücreleri ve mitokondri: Kalp ve iskelet kaslarındaki hücrelerde, yüksek enerji talebi nedeniyle çok sayıda mitokondri bulunur — bu hücreler sürekli ATP üretir.',
        },
        {
          type: 'example',
          text: '🏭 Pankreas hücreleri ve Golgi/ER: Sindirim enzimi ve hormon (insülin) salgılayan pankreas hücrelerinde, protein üretimi ve paketlenmesi için granüllü ER ve Golgi aygıtı çok gelişmiştir.',
        },
        {
          type: 'example',
          text: '🧹 Beyaz kan hücreleri ve lizozom: Bağışıklık sisteminde görevli fagositik hücreler (makrofajlar), yuttukları bakterileri lizozom enzimleriyle parçalayarak yok eder.',
        },
        {
          type: 'example',
          text: '🍃 Yaprak hücreleri ve kloroplast: Bir yaprağın yeşil rengi, hücrelerdeki kloroplastlardaki klorofil pigmentinden gelir; bu organeller güneş ışığını kullanarak fotosentez yapar.',
        },
        {
          type: 'example',
          text: '🥒 Turşu yapımı ve koful: Sebzelerin tuzlu suya konması, hücrelerdeki büyük merkezi kofulun su kaybederek küçülmesine (plazmoliz) ve sebzenin büklümleşmesine yol açar (bkz. 9-2.7 Ozmoz konusu).',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 ─────────────────────────────────────────
  {
    id: '9-2.5-organelles-L8',
    subtopicId: '9-2.5-organelles',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.5-organelles-L9',
    subtopicId: '9-2.5-organelles',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Organeller ve Görevleri
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_5_organelles: Flashcard[] = [
  { id: 'fc-9-2.5-organelles-01', subtopicId: '9-2.5-organelles', orderIndex: 1,
    term: 'Çekirdek (Nükleus)', definition: 'Genetik materyali taşıyan, hücrenin yönetim merkezi olan organel', example: 'İçinde DNA ve çekirdekçik bulunur' },
  { id: 'fc-9-2.5-organelles-02', subtopicId: '9-2.5-organelles', orderIndex: 2,
    term: 'Mitokondri', definition: 'Hücresel solunumla ATP üreten, çift katlı zarlı organel', example: '"Hücrenin enerji santrali" — kas hücrelerinde bol bulunur' },
  { id: 'fc-9-2.5-organelles-03', subtopicId: '9-2.5-organelles', orderIndex: 3,
    term: 'Ribozom', definition: 'Protein sentezinin gerçekleştiği zarsız yapı', example: 'Hem prokaryot hem ökaryot hücrede bulunur' },
  { id: 'fc-9-2.5-organelles-04', subtopicId: '9-2.5-organelles', orderIndex: 4,
    term: 'Endoplazmik Retikulum (ER)', definition: 'Granüllü (protein sentezi) ve düz (lipit/detoks) olmak üzere iki türü olan zar sistemi', example: 'Granüllü ER üzerinde ribozomlar bulunur' },
  { id: 'fc-9-2.5-organelles-05', subtopicId: '9-2.5-organelles', orderIndex: 5,
    term: 'Golgi Aygıtı', definition: 'Proteinleri/lipitleri işleyen, paketleyen ve hedefe gönderen organel', example: '"Hücrenin paketleme ve dağıtım merkezi"' },
  { id: 'fc-9-2.5-organelles-06', subtopicId: '9-2.5-organelles', orderIndex: 6,
    term: 'Lizozom', definition: 'Sindirim enzimi içeren, hücre içi sindirim yapan kesecik', example: 'Beyaz kan hücrelerinde bakteri sindirimi' },
  { id: 'fc-9-2.5-organelles-07', subtopicId: '9-2.5-organelles', orderIndex: 7,
    term: 'Kloroplast', definition: 'Fotosentez yapan, klorofil içeren, çift katlı zarlı organel', example: 'Sadece bitki ve bazı protista hücrelerinde' },
  { id: 'fc-9-2.5-organelles-08', subtopicId: '9-2.5-organelles', orderIndex: 8,
    term: 'Koful (Vakuol)', definition: 'Madde depolama ve turgor basıncı sağlayan kesecik', example: 'Bitkide büyük ve merkezi, hayvanda küçük' },
  { id: 'fc-9-2.5-organelles-09', subtopicId: '9-2.5-organelles', orderIndex: 9,
    term: 'Sentrozom', definition: 'Hayvan hücresinde iğ ipliği oluşumunu organize eden zarsız yapı', example: 'Hücre bölünmesinde rol oynar' },
  { id: 'fc-9-2.5-organelles-10', subtopicId: '9-2.5-organelles', orderIndex: 10,
    term: 'Endosimbiyoz Teorisi', definition: 'Mitokondri ve kloroplastın bağımsız prokaryotlardan evrimleştiğini öne süren teori', example: 'Kanıt: kendi DNA\'ları, çift zarları, 70S ribozomları' },
];
