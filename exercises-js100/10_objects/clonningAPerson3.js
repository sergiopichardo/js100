let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Spread operator creates a `deep copy`
function clone(obj) {
  return newClone = {...obj};
}

let clonedPerson = clone(person)
console.log(person.age); // 33
clonedPerson.age = 34
person.age = 35
console.log(clonedPerson.age); // 33
console.log(person.age)

