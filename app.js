'use strict'

/**
 * Получить среднюю цену 30 товаров из API
 * https://dummyjson.com/products
 */

// создаем новый екземпляр XMLHttpRequest
const req = new XMLHttpRequest()
//сконфигурировать(не отправлять) url 
req.open('GET', 'https://dummyjson.com/products')
// отправляем запрос
req.send()

req.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText)
  const sum = products.reduce((acc, product) => {
    return acc += product.price
  }, 0)
  console.log(sum / products.length)
})

