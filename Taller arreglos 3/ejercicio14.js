/* Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
Se le debe pedir al usuario que introduzca el arreglo */
function ordenarArregloAlfabeticamente() {
    let arreglo = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de letras en el arreglo:"));
  
    for (let i = 0; i < cantidad; i++) {
      let letra = prompt("Ingrese la letra " + (i + 1) + ":");
      arreglo.push(letra);
    }
  
    arreglo.sort();
  
    return arreglo;
  }
let resultado = ordenarArregloAlfabeticamente();
console.log(resultado);
  