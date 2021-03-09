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

switch (weather) {
  case 'sunny':
    message = "It's a beautiful day!";
    break;
  case 'rainy':
    message = "Grab your umbrella.";
    break;
  default:
    message = "Let's stay inside.";
}
console.log(message);