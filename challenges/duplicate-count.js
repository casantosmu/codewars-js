/*
 * Title: Count the number of Duplicates
 * URL: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
 * Difficulty: 6 kyu
 */

export function duplicateCount(text) {
  const characterCount = {};
  let count = 0;
  for (const character of text.toLowerCase()) {
    const currentCount = (characterCount[character] ?? 0) + 1;
    characterCount[character] = currentCount;
    if (currentCount === 2) {
      count++;
    }
  }

  return count;
}
