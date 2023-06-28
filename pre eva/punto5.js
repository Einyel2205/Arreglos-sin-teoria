/*Shirley, que es desarrolladora
de software, requiere un programa que pida al
usuario diez edades de personas y las guarde en
un arreglo, luego, que tome tal arreglo y muestre
la edad menor entre todas las edades presentes
en el arreglo y también que muestre la edad
mayor entre todas las edades presentes en el
arreglo. También, el programa debe mostrar el
promedio de las edades. Cree el programa que
requiere Shirley. */
function obtenerEdades() {
  let edades = []; 

  for (let i = 0; i < 10; i++) {
    let edad = parseInt(prompt("Ingrese la edad " + (i + 1) + ":"));
    edades.push(edad);
  }

  let edadMenor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] < edadMenor) {
      edadMenor = edades[i];
    }
  }

  let edadMayor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
      edadMayor = edades[i];
    }
  }

  console.log("La edad menor es: " + edadMenor);
  console.log("La edad mayor es: " + edadMayor);
}

obtenerEdades();
