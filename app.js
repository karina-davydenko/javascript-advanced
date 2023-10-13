'use strict'

class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  buy() {
    console.log('Buy')
  }
}

class AudioBook extends Book {
  constructor(title, author, lenMin) {
    super(title, author)
    this.lenMin = lenMin
  }

  log() {
    console.log(`${this.title} - ${this.lenMin}`)
  }
}

const book = new AudioBook('Lord Of The Rings', 'Tolkiet', 60 * 20)
book.log()
book.buy()