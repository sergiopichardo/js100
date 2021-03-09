function catAge(humanYearsParam) {
  if (humanYearsParam === 0) {
    return 0;
  } else if (humanYearsParam === 1) {
    return 15;
  } else if (humanYearsParam === 2) {
    return 24;
  } else {
    return catAge(2) + (humanYearsParam - 2) * 4;
  }
}