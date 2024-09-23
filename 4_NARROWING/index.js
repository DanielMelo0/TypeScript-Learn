"use strict";
/* =================>
 1 - Typeof - Type Guard
<================= */
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossivel realizar a soma! ');
    }
}
// string
sum('4', '59');
// number
sum(12, 20.2);
// string + number <== error
sum('12', 20.2);
/* =================>
 2 - Checando se o valor existe
<================= */
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Por favor defina uma operação!');
    }
}
// Undefined => Pedir para definir a operação
operations([1, 2, 3]);
// Fazer a soma
operations([10, 5, 3], 'sum');
// Fazer a multiplicação
operations([1, 10, 3], 'multiply');
