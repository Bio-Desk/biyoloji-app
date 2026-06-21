import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getExamTypes, getGrades, getSubject, getUnits } from '../../data/learningModel';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import type { Difficulty, ExamType, ExamTypeId, Grade, Unit } from '../../types';

const SUBJECT_ID = 'biology';
const DEFAULT_EXAM_TYPE_ID: ExamTypeId = 'TYT';

const difficultyLabel = { easy: 'Kolay', medium: 'Orta', hard: 'Zor' };
const difficultyColor = {
  easy: colors.success,
  medium: colors.warning,
  hard: colors.error,
};

function getExamTypeLabel(examType: ExamType) {
  const gradeLevels = examType.grades.map((grade) => grade.level).join('-');
  return `${examType.title} (${gradeLevels}. Sınıf)`;
}

function UnitCard({ unit }: { unit: Unit }) {
  const estimatedMinutes = 20;
  const difficulty: Difficulty = 'medium';

  return (
    <TouchableOpacity
      style={styles.topicCard}
      onPress={() => router.push({ pathname: '/learn/[topicId]', params: { topicId: unit.id } })}
      activeOpacity={0.85}
    >
      <View style={styles.topicLeft}>
        <View style={styles.topicNumber}>
          <Text style={styles.topicNumberText}>{unit.orderIndex}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.topicTitle}>{unit.title}</Text>
          <View style={styles.topicMeta}>
            <Ionicons name="time-outline" size={12} color={colors.textMuted} />
            <Text style={styles.topicMetaText}>{estimatedMinutes} dk</Text>
            <View style={[styles.difficultyDot, { backgroundColor: difficultyColor[difficulty] }]} />
            <Text style={[styles.difficultyText, { color: difficultyColor[difficulty] }]}>
              {difficultyLabel[difficulty]}
            </Text>
          </View>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
    </TouchableOpacity>
  );
}

export default function LearnScreen() {
  const subject = getSubject(SUBJECT_ID);
  const examTypes = getExamTypes(SUBJECT_ID);
  const [activeSection, setActiveSection] = useState<ExamTypeId>(DEFAULT_EXAM_TYPE_ID);
  const section = examTypes.find((examType) => examType.id === activeSection) ?? examTypes[0];
  const grades = section ? getGrades(SUBJECT_ID, section.id) : [];
  const unitCount = grades.reduce((sum, grade) => sum + getUnits(SUBJECT_ID, section.id, grade.level).length, 0);

  return (
    <SafeAreaView style={styles.container}>

      {/* Grade Header */}
      <View style={styles.gradeHeader}>
        <Text style={styles.gradeTitle}>9. Sınıf {subject?.title ?? 'Biyoloji'}</Text>
        <Text style={styles.gradeSub}>MEB Müfredatı · {grades.length} Sınıf · {unitCount} Konu</Text>
      </View>

      {/* TYT / AYT Switcher */}
      <View style={styles.switcher}>
        {examTypes.map((examType) => (
          <TouchableOpacity
            key={examType.id}
            style={[styles.switcherTab, activeSection === examType.id && styles.switcherTabActive]}
            onPress={() => setActiveSection(examType.id)}
            activeOpacity={0.85}
          >
            <Text style={[styles.switcherTabText, activeSection === examType.id && styles.switcherTabTextActive]}>
              {getExamTypeLabel(examType)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {!section || grades.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="construct-outline" size={32} color={colors.textMuted} />
            <Text style={styles.emptyText}>
              {section?.title ?? 'Bu bölüm'} konuları yakında eklenecek.
            </Text>
          </View>
        ) : (
          grades.map((grade: Grade) => {
            const units = getUnits(SUBJECT_ID, section.id, grade.level);
            if (units.length === 0) return null;

            return (
              <View key={grade.id}>
                <View style={styles.gradeBadgeRow}>
                  <Text style={styles.gradeBadgeText}>{grade.title}</Text>
                </View>

                <View style={styles.themeSection}>
                  <View style={styles.themeHeader}>
                    <Ionicons name="book-outline" size={20} color={colors.primary} />
                    <Text style={styles.themeTitle}>
                      {grade.title} Üniteleri
                    </Text>
                  </View>

                  <View style={styles.topicsContainer}>
                    {units.map((unit) => (
                      <UnitCard key={unit.id} unit={unit} />
                    ))}
                  </View>
                </View>
              </View>
            );
          })
        )}
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

  switcher: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceSecondary,
    margin: spacing.base,
    marginBottom: spacing.sm,
    borderRadius: radius.md,
    padding: 4,
    gap: 4,
  },
  switcherTab: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: radius.sm,
    alignItems: 'center',
  },
  switcherTabActive: {
    backgroundColor: colors.primary,
  },
  switcherTabText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textMuted,
  },
  switcherTabTextActive: {
    color: colors.textInverse,
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['3xl'],
    gap: spacing.sm,
  },
  emptyText: {
    fontSize: typography.fontSize.base,
    color: colors.textMuted,
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
  },

  gradeBadgeRow: {
    paddingHorizontal: spacing.base,
    marginTop: spacing.md,
  },
  gradeBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
    backgroundColor: colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.sm,
    overflow: 'hidden',
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