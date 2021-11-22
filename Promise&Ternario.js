// gerando um número aleátorio, inteiro e multiplicado por 10
const random = Math.floor(Math.random() * 10)

const numberRandom = new Promise((resolve, reject) => {
    
    (random % 2) === 0 ? resolve({
        number: random,
        stauts: 'par'
    }) : reject({
        number: random,
        stauts: 'impar'
    })
})

numberRandom.then((result) => console.log(result))
.catch((err) => console.error(err))
.finally(() => console.log('--end--'))
