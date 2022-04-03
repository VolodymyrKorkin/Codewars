// The goal of this exercise is to convert a string to a 
// new string where each character in the new string is 
// "(" if that character appears only once in the original string, or 
// ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes

// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


// ***My solution***

// function numChar(arr, letter) {
//   let counter = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (letter == arr[i]) { counter++ };    
//   }
//   return counter;
// }

// function duplicateEncode(word){
//   let arr = word.toLowerCase().split("");
//   let arrResult = [];

//   for (let i = 0; i < arr.length; i++) {
//     let count = numChar(arr, arr[i]);
//     count > 1 ? arrResult.push(")") : arrResult.push("(");
//     }
//   let strResult = arrResult.join("");
//   return strResult;
// }

// ***BEST SOLUTION***

// function duplicateEncode(word){
  
// var unique='';
// word = word.toLowerCase();
// for(var i=0; i<word.length; i++){
//     if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//         unique += '(';
//     }
//     else{
//         unique += ')';
//     }
// }
// return unique;

// }