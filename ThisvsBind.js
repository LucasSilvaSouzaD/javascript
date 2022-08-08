'use strict';

const { watch, promises: { readFile } } = require('fs')

class File {
    watch(event, filename) {
        console.log('this', this)
        this.showContent(filename)
    }

    async showContent(filename) {
        console.log((await readFile(filename)).toString())
    }
}

const file = new File()
console.log("file", __filename)
watch(__filename, file.watch.bind(file))