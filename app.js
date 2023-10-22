'use strict'
Promise.resolve('Instans').then(console.log)

const prom = new Promise((resolve) => {
  console.log('after Timer')
  // setTimeout(() => {
  //   resolve('Timer')

  // }, 1000)
  resolve('Timer')
})

prom.then(console.log)
Promise.reject(new Error('Error')).catch(console.error)

