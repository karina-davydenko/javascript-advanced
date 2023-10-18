'use strict'

const req = new XMLHttpRequest()
req.open('GET', 'https://dummyjson.com/products')
req.send()


// Попытка сделать последовательную цепочку запросов приводит к плохо читаемому коду
// Callback Hall
req.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText)
  const sum = products.reduce((acc, product) => {
    return acc += product.price
  }, 0)
  console.log(sum / products.length)
  console.log(products)

  const req = new XMLHttpRequest()
  req.open('GET', 'https://dummyjson.com/products/' + products[0].id)
  req.send()

  req.addEventListener('load', function () {
    const product = JSON.parse(this.responseText)
    console.log(product)

    const req = new XMLHttpRequest()
    req.open('GET', 'https://dummyjson.com/products/' + products[1].id)
    req.send()

    req.addEventListener('load', function () {
      const product = JSON.parse(this.responseText)
      console.log(product)
    })
  })
})

