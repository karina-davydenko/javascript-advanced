'use strict'

const User = function (email, password) {
  this.email = email;
  this.password = password + '!!';

}

const user1 = new User('a@a.com', '123')
console.log(user1)
// Оператор new содержит несколько шагов, которые приводят к созданию класса User
// во первыз созд пустой объект
// во вторых вызывает ф-ция конструктор, this = пустому объекту
// объект связывается с прототипом
// после этого автоматически возвращается созданный объект


const user2 = new User('a@a2.com', '120493')
console.log(user2)
console.log(user1 instanceof User) // true

// Создание через new устрарело и исплз. не часто. Больше видим ES6Classes, которые облегчают работу.
// По сути нужно понимать такой способ, но на практике его нет