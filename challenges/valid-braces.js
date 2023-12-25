/*
 * Title: Valid Braces
 * URL: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
 * Difficulty: 6 kyu
 */

const bracesMap = {
  "(": ")",
  "{": "}",
  "[": "]",
};

export function validBraces(braces) {
  const stack = [];
  for (const brace of braces) {
    if (bracesMap[brace]) {
      stack.push(brace);
    } else if (brace !== bracesMap[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
}
