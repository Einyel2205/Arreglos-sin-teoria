/*1. Dado el arreglo [1,2,3,4,5,6]:
a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
d) Calcular el promedio de todos los elementos del arreglo */

let array = [1,2,3,4,5,6];
let indice=0;
while (indice<array.length) {
    console.log(array[indice]);
    indice++
}

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
//Creo un nuevo array para almacenar la sumatoria de cada elemento +1
for (let index = 0; index < array.length; index++) {
    array[index]++;
    console.log(array[index]);
}

let sumatoria=0;
for (let index = 0; index < array.length; index++) {
    sumatoria+=array[index];
    promedio=sumatoria/index;
}
console.log(promedio);

