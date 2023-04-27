/* Проведи рефакторинг кода, заменив инструкцию if..else 
на switch, и не забудь о блоке default (аналог else). */

"use strict";

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  switch (password) {
    case null:
      message = "Canceled by user!";
      break;

    case "jqueryismyjam":
      message = "Welcome!";
      break;

    default:
      message = "Access denied, wrong password!";
  }
  return message;
}
