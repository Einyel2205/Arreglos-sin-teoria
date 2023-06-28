/* Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
arreglos para ver cómo se implementa la variable contadora*/
let arreglo = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

arreglo.forEach(function(elemento) {
  sumaCuadrados += elemento * elemento;
});

console.log("La suma de los cuadrados   es: " + sumaCuadrados);