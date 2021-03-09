function clone(obj) {
  let objToArray = Object.entries(obj);
  return Object.fromEntries(objToArray);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);
console.log(clonedPerson.age);