import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Enzim Aktivitesini Etkileyen Koşullar (9BIO-2.4)
// Alt Konu: Enzim Aktivitesi ve Etki Eden Faktörler (9-2.4-enzyme)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_4_enzyme: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.4-enzyme-L1',
    subtopicId: '9-2.4-enzyme',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Enzimler, hücrede gerçekleşen biyokimyasal tepkimeleri hızlandıran protein yapılı biyolojik katalizörlerdir. Bir tepkimenin gerçekleşebilmesi için aşılması gereken enerji eşiğine "aktivasyon enerjisi" denir. Enzimler, bu eşiği düşürerek tepkimenin çok daha az enerjiyle ve çok daha hızlı gerçekleşmesini sağlar. Enzimler tepkime sonunda yapılarını ve miktarlarını korur; yani tükenmezler, defalarca kullanılabilirler.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Enzim = Protein yapılı biyokatalizör. Görevi: Aktivasyon enerjisini DÜŞÜRMEK. Tepkimenin yönünü değiştirmez, sadece hızlandırır. Tepkime sonunda yapısı bozulmadan kalır, tekrar kullanılabilir.',
        },
        {
          type: 'tip',
          text: 'Anahtar-Kilit Modeli: Enzimin etki ettiği maddeye "substrat" denir. Enzim, substratına özgüdür — her enzim yalnızca kendi substratına (veya çok benzer yapıdaki moleküllere) bağlanabilir. Bu özelliğe "enzim özgüllüğü (spesifikliği)" denir.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.4-enzyme-L2',
    subtopicId: '9-2.4-enzyme',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: ['tyt-enzimler', 'tyt-katalaz-deneyi'],
      body: 'Bir enzimin yapısında, substratın bağlandığı özel bir bölge bulunur; buraya "aktif bölge (aktif merkez)" denir. Enzim ile substrat birleştiğinde "enzim-substrat kompleksi" oluşur. Tepkime tamamlandığında ürün(ler) açığa çıkar ve enzim, aktif bölgesi bozulmadan serbest kalarak başka bir substrat molekülüyle yeniden tepkimeye girebilir. Aktif bölgenin üç boyutlu şekli, substratın şekline tam uyum sağlayacak biçimdedir — bu yüzden bir enzim genellikle yalnızca bir tür substratla (veya çok benzer birkaç molekülle) çalışır.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Aktivasyon enerjisi grafiği: Enzimsiz tepkimede ürünlere ulaşmak için aşılması gereken enerji tepesi yüksektir. Enzim varlığında bu tepe ALÇALIR — tepkime daha kolay ve hızlı gerçekleşir. Ancak başlangıç (substrat) ve bitiş (ürün) enerji seviyeleri DEĞİŞMEZ; enzim tepkimenin enerji dengesini değiştirmez, yalnızca hızını artırır.',
        },
        {
          type: 'tip',
          text: 'Anahtar-kilit benzetmesi: Substrat = anahtar, enzimin aktif bölgesi = kilit. Doğru anahtar (substrat) doğru kilide (aktif bölgeye) uyar ve kapıyı (tepkimeyi) açar. "İndüklenmiş uyum modeli"ne göre ise aktif bölge, substrat bağlandığında biraz şekil değiştirerek substrata daha iyi uyum sağlar — eldiven elin şeklini almak için biraz esner gibi.',
        },
        {
          type: 'important',
          text: 'Enzim-substrat kompleksi geçicidir: Enzim + Substrat → Enzim-Substrat Kompleksi → Enzim + Ürün(ler). Enzim değişmeden çıkar, substrat ürün(ler)e dönüşür.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.4-enzyme-L3',
    subtopicId: '9-2.4-enzyme',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Enzim aktivitesini etkileyen faktörler ve grafik üzerindeki etkileri:',
      steps: [
        '1. SICAKLIK — Sıcaklık arttıkça moleküllerin hareket hızı artar, enzim-substrat çarpışma sıklığı yükselir ve tepkime hızı artar. Ancak belirli bir noktadan sonra (genellikle insan vücut enzimleri için ~37-40°C civarı) enzimin protein yapısı bozulmaya (denatürasyona) başlar ve aktivite hızla düşer. Grafik: Önce yükselen, optimum noktada tepe yapan, sonra hızla düşen bir eğri (ters U/çan eğrisi).',
        '2. OPTİMUM SICAKLIK — Enzimin en hızlı çalıştığı sıcaklık değeridir. Bu noktanın altında veya üstünde aktivite azalır. Optimum sıcaklığın ÜZERİNDE düşüş, denatürasyon nedeniyle KALICIDIR (sıcaklık düşse bile enzim eski hâline dönmez). Optimum sıcaklığın ALTINDA düşüş ise GEÇİCİDİR (sıcaklık artırılırsa aktivite tekrar artabilir, enzim bozulmamıştır, sadece yavaş çalışmaktadır).',
        '3. pH — Her enzimin en verimli çalıştığı bir "optimum pH" değeri vardır. pH değişimi, enzimin aktif bölgesinin üç boyutlu yapısını (iyonik ve hidrojen bağlarını) etkileyerek substratla uyumunu bozabilir. Örnekler: Pepsin (mide enzimi) optimum pH ≈ 2 (asidik); tükürük amilazı optimum pH ≈ 6,8 (nötr-hafif asidik); tripsin (bağırsak enzimi) optimum pH ≈ 8 (bazik). Optimum pH\'tan uzaklaştıkça aktivite azalır; aşırı pH değişimleri de denatürasyona yol açabilir.',
        '4. SUBSTRAT DERİŞİMİ — Enzim miktarı sabitken substrat derişimi artırıldıkça tepkime hızı önce hızla artar; çünkü daha fazla enzim-substrat çarpışması olur. Ancak tüm enzimlerin aktif bölgeleri substratla doluştuğunda (DOYMA NOKTASI) tepkime hızı sabitlenir (PLATO/düzlük çizer) — artık substrat artırılsa bile hız artmaz, çünkü sınırlayıcı faktör enzim miktarıdır.',
        '5. ENZİM DERİŞİMİ — Substrat derişimi sabit ve fazla (sınırsız) iken enzim derişimi artırıldıkça tepkime hızı doğrusal olarak artar; çünkü daha fazla aktif bölge tepkimeye katılır. Substrat sınırlı kaldığında ise enzim artışı bir noktadan sonra hızı artırmaz (substrat sınırlayıcı faktör olur).',
        '6. SU MİKTARI — Enzimler genellikle su ortamında (hücre sitoplazması gibi) etkilidir; su, substrat ve enzimin serbestçe hareket edip çarpışmasını sağlar. Susuz veya çok az sulu ortamlarda (örn. kuru tohum) enzim aktivitesi neredeyse durur; su eklendiğinde (çimlenme gibi) enzimler tekrar aktifleşir.',
        '7. AKTİVATÖRLER — Enzimin aktivitesini ARTIRAN, çoğunlukla küçük inorganik (Mg²⁺, Ca²⁺, Cl⁻ gibi) veya organik (vitaminler, koenzimler) yardımcı moleküllerdir. Bazı enzimler aktivatör olmadan hiç çalışamaz (kofaktöre bağımlı enzimler).',
        '8. İNHİBİTÖRLER — Enzim aktivitesini AZALTAN veya DURDURAN moleküllerdir. İki temel tip vardır: (a) YARIŞMALI (rekabetçi) İNHİBİSYON — inhibitör, substrata benzer şekle sahiptir ve aktif bölgeye substratla yarışarak bağlanır; substrat derişimi artırılırsa inhibisyon etkisi AZALTILABİLİR. (b) YARIŞMASIZ (allosterik) İNHİBİSYON — inhibitör, aktif bölge dışındaki bir bölgeye (allosterik bölge) bağlanarak enzimin şeklini bozar; substrat derişimi artırılsa bile inhibisyon ORTADAN KALKMAZ.',
        '9. KONTROLLÜ DENEY TASARIMI ÖRNEĞİ — Sıcaklığın katalaz enzimi aktivitesine etkisini test etmek için: Bağımsız değişken = sıcaklık (0°C, 25°C, 37°C, 60°C, 100°C); Bağımlı değişken = oluşan O₂ gazı miktarı/köpük yüksekliği (birim zamanda); Kontrol edilen (sabit tutulan) değişkenler = enzim derişimi, substrat (H₂O₂) derişimi, pH, hacim, süre. Her sıcaklıkta deney aynı şartlarda tekrarlanır ve sonuçlar grafiğe aktarılır.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.4-enzyme-L4',
    subtopicId: '9-2.4-enzyme',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Aktivasyon Enerjisi: Bir tepkimenin başlayabilmesi için aşılması gereken minimum enerji eşiği; enzimler bunu düşürür.' },
        { type: 'tip', text: 'Substrat: Enzimin etki ettiği, üzerinde tepkime gerçekleştirdiği madde.' },
        { type: 'tip', text: 'Aktif Bölge (Aktif Merkez): Enzimin substratla birleştiği özel üç boyutlu bölge.' },
        { type: 'tip', text: 'Enzim-Substrat Kompleksi: Enzim ile substratın geçici olarak birleşmesiyle oluşan ara yapı.' },
        { type: 'tip', text: 'Enzim Özgüllüğü (Spesifikliği): Bir enzimin yalnızca belirli bir substrata veya yapıca benzer substratlara etki edebilmesi.' },
        { type: 'tip', text: 'Optimum Sıcaklık / Optimum pH: Bir enzimin en yüksek hızda çalıştığı sıcaklık ve pH değeri.' },
        { type: 'tip', text: 'Denatürasyon: Yüksek sıcaklık veya aşırı pH nedeniyle proteinin (enzimin) üç boyutlu yapısının kalıcı olarak bozulması; aktivite kaybı geri dönüşümsüzdür.' },
        { type: 'tip', text: 'Doyma Noktası (Plato): Enzim miktarının sabit kaldığı durumda, tüm aktif bölgelerin dolu olması nedeniyle substrat artışının tepkime hızını artırmadığı nokta.' },
        { type: 'tip', text: 'Aktivatör (Kofaktör): Enzim aktivitesini artıran veya gerekli kılan yardımcı iyon/molekül (Mg²⁺, vitaminler vb.).' },
        { type: 'tip', text: 'İnhibitör: Enzim aktivitesini azaltan veya durduran madde.' },
        { type: 'tip', text: 'Yarışmalı (Rekabetçi) İnhibisyon: İnhibitörün substrata benzeyerek aktif bölgeye substratla yarışarak bağlanması; substrat artışıyla giderilebilir.' },
        { type: 'tip', text: 'Yarışmasız (Allosterik) İnhibisyon: İnhibitörün aktif bölge dışındaki bir bölgeye bağlanarak enzimin şeklini bozması; substrat artışıyla giderilemez.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.4-enzyme-L5',
    subtopicId: '9-2.4-enzyme',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Enzimler tepkime sonunda harcanır, tükenir."\n✅ Enzimler katalizördür; tepkime sonunda yapıları bozulmadan kalır ve tekrar tekrar kullanılabilirler. Tükenen, harcanan substrattır.',
        },
        {
          type: 'warning',
          text: '❌ "Sıcaklık ne kadar artarsa enzim o kadar hızlı çalışır."\n✅ Sadece optimum sıcaklığa kadar artış, hızı artırır. Optimum sıcaklığın üzerinde enzim denatüre olur ve aktivite KALICI olarak azalır/durur.',
        },
        {
          type: 'warning',
          text: '❌ "Optimum sıcaklığın altındaki ve üstündeki düşüşler aynı sebepten kaynaklanır."\n✅ Optimumun ALTINDA aktivite azalması GEÇİCİDİR (enzim bozulmamıştır, moleküller yavaş hareket eder). Optimumun ÜSTÜNDE ise KALICIDIR (denatürasyon — yapı bozulmuştur).',
        },
        {
          type: 'warning',
          text: '❌ "Substrat miktarını sonsuza kadar artırırsam tepkime hızı da sonsuza kadar artar."\n✅ Enzim miktarı sabitse, tüm aktif bölgeler substratla dolduğunda (doyma noktası) tepkime hızı sabitlenir; daha fazla substrat eklemek hızı artırmaz.',
        },
        {
          type: 'warning',
          text: '❌ "Enzim, tepkimenin yönünü ve denge noktasını değiştirir."\n✅ Enzim sadece tepkime HIZINI artırır; tepkimenin başlangıç ve bitiş enerji seviyelerini, ürün miktarını veya tepkimenin gerçekleşip gerçekleşmeyeceğini değiştirmez.',
        },
        {
          type: 'warning',
          text: '❌ "Bütün inhibitörler substrat artırılınca etkisiz hale gelir."\n✅ Bu yalnızca YARIŞMALI inhibitörler için geçerlidir. YARIŞMASIZ (allosterik) inhibitörler aktif bölgeye değil başka bir bölgeye bağlandığı için substrat artışı bu inhibisyonu ortadan kaldırmaz.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.4-enzyme-L6',
    subtopicId: '9-2.4-enzyme',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) Sıcaklık-tepkime hızı grafiği verilip "optimum sıcaklık hangisidir?", "X°C\'de enzim ne durumda?" gibi grafik okuma soruları.\n2) Verilen pH/sıcaklık değerlerine göre hangi enzimin (pepsin, amilaz, tripsin) hangi ortamda en hızlı çalıştığını belirleme.\n3) "Aşağıdakilerden hangisi enzimlerin ortak özelliğidir?" tarzı genel bilgi soruları (protein yapılı olma, aktivasyon enerjisini düşürme, tükenmeme, özgüllük).\n4) Substrat derişimi - tepkime hızı grafiğinde "doyma noktası"nı ve bu noktadan sonra hızı artırmak için ne yapılması gerektiğini (enzim miktarını artırmak) sorma.',
      aytPattern: 'AYT\'de daha derin grafik yorumlama ve deney tasarımı soruları görülür: (1) Yarışmalı/yarışmasız inhibisyon grafiklerinin substrat derişimine göre karşılaştırılması; substrat artırılınca hangi inhibisyon türünde hızın eski değerine ulaşabileceğinin sorulması. (2) Birden fazla değişkenin (sıcaklık + pH, enzim derişimi + substrat derişimi) birlikte verildiği karmaşık grafiklerin yorumlanması. (3) Kontrollü deney tasarımında bağımsız/bağımlı/kontrol değişkenlerinin belirlenmesi (9BIO-2.4-K7).',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Klasik tuzak: "Optimum sıcaklığın altında ve üstünde tepkime hızı düşer, ikisi de aynı nedenle midir?" Cevap HAYIR — altındaki düşüş geçici (kinetik enerji azlığı), üstündeki düşüş kalıcıdır (denatürasyon). Sınav bu ayrımı çok sık test eder.',
        },
        {
          type: 'important',
          text: 'Grafik tuzağı: Substrat derişimi-hız grafiğinde eğrinin yatay hâle geldiği (plato) bölgede, hızı artırmanın TEK yolu enzim miktarını artırmaktır — substrat eklemek değil!',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.4-enzyme-L7',
    subtopicId: '9-2.4-enzyme',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Enzim aktivitesini günlük hayattan ve laboratuvardan örneklerle anlayalım:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🥩 Etin marine edilmesi: Kivi, ananas gibi meyvelerdeki proteaz enzimleri (papain, bromelain) eti yumuşatır çünkü et proteinlerini parçalayan enzimleri substratlarına (et proteinlerine) etki ettirir.',
        },
        {
          type: 'example',
          text: '🌡️ Ateşin tehlikesi: Yüksek ateş (40°C üzeri uzun süre) vücut enzimlerinin denatüre olmasına yol açabilir; bu yüzden 41-42°C üzeri vücut sıcaklıkları hayati tehlike oluşturur.',
        },
        {
          type: 'example',
          text: '🧴 Deterjanlardaki enzimler: Biyolojik (enzimli) deterjanlar, leke kaynağı olan protein (kan, yumurta) ve yağ kalıntılarını parçalamak için proteaz ve lipaz enzimleri içerir; bu enzimler genellikle 30-40°C arası ılık suda en iyi çalışır.',
        },
        {
          type: 'example',
          text: '🧪 Katalaz deneyi: Patates veya karaciğer parçası hidrojen peroksit (H₂O₂) çözeltisine atıldığında köpürme (O₂ gazı çıkışı) gözlenir. Karaciğer parçası dondurulup eritildikten sonra tekrar denenirse köpürme YİNE oluşur (su miktarı/sıcaklık geçici etkiyse) ama karaciğer önce kaynatılırsa köpürme OLUŞMAZ (denatürasyon kalıcıdır).',
        },
        {
          type: 'example',
          text: '💊 İlaç-enzim etkileşimi: Bazı ilaçlar (örn. bazı antibiyotikler), bakterilerin yaşamsal enzimlerini yarışmalı veya yarışmasız inhibisyonla bloke ederek bakterinin üremesini durdurur.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 ─────────────────────────────────────────
  {
    id: '9-2.4-enzyme-L8',
    subtopicId: '9-2.4-enzyme',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.4-enzyme-L9',
    subtopicId: '9-2.4-enzyme',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Enzim Aktivitesi ve Etki Eden Faktörler
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_4_enzyme: Flashcard[] = [
  { id: 'fc-9-2.4-enzyme-01', subtopicId: '9-2.4-enzyme', orderIndex: 1,
    term: 'Aktivasyon Enerjisi', definition: 'Bir tepkimenin başlayabilmesi için aşılması gereken minimum enerji eşiği', example: 'Enzimler bu eşiği düşürerek tepkimeyi hızlandırır' },
  { id: 'fc-9-2.4-enzyme-02', subtopicId: '9-2.4-enzyme', orderIndex: 2,
    term: 'Substrat', definition: 'Enzimin etki ettiği, üzerinde tepkime gerçekleştirdiği madde', example: 'Katalaz enziminin substratı H₂O₂\'dir' },
  { id: 'fc-9-2.4-enzyme-03', subtopicId: '9-2.4-enzyme', orderIndex: 3,
    term: 'Aktif Bölge', definition: 'Enzimin substratla birleştiği özel üç boyutlu bölge', example: 'Anahtar-kilit modelinde "kilit" kısmıdır' },
  { id: 'fc-9-2.4-enzyme-04', subtopicId: '9-2.4-enzyme', orderIndex: 4,
    term: 'Enzim Özgüllüğü', definition: 'Bir enzimin yalnızca belirli substrata etki edebilmesi', example: 'Sükraz yalnızca sükrozu parçalar, laktozu parçalamaz' },
  { id: 'fc-9-2.4-enzyme-05', subtopicId: '9-2.4-enzyme', orderIndex: 5,
    term: 'Optimum Sıcaklık/pH', definition: 'Enzimin en yüksek hızda çalıştığı sıcaklık ve pH değeri', example: 'Pepsin için optimum pH ≈ 2' },
  { id: 'fc-9-2.4-enzyme-06', subtopicId: '9-2.4-enzyme', orderIndex: 6,
    term: 'Denatürasyon', definition: 'Proteinin üç boyutlu yapısının kalıcı olarak bozulması', example: 'Yumurta akının pişince beyazlaşıp katılaşması' },
  { id: 'fc-9-2.4-enzyme-07', subtopicId: '9-2.4-enzyme', orderIndex: 7,
    term: 'Doyma Noktası', definition: 'Tüm aktif bölgelerin dolu olması nedeniyle substrat artışının hızı artırmadığı nokta', example: 'Grafikte eğrinin yataylaştığı (plato) bölge' },
  { id: 'fc-9-2.4-enzyme-08', subtopicId: '9-2.4-enzyme', orderIndex: 8,
    term: 'Aktivatör', definition: 'Enzim aktivitesini artıran veya gerekli kılan yardımcı molekül/iyon', example: 'Mg²⁺ iyonu birçok enzim için aktivatördür' },
  { id: 'fc-9-2.4-enzyme-09', subtopicId: '9-2.4-enzyme', orderIndex: 9,
    term: 'Yarışmalı İnhibisyon', definition: 'İnhibitörün substrata benzeyerek aktif bölgeye yarışarak bağlanması', example: 'Substrat derişimi artırılarak etkisi azaltılabilir' },
  { id: 'fc-9-2.4-enzyme-10', subtopicId: '9-2.4-enzyme', orderIndex: 10,
    term: 'Yarışmasız İnhibisyon', definition: 'İnhibitörün aktif bölge dışındaki bölgeye bağlanarak enzim şeklini bozması', example: 'Substrat artışıyla etkisi giderilemez' },
  { id: 'fc-9-2.4-enzyme-11', subtopicId: '9-2.4-enzyme', orderIndex: 11,
    term: 'Enzim-Substrat Kompleksi', definition: 'Enzim ile substratın geçici birleşimiyle oluşan ara yapı', example: 'Tepkime sonunda enzim ve ürünlere ayrışır' },
];
