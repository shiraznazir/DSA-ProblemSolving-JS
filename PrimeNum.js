function primeNumber(n) {
    let least_prime = new Array(n+1).fill(0);
    least_prime[1] = 1;
    for(let i=2;i<=n;i++){
        if(least_prime === 0){
            for(let j= i * i;i<=n;j+=i){
                
            }
        }
    }
}

console.log("Minimum Diff :- ", primeNumber(6));
