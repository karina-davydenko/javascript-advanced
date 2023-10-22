'use strict'
/**
 * Сделать функцию myFetch?которая выполняет внутри XMLHttpRequest
 */

function myFetch(URL, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, URL)
    xhr.responseType = 'json';
    xhr.send()
    xhr.onload = function () {
      if (xhr.status != 200) {
        reject(new Error(`Ошибка ${this.status}: ${this.statusText}`))
      }
      resolve(xhr.response)
    };
  })
}

myFetch('https://dummyjson.com/products')
  .then(console.log)
  .catch(console.error) 