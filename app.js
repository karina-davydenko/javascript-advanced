'use strict'

// Таймеры это не сама фича JS, это опять тваки API, которой мы имеей доступ,
// работая в браузере или в nodej.
// При этом работа таймера связанна с тем, как работает EventLoop.
// Нам нужны таймеры для того чтобы отложить выполнение какой-то операции.


const bashTimer = setTimeout((message) => {
  console.log(message)
}, 2000, 'Bash!')

console.log(1)

setTimeout(() => {
  console.log(2)
}, 2000)

clearTimeout(bashTimer)

console.log(3)