/*
Write a function that extracts the language code from a locale.
A locale is a combination of a language code, a region,
and usually also a character set, e.g en_US.UTF-8.
*/


/**
 * @param {string} locale
 * @return {string} - languageCode
 * @example 'en_AU.UTF-8' --> 'en'
 */
function extractLanguage(locale) {
  let [languageTerritory, codesetModifier] = locale.split('.')
  let [language, territory] = languageTerritory.split('_')
  let [codeset, modifier] = codesetModifier.split('-')
  return language
}


/*
language[_territory][.codeset][@modifier]
en_AU.UTF-8

*/

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'