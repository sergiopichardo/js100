/*
Use JavaScript's string methods on the string
'Captain Ruby' to produce the string 'Captain JavaScript'.
*/

/**
 * @param {string} string
 * @param {string} target
 * @param {string} replacement
 * @return {string} - transformedString
 */
function transform(string, target, replacement) {
  // if invalid
  if (isInvalid(string, target, replacement)) {
    return 'invalid'
  }

  // delclare variable for transformed array
  let transformedStrings = []
  // split string into array of words
  let splitStrings = string.split(" ")
  // iterate over array of words
  for (let i = 0; i < splitStrings.length; i++) {
    // if current word is equal to target
    if (splitStrings[i] === target) {
      // replace the word in place with replacement
      transformedStrings.push(replacement)
    } else {
      transformedStrings.push(splitStrings[i])
    }
  }

  return transformedStrings.join(" ")
  // return transformedString
}

function isInvalid(string, target, replacement) {
  let areUndefined = (typeof string === 'undefined' || typeof target === 'undefined' || typeof replacement === 'undefined')
  let areNotStrings = (typeof string !== 'string' || typeof target !== 'string' || typeof replacement !== 'string')
  let areEmpty = (string.length === 0 || target.length === 0 || replacement.length === 0)
  let notInString = string.indexOf(target) === -1
  return areUndefined || areNotStrings || areEmpty || notInString
}

let example = "The quick brown fox jumps over the lazy dog. The fox runs fast."
console.log(transform(example, 'fox', 'lion'))

let example2 = "The quick brown fox jumps over the lazy dog. The fox runs fast."
console.log(transform(example2, '', 'lion'))

let example3 = "The quick brown fox jumps over the lazy dog. The fox runs fast."
console.log(transform(example3, 'iguana', 'lion'))

let example4 = "The quick brown fox jumps over the lazy dog. The fox runs fast."
console.log(transform(example4, 'iguana', 3))