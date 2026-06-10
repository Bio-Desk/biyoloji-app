import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from 'expo-router';
import { grade9Curriculum } from '../../data/grade9/curriculum';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import type { Subtopic } from '../../types';

// Subtopics with real lesson content wired up so far
const availableSubtopicIds = new Set(['9-1.4-properties', '9-1.4-viruses']);

function SubtopicCard({ subtopic }: { subtopic: Subtopic }) {
  const available = availableSubtopicIds.has(subtopic.id);
  return (
    <TouchableOpacity
      style={styles.subtopicCard}
      onPress={() => router.push(`/learn/lesson/${subtopic.id}`)}
      activeOpacity={0.85}
    >
      <View style={styles.subtopicNumber}>
        <Text style={styles.subtopicNumberText}>{subtopic.orderIndex}</Text>
      </View>
      <Text style={styles.subtopicTitle}>{subtopic.title}</Text>
      {available ? (
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      ) : (
        <View style={styles.comingSoonBadge}>
          <Text style={styles.comingSoonText}>Yakında</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function TopicScreen() {
  const { topicId } = useLocalSearchParams<{ topicId: string }>();

  let theme, topic;
  for (const t of grade9Curriculum) {
    const found = t.topics.find((tp) => tp.id === topicId);
    if (found) {
      theme = t;
      topic = found;
      break;
    }
  }

  if (!topic || !theme) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Konu bulunamadı.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gradeHeader}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtnHeader}>
          <Ionicons name="arrow-back" size={22} color={colors.textInverse} />
        </TouchableOpacity>
        <Text style={styles.gradeSub}>9. Sınıf · Tema {theme.orderIndex}: {theme.title}</Text>
        <Text style={styles.gradeTitle}>{topic.title}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {topic.subtopics.map((subtopic) => (
          <SubtopicCard key={subtopic.id} subtopic={subtopic} />
        ))}
        <View style={{ height: spacing['3xl'] }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
  },
  backBtn: { padding: spacing.xs },

  gradeHeader: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.lg,
  },
  backBtnHeader: {
    marginBottom: spacing.sm,
    alignSelf: 'flex-start',
  },
  gradeTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
    marginTop: 4,
  },
  gradeSub: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255,255,255,0.7)',
  },

  scroll: {
    padding: spacing.base,
    gap: spacing.xs,
  },

  subtopicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.base,
    gap: spacing.md,
    marginBottom: spacing.xs,
    ...shadows.sm,
  },
  subtopicNumber: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtopicNumberText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  subtopicTitle: {
    flex: 1,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  comingSoonBadge: {
    backgroundColor: colors.surfaceSecondary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.sm,
  },
  comingSoonText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.textMuted,
  },

  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: typography.fontSize.base,
    color: colors.textMuted,
  },
});
