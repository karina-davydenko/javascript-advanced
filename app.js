'use strict'

Number.MAX_SAFE_INTEGER // статичное числовое свойство
new Number()

Array.from([0, 1, 2]) // статичный метод
new Array()

// с инициализацией теста
class Test {
  hello() {
    console.log('hello')
  }
}
const test = new Test()
test.hello()

// без  инициализации теста, используем static метод
class Test1 {
  static a = 1

  static hello1() {
    console.log('hello1')
  }

  static {
    let b = 5;
    this.a++
    b++
  }
}
Test1.hello1()
console.log(Test1.a)


// Под капотом
const Test2 = function () { }
Test2.hello2 = function () {
  console.log('hello2')
}
Test2.hello2()