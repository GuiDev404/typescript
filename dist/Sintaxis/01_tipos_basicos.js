"use strict";
//  -------------------------  Notacion de tipos ---------------------
const DNI = 42101445;
let isNumber = typeof (DNI) === 'number';
let nombreDeUsuario = 'SirGR';
console.table({
    typeNumber: DNI,
    typeBoolean: isNumber,
    typeString: nombreDeUsuario
});
// -------------------------  Inferencia de tipos ---------------------
let nombreMascota = 'Pepe';
// NO ME DEJA ASINAR OTRO TIPO PORQUE TYPESCRIPT SABE QUE FUE DECLARADA Y ASIGNADA COMO STRING
// nombreMascota = 10;
// ------------------------------ OTROS TIPOS ------------------------------
// NUMBER
const calcSquareArea = (side) => console.log(side * side);
const squareSide = 10;
calcSquareArea(squareSide);
const colorHex = 0xff00;
const floatNumber = 1.5;
const bin = 0b00110011;
// STRING
function printSquareArea(side) {
    return `Square area is: ${side * side}`;
}
const resultForPrint = printSquareArea(squareSide);
console.log(resultForPrint);
// BOOLEAN
// const isPrinted: boolean = 0; // ERROR, LO CONSIDERA UN NUMERO
let isPrinted = false;
function printMsg(msg) {
    isPrinted = true;
    console.log(msg);
}
if (!isPrinted) {
    printMsg('All my dreamsss');
}
