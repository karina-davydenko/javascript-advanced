'use strict'

const task = {
  title: 'Tasl1',
  dueTo: new Date('2023/01/01'),

  isOverdue() {
    return this.dueTo < new Date()
  }

}

console.log(task.isOverdue())

// get/set - возможноность использовать методы, при этом вызывая как свойства.

const task1 = {
  title: 'Task1',
  dueTo: new Date('2023/01/01'),

  get isOverdue() {
    return this.dueTo < new Date()
  },

  set isOverdue(isOverdueTask) {
    if (!isOverdueTask) {
      this.dueTo = new Date()
    }
  }
}

// console.log(task1.isOverdue()) // TypeError
console.log(task1.isOverdue) // true
console.log(task1)
task1.isOverdue = false
console.log(task1)

// Классы
class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }

  get isOverdue() {
    return this.dueDate < new Date()
  }

  set dueDate(date) {
    // валидация на дату подействует и при создании объекта 
    if (date < new Date()) {
      return
    }
    // this.dueDate = date //рекурсивный вызов set привидет к переполнению стека
    this._dueDate = date // использовать свойсто с нижним подчеркиванием
  }
}

const newTask = new Task('Task2', new Date('2023/03/03'))
console.log(newTask)
newTask.dueDate = new Date('2024/03/03')
console.log(newTask)
