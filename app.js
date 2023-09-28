'use strict'

// расчиать квадратный корень
console.log(Math.sqrt(36)) // 6
// кубический корень
console.log(Math.cbrt(27)) // 3
// корень в любой степени
console.log(16 ** (1 / 4));

console.log(Math.sign(-100)) // -1
console.log(Math.sign(500)) // 1
console.log(Math.abs(-100))

// Что вы будете испл
console.log(Math.max(1, -2, 10, 27)); //27
console.log(Math.max(1, -2, 10, 27, 'j')); // NaN
console.log(Math.min(1, -2, 10, 27)); // -2

const arr = [1, -2, 10, 27]
console.log(Math.max(...arr))

console.log(Math.random())

