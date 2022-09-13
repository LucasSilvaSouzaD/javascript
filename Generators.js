

async function *table() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    yield number
    
}


;(async () => {
    for await (const tab of table()) {
        console.log("items", tab)
    }
})()