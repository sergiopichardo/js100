function catAge(humanYears) {
  let catYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
    } else if (i === 2) {
      catYears += 9
    } else if (i >= 3) {
      catYears += 4;
    }
  }
  return catYears;
}


console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
console.log(catAge(5)); // 36
console.log(catAge(6)); // 40