// console.log("Matrix");

function transpose(matrix, n) {
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    return matrix;
}

let arr = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];
console.log("Matrix : ", transpose(arr, arr.length));
