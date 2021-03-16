let nombrePersona: 'Guido';

// No me deja asignar otro tipo que no sea Guido
// nombrePersona = 'Pepe'

// Por si solo no sirve; es bueno usarlo con los tipos union por ejemplo
type listaValidosVacunacion = 'Ñoqui 1' | 'Huguito' | 'Ñoqui 2' | 'Ñoqui 3';

function process(browser: 'chrome' | 'firefox' | 'edge'):void {
  console.log(browser + ' is a valid browser!')
}

// process('opera') // ERROR 'opera' no coincide con los tipos "chrome" | "firefox" | "edge"
// process('chrome');

function fight(difficulty: 1 | 2 | 3) {
  console.log('Fight!!')
}

fight(1); // 2 | 3
// fight(5);Error
