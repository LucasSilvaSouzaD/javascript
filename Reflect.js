const assert = require('assert')

// garantir semantica e segurança em objetos
const myObj = {
    add(myValue) {
        return this.arg1 + this.arg2 + myValue
    }
}

assert.deepStrictEqual(myObj.add.apply({arg1: 10, arg2: 20}, [ 100]), 130)

// Function.prototype.apply = () => { throw new TypeError('Eita!')}

myObj.add.apply = function() { throw new TypeError('Vixxx')}

assert.throws(() => myObj.add.apply({}, []),
    {
        name: "TypeError",
        message: 'Vixxx'
    }
)

// -------------- usando reflect

const result = Reflect.apply(myObj.add, {arg1: 10, arg2: 20}, [200])
assert.deepStrictEqual(result, 230)
// apply

// defineProperty
function MyDate() {}

Object.defineProperty(MyDate, 'withObject', {value: () => 'Hey there'})
Reflect.defineProperty(MyDate, 'withReflection', {value: () => 'Hey theree'})

assert.deepStrictEqual(MyDate.withObject(), 'Hey there')
assert.deepStrictEqual(MyDate.withReflection(), 'Hey theree')

// deleteProperty

const withDelete = {user: ''}
delete withDelete.user

assert.deepStrictEqual(withDelete.hasOwnProperty('user'), false)

const withReflection = {user: 'Xuxa'}
Reflect.deleteProperty(withReflection, 'user')
assert.deepStrictEqual(withReflection.hasOwnProperty('user'), false)


// get
assert.throws(() => Reflect.get(1, "userName"), TypeError)

// has
assert.ok('superman' in {superman: ''})
assert.ok(Reflect.has({batman: ''}, 'batman'))

// ownKeys
const user = Symbol('user')
const dataBaseUser = {
    id: 1,
    [Symbol.for('password')]: 123,
    [user]: 'lucassilva'
}

const objectKeys = [
    ...Object.getOwnPropertyNames(dataBaseUser),
    ...Object.getOwnPropertySymbols(dataBaseUser)
]

assert.deepStrictEqual(objectKeys, [ 'id', Symbol.for('password'), user ])

// reflect
assert.deepStrictEqual(Reflect.ownKeys(dataBaseUser), [ 'id', Symbol.for('password'), user ])


