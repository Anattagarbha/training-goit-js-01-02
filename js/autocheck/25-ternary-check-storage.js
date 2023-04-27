/* Выполни рефакторинг решения задачи «Склад товаров», 
заменив инструкцию if...else тернарным оператором. */

"use strict";

function checkStorage(available, ordered) {
  let message;

  message =
    available > ordered
      ? "The order is accepted, our manager will contact you"
      : "Not enough goods in stock!";

  return message;
}
