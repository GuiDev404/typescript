// Las interfaces se usan para definir la estructuras de las clases/objetos

enum Role {
  Doctor,
  Anestesista,
  Asistente,
  Administrativo
}

interface IStaff {
  name: string, 
  email: string, 
  role: Role
}

interface IBillable {
  total: number,
  currentBill(): string 
}

const medico = {
  name: 'Guido',
  email: 'test@test.com',
  role: Role.Doctor,
  total: 25,
  currentBill() {
    return `Valor actual de la factura: ${this.total}`
  }
}

const printStaff = (staff: IStaff):void => {
  console.log(staff)
}

printStaff(medico)

const printCurrentBill = (bill: IBillable):void =>{
  console.log(bill.currentBill())
}

printCurrentBill(medico);