function reverseString(string) {
  let first = 0;
  string = string.split("");
  let last = string.length - 1;

  while (first < last) {
    [string[first], string[last]] = [string[last], string[first]];
    first++;
    last--;
  }
  return string.join("");
}

console.log(reverseString("Testing"));
