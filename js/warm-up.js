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

// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case-insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

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

// function addEmUp(x) {
//   let total = 0;
//   for (let i = 0; i < x.length; i++) {
//     total += x[i];
//   }
//   return total;
// }
//
// console.log(addEmUp([2, 6, 19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44, 10, 7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])); // returns -3605

// Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.
// function countE(x) {
//    {
//
//     return ((x.match(/e/g) || []).length)
//   }
// }
//
//
// function explainString(x) {
//   if (typeof x === "string" ) {
//     string = {
//       string: x,
//       numberOfEs: countE(x),
//       isEvenLength: x.length % 2 === 0
//     }
//   }return string
//
// }
//
// console.log(explainString("cheese"));
// // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(explainString("dog")) ;// returns {string: "dog", numberOfEs: 0, isEvenLength: false}

// -------------------------------------------

// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

// const hamsters = [
//   {
//     name: "Hamtaro",
//     heightInMM: 86,
//     fur: ["orange", "white"],
//     gender: "male",
//     dateOfBirth: "August 6",
//   },
//   {
//     name: "Bijou",
//     heightInMM: 75,
//     fur: ["white"],
//     gender: "female",
//     dateOfBirth: "July 10",
//   },
//   {
//     name: "Oxnard",
//     heightInMM: 100,
//     fur: ["grey", "white"],
//     gender: "male",
//     dateOfBirth: "May 3",
//   },
//   {
//     name: "Boss",
//     heightInMM: 120,
//     fur: ["brown", "white"],
//     gender: "male",
//     dateOfBirth: "September 21",
//   },
//   {
//     name: "Snoozer",
//     heightInMM: 85,
//     fur: ["brown", "white", "pink"],
//     gender: "male",
//     dateOfBirth: "January 14",
//   },
// ];

// function extractNames(array) {
//     let values = [];
//     for(let i = 0; i < array.length; i++) {
//         values.push(array[i].name)
//     }
//     return values
//
// }

// console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];

// const getTallest = function (arr) {
//   arr.sort(function (a, b) {
//     if (a.heightInMM < b.heightInMM) return 1;
//     if (a.heightInMM > b.heightInMM) return -1;
//     return 0;
//   });
//   return arr[0];
// };

// console.log(getTallest(hamsters)); // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}

// function largestHamster(x) {
//     let hamster = [];
//     x.forEach(function(el) {
//         hamster.push({
//             height: el.heightInMM,
//             name: el.name,
//         })
//         return console.log(hamster.sort());
//     })
//     return console.log(hamster[0])
// }
//
// largestHamster(hamsters)

// function add(a, b = 3) {
//     const total = a + b;
//     return total
// }



// function genderArrays(arr) {
//     let ladyHamsters = [];
//     let boyHamsters = [];
//     arr.forEach(function(obj) {
//         if (obj.gender.toLowerCase() === "male") {
//             ladyHamsters.push(obj)
//         } else {boyHamsters.push(obj)}
//     })
//     return console.log(ladyHamsters, boyHamsters)
// }
//
//
// genderArrays(hamsters)







// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.

// function singleFurColor(arr) {
//     let oneColorHamster = []
//     arr.forEach(function(color) {
//         if (color.fur.length == 1) {
//             oneColorHamster.push(color)
//         }
//     });
//
//     return oneColorHamster
//
// }
//
// console.log(singleFurColor(hamsters)); // returns [{name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10"}];



// Write a function that takes in an array of objects and returns the object with the most colors in the fur array.

// function mostColorful(arr) {
//   let mostColors = {fur: []};
//   arr.forEach(function(obj) {
//     if (obj.fur.length > mostColors.fur.length) {
//       mostColors = obj;
//     }
//   });
//   return mostColors;
// }
//
// console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};


// function describeNumber(x) {
//   if (typeof x !== "number") {
//     return  console.log("please enter a number")
//   } else {
//     let numObj = {
//       number: x,
//       evenOrOdd: "",
//       factors: [],
//       numberOfDigits: 0,
//     }
//     if (x % 2 === 0 ) {
//       numObj.evenOrOdd = "even"
//     } else numObj.evenOrOdd = "odd"
//
//     for (let i = 1; i <= x; i++) {
//       if(x % i === 0) {
//         numObj.factors.push(i)
//       }
//     }
//     function getLength(x) {
//       numObj.numberOfDigits = x.toString().length
//     }
//     getLength(x)
//     return numObj
//   }
//
// }

// console.log(describeNumber(19))

// Write a JavaScript function that takes in an array of numbers and returns an array of the same length where all of the numbers have been replaced with the number multiplied by 3.

// function multiplyElementsByThree(x) {
//   let newArr = []
//   x.forEach(function (item) {
//     newArr.push(item * 3)
//   })
//   return newArr
// }
//
// console.log(multiplyElementsByThree([3,4,5])); // returns [9, 12, 15];
// console.log(multiplyElementsByThree([12,8])); // returns [36, 24];
// console.log(multiplyElementsByThree([100])); // returns [300];
// console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];