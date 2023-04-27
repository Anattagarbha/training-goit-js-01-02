/* функция getShippingCost(country) должна проверять 
возможность доставки товара в страну пользователя */

"use strict";

function getShippingCost(country) {
  let message;
  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  return message;
}
