/*
Add a property to the below object, jane,
so that the code on line 13 logs 'Hej, Bobby!'
to the console.
*/
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  },

  hello: name => {
    console.log(`Hello, ${name}!`);
  },

  hola(name) {
    console.log(`Hello, ${name}!`);
  }
};

jane.greet('Bobby'); // Hej, Bobby!
jane.hello('Sergio'); // Hej, Sergio!
jane.hola('Sergio'); // Hej, Sergio!
