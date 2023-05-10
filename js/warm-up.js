// function seven() {
//     return 7
// }
//
// console.log(seven());
// -----------------------------------------------

// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

// function findFactors(x) {
//     let factors = []
//     if (typeof x === "number") {
//         for (let i = 1; i <= x; i++){
//             if (x % i == 0) {
//                 factors.push(i)
//             }
//         }
//     } else return console.log(false)
//
//
//     return console.log(factors)
// }
//
// findFactors(6); // returns [1,2,3,6];
// findFactors(16); // returns [1,2,4,8,16];
// findFactors(0); // returns [];
// findFactors(true); // returns false;
// findFactors("13"); // returns false;
// findFactors([54,72,144]); // returns false;
// findFactors({value: 64}); // returns false;
// findFactors(); // returns false;

// ---------------------------------------

// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

// function areThereEs(x) {
//   if (typeof x === "string") {
//     for (let i = 0; i < x.length; i++) {
//       if (x.toLowerCase(x.charAt(i) === "e")) {
//         return true;
//       }
//     }
//   } else {
//     return false;
//   }
// }
//
// console.log(areThereEs("Ease")); // returns 2;
// console.log(areThereEs("teleconference")); // returns 5;
// console.log(areThereEs("TOM")); // returns 0;
// console.log(areThereEs(true)); // returns false;
// console.log(areThereEs(["e", "E"])); // returns false;
// console.log(areThereEs()); // returns false;

// Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz.
//
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//        console.log("fizzbuzz")
//     }else if (i % 5 === 0){
//        console.log("buzz");
//     }else if (i % 3 === 0){
//        console.log("fizz")
//     }else console.log(i)
//   }
// }
//
// fizzBuzz()

// let number = 2;
// do {
//   console.log(number);
//
//   number *= number;
// } while (number <= 1000000);

// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).

function addEmUp(x) {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    total += x[i];
  }
  return total;
}

console.log(addEmUp([2, 6, 19])); // returns 27
console.log(addEmUp([-99, 180, -5])); // returns 76
console.log(addEmUp([44, 10, 7])); // returns 61
console.log(addEmUp([-100])); // returns -100
console.log(addEmUp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
console.log(addEmUp([-13, -92, -3500])); // returns -3605
