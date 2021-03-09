/*
Write a function that compares the length of two strings.
It should return -1 if the first string is shorter,
1 if the second string is shorter, and 0 if they're of
equal length, as in the following example:
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function compareByLength(word1, word2) {
  let difference = word1.length - word2.length
  return Math.sign(difference)
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

// Notes
/*
Math.sign()
Math.sign() has 5 possible return values:

1 // positive number
-1 // negative number
0 // positive zero
-0 // negative zero
NaN // not a number

---
const positive = 5;
const negative = -5;
const zero = 0;

Math.sign(positive); // 1
Math.sign(negative); // -1
Math.sign(zero); // 0
*/