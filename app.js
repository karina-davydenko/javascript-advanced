'use strict'

async function main() {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: "atuny0",
      password: "9uQFF1Lh",
    })
  })

  const data = await res.json()
  console.log(data)
}

main()  