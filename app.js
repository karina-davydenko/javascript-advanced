'use strict'

/*
  Реализовать на функциях и прототипах корзину товаров с методами
  - Добавить товар
  - Увеличить число товаров
  - Уменьшить число товаров (удалить если их 0)
*/


const product = { id: 1, name: 'Bread', count: 1 }
const product2 = { id: 2, name: 'Milk', count: 8 }

const Card = function () {
  this.products = []
}

Card.prototype.addProduct = function (product) {
  if (this.products.find((p) => p.id === product.id)) {
    return 'Товар уже добавлен в корзину.'
  }
  this.products.push(product)
  return this
}

Card.prototype.increaseAmount = function (id) {
  this.products = this.products.map((p) => {
    if (p.id === id) {
      p.count++
      return p
    }
    return p
  })
}

Card.prototype.decreaseAmount = function (id) {
  const indexProduct = this.products.findIndex((p) => p.id === id)
  const product = this.products[indexProduct]
  if (indexProduct === -1) {
    return 'В корзине такого продукта нет'
  }
  if (product.count === 1) {
    this.products.splice(indexProduct, 1)
    return
  }
  this.products = this.products.map((p) => {
    if (p.id === id) {
      p.count--
      return p
    }
    return p
  })

}

const card = new Card()
console.log(card)
console.log(card.addProduct(product))
console.log(card.addProduct(product))
console.log(card.addProduct(product2))
console.log(card.increaseAmount(1), card)
console.log(card.decreaseAmount(1), card)
console.log(card.decreaseAmount(1), card)
console.log(card.decreaseAmount(1), card)