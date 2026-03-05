function moveZeros(arr) {
  let first = 0;
  let second = 0;

  while (second < arr.length) {
    if (arr[second] == 0) {
      second++;
    } else {
      [arr[first], arr[second]] = [arr[second], arr[first]];
      first++;
      second++;
    }
  }
  return arr;
}

console.log(moveZeros([12, 1, 0, 3, 0]));
