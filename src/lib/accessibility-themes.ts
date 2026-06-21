// Erişilebilirlik için renk paleti ve tipografi varyantları
import { colors as baseColors, typography as baseTypography } from './theme';

export type ColorBlindMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';

type ColorPalette = Record<keyof typeof baseColors, string>;

export const COLOR_BLIND_LABELS: Record<ColorBlindMode, string> = {
  none: 'Kapalı',
  protanopia: 'Protanopi (Kırmızı-Yeşil)',
  deuteranopia: 'Döteranopi (Yeşil-Kırmızı)',
  tritanopia: 'Tritanopi (Mavi-Sarı)',
};

// Başarı/uyarı/hata gibi anlamsal renkler renk körlüğü türlerine göre
// kırmızı-yeşil-mavi karışıklığını azaltacak şekilde değiştirilir.
const colorBlindPalettes: Record<Exclude<ColorBlindMode, 'none'>, Partial<ColorPalette>> = {
  protanopia: {
    success: '#3A6EA5',
    successLight: '#DCE8F5',
    error: '#7A4FBF',
    errorLight: '#EDE3F9',
    warning: '#E8A33D',
    warningLight: '#FBEEDC',
    accent: '#E8A33D',
    accentLight: '#FBEEDC',
    highlightImportant: '#EDE3F9',
    highlightExample: '#DCE8F5',
  },
  deuteranopia: {
    success: '#2F6FB5',
    successLight: '#E1ECF7',
    error: '#9A5BD0',
    errorLight: '#F1E7FA',
    warning: '#E0A106',
    warningLight: '#FCF1CF',
    accent: '#E0A106',
    accentLight: '#FCF1CF',
    highlightImportant: '#F1E7FA',
    highlightExample: '#E1ECF7',
  },
  tritanopia: {
    success: '#1B8A5A',
    successLight: '#DCF5E9',
    error: '#D1495B',
    errorLight: '#FBE2E5',
    warning: '#C2540C',
    warningLight: '#FBE6D6',
    accent: '#D1495B',
    accentLight: '#FBE2E5',
    highlightImportant: '#FBE2E5',
    highlightExample: '#DCF5E9',
  },
};

// Anksiyete modu: rekabet/baskı hissi veren renkleri (parlak kırmızı/turuncu)
// daha yumuşak tonlarla değiştirir.
const anxietyPalette: Partial<ColorPalette> = {
  accent: '#7C9885',
  accentLight: '#E8F0EA',
  error: '#B45309',
  errorLight: '#FEF3C7',
};

export function getAccessibleColors(
  colorBlindMode: ColorBlindMode,
  anxietyMode: boolean
): ColorPalette {
  let result: ColorPalette = { ...baseColors };
  if (colorBlindMode !== 'none') {
    result = { ...result, ...colorBlindPalettes[colorBlindMode] };
  }
  if (anxietyMode) {
    result = { ...result, ...anxietyPalette };
  }
  return result;
}

export interface AccessibleTypography {
  fontFamily: typeof baseTypography.fontFamily;
  fontSize: typeof baseTypography.fontSize;
  fontWeight: typeof baseTypography.fontWeight;
  lineHeight: { tight: number; normal: number; relaxed: number };
  letterSpacing: number;
}

export function getAccessibleTypography(
  dyslexiaFriendly: boolean,
  largeText: boolean
): AccessibleTypography {
  const scale = largeText ? 1.15 : 1;
  const fontSize = Object.fromEntries(
    Object.entries(baseTypography.fontSize).map(([key, value]) => [key, Math.round(value * scale)])
  ) as typeof baseTypography.fontSize;

  const lineHeight = dyslexiaFriendly
    ? { tight: 1.4, normal: 1.7, relaxed: 1.95 }
    : baseTypography.lineHeight;

  return {
    fontFamily: baseTypography.fontFamily,
    fontSize,
    fontWeight: baseTypography.fontWeight,
    lineHeight,
    letterSpacing: dyslexiaFriendly ? 0.6 : 0,
  };
}
