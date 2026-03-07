function sortColors(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++;
      low++;
    }
  }
  return arr;
}

console.log(sortColors([2, 2, 0, 1]));
