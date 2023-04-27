/* прерывает выполнение текущей итерации цикла */

// вывод нечётных чисел

"use strict";

const number = 10;

for (let i = 0; i < number; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Нечётное i: ", i);
}
