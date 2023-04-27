/* дополнить код функции */

"use strict";

function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (available < ordered) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
}
