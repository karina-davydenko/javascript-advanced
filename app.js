'use strict'

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/product/' + products[0].id)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
