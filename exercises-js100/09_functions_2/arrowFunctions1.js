/*
Refactor the function below using arrow syntax.
Line 9 should still log the same sentence.
*/



// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }

const sentence = (verb, noun) => {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

const template = 'I VERB NOUN.';

console.log(sentence('like', 'birds'));
// logs: I like birds.