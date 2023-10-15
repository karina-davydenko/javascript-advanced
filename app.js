'use strict'
/**
 * Принцип подстановки Барбары Лисков - если мы сделали какой-то частный класс
 * от общего, то там где можно подстаить общий класс, мы можем заменить его на частный
 */

class User {
  #role = 'user';

  getRole() {
    return this.#role
  }
}

class Admin extends User {
  #role = ['user', 'admin']

  getRole() {
    return this.#role.join(', ')
  }
}

function logRole(user) {
  console.log('Role: ' + user.getRole().toUpperCase())
}

logRole(new User())
logRole(new Admin());