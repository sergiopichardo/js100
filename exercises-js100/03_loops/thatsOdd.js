/*
Write a while loop that logs all odd natural numbers between 1 and 40.
*/

let index = 1;
while (index <= 40) {
  if (index % 2 !== 0) {
    console.log(index)
  }
  index++;
}