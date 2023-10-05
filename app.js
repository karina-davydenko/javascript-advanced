'use strict'

// третий способ создания инстансов наследуемых от каких-то объектов
// Понимания Object.create помогает разобраться в работе наследования в JS

const User = {
  log() {
    console.log('Log')
  }
}

// создаем новый объект и говорим что в его прототипе будет объект,
//  который мы передаем в метод create
// фактически у нас происходит наследование( в нашем случает от объекта выше)
const user = Object.create(User)
console.log(user)
console.log(user.__proto__ === User) // true
user.log() // Log

// но на практике очень редко такое видим, потому что чтобы задать какие-то свойства надо
user.email = 'a@a.com'
user.password = '1234'

// удлиняем цепочку прототипов
const admin = Object.create(user)
console.log(admin)