console.log('filename: app.ts');

const nMaradona:number = 10; 

const printN = (n: number):void => {
  console.log(n)
}

// printN(nMaradona);

const text:string = document.getElementById('name')?.innerText!;

interface IPerson {
  name: string,
  lastName: string
}

let persons: IPerson[] = [
  { name: 'Guido', lastName: 'Rivoira' },
  { name: 'Carlos', lastName: 'Memenm' },
  { name: 'Jean', lastName: 'Doe' },
];

function searchUser(name:string): IPerson | boolean {
  const user: IPerson | boolean = persons.find(per=> per.name === name) || false;

  return user;
}

searchUser('Guido');