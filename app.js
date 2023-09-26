'use strict'

const wetherMap = new Map([
  ['London', '10'],
  ['Moscow', '7']
]);
console.log(wetherMap);

const obj = {
  london: 10,
  moscow: 7,
  paris: 14,
}

console.log(Object.entries(obj));

const wetherMap2 = new Map(Object.entries(obj))
console.log(wetherMap2);