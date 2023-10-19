'use strict'

const API = 'https://dummyjson.com/products/'
fetch(API)
  .then(res => res.json())
  .then(({ products }) => {
    console.log(products);
    return fetch(API + products[0].id)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => {
    console.log('Finally')
  })