/* используя тернарный оператор дополни код функции */

"use strict";

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : "Access denied, wrong password!";
  return message;
}
