const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
// output
/*
  {
    firstName: 'Jane',
    lastName: 'Doe'
  }
*/

/*
```js
// You can't reassign the const variable with a new object
// but you can modify the properties of the object that the const
// variable holds.
// You can do this
const user = {
  username: 'johndoe',
  email: 'john@doe.com
}

user.email = 'johndoe@gmail.com'

// You CANNOT do this
user = {
  username: 'johndoe',
  email: 'john@doe.com'
}
```
*/

// You can do this
const user = {
  username: 'johndoe',
  email: 'john@doe.com'
}

user.email = 'johndoe@gmail.com'
console.log(user)

// You CANNOT do this
user = {
  username: 'johndoe',
  email: 'john@doe.com'
}

console.log(user)