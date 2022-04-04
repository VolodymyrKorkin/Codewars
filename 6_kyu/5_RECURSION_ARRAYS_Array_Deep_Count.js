// Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of 
// ALL elements within an array, including any within inner-level arrays.

// For example:

// deepCount([1, 2, 3]);  
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);  
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);  
// //>>>>> 7


// ***My solution***

// function deepCount(a){
//   let counter = 0,
//       d = 1;

//   loop1:
//   for (let i = 0; i < a.length; i++) {
//     if (Array.isArray(a[i])) {
//       counter++;
//       a = a.flat(d);
//       d++;
//       continue loop1;
//       }
//   }
//   return counter += a.length;
// }