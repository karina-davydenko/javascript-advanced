'use strict'

// через addEventListener можно добавлять нескл событий, в отличии от навешивания через html
const button = document.querySelector('.button');
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', function (e) {
  console.log(e.target)
  console.log(e.currentTarget)
  this.style.backgroundColor = 'purple'
})
inner.addEventListener('click', function (e) {
  console.log(e.target)
  console.log(e.currentTarget)
  this.style.backgroundColor = 'blue'
  // остановка всплытия
  e.stopPropagation()
})
wrapper.addEventListener('click', function (e) {
  console.log(e.target)
  console.log(e.currentTarget)
  this.style.backgroundColor = 'green'
}, true)




