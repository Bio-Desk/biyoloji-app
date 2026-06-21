# Erişilebilirlik Özellikleri — Açıklama Dokümanı

Bu doküman, BiyoMap'teki erişilebilirlik panelinde (`src/app/accessibility.tsx`) yer
alan her özelliğin **kimler için olduğunu**, **ne işe yaradığını** ve **uygulama
içinde teknik olarak nasıl çalıştığını** anlatır. Sunum, tanıtım metni veya
kullanıcıya/öğretmene açıklama yapmak için doğrudan kullanılabilir.

---

## 1. Disleksi Dostu Görünüm

**Kimin için:** Disleksi (okuma güçlüğü) yaşayan öğrenciler — harfleri/satırları
karıştırma, satır takibini kaybetme, kalabalık metinde yorulma yaşayan kullanıcılar.

**Ne yapar:**
- Satır aralığını belirgin şekilde artırır (normal 1.5 → disleksi modunda 1.7,
  geniş paragraflarda 1.95'e kadar) — gözün bir satırdan diğerine geçişini
  kolaylaştırır, satır kaybını azaltır.
- Harfler arası boşluğu artırır (letter-spacing +0.6) — birbirine benzeyen
  harflerin (b/d, p/q gibi) ayırt edilmesini kolaylaştırır.
- Metin bloklarını daha "nefes alır" hale getirir, böylece sayfa görsel olarak
  daha az yoğun görünür.

**Nasıl çalışır (teknik):** `getAccessibleTypography(dyslexiaFriendly, largeText)`
fonksiyonu `lineHeight` ve `letterSpacing` değerlerini değiştirir; bu değerler
`useAccessibleTheme()` hook'u üzerinden tüm ekranlara otomatik yayılır — ekranlar
tek tek değişmez, merkezi tema değişir.

---

## 2. Büyük Yazı

**Kimin için:** Görme zorluğu yaşayan, küçük metinleri okumakta zorlanan veya
genel olarak daha rahat okumak isteyen öğrenciler. Disleksi/okuma güçlüğü
modlarıyla birlikte kullanıldığında etkisi katlanır.

**Ne yapar:** Uygulamadaki tüm yazı tipi boyutlarını ~%15 büyütür (ör. temel
metin 14px → 16px, başlıklar orantılı şekilde büyür). Düzen bozulmaz çünkü
ölçekleme tüm `fontSize` tablosuna orantılı uygulanır.

**Nasıl çalışır (teknik):** `getAccessibleTypography` içinde `scale = largeText
? 1.15 : 1` ile `baseTypography.fontSize` değerleri orantılı olarak yeniden
hesaplanır.

---

## 3. Odaklanma Modu (DEHB Dostu)

**Kimin için:** Dikkat eksikliği/hiperaktivite (DEHB) yaşayan veya genel olarak
dikkati kolay dağılan öğrenciler — çok fazla seçenek/bölüm gördüğünde nereden
başlayacağını şaşıran, yarım bıraktığı görevlere geri dönmekte zorlanan
kullanıcılar.

**Ne yapar:**
- Ana sayfayı sadeleştirir: "Kaldığın Yerden Devam Et" gibi ek/dikkat dağıtıcı
  bölümleri gizler, kullanıcıyı doğrudan **bugün yapılması gereken işe**
  yönlendirir.
- Günlük Görevler ve Tekrar Listesi'nde **sadece tamamlanmamış** öğeleri
  gösterir — tamamlanan işler gözden kaybolur, "bitmeyen liste" hissi azalır.
- Amaç: ekranı "tek bir sonraki adım" mantığına indirgemek, bilişsel yükü
  azaltmak.

**Nasıl çalışır (teknik):** `useAccessibilityStore().focusMode` true olduğunda,
ana sayfa (`(tabs)/index.tsx`) "Kaldığın Yerden Devam Et" bloğunu render etmez
ve `taskItems`/`reviewItems` listelerini `!i.completed` filtresinden geçirir.

---

## 4. Sakin Mod (Anksiyete Dostu)

**Kimin için:** Sınav kaygısı, performans baskısı veya genel anksiyete yaşayan
öğrenciler — seri (streak) sayaçları, sayım/zamanlayıcılar veya "kaybetme"
hissi veren rekabetçi öğelerden olumsuz etkilenen kullanıcılar.

**Ne yapar:**
- Seri (flame/streak) rozetini ana sayfadan gizler — günü kaçırma korkusu
  yaratan baskı unsurunu kaldırır.
- Renk paletindeki "alarm" hissi veren parlak kırmızı/turuncu vurgu ve hata
  renklerini daha yumuşak, sakin tonlarla (yeşilimsi yeşil/amber) değiştirir.

**Nasıl çalışır (teknik):** `useAccessibilityStore().anxietyMode` true
olduğunda: (1) ana sayfada streak rozeti koşullu olarak render edilmez
(`!anxietyMode &&`), (2) `getAccessibleColors()` içindeki `anxietyPalette`
`accent`/`accentLight`/`error`/`errorLight` renklerini geçersiz kılar.

---

## 5. Renk Körlüğü Modları

**Kimin için:** Kırmızı-yeşil (protanopi/döteranopi) veya mavi-sarı (tritanopi)
renk körlüğü yaşayan öğrenciler — özellikle "doğru = yeşil, yanlış = kırmızı"
gibi anlam taşıyan renk kodlamalarını ayırt edemeyen kullanıcılar.

**Ne yapar:** Başarı, hata, uyarı ve vurgu renklerini, seçilen renk körlüğü
türüne göre ayırt edilebilirliği yüksek alternatif tonlarla değiştirir:

| Mod | Başarı | Hata | Uyarı/Vurgu |
|---|---|---|---|
| Protanopi (Kırmızı-Yeşil) | Mavi (`#3A6EA5`) | Mor (`#7A4FBF`) | Turuncu-amber (`#E8A33D`) |
| Döteranopi (Yeşil-Kırmızı) | Mavi (`#2F6FB5`) | Mor (`#9A5BD0`) | Amber (`#E0A106`) |
| Tritanopi (Mavi-Sarı) | Yeşil (`#1B8A5A`) | Kırmızı-pembe (`#D1495B`) | Kırmızı-pembe (`#D1495B`) |

Renkler sadece "farklı" değil, aynı zamanda her modun renk körlüğü türünde
**birbirinden ayırt edilebilir** olacak şekilde seçildi (ör. protanopi/döteranopide
kırmızı-yeşil yerine mavi-mor-amber üçlüsü kullanılır).

**Nasıl çalışır (teknik):** `getAccessibleColors(colorBlindMode, anxietyMode)`
fonksiyonu, seçilen moda göre `colorBlindPalettes` içinden ilgili renk setini
`baseColors` üzerine uygular. Renkler merkezi olduğu için doğru/yanlış,
başarı/uyarı gösteren her bileşen (quiz sonuçları, ilerleme çubukları, rozetler)
otomatik olarak güncellenir — ayrı ayrı kod değişikliği gerekmez.

---

## Genel Tasarım İlkesi

Tüm modlar **birbirinden bağımsız ve aynı anda açılabilir** (ör. disleksi dostu
+ büyük yazı + sakin mod birlikte aktif olabilir). Ayarlar yalnızca cihazda
saklanır (AsyncStorage), hesaba bağlı değildir — öğrenci farklı bir cihaza
geçtiğinde ayarlarını yeniden yapması gerekir (ileride hesap senkronizasyonu
eklenebilir).
