/*  Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
en el arreglo) para mostrar cuántas veces aparece el nombre Maria*/
let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let nombreBuscado = "Maria";
let contador = 0;

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] === nombreBuscado) {
    contador++;
  }
}

console.log(`El nombre ${nombreBuscado} aparece ${contador} veces en el arreglo.`);
