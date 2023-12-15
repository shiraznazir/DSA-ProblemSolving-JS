

function pattern(n, v = []){
    v.push(n)
    if(n <= 0){
        return v;
    }
    pattern(n-5, v);
    v.push(n)
    return v;
}

console.log(pattern(16));
