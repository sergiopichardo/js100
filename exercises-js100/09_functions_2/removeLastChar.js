/*
Create a function removeLastChar that takes a string as argument, and returns the string without the last character.
*/

/**
 * @param {string} string
 * @return {string}
 */
function removeLastChar(string) {
  return string.slice(0, -1) // or .slice(0, string.length-1)
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'