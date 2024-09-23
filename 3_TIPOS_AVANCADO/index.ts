/* =================>
 1 - Arrays
<================= */
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);

const nomes: string[] = ['Gabriel', 'João'];
nomes.push('Roberto');

/* =================>
 2 - Arrays sintaxe antiga
<================= */
const nums: Array<number> = [100, 200];
numbers.push(300);
console.log(nums);

/* =================>
 3 - any <- [evitar]
<================= */
const arr1: any = [1, 'teste', true, [], { nome: 'gabriel' }];
console.log(arr1);
arr1.push([1, 2, 3]);

/* =================>
 4 - Parâmetros tipados
<================= */
function soma(a: number, b: number) {
  console.log(a + b);
}
soma(4, 5);

/* =================>
 5 - Tipo de retorno de funções
<================= */
function greeting(name: string): string {
  return `Olá ${name}`;
}
console.log(greeting('Gabriel'));

/* =================>
 6 - Funções anônimas em TS
<================= */
setTimeout(function () {
  const sallary: number = 1000;
  //console.log(parseFloat(sallary));
  //console.log(sallary);
}, 2000);

/* =================>
 7 - Tipos de objetos
<================= */
function passCoodinates(coord: { x: number; y: number }) {
  console.log('x coordinates: ' + coord.x);
  console.log('y coordinates: ' + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoodinates(objCoord);

const pessoaObj: { nome: string; surname: string } = {
  nome: 'Matheus',
  surname: 'Battisti',
};

/* =================>
 8 - Props opicionais
<================= */
function showNumbers(a: number, b: number, c?: number) {
  console.log('A : ' + a);
  console.log('B : ' + b);
  if (c) {
    console.log('C: ' + c);
  }
}
console.log(1, 2, 3);
console.log(4, 5);

/* =================>
 9 - Validação de props opcionais
<================= */
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    console.log(`Olá, ${firstName} ${lastName}, tudo bom?`);
  } else {
    console.log(`Olá, ${firstName}, tudo bem?`);
  }
}
console.log(advancedGreeting('Gabriel', 'Ventura'));
console.log(advancedGreeting('Gabriel'));

/* =================>
 10 - Union types
<================= */
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é: R$ ${balance}`);
}
console.log(100);
console.log('500');

/* =================>
 11 - Avançando em Union types
<================= */
function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado!';
  }
  return `A função do usuário é? ${role}`;
}
showUserRole(false);
showUserRole('Admin');

/* =================>
 12 - Type alias
<================= */
type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é: ${id}`);
}
showId(1);
showId('200');

/* =================>
 13 - Introdução às interfaces
<================= */
interface Point {
  x: number;
  y: number;
  z: number;
}
function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordsObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};
showCoords(coordsObj);

/* =================>
 14 - Type alias x Interface
<================= */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: 'Gabriel', age: 21 };
console.log(somePerson);

type personType = {
  name: string;
};
// erro, não pode fazer modificação
// type personType{
//   age:number
// }

/* =================>
 15 - Literal types
<================= */
let test: 'testando';
test = 'testando';
console.log(test);
//
function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é: ${direction}`);
}
showDirection('left');

/* =================>
 16 - Non-null Assertion Operator (!)
<================= */
const p = document.getElementById('some-p');
console.log(p!.innerHTML);

/* =================>
 17 - Bigint
<================= */
