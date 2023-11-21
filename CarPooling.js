var carPooling = function (trips, capacity) {
  let arr = new Array(1001).fill(0);
  for (let trip of trips) {
    let noOfPass = trip[0];
    let pickUp = trip[1];
    let dropOff = trip[2];
    arr[pickUp] += noOfPass;
    arr[dropOff] -= noOfPass;
  }
  let sum = 0;
  for (let element of arr) {
    sum += element;
    console.log("Check ", capacity, sum);
    if (capacity > sum) {
      return false;
    }
  }
  return true;
};

let result = carPooling(
  [
    [2, 1, 5],
    [3, 3, 7],
  ],
  5
);
console.log("result ", result);
