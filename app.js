'use strict'
/**
 * Принцип разделения итерфейса - класс не должен зависить от методов, которые
 * на практике ему никогда не нужны. Позволяет держать интерфейсы компактными
 * и разделять ответсвенность 
 */

// // Неправильная реализация
// class Weapom {
//   strike() {}

//   shoot() {}
// }

// class Rifle extends Weapom {
//   strike() {
//     // Неэффективно
//   }

//   shoot() {
//     // Эффективно
//   }
// }

// class Sword extends Weapom {
//   strike() {
//     // Эффективно
//   }

//   shoot() {
//     // Не имеет смысла
//   }
// }

// Правильная
class Weapom {
  // положить то что действительно нужно
  cost;

  dealDamage() {

  }
}

class Rifle extends Weapom {
  shoot() {
    // Эффективно
    this.dealDamage()
  }
}

class Sword extends Weapom {
  strike() {
    // Эффективно
    this.dealDamage()
  }
}
