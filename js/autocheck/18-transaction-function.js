/* дополнить функционал:
- объявить переменную подсчёта суммы заказа
- сделать проверку платежеспособности клиента
- вывести сообщение о транзакции */

"use strict";

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  return message;
}
