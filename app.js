'use strict'

const wetherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14],
]);

for (const [key, value] of wetherMap) {
  console.log('key:' + key)
  console.log('value:' + value)
}

//конвертация в массив
console.log([...wetherMap]);
console.log([...wetherMap.keys()]);
console.log([...wetherMap.values()]);