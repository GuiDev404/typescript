"use strict";
// Las interfaces se usan para definir la estructuras de las clases/objetos
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Anestesista"] = 1] = "Anestesista";
    Role[Role["Asistente"] = 2] = "Asistente";
    Role[Role["Administrativo"] = 3] = "Administrativo";
})(Role || (Role = {}));
const medico = {
    name: 'Guido',
    email: 'test@test.com',
    role: Role.Doctor,
    total: 25,
    currentBill() {
        return `Valor actual de la factura: ${this.total}`;
    }
};
const printStaff = (staff) => {
    console.log(staff);
};
printStaff(medico);
const printCurrentBill = (bill) => {
    console.log(bill.currentBill());
};
printCurrentBill(medico);
