

function randomNumber(number) {
    const random = (Math.floor(Math.random() * 10))
    const argument = Array.prototype.slice.call(arguments)

    return random < argument[0]
    
}

console.log(randomNumber(5))