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

export { guessNumber, multiplicationTableBuilder };
