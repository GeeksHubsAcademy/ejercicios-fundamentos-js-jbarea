var http = require('http');
var bl = require('bl');

let url = process.argv[2];
let str ='';
let tam = 0;


// http.get(url, function (resp){
//     resp.setEncoding('utf8');
//     resp.on('data', chunk =>{
//         str = str + chunk;
//     });
//     resp.on('end', function (str) {
//         console.log(str.length);
//         console.log(str);
//     });

// }).on('error', function (e) {
//     console.log("Got error: " + e.message);
// });

http.get(url, resp => {
    resp.setEncoding('utf8');
    resp.pipe(bl(function (err, data){
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
    
}).on('error', function (e) {
    console.log('Ha habido un error!: '+ e.message)
});
