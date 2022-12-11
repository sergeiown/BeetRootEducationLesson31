function graduateUserAge(userAge) {
  let resaultGraduation =
    userAge < 1
      ? "false data submitter!"
      : userAge < 12
      ? "a child."
      : userAge < 18
      ? "a teenager."
      : userAge < 60
      ? "an adult."
      : userAge < 123
      ? "a pensioner."
      : userAge > 122
      ? "false data submitter!"
      : "false data submitter!";

  // let resaultGraduation = "";
  // if (userAge < 1) {
  //   resaultGraduation = "false data submitter!";
  // } else if (userAge < 12) {
  //   resaultGraduation = "a child.";
  // } else if (userAge < 18) {
  //   resaultGraduation = "a teenager.";
  // } else if (userAge < 60) {
  //   resaultGraduation = "an adult.";
  // } else if (userAge < 123) {
  //   resaultGraduation = "a pensioner.";
  // } else if (userAge > 122) {
  //   resaultGraduation = "false data submitter!";
  // } else {
  //   resaultGraduation = "false data submitter!";
  // }

  return resaultGraduation;
}

function displaySymbol(userKey) {
  let resultSymbol = "";

  switch (Number(userKey)) {
    case 0:
      resultSymbol = ")";
      break;
    case 1:
      resultSymbol = "!";
      break;
    case 2:
      resultSymbol = "@";
      break;
    case 3:
      resultSymbol = "#";
      break;
    case 4:
      resultSymbol = "$";
      break;
    case 5:
      resultSymbol = "%";
      break;
    case 6:
      resultSymbol = "^";
      break;
    case 7:
      resultSymbol = "&";
      break;
    case 8:
      resultSymbol = "*";
      break;
    case 9:
      resultSymbol = "(";
      break;
    default:
      resultSymbol = "unknown because you have not pressed the right key";
  }

  // if (resultSymbol >= 0 && resultSymbol <= 9) {
  // } else {
  //   resultSymbol = "you had to enter a number from 0 to 9";
  // }

  return resultSymbol;
}

function sumNumbersRange(userRangeStart, userRangeEnd) {
  let resultSum = Number(userRangeStart);

  while (userRangeStart < userRangeEnd) {
    userRangeStart++;

    if (userRangeStart <= userRangeEnd) {
      resultSum += userRangeStart;
    }
  }

  return resultSum;
}

function findCommonDivisor(userFirstNumber, userSecondNumber) {
  if (userSecondNumber === 0) {
    return userFirstNumber;
  } else if (
    userFirstNumber instanceof Number &&
    userSecondNumber instanceof Number
  ) {
    return "unknown because you have not entered two numbers";
  } else {
    return findCommonDivisor(
      userSecondNumber,
      userFirstNumber % userSecondNumber
    );
  }
}

function findAllDevisors(userNumber) {}

export {
  graduateUserAge,
  displaySymbol,
  sumNumbersRange,
  findCommonDivisor,
  findAllDevisors,
};
