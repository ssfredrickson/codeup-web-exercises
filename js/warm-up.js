// function seven() {
//     return 7
// }
//
// console.log(seven());
// -----------------------------------------------


// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

function findFactors(x) {
    let factors = []
    if (typeof x === "number") {
        for (let i = 1; i <= x; i++){
            if (x % i == 0) {
                factors.push(i)
            }
        }
    } else return console.log(false)


    return console.log(factors)
}

findFactors(6); // returns [1,2,3,6];
findFactors(16); // returns [1,2,4,8,16];
findFactors(0); // returns [];
findFactors(true); // returns false;
findFactors("13"); // returns false;
findFactors([54,72,144]); // returns false;
findFactors({value: 64}); // returns false;
findFactors(); // returns false;