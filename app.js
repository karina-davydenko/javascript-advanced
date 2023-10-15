'use strict'
/**
 * Сделать класс врага со здоровьем и методом полученияя урона
 * Сделать класс меча, который имеет силу и метод нанесение урона
 * Сделать класс орка,, который в 50% случаев не получает урон
 */

class Enemy {
  constructor(hp) {
    this.hp = hp;
  }

  _damageEmeny(force) {
    this.hp = this.hp - force
  }
}

class Sword {
  constructor(force) {
    this.force = force;
  }

  attack(enemy) {
    enemy._damageEmeny(this.force)
  }
}

class Ork extends Enemy {
  constructor(hp) {
    super(hp);
    this.hit = true;
  }

  _damageEmeny(force) {
    if (Math.random() > 0.5) {
      this.hp = this.hp - force
    }
  }
}

const enemy = new Enemy(50);
const ork = new Ork(50);
const sword = new Sword(10)
console.log(enemy)
console.log(ork)
console.log(sword)
sword.attack(enemy)
sword.attack(ork)
sword.attack(ork)
