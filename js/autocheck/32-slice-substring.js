/* присвой переменной substring выражение создания подстроки 
длинной length символов (от начала) из строки string */

"use strict";

function getSubstring(string, length) {
  const substring = string.slice(0, length);
  return substring;
}
