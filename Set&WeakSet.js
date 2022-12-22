const assert = require('assert')

const arr1 = [1, 2, 3, 4]
const arr2 = [1, 5, 6, 3]

const arrConcat = arr1.concat(arr2)

assert.deepStrictEqual(arrConcat.sort(), [1, 1, 2, 3, 3, 4, 5, 6])

// adicionando valores no Set
const set = new Set()
arr1.map(item => set.add(item))
arr2.map(item => set.add(item))

// removendo os duplicados e validando retorno
assert.deepStrictEqual([...set], [ 1, 2, 3, 4, 5, 6 ])
assert.deepStrictEqual(Array.from(new Set([...arr1, ...arr2])), [ 1, 2, 3, 4, 5, 6 ])

console.log(set.keys())
console.log(set.values())

// verificar se existe o valor
assert.ok(set.has(3))


const user01 = new Set([
    'Lucas',
    'Souza',
    'Donato'
])

const user02 = new Set([
    'Silva',
    'Souza',
    'Donato'
])

const intersection = new Set([...user01].filter(user => user02.has(user)))
assert.deepStrictEqual(Array.from(intersection), ['Souza', 'Donato'])


const difference = new Set([...user01].filter(user => !user02.has(user)))
assert.deepStrictEqual(Array.from(difference), ['Lucas'])

// WeakSet 

// mesma ideia do Set
// não é iterável
// só trabalha com chave como referência
// só tem métodos simples


