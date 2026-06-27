// Target release date for the countdown. Change this single constant
// to update the date everywhere in the app.
export const RELEASE_DATE = new Date("2026-11-19T00:00:00");
export const RELEASE_LABEL = "November 19, 2026";

export function getTimeRemaining(target: Date, now: Date = new Date()) {
  const total = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
}