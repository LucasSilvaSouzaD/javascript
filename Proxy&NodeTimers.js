const Event = require('events')
const event = new Event()
const eventName = 'counter'

event.on(eventName, msg => console.log('updated:', msg))

const myCounter = {
    counter: 0
}

const proxy = new Proxy(myCounter, {
    set: (target, propertyKey, newValue) => {
        event.emit(eventName, {newValue, key: target[propertyKey]})
        target[propertyKey] = newValue
        return true
    },
    get: (object, prop) => {
        return object[prop]
    }
})

setInterval(function() {
    proxy.counter += 1
    if(proxy.counter === 10) clearInterval(this)
}, 200)

setTimeout(() => {
    proxy.counter = 5
}, 200)

setImmediate(() => proxy.counter = 9)

// passa na frente de todos *não é uma boa prática
process.nextTick(() => proxy.counter = 2)