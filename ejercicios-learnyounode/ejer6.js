var mimodulo = require('./module_export.js');
var fs = require('fs');
let listado = process.argv[2];
let tipo = process.argv[3];

mimodulo(listado,tipo,muestra);

// function muestra(err,data){
//     if (err){
//         console.log('error');
//     }else{
//         data.forEach((item, index, array) => {
//             console.log(item)
//         })
//     }
// }

