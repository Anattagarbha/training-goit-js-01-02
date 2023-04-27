/* дополни шаблонную строку в переменной message длиной строки из параметра name */

"use strict";

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;
  return message;
}
