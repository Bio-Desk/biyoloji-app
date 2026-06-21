import { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDay,
  addMonths,
  subMonths,
  isSameMonth,
  isToday,
} from 'date-fns';
import { useAccessibleTheme } from '../hooks/useAccessibleTheme';

const WEEKDAY_LABELS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

interface ReviewCalendarProps {
  reviewCounts: Record<string, number>;
}

export function ReviewCalendar({ reviewCounts }: ReviewCalendarProps) {
  const { colors, typography, spacing, radius } = useAccessibleTheme();
  const [month, setMonth] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const days = useMemo(() => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const all = eachDayOfInterval({ start, end });

    // Pazartesi başlangıçlı haftalar için baştaki boşlukları hesapla
    const leadingBlanks = (getDay(start) + 6) % 7;
    return { leadingBlanks, all };
  }, [month]);

  const selectedCount = selectedDate ? reviewCounts[selectedDate] ?? 0 : 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderRadius: radius.lg }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMonth((m) => subMonths(m, 1))} style={styles.navButton}>
          <Ionicons name="chevron-back" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.bold,
            color: colors.textPrimary,
          }}
        >
          {format(month, 'MMMM yyyy')}
        </Text>
        <TouchableOpacity onPress={() => setMonth((m) => addMonths(m, 1))} style={styles.navButton}>
          <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        {WEEKDAY_LABELS.map((label) => (
          <Text
            key={label}
            style={[styles.weekLabel, { color: colors.textMuted, fontSize: typography.fontSize.xs }]}
          >
            {label}
          </Text>
        ))}
      </View>

      <View style={styles.grid}>
        {Array.from({ length: days.leadingBlanks }).map((_, i) => (
          <View key={`blank-${i}`} style={styles.cell} />
        ))}
        {days.all.map((day) => {
          const dateKey = format(day, 'yyyy-MM-dd');
          const count = reviewCounts[dateKey] ?? 0;
          const selected = selectedDate === dateKey;
          const today = isToday(day);

          return (
            <TouchableOpacity
              key={dateKey}
              style={styles.cell}
              onPress={() => setSelectedDate((d) => (d === dateKey ? null : dateKey))}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.dayCircle,
                  { borderRadius: radius.full },
                  today && { borderWidth: 1, borderColor: colors.primary },
                  selected && { backgroundColor: colors.primary },
                ]}
              >
                <Text
                  style={{
                    fontSize: typography.fontSize.sm,
                    color: selected ? colors.textInverse : colors.textPrimary,
                    fontWeight: today ? typography.fontWeight.bold : typography.fontWeight.regular,
                  }}
                >
                  {format(day, 'd')}
                </Text>
              </View>
              {count > 0 && (
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: selected ? colors.textInverse : colors.accent },
                  ]}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {selectedDate && (
        <View style={[styles.detail, { borderTopColor: colors.border }]}>
          <Ionicons
            name={selectedCount > 0 ? 'reload-circle' : 'checkmark-circle-outline'}
            size={18}
            color={selectedCount > 0 ? colors.accent : colors.success}
          />
          <Text style={{ fontSize: typography.fontSize.sm, color: colors.textSecondary, marginLeft: spacing.xs }}>
            {format(new Date(selectedDate), 'd MMMM')}:{' '}
            {selectedCount > 0 ? `${selectedCount} tekrar planlandı` : 'Planlanan tekrar yok'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  navButton: { padding: 4 },
  weekRow: { flexDirection: 'row', marginBottom: 4 },
  weekLabel: { flex: 1, textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  cell: { width: `${100 / 7}%`, alignItems: 'center', paddingVertical: 4 },
  dayCircle: { width: 28, height: 28, alignItems: 'center', justifyContent: 'center' },
  dot: { width: 5, height: 5, borderRadius: 3, marginTop: 2 },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    marginTop: 12,
    paddingTop: 12,
  },
});
