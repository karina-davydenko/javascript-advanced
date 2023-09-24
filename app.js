'use strict';

// Когда создаем какой-то массив данных (билеты на самолет в различные страны)
const flights = ['Moscow', 'Paris', 'London', 'London', 'Paris'];
console.log(flights);
// ['Moscow', 'Paris', 'London', 'London', 'Paris']

// Часто встает задача уникализировать такой массив данных.
// И вот тут становяться полезными Sets.

// Создаем структуру Set(итерируемый объект)
const setFlights = new Set(flights)
console.log(setFlights)
// Set(3) {'Moscow', 'Paris', 'London'}

console.log(setFlights.size) // 3
console.log(setFlights.has('Paris')) // true
console.log(setFlights.has('none')) // false

setFlights.delete('Paris') //удалит Paris

setFlights.clear() //очистит Set

setFlights.add('Paris')
setFlights.add('Toronto')
console.log(setFlights)
// Set(2) {'Paris' 'Toronto'}

// перебор по Set
for (const flight of setFlights) {
  console.log(flight);
}

// переобразование Set в массив с помощью ..spred
const newFlights = [...setFlights]
console.log(newFlights)
// (2) ['Paris', 'Toronto']


// понимаем что Set колекции объктов мы не можем уникализировать по одинак. свойствам
const setObj = new Set([{ a: 1 }, { b: 2 }, { a: 1 }])
console.log(setObj);
// Set(3) {{ a: 1 }, { b: 2 }, { a: 1 }}

console.log(new Set('a a aka aka'));
// Set(3) {'a', ' ', 'k'}