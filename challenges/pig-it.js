/*
 * Title: Simple Pig Latin
 * URL: https://www.codewars.com/kata/520b9d2ad5c005041100000f
 * Difficulty: 5 kyu
 */

export function pigIt(string) {
  return string.replaceAll(/(\w)(\w*)/g, "$2$1ay");
}
