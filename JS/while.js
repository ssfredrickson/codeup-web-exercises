console.log("-------------------------------------------------------");


function listMemory(i , n){
  while (i <= n) {
    console.log(i);
    i *= 2;
}

}
listMemory(2, 65536)


console.log("-------------------------------------------------------");

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;

console.log(`Come get your cones we only have ${allCones} left!`);

do {
  // This will give you a random number between 1-5 to simulate the number a customer bought
  let bought = Math.floor(Math.random() * 5) + 1;

  //show what the customer bought
  console.log(`Customer purchasing ${bought} cone(s)`);

  //reduce the total of cones left by what the customer bought
  allCones -= bought;

  // show how many cones are left
  console.log(`We only have ${allCones} cones left!`);
} while (allCones > Math.floor(Math.random() * 5) + 1);
{
  console.log(`I'm sorry we are out off cones`);
}
