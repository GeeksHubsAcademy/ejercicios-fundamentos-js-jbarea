var fs = require('fs');

module.exports = function(listado, tipo, muestra) {
    //console.log(data);
    var res = listado.filter(item => {
        return item.split('.')[1] === tipo
    });

    function muestra(err, data) {
        if (err) {
            console.log('error');
        } else {
            data.forEach((item, index, array) => {
                console.log(item)
            })
        }
    }

    muestra(null,res)
    // for (let r of res){
    //     console.log(r);
    // }    
    fs.readdir(listado, muestra)
}