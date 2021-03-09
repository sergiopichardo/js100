/*
Write a function that takes an ISO 639-1 language code
and returns a greeting in that language.
You can take the examples below or add whatever languages you like.

https://launchschool.com/exercises/0d29694b
*/

function greet(languageCode) {
  let greeting;
  switch (isoCode) {
    case 'en':
      greeting = 'Hi!';
      break;
    case 'fr':
      greeting = 'Salut!';
      break;
    case 'pt':
      greeting = 'Olá!';
      break;
    case 'de':
      greeting = 'Hallo!';
      break;
    case 'sv':
      greeting = 'Hej!';
      break;
    case 'af':
      greeting = 'Haai!';
      break;
    default:
      greeting = 'Invalid code'
  }
  return greeting
}

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'