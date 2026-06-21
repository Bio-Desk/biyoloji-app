import { useAccessibilityStore } from '../store/accessibilityStore';
import { getAccessibleColors, getAccessibleTypography } from '../lib/accessibility-themes';
import { spacing, radius, shadows } from '../lib/theme';

// Aktif erişilebilirlik ayarlarına göre renk ve tipografi döndürür.
// Yeni ekranlar/bileşenler bu hook üzerinden tema değerlerini almalı.
export function useAccessibleTheme() {
  const dyslexiaFriendly = useAccessibilityStore((s) => s.dyslexiaFriendly);
  const largeText = useAccessibilityStore((s) => s.largeText);
  const focusMode = useAccessibilityStore((s) => s.focusMode);
  const anxietyMode = useAccessibilityStore((s) => s.anxietyMode);
  const colorBlindMode = useAccessibilityStore((s) => s.colorBlindMode);

  const colors = getAccessibleColors(colorBlindMode, anxietyMode);
  const typography = getAccessibleTypography(dyslexiaFriendly, largeText);

  return {
    colors,
    typography,
    spacing,
    radius,
    shadows,
    dyslexiaFriendly,
    largeText,
    focusMode,
    anxietyMode,
    colorBlindMode,
  };
}
