'use strict'

// Сделать ф-цию, кот. принимает пользователя и проверяет,
// есть ли у него сегодня день рождение или нет

const user1 = {
  name: 'Vander',
  birthday: '12/23/1992'
}
const user2 = {
  name: 'Vindetas',
  birthday: '09/30/2002'
}

function isBirthdayNow(user) {
  const birthday = new Date(user.birthday)
  const now = new Date()
  return birthday.getDate() === now.getDate() && birthday.getMonth() === now.getMonth()
}

console.log(isBirthdayNow(user1))
console.log(isBirthdayNow(user2))

