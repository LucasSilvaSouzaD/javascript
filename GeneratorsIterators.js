const assert = require('assert')

function* calculation(number, numberTwo) {
    yield number * numberTwo
}

function *main() {
    yield 'Hello'
    yield *calculation(1, 1)
}

const generator = main()

assert.deepStrictEqual(generator.next(), { value: 'Hello', done: false })
assert.deepStrictEqual(generator.next(), { value: 1, done: false })
assert.deepStrictEqual(generator.next(), { value: undefined, done: true })

assert.deepStrictEqual([...main()], [ 'Hello', 1 ])
assert.deepStrictEqual(Array.from(main()), [ 'Hello', 1 ])


// async iterators

const { readFile, stat, readdir } = require("fs/promises")

function *promisified() {
    yield readFile(__filename)
    yield Promise.resolve('Hey Dude')
}

async function *systemInfo() {
    const file = await readFile(__filename)
    yield { file: file.toString() }

    const size = await stat(__filename)
    yield { size }

    const dir = await readdir(__dirname)
    yield { dir }
}

// Promise.all([...promisified()]).then(results => console.log(results))

;(async () => {
    for await (const item of systemInfo()) {
        console.log("items", item)
    }
})()