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

function countEs(x) {
    if (typeof x === "string") {
        let count = 0;
        let normalizedStr = x.toLowerCase();
        for (let i = 0; i < x.length; i++) {
            if (normalizedStr.charAt(i) === "e") {
                count++;
            }
        }
        return count;
    } else {
        return false;
    }
}

console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(["e", "E"])); // returns false;
console.log(countEs()); // returns false;
