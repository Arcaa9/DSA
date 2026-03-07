function maxWater(arr) {
  let first = 0;
  let last = arr.length - 1;
  let maxWater = 0;

  while (first < last) {
    let height = Math.min(arr[first], arr[last]);
    let width = last - first;
    let water = width * height;
    if (water > maxWater) {
      maxWater = water;
    }
    if (arr[first] < arr[last]) {
      first++;
    } else {
      last--;
    }
  }
  return maxWater;
}
console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
