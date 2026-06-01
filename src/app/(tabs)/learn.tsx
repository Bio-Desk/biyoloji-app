import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { grade9Curriculum } from '../../data/grade9/curriculum';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import type { Topic } from '../../types';

const difficultyLabel = { easy: 'Kolay', medium: 'Orta', hard: 'Zor' };
const difficultyColor = {
  easy: colors.success,
  medium: colors.warning,
  hard: colors.error,
};

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <TouchableOpacity
      style={styles.topicCard}
      onPress={() => router.push(`/learn/${topic.id}`)}
      activeOpacity={0.85}
    >
      <View style={styles.topicLeft}>
        <View style={styles.topicNumber}>
          <Text style={styles.topicNumberText}>{topic.orderIndex}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.topicTitle}>{topic.title}</Text>
          <View style={styles.topicMeta}>
            <Ionicons name="time-outline" size={12} color={colors.textMuted} />
            <Text style={styles.topicMetaText}>{topic.estimatedMinutes} dk</Text>
            <View style={[styles.difficultyDot, { backgroundColor: difficultyColor[topic.difficulty] }]} />
            <Text style={[styles.difficultyText, { color: difficultyColor[topic.difficulty] }]}>
              {difficultyLabel[topic.difficulty]}
            </Text>
          </View>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
    </TouchableOpacity>
  );
}

export default function LearnScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Grade Header */}
      <View style={styles.gradeHeader}>
        <Text style={styles.gradeTitle}>9. Sınıf Biyoloji</Text>
        <Text style={styles.gradeSub}>MEB Müfredatı · 2 Tema · 15 Konu</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {grade9Curriculum.map((theme) => (
          <View key={theme.id} style={styles.themeSection}>

            {/* Theme Header */}
            <View style={styles.themeHeader}>
              <Ionicons name={theme.icon as any} size={20} color={colors.primary} />
              <Text style={styles.themeTitle}>
                Tema {theme.orderIndex}: {theme.title}
              </Text>
            </View>

            {/* Topics */}
            <View style={styles.topicsContainer}>
              {theme.topics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </View>

          </View>
        ))}
        <View style={{ height: spacing['3xl'] }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  gradeHeader: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.lg,
  },
  gradeTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
  },
  gradeSub: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },

  themeSection: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.base,
  },
  themeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
    paddingBottom: spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryMuted,
  },
  themeTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },

  topicsContainer: { gap: spacing.xs },

  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.base,
    ...shadows.sm,
  },
  topicLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, gap: spacing.md },
  topicNumber: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicNumberText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  topicTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  topicMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  topicMetaText: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
  },
  difficultyDot: {
    width: 5,
    height: 5,
    borderRadius: radius.full,
    marginLeft: 4,
  },
  difficultyText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
  },
});
