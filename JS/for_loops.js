"use strict";

function showMultiplicationTable(x) {
  for (let i = 0; i < 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
}

showMultiplicationTable(7);
console.log("-------------------------------------------------------");

let number;
function randomNumber() {
  for (let i = 0; i < 10; i++) {
    number = Math.floor(Math.random() * 180 + 20);
    if (number % 2 === 0) {
      console.log(`${number} is even`);
    } else console.log(`${number} is odd`);
  }
}

randomNumber();
console.log("-------------------------------------------------------");

let string = "";

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);

console.log("-------------------------------------------------------");

for (let i = 100; i >= 5; i -= 5) {
  console.log(i);
}

console.log("-------------------------------------------------------");


