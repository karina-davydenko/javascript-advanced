'use strict'

/**
 * Сделать функцию, которая принимает строку и текст ошибки и
 * возвращает уже Promise c JSON из тела запроса
 */

function getData(url, message, method = 'GET') {
  return fetch(url, { method })
    .then(res => {
      if (!res.ok) {
        throw new Error(message)
      }
      return res.json()
    })
}

getData('https://dummyjson.com/products', 'Can not get products')
  .then(({ products }) => {
    console.log(products);
    return getData('https://dummyjson.com/product/' + products[0].id, 'Can not get products')
  })
  .then(data => console.log(data))
  .catch(err => {
    const el = document.querySelector('.filter')
    el.innerHTML = err.message
  })