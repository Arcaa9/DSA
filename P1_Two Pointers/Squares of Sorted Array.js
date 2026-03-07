function sortedArray(arr) {
  let first = 0;
  let last = arr.length - 1;
  let position = arr.length - 1;
  let array = [];

  while (first <= last) {
    let squareFirst = arr[first] * arr[first];
    let squareLast = arr[last] * arr[last];
    if (squareFirst < squareLast) {
      array[position] = squareLast;
      position--;
      last--;
    } else {
      array[position] = squareFirst;
      position--;
      first++;
    }
  }
  return array;
}

console.log(sortedArray([-11, -1, 0, 3, 10]));
