'use strict'

/*
  Таймер пиццы
  Сделать таймер пиццы (функцию, принимающую время),
  который будет выводть в консоль секунды,
  оставшиеся до готовности пиццы и сообщение по готовности.
*/


const pizzaTimer = (time) => {
  const m = new Date()
  m.setHours(0, 0, 0, 0)
  m.setMilliseconds(time)

  const interval = setInterval(() => {
    const timeFormatted = new Intl.DateTimeFormat('ru-RU', {
      minute: 'numeric',
      second: 'numeric'
    }).format(m)

    m.setMilliseconds(m.getMilliseconds() - 1000)

    console.log(timeFormatted)
  }, 1000)

  setTimeout(() => {
    clearInterval(interval)

    console.log('Пицца готова!')
  }, time + 1000)
}

pizzaTimer(5000)


