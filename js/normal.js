function reverseString(userString) {
  let resultString = userString.split("").reverse().join("");
  if (resultString === userString) {
    return "palindrome";
  }
  return "not palindrome";
}

function discountCalculation(userAmount) {
  if (userAmount < 200) {
    return `You have no discount up to the amount of 200.00 USD and the current amount to be paid is: ${Number.parseFloat(
      userAmount
    ).toFixed(2)} USD`;
  } else if (userAmount >= 200 && userAmount <= 300) {
    return `Your discount is 3% and amount to be paid is: ${Number.parseFloat(
      userAmount / 1.03
    ).toFixed(2)} USD`;
  } else if (userAmount > 300 && userAmount <= 500) {
    return `Your discount is 5% and amount to be paid is: ${Number.parseFloat(
      userAmount / 1.05
    ).toFixed(2)} USD`;
  } else if (userAmount > 500) {
    return `Your discount is 7% and amount to be paid is: ${Number.parseFloat(
      userAmount / 1.07
    ).toFixed(2)} USD`;
  } else {
    return `Your amount is not a number...`;
  }
}

function numbersSorting(userNumbers) {}

export { reverseString, discountCalculation, numbersSorting };
