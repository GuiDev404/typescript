/**
 * Atributos de accesibilidad

 * Public: Pueden ser llamados desde cualquier lugar
 * Private: pueden ser llamados solo de la misma clase
 * Protected: pueden ser llamados solo de la misma clase y sus derivadas (herencia)
 * Static: permite acceder a metodos o propiedades sin instanciar, la clase Math es tiene metodos estaticos, muy utilizada para utilidades, dentro del metodo no me permite acceder a propiedades que no sean estaticas
 * Clases abstractos: son clases bases, ts no me permite instanciar clases abstractas. Necesita ser extendida o creada por otra clase
**/

class Vehiculo {
  // private brandName: string;
  // private model: string;
  // private color: string;

  constructor(
    protected readonly brandName: string,
    private readonly model: string, // si le pongo readonly y le saco  readonly puedo acceder desde afuera solo para leerlo
    private readonly color: string,
    private price: number
  ){
    // this.brandName = brandName;
    // this.model = model;
    // this.color = color;
  }

  // Getters y setters, se escriben como funciones pero se acceden como propiedades 
  // prop + tab genera automaticamente

  public get currentPrice(): string | number {
    // return this.price;
    return `El precio actual del ${this.brandName} es de: ${this.price}`;
  }

  public set changePrice(newPrice : number) {
    this.price = newPrice;
  }
  
  static PriceToCurrency (value: number, typeOfCurrency: string): string {
    let result = '';
    switch (typeOfCurrency) {
      case 'USD':
        result = 'US ' + value;  
        break;
      case 'PESO':
        result = '$ ' + value;  
      break;
    }

    return result;
  }

  drive():void {
    // this.brandName = 's'; // No puede ya que es de solo lectura, es como una constante
    console.log(`Conduciendo un ${this.brandName} modelo: ${this.model} de color: ${this.color}`)
  }
}

const vehiculo = new Vehiculo('Volkswagen','3','rojo',200000);
//vehiculo.brandName = 'Toyota'; // error porque es privado, si fuera solo readonly me permite leer

vehiculo.drive()
// console.log(vehiculo)

// let moto = {
  // brandName: 'Mazda',
//   drive: vehiculo.drive
// };

// moto.drive()

class Car extends Vehiculo {

  // Polimorfismo (override)
  drive():void {
    console.log(`Estoy conduciendo un auto\nMarca: ${this.brandName}`)
  }

}

const auto: Car = new Car('Mazda','3','azul',10000)
console.log(auto.currentPrice)
auto.changePrice = 300000;
console.log(auto.currentPrice)
auto.drive()

console.log(Car.PriceToCurrency(2000, 'USD'));
console.log(Vehiculo.PriceToCurrency(50000, 'PESO'));

abstract class Persona {
  private estado: boolean;
  private edad: number;

  constructor(
    private nombre: string,
    private apellido: string,
    private fechaNac: Date
  ){
    this.estado = true;
    this.edad = new Date().getFullYear() - fechaNac.getFullYear();
  }

  public get getEdad() : number {
    return this.edad;
  }

  public get getEstado() : boolean {
    return this.estado;
  }

  public set setEstado(estado : boolean) {
    this.estado = estado;
  }
  
  abstract metodoAbs(): void;
}

class Alumno extends Persona {
  // es obligatorio implementarlos si tengo metodos abstractos
  metodoAbs(){
    console.log('metodo abstracto - persona')
  }
}

// La interfaz se agrega con implements

interface Trabaja {
  dineroGanado(horasTrabajas: number, gananciaPorHora: number): number;
}

class Empleado extends Persona implements Trabaja {
  // es obligatorio implementarlos si tengo metodos abstractos
  metodoAbs(){
    console.log('metodo abstracto - empleado')
  }

  dineroGanado(horasTrabajas: number, gananciaPorHora: number): number{
    return horasTrabajas * gananciaPorHora;
  }
}

const per1 = new Alumno('Guido','Rivoira', new Date(2000, 3, 24));
console.log(per1.getEdad);