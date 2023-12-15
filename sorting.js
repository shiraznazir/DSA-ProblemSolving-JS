
let arr = [89, 53, 65, 8, 60, 75, 90, 32, 54 ];


function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
           if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
           }
        }
    }
    return arr;
}

console.log("Bubble Sort >>>>>>> " ,bubbleSort(arr));

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(minIndex > arr[j]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log("Selection >>>> ", selectionSort(arr));

function insertionSort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let ele = arr[i];
        let j = i-1;
        while(j >=0 && ele < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = ele;
    }
    return arr;
}

console.log("Insertion Sort ", insertionSort(arr));

function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];
    for(let i=0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot , ...quickSort(right)]
}

console.log("Quick Sort ", quickSort(arr));

function merge(leftArr, rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log("Merge Sort : ", mergeSort(arr));

