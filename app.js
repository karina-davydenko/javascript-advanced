'use strict'

/**
 * Реализовать класс пользователя, со свойствами
 * - логин
 * - пароль
 * Причем пароль при установке должен переворачиваться и в таком виде храниться
 * Пароль и логин после создания изменить нельзя. 
 * Так де у класса добавить методы.
 * - Смены пароля (передаем старый и новый пароль)
 * - Сверки пароля
 */

class User {
  #login
  #password
  #reversePassword(password) {
    return password.split('').reverse().join('');
  }
  constructor(login, password) {
    this.#login = login;
    this.#password = this.#reversePassword(password)
  }
  get login() {
    return this.#login
  }

  changePassword(password, newPassword) {
    if (this.checkPassword(password)) {
      this.#password = this.#reversePassword(newPassword)
      return true
    }
    return 'Неверный старый пароль'
  }

  checkPassword(password) {
    return this.#reversePassword(password) === this.#password
  }
}

const user1 = new User('login', '12345');
console.log(user1.login)
console.log(user1.changePassword('123', '12323'))
console.log(user1.changePassword('12345', '12323'))
console.log(user1.changePassword('12345', 'ldkldk'))
console.log(user1.checkPassword('12323'))
console.log(user1.checkPassword('123wfw3'))
