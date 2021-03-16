const retirarDinero = (montoRetirar: number): Promise<number> => {
  let dineroActual = 1000;

  return new Promise((resolve, reject)=> {
    if(montoRetirar > dineroActual){
      reject('No hay suficiente dinero')
    } else {
      dineroActual -= montoRetirar;
      resolve(dineroActual);
    }
  })

}

retirarDinero(1000)
  .then(console.log)
  .catch(console.error)
  
const getNames = new Promise((resolve: Function, reject: Function):void => {
  if(true){
    setTimeout(()=> resolve('Todo ok!'), 2000)
  } else {
    reject(new Error('Algo salio mal!'))
  }
});

getNames
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err.message);
  });