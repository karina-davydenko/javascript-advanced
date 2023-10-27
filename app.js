'use strict'

// через addEventListener можно добавлять нескл событий, в отличии от навешивания через html
const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
  console.log('1')
})

const eventHandler = (event) => {
  console.log('2')
  // По хоршему надо удалять обработчик, если он не нужен, чтобы не было утечки памяти.
  button.removeEventListener('click', eventHandler)
}

button.addEventListener('click', eventHandler)


