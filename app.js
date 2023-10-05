'use strict'

class Car {

  constructor() {
    // delete this.#vin // Error
    // this.#test2 = 5 // Error (нельзя обратиться к приватному до объявления)
  }

  #vin = 6; // приватное поле доступное только внутри класса

  #changeVin() {
    console.log('changed')
  }

  test() {
    // какая-то проверка
    this.#changeVin()
  }

  static #field = 3; //

  static {
    this.#field = 5
  }
}

const car = new Car()
car.test();