import * as minimum from "./minimum.js";
// import * as normal from "./normal.js";
// import * as maximum from "./maximum.js";

// age determination
alert(
  "You will be asked to input your age, and we'll determine who you are..."
);
const userAge = minimum.graduateUserAge(prompt("What is your age?", 100));
alert(`You are ${userAge}`);
alert("Let's continue!");

// symbol determination
alert(
  "Press number key from 0 to 9 and we show you symbol which is situated at the top of a number key..."
);
const userSymbol = minimum.displaySymbol(
  prompt("Type number key from 0 to 9...", 1)
);
alert(`The symbol you are looking for is " ${userSymbol} "`);
alert("Let's continue!");

// a range of numbers addition
alert(
  "Enter the beginning and end of the range of numbers, and we'll calculate their sum..."
);
const userRange = minimum.sumNumbersRange(
  prompt("Enter the beginning of the range...", 1),
  prompt("Enter the end of the range...", 100)
);
alert(`The sum of all numbers in your range is " ${userRange} "`);
closeTab();

// simply close tab offer
function closeTab() {
  if (confirm("Do you want to quit?")) {
    alert("Goodbye!");
    window.close();
  } else {
    alert("Goodbye anyway!!!");
    window.close();
  }
}
