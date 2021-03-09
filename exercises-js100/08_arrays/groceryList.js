/*
We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.
*/

/**
 * @param {string[]} itemsList
 * @return {Array} - return empty array
 */
function markItemsOff(itemsList) {
  for (let i = 0; i < itemsList.length; i++) {
    console.log(itemsList.shift())
    i--;
  }
  return itemsList
}

/*
We decrement `i` so that we can always start at index 0
Otherwise, when we alter the length of items list, and
we increment `i` we'll skip values.
*/

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

let result = markItemsOff(groceryList)
console.log(result)

/**
 * @param {string[]} itemsList
 * @return {Array} - return empty array
 */
function markItemsOff2(itemsList) {
  let i = itemsList.length;
  while (i--) {
    console.log(itemsList.splice(0, 1)[0])
  }
  return itemsList
}

console.log('--------')
let groceryList2 = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let result2 = markItemsOff2(groceryList2)
console.log(result2)

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

