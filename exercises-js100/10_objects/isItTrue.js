/*
We are experimenting with some code to get more
comfortable working with objects.
Run the snippet below and explain why
"It's true!" is never output.
*/

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  // we are checking if all properties equal to the boolean value `true`.
  // Even though, javascript does not require you to write your property names
  // with quotes (e.g. 'name' or name are both fine) the JavaScript interpreter
  // converts all property names to strings.
  if (prop === true) { // if we changed (prop === 'true'), the block would be executed
    console.log("It's true!");
  }
}

/*
Solution
The condition of our if statement on line 11 returns false for all properties, because property names are always strings, while the body of our for loop looks for the Boolean value true.
*/

/*
Discussion
Object property names are always strings. When we omit quotes around our property names, JavaScript implicitly converts the name to a string. So true is not a property defined on obj, but 'true' is. You can check this for example as follows:
*/
for (let prop in obj) {
  console.log(`'${prop}': (${typeof prop})`);
}

// logs:
// num (string)
// property name (string)
// true (string)
// fun (string)