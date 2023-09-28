'use strict'
// WeakSet похожи на WeakMap(тоже хранят ключи-объекты)

let a = { a: 1 }
const b = { b: 2 }

// передаем только массив объектов 
const set = new WeakSet([a, b])
console.log(set);
a = null
setTimeout(() => console.log(set), 1000)