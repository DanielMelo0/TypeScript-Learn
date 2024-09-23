// =========================
//1 - Numbers
// =========================
let x: number = 10;
console.log(x);
x = 16;
console.log(typeof x);
//
//
const y: number = 15.58548;
console.log(y.toPrecision(3));
console.log(typeof y);
// =========================
// 2 - String
// =========================

const firstName: string = 'Gabriel';
console.log(firstName.toLowerCase);

let fullName: string;

const lastName: string = 'Ventura';

fullName = firstName + ' ' + lastName;

console.log(fullName);
console.log(typeof fullName);

// =========================
// 3 - Boolean
// =========================

let a: boolean = false;
console.log(typeof a);

console.log(a);

a = true;

console.log(a);

// =========================
// 4 - Inference e annotation
// =========================

// Annotation
const ann: string = 'teste';

// Inference
let inf = 'Teste';

// erro por ser Inference
// inf = 1;
// metodo de string
inf.toLowerCase();

// =========================
// 5 - Inference e annotation
// =========================
