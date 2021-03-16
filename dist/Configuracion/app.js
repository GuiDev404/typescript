"use strict";
var _a;
console.log('filename: app.ts');
const nMaradona = 10;
const printN = (n) => {
    console.log(n);
};
// printN(nMaradona);
const text = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.innerText;
let persons = [
    { name: 'Guido', lastName: 'Rivoira' },
    { name: 'Carlos', lastName: 'Memenm' },
    { name: 'Jean', lastName: 'Doe' },
];
function searchUser(name) {
    const user = persons.find(per => per.name === name) || false;
    return user;
}
searchUser('Guido');
