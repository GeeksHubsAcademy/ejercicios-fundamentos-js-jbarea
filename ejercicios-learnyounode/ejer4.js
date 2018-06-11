let archivo = process.argv[2];
var fs = require('fs');

let resultado;

function contar(err,data){
    if (err) {
        console.log('se ha producido un error!!!!')
    }
    let file = data.toString();
    let count = file.split('\n').length - 1;
    resultado = count;
    console.log(count);
}

fs.readFile(archivo, contar)

