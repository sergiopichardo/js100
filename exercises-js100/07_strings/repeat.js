/*
Implement a function repeat that repeats an input
string a given number of times, as shown in the
example below; without using the pre-defined string
method String.prototype.repeat().
*/

/**
 * @param {number} repetitionCount
 * @param {string} itemToBeRepeated
 * @param {string} - repeatedResult
 */
function repeat(repetitionCount = 1, itemToBeRepeated = '') {
  // if the input is invalid
  if (!isValid(repetitionCount, itemToBeRepeated)) {
    // return ''
    return ''
  }

  // declare repeatedResult let expression to hold repeated result
  let repeatedResult = ''
  // declare a for loop from 0 to repetitionCount
  for (let i = 0; i < repetitionCount; i++) {
    // add itemToBeRepeated to repeatedResult until loop ends
    repeatedResult += itemToBeRepeated
  }

  // return repeatedResult
  return repeatedResult
}

function isValid(count, item) {
  // store conditional result of checking if count is a number
  const isCountAnumber = (typeof count === 'number')
  // store conditional result of checking if count is a number greater than 0 and less than 10
  const isCountInRange = (count > 0 && count <= 10)
  // store conditional result of checking if item is not undefined
  const isItemUndefined = (typeof item === 'undefined')
  // store conditional result of checking if item is a data type of type string
  const isItemAstring = (typeof item === 'string')
  // store conditional result of checking if item is not an empty string
  const isItemEmpty = (item.length === 0)

  if ((isCountAnumber && isCountInRange) && (!isItemUndefined && isItemAstring && !isItemEmpty)) {
    return true
  }
  return false
}

let a;
let b;
console.log(repeat(3, 'ha'));    // 'hahaha'
console.log(repeat(3, 'hey'));    // 'heyheyhey'
console.log(repeat(3, ''));      // ''
console.log(repeat(3, 4));       // ''
console.log(repeat(a, 'ha'));    // ''
console.log(repeat(2, b));       // ''
console.log(repeat(0, b));       // ''