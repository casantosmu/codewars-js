/*
 * Title: Stop gninnipS My sdroW!
 * URL: https://www.codewars.com/kata/5264d2b162488dc400000001
 * Difficulty: 6 kyu
 */

export function spinWords(string) {
  return string
    .split(" ")
    .map((word) => (word.length < 5 ? word : [...word].reverse().join("")))
    .join(" ");
}
