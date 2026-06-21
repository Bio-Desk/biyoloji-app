import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, typography, spacing, radius, shadows } from '../lib/theme';
import { useKvkkStore } from '../store/kvkkStore';

export default function WelcomeScreen() {
  const kvkkAccepted = useKvkkStore((s) => s.accepted);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.iconWrapper}>
            <Ionicons name="leaf" size={40} color={colors.primary} />
          </View>
          <Text style={styles.title}>BiyoMap'e Hoşgeldin</Text>
          <Text style={styles.subtitle}>
            Canlıların dünyasını keşfet, öğrenmeyi oyunlaştır ve günlük tekrarlarla ilerle.
          </Text>
          <View style={styles.features}>
            <View style={styles.featureItem}>
              <Ionicons name="book" size={18} color={colors.primary} />
              <Text style={styles.featureText}>Kapsamlı 9. sınıf müfredatı</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="refresh" size={18} color={colors.primary} />
              <Text style={styles.featureText}>Akıllı tekrar hatırlatmaları</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="rocket" size={18} color={colors.primary} />
              <Text style={styles.featureText}>Hızlı ve etkili pratik</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.replace(kvkkAccepted ? '/(auth)/login' : '/(auth)/kvkk');
            }}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>Başlayalım</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, justifyContent: 'center', padding: spacing.base },
  heroCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing['2xl'],
    alignItems: 'center',
    ...shadows.lg,
  },
  iconWrapper: {
    width: 84,
    height: 84,
    borderRadius: radius.full,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  features: { width: '100%', gap: spacing.sm, marginBottom: spacing.lg },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.xs,
  },
  featureText: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radius.full,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textInverse,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
  },
});

