/* присвой переменной result выражение проверки вхождения 
имени (параметр name), в полное имя (параметр fullname) */

"use strict";

function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}
