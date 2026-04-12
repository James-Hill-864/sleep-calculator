/**
 * Sleep Calculator — Pure calculation functions.
 * No side effects. No DOM. No state.
 *
 * Core concept: one sleep cycle = 90 minutes.
 * Fall-asleep buffer = 15 minutes (applied to bedtime calculations only).
 */

const CYCLE_MINUTES = 90;
const FALL_ASLEEP_MINUTES = 15;

/**
 * Returns recommended number of cycles based on age group.
 * "teen" = 6 cycles preferred, "senior" = 5, "adult" = 5-6.
 */
export function getRecommendedCycles(ageGroup = 'adult') {
  switch (ageGroup) {
    case 'teen': return 6;
    case 'senior': return 5;
    default: return 5; // adult — 5 highlighted, 6 shown
  }
}

/**
 * Given a wake-up time, calculate bedtimes for 3-6 sleep cycles.
 * Applies 15-minute fall-asleep buffer.
 *
 * @param {number} wakeHour - 0-23
 * @param {number} wakeMinute - 0-59
 * @param {string} ageGroup - "teen" | "adult" | "senior"
 * @returns {Array<{time: {hour: number, minute: number}, cycles: number, totalHours: number, recommended: boolean}>}
 */
export function calculateBedtimes(wakeHour, wakeMinute, ageGroup = 'adult') {
  const recommended = getRecommendedCycles(ageGroup);
  const results = [];

  for (let cycles = 6; cycles >= 3; cycles--) {
    const sleepMinutes = cycles * CYCLE_MINUTES;
    const totalMinutesBack = sleepMinutes + FALL_ASLEEP_MINUTES;

    let bedHour = wakeHour;
    let bedMinute = wakeMinute - totalMinutesBack;

    // Normalize minutes and hours (handle underflow / midnight crossover)
    while (bedMinute < 0) {
      bedMinute += 60;
      bedHour -= 1;
    }
    while (bedHour < 0) {
      bedHour += 24;
    }

    bedHour = bedHour % 24;

    results.push({
      time: { hour: bedHour, minute: bedMinute },
      cycles,
      totalHours: (sleepMinutes / 60),
      recommended: cycles === recommended,
    });
  }

  return results;
}

/**
 * Given a bedtime, calculate wake-up times for 3-6 sleep cycles.
 * No fall-asleep buffer applied to wake times — the buffer is the user's
 * responsibility (they're already in bed).
 *
 * Actually, we DO add the fall-asleep buffer to the forward calculation
 * so wake times account for the 15 min it takes to fall asleep.
 *
 * @param {number} bedHour - 0-23
 * @param {number} bedMinute - 0-59
 * @param {string} ageGroup - "teen" | "adult" | "senior"
 * @returns {Array<{time: {hour: number, minute: number}, cycles: number, totalHours: number, recommended: boolean}>}
 */
export function calculateWakeTimes(bedHour, bedMinute, ageGroup = 'adult') {
  const recommended = getRecommendedCycles(ageGroup);
  const results = [];

  for (let cycles = 3; cycles <= 6; cycles++) {
    const sleepMinutes = cycles * CYCLE_MINUTES;
    const totalMinutesForward = sleepMinutes + FALL_ASLEEP_MINUTES;

    let wakeHour = bedHour;
    let wakeMinute = bedMinute + totalMinutesForward;

    // Normalize minutes and hours (handle overflow / midnight crossover)
    while (wakeMinute >= 60) {
      wakeMinute -= 60;
      wakeHour += 1;
    }

    wakeHour = wakeHour % 24;

    results.push({
      time: { hour: wakeHour, minute: wakeMinute },
      cycles,
      totalHours: (sleepMinutes / 60),
      recommended: cycles === recommended,
    });
  }

  return results;
}

/**
 * Format a {hour, minute} object to a 12-hour string like "10:30 PM".
 *
 * @param {{hour: number, minute: number}} time
 * @returns {string}
 */
export function formatTime({ hour, minute }) {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const displayMinute = String(minute).padStart(2, '0');
  return `${displayHour}:${displayMinute} ${period}`;
}

/**
 * Parse a time string "HH:MM" (24hr, from <input type="time">) into {hour, minute}.
 *
 * @param {string} timeString - e.g. "06:30" or "23:00"
 * @returns {{hour: number, minute: number}}
 */
export function parseTimeInput(timeString) {
  const [h, m] = timeString.split(':').map(Number);
  return { hour: h, minute: m };
}
