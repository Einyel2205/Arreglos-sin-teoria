/*Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo. */
function ordenarArreglo() {
    let arreglo = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de números en el arreglo:"));
  
    for (let i = 0; i < cantidad; i++) {
      let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
      arreglo.push(numero);
    }
  
    arreglo.sort((a, b) => a - b);
  
    return arreglo;
  }
let resultado = ordenarArreglo();
console.log(resultado);
  