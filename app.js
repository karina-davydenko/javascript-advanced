'use strict'

// Осторожно с колбеками в промиссах. Так делать не надо.
// fetch('https://dummyjson.com/products')
//   .then((response) => response.json())
//   .then(({ products }) => {
//     console.log(products);
//     fetch('https://dummyjson.com/product/' + products[0].id)
//       .then(res => res.json())
//       .then(data => console.log(data))
//   })

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/product/' + products[0].id)
  })
  .then(res => res.json())
  .then(data => console.log(data))
