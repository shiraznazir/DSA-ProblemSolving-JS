const map1 = new Map();

for(let i=0;i<5;i++){
    map1.set(i, i+2);
}

console.log(map1.has(6));