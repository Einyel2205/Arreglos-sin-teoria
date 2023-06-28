/*Mariana, que trabaja en la
empresa BioGenetics S.A, requiere una función que
pida al usuario un arreglo con cuatro cadenas de
ADN como elementos, cada cadena debe ser de
logitud 7. Un ejemplo de un arreglo ingresado por
el usuario sería: [“AATGAAC”, “GTTTTTC”,
“GGTAAAT”, “CCCCATG”]) .Luego de obtener el
arreglo del usuario, muestre cuál es la base que más
se repite en tales cadenas que forman el arreglo.
Recuerde que una cadena de ADN puede contener
las cuatro bases químicas, solo tres bases, solo dos
bases o solo una base, por ejemplo:
“AGTTCCAT” cadena formada por 4 bases
“ATTAGATC” cadena formada por 3 bases
“AATTTATA” cadena formada por 2 bases
“CCCCCCC” cadena formada por 1 base
Cree la función que necesita Mariana.*/
function obtenerBaseRepetida(arregloADN) {
    let contadorBases = {};
  
    for (let i = 0; i < arregloADN.length; i++) {
      let cadenaADN = arregloADN[i];
  
      for (let j = 0; j < cadenaADN.length; j++) {
        let base = cadenaADN[j];
  
        if (contadorBases[base]) {
          contadorBases[base]++;
        } else {
          contadorBases[base] = 1;
        }
      }
    }
  
    let baseRepetida = "";
    let maxRepeticiones = 0;
  
    for (let base in contadorBases) {
      if (contadorBases[base] > maxRepeticiones) {
        baseRepetida = base;
        maxRepeticiones = contadorBases[base];
      }
    }
  
    return baseRepetida;
  }
  
  let arregloADN = [];
  
  for (let i = 0; i < 4; i++) {
    let cadenaADN = prompt(`Ingrese la cadena de ADN ${i+1}:`);
    arregloADN.push(cadenaADN);
}
  
let baseMasRepetida = obtenerBaseRepetida(arregloADN);
console.log(`La base más repetida en las cadenas de ADN es: ${baseMasRepetida}`);
  
