// let fasync =  new Promise(function(fulfill, reject) {
//     fulfill('I FIRED!');
//     reject(Error('I DID NOT FIRED'))
// });
// let onRejected = e => console.log(e)
// fasync.then(console.log).catch(onRejected)

var promise = new Promise(function(fulfill, reject) {

  fulfill('I FIRED');
  var reason = new Error('I DID NOT FIRE');
  reject(reason)

});

function onReject(error) {
  console.log(error);
}

promise.then((success) => console.log(success), (error) => onReject(error.message));
