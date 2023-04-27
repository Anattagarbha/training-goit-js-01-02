/* присвой переменной isInRange выражение проверки вхождения 
number в числовой промеждуток от start до end. */

"use strict";

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  return isInRange;
}
