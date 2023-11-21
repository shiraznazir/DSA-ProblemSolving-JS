function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      high = mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      ans = mid;
      break;
    }
  }
  return ans;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
