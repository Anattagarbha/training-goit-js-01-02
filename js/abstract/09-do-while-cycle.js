/* цикл с постусловием, в котором условие 
вычисляется после выполнения тела цикла */

"use strict";

let password = "";

do {
  password = prompt("Введите пароль длиннее 4 символов", "");
} while (password.length < 5);

console.log("Password: ", password);
