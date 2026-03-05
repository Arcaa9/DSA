function twoSum(arr, target) {
  let first = 0;
  let second = arr.length - 1;

  while (first < second) {
    if (arr[first] + arr[second] < target) {
      first++;
    } else if (arr[first] + arr[second] > target) {
      second--;
    } else if (arr[first] + arr[second] == target) {
      return [++first, ++second];
    }
  }
}

console.log(twoSum([1, 3, 7, 11], 10));
