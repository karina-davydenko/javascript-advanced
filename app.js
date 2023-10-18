'use strict'

function reqId(id) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://dummyjson.com/products/' + id);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)
    console.log(data)
  })
}

// Получение данных от последовательности вызовов не зависит, первый придет, который
// легче
reqId(2)
reqId(3)
reqId(1)
reqId(4)
reqId(7)
reqId(1)

console.log('end') 
