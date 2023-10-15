'use strict'

// Принцип открытости и закрытости - наш классдолжен быть открыт к дополнению,
// но закрыт для модификаций
// Т.е. когда мы хотим расширить поведение нашего класса, мы это можем сделать, 
// но не путем изменения самого класса внутри

// Как не надо
// class Treasure {

// }

// class Coin extends Treasure {

// }

// class Crystal extends Treasure {

// }

// class Brilliant extends Treasure {

// }

// // Теперь мы захотели реализовать класс инвентаря
// class Inventory {
//   #score;
//   pick(treasure) {
//     if (treasure instanceof Coin) {
//       this.#score += 1
//     }
//     if (treasure instanceof Crystal) {
//       this.#score += 10
//     }

//   }
// }
// Такая реализация нарушает принцип открытости/закрытости.
// Вот мы добавляем новый частный класс бриллиант, и дополнительно приходиться
// править код в инвенторе, чтобы добавить проверку на бриллианты


// Как надо
class Treasure {
  value = 0
}

class Coin extends Treasure {
  value = 1
}

class Crystal extends Treasure {
  value = 10
}

class Brilliant extends Treasure {
  value = 20
}

class Inventory {
  #score;
  pick(treasure) {
    this.#score += treasure.value
  }
}