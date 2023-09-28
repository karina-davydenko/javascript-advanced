'use strict'
// тип мапов WeakMap, который не сильно популярен и недооценен.
// У них есть очень полезное свойство, которое позволяет классно реализовывать кеш.

//методов у них меньше
const map = new WeakMap();

// ключи - только объекты или массив
// map.set(1, 'test') //Error

let a = { a: 1 }
let b = { b: 2 }
map.set(a, 'testA')
map.set(b, 'testB')
console.log(map.get(a))
console.log(map) //WeakMap {{…} => 'testA', {…} => 'testB'}

//weak отражается в том, что WeakMap хранит наш ключ до тех пор, пока ссылка на объект существует.
// Например присвоем объекту "а" значение null(т.е. ссылки на оъект больше нет)
a = null
setTimeout(() => console.log(map), 1000) // WeakMap {{…} => 'testB'} через секунду key a исчез

// но зачем нам  это самостоятельное удаление ? частое использование - это кеш
let cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 1; // очень долгое и дорогостоящее вычисление
    cache.set(obj, res)
  }
  return cache.get(obj)
}

// в первом вызове вы заполним кеш и проведем дорогостоящуу операцию
const result = getValue(b)
// во втором уже возьмуться данные из кеша и операция производиться повторно не будет
const result2 = getValue(b)
console.log(result);
console.log(result2);
// и если мы обнулим наш 'b' объект, то кеш сам очиститься. нам не нужно думать об очистке кеша