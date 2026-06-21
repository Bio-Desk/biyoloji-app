import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from 'expo-router';
import { getLearningOutcomesByUnit, getUnit } from '../../data/learningModel';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import type { LearningOutcome } from '../../types';

function LearningOutcomeCard({ outcome }: { outcome: LearningOutcome }) {
  const [expanded, setExpanded] = useState(false);
  const outcomeRouteId = outcome.id ?? outcome.code;
  const openOutcomeDetail = () => {
    router.push({
      pathname: '/learn/outcome/[outcomeId]',
      params: { outcomeId: outcomeRouteId },
    } as any);
  };

  return (
    <View style={styles.subtopicCard}>
      <TouchableOpacity
        style={styles.subtopicHeader}
        onPress={() => setExpanded((e) => !e)}
        activeOpacity={0.85}
      >
        <View style={styles.subtopicNumber}>
          <Text style={styles.subtopicNumberText}>{outcome.orderIndex ?? 1}</Text>
        </View>
        <Text style={styles.subtopicTitle}>{outcome.title ?? outcome.code}</Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={colors.textMuted}
        />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.subtopicBody}>
          {/* Action buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={openOutcomeDetail}
              activeOpacity={0.85}
            >
              <Ionicons name="book-outline" size={16} color={colors.primary} />
              <Text style={styles.actionBtnText}>Oku</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={openOutcomeDetail}
              activeOpacity={0.85}
            >
              <Ionicons name="create-outline" size={16} color={colors.primary} />
              <Text style={styles.actionBtnText}>Alıştırma yap</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={openOutcomeDetail}
              activeOpacity={0.85}
            >
              <Ionicons name="reload-outline" size={16} color={colors.primary} />
              <Text style={styles.actionBtnText}>Tekrar et</Text>
            </TouchableOpacity>
          </View>

          {/* Kazanımlar */}
          <View style={styles.outcomesSection}>
            <Text style={styles.outcomesTitle}>Kazanım</Text>
            <View style={styles.outcomeRow}>
              <Text style={styles.outcomeCode}>{outcome.code}</Text>
              <Text style={styles.outcomeText}>{outcome.text}</Text>
              <View style={styles.examTagsRow}>
                {outcome.examRelevance.map((tag) => (
                  <View key={tag} style={styles.examTag}>
                    <Text style={styles.examTagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default function TopicScreen() {
  const { topicId } = useLocalSearchParams<{ topicId: string }>();
  const unit = getUnit(topicId);
  const learningOutcomes = getLearningOutcomesByUnit(topicId);

  if (!unit) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/learn'))} style={styles.backBtn}>
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
        <TouchableOpacity onPress={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/learn'))} style={styles.backBtnHeader}>
          <Ionicons name="arrow-back" size={22} color={colors.textInverse} />
        </TouchableOpacity>
        <Text style={styles.gradeSub}>{unit.gradeLevel}. Sınıf · {unit.examTypeId}</Text>
        <Text style={styles.gradeTitle}>{unit.title}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {learningOutcomes.map((outcome) => (
          <LearningOutcomeCard key={outcome.id ?? outcome.code} outcome={outcome} />
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
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginBottom: spacing.xs,
    ...shadows.sm,
  },
  subtopicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.base,
    gap: spacing.md,
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

  subtopicBody: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.base,
  },

  actionRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.primaryMuted,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  actionBtnDisabled: {
    backgroundColor: colors.surfaceSecondary,
  },
  actionBtnText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
  },

  outcomesSection: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },
  outcomesTitle: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  outcomeRow: {
    marginBottom: spacing.sm,
  },
  outcomeCode: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    marginBottom: 2,
  },
  outcomeText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  examTagsRow: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  examTag: {
    backgroundColor: colors.surfaceSecondary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  examTagText: {
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
