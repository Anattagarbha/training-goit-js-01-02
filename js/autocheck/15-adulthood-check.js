/* Добавь выражение проверки совершеннолетия пользователя, 
значения параметра age, в условие для инструкции if. */

"use strict";

let message;

function checkAge(age) {
  if (age >= 18) {
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }
  return message;
}
