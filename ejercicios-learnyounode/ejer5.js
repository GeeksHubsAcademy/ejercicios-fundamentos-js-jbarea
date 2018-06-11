var fs = require('fs');
let listado = process.argv[2];
let tipo = process.argv[3];


function mostrar(err, data){
    //console.log(data);
    var res = data.filter(item => {        
        return item.split('.')[1] === tipo
    })
    
    // for (let r of res){
    //     console.log(r);
    // }    

    res.forEach((item, index, array) => {
        console.log(item)
    })

}

fs.readdir(listado,mostrar);