const os = require('os');

var totalmemory = os.totalmem();
var freeMemory = os.freemem();
//console.log(totalmemory)
//console.log(freeMemory)


const fs = require('fs');
var files = fs.readdirSync('./')
//console.log(files)

fs.readdir('./' , (error, files) => {
    if(error) console.log(error)
    else console.log(files)
})

