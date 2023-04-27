/* блок else...if позволяет добавить еще один оператор if с условием */

"use strict";

let cost;
const subscription = prompt("Enter your subscription type: ");

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type!");
}

console.log(`Your subscription costs ${cost} dollars!`);
