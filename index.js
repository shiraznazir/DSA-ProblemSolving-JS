

// let str1 = "/Documents/Certificate/marksheet/";
// let str2 = "../marksheet/..";


// function check(){
//     let res = str1 + str2;
//     console.log("str "  + res);
//     for(let i=0;i<res.length;i++){
//         if(res[i] === "."){
//             let s1 = res.slice(0, i);
//             let s2 = res.slice(i+1);
//             res = s1 + s2;
//             i--;
//         }
//     }
//     return res;
// }
// console.log(str1);
// console.log(check(str1, str2));

// var reverseWords = function(s) {
//     let result = "";
//     let firstIndex = s.length - 1;
//     for(let i=s.length-1;i>=0;i--){
//         if(s[i] == " "){
//             let newStr = s.slice(i, firstIndex);
//             result += newStr;
//             if(i !== 0) result += " ";
//             firstIndex = i-1; 
//         }
//     }
//     return result;
// };

// var reverseWords = function(s) {
//     s = s.trim();
//     let temp = [];
//     let firstIndex = 0;
//     let ans = "";
//     for(let i=0;i<s.length;i++){
//         if(s[i] == " " || i == s.length - 1 ){
//             let word = s.slice(firstIndex, i);
//             if(i == s.length -1) word += s[i]
//             if(word != "") {
//                 temp.push(word)
//                 ans = word + " " + ans;
//             };
//             firstIndex = i+1;
//         }
//     }
//     console.log("ans ", ans);
//     let result = "";
//     for(let i=temp.length - 1; i>=0; i--){
//         result += temp[i]
//         if(i!==0) result += " " 
//     }
//     return result;
// };

// console.log(reverseWords("a good   example"))