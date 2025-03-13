class Student {
  #grades = new Array(20).fill(null).map(() => Math.floor(Math.random() * 101)) // масив на 20 ел з випадковими балами до 100
  attendance = new Array(25).fill(null) //пустий масив на 25 ел
  #birthYear
  count = 0

  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName
    this.lastName = lastName
    this.#birthYear = checkYear(birthYear) // перевірка року народження
  }

  getInfo() {
    return console.log(
      `${this.firstName} ${this.lastName} ${
        this.#birthYear
      } ${this.studentAge()}`
    )
  }

  averageGrade() {
    return this.#grades.reduce((a, b) => a + b, 0) / this.#grades.length //середня оцінка
  }

  studentAge() {
    if (this.#birthYear === null) return null
    return new Date().getFullYear() - this.#birthYear
  }

  present() {
    if (this.count < 25) {
      return (this.attendance[this.count++] = true)
    }
  }

  absent() {
    if (this.count < 25) {
      return (this.attendance[this.count++] = false)
    }
  }

  summary() {
    let countAttend = 0 // кількість відвіданих занять
    for (let i of this.attendance) {
      if (i === true) {
        countAttend++
      }
    }
    let averageAttend = countAttend / this.attendance.length // середнє відвідування
    console.log(`Кількість відвіданих занять: ${countAttend}`)
    console.log(`Список відвідування: ${this.attendance}`)
    console.log(`Середнє відвідування: ${averageAttend}`)
    console.log(`Оцінки: ${this.#grades}`)
    console.log(`Середня оцінка: ${this.averageGrade()}`)

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
  // перевірка
  if (isNaN(Number(year))) {
    return null
  } else if (year > new Date().getFullYear() - 18 || year < 1945) {
    return null
  }
  return year
}

//створені студенти

console.log('student1')
let student1 = new Student('Вероніка', 'Чебакова', 2006)
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
let student4 = new Student('Іван', 'Іванов', 2009)
student4.getInfo()
for (let i = 0; i < 10; i++) {
  student4.present()
  student4.absent()
}
student4.summary()
