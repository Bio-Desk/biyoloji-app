import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Bilimsel Araştırmaların Etik Uygunluğu (9BIO-1.3)
// Alt Konu: Bilimsel Araştırmalar ve Etik (9-1.3-ethics)
// ─────────────────────────────────────────────────────────────

export const layers_9_1_3_ethics: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-1.3-ethics-L1',
    subtopicId: '9-1.3-ethics',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilim etiği, bilimsel araştırmaların doğru, dürüst ve toplum yararına yapılmasını sağlayan ilkeler bütünüdür. Bilimsel araştırmalarda etik ilkelere uyulması; üretilen bilginin güvenilirliğini korur, araştırmacılar arasında güveni sağlar ve canlı haklarına saygıyı garanti eder. Etik kurallara uyulmadığında elde edilen "bilgi" güvenilmez hâle gelir ve bilim insanına olan toplumsal güven sarsılır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilim Etiğinin Temel İlkeleri: Dürüstlük · Tarafsızlık (Nesnellik) · Kaynak Gösterme (Atıf) · Veri Güvenilirliği · Canlı Haklarına Saygı.',
        },
        {
          type: 'tip',
          text: 'Hatırlama: "Bilim insanı; gördüğünü olduğu gibi yazar (dürüstlük), kimseyi kayırmaz (tarafsızlık), başkasının fikrine sahip çıkmaz (atıf), verisini uydurmaz (güvenilirlik), deneklere saygılı davranır (canlı hakları)."',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-1.3-ethics-L2',
    subtopicId: '9-1.3-ethics',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      body: 'Bilim etiğini "etik ilkeler" ve "etik ihlaller" olmak üzere iki sütunlu bir tablo şeklinde şematize edebiliriz; her ihlalin karşısına hangi ilkeyi çiğnediğini yazabiliriz.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Şema önerisi — İki sütunlu tablo:\nSÜTUN 1 (Etik İlkeler): Dürüstlük | Tarafsızlık | Kaynak Gösterme | Veri Güvenilirliği | Canlı Haklarına Saygı\nSÜTUN 2 (Bu ilke ihlal edilirse ortaya çıkan durum): Veri uydurma/çarpıtma | Önyargılı sonuç sunma | İntihal (plagiarism) | Sahte/manipüle edilmiş veri | Deneklere kötü muamele, izinsiz kullanım\nHer satırı bir okla birleştirerek "İlke → İhlal" ilişkisini görselleştir.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-1.3-ethics-L3',
    subtopicId: '9-1.3-ethics',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bilim etiğinin neden gerekli olduğunu, temel ilkelerini, ihlal türlerini ve canlılar üzerindeki araştırmalardaki etik kuralları adım adım inceleyelim:',
      steps: [
        '1. ETİĞİN GEREKLİLİĞİ — Bilimsel araştırmalar; ilaç geliştirme, gıda güvenliği, çevre politikaları gibi toplumu doğrudan etkileyen kararlara temel oluşturur. Yanlış veya çarpıtılmış bir bilgi, yanlış sağlık politikalarına, hatalı ilaçlara veya çevresel felaketlere yol açabilir. Bu yüzden etik ilkeler, üretilen bilginin GÜVENİLİR ve TOPLUM YARARINA olmasını garanti eder.',
        '2. DÜRÜSTLÜK — Araştırmacı, elde ettiği verileri olduğu gibi raporlamalı; sonuçları beklentisine uysun ya da uymasın gerçeği yansıtmalıdır.',
        '3. TARAFSIZLIK (NESNELLİK) — Araştırmacı, kişisel görüşlerinin, çıkar ilişkilerinin veya önyargılarının sonuçları etkilemesine izin vermemelidir. Örneğin bir ilaç firmasının finanse ettiği araştırmada, o firmanın ürününü olumlu gösterecek şekilde veri seçilmemelidir.',
        '4. KAYNAK GÖSTERME (ATIF) — Başkalarının fikir, yöntem veya verilerinden yararlanılırken mutlaka kaynak belirtilmelidir. Bu, hem bilgiye saygının hem de bilimsel iletişimin temelidir.',
        '5. VERİ GÜVENİLİRLİĞİ — Toplanan veriler doğru yöntemlerle elde edilmeli, saklanmalı ve gerektiğinde başka araştırmacıların incelemesine açık tutulmalıdır. Veriler üzerinde sonradan değişiklik yapılmamalıdır.',
        '6. CANLI HAKLARINA SAYGI — İnsan veya hayvanlar üzerinde yapılan araştırmalarda deneklerin sağlığına, refahına ve (insanlar için) "bilgilendirilmiş onam" hakkına saygı gösterilmelidir. Hayvan deneylerinde gereksiz acı verilmemesi ve alternatif yöntemlerin (hücre kültürü, bilgisayar simülasyonu) tercih edilmesi önerilir.',
        '7. İNTİHAL (PLAGIARISM) — Başka bir araştırmacının fikrini, metnini veya verisini kaynak göstermeden kendisininmiş gibi sunmaktır. Bu, en yaygın ve ciddi etik ihlallerden biridir.',
        '8. VERİ UYDURMA (FABRİKASYON) — Hiç yapılmamış bir deneyin sonuçlarını uydurarak rapor etmektir. Bu, bilimsel literatürü tamamen yanlış bilgilerle doldurur.',
        '9. VERİ ÇARPITMA (MANİPÜLASYON) — Gerçek verilerin, istenen sonuca ulaşmak için seçici şekilde değiştirilmesi, bazı verilerin gizlenmesi veya yanlış yorumlanmasıdır.',
        '10. İZİNSİZ KULLANIM — Bir başkasının verisinin, görselinin veya araştırma materyalinin izin alınmadan kullanılmasıdır; bu hem etik hem de hukuki bir ihlaldir.',
        '11. BİLİMSEL BİLGİNİN TOPLUM YARARINA KULLANILMASI — Üretilen bilimsel bilgi; insan sağlığına zarar verecek, çevreyi tahrip edecek veya bir grubun çıkarına diğerlerinin zararına kullanılacak şekilde değil; toplumun genel yararını gözeterek kullanılmalıdır (örneğin biyolojik silah geliştirmek yerine hastalıkları tedavi etmek için araştırma yapmak).',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-1.3-ethics-L4',
    subtopicId: '9-1.3-ethics',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Bilim Etiği: Bilimsel araştırmaların dürüstlük, tarafsızlık ve toplum yararı ilkelerine uygun yürütülmesini sağlayan kurallar bütünü.' },
        { type: 'tip', text: 'İntihal (Plagiarism): Başkasının fikrini/eserini kaynak göstermeden kendine mal etme.' },
        { type: 'tip', text: 'Veri Uydurma (Fabrikasyon): Yapılmamış bir deneyin sonuçlarını uydurma.' },
        { type: 'tip', text: 'Veri Çarpıtma (Manipülasyon): Gerçek verilerin istenen sonuca göre değiştirilmesi veya seçici sunulması.' },
        { type: 'tip', text: 'Bilgilendirilmiş Onam: Bir araştırmaya katılan kişinin, araştırmanın amacı ve riskleri hakkında bilgilendirildikten sonra gönüllü olarak rıza göstermesi.' },
        { type: 'tip', text: 'Tarafsızlık (Nesnellik): Kişisel görüş ve çıkarların araştırma sonuçlarını etkilememesi.' },
        { type: 'tip', text: 'Atıf (Kaynak Gösterme): Yararlanılan kaynakların açıkça belirtilmesi.' },
        { type: 'tip', text: 'Hayvan Refahı: Deney hayvanlarına gereksiz acı verilmemesi ve insancıl koşullar sağlanması ilkesi.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-1.3-ethics-L5',
    subtopicId: '9-1.3-ethics',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "İntihal sadece kelimesi kelimesine kopyalamaktır."\n✅ Bir fikri kendi cümlelerinle yazsan bile, kaynağını belirtmezsen bu da intihaldir. Önemli olan FİKRİN sahibine atıf yapılmasıdır, sadece metnin birebir kopyalanması değil.',
        },
        {
          type: 'warning',
          text: '❌ "Veri uydurma ile veri çarpıtma aynı şeydir."\n✅ Veri uydurma (fabrikasyon), HİÇ yapılmamış bir deneyin sonuçlarını icat etmektir. Veri çarpıtma (manipülasyon) ise GERÇEKTEN yapılan bir deneyin verilerini istenen sonuca göre değiştirmek veya seçici sunmaktır. İkisi de etik ihlaldir ama farklıdır.',
        },
        {
          type: 'warning',
          text: '❌ "Hayvanlar üzerinde araştırma yapmak tamamen etik dışıdır, hiç yapılmamalıdır."\n✅ Hayvan deneyleri belirli etik kurallar çerçevesinde (gereksiz acı vermeme, alternatif yöntem yoksa kullanma, etik kurul onayı alma) bilimsel ilerleme için zaman zaman gereklidir. Önemli olan, bu kurallara titizlikle uyulmasıdır.',
        },
        {
          type: 'warning',
          text: '❌ "Bir araştırmacı kendi fikrine güveniyorsa, sonuçları ona göre yorumlayabilir."\n✅ Bu, tarafsızlık ilkesinin ihlalidir. Araştırmacı, kişisel inançlarından bağımsız olarak verileri olduğu gibi raporlamalı ve yorumlamalıdır.',
        },
        {
          type: 'warning',
          text: '❌ "Etik kurallar sadece tıp ve sağlık araştırmalarında geçerlidir."\n✅ Etik ilkeler; biyoloji, kimya, sosyal bilimler, mühendislik gibi TÜM bilim dallarında ve her türlü araştırmada (anket, gözlem, deney) geçerlidir.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-1.3-ethics-L6',
    subtopicId: '9-1.3-ethics',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) Verilen bir araştırmacı davranışının (örneğin "verilerini değiştirerek yayınlama") hangi etik ilkeyi ihlal ettiğinin sorulması.\n2) "Aşağıdakilerden hangisi/hangileri bilimsel araştırmalarda etik bir davranıştır?" tarzı öncüllü (I, II, III) sorular.\n3) İntihal, veri uydurma, veri çarpıtma kavramlarının birbirinden ayırt edilmesi.\n4) Canlılar üzerinde yapılan araştırmalarda (özellikle hayvan deneylerinde) uyulması gereken etik kuralların değerlendirilmesi.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sık çıkan tuzak: "Bir araştırmacı, deney sonuçlarını beklediği gibi çıkmadığı için bazı verileri rapora dahil etmemiştir." Bu durum VERİ ÇARPITMA (manipülasyon) ve aynı zamanda DÜRÜSTLÜK ile VERİ GÜVENİLİRLİĞİ ilkelerinin ihlalidir — sınavda birden fazla ilkenin aynı anda ihlal edildiği senaryolar verilebilir.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-1.3-ethics-L7',
    subtopicId: '9-1.3-ethics',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Bilim etiğini günlük hayattan ve güncel örneklerle pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '📄 Ödev/proje hazırlama: Bir öğrencinin internetten bulduğu bir paragrafı kaynak göstermeden ödevine kopyalaması, bilim dünyasındaki "intihal" kavramının küçük ölçekli bir örneğidir.',
        },
        {
          type: 'example',
          text: '💊 İlaç klinik denemeleri: Yeni bir ilacın test edilmesi için gönüllülerden "bilgilendirilmiş onam" alınması — kişiye araştırmanın amacı, olası riskleri ve faydaları açıkça anlatılmadan deneye dahil edilmemesi gerekir.',
        },
        {
          type: 'example',
          text: '🐭 Laboratuvar hayvanları: Yeni bir kozmetik ürünün güvenliğini test etmek için fare üzerinde deney yapılması durumunda, etik kurullar hayvana en az acı verecek yöntemlerin kullanılmasını ve mümkünse alternatif yöntemlerin (hücre kültürü) tercih edilmesini şart koşar.',
        },
        {
          type: 'example',
          text: '📊 Çevre raporları: Bir fabrikanın çevreye verdiği zararı inceleyen bir araştırmada, fabrika tarafından finanse edilen bir bilim insanının verileri "fabrika lehine" çarpıtması, tarafsızlık ilkesinin ciddi bir ihlalidir.',
        },
        {
          type: 'example',
          text: '🧬 Genetik veri paylaşımı: Bir kişinin DNA testi sonuçlarının, kendisinin izni olmadan üçüncü taraflarla paylaşılması, hem etik hem de KVKK gibi yasal düzenlemelerin ihlalidir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-1.3-ethics-L8',
    subtopicId: '9-1.3-ethics',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'MINI_QUIZ_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
  {
    id: '9-1.3-ethics-L9',
    subtopicId: '9-1.3-ethics',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'ASSESSMENT_PLACEHOLDER',
      highlightBoxes: [],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Bilimsel Araştırmalar ve Etik
// ─────────────────────────────────────────────────────────────

export const flashcards_9_1_3_ethics: Flashcard[] = [
  { id: 'fc-9-1.3-01', subtopicId: '9-1.3-ethics', orderIndex: 1,
    term: 'Bilim Etiği', definition: 'Bilimsel araştırmaların dürüstlük, tarafsızlık ve toplum yararı ilkelerine uygun yürütülmesini sağlayan kurallar bütünü', example: 'Verilerin olduğu gibi raporlanması' },
  { id: 'fc-9-1.3-02', subtopicId: '9-1.3-ethics', orderIndex: 2,
    term: 'İntihal (Plagiarism)', definition: 'Başkasının fikrini, metnini veya verisini kaynak göstermeden kendine mal etme', example: 'Bir makaleden alıntı yapılırken kaynağın belirtilmemesi' },
  { id: 'fc-9-1.3-03', subtopicId: '9-1.3-ethics', orderIndex: 3,
    term: 'Veri Uydurma (Fabrikasyon)', definition: 'Hiç yapılmamış bir deneyin sonuçlarını uydurarak raporlamak', example: 'Yapılmayan bir deneyin "başarılı" sonuçlarının yayınlanması' },
  { id: 'fc-9-1.3-04', subtopicId: '9-1.3-ethics', orderIndex: 4,
    term: 'Veri Çarpıtma (Manipülasyon)', definition: 'Gerçek verilerin istenen sonuca göre değiştirilmesi veya seçici sunulması', example: 'Beklenen sonucu desteklemeyen verilerin rapora dahil edilmemesi' },
  { id: 'fc-9-1.3-05', subtopicId: '9-1.3-ethics', orderIndex: 5,
    term: 'Tarafsızlık (Nesnellik)', definition: 'Kişisel görüş ve çıkarların araştırma sonuçlarını etkilememesi', example: 'Bir ilaç firmasının finanse ettiği araştırmada verilerin objektif sunulması' },
  { id: 'fc-9-1.3-06', subtopicId: '9-1.3-ethics', orderIndex: 6,
    term: 'Bilgilendirilmiş Onam', definition: 'Araştırmaya katılan kişinin, amaç ve riskler hakkında bilgilendirildikten sonra gönüllü rıza göstermesi', example: 'Klinik ilaç denemesine katılan gönüllülerden onay alınması' },
  { id: 'fc-9-1.3-07', subtopicId: '9-1.3-ethics', orderIndex: 7,
    term: 'Veri Güvenilirliği', definition: 'Toplanan verilerin doğru yöntemlerle elde edilmesi, saklanması ve değiştirilmemesi', example: 'Deney kayıtlarının ham hâliyle korunması' },
  { id: 'fc-9-1.3-08', subtopicId: '9-1.3-ethics', orderIndex: 8,
    term: 'Canlı Hakları', definition: 'Araştırmalarda insan ve hayvan deneklerin sağlık ve refahına saygı gösterilmesi ilkesi', example: 'Hayvan deneylerinde gereksiz acı verilmemesi' },
  { id: 'fc-9-1.3-09', subtopicId: '9-1.3-ethics', orderIndex: 9,
    term: 'Atıf (Kaynak Gösterme)', definition: 'Yararlanılan başka çalışmaların kaynağının açıkça belirtilmesi', example: 'Bir makalede "Watson ve Crick (1953)\'e göre..." ifadesinin kullanılması' },
];
