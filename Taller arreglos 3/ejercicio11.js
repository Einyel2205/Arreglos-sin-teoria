/* Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo. */
function contarNumerosImpares() {
    let arreglo = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de números en el arreglo:"));
  
    for (let i = 0; i < cantidad; i++) {
      let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
      arreglo.push(numero);
    }
  
    let cantidadImpares = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      let numero = arreglo[i];
  
      if (numero % 2 !== 0) {
        cantidadImpares++;
      }
    }
  
    return "El arreglo contiene " + cantidadImpares + " número(s) impar(es).";
}
let resultado = contarNumerosImpares();
console.log(resultado);
