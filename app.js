'use strict'

fetch('https://dummyjson.com/productsss')
  .then(res => {
    if (!res.ok) {
      throw new Error(`Is error ${res.status}`)
    }
    return res.json()
  })
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/product/' + products[0].id)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    const el = document.querySelector('.filter')
    el.innerHTML = err
  })