export function add(f, s) {
  return f + s
}

export function sub(f, s) {
  return f - s
}

console.log('calc')

setTimeout(() => {
  add = (f, s) => {
    return f * s
  }
}, 5000)

