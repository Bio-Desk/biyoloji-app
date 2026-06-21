import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, typography, spacing, radius, shadows } from '../../lib/theme';
import { useQuizStore } from './useQuizStore';
import { grade9SeedQuestions } from '../../data/questions/grade9-seed';
import type { GradeLevel } from '../../types';

type QuizGrade = 9 | 10;

export default function QuizConfigScreen() {
  const [selectedGrade, setSelectedGrade] = useState<QuizGrade>(9);
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'all'>('all');
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [showNumModal, setShowNumModal] = useState(false);

  const initializeSession = useQuizStore(s => s.initializeSession);

  // Filter questions based on selected criteria
  const getFilteredQuestions = () => {
    let filtered = grade9SeedQuestions.filter(q => q.gradeLevel === selectedGrade);
    if (difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }
    // Shuffle and limit to requested number
    filtered = filtered.sort(() => Math.random() - 0.5).slice(0, numQuestions);
    return filtered;
  };

  const startQuiz = () => {
    const questions = getFilteredQuestions();
    if (questions.length === 0) {
      alert('Seçili kriterlerle soru bulunamadı.');
      return;
    }
    initializeSession(
      { gradeLevel: selectedGrade, numQuestions, difficulty },
      questions
    );
    router.push({ pathname: '/attempt' } as any);
  };

  const gradeOptions = [9, 10] as const;
  const difficultyOptions = [
    { label: 'Tümü', value: 'all' },
    { label: 'Kolay', value: 'easy' },
    { label: 'Orta', value: 'medium' },
    { label: 'Zor', value: 'hard' },
  ];
  const numOptions = [3, 5, 10, 15];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={colors.textInverse} />
          </TouchableOpacity>
          <View style={{ flex: 1, marginLeft: spacing.base }}>
            <Text style={styles.headerTitle}>Yeni Quiz Başlat</Text>
            <Text style={styles.headerSub}>Seçenekleri özelleştir</Text>
          </View>
        </View>

        {/* Grade Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sınıf Seçin</Text>
          <View style={styles.buttonGroup}>
            {gradeOptions.map(grade => (
              <TouchableOpacity
                key={grade}
                style={[
                  styles.groupButton,
                  selectedGrade === grade && styles.groupButtonActive,
                ]}
                onPress={() => setSelectedGrade(grade)}
              >
                <Text
                  style={[
                    styles.groupButtonText,
                    selectedGrade === grade && styles.groupButtonTextActive,
                  ]}
                >
                  Sınıf {grade}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Difficulty Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Zorluk Seviyesi</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setShowDifficultyModal(true)}
          >
            <Ionicons name="chevron-down" size={20} color={colors.textSecondary} />
            <Text style={styles.selectButtonText}>
              {difficultyOptions.find(o => o.value === difficulty)?.label || 'Seç'}
            </Text>
          </TouchableOpacity>
          <Modal visible={showDifficultyModal} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Zorluk Seviyesi</Text>
                <FlatList
                  data={difficultyOptions}
                  keyExtractor={item => item.value}
                  scrollEnabled={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.modalOption}
                      onPress={() => {
                        setDifficulty(item.value as any);
                        setShowDifficultyModal(false);
                      }}
                    >
                      <Text style={styles.modalOptionText}>{item.label}</Text>
                      {difficulty === item.value && (
                        <Ionicons name="checkmark" size={20} color={colors.primary} />
                      )}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        </View>

        {/* Number of Questions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soru Sayısı</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setShowNumModal(true)}
          >
            <Ionicons name="chevron-down" size={20} color={colors.textSecondary} />
            <Text style={styles.selectButtonText}>{numQuestions} soru</Text>
          </TouchableOpacity>
          <Modal visible={showNumModal} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Soru Sayısını Seçin</Text>
                <FlatList
                  data={numOptions}
                  keyExtractor={item => item.toString()}
                  scrollEnabled={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.modalOption}
                      onPress={() => {
                        setNumQuestions(item);
                        setShowNumModal(false);
                      }}
                    >
                      <Text style={styles.modalOptionText}>{item} soru</Text>
                      {numQuestions === item && (
                        <Ionicons name="checkmark" size={20} color={colors.primary} />
                      )}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        </View>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Ionicons name="book" size={24} color={colors.primary} />
            <View style={{ flex: 1, marginLeft: spacing.md }}>
              <Text style={styles.summaryLabel}>Quiz Özeti</Text>
              <Text style={styles.summaryValue}>
                {selectedGrade}. Sınıf · {numQuestions} soru · {difficulty === 'all' ? 'Tüm zorluklar' : `${difficulty} zorluk`}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Start Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={startQuiz}
          activeOpacity={0.85}
        >
          <Ionicons name="play" size={22} color={colors.textInverse} />
          <Text style={styles.startButtonText}>Quiz'i Başlat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing['3xl'],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    marginHorizontal: -spacing.base,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.lg,
    marginBottom: spacing.lg,
  },
  headerTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
  },
  headerSub: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  groupButton: {
    flex: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
  },
  groupButtonActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryMuted,
  },
  groupButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  groupButtonTextActive: {
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
  },
  selectButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  selectButtonText: {
    flex: 1,
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.medium,
  },
  summaryCard: {
    backgroundColor: colors.primaryMuted,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginTop: spacing.xl,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textSecondary,
  },
  summaryValue: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginTop: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.base,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  startButtonText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  modalTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    paddingHorizontal: spacing.base,
    marginBottom: spacing.md,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalOptionText: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
  },
});
