/*
Write code that stores all of the vehicle property names
in an array called keys.
*/

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

// version 1
// let keys = []
// for (var key in vehicle) {
//   keys.push(key);
// }

// or

// version 2
// let keys = Object.keys(vehicle)

// or

// version 3
let keys = Object.getOwnPropertyNames(vehicle)


console.log(keys)