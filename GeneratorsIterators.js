const assert = require('assert')

function* calculation(number, numberTwo) {
    yield number * numberTwo
}

function *main() {
    yield 'Hello'
    yield* calculation(1, 1)
}

const generator = main()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())