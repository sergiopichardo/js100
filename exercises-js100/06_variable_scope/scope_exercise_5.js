function myFunction() {
  let a = 1;

  if (true) {
    console.log(a); // ReferenceError
    let a = 2;
    console.log(a); // this line is NEVER reached
  }
}

myFunction();

/*
The first console.log(a) will throw an "a is not defined error". This is because the second a variable is declared after the first console.log(a), inside the if scope.

The first a = 1 is declared in the function scope. The second a = 2 is declared in the if scope.

So both a variables create their own scope and are scoped differently.

They look to be the same variable, but they are actually seperated by scope.
*/