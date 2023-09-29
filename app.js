'use strict'

/*
Написать ф-цию, которая принимает min и max и возвращает 
случайное число между ними, включая их
*/

function randomInt(min, max) {
  min = Math.ceil(min) // до ближ большего целого
  max = Math.floor(max) // округление до ближ меньшего целого
  return Math.floor(Math.random() * (max - min + 1)) + min //
}

console.log(randomInt(1.09, 23.95))