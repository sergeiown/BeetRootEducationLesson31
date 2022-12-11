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

function numbersSorting(userNumbers) {
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;
  let nulls = 0;
  const array = userNumbers.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) even++;
    if (array[i] % 2 !== 0) odd++;
    if (Math.sign(array[i]) === 1) positive++;
    if (Math.sign(array[i]) === -1) negative++;
    if (Math.sign(array[i]) === 0) nulls++;
  }
  return `even - ${even};
  
  odd - ${odd};
  
  positive - ${positive};
  
  negative - ${negative};
  
  nulls - ${nulls}.`;
  //   return { even, odd, positive, negative, nulls };
}

function daysRotation(userDay) {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = userDay;
  while (
    confirm(
      `The current day is ${week[currentDay]}.
      
      Do you want to see the next day?`
    )
  ) {
    currentDay = (currentDay + 1) % week.length;
    // return `${week[currentDay]}`;
  }
}

export { reverseString, discountCalculation, numbersSorting, daysRotation };
