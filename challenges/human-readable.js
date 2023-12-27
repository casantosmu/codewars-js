/*
 * Title: Human Readable Time
 * URL: https://www.codewars.com/kata/52685f7382004e774f0001f7
 * Difficulty: 5 kyu
 */

export function humanReadable(seconds) {
  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}
