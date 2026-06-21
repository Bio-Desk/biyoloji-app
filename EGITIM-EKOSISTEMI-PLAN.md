# Eğitim Ekosistemi — Ana Plan

BiyoMap'i öğrenci paneli + öğretmen paneli + ajan/otomasyon sistemine sahip bir
"Eğitim Ekosistemi"ne dönüştürme yol haritası. Backend: Supabase (Auth, Postgres,
Storage, Edge Functions, Cron). Yerel SQLite, ders içeriği ve ilerleme verisi için
korunuyor; Supabase kimlik, roller, öğretmen-öğrenci ilişkisi, kaynaklar,
bildirimler ve ajan verileri için kullanılıyor.

Her faz bağımsız test edilebilir bir teslimat olacak şekilde sıralandı. Fazlar
genelde birbirine bağımlı (Faz N, Faz N-1'in üzerine inşa edilir). **Faz 2**
(öğrenci ana sayfa + erişilebilirlik) Supabase'e bağımlı değildir, Faz 3 ile
paralel/önce de yapılabilir.

---

## Faz 1 — Kimlik & Erişim Altyapısı ✅ TAMAMLANDI

- KVKK onay ekranı (cihazda saklanan onay durumu)
- Supabase Auth (e-posta/şifre)
- Kayıt sırasında rol seçimi (öğrenci/öğretmen)
- `profiles` tablosu + RLS politikaları
- Root layout routing guard (KVKK/auth durumuna göre yönlendirme)

**Durum:** Kod tamam, Supabase projesi kuruldu, `.env` dolduruldu, ilk test
yapılıyor.

---

## Faz 2 — Öğrenci Ana Sayfa İyileştirmeleri & Erişilebilirlik Paneli

**Hedef:** Ana sayfayı (mevcut `(tabs)/index.tsx`) zenginleştirmek ve
nöroçeşitlilik (DEHB, disleksi, okuma güçlüğü), anksiyete ve renk körlüğü
olan öğrenciler için ayarlanabilir bir erişilebilirlik deneyimi sunmak.

**Yapılacaklar:**

1. **Erişilebilirlik ayarları store** (`useAccessibilityStore`, zustand +
   AsyncStorage persist):
   - **Disleksi / okuma güçlüğü**: disleksi-dostu yazı tipi seçeneği, satır
     aralığı/harf aralığı artırma, yazı boyutu büyütme.
   - **DEHB / odaklanma modu**: arayüzü sadeleştirme (dikkat dağıtıcı
     animasyon/rozetleri gizleme), günlük görevleri daha küçük adımlara
     bölme, odak zamanlayıcısı (örn. 10 dk pomodoro).
   - **Anksiyete modu**: rekabetçi öğeleri (sıralama, sayaç baskısı) gizleme,
     sakinleştirici renk teması, bildirim sıklığını azaltma, "nazik dil"
     metin varyantları.
   - **Renk körlüğü modları**: protanopi/döteranopi/tritanopi için alternatif
     renk paletleri (özellikle başarı/hata/uyarı renklerinde).
   - Tüm ayarlar tek tek açılıp kapanabilir (toggle), birden fazla aynı anda
     aktif olabilir.

2. **Erişilebilirlik sekmesi**: Ana sayfa header'ından erişilen bir ayar
   ekranı (`src/app/accessibility.tsx` veya `(tabs)` içine yeni sekme).
   Her kategori için açıklayıcı ikon + açıklama + toggle/slider.

3. **Tema sistemi entegrasyonu**: `lib/theme.ts`'e renk körlüğü paletleri
   eklenecek; bir `ThemeProvider`/context ile aktif erişilebilirlik
   ayarlarına göre `colors`/`typography` değerleri çalışma zamanında
   değiştirilecek (mevcut bileşenler `colors.X` kullanmaya devam eder, kaynak
   değişir).

4. **Ana sayfa — Günlük Görevler**: Mevcut `mockDailyQuests` ilerleme
   çubuğu yerine **işaretlenebilir (checkbox) liste**:
   - Otomatik görevler (sistem tarafından, mevcut quest mantığı korunur)
   - **"Görev Ekle"** butonu ile öğrencinin kendi günlük görevini elle
     girebilmesi (yerel SQLite `daily_quests` tablosuna `source: 'manual'`
     alanıyla kayıt)
   - Tamamlanan görevler işaretlenince üstü çizili gösterilir + XP verilir
     (otomatik görevler için)

5. **Ana sayfa — Tekrar bölümü**: Mevcut "Tekrar Sırası Bekliyor" kartının
   altına, `buildRevisionQueue()` ile günün tekrar listesi kart/madde
   listesi olarak gösterilir; her madde işaretlenebilir.

6. **İlerleme ekranı — Tekrar Takvimi**: `progress.tsx`'e aylık takvim
   bileşeni eklenir. `MemoryRecord.nextReviewDate` verileri gruplanarak
   (`spaced-repetition.ts` içine yeni `getReviewCountsByDate()` helper'ı)
   her günün kaç tekrar içerdiği takvimde gösterilir; bir güne tıklayınca o
   günün tekrar listesi açılır.

**Çıktı:** Öğrenci ana sayfada günlük görevlerini işaretleyebilir, kendi
görevini ekleyebilir, tekrar listesini görür; erişilebilirlik sekmesinden
DEHB/disleksi/anksiyete/renk körlüğü ayarlarını açıp arayüzün buna göre
değiştiğini görür; ilerleme sekmesinde tekrar takvimini görür.

---

## Faz 3 — Öğretmen Profili & Panel İskeleti

**Hedef:** Öğretmen rolüyle giriş yapan kullanıcı, kendine özel bir panele
düşsün; profilini tamamlayıp (branş, fotoğraf, belge) onay sürecine girsin.

**Yapılacaklar:**
1. `profiles` tablosuna yeni alanlar: `avatar_url`, `subject` (branş),
   `certificate_url`.
2. Supabase Storage bucket'ları: `avatars` (public/okunabilir), `certificates`
   (private — sadece sahibi ve admin erişebilir).
3. Öğretmen profil ekranı: fotoğraf yükleme (image picker), **branş seçimi**
   — sabit bir liste/dropdown'dan seçilir, içerik doldurma yok:
   `Biyoloji, Kimya, Fizik, Matematik, Türkçe, Edebiyat, Tarih, Coğrafya,
   Felsefe, İngilizce, Din Kültürü, Beden Eğitimi` (liste `src/lib/subjects.ts`
   içinde sabit olarak tanımlanır, tek kaynaktan Faz 5'te de kullanılır).
4. Öğretmenlik belgesi yükleme akışı (PDF/resim) → `certificates` bucket'ına
   yükleme → `teacher_verification_status = 'pending'`.
5. Basit onay mekanizması: ilk etapta Supabase Dashboard üzerinden manuel
   onay (status'ü `verified`/`rejected` yapma); ileride bir admin ekranı
   eklenebilir.
6. Route guard genişletmesi:
   - `role === 'teacher' && status === 'verified'` → öğretmen sekmeleri
   - `role === 'teacher' && status !== 'verified'` → "Belgeniz inceleniyor"
     bekleme ekranı (profil tamamlama formuna da erişim)
   - `role === 'student'` → mevcut öğrenci `(tabs)` deneyimi
7. Öğretmen sekme yapısı (`(teacher-tabs)` route grubu, iskelet ekranlar):
   - **Ajanlar** (placeholder — Faz 8'de dolacak)
   - **Öğrenci Listesi** (placeholder — Faz 4'te dolacak)
   - **Bildirim Ayarları** (placeholder — Faz 6'da dolacak)
   - **Gizlilik Paneli** (placeholder — Faz 7'de dolacak)
   - Profil sekmesi: ad, branş, fotoğraf, doğrulama durumu rozeti

**Çıktı:** Öğretmen kayıt olur → profilini doldurur (branş listeden seçilir)
→ belge yükler → "onay bekleniyor" ekranını görür → (manuel onaydan sonra)
öğretmen panel iskeletine erişir.

---

## Faz 4 — Öğrenci-Öğretmen İlişkisi & Dashboard

**Hedef:** Öğretmen, kendine bağlı öğrencilerin ilerlemesini görebilsin.

**Yapılacaklar:**
1. İlişki modeli: `classes` (sınıf/grup) + `class_members` tabloları, ya da
   basit bir `teacher_id` referansı + davet kodu ile öğrenci-öğretmen
   eşleşmesi (basit MVP: davet kodu önerilir).
2. Öğrenci tarafında: "Öğretmenine bağlan" ekranı (davet kodu girme).
3. İlerleme verisinin Supabase'e senkronu: yerel `subtopic_progress`,
   `quiz_attempts`, XP/seviye/streak verilerinin periyodik/olay bazlı
   senkronu (yeni `progress_sync` tablosu veya doğrudan `profiles` üzerine
   özet alanlar).
4. Öğretmen **Öğrenci Listesi** ekranı: bağlı öğrencilerin listesi, her biri
   için XP/seviye/son aktif tarih/streak özet kartı.
5. Öğrenci detay görünümü: konu bazlı ilerleme, quiz sonuçları, tekrar
   durumu (Faz 2'deki tekrar takvimi verisinin öğretmen görünümüne
   yansıtılması).

**Çıktı:** Öğretmen, öğrenci listesi sekmesinde gerçek öğrenci verilerini
görür ve bir öğrenciye tıklayıp detaylı ilerleme raporuna ulaşır.

---

## Faz 5 — Manuel Kaynak Yükleme Paneli

**Hedef:** Öğretmen kendi soru/cevap setlerini yükleyebilsin, öğrenciler bu
kaynaklardan pratik yapabilsin.

**Yapılacaklar:**
1. Supabase tablosu: `teacher_resources` (id, teacher_id, title, **ders/branş**
   — Faz 3'teki sabit `subjects.ts` listesinden seçilir, içerik tipi,
   oluşturulma tarihi).
2. Soru-cevap veri modeli: mevcut `Question`/`QuestionBody` tiplerine uyumlu
   bir form (soru metni, şıklar, doğru cevap, açıklama).
3. Öğretmen paneline "Kaynak Yükle" ekranı: önce ders/branş seçilir (sabit
   liste), ardından manuel soru girişi (form bazlı, tek tek) — toplu içe
   aktarma (CSV/JSON) ileri faz olarak not edilebilir.
4. Kaynak listesi/yönetim ekranı: ders bazlı filtre, düzenleme, silme.
5. Öğrenci tarafı entegrasyonu: pratik ekranında "Öğretmen Kaynakları"
   filtresi/bölümü — bağlı olduğu öğretmenin yüklediği sorular gösterilir.

**Çıktı:** Öğretmen bir ders seçip yeni bir soru ekler → bağlı öğrenciler bu
soruyu pratik ekranında görür ve çözer.

---

## Faz 6 — Bildirim Sistemi

**Hedef:** Öğretmen ve öğrenciye uygulama içi/push bildirimleri gönderilsin;
öğretmen bildirim tercihlerini yönetebilsin.

**Yapılacaklar:**
1. `expo-notifications` push token'larının Supabase'de saklanması
   (`push_tokens` tablosu, kullanıcı başına).
2. `notifications` tablosu: alıcı, tür (bilgi/onay isteği/uyarı), başlık,
   içerik, okunma durumu, ilişkili kayıt (örn. agent_proposal_id — Faz 8).
3. Bildirim Ayarları ekranı: bildirim türlerini aç/kapat (öğrenci ilerleme
   uyarıları, ajan onay istekleri, sistem duyuruları). Faz 2'deki anksiyete
   modu açıkken bildirim sıklığı varsayılan olarak azaltılır.
4. Bildirim gönderme mekanizması: Supabase Edge Function (push gönderimi
   için Expo Push API kullanımı).
5. Uygulama içi bildirim merkezi (liste ekranı, okundu/okunmadı).

**Çıktı:** Bir olay (örn. ajan önerisi) tetiklendiğinde öğretmen hem push
bildirimi hem uygulama içi bildirim alır; ayarlardan bildirim tercihlerini
değiştirebilir.

---

## Faz 7 — Gizlilik Paneli

**Hedef:** KVKK kapsamındaki kullanıcı haklarının uygulama üzerinden
kullanılabilmesi.

**Yapılacaklar:**
1. Gizlilik Paneli ekranı (öğretmen ve öğrenci profilinde):
   - Kişisel verilerin özetini görüntüleme
   - "Verilerimi indir" (JSON export — `profiles` + ilerleme verisi)
   - "Hesabımı sil" akışı: onay adımı → Supabase Auth kullanıcısının ve
     ilişkili verilerin silinmesi (cascade veya edge function ile temizlik)
   - KVKK metnini tekrar görüntüleme
2. Hesap silme için Supabase tarafında güvenli bir mekanizma (RLS + edge
   function, çünkü `auth.users` silme işlemi service role gerektirir).

**Çıktı:** Kullanıcı Gizlilik Paneli'nden verilerini indirebilir veya
hesabını/verilerini kalıcı olarak silebilir.

---

## Faz 8 — Ajan/Otomasyon Sistemi

**Hedef:** Tanımlı ajanlar periyodik olarak öğrenci verilerini analiz edip
öneriler üretsin, öğretmene bildirim+onay akışıyla sunulsun, onaylanan
değişiklikler otomatik uygulansın.

**Bu faz başlamadan önce netleştirilmesi gereken sorular (kullanıcıyla
görüşülecek):**
- Ajan örnekleri ne olacak? (örn: "düşük performanslı konuda ekstra tekrar
  planı öner", "bir öğrencinin streak'i kırıldıysa motivasyon mesajı
  gönder", "yüklenen kaynaklardan otomatik quiz üret")
- Ajanların "düzenleme" yapabileceği varlıklar neler? (öğrenci tekrar planı,
  ders içeriği önerisi, bildirim gönderimi, kaynak etiketleme vb.)
- Onay akışı tek seferlik mi, yoksa öğretmen "bu tür önerileri otomatik
  onayla" diyebilecek mi?

**Yapılacaklar (taslak):**
1. `agent_proposals` tablosu: id, teacher_id, agent_key, hedef
   öğrenci/kayıt, önerilen değişiklik (JSON), durum (pending/approved/
   rejected/applied), oluşturulma/karar tarihi.
2. Ajan çalıştırma altyapısı: Supabase Edge Functions + `pg_cron` ile
   periyodik tetikleme (örn. günlük).
3. Her ajan için ayrı bir edge function / modül (analiz mantığı +
   `agent_proposals` kaydı oluşturma).
4. Faz 6'daki bildirim sistemiyle entegrasyon: yeni öneri oluşunca
   öğretmene bildirim.
5. **Ajanlar** sekmesi UI: bekleyen öneriler listesi, öneri detayı, Onayla/
   Reddet butonları.
6. Onay sonrası uygulama: onaylanan `agent_proposals` kaydı için ilgili
   edge function tetiklenir, değişiklik gerçek tablolara/öğrenci verisine
   yazılır, durum `applied` olur.

**Çıktı:** Bir ajan öneri üretir → öğretmen bildirim alır → Ajanlar
sekmesinden onaylar → değişiklik otomatik uygulanır.

---

## Faz 9 — Yayına Hazırlık & Cilalama

- Hata yönetimi ve offline/ağ hatası senaryoları
- Performans/güvenlik gözden geçirmesi (RLS politikalarının tam denetimi)
- Uçtan uca test senaryoları (öğrenci akışı, öğretmen akışı, ajan akışı)
- Erişilebilirlik ayarlarının tüm ekranlarda tutarlılık denetimi
- Mağaza (App Store/Play Store) hazırlığı: ikon, ekran görüntüleri, gizlilik
  beyanları

---

## Genel Notlar

- Her faz sonunda `npx tsc --noEmit` ile tip kontrolü ve `npm run web` ile
  manuel test yapılacak.
- Supabase migration'ları `supabase/migrations/000X_*.sql` altında
  numaralı şekilde eklenecek.
- Ders/branş listesi (`src/lib/subjects.ts`) tek kaynak — hem öğretmen
  profili (Faz 3) hem kaynak yükleme (Faz 5) burayı kullanır.
- Faz 8 (Ajan sistemi) en belirsiz ve en karmaşık parça — başlamadan önce
  ayrı bir planlama oturumu gerekecek.
