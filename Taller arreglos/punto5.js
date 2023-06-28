/* Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b. */
let b = ["abc", 4, 88, 99];
let copia=b.slice();
copia.push(2)
console.log(copia); 
console.log(b)