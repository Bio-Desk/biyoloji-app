import type { Flashcard, LessonLayer } from '../../../types';

const SUBTOPIC_ID = '9-1.1-intro';

export const layers_9bio_1_1_k3: LessonLayer[] = [
  {
    id: '9bio-1.1-k3-L1',
    subtopicId: SUBTOPIC_ID,
    layerType: 'concept',
    orderIndex: 1,
    contentJson: {
      body: 'Biyolojideki bilimsel gelişmeler insan yaşamını, toplumu ve çevreyi doğrudan etkiler. Mikroskobun geliştirilmesi, aşıların bulunması, antibiyotiklerin keşfi, DNA yapısının açıklanması ve biyoteknolojik yöntemler; hastalıklarla mücadeleden çevre sorunlarının anlaşılmasına kadar pek çok alanda katkı sağlamıştır.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Bu kazanımda amaç, bilimsel gelişmeleri sadece ezberlemek değil; bu gelişmelerin insan, toplum ve çevre üzerindeki etkilerini değerlendirmektir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k3-L2',
    subtopicId: SUBTOPIC_ID,
    layerType: 'visual',
    orderIndex: 2,
    contentJson: {
      svgData: 'placeholder-9bio-1.1-k3-infographic',
      body: 'Bu kazanım için bir zaman çizelgesi düşünülebilir: mikroskop, aşı, antibiyotik, DNA yapısının keşfi ve biyoteknoloji gibi gelişmeler sırayla yerleştirilir. Her gelişmenin altına insan yaşamına, topluma veya çevreye katkısı kısa bir örnekle yazılır.',
      highlightBoxes: [
        {
          type: 'example',
          text: 'Zaman çizelgesi örneği: Mikroskop → hücre ve mikroorganizmaların görülmesi; Aşı → hastalıkların önlenmesi; Antibiyotik → bakteriyel enfeksiyonların tedavisi; DNA → kalıtsal bilginin anlaşılması.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k3-L3',
    subtopicId: SUBTOPIC_ID,
    layerType: 'process',
    orderIndex: 3,
    contentJson: {
      body: 'Bir biyolojik gelişmenin katkısını değerlendirirken düzenli bir düşünme yolu kullanılabilir.',
      steps: [
        '1. Gelişmeyi belirle: Örneğin aşı, antibiyotik, mikroskop veya DNA yapısının keşfi.',
        '2. Hangi sorunu çözdüğünü düşün: Hastalık, tanı, üretim, çevre kirliliği veya kalıtsal bilgi gibi.',
        '3. İnsan yaşamına etkisini değerlendir: Sağlık, yaşam süresi, beslenme veya günlük yaşam kolaylığı.',
        '4. Topluma etkisini değerlendir: Salgınların azalması, üretimin artması, bilimsel farkındalık veya ekonomik katkı.',
        '5. Çevreye etkisini değerlendir: Ekosistemlerin izlenmesi, canlı çeşitliliğinin korunması veya kirlilikle mücadele.',
      ],
    },
  },
  {
    id: '9bio-1.1-k3-L4',
    subtopicId: SUBTOPIC_ID,
    layerType: 'terms',
    orderIndex: 4,
    contentJson: {
      body: 'Bilimsel gelişmelerin katkılarını değerlendirirken bazı temel kavramları bilmek gerekir.',
      highlightBoxes: [
        { type: 'tip', text: 'Mikroskop: Hücrelerin ve mikroorganizmaların incelenmesini sağlayan araç.' },
        { type: 'tip', text: 'Aşı: Bağışıklık sistemini hastalık etkenine karşı hazırlayan biyolojik ürün.' },
        { type: 'tip', text: 'Antibiyotik: Bakteriyel enfeksiyonların tedavisinde kullanılan madde.' },
        { type: 'tip', text: 'DNA: Canlıların kalıtsal bilgisini taşıyan molekül.' },
        { type: 'tip', text: 'Biyoteknoloji: Canlılardan veya canlı ürünlerinden yararlanarak yararlı ürün ve yöntemler geliştirme alanı.' },
      ],
    },
  },
  {
    id: '9bio-1.1-k3-L5',
    subtopicId: SUBTOPIC_ID,
    layerType: 'misconceptions',
    orderIndex: 5,
    contentJson: {
      body: 'Bilimsel gelişmelerin etkileri değerlendirilirken bazı yanlış düşünceler ortaya çıkabilir.',
      highlightBoxes: [
        {
          type: 'warning',
          text: 'Yanılgı: Bir bilimsel gelişmenin sadece olumlu etkileri vardır. Doğrusu: Bilimsel gelişmeler büyük yararlar sağlar, ancak etik, çevresel ve toplumsal etkileri de dikkatle değerlendirilmelidir.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: DNA keşfi sadece genetik dersinde önemlidir. Doğrusu: DNA bilgisinin sağlık, adli bilimler, biyoteknoloji ve tarım gibi birçok alanda etkisi vardır.',
        },
        {
          type: 'warning',
          text: 'Yanılgı: Antibiyotikler her hastalığı tedavi eder. Doğrusu: Antibiyotikler bakterilere karşı etkilidir; virüs kaynaklı hastalıklarda doğrudan etkili değildir.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k3-L6',
    subtopicId: SUBTOPIC_ID,
    layerType: 'exam_tips',
    orderIndex: 6,
    contentJson: {
      body: 'TYT düzeyinde bu kazanımda genellikle gelişme-sonuç ilişkisi sorulur. Bir bilimsel gelişme verilir ve bunun insan yaşamına, topluma veya çevreye katkısı istenir.',
      tytPattern: 'Soru kökünde "hangisi bu gelişmenin katkılarındandır?" veya "hangi örnek verilen gelişmeyle ilişkilidir?" gibi ifadeler olabilir. Anahtar yaklaşım: gelişmeyi tanı, sonra etkisini insan-toplum-çevre başlıklarından biriyle eşleştir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Mikroskop hücre ve mikroorganizmaların anlaşılmasına, aşı hastalıkların önlenmesine, antibiyotik bakteriyel enfeksiyonların tedavisine, DNA keşfi kalıtımın açıklanmasına katkı sağlar.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k3-L7',
    subtopicId: SUBTOPIC_ID,
    layerType: 'real_life',
    orderIndex: 7,
    contentJson: {
      body: 'Biyolojideki bilimsel gelişmeler günlük yaşamda ve toplum sağlığında somut sonuçlar doğurur.',
      highlightBoxes: [
        { type: 'example', text: 'Aşılar sayesinde bazı bulaşıcı hastalıkların yayılması azaltılabilir.' },
        { type: 'example', text: 'Antibiyotiklerin keşfi bakteriyel enfeksiyonların tedavisinde önemli bir dönüm noktasıdır.' },
        { type: 'example', text: 'Mikroskop, hastalık etkenlerinin ve hücrelerin incelenmesini mümkün kılmıştır.' },
        { type: 'example', text: 'DNA bilgisinin anlaşılması kalıtsal hastalıkların araştırılmasına ve adli analizlere katkı sağlamıştır.' },
        { type: 'example', text: 'Çevre biyolojisindeki gelişmeler kirliliğin canlılar üzerindeki etkisini izlemeye yardım eder.' },
      ],
    },
  },
  {
    id: '9bio-1.1-k3-L8',
    subtopicId: SUBTOPIC_ID,
    layerType: 'mini_quiz',
    orderIndex: 8,
    contentJson: {
      body: 'Mini kontrol: 1) Mikroskobun geliştirilmesi biyolojiye hangi katkıyı sağlamıştır? 2) Aşıların toplum sağlığına etkisi nedir? 3) DNA bilgisinin insan yaşamına katkısına bir örnek ver.',
      highlightBoxes: [
        {
          type: 'tip',
          text: 'Cevap verirken sadece gelişmenin adını değil, hangi sorunu çözmeye yardım ettiğini de yaz.',
        },
      ],
    },
  },
  {
    id: '9bio-1.1-k3-L9',
    subtopicId: SUBTOPIC_ID,
    layerType: 'assessment',
    orderIndex: 9,
    contentJson: {
      body: 'Kazanım değerlendirmesi: Bir biyolojik gelişmeyi seçip bu gelişmenin insan yaşamına, topluma ve çevreye katkısını açıklayabiliyorsan bu kazanımın temel hedefini karşılıyorsun. Örneğin aşıların insan sağlığına, toplumda salgınların azalmasına ve kaynakların daha etkili kullanılmasına katkısı değerlendirilebilir.',
      highlightBoxes: [
        {
          type: 'important',
          text: 'Değerlendirme yaparken üç soru sor: Kime yarar sağladı? Hangi sorunu azalttı? Toplum veya çevre üzerinde nasıl bir etki oluşturdu?',
        },
      ],
    },
  },
];

export const flashcards_9bio_1_1_k3: Flashcard[] = [
  {
    id: 'fc-9bio-1.1-k3-001',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 1,
    term: 'Mikroskobun Katkısı',
    definition: 'Hücrelerin ve mikroorganizmaların görülmesini sağlayarak canlılığın daha iyi anlaşılmasına katkı sağlamıştır.',
    example: 'Hastalık yapan bazı mikroorganizmaların incelenmesi.',
  },
  {
    id: 'fc-9bio-1.1-k3-002',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 2,
    term: 'Aşının Katkısı',
    definition: 'Bağışıklık sistemini hazırlayarak bazı bulaşıcı hastalıkların önlenmesine yardım eder.',
    example: 'Toplumda hastalık yayılımının azalması.',
  },
  {
    id: 'fc-9bio-1.1-k3-003',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 3,
    term: 'Antibiyotiklerin Katkısı',
    definition: 'Bakteriyel enfeksiyonların tedavisinde kullanılan önemli biyolojik gelişmelerden biridir.',
    example: 'Bakteri kaynaklı bazı hastalıkların tedavi edilebilmesi.',
  },
  {
    id: 'fc-9bio-1.1-k3-004',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 4,
    term: 'DNA Bilgisinin Katkısı',
    definition: 'Kalıtsal bilginin anlaşılmasını sağlayarak genetik hastalıklar, adli bilimler ve biyoteknolojiye katkı verir.',
    example: 'DNA analizi ile akrabalık veya adli inceleme yapılması.',
  },
  {
    id: 'fc-9bio-1.1-k3-005',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 5,
    term: 'Toplumsal Katkı',
    definition: 'Bilimsel gelişmelerin toplum sağlığı, üretim, eğitim ve yaşam kalitesi üzerinde oluşturduğu etkidir.',
    example: 'Aşıların yaygınlaşmasıyla salgınların azalması.',
  },
  {
    id: 'fc-9bio-1.1-k3-006',
    subtopicId: SUBTOPIC_ID,
    orderIndex: 6,
    term: 'Çevresel Katkı',
    definition: 'Biyolojik bilginin ekosistemleri izleme, kirlilik etkilerini anlama ve canlı çeşitliliğini koruma amacıyla kullanılmasıdır.',
    example: 'Bir gölde kirlilik arttığında canlı türlerinin nasıl etkilendiğinin incelenmesi.',
  },
];
