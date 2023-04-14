console.log("Hello from external JavaScript");
let color = prompt("What's your favorite color?");
alert(color + " is a good color, not the best color, but a good color.");

alert("Press a button to explore the questions.");
// 1st Question
// -You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
function rentalPrice() {
  let mermaid = prompt("How many days for Little Mermaid?");
  let brotherBear = prompt("How man days for Brother Bear?");
  let hercules = prompt("How many days for Hercules?");
  let day = 3;
  let price = (Number(mermaid) + Number(brotherBear) + Number(hercules)) * day;
  return price;
}
document.getElementById("buttonOne").onclick = function () {
  alert("Your rental total is " + "$" + rentalPrice() + ".00");
};

// Question 2
// -Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
function work() {
  let google = prompt("What was your hourly rate at Google?");
  let amazon = prompt("What was your hourly rate at Amazon?");
  let facebook = prompt("What was your hourly rate at Facebook?");
  let facebookHours = prompt(
    "How many hours did you work at Facebook last week?"
  );
  let googleHours = prompt("How many hours did you work at Google last week?");
  let amazonHours = prompt("How many hours did you work at Amazon last week?");

  let total =
    Number(google) * Number(googleHours) +
    Number(amazon) * Number(amazonHours) +
    (Number(facebook) + Number(facebookHours));
  return total;
}

document.getElementById("buttonTwo").onclick = function () {
  alert("Do you remember how much money you made last week.");
  alert(
    "Fine, ill add it up for you! The total you earned last week was $" + work()
  );
};

// Question 3
// -A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
function schedule() {
  let full = confirm('Is the class full? "Ok" for "Yes", "Cancel" for "No"');
  let conflict = confirm(
    'Does this class conflict with your schedule? "Ok" for "Yes", "Cancel" for "No"'
  );

  if (full === false && conflict === false) {
    alert("You can attend this class");
  } else {
    alert("Sorry you may not attend this class");
  }
}
document.getElementById("buttonThree").onclick = function () {
  schedule();
};

// Question 4
// -A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.  Premium members do not need to buy a specific amount of products.
function discount() {
  let premium = confirm(
    'Are you a Premium member? "Ok" for "Yes", "Cancel" for "No"'
  );
  let itemsPurchases = prompt("How many items did you purchase?");

  if (premium === true || Number(itemsPurchases) > 2) {
    alert("Please enjoy your discount");
  } else {
    alert(
      "Please become a member or purchase more than 2 items to enjoy the discount"
    );
  }
}
document.getElementById("buttonFour").onclick = function () {
  discount();
};
