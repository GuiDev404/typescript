// La definicion seria identificadores constantes globales enumerados

enum roles {
  usuario,
  admin
}

const user: {
  username: string,
  listMovies: string[],
  rol: roles.usuario | number | any  
} = {
  username: '_GR',
  listMovies: ['Go!(2021)','Sing Street'],
  rol: roles.usuario
}

// console.log(user)

// --------------- Ejemplo 2
enum colors {
  red,
  blue,
  green,
  dark,
  light
}

interface IPreference {
  fontSize: number,
  fontFamily: string,
  color: colors
}

const preferences: IPreference = {
  fontSize: 14,
  fontFamily: 'Times New Roman',
  color: colors.dark
}

const colorsList: string[] = [
  'red',
  'blue',
  'green',
  'dark',
  'light'
];

console.log(colorsList[preferences.color])

// ----------- Ejemplo 3
// permite cambiar los valores que tomaran

enum sizes {
  sm = 5,
  md,
  lg = 15,
  xl
}

enum colorsHex {
  red = '#ff0000',
  blue = '#0000ff',
  green = '#00ff00',
  dark = '#000000',
}

console.log(colorsHex)
console.log(colorsHex.blue)