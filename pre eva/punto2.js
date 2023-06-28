/* Shirley trabaja como programadora en la empresa Data East progrmando videojuegos. Ella qquiere una funcion que reciba como argumentos los arreglos ["s", "w", "@", "3", "a", "p"] y ["#", "p", "a", "z", "@"] y retorne un arreglo con los elementos que repiten en ambos, emparejados como una cadena, en este caso: ["@@", "aa", "pp"]. Cree la funcion que requiere Shirley. */

let arreglo=["s", "w", "@", "3", "a", "p"];
let arreglo2=["#", "p", "a", "z", "@"];

function retornarRepetidos() {
    let arregloRepetido=[]
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo2.length; j++) {
            if (arreglo[i]==arreglo2[j]) {
                arregloRepetido.push(arreglo[i]+arreglo2[j])
            }
        }
    }
    console.log(arregloRepetido);
}
retornarRepetidos();