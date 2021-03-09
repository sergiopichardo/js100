/*
Given strings like the following, how can you check whether
they're equal irrespective of whether the characters they
contain are upper or lower case?
*/



/**
 * @param {string} string1
 * @param {string} string2
 * @return {boolean}
 */
function compareStringsAreEqual(string1, string2) {
  // return the comparison result of the lowercase version of string1 and string2
  return string1.toLowerCase() === string2.toLowerCase()
}

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(compareStringsAreEqual(string1, string2)); // true
console.log(compareStringsAreEqual(string2, string3)); // false