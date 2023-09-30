'use strict'

const now = new Date();
console.log(now);

console.log(new Date('01/01/2022'));
console.log(new Date('2022/01/02'));
console.log(new Date('20 January 2023'));
console.log('');

console.log(new Date(2024, 11, 31));
console.log(new Date(2024, 1, 51 + 100));
console.log(new Date(1 * 24 * 60 * 60 * 1000));
console.log(Date.now());

console.log(now.getFullYear());
console.log(now.getDay());
console.log(now.getSeconds());
console.log(now.getTime());

console.log(now.setFullYear(2030))

