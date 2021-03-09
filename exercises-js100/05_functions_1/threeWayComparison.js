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
  let result = 0;
  if (word1.length < word2.length) {
    result = -1
  } else if (word1.length > word2.length) {
    result = 1
  }
  return result
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0