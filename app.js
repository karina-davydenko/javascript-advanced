'use strict'

// function getProgects() {
//   fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log);
// }

// getProgects()
// console.log('end')

async function getProgects() {
  try {
    const productsRes = await fetch('https://dummyjson.com/products')
    if (!productsRes.ok) {
      throw new Error(productsRes.status + productsRes.statusText)
    }
    const { products } = await productsRes.json();
    console.log(products)

    const productRes = await fetch('https://dummyjson.com/products/' + products[0].id)
    const product = await productRes.json();
    console.log(product)
  } catch (err) {
    console.log(err)
  } finally {
    console.log('Finished')
  }

}

getProgects()
console.log('end')

