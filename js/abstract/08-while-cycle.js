/* while - цикл с предусловием, который выполняется,
пока истинно условие, указанное перед его началом */

"use strict";

let counter = 0;

while (counter < 10) {
  console.log(`counter: ${counter}`);
  counter += 1;
}

// будем заполнять места в отеле

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(`clients: ${clientCounter}`);
  clientCounter += 1;
}
