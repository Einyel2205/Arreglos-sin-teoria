/*Dado el arreglo [3, 50, 70, 600, 40]: 1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos
4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos
son pares
*/
//Ejercicio1:
let arreglo = [3, 50, 70, 600, 40];
arreglo.forEach(i => {
    console.log(i);
});

/* Ejercicio2 */

arreglo.forEach(i => {
    console.log(i * 3);
});
/* Ejercicio3 */
let i=0;
while (i<arreglo.length) {
    console.log(arreglo[i]);
    i++
}
/* Ejercicio4 */
for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] % 2 === 0) {
    console.log(arreglo[i]);
  }
}