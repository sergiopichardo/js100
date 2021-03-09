```js
// console.log() will return `undefined` because var declarations are
// moved to the top of the current scope and assigned `undefined` in a process called `hoisting`.

// behind the scenes the code is executed like this:

// 1. The javascript interpreter parses the entire file
console.log(greeting);
let greeting = 'Hello world!';

// 2. it hoists (raises) the let declaration to the top of
// the scope (e.g. global or function scope)
let greeting;
console.log(greeting);
greeting = 'Hello world!';

// 3. the variable is NOT assigned
let greeting;
console.log(greeting); // throws a `ReferenceError`
greeting = 'Hello world!';
```
