import AsyncStorage from '@react-native-async-storage/async-storage';

export const KVKK_VERSION = '1.0';

const STORAGE_KEY = 'kvkk_accepted_version';

export const KVKK_TEXT = `KİŞİSEL VERİLERİN KORUNMASI HAKKINDA AYDINLATMA METNİ

BiyoMap ("Uygulama") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında kişisel verilerinizin güvenliğine önem veriyoruz.

1. Veri Sorumlusu
Uygulamayı kullanırken paylaştığınız kişisel veriler (ad, soyad, e-posta adresi, sınıf düzeyi, hedef bilgileri, öğretmen rolü için branş ve öğretmenlik belgesi gibi bilgiler) veri sorumlusu sıfatıyla işlenmektedir.

2. İşlenen Kişisel Veriler
- Kimlik ve iletişim bilgileri (ad, soyad, e-posta)
- Hesap bilgileri (rol: öğrenci/öğretmen, sınıf düzeyi, hedef)
- Öğretmen kullanıcılar için: branş bilgisi, öğretmenlik belgesi ve profil fotoğrafı
- Kullanım ve performans verileri (ders ilerlemesi, quiz sonuçları, tekrar kayıtları)

3. Kişisel Verilerin İşlenme Amacı
Kişisel verileriniz; hesabınızın oluşturulması, eğitim içeriklerinin kişiselleştirilmesi, öğretmen-öğrenci panel erişimlerinin yönetilmesi, bildirim gönderilmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir.

4. Kişisel Verilerin Aktarılması
Verileriniz, hizmetin sunulabilmesi için gerekli olan yetkilendirilmiş bulut altyapı sağlayıcılarıyla paylaşılabilir. Verileriniz açık rızanız olmadan üçüncü taraflarla pazarlama amacıyla paylaşılmaz.

5. Haklarınız
KVKK'nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, düzeltme veya silinmesini isteme haklarına sahipsiniz. Bu haklarınızı uygulama içindeki Gizlilik Paneli üzerinden kullanabilirsiniz.

6. Onay
"Kabul Ediyorum" butonuna tıklayarak, bu aydınlatma metnini okuduğunuzu ve kişisel verilerinizin yukarıda belirtilen amaçlarla işlenmesine açık rıza gösterdiğinizi beyan etmiş olursunuz. Bu onay verilmeden uygulamaya kayıt olunamaz.`;

export async function isKvkkAccepted(): Promise<boolean> {
  const value = await AsyncStorage.getItem(STORAGE_KEY);
  return value === KVKK_VERSION;
}

export async function acceptKvkk(): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, KVKK_VERSION);
}
