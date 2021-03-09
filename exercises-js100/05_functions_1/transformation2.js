/*
** Does not handle cases where word to be replaced is found in multiple positions.
** A job for RegEx, I suppose.
** .replaceAll was throwing an error.
*/

let stringEx = "Hey Ruby, why don't you come Ruby around the Ruby?";
let toReplace = "Ruby";
let replacement = "JavaScript";

console.log(stringEx.replace(toReplace, replacement));

/*
** So I tried to build my own function.
** However, this does not handle cases where word to be replaced is followed by punctuation.
** Another job for RegEx, I suppose.
*/

function transform(stringParam, replaceParam, replacementParam) {
  let arrayOfWords = stringParam.split(' ');
  let indicesOfRuby = [];
  let indexVariable = 0;

  do {
    indicesOfRuby.push(arrayOfWords.indexOf(replaceParam, indexVariable));
    indexVariable = arrayOfWords.indexOf(replaceParam, indexVariable) + 1;
  } while (indexVariable < arrayOfWords.length && indexVariable > 0);

  newArray = indicesOfRuby.reduce((acc, ele) => {
    if (ele > -1) {
      acc[ele] = replacementParam;
    }
    return acc;
  }, arrayOfWords);

  return newArray.join(' ');
}

console.log(transform(stringEx, toReplace, replacement));