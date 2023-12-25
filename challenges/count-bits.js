/*
 * Title: Bit Counting
 * URL: https://www.codewars.com/kata/526571aae218b8ee490006f4
 * Difficulty: 6 kyu
 */

export function countBits(number) {
  return number.toString(2).replaceAll("0", "").length;
}
