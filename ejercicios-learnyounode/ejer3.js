
let archivo = process.argv[2];
var fs = require('fs');
let buffer = fs.readFileSync(archivo);
let str = buffer.toString();

console.log(str.split('\n').length -1);