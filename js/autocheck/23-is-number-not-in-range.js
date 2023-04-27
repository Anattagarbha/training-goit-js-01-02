/* Присвой переменной isNotInRange выражение инверсии 
значения переменной isInRange используя оператор !. */

"use strict";

function isNumberNotInRange(start, end, number) {
  const isInRage = number >= start && number <= end;
  const isNotInRange = !isInRage;
  return isNotInRange;
}
