"use strict";
// unknown (usar en reemplazo de any)
let userInput = 4; // or any 
userInput = 'str';
userInput = false;
// el ser userInput: any permite la asignacion
// en cambio si userInput: es unknown no permite la asignacion
// esto lo corregimos asegurandos del tipo con una validacion
if (typeof (userInput) === 'number') {
    const number1 = userInput;
    console.log(number1);
}
// ---------------------- ---------------------- ----------------------
// never, es algo no se ejecuta por ejemplo cuando hay un error 
const throwError = (message) => {
    if (!message) {
        // nunca se ejecuta
        throw new Error('no se ejecuta');
    }
    return message;
};
throwError('');
// ----------------------
function infinityLoop() {
    while (true) { }
}
