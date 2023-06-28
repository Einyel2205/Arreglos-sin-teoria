/*Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número de Timina (T). Se le debe pedir al usuario que introduzca los arreglos. */
function buscarCadenaMayorTimina() {
    let arreglo = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de cadenas de ADN en el arreglo:"));
  
    for (let i = 0; i < cantidad; i++) {
      let cadenaADN = prompt("Ingrese la cadena de ADN " + (i + 1) + ":");
      arreglo.push(cadenaADN);
    }
  
    let cadenaMayorTimina = "";
    let cantidadTiminaMax = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      let cadenaADN = arreglo[i];
      let cantidadTimina = 0;
  
      for (let j = 0; j < cadenaADN.length; j++) {
        if (cadenaADN[j].toUpperCase() === "T") {
          cantidadTimina++;
        }
      }
  
      if (cantidadTimina > cantidadTiminaMax) {
        cadenaMayorTimina = cadenaADN;
        cantidadTiminaMax = cantidadTimina;
      }
    }
  
    if (cadenaMayorTimina === "") {
      return "No se encontró ninguna cadena de ADN en el arreglo.";
    } else {
      return "La cadena de ADN con mayor número de Timina (T) es: " + cadenaMayorTimina;
    }
}
let resultado = buscarCadenaMayorTimina();
console.log(resultado);
  