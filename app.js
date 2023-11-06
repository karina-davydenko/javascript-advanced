'use strict'

/**
 * Динамически создать N элементов с текстом и поле для поиска.
 * При вводе в поле, выделять элементы, которые содержат введенный текст.
 */

const wrapper = document.querySelector('.wrapper')
for (let i = 1; i <= 30; i++) {
  const el = document.createElement('div')
  el.innerHTML = `User ${i}`
  wrapper.append(el)
}

const listUsers = [...wrapper.children]
const input = document.querySelector('input');
input.addEventListener('change', function (event) {
  const { value } = event.target
  listUsers.forEach((user) => {
    user.classList.remove('active')
    if (user.innerHTML.includes(value)) {
      user.classList.add('active')
    }
    return
  })
})

