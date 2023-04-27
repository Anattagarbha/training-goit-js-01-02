/* функция formatMessage(message, maxLength) принимает строку (параметр message) 
и форматирует её, если длина превышает значение в параметре maxLength */

"use strict";

function formatMessage(message, maxLength) {
  let result;
  if (message.length === maxLength) {
    result = message;
  } else if (message.length > maxLength) {
    result = message.slice(0, maxLength) + "...";
  }
  return result;
}
