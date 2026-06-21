import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  getAllLearningOutcomeCoverage,
  getIncompleteOutcomes,
  type CoverageStatus,
  type LearningOutcomeCoverage,
} from '../../features/contentCoverage/contentCoverageSelectors';
import {
  getRegistryValidationSummary,
  validateRegistry,
  type RegistryValidationIssue,
} from '../../features/contentCoverage/registryValidation';
import { colors, radius, shadows, spacing, typography } from '../../lib/theme';

const statusLabels: Record<CoverageStatus, string> = {
  available: 'available',
  missing: 'missing',
  placeholder: 'placeholder',
  invalid: 'invalid',
};

function getStatusStyle(status: CoverageStatus) {
  if (status === 'available') return styles.statusAvailable;
  if (status === 'placeholder') return styles.statusPlaceholder;
  if (status === 'invalid') return styles.statusInvalid;
  return styles.statusMissing;
}

function getIssueStyle(issue: RegistryValidationIssue) {
  if (issue.severity === 'error') return styles.issueError;
  if (issue.severity === 'warning') return styles.issueWarning;
  return styles.issueInfo;
}

function getMissingCount(
  coverage: LearningOutcomeCoverage[],
  contentType: 'lesson' | 'infographic' | 'flashcard' | 'quiz'
) {
  return coverage.filter((item) => item[contentType].status !== 'available').length;
}

export default function COSReportScreen() {
  const allCoverage = getAllLearningOutcomeCoverage();
  const incompleteOutcomes = getIncompleteOutcomes();
  const validationReport = validateRegistry();
  const validationSummary = getRegistryValidationSummary(validationReport);
  const completeOutcomes = allCoverage.filter((item) => item.complete).length;
  const incompletePreview = incompleteOutcomes.slice(0, 50);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>COS Raporu</Text>
          <Text style={styles.subtitle}>İçerik kapsama ve registry doğrulama</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Coverage Summary</Text>
          <View style={styles.metricGrid}>
            <MetricCard label="Total Outcomes" value={allCoverage.length} />
            <MetricCard label="Complete Outcomes" value={completeOutcomes} />
            <MetricCard label="Incomplete Outcomes" value={incompleteOutcomes.length} />
            <MetricCard label="Missing Lesson" value={getMissingCount(allCoverage, 'lesson')} />
            <MetricCard label="Missing Infographic" value={getMissingCount(allCoverage, 'infographic')} />
            <MetricCard label="Missing Flashcard" value={getMissingCount(allCoverage, 'flashcard')} />
            <MetricCard label="Missing Quiz" value={getMissingCount(allCoverage, 'quiz')} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Registry Validation Summary</Text>
          <View style={styles.card}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Durum</Text>
              <Text style={[styles.summaryValue, validationSummary.isValid ? styles.validText : styles.invalidText]}>
                {validationSummary.isValid ? 'valid' : 'invalid'}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.metricGrid}>
              <MetricCard label="Errors" value={validationSummary.errorCount} />
              <MetricCard label="Warnings" value={validationSummary.warningCount} />
              <MetricCard label="Info" value={validationSummary.infoCount} />
              <MetricCard label="Total Issues" value={validationSummary.totalIssues} />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Incomplete Outcomes</Text>
          {incompletePreview.length > 0 ? (
            incompletePreview.map((item) => (
              <View key={item.outcomeId} style={styles.card}>
                <Text style={styles.code}>{item.code}</Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.metaText}>{item.unitTitle}</Text>
                <View style={styles.statusGrid}>
                  <StatusPill label="Lesson" status={item.lesson.status} />
                  <StatusPill label="Infographic" status={item.infographic.status} />
                  <StatusPill label="Flashcard" status={item.flashcard.status} />
                  <StatusPill label="Quiz" status={item.quiz.status} />
                </View>
              </View>
            ))
          ) : (
            <View style={styles.card}>
              <Text style={styles.emptyText}>Eksik kazanım bulunmuyor.</Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Validation Issues</Text>
          {validationReport.issues.length > 0 ? (
            validationReport.issues.map((issue) => (
              <View key={issue.id} style={[styles.card, getIssueStyle(issue)]}>
                <View style={styles.issueHeader}>
                  <Text style={styles.issueSeverity}>{issue.severity}</Text>
                  <Text style={styles.issueCategory}>{issue.category}</Text>
                </View>
                <Text style={styles.cardTitle}>{issue.code}</Text>
                <Text style={styles.bodyText}>{issue.message}</Text>
                <IssueMeta label="outcomeId" value={issue.outcomeId} />
                <IssueMeta label="contentRefId" value={issue.contentRefId} />
                <IssueMeta label="contentId" value={issue.contentId} />
                <IssueMeta label="questionId" value={issue.questionId} />
              </View>
            ))
          ) : (
            <View style={styles.card}>
              <Text style={styles.emptyText}>Registry validation issue bulunmuyor.</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

function StatusPill({ label, status }: { label: string; status: CoverageStatus }) {
  return (
    <View style={[styles.statusPill, getStatusStyle(status)]}>
      <Text style={styles.statusLabel}>{label}</Text>
      <Text style={styles.statusText}>{statusLabels[status]}</Text>
    </View>
  );
}

function IssueMeta({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <Text style={styles.issueMeta}>
      {label}: {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    padding: spacing.base,
    paddingBottom: spacing['3xl'],
  },
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: 4,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  metricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  metricCard: {
    width: '48%',
    minHeight: 78,
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.sm,
    ...shadows.sm,
  },
  metricValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  metricLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    marginTop: 4,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  summaryValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
  },
  validText: {
    color: colors.success,
  },
  invalidText: {
    color: colors.error,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  code: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  metaText: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    marginTop: 4,
  },
  statusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  statusPill: {
    minWidth: '48%',
    borderRadius: radius.md,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  statusAvailable: {
    backgroundColor: colors.successLight,
  },
  statusMissing: {
    backgroundColor: colors.errorLight,
  },
  statusPlaceholder: {
    backgroundColor: colors.warningLight,
  },
  statusInvalid: {
    backgroundColor: colors.errorLight,
  },
  statusLabel: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  statusText: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    marginTop: 2,
  },
  issueHeader: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  issueSeverity: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  issueCategory: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
  },
  issueError: {
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
  },
  issueWarning: {
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
  },
  issueInfo: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  bodyText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed,
    marginTop: spacing.xs,
  },
  issueMeta: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    marginTop: 4,
  },
  emptyText: {
    fontSize: typography.fontSize.sm,
    color: colors.textMuted,
  },
});
