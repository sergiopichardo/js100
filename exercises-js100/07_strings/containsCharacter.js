/*
Write code that checks whether the string
byteSequence contains the character x.
*/


/**
 * @param {string} characterSequence
 * @param {string} targetCharacter
 * @return {boolean}
 */
function containsCharacter(characterSequence, targetCharacter) {
  return characterSequence.indexOf(targetCharacter) !== -1
}

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(containsCharacter(byteSequence, 'x')) // true

let byteSequence2 = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(containsCharacter(byteSequence2, '8')) // false
