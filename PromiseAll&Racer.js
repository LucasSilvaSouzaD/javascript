const students = [
    { name: 'Anbra', idade: 23 },
    { name: 'Tembra', idade: 14 },
    { name: 'Lomba', idade: 19 },
    { name: 'Cambia', idade: 20 },
    { name: 'Arum', idade: 18 }
]

const promiseOne = new Promise(function (resolve, reject) {
    const organizingStudents = students.map(student => Object.assign(student,
        { status: student.idade >= 18 ? 'maior' : 'menor', number: Math.floor(Math.random() * 10)}
    ))
    resolve(organizingStudents)
})

const promiseTwo = new Promise(function (resolve, reject) {
    const reduceStudents = students.reduce((acc, student) => acc)
    resolve(reduceStudents)
})

const promiseThree = new Promise(function (resolve, reject) {
    const filterAge = students.filter(student => student.idade < 18)
    resolve(filterAge)
})

Promise.all([promiseOne, promiseTwo, promiseThree]).then((result) => console.log(result))
console.log('_________________- RACE -______________-')
Promise.race([promiseOne, promiseTwo, promiseThree]).then((result) => console.log(result))