import { useState, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Dimensions, Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {
  layers_9_1_4_properties,
  flashcards_9_1_4_properties,
  layers_9_1_4_viruses,
  flashcards_9_1_4_viruses,
} from '../../../data/grade9/topic-1.4-content';
import { colors, typography, spacing, radius, shadows, layerColors, layerTitles } from '../../../lib/theme';
import type { LessonLayer, Flashcard, LayerType } from '../../../types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Content registry — will be replaced by DB query
const contentRegistry: Record<string, { layers: LessonLayer[]; flashcards: Flashcard[] }> = {
  '9-1.4-properties': { layers: layers_9_1_4_properties, flashcards: flashcards_9_1_4_properties },
  '9-1.4-viruses': { layers: layers_9_1_4_viruses, flashcards: flashcards_9_1_4_viruses },
};

const subtopicTitles: Record<string, string> = {
  '9-1.4-properties': 'Canlıların Temel Özellikleri',
  '9-1.4-viruses': 'Virüsler',
};

// Infographic registry — Metro needs static require() paths, so layers
// reference these by key via contentJson.svgData
const infographicRegistry: Record<string, ReturnType<typeof require>> = {
  'tyt-canlilarin-ortak-ozellikleri': require('../../../../assets/infographics/tyt/01_CANLILARIN ORTAK ÖZELLİĞİ/01.canlıların ortak özellikleri.png'),
};

// ── Highlight Box ─────────────────────────────────────────────
function HighlightBox({ type, text }: { type: string; text: string }) {
  const icons: Record<string, string> = {
    warning: 'warning',
    tip: 'bulb',
    important: 'alert-circle',
    example: 'leaf',
  };
  const colors_map = layerColors;

  return (
    <View style={[
      styles.highlightBox,
      {
        backgroundColor: layerColors[type]?.bg || '#F0FDF4',
        borderLeftColor: layerColors[type]?.border || colors.primary,
      },
    ]}>
      <Ionicons
        name={icons[type] as any || 'information-circle'}
        size={16}
        color={layerColors[type]?.text || colors.primary}
        style={{ marginTop: 2 }}
      />
      <Text style={[styles.highlightText, { color: layerColors[type]?.text || colors.textPrimary }]}>
        {text}
      </Text>
    </View>
  );
}

// ── Layer Renderer ────────────────────────────────────────────
function LayerCard({ layer }: { layer: LessonLayer }) {
  const theme = layerColors[layer.layerType] || layerColors['concept'];
  const title = layerTitles[layer.layerType] || layer.layerType;

  if (layer.contentJson.body === 'MINI_QUIZ_PLACEHOLDER' ||
      layer.contentJson.body === 'ASSESSMENT_PLACEHOLDER') {
    return (
      <View style={[styles.layerCard, { borderTopColor: theme.border }]}>
        <Text style={[styles.layerLabel, { color: theme.text, backgroundColor: theme.bg }]}>
          {title}
        </Text>
        <View style={styles.placeholderBox}>
          <Ionicons name="construct-outline" size={24} color={colors.textMuted} />
          <Text style={styles.placeholderText}>
            Soru bankası Aşama 3'te eklenecek
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.layerCard, { borderTopColor: theme.border }]}>
      {/* Layer title badge */}
      <View style={[styles.layerBadge, { backgroundColor: theme.bg }]}>
        <Text style={[styles.layerLabel, { color: theme.text }]}>{title}</Text>
      </View>

      {/* Body text */}
      {!!layer.contentJson.body && (
        <Text style={styles.layerBody}>{layer.contentJson.body}</Text>
      )}

      {/* Infographic (visual layer) */}
      {layer.contentJson.svgData && infographicRegistry[layer.contentJson.svgData] && (
        <Image
          source={infographicRegistry[layer.contentJson.svgData]}
          style={styles.infographicImage}
          resizeMode="contain"
        />
      )}

      {/* Steps (process layer) */}
      {layer.contentJson.steps?.map((step, i) => (
        <View key={i} style={styles.stepRow}>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}

      {/* TYT / AYT patterns */}
      {layer.contentJson.tytPattern && (
        <View style={styles.examBox}>
          <Text style={styles.examBoxLabel}>TYT Soru Kalıbı</Text>
          <Text style={styles.examBoxText}>{layer.contentJson.tytPattern}</Text>
        </View>
      )}
      {layer.contentJson.aytPattern && (
        <View style={[styles.examBox, { backgroundColor: '#EBF4FF', borderColor: colors.info }]}>
          <Text style={[styles.examBoxLabel, { color: colors.info }]}>AYT Soru Kalıbı</Text>
          <Text style={styles.examBoxText}>{layer.contentJson.aytPattern}</Text>
        </View>
      )}

      {/* Highlight boxes */}
      {layer.contentJson.highlightBoxes?.map((box, i) => (
        <HighlightBox key={i} type={box.type} text={box.text} />
      ))}
    </View>
  );
}

// ── Flashcard Component ───────────────────────────────────────
function FlashcardView({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];

  return (
    <View style={styles.flashcardSection}>
      <View style={[styles.layerBadge, { backgroundColor: layerColors['terms'].bg, marginBottom: spacing.md }]}>
        <Text style={[styles.layerLabel, { color: layerColors['terms'].text }]}>
          4. Anahtar Terimler — Flashcard Modu
        </Text>
      </View>

      <TouchableOpacity
        style={styles.flashcard}
        onPress={() => setFlipped(!flipped)}
        activeOpacity={0.9}
      >
        <Text style={styles.flashcardHint}>{flipped ? 'Tanım' : 'Terim'} · Çevirmek için dokun</Text>
        <Text style={styles.flashcardMain}>
          {flipped ? card.definition : card.term}
        </Text>
        {flipped && card.example && (
          <Text style={styles.flashcardExample}>Örnek: {card.example}</Text>
        )}
      </TouchableOpacity>

      <View style={styles.flashcardNav}>
        <TouchableOpacity
          onPress={() => { setIndex(Math.max(0, index - 1)); setFlipped(false); }}
          disabled={index === 0}
          style={[styles.navBtn, index === 0 && { opacity: 0.3 }]}
        >
          <Ionicons name="chevron-back" size={20} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.flashcardCounter}>{index + 1} / {cards.length}</Text>
        <TouchableOpacity
          onPress={() => { setIndex(Math.min(cards.length - 1, index + 1)); setFlipped(false); }}
          disabled={index === cards.length - 1}
          style={[styles.navBtn, index === cards.length - 1 && { opacity: 0.3 }]}
        >
          <Ionicons name="chevron-forward" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ── Main Screen ───────────────────────────────────────────────
export default function LessonScreen() {
  const { subtopicId } = useLocalSearchParams<{ subtopicId: string }>();
  const content = contentRegistry[subtopicId];

  if (!content) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>İçerik henüz eklenmedi.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const title = subtopicTitles[subtopicId] || subtopicId;

  // Separate out terms layer (shown as flashcards) and others
  const regularLayers = content.layers.filter((l) => l.layerType !== 'terms');

  return (
    <SafeAreaView style={styles.container}>

      {/* Custom header */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.topBarLabel}>9. Sınıf · Tema 1 · Konu 1.4</Text>
          <Text style={styles.topBarTitle} numberOfLines={1}>{title}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* Layer cards 1, 2, 3 */}
        {regularLayers.filter((l) => l.orderIndex <= 3).map((layer) => (
          <LayerCard key={layer.id} layer={layer} />
        ))}

        {/* Flashcards (terms layer) */}
        {content.flashcards.length > 0 && (
          <FlashcardView cards={content.flashcards} />
        )}

        {/* Layer cards 5–9 */}
        {regularLayers.filter((l) => l.orderIndex > 3).map((layer) => (
          <LayerCard key={layer.id} layer={layer} />
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
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: spacing.md,
  },
  backBtn: { padding: 4 },
  topBarLabel: { fontSize: typography.fontSize.xs, color: colors.textMuted },
  topBarTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  scroll: { padding: spacing.base },

  layerCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.md,
    borderTopWidth: 3,
    ...shadows.sm,
  },
  layerBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.sm,
    marginBottom: spacing.md,
  },
  layerLabel: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
  },
  layerBody: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },

  infographicImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: radius.md,
    marginTop: spacing.md,
    backgroundColor: colors.surface,
  },

  stepRow: {
    marginBottom: spacing.md,
  },
  stepText: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },

  examBox: {
    backgroundColor: '#FFF7ED',
    borderWidth: 1,
    borderColor: colors.warning,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  examBoxLabel: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.warning,
    marginBottom: 4,
  },
  examBoxText: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },

  highlightBox: {
    flexDirection: 'row',
    gap: spacing.sm,
    borderLeftWidth: 3,
    borderRadius: radius.sm,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  highlightText: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },

  placeholderBox: {
    alignItems: 'center',
    padding: spacing.xl,
    gap: spacing.sm,
  },
  placeholderText: {
    fontSize: typography.fontSize.sm,
    color: colors.textMuted,
    textAlign: 'center',
  },

  flashcardSection: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.md,
    borderTopWidth: 3,
    borderTopColor: layerColors['terms'].border,
    ...shadows.sm,
  },
  flashcard: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    minHeight: 160,
    justifyContent: 'center',
  },
  flashcardHint: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  flashcardMain: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  flashcardExample: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
    fontStyle: 'italic',
  },
  flashcardNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
    gap: spacing.xl,
  },
  navBtn: {
    padding: spacing.sm,
    backgroundColor: colors.primaryMuted,
    borderRadius: radius.full,
  },
  flashcardCounter: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textSecondary,
  },

  emptyState: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { fontSize: typography.fontSize.base, color: colors.textMuted },
});
