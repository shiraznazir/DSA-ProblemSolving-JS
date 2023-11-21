function missingNumber(array,n){
    let total = Math.floor((n + 1) * (n + 2) / 2);
    console.log(total);
        for (let i = 0; i < n; i++)
            total -= a[i];
        return total;
}

console.log("result  ", missingNumber([2]));
