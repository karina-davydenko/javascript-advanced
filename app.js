'use strict'
async function getProduct(id) {
  const res = await fetch('https://dummyjson.com/products/' + id)
  return res.json()
}

async function getProductError(id) {
  const res = await fetch('https://dummyjsons.com/products/' + id)
  return res.json()
}

async function main() {
  const res1 = await Promise.all([
    getProduct(1),
    getProduct(2),
  ])
  console.log(res1)

  const err1 = await Promise.all([
    getProduct(1),
    // getProductError(2),
  ])
  console.log(err1)

  const res2 = await Promise.allSettled([
    getProduct(1),
    getProduct(2),
  ])
  console.log(res2)
  const err2 = await Promise.allSettled([
    getProductError(1),
    getProduct(2),
  ])
  console.log(err2)
}

main()