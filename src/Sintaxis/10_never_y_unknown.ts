// unknown (usar en reemplazo de any)
let userInput: unknown = 4; // or any 
userInput = 'str';
userInput = false;

// el ser userInput: any permite la asignacion

// en cambio si userInput: es unknown no permite la asignacion
// esto lo corregimos asegurandos del tipo con una validacion

if(typeof(userInput) === 'number'){
  const number1:number = userInput;
  console.log(number1)
}

// ---------------------- ---------------------- ----------------------
// never, es algo no se ejecuta por ejemplo cuando hay un error 

const throwError = (message: string): string | never =>{
  if(!message){
    // nunca se ejecuta
    throw new Error('no se ejecuta'); 
  }
  
  return message;
}

throwError('')

// ----------------------

function infinityLoop():never {
  while(true){}
}