let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // false
// because `b` is initialized in the global-scope.