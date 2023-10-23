'use strict'

class ProductRepository {
  async getProducts() {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data)
  }
}

const repo = new ProductRepository()
// repo.getProducts()

const asyncArrow = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}


(async () => {
  console.log(1)
  const re = await asyncArrow()
  console.log(re)
  console.log(2)
})()






