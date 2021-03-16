// Si lo defino como tipo 'object' NO ME DEJA acceder a las propiedades

// let persona: object = {
//   nombre: 'Guido',
//   edad: 10
// }

// Si defino cada tipo de dato para las propiedades si me deja acceder a su valor

let persona:  {
  nombre: string,
  edad: number,
  direccion: {
    ciudad: string,
    calle: string
  }
} = {
  nombre: 'Guido',
  edad: 20,
  direccion: {
    ciudad: 'Suardi',
    calle: 'Falsa 123'
  } 
}

console.log(persona)