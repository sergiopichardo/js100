
function greet(langCode) {
  const langMap = {
    'es' :  'Hola',
    'en' :  'Hi!',
    'fr' :  'Salut!',
    'pt' :  'Olá!',
    'de' :  'Hallo!',
    'sv' :  'Hej!',
    'af' :  'Haai!',
  }
  // if (!(language in langCode)) {
  //   return "hello";
  // } else {
  //   return langCode[language];
  // }
  return langMap[langCode] ? langMap[langCode] : langMap['es']
}

console.log(greet('es')); // 'Hola!'
console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'