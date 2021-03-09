## Variable Hoisting
The `var` statement declares a **function-scoped** or **globally-scopped** variable,
optionally initializing it to a value.

`var` declarations, wherever they occur, are processed before any code is executed.
This is called `hoisting`.

The *scope* of a variable declared with `var` is its current *execution context*
and *closures*.

The scope for a variable declared outside any function the scope is the *global* scope.

Duplicate variable declarations using `var` will not trigger an error, even in strict mode,
and the variable will not lose its value, unless another assignment is performed.

variables created using `var` are created before any code is executed in a process known
as hoisting. Their initial value is `undefined`.

In the global context, a variable declared using var is added as a non-configurable property of the global object.




## What will the following code log to the console and why?

```js
console.log(greeting);
var greeting = 'Hello world!';
```

console.log() will return `undefined` because var declarations are
moved to the top of the current scope and assigned `undefined` in a process called `hoisting`.

The parser will read through the entire function before running, and any variable
declarations (e.g. using the `var`) will be executed as if they were at the top of
the containing scope.


```js
// console.log() will return `undefined` because var declarations are
// moved to the top of the current scope and assigned `undefined` in a process called `hoisting`.

// behind the scenes the code is executed like this:

// 1. The javascript interpreter parses the entire file
console.log(greeting);
let greeting = 'Hello world!';

// 2. it hoists (raises) the variable declarations to the top of
// the scope (e.g. global or scope or function)
var greeting;
console.log(greeting);
greeting = 'Hello world!';

// 3. assigns undefined to the variable declaration (by default).
var greeting = undefined;
console.log(greeting); // logs `undefined` to the console
greeting = 'Hello world!';
```









## Examples


```js
var country;
var i;

country = "USA";
switch (country) {
case "USA":
    country = i;
case "blach":
    //not finished yet
}

i = 10;
```

For example
```js
var stuff = 'stuff';
function() {
 console.log(stuff); //outputs 'undefined'
 var stuff = 'other stuff';
 console.log(stuff); //outputs 'other stuff'
}
```


The first `console.log` outputs `undefined` because the `var stuff`
in the function was `hoisted` to the top of the function.

Your code is behaved like this.

```js
//theoretical compiled output
var stuff = 'stuff';
function() {
 var stuff; //has not been defined
 console.log(stuff);
 stuff = 'other stuff'; //defined here
 console.log(stuff);
}
```



