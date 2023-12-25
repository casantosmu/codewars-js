/*
 * Title: Find the odd int
 * URL: https://www.codewars.com/kata/54da5a58ea159efa38000836
 * Difficulty: 6 kyu
 */

export function findOdd(array) {
  const odds = new Set();
  for (const int of array) {
    if (!odds.delete(int)) {
      odds.add(int);
    }
  }

  return [...odds][0];
}
