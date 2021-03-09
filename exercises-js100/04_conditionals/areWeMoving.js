/*
Determine what the following code snippet logs.
First solve it in your head or on paper,
and only then run it in your JavaScript console to check the result.
*/

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
              //          true                   false          true
              //          true                            true
              //                          true


console.log(isMoving); //  true

// Bonus question: Do we need the parentheses in the boolean
// expression or could we also have written the following?
let isMoving2 = brakingForce < acceleration && speed > 0 || acceleration > 0;
              //          true                   true             true
              //                     true               ||       true
              //                                  true
console.log(isMoving2);

// NOTES:
// Evalutation occurs from left to right
// Precendence: () --> {>=, <=, >, <} --> && --> ||

/*
Part 1 Evaluates to true

Part 2 We don't need the parenthesis, but we can optimize the conditional statement by making use of && short-circuit evaluation. In JavaScript, if the first value in an AND expression is false, JavaScript will short-circuit, meaning the interpreter will end the evaluation and not even check the right side of the && expression.
*/

/*

Short circuit conditionals
https://codeburst.io/javascript-short-circuit-conditionals-bbc13ac3e9eb

Operator Precedence
- http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html
*/
