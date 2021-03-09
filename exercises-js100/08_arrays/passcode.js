/*
We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).
*/



/**
 * @param {string[]} passcode
 * @return {string}
 */
function generatePasscode(passcode) {
  return passcode.join('-')
}

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
const result = generatePasscode(passcode)
console.log(result)

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'