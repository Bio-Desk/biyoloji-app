import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.3-ethics';

export const layers_9bio_1_3_k3: LessonLayer[] = [
  {
    id: '9bio-1.3-k3-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilimsel araştırmalarda etik ihlal, araştırmanın dürüstlüğünü, güvenilirliğini veya hak sahiplerine saygıyı bozan davranıştır. Bu kazanımda dört temel etik ihlal örneklerle açıklanır: intihal, veri uydurma, veri çarpıtma ve izinsiz kullanım.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Etik ihlal, yalnızca "yanlış davranış" değil; bilimsel bilginin güvenilirliğini zedeleyen ciddi bir sorundur.',
        },
        {
          type: 'tip',
          text: 'Kısa ayrım: İntihal kaynak göstermemek, veri uydurma olmayan veriyi varmış gibi göstermek, veri çarpıtma var olan veriyi değiştirmek veya seçici sunmak, izinsiz kullanım ise başkasına ait veri/görsel/materyali izin almadan kullanmaktır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k3-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.3-k3-infographic',
      body: 'Bu kazanım için dört bölmeli bir karşılaştırma görseli kullanılabilir. Her bölümde etik ihlalin adı, kısa tanımı ve bir örneği yer alır: İntihal, Veri Uydurma, Veri Çarpıtma, İzinsiz Kullanım.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Görselde "Davranış -> İhlal Türü" eşleştirmesi verilebilir: Kaynak göstermeden paragraf kullanma -> İntihal; yapılmamış deney sonucu yazma -> Veri uydurma; bazı sonuçları saklama -> Veri çarpıtma; izin alınmamış görsel kullanma -> İzinsiz kullanım.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k3-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bir davranışın hangi etik ihlal olduğunu belirlemek için şu sırayı izleyebilirsin:',
      steps: [
        '1. Kullanılan bilgi, metin, fikir veya görsel başkasına mı ait? Kaynak belirtilmemişse intihal olabilir.',
        '2. Araştırmada hiç elde edilmemiş bir veri ya da yapılmamış bir deney sonucu varmış gibi mi sunulmuş? Bu veri uydurmadır.',
        '3. Gerçekten elde edilen veriler değiştirilmiş, eksiltilmiş veya yalnızca istenen sonucu destekleyen kısmı mı gösterilmiş? Bu veri çarpıtmadır.',
        '4. Başkasına ait veri, görsel, örnek, materyal veya çalışma izin alınmadan mı kullanılmış? Bu izinsiz kullanımdır.',
        '5. Bir olayda birden fazla ihlal bulunabilir; ancak soruda en belirgin davranışı dikkatle seçmek gerekir.',
      ],
    },
  },
  {
    id: '9bio-1.3-k3-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bu kazanımda etik ihlalleri doğru adlandırmak için şu terimler kullanılır:',
      highlightBoxes: [
        { type: 'tip', text: 'İntihal: Başkasına ait fikir, metin, veri veya görseli kaynak göstermeden kendi çalışması gibi sunmaktır.' },
        { type: 'tip', text: 'Veri uydurma: Yapılmamış bir deneyin veya elde edilmemiş bir ölçümün sonucunu varmış gibi yazmaktır.' },
        { type: 'tip', text: 'Veri çarpıtma: Gerçek verileri değiştirmek, bazı verileri gizlemek veya verileri istenen sonucu destekleyecek biçimde seçici sunmaktır.' },
        { type: 'tip', text: 'İzinsiz kullanım: Başkasına ait veri, görsel, yöntem, örnek veya araştırma materyalini izin almadan kullanmaktır.' },
        { type: 'tip', text: 'Etik ihlal: Bilimsel araştırmanın dürüstlüğünü, güvenilirliğini veya haklara saygıyı bozan davranıştır.' },
      ],
    },
  },
  {
    id: '9bio-1.3-k3-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Etik ihlallerle ilgili sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: İntihal yalnızca metni aynen kopyalamaktır. Doğrusu: Başkasına ait fikri kendi cümlelerinle yazsan bile kaynak göstermiyorsan intihal olabilir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Veri uydurma ile veri çarpıtma aynıdır. Doğrusu: Veri uydurmada veri hiç yoktur; veri çarpıtmada gerçek veri vardır ama değiştirilir, saklanır veya seçici sunulur.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Küçük bir veri değişikliği önemli değildir. Doğrusu: Küçük değişiklikler bile araştırmanın sonucunu ve güvenilirliğini bozabilir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: İnternette bulunan her görsel veya veri izin almadan kullanılabilir. Doğrusu: Başkasına ait materyalin kullanımında kaynak, izin ve kullanım koşulları dikkate alınmalıdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Kaynakçada bir kaynak yazmak her durumda yeterlidir. Doğrusu: Metin, fikir, veri veya görselin nereden alındığı açık ve doğru biçimde belirtilmelidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k3-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanım çoğunlukla kısa bir senaryo verir ve davranışın hangi etik ihlal olduğunu sorar.',
      tytPattern: 'Kaynak göstermeden kullanma -> intihal; yapılmamış ölçümü yazma -> veri uydurma; gerçek veriyi değiştirme veya saklama -> veri çarpıtma; başkasına ait materyali izin almadan kullanma -> izinsiz kullanım.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Sınavda en sık karıştırılan ikili veri uydurma ve veri çarpıtmadır. "Hiç elde edilmemiş veri" uydurmadır; "elde edilmiş veriyi değiştirme veya seçici sunma" çarpıtmadır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k3-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Etik ihlaller okul projelerinde, bilimsel yayınlarda, laboratuvar raporlarında, yapay zeka destekli yazımda ve dijital kaynak kullanımında görülebilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'İntihal örneği: Bir öğrenci bilimsel bir makaledeki paragrafı kaynak göstermeden proje raporuna ekler.',
        },
        {
          type: 'example',
          text: 'Veri uydurma örneği: Bir öğrenci yapmadığı sıcaklık ölçümlerini deney tablosuna yazmış gibi gösterir.',
        },
        {
          type: 'example',
          text: 'Veri çarpıtma örneği: Bir araştırmacı sonucu desteklemeyen ölçümleri rapordan çıkarır.',
        },
        {
          type: 'example',
          text: 'İzinsiz kullanım örneği: Bir araştırma grubuna ait mikroskop görüntüsü izin alınmadan sunumda kullanılır.',
        },
        {
          type: 'example',
          text: 'Dijital intihal örneği: Yapay zeka aracıyla oluşturulan ya da internetten alınan bilimsel açıklamaları kontrol etmeden ve kaynak belirtmeden kendi araştırma metni gibi sunmak etik değildir.',
        },
        {
          type: 'example',
          text: 'Bilimsel yayın örneği: Bir çalışmada başkasına ait veri seti kaynak ve izin belirtilmeden kullanılırsa hem izinsiz kullanım hem de kaynak göstermeme sorunu oluşabilir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k3-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Başkasının fikrini kaynak göstermeden kullanmak hangi etik ihlaldir? 2) Yapılmamış bir deneyin sonucunu yazmak hangi ihlaldir? 3) Gerçek verilerden bazılarını saklamak hangi ihlaldir? 4) Başkasına ait mikroskop görselini izin almadan kullanmak hangi ihlaldir? 5) Veri uydurma ile veri çarpıtma arasındaki temel fark nedir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında intihal, veri uydurma, veri çarpıtma ve izinsiz kullanım terimlerini doğru eşleştir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.3-k3-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: İntihal, veri uydurma, veri çarpıtma ve izinsiz kullanım kavramlarını tanımlayabiliyor; verilen kısa bir araştırma davranışını doğru etik ihlal türüyle eşleştirebiliyor ve örnekle açıklayabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda başarı ölçütü, etik ihlalleri yalnızca ezberlemek değil, örnek senaryolarda doğru ayırt etmektir.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_3_k3: Flashcard[] = [
  {
    id: 'fc-9bio-1.3-k3-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Etik İhlal',
    definition: 'Bilimsel araştırmanın dürüstlüğünü, güvenilirliğini veya haklara saygıyı bozan davranıştır.',
    example: 'Deney sonucunu daha başarılı göstermek için verileri değiştirmek.',
  },
  {
    id: 'fc-9bio-1.3-k3-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'İntihal',
    definition: 'Başkasına ait fikir, metin, veri veya görseli kaynak göstermeden kendi çalışması gibi sunmaktır.',
    example: 'Bir makaledeki bilgiyi kaynak belirtmeden proje raporuna yazmak.',
  },
  {
    id: 'fc-9bio-1.3-k3-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Veri Uydurma',
    definition: 'Elde edilmemiş verileri veya yapılmamış deney sonuçlarını varmış gibi göstermektir.',
    example: 'Ölçülmeyen bitki boylarını deney tablosuna yazmak.',
  },
  {
    id: 'fc-9bio-1.3-k3-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Veri Çarpıtma',
    definition: 'Gerçek verileri değiştirmek, saklamak veya yalnızca istenen sonucu destekleyen kısmını sunmaktır.',
    example: 'Deney sonucunu desteklemeyen ölçümleri rapora eklememek.',
  },
  {
    id: 'fc-9bio-1.3-k3-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'İzinsiz Kullanım',
    definition: 'Başkasına ait veri, görsel, yöntem, örnek veya araştırma materyalini izin almadan kullanmaktır.',
    example: 'Bir araştırma grubunun mikroskop fotoğrafını izin almadan sunumda kullanmak.',
  },
  {
    id: 'fc-9bio-1.3-k3-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Veri Uydurma - Veri Çarpıtma Farkı',
    definition: 'Veri uydurmada veri hiç elde edilmemiştir; veri çarpıtmada gerçek veri vardır ama değiştirilir, saklanır veya seçici sunulur.',
    example: 'Yapılmayan ölçümü yazmak uydurma; yapılan ölçümden istenmeyeni silmek çarpıtmadır.',
  },
];
