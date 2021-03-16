const numerosRandom:number[] = [10,-1,50,18,78,100,-57];
const cualquierTypoe:any[] = [10,true, ()=> false,true,{}];

const namesStoraged:string[] = ['Guido','Carlos','Pancho','Cesar'];
const allNames:string[] = [...namesStoraged];

allNames.push('Tomas','Saul');

console.log(allNames)

const skills: string[] = ['Javascript','Typescript','C#'];

for (const skill of skills) {
  console.log(skill)
}

