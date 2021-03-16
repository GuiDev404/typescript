"use strict";
const numerosRandom = [10, -1, 50, 18, 78, 100, -57];
const cualquierTypoe = [10, true, () => false, true, {}];
const namesStoraged = ['Guido', 'Carlos', 'Pancho', 'Cesar'];
const allNames = [...namesStoraged];
allNames.push('Tomas', 'Saul');
console.log(allNames);
const skills = ['Javascript', 'Typescript', 'C#'];
for (const skill of skills) {
    console.log(skill);
}
