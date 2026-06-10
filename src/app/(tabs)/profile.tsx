import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import { notify } from '../../lib/notify';

// Dönem ve sınav tarihleri
const SCHOOL_OPEN = new Date('2025-09-09');
const SCHOOL_CLOSE = new Date('2026-06-13');
const YKS_DATE = new Date('2026-06-14');

function getDaysLeft(): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = YKS_DATE.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function ProfileScreen() {
  const daysLeft = getDaysLeft();

  return (
    <SafeAreaView style={styles.container}>

      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person-circle" size={60} color="rgba(255,255,255,0.92)" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Aylin</Text>
          <Text style={styles.termText}>
            {formatDate(SCHOOL_OPEN)} – {formatDate(SCHOOL_CLOSE)}
          </Text>
          <Text style={styles.examText}>YKS'ye {daysLeft} gün kaldı</Text>
        </View>
        <TouchableOpacity style={styles.proHeaderBtn}>
          <Ionicons name="star" size={11} color="#FFD700" />
          <Text style={styles.proHeaderText}>PRO</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Settings */}
        {[
          { icon: 'school-outline', label: 'Sınıf Düzeyini Değiştir', sub: '9. Sınıf' },
          { icon: 'trophy-outline', label: 'Hedefimi Değiştir', sub: 'TYT Hazırlık' },
          { icon: 'notifications-outline', label: 'Bildirim Ayarları', sub: 'Tekrar hatırlatıcıları' },
          { icon: 'shield-checkmark-outline', label: 'Gizlilik ve Hesap', sub: '' },
        ].map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.menuItem}
            onPress={() => notify('Bu özellik yakında eklenecek.')}
          >
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
    width: 60,
    height: 60,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  name: { fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.textInverse },
  termText: { fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.75)', marginTop: 3 },
  examText: { fontSize: typography.fontSize.xs, color: '#FFD700', marginTop: 2, fontWeight: typography.fontWeight.semibold },
  proHeaderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  proHeaderText: { fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: '#FFD700' },
  scroll: { padding: spacing.base, paddingBottom: spacing['3xl'] },
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
