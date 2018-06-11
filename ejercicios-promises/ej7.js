let onFulfiled = function (secret)  {
  return second(secret)
}
// secret => second(secret)

first().then(onFulfiled).then(console.log)
