/* прервать выполнение цикла можно в любой момент, используя оператор break */

// найдём число 3

"use strict";

for (let i = 0; i <= 5; i++) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}
