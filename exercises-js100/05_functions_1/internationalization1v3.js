
const greetings = new Map([
  ['es', 'Hola!'],
  ['en', 'Hi!'],
  ['fr', 'Salut!'],
  ['pt', 'Olá!'],
  ['de', 'Hallo!'],
  ['sv', 'Hej!'],
  ['af', 'Haai!'],
])

function greet(langCode) {
  return greetings.has(langCode) ? greetings.get(langCode) : greetings.get('es')
}

console.log(greet('es')); // 'Hola!'
console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'