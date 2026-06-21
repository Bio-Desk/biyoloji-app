import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import { KVKK_TEXT } from '../../lib/kvkk';
import { useKvkkStore } from '../../store/kvkkStore';

export default function KvkkScreen() {
  const accept = useKvkkStore((s) => s.accept);

  const handleAccept = async () => {
    await accept();
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Ionicons name="shield-checkmark" size={28} color={colors.primary} />
        </View>
        <Text style={styles.title}>Kişisel Verilerin Korunması</Text>
        <Text style={styles.subtitle}>
          Devam etmeden önce lütfen aşağıdaki aydınlatma metnini okuyun ve onaylayın.
        </Text>
      </View>

      <ScrollView style={styles.textBox} contentContainerStyle={styles.textBoxContent}>
        <Text style={styles.bodyText}>{KVKK_TEXT}</Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.acceptButton} onPress={handleAccept} activeOpacity={0.85}>
          <Text style={styles.acceptButtonText}>Kabul Ediyorum</Text>
        </TouchableOpacity>
        <Text style={styles.footerNote}>
          Kabul etmeden hesap oluşturamaz veya giriş yapamazsınız.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { alignItems: 'center', padding: spacing.lg },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: radius.full,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xs,
    paddingHorizontal: spacing.lg,
  },
  textBox: {
    flex: 1,
    marginHorizontal: spacing.base,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    ...shadows.sm,
  },
  textBoxContent: { padding: spacing.base },
  bodyText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  footer: { padding: spacing.base },
  acceptButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radius.full,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: colors.textInverse,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
  },
  footerNote: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});
