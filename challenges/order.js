/*
 * Title: Your order, please
 * URL: https://www.codewars.com/kata/55c45be3b2079eccff00010f
 * Difficulty: 6 kyu
 */

function isNumeric(string) {
  return !Number.isNaN(Number(string));
}

export function order(words) {
  const result = [];
  for (const word of words.split(" ")) {
    const number = Number([...word].find((character) => isNumeric(character)));

    result[number - 1] = word;
  }
  return result.join(" ");
}
