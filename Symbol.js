const assert = require('assert')

// keys
const uniqueKey = Symbol("userName")
const user = {}

user["userName"] = 'value for object'
user[uniqueKey] = 'value for Symbol'

assert.deepStrictEqual(user.userName, 'value for object')

// o endereço de memória é único, não podemos acessar com "Symbol("chave")
assert.deepStrictEqual(user[Symbol("userName")], undefined)
assert.deepStrictEqual(user[uniqueKey], 'value for Symbol')

// díficil de pegar, mas o dado não é secreto. 
assert.deepStrictEqual(Object.getOwnPropertySymbols(user)[0], uniqueKey)