/*
 * Title: Array.diff
 * URL: https://www.codewars.com/kata/523f5d21c841566fde000009
 * Difficulty: 6 kyu
 */

export function arrayDiff(a, b) {
  const bSet = new Set(b);
  return a.filter((item) => !bSet.has(item));
}
