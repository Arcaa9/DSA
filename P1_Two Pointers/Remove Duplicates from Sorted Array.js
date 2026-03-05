function removeDuplicate(arr) {
  let first = 0;
  let second = 1;
  let array = [];

  array.push(arr[first]);
  while (second < arr.length) {
    if (arr[first] == arr[second]) {
      second++;
    } else {
      array.push(arr[second]);
      first = second;
      second++;
    }
  }
  return array;
}

console.log(removeDuplicate([0, 1, 2, 3, 3, 4, 5, 6, 7, 7]));
