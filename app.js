'use strict'

/**
 * Сделать запрос на 'https://dummyjson.com/products/categories',
 * и отобразить <select> выбора категорий.
 */

function createSelect(array) {
  const form = document.querySelector('.category-select')
  const select = document.createElement('select')
  select.id = 'category-select'
  select.innerHTML = `
    ${array.map(el => `<option value="${el}">${el}</option>`)}
  `
  form.append(select)
}

function getCategories() {
  fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => {
      createSelect(data)
    })
}


getCategories()