# BiyoMap — Kurulum Rehberi

## 1. Node.js Kur

https://nodejs.org adresine git → "LTS" sürümünü indir ve kur.
Kurulumdan sonra terminali kapatıp yeniden aç.

Doğrula:
```
node --version   → v20.x.x görünmeli
npm --version    → 10.x.x görünmeli
```

## 2. Expo CLI Kur

```
npm install -g expo-cli
```

## 3. Bağımlılıkları Yükle

```
cd C:\Users\AYLİN\biyoloji-app
npm install
```

## 4. Uygulamayı Başlat

```
npm start
```

Tarayıcıda QR kodu göreceksin.

## 5. Telefonda Test Et

Telefona "Expo Go" uygulamasını indir (App Store veya Play Store).
QR kodu Expo Go ile tara → uygulama telefonunda açılır.

## 6. Simulator ile Test (isteğe bağlı)

iOS: Xcode kurulu Mac gerekir → `npm run ios`
Android: Android Studio kurulu gerekir → `npm run android`

---

## Proje Yapısı

```
src/
├── app/              → Ekranlar (Expo Router)
│   ├── (tabs)/       → Alt sekme ekranları
│   └── learn/        → Konu sayfaları
├── components/       → Yeniden kullanılabilir bileşenler
├── data/grade9/      → 9. sınıf içerik verileri
├── db/               → SQLite şeması ve bağlantısı
├── lib/              → Tema, algoritmalar
├── store/            → Zustand state yönetimi
└── types/            → TypeScript tipleri
```
