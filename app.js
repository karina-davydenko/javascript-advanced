'use strict'

// когда html распарсилась и сгенерился дом
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOMContentLoaded', e);
})

// когда все ресурсы загружены на стр
window.addEventListener('load', function (e) {
  console.log('load', e);
})

// когда надо придупредить пользователя о несохр данных
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = ''
})
