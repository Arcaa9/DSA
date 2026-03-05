function mergeArrays(arr1, arr2) {
  let first = 0;
  let second = 0;
  let array = [];

  while (first < arr1.length && second < arr2.length) {
    if (arr1[first] < arr2[second]) {
      array.push(arr1[first]);
      first++;
    } else if (arr2[second] < arr1[first]) {
      array.push(arr2[second]);
      second++;
    } else {
      array.push(arr1[first]);
      array.push(arr2[second]);
      first++;
      second++;
    }
  }
  while (first < arr1.length) array.push(arr1[first++]);
  while (second < arr2.length) array.push(arr2[second++]);
  return array;
}

console.log(mergeArrays([2, 5, 7], [9, 11, 13]));
