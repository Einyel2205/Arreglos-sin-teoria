/* Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.*/
function compararPromedios() {
    let arreglo1 = [];
    let arreglo2 = [];
  
    let cantidad1 = parseInt(prompt("Ingrese la cantidad de números en el primer arreglo:"));
    for (let i = 0; i < cantidad1; i++) {
      let numero = parseInt(prompt("Ingrese el número " + (i + 1) + " del primer arreglo:"));
      arreglo1.push(numero);
    }
  
    let cantidad2 = parseInt(prompt("Ingrese la cantidad de números en el segundo arreglo:"));
    for (let i = 0; i < cantidad2; i++) {
      let numero = parseInt(prompt("Ingrese el número " + (i + 1) + " del segundo arreglo:"));
      arreglo2.push(numero);
    }
  
    let promedio1 = calcularPromedio(arreglo1);
    let promedio2 = calcularPromedio(arreglo2);
  
    console.log("Promedio del primer arreglo:", promedio1);
    console.log("Promedio del segundo arreglo:", promedio2);
  
    if (promedio1 > promedio2) {
      return "El primer arreglo tiene un promedio mayor.";
    } else if (promedio1 < promedio2) {
      return "El segundo arreglo tiene un promedio mayor.";
    } else {
      return "Ambos arreglos tienen el mismo promedio.";
    }
  }
  
  function calcularPromedio(arreglo) {
    let suma = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
  
    return suma / arreglo.length;
}
let resultado = compararPromedios();
console.log(resultado);
  