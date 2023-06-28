/*Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
introduzca el arreglo. */
function buscarLetraC() {
    let arreglo = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de nombres en el arreglo:"));
  
    for (let i = 0; i < cantidad; i++) {
      let nombre = prompt("Ingrese el nombre " + (i + 1) + ":");
      arreglo.push(nombre);
    }
  
    let vecesLetraC = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      let nombre = arreglo[i];
  
      for (let j = 0; j < nombre.length; j++) {
        if (nombre[j].toLowerCase() === "c") {
          vecesLetraC++;
        }
      }
    }
  
    if (vecesLetraC > 0) {
      return "La letra 'c' se encuentra en los nombres. Aparece " + vecesLetraC + " vez/veces en total.";
    } else {
      return "La letra 'c' no se encuentra en los nombres.";
    }
}
let resultado = buscarLetraC();
console.log(resultado);
  