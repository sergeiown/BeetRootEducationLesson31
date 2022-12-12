function guessNumber(min = 0, max = 100) {
  function search() {
    let currentNumber = Math.round(min + Math.random() * (max - min));
    let choice = prompt(
      `Your number is smaller then ${currentNumber}? - type "1"
        Your number is ${currentNumber}? - type "2"
        Your number is bigger then ${currentNumber}? - type "3"`,
      "2"
    );

    "2" === choice
      ? alert(`Your number is ${currentNumber} !!!`)
      : ("3" === choice && (min = currentNumber),
        "1" === choice && (max = currentNumber),
        search());
  }

  search();
}

function multiplicationTableBuilder(min = 1, max = 10) {
  let row = "";
  let arr = [];
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      row += `${i}*${j}=${+i * +j} `;
    }

    arr.push(row);
    // console.log(arr);
    row = "";
  }
  return arr;
}

function dateCalculation(year = "2022", month = "12", day = "12", add = "1") {
  year = Number(year);
  month = Number(month) - 1;
  day = Number(day);
  add = Number(add);

  let userDate = new Date(year, month, day);
  userDate.setDate(userDate.getDate() + add);

  const dateOptions = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return userDate.toLocaleString("en-us", dateOptions);
}

export { guessNumber, multiplicationTableBuilder, dateCalculation };
