/* используется как синтаксически краткая замена if...else.
<условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно> */

"use strict";

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // adult

// рефакторинг

const newAge = 20;
const newType = newAge >= 18 ? "adult" : "child";

console.log(newType);
