'use strict'

/**
 * Сделать генератор 3х идей от скуки
 * http://www.boredapi.com/api/activity/
 * с отображением на странице
 */

const button = document.querySelector('.random-btn')
const container = document.querySelector('.container-card')

async function random() {
  const res = await fetch('http://www.boredapi.com/api/activity/')
  const data = await res.json()
  return data.activity
}

async function getRandomEvents() {
  const res = await Promise.all([
    random(),
    random(),
    random(),
  ])

  container.innerHTML = res.map(str => {
    return `
      <div class="card-random-event">
        <p>
          ${str}
        </p>
      </div>
    `
  }).join('')
}


button.addEventListener('click', () => {
  getRandomEvents()
})