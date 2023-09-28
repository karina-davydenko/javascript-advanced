'use strict'
// Что же такое число в JS
// Во первых стоит сказать что любое число представляется в JS, как число с плавующей точкой.
// Это означает что мы можем проверить
console.log(10 === 10.0); // true
// Именно поэтому надо понимать, почему нет в JS отдельных типов Integer и Float.

// Второе, JS работает с числами в бинарном формате.
// Проблематика такого формата - размер хранилища одного числа у нас ограничен. 
// Поэтому можно видить след картину
console.log(0.1 + 0.2 === 0.3); // false 
console.log(0.1 + 0.2); // 0.30000000000000004
// это происходит из-за формата хранение и недостаточной точности работы JS с числами 

// если говорить о работе с точными числами то есть стороннии библиотеки

// Преобразования
console.log(Number('10')); //рекомендовано
console.log(+'20');
console.log(Number.parseInt('10')); // принимает вторым формат исчисления
console.log(Number.parseInt('11 sec')); // 11
console.log(Number.parseInt('sec 11')); // NaN

console.log(Number.parseFloat('10.5')); // 10.5
console.log(Number.parseFloat('11.5 sec')); // 11.5
console.log(Number.parseFloat('sec 11.5')); // NaN

console.log(Number.isNaN(Number('10ksls'))); // true
// isNan не поероет следующее
const count = Number(10 / 0)
console.log(count); // Infinity
console.log(Number.isNaN(count)); // false(явл числом)
//используй
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(count)); // false(не явл числом)

// проверка на целое число
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
