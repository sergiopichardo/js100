function repeatNum(val, string) {
  if (val === 0) {
    return ""
  } else if (val === 1) {
    return string
  }
  return string + repeatNum(val - 1, string);
}

console.log(repeatNum(3, "ha"));
console.log(repeatNum(3, "ja"));
// 3
// ha + ha (repeatNum(3 - 1, string))
// ha + ha + ha (repeatNum(2 - 1, string))
// ha + ha + ha (repeatNum(1 - 1, string))
// ha + ha + ha + "" (repeatNum(0, string))