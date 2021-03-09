
function repeatNum(val, string) {
  return (val === 0) ? ""
      : (val === 1) ? string
      : (string + repeatNum(val - 1, string));
}

console.log(repeatNum(3, "HA HA "));
console.log(repeatNum(3, "TA TA "));
console.log(repeatNum(9, "supercalifrachaliciousexpialadocious"));

