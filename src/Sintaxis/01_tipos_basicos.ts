//  -------------------------  Notacion de tipos ---------------------
const DNI:number = 42101445;
let isNumber:boolean = typeof(DNI) === 'number';
let nombreDeUsuario:string = 'SirGR';

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
const calcSquareArea = (side: number): void => console.log(side * side);

const squareSide:number = 10;
calcSquareArea(squareSide);

const colorHex: number = 0xff00;
const floatNumber: number = 1.5;
const bin: number = 0b00110011;

// STRING
function printSquareArea (side: number):string {
  return `Square area is: ${side * side}`;
}

const resultForPrint: string = printSquareArea(squareSide);
console.log(resultForPrint)

// BOOLEAN

// const isPrinted: boolean = 0; // ERROR, LO CONSIDERA UN NUMERO
let isPrinted: boolean = false; 

function printMsg(msg: string):void {
  isPrinted = true;
  console.log(msg)
}

if(!isPrinted) {
  printMsg('All my dreamsss')
}
