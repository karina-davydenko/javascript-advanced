'use strict'

// Как работать с прототипами.

const Book = function (title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
}

Book.prototype.read = function () {
  this.isRead = true
}

Book.prototype.cover = 'Paper'

const lordOfTheRing = new Book('Lord of the Ring', 'Tolkien')
console.log(lordOfTheRing) // Book {title: 'Lord of the Ring', author: 'Tolkien', isRead: false}
lordOfTheRing.read()
console.log(lordOfTheRing) // Book {title: 'Lord of the Ring', author: 'Tolkien', isRead: true}
console.log(lordOfTheRing.cover) // Paper
console.log(lordOfTheRing.hasOwnProperty('cover')) // false
console.log(lordOfTheRing.hasOwnProperty('author')) // true


console.log(lordOfTheRing.__proto__) // {read: ƒ, constructor: ƒ}
console.log(lordOfTheRing.__proto__ === Book.prototype) // true
console.log(Book.prototype.isPrototypeOf(lordOfTheRing)) // true
console.log(Book.prototype.isPrototypeOf(Book)) // false


// желательно не трогать прототипы встроенных объектов
// такое поведение меняет внутренее устройство массивов
Array.prototype.first = function () { }
const a = [5]
a.first