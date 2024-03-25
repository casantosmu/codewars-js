/*
 * Title: RGB To Hex Conversion
 * URL: https://www.codewars.com/kata/513e08acc600c94f01000001
 * Difficulty: 5 kyu
 */

const decimalToHex = (decimal) =>
  Math.max(0, Math.min(255, decimal))
    .toString(16)
    .toUpperCase()
    .padStart(2, "0");

export function rgb(r, g, b) {
  return `${decimalToHex(r)}${decimalToHex(g)}${decimalToHex(b)}`;
}
