import * as minimum from "./minimum.js";
import * as normal from "./normal.js";
import * as maximum from "./maximum.js";

// age determination
alert("You will be asked to input your age and we'll determine who you are...");
const userAge = minimum.graduateUserAge(prompt("What is your age?", 100));
alert(`You are ${userAge}`);
alert("Let's continue!");

// symbol determination
alert(
  "Press number key from 0 to 9 and we'll show you symbol which is situated at the top of a number key..."
);
const userSymbol = minimum.displaySymbol(
  prompt("Type number key from 0 to 9...", 1)
);
alert(`The symbol you are looking for is " ${userSymbol} "`);
alert("Let's continue!");

// a range of numbers addition
alert(
  "Enter the beginning and end of the range of numbers and we'll calculate their sum..."
);
const userRange = minimum.sumNumbersRange(
  prompt("Enter the beginning of the range...", 1),
  prompt("Enter the end of the range...", 100)
);
alert(`The sum of all numbers in your range is " ${userRange} "`);
alert("Let's continue!");

// the greatest common divisor calculation
alert("Enter two numbers and we'll calculate their greatest common divisor...");
const userDivisor = minimum.findCommonDivisor(
  prompt("Enter the first number...", 2),
  prompt("Enter the second number...", 4)
);
alert(`The greatest common divisor is " ${userDivisor} "`);
alert("Let's continue!");

// all divisors finder
alert("Input a number different from zero and we'll show all divisors...");
const userDivisorsArray = minimum.findAllDivisors(
  prompt("Input a number different from zero", 5)
);
alert(`The divisors are: ${userDivisorsArray}`);
alert("Let's continue!");

// Palindrome determination
alert(
  "Enter any number or string and we will determine whether it is a palindrome..."
);
const userPalindrome = normal.reverseString(
  prompt("Enter any number or string", "qwertyytrewq")
);
alert(`This is ${userPalindrome}`);
alert("Let's continue!");

// Discount calculation
alert("Please enter the invoice amount and we'll calculate your discount...");
const userDiscount = normal.discountCalculation(
  prompt("Enter the invoice amount", 150)
);
alert(userDiscount);
alert("Let's continue!");

// Numbers sorting
alert("Please enter several numbers separated by a space...");
const userNumbers = normal.numbersSorting(
  prompt(
    "Enter several numbers separated by a space",
    "23 -15 234 0 19 -28 234 0 -11 678"
  )
);
alert(`${userNumbers}`);
alert("Let's continue!");

// Days rotation
alert("Days of week demonstration...");
normal.daysRotation("0");
alert("Let's continue!");

// Number guessing game
alert("Guess a number from 0 to 100 and we'll guess it...");
maximum.guessNumber();
alert("Let's continue!");

// Multiplication table
alert("Now we shall bild a multiplication table from 1 to 10...");
alert(maximum.multiplicationTableBuilder());
alert("And the next will be the final script!");

// Date calculation
const userDateChoice = maximum.dateCalculation(
  prompt("Enter year", "2022"),
  prompt("Enter month", "12"),
  prompt("Enter day", "12"),
  prompt("Enter number of days you want to add to your date", "1")
);
alert(`It will be: ${userDateChoice}`);
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
