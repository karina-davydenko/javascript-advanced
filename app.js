'use strict'
/**
 * Принцип инверсии зависимостей - мы должны зависить от абстракции, 
 * а не от конкретных реализаций.
 */

class DB {
  save(items) {
    console.log(`Saved: ${items}`)
  }
}

class MongoDB extends DB {
  save(items) {
    console.log(`Saved to Mongo: ${items}`)
  }
}

// Проблемма - ToDoList зависит от DB. Например чтобы перейти на MongoDB придется 
// переписывать код
// class ToDoList {
//   items = []
//   db = new DB(); !!!

//   saveToDb() {
//     this.db.save(this.items)
//   }
// }

// Отвязка от БД. Зависимость только от передачи БД
class ToDoList {
  items = [1, 2, 3]

  constructor(db) {
    this.db = db;
  }

  saveToDb() {
    this.db.save(this.items)
  }
}

const list1 = new ToDoList(new DB())
list1.saveToDb()
const list2 = new ToDoList(new MongoDB())
list2.saveToDb()
