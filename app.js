'use strict'

async function allProducts() {
  const res = await fetch('https://dummyjson.com/products')
  return res.json()
}

async function getProduct(id) {
  const res = await fetch('https://dummyjson.com/products/' + id)
  return res.json()
}

async function main() {
  const { products } = await allProducts()

  const res = await Promise.all(
    products.map(product => getProduct(product.id))
  )
  console.log(res)
  console.log(products)
  // for (const product of products) {
  //   const res = await getProduct(product.id)
  // }


}

main()