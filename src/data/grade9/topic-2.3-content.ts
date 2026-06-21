import type { LessonLayer, Flashcard } from '../../types';

// ─────────────────────────────────────────────────────────────
// KONU: Organik Bileşiklerin Tespiti (9BIO-2.3)
// Alt Konu: Benedict, İyot, Biüret ve Sudan Ayıraçları (9-2.3-reagents)
// ─────────────────────────────────────────────────────────────

export const layers_9_2_3_reagents: LessonLayer[] = [
  // ── KATMAN 1: Temel Kavram ────────────────────────────────
  {
    id: '9-2.3-reagents-L1',
    subtopicId: '9-2.3-reagents',
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bir besinde hangi organik moleküllerin (karbonhidrat, protein, yağ) bulunduğunu anlamak için laboratuvarda özel kimyasal ayıraçlar (belirteçler) kullanılır. Her ayıracın belirli bir organik molekül grubuyla tepkimeye girdiğinde rengi değişir. Bu renk değişimleri, besin içeriği hakkında doğrudan bilgi verir ve TYT/AYT sınavlarında deney yorumlama sorularının temelini oluşturur.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Dört Temel Ayıraç:\n1) BENEDICT — İndirgen şekerleri (glikoz gibi) tespit eder → Tuğla kırmızısı/turuncu çökelti\n2) İYOT (Lugol) — Nişastayı tespit eder → Mavi-mor/siyah renk\n3) BİÜRET — Proteinleri tespit eder → Mor/eflatun renk\n4) SUDAN III/IV — Yağları (lipitleri) tespit eder → Kırmızı renk veya yağ damlacıklarının boyanması',
        },
        {
          type: 'tip',
          text: 'Hatırlama: "Benedict şekeri kızdırır (kırmızı), İyot nişastayı karartır (mavi-mor), Biüret proteine mor takar, Sudan yağı kırmızıya boyar." Her ayıracın tespit ettiği molekül ile rengini eşleştirmek sınavda kritik öneme sahiptir.',
        },
      ],
    },
  },

  // ── KATMAN 2: Görsel Açıklama ─────────────────────────────
  {
    id: '9-2.3-reagents-L2',
    subtopicId: '9-2.3-reagents',
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'tyt-organik-molekul-ayiraclari',
      body: 'Bir laboratuvar deney tüpü düzeneği düşünelim: Dört ayrı tüpe sırasıyla glikoz çözeltisi, nişasta çözeltisi, yumurta akı (albümin) çözeltisi ve zeytinyağı konulup üzerlerine sırasıyla Benedict, İyot, Biüret ve Sudan ayıracı damlatılırsa aşağıdaki renk değişimleri gözlenir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Tüp 1 — Glikoz + Benedict ayıracı + ısıtma → Mavi renkten TUĞLA KIRMIZISI/turuncu renge ve çökeltiye dönüşür (pozitif sonuç).\nTüp 2 — Nişasta + İyot (Lugol) ayıracı → Sarı-kahverengi renkten MAVİ-MOR/siyaha dönüşür (pozitif sonuç).\nTüp 3 — Protein (yumurta akı) + Biüret ayıracı (CuSO₄ + NaOH) → Mavi renkten MOR/EFLATUN renge dönüşür (pozitif sonuç).\nTüp 4 — Yağ (zeytinyağı) + Sudan III/IV ayıracı → Yağ damlacıkları KIRMIZI/turuncu renge boyanır, su fazından ayrı bir tabaka oluşur (pozitif sonuç).',
        },
        {
          type: 'tip',
          text: 'Negatif sonuç (renk değişimi olmaması), o besinde ilgili organik molekülün bulunmadığını veya çok az miktarda bulunduğunu gösterir. Örneğin, saf yağa İyot ayıracı damlatılırsa renk değişmez çünkü yağda nişasta yoktur.',
        },
      ],
    },
  },

  // ── KATMAN 3: Süreç Akışı ─────────────────────────────────
  {
    id: '9-2.3-reagents-L3',
    subtopicId: '9-2.3-reagents',
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Her bir ayıracın kullanım süreci ve gözlemlenen tepkime:',
      steps: [
        '1. BENEDICT TESTİ — Test edilecek besin çözeltisi üzerine mavi renkli Benedict ayıracı eklenir ve karışım kaynar su banyosunda ısıtılır. İndirgen şeker (glikoz, früktoz, maltoz gibi) varsa renk maviden yeşil → sarı → turuncu → tuğla kırmızısına döner ve çökelti oluşur. Sakaroz gibi indirgen olmayan şekerler bu testte renk değiştirmez.',
        '2. İYOT (LUGOL) TESTİ — Test edilecek besin üzerine kahverengi-turuncu renkli iyot çözeltisi (Lugol) doğrudan damlatılır, ISITMA GEREKMEZ. Nişasta varsa anında koyu mavi-mor (hatta siyaha yakın) renk oluşur. Bu, iyodun nişastanın sarmal (heliks) yapısının içine girerek kompleks oluşturmasından kaynaklanır.',
        '3. BİÜRET TESTİ — Test edilecek besin çözeltisine önce NaOH (baz) eklenir, ardından az miktarda seyreltik CuSO₄ (bakır sülfat) damlatılır, ISITMA GEREKMEZ. Protein varsa (peptit bağları Cu²⁺ iyonlarıyla kompleks oluşturur) mavi renk MOR/EFLATUN renge dönüşür. Renk yoğunluğu, peptit bağı sayısıyla (protein miktarıyla) doğru orantılıdır.',
        '4. SUDAN III/IV TESTİ — Test edilecek besin örneği üzerine kırmızı renkli Sudan boyası eklenir, ISITMA GEREKMEZ. Yağ/lipit varsa, yağ suda çözünmediği için ayrı bir tabaka oluşturur ve Sudan boyası bu yağ tabakasını/damlacıklarını KIRMIZI-TURUNCU renge boyar. Su fazı renksiz kalır.',
        '5. SONUÇLARIN YORUMLANMASI — Bir besin örneğine birden fazla ayıraç uygulanarak içeriğindeki organik moleküller (karbonhidrat, protein, yağ) belirlenebilir. Örneğin sütte hem Benedict (laktoz) hem Biüret (kazein proteini) hem Sudan (yağ) testi pozitif sonuç verebilir.',
      ],
    },
  },

  // ── KATMAN 4: Anahtar Terimler ────────────────────────────
  {
    id: '9-2.3-reagents-L4',
    subtopicId: '9-2.3-reagents',
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu konunun temel kavramları:',
      highlightBoxes: [
        { type: 'tip', text: 'Ayıraç (Belirteç): Bir maddenin varlığını renk değişimiyle gösteren kimyasal çözelti.' },
        { type: 'tip', text: 'Benedict Ayıracı: İndirgen şekerleri (glikoz, früktoz, maltoz, laktoz) tespit eder; ısıtma gerektirir; pozitif sonuç tuğla kırmızısı çökeltidir.' },
        { type: 'tip', text: 'İndirgen Şeker: Yapısında serbest aldehit veya keton grubu bulunduran ve Benedict ayıracını indirgeyebilen şeker (glikoz, früktoz, maltoz, laktoz). Sakaroz indirgen şeker DEĞİLDİR.' },
        { type: 'tip', text: 'İyot (Lugol) Ayıracı: Nişastayı tespit eder; ısıtma gerektirmez; pozitif sonuç mavi-mor/siyah renktir.' },
        { type: 'tip', text: 'Biüret Ayıracı: Proteinleri (peptit bağlarını) tespit eder; ısıtma gerektirmez; pozitif sonuç mor/eflatun renktir.' },
        { type: 'tip', text: 'Peptit Bağı: Aminoasitleri birbirine bağlayan kimyasal bağ; Biüret testinin tespit ettiği yapı budur.' },
        { type: 'tip', text: 'Sudan III/IV Ayıracı: Yağları (lipitleri) tespit eder; ısıtma gerektirmez; pozitif sonuç kırmızı/turuncu boyanmadır.' },
        { type: 'tip', text: 'Pozitif/Negatif Sonuç: Ayıraç ile tepkimeye girip beklenen renk değişimini gösterme (pozitif) veya göstermeme (negatif) durumu.' },
      ],
    },
  },

  // ── KATMAN 5: Yaygın Yanılgılar ──────────────────────────
  {
    id: '9-2.3-reagents-L5',
    subtopicId: '9-2.3-reagents',
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Öğrencilerin bu konuda en çok yanıldığı noktalar:',
      highlightBoxes: [
        {
          type: 'warning',
          text: '❌ "Tüm ayıraç testleri ısıtma gerektirir."\n✅ Yalnızca BENEDICT testi ısıtma (kaynar su banyosu) gerektirir. İyot, Biüret ve Sudan testleri oda sıcaklığında, ısıtmadan uygulanır.',
        },
        {
          type: 'warning',
          text: '❌ "Benedict testi tüm şekerleri (sakaroz dahil) tespit eder."\n✅ Benedict ayıracı yalnızca İNDİRGEN şekerleri (glikoz, früktoz, maltoz, laktoz) tespit eder. Sakaroz (sofra şekeri) indirgen olmayan bir disakkarittir ve Benedict testinde renk değişimi vermez.',
        },
        {
          type: 'warning',
          text: '❌ "Pozitif test sonucunda renk hemen ve her testte aynı şiddette oluşur."\n✅ Benedict testinde renk değişimi şeker miktarına göre kademeli olur (mavi → yeşil → sarı → turuncu → kırmızı). Biüret testinde mor rengin yoğunluğu protein/peptit bağı miktarıyla doğru orantılıdır.',
        },
        {
          type: 'warning',
          text: '❌ "İyot testi nişastayı parçalayarak tespit eder."\n✅ İyot, nişastayı PARÇALAMAZ; nişastanın sarmal yapısının içine girerek bir İYOT-NİŞASTA KOMPLEKSİ oluşturur ve bu kompleks mavi-mor renk verir. Kimyasal bir parçalanma değil, fiziksel bir kompleks oluşumudur.',
        },
        {
          type: 'warning',
          text: '❌ "Sudan testinde yağ, ayıraç ile tepkimeye girip renk değiştirir."\n✅ Sudan boyası yağda ÇÖZÜNÜR (suda çözünmez), bu nedenle yağ damlacıkları/ tabakası boyanmış görünür. Bu bir kimyasal tepkimeden çok, fiziksel bir çözünme/boyanma olayıdır.',
        },
      ],
    },
  },

  // ── KATMAN 6: Sınavda Nasıl Sorulur? ─────────────────────
  {
    id: '9-2.3-reagents-L6',
    subtopicId: '9-2.3-reagents',
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT biyoloji sınavında bu konu şu kalıplarda karşına çıkar:',
      tytPattern: '1) "X besinine Benedict/İyot/Biüret/Sudan ayıracı uygulandığında renk değişimi gözlenmiştir. Bu besin hangi organik molekülü içerir?" tarzı doğrudan eşleştirme soruları.\n2) Bir tabloda farklı besinlere uygulanan ayıraçların sonuçları (+/-) verilip "Hangi besin sadece protein içerir?" gibi tablo yorumlama soruları.\n3) "Hangi ayıraç testinde ısıtma gereklidir?" → Sadece Benedict.\n4) Sakaroz ile glikozun Benedict testindeki farklı sonuçlarını sorgulayan kavram soruları.',
      aytPattern: '1) Sindirim sistemiyle ilişkilendirilmiş deney soruları: "Ağızda sindirilen nişastanın bir kısmı maltoza dönüştüğünde Benedict testi pozitif sonuç verir mi?" gibi.\n2) Enzim aktivitesi deneylerinde, substratın (nişasta/protein) ürüne dönüşümünün ayıraç testleriyle nasıl izlenebileceğine dair deney tasarımı soruları.\n3) Kontrol grubu - deney grubu mantığıyla birleştirilmiş, birden fazla ayıracın aynı deneyde kullanıldığı karmaşık deney yorumlama soruları.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'En sık çıkan tuzak: Bir besine HEM Benedict HEM İyot testi uygulanıp ikisi de pozitif çıkarsa, bu besinde HEM indirgen şeker HEM nişasta vardır demektir — ama nişastanın kendisi Benedict testinde pozitif sonuç VERMEZ (nişasta indirgen şeker değildir). Yani pozitif Benedict sonucu, nişastadan değil serbest indirgen şekerlerden kaynaklanır.',
        },
      ],
    },
  },

  // ── KATMAN 7: Uygulama Kutusu ─────────────────────────────
  {
    id: '9-2.3-reagents-L7',
    subtopicId: '9-2.3-reagents',
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Ayıraç testlerini günlük hayat ve laboratuvar uygulamalarıyla pekiştirelim:',
      highlightBoxes: [
        {
          type: 'example',
          text: '🩺 Diyabet (şeker hastalığı) tanısı: Geçmişte idrarda glikoz varlığını tespit etmek için Benedict benzeri reaksiyonlar kullanılırdı; günümüzde glikoz şeritleri benzer kimyasal prensiplere dayanır. İdrarda glikoz bulunması, kan şekeri düzeyinin böbrek eşiğini aştığını gösterir.',
        },
        {
          type: 'example',
          text: '🍞 Ekmek üzerine iyot damlatma deneyi: Bir ekmek diliminin üzerine iyot (Lugol) damlatıldığında oluşan koyu mavi-mor renk, ekmeğin nişasta (karbonhidrat) içerdiğini gösterir — okul laboratuvarlarında en sık yapılan basit deneydir.',
        },
        {
          type: 'example',
          text: '🥚 Yumurta akı ile Biüret testi: Çiğ yumurta akına Biüret ayıracı uygulandığında oluşan mor renk, yumurta akının (albüminin) yüksek protein içeriğini doğrular.',
        },
        {
          type: 'example',
          text: '🧈 Yağ lekesi testi: Bir kağıda sürülen tereyağı veya zeytinyağı, kağıtta kalıcı, ışığı geçiren saydam bir leke bırakır — bu basit "yağ lekesi testi" de Sudan testine benzer şekilde besinde yağ varlığını gösteren pratik bir yöntemdir.',
        },
      ],
    },
  },

  // ── KATMAN 8 ve 9 (Mini Quiz ve Değerlendirme) ────────────
  {
    id: '9-2.3-reagents-L8',
    subtopicId: '9-2.3-reagents',
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: { body: 'MINI_QUIZ_PLACEHOLDER', highlightBoxes: [] },
  },
  {
    id: '9-2.3-reagents-L9',
    subtopicId: '9-2.3-reagents',
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: { body: 'ASSESSMENT_PLACEHOLDER', highlightBoxes: [] },
  },
];

// ─────────────────────────────────────────────────────────────
// FLASHCARDS — Benedict, İyot, Biüret ve Sudan Ayıraçları
// ─────────────────────────────────────────────────────────────

export const flashcards_9_2_3_reagents: Flashcard[] = [
  { id: 'fc-9-2.3-reagents-01', subtopicId: '9-2.3-reagents', orderIndex: 1,
    term: 'Benedict Ayıracı', definition: 'İndirgen şekerleri tespit eden, ısıtma gerektiren ayıraç', example: 'Glikoz çözeltisi ısıtılınca tuğla kırmızısı çökelti oluşur' },
  { id: 'fc-9-2.3-reagents-02', subtopicId: '9-2.3-reagents', orderIndex: 2,
    term: 'İyot (Lugol) Ayıracı', definition: 'Nişastayı tespit eden, ısıtma gerektirmeyen ayıraç', example: 'Patatese damlatıldığında renk maviye-mora döner' },
  { id: 'fc-9-2.3-reagents-03', subtopicId: '9-2.3-reagents', orderIndex: 3,
    term: 'Biüret Ayıracı', definition: 'Proteinleri (peptit bağlarını) tespit eden, ısıtma gerektirmeyen ayıraç', example: 'Yumurta akına uygulandığında mavi renk mora döner' },
  { id: 'fc-9-2.3-reagents-04', subtopicId: '9-2.3-reagents', orderIndex: 4,
    term: 'Sudan III/IV Ayıracı', definition: 'Yağları (lipitleri) tespit eden, ısıtma gerektirmeyen ayıraç', example: 'Zeytinyağı kırmızı-turuncu renge boyanır' },
  { id: 'fc-9-2.3-reagents-05', subtopicId: '9-2.3-reagents', orderIndex: 5,
    term: 'İndirgen Şeker', definition: 'Benedict ayıracını indirgeyebilen, serbest aldehit/keton grubu içeren şeker', example: 'Glikoz, früktoz, maltoz, laktoz; sakaroz değildir' },
  { id: 'fc-9-2.3-reagents-06', subtopicId: '9-2.3-reagents', orderIndex: 6,
    term: 'Peptit Bağı', definition: 'Aminoasitleri birbirine bağlayan, Biüret testiyle tespit edilen kimyasal bağ', example: 'Proteinlerin yapısında çok sayıda bulunur' },
  { id: 'fc-9-2.3-reagents-07', subtopicId: '9-2.3-reagents', orderIndex: 7,
    term: 'İyot-Nişasta Kompleksi', definition: 'İyot moleküllerinin nişastanın sarmal yapısı içine girmesiyle oluşan ve mavi-mor renk veren yapı', example: 'Ekmek üzerine iyot damlatıldığında oluşan koyu renk' },
  { id: 'fc-9-2.3-reagents-08', subtopicId: '9-2.3-reagents', orderIndex: 8,
    term: 'Tuğla Kırmızısı Çökelti', definition: 'Benedict testinde indirgen şeker varlığında ısıtma sonrası oluşan pozitif sonuç rengi', example: 'Glikozlu çözeltinin Benedict ile ısıtılması sonucu oluşur' },
  { id: 'fc-9-2.3-reagents-09', subtopicId: '9-2.3-reagents', orderIndex: 9,
    term: 'Negatif Sonuç', definition: 'Ayıracın test edilen besinle renk değişimi göstermemesi; ilgili molekülün bulunmadığını gösterir', example: 'Saf yağa İyot damlatıldığında renk değişmemesi' },
  { id: 'fc-9-2.3-reagents-10', subtopicId: '9-2.3-reagents', orderIndex: 10,
    term: 'CuSO₄ (Bakır Sülfat)', definition: 'Biüret testinde NaOH ile birlikte kullanılan, peptit bağlarıyla kompleks oluşturan kimyasal', example: 'Mavi CuSO₄, protein varlığında mor renge dönüşür' },
];
