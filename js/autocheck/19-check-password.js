/* дополнить код функции проверки пароля пользователя */

"use strict";

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}
