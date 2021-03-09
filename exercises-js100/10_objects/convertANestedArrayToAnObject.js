/*
Write code that does the reverse, starting from a nested
array of pairs and building an object.
*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }


// let person = {}

// version 1
// for (let [key, value] of nestedArray) {
//   person[key] = value
// }

// version 2
// for (let i = 0; i < nestedArray.length; i++) {
//   let pair = nestedArray[i];
//   person[pair[0]] = pair[1];
// }

// version 3
// nestedArray.forEach( (subArray) => {
//   person[subArray[0]] = subArray[1];
// });

// version 4
// const person = Object.fromEntries(nestedArray);

// version 5
let person = nestedArray.reduce((acc, ele) => {
  acc[ele[0]] = ele[1];
  return acc;
}, {});

console.log(person);