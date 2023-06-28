/*Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para
inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la
palabra adso. */
let arreglo = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabra = "adso";
let palabraadso = true;

for (let i = 0; i < palabra.length; i++) {
  if (!arreglo.includes(palabra[i])) {
    palabraadso = false;
    break;
  }
}

if (palabraadso) {
  console.log("Es posible formar la palabra adso");
} else {
  console.log("No es posible formar la palabra adso");
}
