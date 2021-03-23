let fs =  require('fs');
let path = require('path');
let input = process.argv.slice(2);
// node js -> source file path
// dest path -> file path
// copy doesn't copy file, it copy file content from one file to another
fs.copyFileSync(input[0],path.join(input[1],"sample.js"));
console.log("file copied");