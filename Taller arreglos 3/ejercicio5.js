/*Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de edad. */
function mayoresDeEdad(n) {
    let usuariosMayores = [];
    let contadorMayoresEdad = 0;
  
    for (let i = 1; i <= n; i++) {
      let nombre = prompt("Ingrese el nombre del usuario " + i);
      let edad = parseInt(prompt("Ingrese la edad del usuario " + i));
  
      if (edad >= 18) {
        usuariosMayores.push(nombre);
        contadorMayoresEdad++;
      }
    }
  
    console.log("Usuarios mayores de edad:", usuariosMayores);
    console.log("Cantidad de usuarios mayores de edad:", contadorMayoresEdad);
  
    return usuariosMayores;
}
let numeroUsuarios = parseInt(prompt("Ingrese el número de usuarios:"));
let usuariosMayores = mayoresDeEdad(numeroUsuarios);
 