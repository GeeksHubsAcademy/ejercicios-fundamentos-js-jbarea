let error = {
  message: 'REJECTED!'
}

let prom = new Promise(function(resolve, reject) {

    setTimeout(reject, 300, new Error('REJECTED!') );

});

function onReject(error){
  console.log(error.message);
}

prom.then(console.log, onReject);
