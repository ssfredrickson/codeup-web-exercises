function oddNumber() {
  while (number > 50 || number % 2 === 0) {
    if (number < 50 && number % 2 !== 0) {
      break;
    }
    number = parseFloat(
      prompt(
        "Give me an odd number between 1 and 50. Dont mess around! I'm crazy and I'll keep asking."
      )

    );
  }
  alert("Thank you!");
  return number
}

function skipNumber() {
  userNumber = oddNumber()
  console.log(`Number to skip is ${userNumber}`);
  for (let i = 0; i < 50; i++) {
    if (i === userNumber) {
      console.log(`Yikes we are skipping ${userNumber}`);
      continue;
    }
    if (i % 2 !== 0) {
      console.log(i);
    }

  }
}

skipNumber();
