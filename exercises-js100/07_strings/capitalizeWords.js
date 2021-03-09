/*
Write code that capitalizes the words in the string
'launch school tech & talk', so that you get the string
'Launch School Tech & Talk'.
*/

/**
 * @param {string} sentence
 * @return {string} capitalizedSentence
 */
function capitalizeSentence(sentence) {
  // declare `capitalizedSentence` and set to empty array
  let capitalizedSentence = []
  // declare `splitSentence` and set to splitting the sentence by single space
  const splitSentence = sentence.split(' ')
  // iterate through splitSentence
  for (let i = 0; i < splitSentence.length; i++) {
    // declare `word` and set to invocation of capitalize on current item in iteration
    const capitalizedWord = capitalize(splitSentence[i])
    // push word into `capitalizedSentence`
    capitalizedSentence.push(capitalizedWord)
  }
  // return `capitalizedSentence`
  return capitalizedSentence.join(" ")
}

/**
 * @param {string} word
 * @return {string} capitalizedWord
 */
function capitalize(word) {
  // declare capitalized word
  let capitalizedWord = '';
  // grab first character in characters and update capitalizedWord
  capitalizedWord += word.charAt(0).toUpperCase()
  // slice array from index 1 to end of array and update capitalizedWord
  capitalizedWord += word.slice(1).toLowerCase()
  // return capitalizedWord
  return capitalizedWord
}


console.log(capitalizeSentence('launch school tech & talk')) // 'Launch School Tech & Talk'
