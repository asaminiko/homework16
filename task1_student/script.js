class Student {
  #grades
  attendance = new Array(25).fill(null) //пустий масив на 25 ел
  #birthYear

  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName
    this.lastName = lastName
    this.#birthYear = checkYear(birthYear) // перевірка року народження
    this.#grades = this.#birthYear
      ? new Array(20).fill(null).map(() => Math.floor(Math.random() * 101)) // людина без року народження не має оцінок
      : []
  }

  getInfo() {
    return console.log(
      `${this.firstName} ${this.lastName} ${
        this.#birthYear
      } ${this.studentAge()}`
    )
  }

  averageGrade() {
    if (this.#grades.length === 0) {
      return 0
    }
    return this.#grades.reduce((a, b) => a + b, 0) / this.#grades.length //середня оцінка
  }

  studentAge() {
    if (this.#birthYear === null) return null
    return new Date().getFullYear() - this.#birthYear
  }

  present() {
    if (this.#birthYear === null) return null // людина без року народження не може ходити на пари
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === null) {
        this.attendance[i] = true
        break
      }
    }
  }

  absent() {
    if (this.#birthYear === null) return null
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === null) {
        this.attendance[i] = false
        break
      }
    }
  }

  summary() {
    if (this.#birthYear === null) {
      return console.log(`${this.firstName} ${this.lastName} не студент`)
    }
    let countAttend = this.attendance.filter((a) => a === true).length
    let averageAttend = countAttend / this.attendance.length // середнє відвідування
    console.log(`Кількість відвіданих занять: ${countAttend}
      Список відвідування: ${this.attendance}
      Середнє відвідування: ${averageAttend}
      Оцінки: ${this.#grades}
      Середня оцінка: ${this.averageGrade()}`)

    if (this.averageGrade() > 90 && averageAttend > 0.9) {
      return console.log('Молодець!')
    } else if (
      (this.averageGrade() < 90 && averageAttend > 0.9) ||
      (this.averageGrade() > 90 && averageAttend < 0.9)
    ) {
      return console.log('Добре, але можна краще')
    } else {
      return console.log('Редиска!')
    }
  }
}

function checkYear(year) {
  // перевірка року народження
  if (isNaN(Number(year))) {
    return null
  } else if (year > new Date().getFullYear() - 16 || year < 1945) {
    return null
  }
  return year
}

//створені студенти

console.log('student1')
let student1 = new Student('Вероніка', 'Чебакова', 2010)
student1.getInfo()
for (let i = 0; i < 35; i++) {
  student1.present()
}
student1.summary()

console.log('student2')
let student2 = new Student('Іван', 'Іванов', 2001)
student2.getInfo()
student2.summary()

console.log('student3')
let student3 = new Student('Вікторія', 'Овчар', 2004)
student3.getInfo()
for (let i = 0; i < 10; i++) {
  student3.absent()
}
student3.summary()

console.log('student4')
let student4 = new Student('Іван', 'Іванов', 2006)
student4.getInfo()
for (let i = 0; i < 10; i++) {
  student4.present()
  student4.absent()
}
student4.summary()
