import { useState, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Dimensions, Image,
} from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {
  layers_9_1_1_intro,
  flashcards_9_1_1_intro,
} from '../../../data/grade9/topic-1.1-content';
import {
  layers_9_1_2_scientific_method,
  flashcards_9_1_2_scientific_method,
} from '../../../data/grade9/topic-1.2-content';
import {
  layers_9_1_3_ethics,
  flashcards_9_1_3_ethics,
} from '../../../data/grade9/topic-1.3-content';
import {
  layers_9_1_4_properties,
  flashcards_9_1_4_properties,
  layers_9_1_4_viruses,
  flashcards_9_1_4_viruses,
} from '../../../data/grade9/topic-1.4-content';
import {
  layers_9_1_5_classification,
  flashcards_9_1_5_classification,
} from '../../../data/grade9/topic-1.5-content';
import {
  layers_9_1_6_domains,
  flashcards_9_1_6_domains,
  layers_9_1_6_kingdoms,
  flashcards_9_1_6_kingdoms,
} from '../../../data/grade9/topic-1.6-content';
import {
  layers_9_1_7_biodiversity,
  flashcards_9_1_7_biodiversity,
} from '../../../data/grade9/topic-1.7-content';
import {
  layers_9_2_1_water,
  flashcards_9_2_1_water,
  layers_9_2_1_minerals,
  flashcards_9_2_1_minerals,
} from '../../../data/grade9/topic-2.1-content';
import {
  layers_9_2_2_carbs,
  flashcards_9_2_2_carbs,
  layers_9_2_2_lipids,
  flashcards_9_2_2_lipids,
  layers_9_2_2_proteins,
  flashcards_9_2_2_proteins,
  layers_9_2_2_nucleic,
  flashcards_9_2_2_nucleic,
  layers_9_2_2_vitamins,
  flashcards_9_2_2_vitamins,
} from '../../../data/grade9/topic-2.2-content';
import {
  layers_9_2_3_reagents,
  flashcards_9_2_3_reagents,
} from '../../../data/grade9/topic-2.3-content';
import {
  layers_9_2_4_enzyme,
  flashcards_9_2_4_enzyme,
} from '../../../data/grade9/topic-2.4-content';
import {
  layers_9_2_5_cell_types,
  flashcards_9_2_5_cell_types,
  layers_9_2_5_organelles,
  flashcards_9_2_5_organelles,
} from '../../../data/grade9/topic-2.5-content';
import {
  layers_9_2_6_transport,
  flashcards_9_2_6_transport,
} from '../../../data/grade9/topic-2.6-content';
import {
  layers_9_2_7_diffusion,
  flashcards_9_2_7_diffusion,
  layers_9_2_7_osmosis,
  flashcards_9_2_7_osmosis,
} from '../../../data/grade9/topic-2.7-content';
import {
  layers_9_2_8_organization,
  flashcards_9_2_8_organization,
} from '../../../data/grade9/topic-2.8-content';
import { grade9Curriculum } from '../../../data/grade9/curriculum';
import { grade10Curriculum } from '../../../data/grade10/curriculum';
import { grade11Curriculum } from '../../../data/grade11/curriculum';
import { grade12Curriculum } from '../../../data/grade12/curriculum';
import { colors, typography, spacing, radius, shadows, layerColors, layerTitles } from '../../../lib/theme';
import type { LessonLayer, Flashcard, LayerType } from '../../../types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Content registry — will be replaced by DB query
const contentRegistry: Record<string, { layers: LessonLayer[]; flashcards: Flashcard[] }> = {
  '9-1.1-intro': { layers: layers_9_1_1_intro, flashcards: flashcards_9_1_1_intro },
  '9-1.2-scientific-method': { layers: layers_9_1_2_scientific_method, flashcards: flashcards_9_1_2_scientific_method },
  '9-1.3-ethics': { layers: layers_9_1_3_ethics, flashcards: flashcards_9_1_3_ethics },
  '9-1.4-properties': { layers: layers_9_1_4_properties, flashcards: flashcards_9_1_4_properties },
  '9-1.4-viruses': { layers: layers_9_1_4_viruses, flashcards: flashcards_9_1_4_viruses },
  '9-1.5-classification': { layers: layers_9_1_5_classification, flashcards: flashcards_9_1_5_classification },
  '9-1.6-domains': { layers: layers_9_1_6_domains, flashcards: flashcards_9_1_6_domains },
  '9-1.6-kingdoms': { layers: layers_9_1_6_kingdoms, flashcards: flashcards_9_1_6_kingdoms },
  '9-1.7-biodiversity': { layers: layers_9_1_7_biodiversity, flashcards: flashcards_9_1_7_biodiversity },
  '9-2.1-water': { layers: layers_9_2_1_water, flashcards: flashcards_9_2_1_water },
  '9-2.1-minerals': { layers: layers_9_2_1_minerals, flashcards: flashcards_9_2_1_minerals },
  '9-2.2-carbs': { layers: layers_9_2_2_carbs, flashcards: flashcards_9_2_2_carbs },
  '9-2.2-lipids': { layers: layers_9_2_2_lipids, flashcards: flashcards_9_2_2_lipids },
  '9-2.2-proteins': { layers: layers_9_2_2_proteins, flashcards: flashcards_9_2_2_proteins },
  '9-2.2-nucleic': { layers: layers_9_2_2_nucleic, flashcards: flashcards_9_2_2_nucleic },
  '9-2.2-vitamins': { layers: layers_9_2_2_vitamins, flashcards: flashcards_9_2_2_vitamins },
  '9-2.3-reagents': { layers: layers_9_2_3_reagents, flashcards: flashcards_9_2_3_reagents },
  '9-2.4-enzyme': { layers: layers_9_2_4_enzyme, flashcards: flashcards_9_2_4_enzyme },
  '9-2.5-cell-types': { layers: layers_9_2_5_cell_types, flashcards: flashcards_9_2_5_cell_types },
  '9-2.5-organelles': { layers: layers_9_2_5_organelles, flashcards: flashcards_9_2_5_organelles },
  '9-2.6-transport': { layers: layers_9_2_6_transport, flashcards: flashcards_9_2_6_transport },
  '9-2.7-diffusion': { layers: layers_9_2_7_diffusion, flashcards: flashcards_9_2_7_diffusion },
  '9-2.7-osmosis': { layers: layers_9_2_7_osmosis, flashcards: flashcards_9_2_7_osmosis },
  '9-2.8-organization': { layers: layers_9_2_8_organization, flashcards: flashcards_9_2_8_organization },
};

const subtopicTitles: Record<string, string> = {
  '9-1.1-intro': 'Biyolojinin Tanımı ve Önemi',
  '9-1.2-scientific-method': 'Bilimsel Yöntem Basamakları',
  '9-1.3-ethics': 'Bilimsel Araştırmalar ve Etik',
  '9-1.4-properties': 'Canlıların Temel Özellikleri',
  '9-1.4-viruses': 'Virüsler',
  '9-1.5-classification': 'Modern Sınıflandırma Sistemi',
  '9-1.6-domains': 'Bacteria, Archaea ve Eukarya',
  '9-1.6-kingdoms': 'Ökaryotik Canlıların Sınıflandırılması',
  '9-1.7-biodiversity': 'Biyoçeşitlilik ve Korunması',
  '9-2.1-water': 'Suyun Yapısı ve Önemi',
  '9-2.1-minerals': 'Mineraller',
  '9-2.2-carbs': 'Karbohidratlar',
  '9-2.2-lipids': 'Lipitler',
  '9-2.2-proteins': 'Proteinler',
  '9-2.2-nucleic': 'Nükleik Asitler',
  '9-2.2-vitamins': 'Vitaminler',
  '9-2.3-reagents': 'Benedict, İyot, Biüret ve Sudan Ayıraçları',
  '9-2.4-enzyme': 'Enzim Aktivitesi ve Etki Eden Faktörler',
  '9-2.5-cell-types': 'Prokaryot ve Ökaryot Hücre',
  '9-2.5-organelles': 'Organeller ve Görevleri',
  '9-2.6-transport': 'Pasif ve Aktif Taşıma',
  '9-2.7-diffusion': 'Difüzyon',
  '9-2.7-osmosis': 'Ozmoz ve Hücre Davranışları',
  '9-2.8-organization': 'Organizasyon Düzeyleri',
};

// Locates a subtopic's theme/topic in the curriculum for the breadcrumb
const allCurricula = [
  ...grade9Curriculum,
  ...grade10Curriculum,
  ...grade11Curriculum,
  ...grade12Curriculum,
];

function getBreadcrumb(subtopicId: string): string {
  for (const theme of allCurricula) {
    for (const topic of theme.topics) {
      if (topic.subtopics.some((s) => s.id === subtopicId)) {
        const topicNumber = topic.id.split('-')[1];
        return `${theme.gradeLevel}. Sınıf · Tema ${theme.orderIndex} · Konu ${topicNumber}`;
      }
    }
  }
  return '';
}

// Locates a subtopic's parent topic id, used as a back-navigation fallback
function getTopicId(subtopicId: string): string | null {
  for (const theme of allCurricula) {
    for (const topic of theme.topics) {
      if (topic.subtopics.some((s) => s.id === subtopicId)) {
        return topic.id;
      }
    }
  }
  return null;
}

// Infographic registry — Metro needs static require() paths, so layers
// reference these by key via contentJson.svgData
const infographicRegistry: Record<string, ImageSourcePropType> = {
  'tyt-canlilarin-ortak-ozellikleri': require('../../../../assets/infographics/tyt/01_CANLILARIN ORTAK ÖZELLİĞİ/01.canlıların ortak özellikleri.png'),
  'tyt-organizasyon-duzeyleri': require('../../../../assets/infographics/tyt/01_CANLILARIN ORTAK ÖZELLİĞİ/02.canlılık ve organizasyon düzeyleri.png'),
  'tyt-biyolojinin-onemi': require('../../../../assets/infographics/tyt/BİYOLOJİNİN ÖNEMİ.png'),
  'tyt-bilimsel-yontem': require('../../../../assets/infographics/tyt/BİLİMSEL YÖNTEM BASAMAKLARI.png'),
  'tyt-virusler': require('../../../../assets/infographics/tyt/05_CANLILARIN SINIFLANDIRILMASI/virüsler.png'),
  'tyt-siniflandirma-giris': require('../../../../assets/infographics/tyt/05_CANLILARIN SINIFLANDIRILMASI/sınıflandırma giriş 1.png'),
  'tyt-ikili-adlandirma': require('../../../../assets/infographics/tyt/05_CANLILARIN SINIFLANDIRILMASI/ikili adlandırma.png'),
  'tyt-arkeler': require('../../../../assets/infographics/tyt/05_CANLILARIN SINIFLANDIRILMASI/Arkeler.png'),
  'tyt-protista-alemi': require('../../../../assets/infographics/tyt/05_CANLILARIN SINIFLANDIRILMASI/protista alemi.png'),
  'tyt-mantarlar-alemi': require('../../../../assets/infographics/tyt/05_CANLILARIN SINIFLANDIRILMASI/mantarlar alemi.png'),
  'tyt-damarli-bitkiler': require('../../../../assets/infographics/tyt/05_CANLILARIN SINIFLANDIRILMASI/damarlı bitkiler.png'),
  'tyt-biyolojik-cesitlilik': require('../../../../assets/infographics/tyt/09_GÜNCEL ÇEVRE SORUNLARI/Biyolojik Çeşitliliğin Yaşam İçin Önemi ve Korunması.png'),
  'tyt-inorganik-bilesikler-1': require('../../../../assets/infographics/tyt/İNORGANİK BİLEŞİKLER1.png'),
  'tyt-inorganik-bilesikler-2': require('../../../../assets/infographics/tyt/İNORGANİK BİLEŞİKLER2.png'),
  'tyt-karbonhidratlar': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/karbonhidratlar.png'),
  'tyt-lipitler': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/lipitler.png'),
  'tyt-proteinler': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/proteinler.png'),
  'tyt-nukleik-asitler': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/nükleik asitler.png'),
  'tyt-atp': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/atp.png'),
  'tyt-vitaminler': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/vitaminler.png'),
  'tyt-organik-molekul-ayiraclari': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/organik moleküllerin ayıraçları.png'),
  'tyt-enzimler': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/enzimler.png'),
  'tyt-katalaz-deneyi': require('../../../../assets/infographics/tyt/ORGANİK BİLEŞİKLER/katalaz aktivitesinin ölçümü deneyi.png'),
  'tyt-hucre-prokaryot-okaryot': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/hücre_prokaryot_ökaryot.png'),
  'tyt-organeller': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/organeller/organeller.png'),
  'tyt-mitokondri': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/organeller/mitokondri.png'),
  'tyt-endoplazmik-retikulum': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/organeller/endoplazmik retikulum.png'),
  'tyt-golgi': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/organeller/golgi.png'),
  'tyt-ribozom': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/organeller/ribozom.png'),
  'tyt-kloroplast': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/organeller/kloroplast.png'),
  'tyt-cekirdekcik': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/organeller/çekirdekçik.png'),
  'tyt-hucre-iskeleti': require('../../../../assets/infographics/tyt/03_HÜCRESEL YAPILAR VE GÖREVLERİ/organeller/hücre iskeleti.png'),
  'tyt-madde-gecisleri': require('../../../../assets/infographics/tyt/04_HÜCRE ZARINDAN MADDE GEÇİŞLERİ/hücre zarından madde geçişleri.png'),
  'tyt-egzositoz-endositoz': require('../../../../assets/infographics/tyt/04_HÜCRE ZARINDAN MADDE GEÇİŞLERİ/egzositoz ve endositoz.png'),
  'tyt-cozelti-osmoz': require('../../../../assets/infographics/tyt/04_HÜCRE ZARINDAN MADDE GEÇİŞLERİ/çözelti çeşitleri_osmoz.png'),
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

      {/* Infographic(s) (visual layer) */}
      {(Array.isArray(layer.contentJson.svgData) ? layer.contentJson.svgData : layer.contentJson.svgData ? [layer.contentJson.svgData] : [])
        .filter((key) => infographicRegistry[key])
        .map((key) => (
          <Image
            key={key}
            source={infographicRegistry[key]}
            style={styles.infographicImage}
            resizeMode="contain"
          />
        ))}

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

  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    const topicId = getTopicId(subtopicId);
    router.replace((topicId ? `/learn/${topicId}` : '/(tabs)/learn') as any);
  };

  if (!content) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={goBack} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity onPress={goBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.topBarLabel}>{getBreadcrumb(subtopicId)}</Text>
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


