/*2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo. */
function bases() {
    let base = ['A', 'T', 'C', 'G'];
    let basesimple = [];
    for (let i = 0; i < base.length; i++) {
        let baseactual = base[i];
        let basesimple = "";
        for (let j = 0; j < array.length; j++) {
            let cadena=array[j];

            if (cadena.includes(baseactual)) {
                basesimple+=cadena;
            }
        }
        if (basesimple.length>0) {
            basesimple
        }
    }
    return basesimple
}
let array=["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];    
let basesimple=bases(array);
console.log(basesimple);