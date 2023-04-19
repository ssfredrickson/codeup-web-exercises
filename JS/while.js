


console.log("-------------------------------------------------------");

let i = 2;
let n = 65536

while (i <= n) {
    console.log(i);
    i *= 2;
}


console.log("-------------------------------------------------------");
// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
console.log(allCones);


do {
    let bought = Math.floor(Math.random() * 5) + 1
    console.log(`Customer purchasing ${bought} cones`)
    console.log(`We only have ${allCones} cones left!`)
    allCones -= bought
}while (allCones > Math.floor(Math.random() * 5) + 1){
    console.log(`I'm sorry we are out off cones`)
}