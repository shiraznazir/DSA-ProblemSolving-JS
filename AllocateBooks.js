function findPages(a, n, m) {
  let start = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i];
  }
  let end = sum;
  let ans = -1;
  let mid = Math.floor(start + (end - start) / 2);
  while (start <= end) {
    if (isPossible(a, n, m, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
}

function isPossible(a, n, m, mid) {
  let sum = 0;
  let studentCount = 1;
  for (let i = 0; i < n; i++) {
    if (sum + a[i] <= mid) {
      sum += a[i];
    } else {
      studentCount++;
      if (studentCount > m || sum > mid) {
        return false;
      }
    }
  }
  return true;
}
let arr = [15,17,20];
console.log("Result ", findPages(arr, arr.length, 2));