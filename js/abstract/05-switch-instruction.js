/* альтернатива else...if. область применения switch ограничена задачами
с одним общим вопросом и множеством вариантов ответов */

"use strict";

let cost;
let subscription = "premium";

switch (subscription) {
  case "free":
    cost = 0;
    break;
  case "pro":
    cost = 100;
    break;
  case "premium":
    cost = 500;
    break;
  default:
    console.log("Invalid subscription type!");
}

console.log(cost);
