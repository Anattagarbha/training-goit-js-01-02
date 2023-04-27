/* присвой переменной canAccessContent выражение проверки подписки. 
Если значение параметра subType равно строкам "pro" или "vip", 
пользователь получит доступ */

"use strict";

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip";
  return canAccessContent;
}
