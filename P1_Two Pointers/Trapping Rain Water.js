function trappingRainWater(arr) {
  let left = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let water = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] >= maxLeft) {
        maxLeft = arr[left];
      } else {
        water += maxLeft - arr[left];
      }
      left++;
    } else {
      if (arr[right] >= maxRight) {
        maxRight = arr[right];
      } else {
        water += maxRight - arr[right];
      }
      right--;
    }
  }
  return water;
}

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
