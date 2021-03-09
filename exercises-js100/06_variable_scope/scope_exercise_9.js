const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a); // TypeError
// because const variables CANNOT be reassigned a new value.