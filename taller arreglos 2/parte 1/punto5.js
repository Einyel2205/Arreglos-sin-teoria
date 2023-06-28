/* Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de índice 2 por true, cambiar el elemento de índice 3 por false. */
let h = [true, true, false,true, false]
let copia1=h;
copia1[2]=true;
console.log(copia1);

let copia2=h;
copia2[3]=false;
console.log(copia2);

console.log(h);