/*
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.
*/

let forecast = ['rainy', 'sunny', "Let's stay inside!"];
let random = Math.floor((Math.random() * forecast.length))
let weather = forecast[random]
let message = '';

if (weather === 'sunny') {
  message = "It's a beautiful day!";
} else if (weather === 'rainy') {
  message = "Grab your umbrella.";
} else {
  message = "Let's stay inside.";
}
console.log(message);