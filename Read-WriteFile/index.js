const fs = require('fs')
console.log("Start writing file ");
fs.writeFileSync('sample.txt', "this is file")
console.log("Writing completed");


console.log("\nStart reading file ");
const a = fs.readFileSync('sample.txt')
console.log(a.toString());
console.log('Reading file completed');
