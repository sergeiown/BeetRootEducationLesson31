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

  if (resultSymbol >= 0 && resultSymbol <= 9) {
  } else {
    resultSymbol = "you had to enter a number from 0 to 9";
  }

  return resultSymbol;
}

function addupNumbers(userRangeStart, userRangeEnd) {}

function findCommonDivisor(userFirstNumber, userSecondNumber) {}

function findAllDevisors(userNumber) {}

export {
  graduateUserAge,
  displaySymbol,
  addupNumbers,
  findCommonDivisor,
  findAllDevisors,
};
