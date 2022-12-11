import * as minimum from "./minimum.js";
// import * as normal from "./normal.js";
// import * as maximum from "./maximum.js";

confirm;
const userAge = minimum.graduateUserAge(prompt("What is your age?", 100));
alert(`You are ${userAge}`);

function closeTab() {
  if (confirm("Бажаєте закінчити?")) {
    window.close();
  }
}
