'use strict'

/**
 * Процесс создания с new
 *  - Путой объект
 *  - Вызов конструктора
 *  - Связывание с Prototype
 *  - Возврат объекта
 */

const Book = function (title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.isRead = false

const lordOfTheRing = new Book('LordOfTheRing', 'Author')

console.log(lordOfTheRing)
console.log(lordOfTheRing.__proto__.__proto__.__proto__)
console.log(lordOfTheRing.__proto__.__proto__)

console.log(Book.prototype)
console.log(Book.prototype.__proto__); //Методы касающиеся объекта