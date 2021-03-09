/*
Change your isBlank function from the previous exercise
to return true if the string is empty or only contains whitespace.
*/

/**
 * @param {string} string
 * @return {boolean}
 */
function isBlank(string) {
  return string.trim().length === 0
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true