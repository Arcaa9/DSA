function threeSum(arr) {
  arr = arr.sort((a, b) => a - b);
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let first = i + 1;
    let last = arr.length - 1;

    if (arr[i] == arr[i - 1]) continue;
    while (first < last) {
      let value = arr[i] + arr[first] + arr[last];
      if (value < 0) {
        first++;
      } else if (value > 0) {
        last--;
      } else {
        array.push([arr[i], arr[first], arr[last]]);
        first++;
        last--;
        while (arr[first] == arr[first - 1]) first++;
        while (arr[last] == arr[last + 1]) last--;
      }
    }
  }
  return array;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
