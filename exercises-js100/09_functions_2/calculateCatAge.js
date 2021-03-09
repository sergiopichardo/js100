/*
Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.
*/

/**
 * @param {number} humanYears
 * @return {number} - catYears
 */
function catAge(humanYears) {
  let catYears = 0;
  if (humanYears === 0) {
    catYears = 0
  } else if (humanYears === 1) {
    catYears = 15;
  } else if (humanYears === 2) {
    catYears = (15 + 9);
  } else if (humanYears > 2) { // 3
    catYears += (15 + 9);
    catYears += (humanYears - 2) * 4
  }
  return catYears;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
console.log(catAge(5)); // 36
console.log(catAge(6)); // 40