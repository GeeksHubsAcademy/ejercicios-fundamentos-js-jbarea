let numeros = process.argv.slice(2);
let suma = 0;
for (num of numeros){
  suma += Number(num);
}

console.log(suma);
