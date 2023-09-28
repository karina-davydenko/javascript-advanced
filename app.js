'use strict'

let wetherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14],
]);

//мое решение
// const wetherArr = [...wetherMap]
// const newWetherArr = wetherArr.map(([city, tm]) => [tm, city])
// const newWetherMap = new Map(newWetherArr)


wetherMap = new Map([...wetherMap].map(el => el.reverse()))
console.log(wetherMap);