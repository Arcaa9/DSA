function equalStrings(s1, s2) {
  let first = 0;
  let second = 0;

  while (first < s1.length || second < s2.length) {
    while (s1[first] == " ") first++;
    while (s2[second] == " ") second++;

    if (s1[first] != s2[second]) {
      return false;
    }
    first++;
    second++;
  }
  return true;
}

console.log(equalStrings("abc", "   abc"));
