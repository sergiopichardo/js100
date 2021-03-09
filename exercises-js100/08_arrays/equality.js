/*
Predict the output of the below code. When you run the code,
do you see what you expected? Why or why not?
*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // false
// because array one and array two even though they have
// the same numbers they are not the same array stored in memory
// if you wanted to check the structured of both arrays you could
// check their size, stringify them and check them as strings.

/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {boolean} - true if arrays are equal, false otherwise
 */
function areArraysEqual(array1, array2) {
  const sameLength = array1.length === array2.length;
  const sameValues = JSON.stringify(array1) === JSON.stringify(array2);
  return sameLength && sameValues
}

let array3 = [2, 6, 4];
let array4 = [2, 6, 4];
let array5 = [5, 6, 4];
let array6 = [2, 6, 4, 1];

console.log(areArraysEqual(array3, array4)); // true
console.log(areArraysEqual(array4, array5)); // false
console.log(areArraysEqual(array5, array6)); // false