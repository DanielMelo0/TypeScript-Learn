/* =================>
 1 - Arrays
<================= */
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
var nomes = ['Gabriel', 'João'];
nomes.push('Roberto');
/* =================>
 2 - Arrays sintaxe antiga
<================= */
var nums = [100, 200];
numbers.push(300);
console.log(nums);
/* =================>
 3 - any <- [evitar]
<================= */
var arr1 = [1, 'teste', true, [], { nome: 'gabriel' }];
console.log(arr1);
arr1.push([1, 2, 3]);
/* =================>
 4 - Parâmetros tipados
<================= */
function soma(a, b) {
  console.log(a + b);
}
soma(4, 5);
/* =================>
 5 - Tipo de retorno de funções
<================= */
function greeting(name) {
  return 'Ol\u00E1 '.concat(name);
}
console.log(greeting('Gabriel'));
/* =================>
 6 - Funções anônimas em TS
<================= */
setTimeout(function () {
  var sallary = 1000;
  //console.log(parseFloat(sallary));
  //console.log(sallary);
}, 2000);
/* =================>
 7 - Tipos de objetos
<================= */
function passCoodinates(coord) {
  console.log('x coordinates: ' + coord.x);
  console.log('y coordinates: ' + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoodinates(objCoord);
var pessoaObj = {
  nome: 'Matheus',
  surname: 'Battisti',
};
/* =================>
 8 - Props opicionais
<================= */
function showNumbers(a, b, c) {
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
function advancedGreeting(firstName, lastName) {
  if (lastName !== undefined) {
    console.log(
      'Ol\u00E1, '.concat(firstName, ' ').concat(lastName, ', tudo bom?')
    );
  } else {
    console.log('Ol\u00E1, '.concat(firstName, ', tudo bem?'));
  }
}
console.log(advancedGreeting('Gabriel', 'Ventura'));
console.log(advancedGreeting('Gabriel'));
/* =================>
 10 - Union types
<================= */
function showBalance(balance) {
  console.log('O saldo da conta \u00E9: R$ '.concat(balance));
}
console.log(100);
console.log('500');
/* =================>
 11 - Avançando em Union types
<================= */
function showUserRole(role) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado!';
  }
  return 'A fun\u00E7\u00E3o do usu\u00E1rio \u00E9? '.concat(role);
}
showUserRole(false);
showUserRole('Admin');
function showId(id) {
  console.log('O ID \u00E9: '.concat(id));
}
showId(1);
showId('200');
/* =================>
 13 -
<================= */
