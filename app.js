'use strict'

// Принцип единой ответственности - наш класс должен делать что-то одно,
// но хорошо!

class Charcter {
  #inventory = []
  #health = 10

  pickItem(item) {
    this.#inventory.push(item)
  }

  recieveDamage(damage) {
    this.#health -= damage
  }

  //  это не ответсвенность персонажа сохранение, надо рагпузить
  // saveCharacter() {
  //   localStorage.setItem('char', this)
  // }

  // loadCharacter() {
  //   //...
  // }
}

class DB {
  save(item) {
    localStorage.setItem('char', item)
  }

  load() {
    //...
  }
}