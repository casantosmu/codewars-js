/*
 * Title: Sum of Digits / Digital Root
 * URL: https://www.codewars.com/kata/541c8630095125aba6000c00
 * Difficulty: 6 kyu
 */

export function digitalRoot(number) {
  if (number < 10) {
    return number;
  }
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return digitalRoot(sum);
}
