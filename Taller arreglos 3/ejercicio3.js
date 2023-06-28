/*Cree una función que reciba un arreglo de números y retorne el número menor entre todos los elementos del arreglo. */


function encontrarNumeroMenor(arreglo) {
  if (arreglo.length === 0) {
    return undefined; // Si el arreglo está vacío, no hay número menor para retornar
  }

  let menor = Math.min(...arreglo);
  return menor;
}

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let menorNumero = encontrarNumeroMenor(arreglo);
console.log("El número menor es:", menorNumero); // Imprimirá "El número menor es: 1"
