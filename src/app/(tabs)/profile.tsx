import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View>
          <Text style={styles.name}>Aylin</Text>
          <Text style={styles.grade}>9. Sınıf · Biyoloji Meraklısı</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Pro Banner */}
        <TouchableOpacity style={styles.proBanner}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={styles.proTitle}>BiyoMap Pro'ya Geç</Text>
            <Text style={styles.proSub}>Tüm konular, sınırsız tekrar, PDF rapor</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.textInverse} />
        </TouchableOpacity>

        {/* Settings */}
        {[
          { icon: 'school-outline', label: 'Sınıf Düzeyini Değiştir', sub: '9. Sınıf' },
          { icon: 'trophy-outline', label: 'Hedefimi Değiştir', sub: 'TYT Hazırlık' },
          { icon: 'notifications-outline', label: 'Bildirim Ayarları', sub: 'Tekrar hatırlatıcıları' },
          { icon: 'shield-checkmark-outline', label: 'Gizlilik ve Hesap', sub: '' },
        ].map((item, i) => (
          <TouchableOpacity key={i} style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Ionicons name={item.icon as any} size={20} color={colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.menuLabel}>{item.label}</Text>
              {!!item.sub && <Text style={styles.menuSub}>{item.sub}</Text>}
            </View>
            <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
          </TouchableOpacity>
        ))}

        <View style={styles.versionBox}>
          <Text style={styles.version}>BiyoMap v1.0.0 — MVP</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.base,
    backgroundColor: colors.primary,
    padding: spacing.lg,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: radius.full,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.textInverse },
  name: { fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.textInverse },
  grade: { fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.7)' },
  scroll: { padding: spacing.base, paddingBottom: spacing['3xl'] },
  proBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  proTitle: { fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.textInverse },
  proSub: { fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.base,
    marginBottom: spacing.xs,
    ...shadows.sm,
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: { fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.medium, color: colors.textPrimary },
  menuSub: { fontSize: typography.fontSize.sm, color: colors.textMuted, marginTop: 2 },
  versionBox: { alignItems: 'center', marginTop: spacing.xl },
  version: { fontSize: typography.fontSize.xs, color: colors.textMuted },
});
