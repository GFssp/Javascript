const fs = require('fs')

// Async reader
// List of file in folder
const files = fs.readdirSync('./')
console.log(files)

// callback
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err)
})