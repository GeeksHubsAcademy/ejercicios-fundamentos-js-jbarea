function timed (){
  console.log('TIMED OUT!');
}

let prom = (x) => new Promise(function(resolve, reject) {
    resolve(setTimeout(timed, 300));
});

let t='';
let p = prom();
p.then();
