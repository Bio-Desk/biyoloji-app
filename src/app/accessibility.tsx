import { View, Text, ScrollView, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAccessibleTheme } from '../hooks/useAccessibleTheme';
import { useAccessibilityStore } from '../store/accessibilityStore';
import { COLOR_BLIND_LABELS, type ColorBlindMode } from '../lib/accessibility-themes';

const COLOR_BLIND_OPTIONS: ColorBlindMode[] = ['none', 'protanopia', 'deuteranopia', 'tritanopia'];

function SettingRow({
  icon,
  title,
  description,
  value,
  onToggle,
  colors,
  typography,
  spacing,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  value: boolean;
  onToggle: () => void;
  colors: ReturnType<typeof useAccessibleTheme>['colors'];
  typography: ReturnType<typeof useAccessibleTheme>['typography'];
  spacing: ReturnType<typeof useAccessibleTheme>['spacing'];
}) {
  return (
    <View style={[styles.row, { borderColor: colors.border }]}>
      <View style={[styles.rowIcon, { backgroundColor: colors.primaryMuted }]}>
        <Ionicons name={icon} size={20} color={colors.primary} />
      </View>
      <View style={{ flex: 1, marginLeft: spacing.md }}>
        <Text
          style={{
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.semibold,
            color: colors.textPrimary,
            letterSpacing: typography.letterSpacing,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: typography.fontSize.sm,
            color: colors.textSecondary,
            marginTop: 2,
            lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
            letterSpacing: typography.letterSpacing,
          }}
        >
          {description}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: colors.border, true: colors.primaryMuted }}
        thumbColor={value ? colors.primary : '#FFFFFF'}
      />
    </View>
  );
}

export default function AccessibilityScreen() {
  const { colors, typography, spacing, radius, shadows } = useAccessibleTheme();
  const {
    dyslexiaFriendly,
    largeText,
    focusMode,
    anxietyMode,
    colorBlindMode,
    toggleDyslexiaFriendly,
    toggleLargeText,
    toggleFocusMode,
    toggleAnxietyMode,
    setColorBlindMode,
    reset,
  } = useAccessibilityStore();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingHorizontal: spacing.base, paddingVertical: spacing.md }]}>
        <TouchableOpacity
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.bold,
            color: colors.textPrimary,
            marginLeft: spacing.sm,
          }}
        >
          Erişilebilirlik
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.base, paddingBottom: spacing['3xl'] }}>
        <Text
          style={{
            fontSize: typography.fontSize.sm,
            color: colors.textSecondary,
            marginBottom: spacing.lg,
            lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
            letterSpacing: typography.letterSpacing,
          }}
        >
          Öğrenme deneyimini ihtiyaçlarına göre ayarla. Bu ayarlar sadece bu cihazda saklanır ve
          istediğin zaman değiştirebilirsin.
        </Text>

        {/* Disleksi & okuma güçlüğü */}
        <View style={[styles.section, { backgroundColor: colors.surface, borderRadius: radius.lg, ...shadows.sm }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold }]}>
            Okuma Desteği
          </Text>
          <SettingRow
            icon="text"
            title="Disleksi dostu görünüm"
            description="Satır ve harf aralığını artırarak okumayı kolaylaştırır."
            value={dyslexiaFriendly}
            onToggle={toggleDyslexiaFriendly}
            colors={colors}
            typography={typography}
            spacing={spacing}
          />
          <SettingRow
            icon="add-circle-outline"
            title="Büyük yazı"
            description="Tüm metinleri biraz daha büyük gösterir."
            value={largeText}
            onToggle={toggleLargeText}
            colors={colors}
            typography={typography}
            spacing={spacing}
          />
        </View>

        {/* DEHB / Odaklanma */}
        <View style={[styles.section, { backgroundColor: colors.surface, borderRadius: radius.lg, ...shadows.sm }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold }]}>
            Odaklanma (DEHB Dostu)
          </Text>
          <SettingRow
            icon="locate-outline"
            title="Odaklanma modu"
            description="Ana sayfayı sadeleştirir, dikkat dağıtıcı bölümleri gizler ve tek bir göreve odaklanmanı sağlar."
            value={focusMode}
            onToggle={toggleFocusMode}
            colors={colors}
            typography={typography}
            spacing={spacing}
          />
        </View>

        {/* Anksiyete */}
        <View style={[styles.section, { backgroundColor: colors.surface, borderRadius: radius.lg, ...shadows.sm }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold }]}>
            Sakin Mod
          </Text>
          <SettingRow
            icon="leaf-outline"
            title="Anksiyete modu"
            description="Rekabetçi/baskı hissi veren renkleri ve uyarıları yumuşatır."
            value={anxietyMode}
            onToggle={toggleAnxietyMode}
            colors={colors}
            typography={typography}
            spacing={spacing}
          />
        </View>

        {/* Renk körlüğü */}
        <View style={[styles.section, { backgroundColor: colors.surface, borderRadius: radius.lg, ...shadows.sm }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold }]}>
            Renk Körlüğü Modu
          </Text>
          <Text
            style={{
              fontSize: typography.fontSize.sm,
              color: colors.textSecondary,
              marginBottom: spacing.md,
              lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
              letterSpacing: typography.letterSpacing,
            }}
          >
            Başarı, hata ve uyarı renklerini seçtiğin türe göre ayarlar.
          </Text>
          <View style={styles.optionsWrap}>
            {COLOR_BLIND_OPTIONS.map((mode) => {
              const active = colorBlindMode === mode;
              return (
                <TouchableOpacity
                  key={mode}
                  onPress={() => setColorBlindMode(mode)}
                  style={[
                    styles.option,
                    {
                      borderRadius: radius.full,
                      borderColor: active ? colors.primary : colors.border,
                      backgroundColor: active ? colors.primary : 'transparent',
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.medium,
                      color: active ? colors.textInverse : colors.textSecondary,
                    }}
                  >
                    {COLOR_BLIND_LABELS[mode]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity onPress={reset} style={[styles.resetButton, { borderColor: colors.border }]}>
          <Ionicons name="refresh-outline" size={16} color={colors.textMuted} />
          <Text style={{ fontSize: typography.fontSize.sm, color: colors.textMuted, marginLeft: spacing.xs }}>
            Varsayılana sıfırla
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center' },
  backButton: { padding: 4 },
  section: { padding: 16, marginBottom: 16 },
  sectionTitle: { marginBottom: 12 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    marginTop: 4,
  },
  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  option: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 999,
    marginTop: 4,
  },
});
