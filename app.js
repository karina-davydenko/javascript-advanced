'use strict'

const prom = new Promise((resolve, reject) => {
  if (new Date() < new Date('01/01/2024')) {
    reject(new Error('Error'))
  }
  resolve('Success')
})

prom
  .then(console.log)
  .catch(console.log)

function timeout(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, sec * 1000)
  })
}

timeout(1)
  .then(() => {
    console.log(1)
    return timeout(1)
  })
  .then(() => {
    console.log(2)
  })
