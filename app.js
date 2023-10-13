'use strict'

class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  info() {
    console.log(`${this.title} - ${this.author}`)
  }
}

const book1 = new Book('Title1', 'Author1')
book1.info()

class EBook extends Book {
  constructor(title, author, pages) {
    super(title, author)
    this.pages = pages
  }

  info() {
    console.log(`${this.title} - ${this.author} - ${this.pages}`)
  }
}

const book2 = new EBook('Title2', 'Author2', 100)
book2.info()