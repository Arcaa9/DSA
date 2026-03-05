function isValidPalindrome(string) {
  let isValid = (letter) => /[a-zA-Z0-9]/.test(letter);
  let first = 0;
  let last = string.length - 1;

  while (first < last) {
    while (!isValid(string[first])) first++;
    while (!isValid(string[last])) last--;

    if (string[first].toLowerCase() != string[last].toLowerCase()) {
      return false;
    }

    first++;
    last--;
  }
  return true;
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama"));
