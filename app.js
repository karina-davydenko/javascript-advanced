'use strict'

const arr = [1, 2, 3]
// chaining методов 
arr.map(a => a * 2).filter(a => a > 2).find(a => 100)

// Такой паттерн встречается и при испл классов
// Особенно паттерн Builder

class Wallet {
  balance = 0;

  add(sum) {
    this.balance += sum;
    return this
  }

  remove(sum) {
    this.balance -= sum;
    return this
  }
}

const wallet = new Wallet()
const res = wallet.add(100).remove(10)
console.log(res)

class Builder {
  house = {};

  addRoof() {
    this.house.roof = 'roof'
    return this
  }

  addFloor() {
    this.house.floor = 'floor'
    return this
  }

  execute() {
    return this.house
  }
}

const house = new Builder().addFloor().addRoof().execute()
console.log(house)
