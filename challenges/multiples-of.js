/*
 * Title: Multiples of 3 or 5
 * URL: https://www.codewars.com/kata/514b92a657cdc65150000006
 * Difficulty: 6 kyu
 */

export function solution(number) {
  let sum = 0;
  for (let index = 3; index < number; index++) {
    if (index % 3 == 0 || index % 5 == 0) {
      sum += index;
    }
  }
  return sum;
}
