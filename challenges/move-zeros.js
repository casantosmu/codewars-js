/*
 * Title: Moving Zeros To The End
 * URL: https://www.codewars.com/kata/52597aa56021e91c93000cb0
 * Difficulty: 5 kyu
 */

export function moveZeros(array) {
  const zeros = [];
  const nonZeros = [];
  for (const item of array) {
    if (item === 0) {
      zeros.push(item);
    } else {
      nonZeros.push(item);
    }
  }

  return [...nonZeros, ...zeros];
}
