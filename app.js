'use strict'

const Book = function (title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
}
Book.prototype.read = function () {
  this.isRead = true;
};

// По сути классы скрывают реализацию выше за удобным синтаксисом
class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  isRead = false;

  read() {
    this.isRead = true;
  }
}

const wdwwd = new BookClass('title', 'author')
wdwwd.read()
console.log(wdwwd)
console.log(wdwwd instanceof BookClass)
console.log(wdwwd.__proto__)

/**
 * Особенности классов
 * 1) Классы не поднимаются вверх(хостинга не происходит) 
 *    Мы не можем испльзовать класс до его объявления.
 * 2) Классы как функции могут быть переданы и возвращены из функций
 * 3) Тело класса всегда исполняется в strict режиме
 */