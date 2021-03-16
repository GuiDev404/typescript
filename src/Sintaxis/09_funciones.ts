// function nombreCompleto(nombre:string, apellido: string, segundoNombre: string = ''): string {
//  return `${nombre} ${segundoNombre && segundoNombre+' '}${apellido}`
// }

// console.log(nombreCompleto('Guido','Rivoira'));
// console.log(nombreCompleto('Guido','Rivoira','Jose'));

// function multiplicarArray (nums: number[], multiplo: number): number[] {
//   return nums.map(num=> num * multiplo);
// }

// console.log(multiplicarArray([10,20,30], 3))

// function saludo(who: string): void {
//   console.log(`Holaaaa: ${who}`);
// }

// saludo('pepe');

// const getData = async (url:string): Promise<any> => {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data;
// }

const imprimir = (
  a: number,
  b: number,
  mostrar: (value: number) => void | Function
): void => {
  let resultado = a + b;
  mostrar(resultado);
};

imprimir(10, 20, (res) => {
  console.log(`El resultado de la operacion es: ${res}`);
});

let fnPrint: (
  a: number,
  b: number,
  mostrar: (value: number) => void | Function
) => void;

fnPrint = imprimir;
// fnPrint = 'imprimir'; // error porque se esperaba una funcion