const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./txt.txt', 'utf8')
writeFileSync('./txt.txt', 'I added this'
)
console.log(first)
