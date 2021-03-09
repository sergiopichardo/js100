/*
The destinations array contains a list of travel destinations.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false
*/


/**
 * @param {string[]} destinations
 * @param {string} target
 * @return {boolean}
 */
function contains(target, destinations) {
  return destinations.indexOf(target) !== -1
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

const result1 = contains('Barcelona', destinations); // true
const result2 = contains('Nashville', destinations); // false

console.log(result1);
console.log(result2);

/*
  return list.lastIndexOf(destination) !== -1;
  // or
  return list.find( dest => dest === destination ) !== undefined;
  // or
  return list.findIndex( dest => dest === destination ) !== -1;
  // or
  return !(list.every( dest => dest !== destination ));
  // or
  return list.some( dest => dest === destination );
*/