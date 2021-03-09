/*
Convert the person object into a nested array nestedPerson,
containing the same key-value pairs.
*/

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// Version 1
// const nestedPerson = Object.entries(person)

// Version 2
// let nestedPerson = []
// for (let key in person) {
//   nestedPerson.push([key, person[key]])
// }

// version 3
// let nestedPerson = Object.keys(person).map((key) => {
//   return [key, person[key]]
// })
// let nestedPerson = Object.keys(person).map((key) => [key, person[key]])


// Version 4
// let nestedPerson = Array.from(Object.keys(person), key => [key, person[key]])


// Version 5
// let keys = Object.keys(person)
// let values = Object.values(person)
// let nestedPerson = []

// for (let i = 0; i < keys.length; i++) {
//   nestedPerson.push([keys[i], values[i]])
// }


console.log(nestedPerson)
