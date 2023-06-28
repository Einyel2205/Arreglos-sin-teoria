/*. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema */

function alfabeto(letra) {
    let array=["a", "b", "c", "d", "e", "f", "g"];    
    for (let index = 0; index < array.length; index++) {
        if (array[index]===letra) {
            return "Si pertenece";
        }
    }
    return "no pertence al arreglo";
}
let letra="a"
let verificar=alfabeto(letra);
console.log(verificar);