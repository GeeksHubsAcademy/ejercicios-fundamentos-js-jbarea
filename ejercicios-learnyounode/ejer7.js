var ht = require('http');
let url = process.argv[2];

//console.log(url);

ht.get(url,function (res){
    //console.log('Got response: '+ res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log(chunk);
    });
    //console.log(res);
}).on('error', function (e) {
    console.log("Got error: " + e.message);
});
//console.log(ht.get(url));