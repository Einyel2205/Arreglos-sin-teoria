/*Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en él. */

function mostrarNumerosPrimos(arreglo) {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < arreglo.length; i++) {
        let numero = arreglo[i];
        let esPrimo = true;

        if (numero <= 1) {
        esPrimo = false;
        } else {
            for (let j = 2; j < numero; j++) {
                if (numero % j === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }

        if (esPrimo) {
        console.log(numero);
        }
    }
}
mostrarNumerosPrimos(numeros);
    