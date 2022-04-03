// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that 
// when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

// nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, 
// the first two numbers in the Fibonacci sequence are 0 and 1, 
// and each subsequent number is the sum of the previous two.


// ***My solution***

// function nthFibo(n) {
//   if (n == 1) { return 0};
//   let a = 0,
//       b = 1;
//   for (let i = 3; i <= n; i++) {
//     let current = a + b;
//     a = b;
//     b = current;
//   }
//   return b;
// }