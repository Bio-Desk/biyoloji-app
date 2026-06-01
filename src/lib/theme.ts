// BiyoMap Design System

export const colors = {
  // Backgrounds
  background: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceSecondary: '#F1F5F9',

  // Brand
  primary: '#1B4332',       // koyu yeşil
  primaryLight: '#2D6A4F',
  primaryMuted: '#D8EDDF',

  // Accent
  accent: '#E76F51',        // turuncu — CTA
  accentLight: '#FDEEE9',

  // Semantic
  info: '#2B6CB0',
  infoLight: '#EBF4FF',
  warning: '#D97706',
  warningLight: '#FEF3C7',
  success: '#059669',
  successLight: '#D1FAE5',
  error: '#DC2626',
  errorLight: '#FEE2E2',

  // Text
  textPrimary: '#1A202C',
  textSecondary: '#4A5568',
  textMuted: '#A0AEC0',
  textInverse: '#FFFFFF',

  // Borders
  border: '#E2E8F0',
  borderStrong: '#CBD5E0',

  // Highlight boxes
  highlightWarning: '#FEF3C7',
  highlightTip: '#EBF4FF',
  highlightImportant: '#FEE2E2',
  highlightExample: '#D1FAE5',
} as const;

export const typography = {
  fontFamily: {
    sans: 'Inter',
    mono: 'JetBrainsMono',
  },
  fontSize: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 19,
    xl: 22,
    '2xl': 26,
    '3xl': 32,
  },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
} as const;

export const radius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  full: 9999,
} as const;

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
} as const;

// Layer type → color mapping
export const layerColors: Record<string, { bg: string; border: string; text: string }> = {
  concept:        { bg: '#EBF4FF', border: '#2B6CB0', text: '#1E40AF' },
  visual:         { bg: '#D1FAE5', border: '#059669', text: '#065F46' },
  process:        { bg: '#FEF3C7', border: '#D97706', text: '#92400E' },
  terms:          { bg: '#F3E8FF', border: '#7C3AED', text: '#4C1D95' },
  misconceptions: { bg: '#FEE2E2', border: '#DC2626', text: '#7F1D1D' },
  exam_tips:      { bg: '#FFF7ED', border: '#EA580C', text: '#7C2D12' },
  real_life:      { bg: '#ECFDF5', border: '#10B981', text: '#065F46' },
  mini_quiz:      { bg: '#F0FDF4', border: '#16A34A', text: '#14532D' },
  assessment:     { bg: '#1B4332', border: '#1B4332', text: '#FFFFFF' },
};

export const layerTitles: Record<string, string> = {
  concept:        '1. Temel Kavram',
  visual:         '2. Görsel Açıklama',
  process:        '3. Süreç Akışı',
  terms:          '4. Anahtar Terimler',
  misconceptions: '5. Yaygın Yanılgılar',
  exam_tips:      '6. Sınavda Nasıl Sorulur?',
  real_life:      '7. Uygulama Kutusu',
  mini_quiz:      '8. Mini Quiz',
  assessment:     '9. Konu Sonu Değerlendirme',
};
