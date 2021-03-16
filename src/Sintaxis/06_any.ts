// Permite cualquier tipo
// No es recomendado usar el tipo any, ya que typescript pierde su sentido.
// Deberia ser la ultima opcion a usar

let cosas: any[] = [10,2,true,'cukiii'];

// Se recomienda usar union: number | string | boolean