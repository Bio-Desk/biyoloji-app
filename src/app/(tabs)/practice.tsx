import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import { notify } from '../../lib/notify';

export default function PracticeScreen() {
  const dueItems = 8;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pratik & Tekrar</Text>
        <Text style={styles.sub}>Akıllı tekrar sistemi ile eksiklerini kapat</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Revision Queue */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bugünkü Tekrar Kuyruğu</Text>
          <TouchableOpacity
            style={styles.primaryCard}
            onPress={() => notify('Tekrar kuyruğu yakında eklenecek.')}
          >
            <View style={styles.cardRow}>
              <View style={[styles.iconBox, { backgroundColor: colors.accentLight }]}>
                <Ionicons name="reload" size={24} color={colors.accent} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Tekrar Kuyruğu</Text>
                <Text style={styles.cardSub}>{dueItems} kart seni bekliyor</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{dueItems}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Practice Modes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Çalışma Modları</Text>
          {[
            { icon: 'flash', label: 'Zayıf Nokta Modu', sub: 'En çok hata yaptığın konular', color: colors.error },
            { icon: 'school', label: 'Konu Bazlı Quiz', sub: 'Bir konu seç, sorularını çöz', color: colors.info },
            { icon: 'document-text', label: 'TYT Simülasyonu', sub: '13 soru · 40 dakika', color: colors.primary },
          ].map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.modeCard}
              onPress={() => notify('Bu özellik yakında eklenecek.')}
            >
              <View style={[styles.iconBox, { backgroundColor: item.color + '20' }]}>
                <Ionicons name={item.icon as any} size={22} color={item.color} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.modeTitle}>{item.label}</Text>
                <Text style={styles.modeSub}>{item.sub}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Coming Soon */}
        <View style={styles.comingSoon}>
          <Ionicons name="construct-outline" size={20} color={colors.textMuted} />
          <Text style={styles.comingSoonText}>
            Soru bankası Aşama 3'te eklenecek. Tekrar kuyruğu ve quiz motoru hazır bekliyor.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.lg,
  },
  title: { fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.textInverse },
  sub: { fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.7)', marginTop: 4 },
  scroll: { padding: spacing.base, paddingBottom: spacing['3xl'] },
  section: { marginBottom: spacing.lg },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  primaryCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    ...shadows.md,
  },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: { fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.semibold, color: colors.textPrimary },
  cardSub: { fontSize: typography.fontSize.sm, color: colors.textSecondary, marginTop: 2 },
  badge: {
    backgroundColor: colors.accent,
    width: 28,
    height: 28,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: colors.textInverse },
  modeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.base,
    marginBottom: spacing.xs,
    ...shadows.sm,
  },
  modeTitle: { fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.medium, color: colors.textPrimary },
  modeSub: { fontSize: typography.fontSize.sm, color: colors.textSecondary, marginTop: 2 },
  comingSoon: {
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.base,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.md,
    alignItems: 'flex-start',
  },
  comingSoonText: { fontSize: typography.fontSize.sm, color: colors.textMuted, flex: 1 },
});
