'use strict';

// JS объекты и Maps с точки зрения реализации немного похожи

//  Работа структуры данных Hash map.
// Зная, что нам нужно сохранить ключи и значения, будем действовать следующим образом.
// Мы возьмем ключ и прогоним его через некую Hash-функцию, которая вернет нам значение(bucket).
// Структура Hash map позволяет нам оптимизировать поиск, добавление и удаление эл-тов.

// По причине того что JS объекты не совсем четко реализуют структуру Hash map,
//  у них все-таки поиск медленее, с ES6 и был введен Map(новый тип данных, быстрый поиск по объектам)
// При этом Map более чистый тип данных. Все таки JS объект имеет прототип, кдючи по умл.
// В Map все что угодно может быть ключем. Есть свойство size.
// Map сильно оптимизирован для частых операций. 
// Если нужно работать с большими ключезначениями. Частыми операциями. И не нужны методы объекта.

const wetherMap = new Map()
console.log(wetherMap); // Map(0) {size: 0}

// дополнить Map
wetherMap.set('London', '+10')
console.log(wetherMap); // Map(1) {'London' => '+10'}
console.log(wetherMap.set('Moscow', '+5')) // Map(2) {'London' => '+10', 'Moscow' => '+5'}

wetherMap
  .set('Toronto', '+28')
  .set('Minnesota', '+27')

// получение значение 
console.log(wetherMap.get('Moscow')) // +5
console.log(wetherMap.get('not')) // undefined

// проверка значения
console.log(wetherMap.has('Moscow')); // true
console.log(wetherMap.has('not')) // false

// удаление
console.log(wetherMap.delete('Moscow')) //true
console.log(wetherMap.delete('not')) // false
console.log(wetherMap);
//Map(3) {'London' => '+10', 'Toronto' => '+28', 'Minnesota' => '+27'}

// можем добавлять ключи другого типа
wetherMap
  .set(1, 5)
  .set(1, 6) // перезаписывается пред значение

// колво свойств
console.log(wetherMap.size);

// очистка
console.log(wetherMap.clear()); // undefined

//осторожно с сотвавными типами в ключах
wetherMap.set({ a: 1 }, '1')
console.log(wetherMap.get({ a: 1 })); // undefined

const key = [1, 2, 3]
wetherMap.set(key, [1, 2, 3])
console.log(wetherMap.get(key)); // [1, 2, 3]