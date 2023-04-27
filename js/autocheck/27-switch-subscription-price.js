/* дополни код инструкции switch */

"use strict";

function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case "starter":
      price = 0;
      break;

    case "professional":
      price = 20;
      break;

    case "organization":
      price = 50;
      break;
  }
  return price;
}
