

var roman = function(num){
    if(num == "I"){
        return 1;
    }else if(num == "V"){
        return 5;
    }else if(num == "X"){
        return 10;
    }else if(num == "L"){
        return 50;
    }else if(num == "C"){
        return 100;
    }else if(num == "D"){
        return 500;
    }else if(num == "M"){
        return 1000;
    }
}

var romanToInt = function(s) {
    let result = 0;
    for(let i=0;i<s.length;i++){
        let curr = Number(roman(s[i]));
        let next = Number(roman(s[i]))
        if(curr <= next){
            console.log("curr + ", curr);
            result += curr;
        } else {
            console.log("curr - ", curr);
            result -= curr;
        }
    }
    return result;
};

console.log(romanToInt("MCMXCIV"));