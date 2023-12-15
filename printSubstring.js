
function checkPalindrome(str){
    let i = 0;
    let j = str.length-1;
    while(i < j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function print(str){
    let n = str.length;
    let result = str[0];
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n;j++){
            let sub = str.slice(i, j);
            if(sub){
                console.log(sub);
                let palSub = checkPalindrome(sub);
                if(palSub && sub.length > result.length){
                    result = sub
                }
            }
        }
    }
    // return result;
}
console.log(print("abc"));