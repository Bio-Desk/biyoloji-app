import { addDays, format, parseISO, isToday, isBefore } from 'date-fns';
import type { MemoryRecord } from '../types';

// SM-2 Algorithm — adapted for BiyoMap
// quality: 0 = blackout, 1 = wrong, 2 = wrong (familiar), 3 = correct (hard), 4 = correct, 5 = perfect

export function calculateNextReview(record: MemoryRecord, quality: number): MemoryRecord {
  const today = new Date();
  let { easinessFactor, intervalDays, repetitions } = record;

  if (quality < 3) {
    // Failed — reset
    repetitions = 0;
    intervalDays = 1;
  } else {
    // Passed
    if (repetitions === 0) {
      intervalDays = 1;
    } else if (repetitions === 1) {
      intervalDays = 3;
    } else if (repetitions === 2) {
      intervalDays = 7;
    } else if (repetitions === 3) {
      intervalDays = 21;
    } else {
      intervalDays = Math.round(intervalDays * easinessFactor);
    }

    easinessFactor = easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    easinessFactor = Math.max(1.3, easinessFactor);
    repetitions += 1;
  }

  return {
    ...record,
    easinessFactor,
    intervalDays,
    repetitions,
    nextReviewDate: format(addDays(today, intervalDays), 'yyyy-MM-dd'),
    lastQuality: quality,
  };
}

export function createMemoryRecord(
  userId: string,
  itemId: string,
  itemType: 'flashcard' | 'question'
): MemoryRecord {
  return {
    id: `${userId}-${itemId}`,
    userId,
    itemId,
    itemType,
    easinessFactor: 2.5,
    intervalDays: 1,
    repetitions: 0,
    nextReviewDate: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    lastQuality: 0,
  };
}

// Convert quiz score (0-100) to SM-2 quality (0-5)
export function scoreToQuality(scorePercent: number): number {
  if (scorePercent >= 90) return 5;
  if (scorePercent >= 75) return 4;
  if (scorePercent >= 60) return 3;
  if (scorePercent >= 40) return 2;
  if (scorePercent >= 20) return 1;
  return 0;
}

// Get items due for review today
export function getDueItems(records: MemoryRecord[]): MemoryRecord[] {
  const today = new Date();
  return records
    .filter((r) => {
      const reviewDate = parseISO(r.nextReviewDate);
      return isToday(reviewDate) || isBefore(reviewDate, today);
    })
    .sort((a, b) => {
      // Overdue items first
      const aDate = parseISO(a.nextReviewDate);
      const bDate = parseISO(b.nextReviewDate);
      return aDate.getTime() - bDate.getTime();
    });
}

// Priority queue: overdue → due today → new
export function buildRevisionQueue(
  records: MemoryRecord[],
  maxItems = 20
): MemoryRecord[] {
  const today = new Date();
  const overdue: MemoryRecord[] = [];
  const dueToday: MemoryRecord[] = [];

  for (const r of records) {
    const reviewDate = parseISO(r.nextReviewDate);
    if (isBefore(reviewDate, today) && !isToday(reviewDate)) {
      overdue.push(r);
    } else if (isToday(reviewDate)) {
      dueToday.push(r);
    }
  }

  return [...overdue, ...dueToday].slice(0, maxItems);
}
