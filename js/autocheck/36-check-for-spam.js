/* функция checkForSpam(message) принимает строку (параметр message), проверяет её 
на содержание запрещенных слов spam и sale, и возвращает результат проверки */

"use strict";

function checkForSpam(message) {
  let result;
  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
  return result;
}
