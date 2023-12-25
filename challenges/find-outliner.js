/*
 * Title: Find The Parity Outlier
 * URL: https://www.codewars.com/kata/5526fc09a1bbd946250002dc
 * Difficulty: 6 kyu
 */

const isEven = (number) => number % 2 === 0;

export function findOutlier(integers) {
  const even = [];
  const odd = [];
  for (const integer of integers) {
    if (isEven(integer)) {
      even.push(integer);
    } else {
      odd.push(integer);
    }
    if (even.length > 1 && odd.length === 1) {
      return odd[0];
    }
    if (odd.length > 1 && even.length === 1) {
      return even[0];
    }
  }
}
