import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.2-scientific-method';

export const layers_9bio_1_2_k8: LessonLayer[] = [
  {
    id: '9bio-1.2-k8-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Bilimsel araştırmalarda veri; gözlem, ölçüm veya deney sonucunda elde edilen bilgidir. Veriler tablo, grafik veya gözlem notu hâlinde düzenlenebilir. Bilimsel sonuca ulaşmak için veriler dikkatli okunur, karşılaştırılır, düzenli bir ilişki olup olmadığı incelenir ve bulgulara dayalı açıklama yapılır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimsel sonuç, kişisel tahmine değil verilerin gösterdiği kanıtlara dayanmalıdır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k8-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.2-k8-infographic',
      body: 'Bu kazanım için veri yorumlama akış görseli kullanılabilir: Veri toplama -> Tabloya düzenleme -> Grafik veya karşılaştırma -> Eğilim belirleme -> Hipotezle ilişkilendirme -> Sonuç çıkarma. Örnek olarak ışık miktarı arttıkça bitki boyunun değişimini gösteren basit tablo ve grafik kullanılabilir.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Görselde tablo ve grafikteki artış-azalış ilişkisi oklarla gösterilmeli, sonuç cümlesi ayrı bir kutuda verilmelidir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k8-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bir veri, tablo veya grafik yorumlanırken şu akış kullanılabilir:',
      steps: [
        '1. Verinin neyi gösterdiğini belirle: Hangi canlılık olayı veya deney sonucu inceleniyor?',
        '2. Tablodaki başlıkları veya grafikteki eksenleri oku.',
        '3. Değerlerin artıp azaldığını veya sabit kaldığını incele.',
        '4. Gruplar arasında karşılaştırma yap.',
        '5. Verilerde belirgin bir ilişki veya eğilim olup olmadığını belirle.',
        '6. Bulguların hipotezi destekleyip desteklemediğini değerlendir.',
        '7. Sonuç cümlesini yalnızca verilerin desteklediği bilgilerle kur.',
        '8. Verinin göstermediği bir iddiayı sonuç gibi yazmaktan kaçın.',
      ],
    },
  },
  {
    id: '9bio-1.2-k8-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Veri yorumlama ve sonuca ulaşma için şu kavramlar önemlidir:',
      highlightBoxes: [
        { type: 'tip', text: 'Veri: Gözlem, ölçüm veya deney sonucunda elde edilen bilgidir.' },
        { type: 'tip', text: 'Tablo: Verilerin satır ve sütunlarla düzenlenmiş hâlidir.' },
        { type: 'tip', text: 'Grafik: Veriler arasındaki ilişkiyi görsel olarak gösteren düzenlemedir.' },
        { type: 'tip', text: 'Eğilim: Verilerde görülen genel artış, azalış veya sabit kalma durumudur.' },
        { type: 'tip', text: 'Bulgu: Verilerden elde edilen anlamlı gözlem veya sonuç bilgisidir.' },
        { type: 'tip', text: 'Bilimsel sonuç: Bulgulara dayanarak yapılan kanıt temelli değerlendirmedir.' },
      ],
    },
  },
  {
    id: '9bio-1.2-k8-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Veri yorumlama konusunda sık görülen yanılgılar şunlardır:',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Sonuç, araştırmacının beklediği şeye göre yazılır. Doğrusu: Sonuç, verilerin gösterdiği bulgulara göre yazılır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Tek bir ölçüm her zaman kesin sonuç verir. Doğrusu: Güvenilir sonuç için veriler dikkatli karşılaştırılmalı ve yeterli kanıt aranmalıdır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Grafik sadece çizimdir. Doğrusu: Grafik, veriler arasındaki ilişkiyi yorumlamak için kullanılır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Veride olmayan bilgiler sonuç cümlesine eklenebilir. Doğrusu: Sonuç yalnızca verinin desteklediği bilgilerle sınırlı olmalıdır.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k8-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT ve AYT düzeyinde bu kazanım genellikle tablo, grafik veya kısa deney sonucu verip hangi sonuca ulaşılabileceğini sorar.',
      tytPattern: 'Önce başlıkları ve değerleri oku. En yüksek, en düşük, artan, azalan ve değişmeyen değerleri belirle. Sonra yalnızca verinin desteklediği seçeneği işaretle.',
      aytPattern: 'AYT tarzı sorularda çeldiriciler veride olmayan yorumlar içerebilir. Veriden doğrudan çıkarılamayan genellemeleri ele.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Veri sorularında doğru seçenek genellikle verinin söylediğiyle sınırlıdır; fazla genelleme yapan seçeneklere dikkat et.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k8-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Veri yorumlama günlük yaşamda ve biyoloji araştırmalarında sık kullanılır.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Bir bitki deneyinde ışık alan bitkilerin ortalama boyu daha fazla ise ışık miktarının büyümeyi desteklediği sonucu çıkarılabilir.',
        },
        {
          type: 'example',
          text: 'Farklı sıcaklıklarda bekletilen besinlerden sıcak ortamda olan daha hızlı bozuluyorsa sıcaklığın bozulma hızını artırdığı yorumu yapılabilir.',
        },
        {
          type: 'example',
          text: 'Bir sınıfta uyku süresi arttıkça dikkat testi puanı da artıyorsa veriler uyku ile dikkat arasında olumlu ilişki gösterebilir.',
        },
        {
          type: 'example',
          text: 'Bir sağlık araştırmasında düzenli egzersiz yapan grubun nabız toparlanma süresi daha kısa ölçülürse, veri bu grupta kalp-dolaşım uyumunun daha iyi olabileceğini destekler.',
        },
        {
          type: 'example',
          text: 'Ancak veri yalnızca bir sınıfa veya küçük bir gruba aitse, tüm insanlar için kesin sonuç çıkarılamaz.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k8-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Bir tabloda ışık miktarı arttıkça bitki boyu artıyorsa hangi sonuç çıkarılabilir? 2) Grafikte değerler sürekli azalıyorsa bu nasıl bir eğilimdir? 3) Veride gösterilmeyen bir bilgiyi sonuç cümlesine eklemek neden yanlıştır? 4) Bir sonucun bilimsel olması için neye dayanması gerekir?',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevaplarında tablo/grafik başlıklarını, artış-azalış eğilimini ve kanıta dayalı sonuç çıkarma ilkesini kullan.',
        },
      ],
    },
  },
  {
    id: '9bio-1.2-k8-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Verilen bir tablo, grafik veya gözlem sonucunu okuyabiliyor; verilerdeki ilişkiyi belirleyebiliyor; hipotezin desteklenip desteklenmediğini ayırt edebiliyor ve yalnızca veriye dayalı bilimsel sonuç çıkarabiliyorsan bu kazanımı karşılıyorsun.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bilimsel sonuç, verinin gösterdiği bulgunun dikkatli ve sınırlı biçimde yorumlanmasıdır.',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_2_k8: Flashcard[] = [
  {
    id: 'fc-9bio-1.2-k8-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Veri',
    definition: 'Gözlem, ölçüm veya deney sonucunda elde edilen bilgidir.',
    example: 'Üç farklı ışık ortamında bitki boylarının ölçülmesi.',
  },
  {
    id: 'fc-9bio-1.2-k8-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Tablo',
    definition: 'Verilerin satır ve sütunlar hâlinde düzenlenmiş gösterimidir.',
    example: 'Işık miktarı ve bitki boyu değerlerinin aynı tabloda verilmesi.',
  },
  {
    id: 'fc-9bio-1.2-k8-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Grafik',
    definition: 'Veriler arasındaki ilişkiyi görsel olarak gösteren düzenlemedir.',
    example: 'Işık miktarı arttıkça bitki boyunun arttığını gösteren çizgi grafik.',
  },
  {
    id: 'fc-9bio-1.2-k8-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'Eğilim',
    definition: 'Verilerde görülen genel artış, azalış veya sabit kalma durumudur.',
    example: 'Sıcaklık arttıkça besinin daha kısa sürede bozulması.',
  },
  {
    id: 'fc-9bio-1.2-k8-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Bulgu',
    definition: 'Verilerin incelenmesiyle elde edilen anlamlı gözlem veya değerlendirmedir.',
    example: 'Aydınlık ortamda tutulan bitkilerin daha fazla uzaması.',
  },
  {
    id: 'fc-9bio-1.2-k8-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Bilimsel Sonuç',
    definition: 'Veri ve bulgulara dayanarak yapılan kanıt temelli değerlendirmedir.',
    example: 'Bu deneyde ışık miktarı arttıkça bitki büyümesi artmıştır sonucuna ulaşmak.',
  },
];
