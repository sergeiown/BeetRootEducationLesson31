function reverseString(userString) {
  let resultString = userString.split("").reverse().join("");
  if (resultString === userString) {
    return "palindrome";
  }
  return "not palindrome";
}

export { reverseString };
