/*
Write a function clone that takes an object as argument and returns a shallow copy of that argument. Shallow copy means that it returns a new object that has the same key/value pairs, but that you don't need to worry about cloning the values as well. The code below demonstrates the expected behaviour.
*/

function clone(obj) {
  // TODO
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

/**
 * @param {Object} person
 * @return {Object}
 * @description returns a shallow copy of the given object
 */
function clone(person) {

}

// solution 1 (mine)

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33











// solution 2
function clone(obj) {
  return Object.assign({}, obj)
}

// solution 3

// solution 4










// Shallow Copy
// https://en.wikipedia.org/wiki/Object_copying#Shallow_copy

/*
Copying is done mostly so the copy can be modified or moved, or the current value preserved. If either of these is unneeded, a reference to the original data is sufficient and more efficient, as no copying occurs.
*/

/*
Discussion
There are different ways to clone an object. The arguably easiest one is to use the Object.assign method. Note that this method only creates a shallow copy, which means that if you mutate one of the values in person, they will be mutated in clonedPerson as well. For example:
*/

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.name.isStageName = false;

console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

/*
HOW TO USE Object.assign()

The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
expected output: Object { a: 1, b: 4, c: 5 }
*/