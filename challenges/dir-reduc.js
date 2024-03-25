/* eslint-disable unicorn/prevent-abbreviations */

/*
 * Title: Directions Reduction
 * URL: https://www.codewars.com/kata/550f22f4d758534c1100025a
 * Difficulty: 5 kyu
 */

const opposites = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  WEST: "EAST",
  EAST: "WEST",
};

export function dirReduc(directions) {
  const stack = [];
  for (const direction of directions) {
    if (stack.at(-1) === opposites[direction]) {
      stack.pop();
    } else {
      stack.push(direction);
    }
  }

  return stack;
}
