/* область видимости - доступность переменных в определенном 
месте кода. Глобальная область используется по умолчанию -
все имеют доступ к переменным, объявленным в ней */

"use strict";

const value = 5;

if (true) {
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // 5

// любая конструкция с фигурными скобками {}
// создает новую локальную область видимости

if (true) {
  const blockValue = 5;
  console.log("Block scope: ", blockValue); // 5
}

console.log("Global scope: ", blockValue); // ReferenceError

// область видимости имеет доступ ко всем переменным выше по иерархии,
// но не может получить доступ к переменным во вложенных областях

const global = "global";

if (true) {
  const blockA = "block A";
  // видим глобальную и локальную A
  console.log(global);
  console.log(blockA);
  // blockB и blockC не найдены в доступных областях видимости
  console.log(blockB); // ReferenceError
  console.log(blockC); // ReferenceError
  if (true) {
    const blockB = "block B";
    // видим глобальную, внешнюю A и локальную B
    console.log(global);
    console.log(blockA);
    console.log(blockB);
    // blockC не найдена в доступных областях видимости
    console.log(blockC); // ReferenceError
  }
}

if (true) {
  const blockC = "block C";
  // видим глобальную и локальную C
  console.log(global);
  console.log(blockC);
  // blockA и blockB не найдены в доступных областях видимости
  console.log(blockA); // ReferenceError
  console.log(blockB); // ReferenceError
}
