/*
Building on your solutions from the previous exercises,
write a function localGreet that takes a locale as input,
and returns a greeting.

The locale allows us to greet people from different
countries differently also when they share the language,
for example:
*/

const greetings = new Map([
  ['es', { 'sp': 'Hola!' }],
  ['en', { 'us': 'Hey!',  'gb': 'Hello!', 'au': 'Howdy!' }],
  ['fr', { 'fr': 'Salut!',  'ca': 'Salut!', 'ma': 'Salut!' }],
])

/**
 * @param {string} locale
 * @return {string} - greeting
 */
function localGreet(locale) {
  let language = extractLanguge(locale)
  let region = extractRegion(locale)

  if (greetings.has(language)) {
    if (greetings.get(language)[region]) {
      return greetings.get(language)[region]
    }
  }
  return greetings.get('es')['sp']
}

function extractRegion(local) {
  return local.split('.')[0].split('_')[1].toLowerCase() // gb
}

function extractLanguge(local) {
  return local.split('.')[0].split('_')[0].toLowerCase() // en
}

const greeting1 = localGreet('en_GB.UTF-8'); // 'Hello!'
const greeting2 = localGreet('en_US.UTF-8'); // 'Hey!'
const greeting3 = localGreet('en_AU.UTF-8'); // 'Howdy!'
const greeting4 = localGreet('en_WS.UTF-8'); // 'Hola!'

console.log(greeting1)
console.log(greeting2)
console.log(greeting3)
console.log(greeting4)

// https://www.localeplanet.com/icu/iso639.html