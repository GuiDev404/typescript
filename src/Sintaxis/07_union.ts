type StringOrNumber = string | number;

function padLeft(value: string, padding: StringOrNumber) {
  if(typeof(padding) === 'number'){
    return Array(padding + 1).join(' ') + value;
  } 

  if(typeof(padding) === 'string'){
    return padding + value;
  } 

  throw new Error(`Se esperaba un 'string' pero se recibio un '${typeof(padding)}'`);
}

// try {
//   console.log(padLeft('Hola mundo', 10))
// } catch (error) {
//   console.log(error.message)
// }

function merge(first: StringOrNumber, second: StringOrNumber): StringOrNumber {
  let result: StringOrNumber = ''; 

  if(typeof first === 'number' && typeof second === 'number'){
    result = first + second;
  }
 
  if(typeof(first) === 'string' && typeof(second) === 'string'){
    result = `${first} ${second}`;
  }

  return result;
}

// console.log(merge(10,20))
// console.log(merge('Guido','Rivoira'))

// Union para arreglos
const data: (number | string | boolean)[] = [0, 'cero',1,'uno','dos', false] 
