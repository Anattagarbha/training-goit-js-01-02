/* дополни код функции проверкой количества товаров на складе */

"use strict";

function checkStorage(available, ordered) {
  let message;
  if (available < ordered) {
    message = "Not enough goods in stock!";
  } else {
    message = "Order is processed, our manager will contact you.";
  }
  return message;
}
