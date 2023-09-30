'use strict'

const first = new Date(2024, 10, 4)
const second = new Date(2024, 10, 3)

console.log(first > second) // true
console.log(first === second) // false

const first1 = new Date(2024, 10, 4)
const second1 = new Date(2024, 10, 4)

console.log(first1 > second1) // false
console.log(first1 === second1) // false
console.log(first1.getTime() === second1.getTime()) // true

//Сравнивать даты вы можете просто если нужно ">= <=" (под собой конвертируются в таймстемп)
// При сравнении на равно, всегда false (сравниваются ссылки на объекты).
// Поэтому переводим в таймстемпы