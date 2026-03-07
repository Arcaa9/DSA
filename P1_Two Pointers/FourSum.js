function fourSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] == arr[j - 1]) continue;
      let first = j + 1;
      let last = arr.length - 1;

      while (first < last) {
        let sum = arr[i] + arr[j] + arr[first] + arr[last];
        if (sum < target) {
          first++;
        } else if (sum > target) {
          last--;
        } else {
          array.push([arr[i], arr[j], arr[first], arr[last]]);
          first++;
          last--;
          while (arr[first] == arr[first - 1]) first++;
          while (arr[last] == arr[last + 1]) last--;
        }
      }
    }
  }
  return array;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
