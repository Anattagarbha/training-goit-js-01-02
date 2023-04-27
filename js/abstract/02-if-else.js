/* расширяет синтаксис if. Если условие приводится к false, 
выполняется код после оператора else */

"use strict";

let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost);
