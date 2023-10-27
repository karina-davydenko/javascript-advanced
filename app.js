'use strict'
// Viewport - это видимая пользователю область веб-страницы,
//  то, что может увидеть пользователь, не прибегая к прокрутке.

function generate(e) {
  // в какой части страницы находится польователь
  console.log(`X offset: ${window.pageXOffset}`)
  console.log(`Y offset: ${window.pageYOffset}`)
  // размер окна пользователя
  console.log(`clientWidth: ${document.documentElement.clientWidth}`)
  console.log(`clientHeight: ${document.documentElement.clientHeight}`)
  // расположение определенного э-та на странице
  console.log(e.target.getBoundingClientRect())

  const el = document.querySelector('.down')
  const down = el.getBoundingClientRect()
  console.log()

  // скроллинг
  window.scrollTo({
    left: window.pageXOffset + down.x,
    top: window.pageXOffset + down.y,
    behavior: 'smooth'
  })

}