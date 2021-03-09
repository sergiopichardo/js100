/*
Deep copying of nested objects is a general engineering issue, so you see approaches to handling it in any language. There are several approaches in JavaScript.

JSON.stringify and JSON.parse
A simple one is to use JSON.stringify to write out the object as a JSON string, and then use JSON.parse to write the JSON string as an object. The result will be an entirely new object.

This works fine unless you have a Date object in there for one of the property values. Here's an example of the problem:
*/

// https://launchschool.com/exercises/f8fb215b

function deepCloneWithJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  dateOfHire: new Date('1/1/11'),
  age: 33,
};

let clonedPersonJSON = deepCloneWithJSON(person);
clonedPersonJSON.name.isStageName = false;

console.log(person);
console.log(clonedPersonJSON);

//Running this has this result:
/*
{
  title: 'Duke',
  name: { value: 'Nukem', isStageName: true },
  dateOfHire: 2011-01-01T06:00:00.000Z,
  age: 33
}
{
  title: 'Duke',
  name: { value: 'Nukem', isStageName: false },
  dateOfHire: '2011-01-01T06:00:00.000Z',
  age: 33
}
*/

/*
You will notice that lines 3 and 9 have different values for the name.isStageName property, meaning that we have successfully deep cloned the name object. However, the dateOfHire property is a string in the clone (line 10), rather than the output of the Date object as in the original (line 4). That won't work properly; if you try to call a Date method on the clone you'll get an error.

This happens because the JSON.parse method doesn't know whether that string is intended to be a Date object or not, so it just keeps it as a string. You can write a function for the second argument of JSON.parse that addresses this, but it's probably less complicated to roll your own deep copy function.

A "roll-your-own" deep clone
This roll-your-own version uses recursion to handle nested objects. It iterates through the keys, checking the value of each to see if it's an object. If so, the function calls itself recursively, passing the current property value as the object argument. Unless, the current value is also an instance of the Date object, in which case it creates a new Date object, passing the original in to the constructor, and assigning the result as the property value.
*/

function deepClone(obj) {
  let deepCopy = {};

  Object.keys(obj).forEach( prop => {
    if (obj[prop] instanceof Date) {
      deepCopy[prop] = new Date(obj[prop]);
    } else if (typeof obj[prop] === 'object') {
      deepCopy[prop] = deepClone(obj[prop]); // Here's the recursive call
    } else {
      deepCopy[prop] = obj[prop];
    }
  });

  return deepCopy;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  dateOfHire: new Date('1/1/11'),
  age: 33,
};

let clonedPerson = deepClone(person);
clonedPerson.name.isStageName = false;
clonedPerson.dateOfHire.setDate(10);

console.log(person);
console.log(clonedPerson);