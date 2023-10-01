'use strict'

const mark1 = performance.now(); // число милисекунд с ачала запуска приложения

setTimeout(() => {
  const mark2 = performance.now()
  console.log(mark2 - mark1)
}, 1000)

