function timed (){
  console.log('FULFILLED!');
}

let prom = () => new Promise(function(resolve, reject) {
    resolve(setTimeout(timed, 300));
});

let p = prom();
p.then();
