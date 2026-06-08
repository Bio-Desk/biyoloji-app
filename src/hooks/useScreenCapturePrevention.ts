/**
 * useScreenCapturePrevention
 * ---------------------------
 * Ekran görüntüsü ve ekran kaydını engeller.
 * Android: FLAG_SECURE ile sistem seviyesinde önler.
 * iOS:     ekran kaydı başladığında uyarı gösterir (sistem kısıtlaması).
 *
 * Kullanım:
 *   useScreenCapturePrevention();          // her zaman aktif
 *   useScreenCapturePrevention(isPro);     // sadece pro ekranlarda
 */

import { useEffect } from 'react';
import * as ScreenCapture from 'expo-screen-capture';

export function useScreenCapturePrevention(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    // Korumayı etkinleştir
    ScreenCapture.preventScreenCaptureAsync();

    return () => {
      // Ekran ayrılınca korumayı kaldır
      ScreenCapture.allowScreenCaptureAsync();
    };
  }, [enabled]);
}
