'use strict'

/*
Напишите ф-цию, которая принимает 3 параметра:
-Сумма
-Валюта исходная
-Валюта для конвертации
Возвращает строку уже сконверованной суммы с постфиксом валюты либо null.
*/

// мое решение
// const convertFunction = (sum, initial, convert) => {
//   const rulesConvert = {
//     rub: {
//       rub: { value: 1, currency: 'RUB' },
//       usd: { value: 0.0103, currency: 'USD' },
//       eur: { value: 0.097, currency: 'EUR' },
//     },
//     usd: {
//       usd: { value: 1, currency: 'USD' },
//       rub: { value: 97.4147, currency: 'RUB' },
//       eur: { value: 0.9443, currency: 'EUR' },
//     },
//     eur: {
//       eur: { value: 1, currency: 'EUR' },
//       rub: { value: 103.1631, currency: 'RUB' },
//       usd: { value: 1.059, currency: 'USD' },
//     }
//   }

//   if (!rulesConvert[initial] || !rulesConvert[initial][convert]) {
//     return null
//   }

//   const currency = rulesConvert[initial][convert]['currency']
//   const convertSum = sum * rulesConvert[initial][convert]['value']
//   return new Intl.NumberFormat('ru-RU', { style: 'currency', currency }).format(convertSum)
// }

// console.log(convertFunction(50, 'rub', 'usd'))
// console.log(convertFunction(50, 'rub', 'rub'))
// console.log(convertFunction(50, 'usd', 'eur'))
// console.log(convertFunction(50, 'eur', 'rub'))
// console.log(convertFunction(50, 'eur', 'ffeub'))
// console.log(convertFunction(50, 'er', 'rub'))



function convert(sum, initialCurrency, convertCurrency) {
  const allCurrencies = [
    { name: 'USD', mult: 1 },
    { name: 'RUB', mult: 1 / 60 },
    { name: 'EUR', mult: 1.1 },
  ]

  const initial = allCurrencies.find(c => c.name === initialCurrency)
  if (!initial) {
    return null
  }
  const convert = allCurrencies.find(c => c.name === convertCurrency)
  if (!convert) {
    return null
  }

  return new Intl
    .NumberFormat('ru-RU', { style: 'currency', currency: convert.name })
    .format(sum * initial.mult / convert.mult);

}

