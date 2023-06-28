/*  Pedro trabaja en una empresa desarrolladora que está haciendo un software para el cliente orbi (una empresa multinacional). Pedro requiere una función que reciba como argumento el arreglo de caracteres ["b", "p", "s", "z", "o", "b", "a", "w", "r", “i”] y muestre si es posible formar la palabra orbi con los elementos del arreglo. .En caso de ser posible, quite los elementos del arreglo que no sirven para formar la palabra orbi y luego ordene el arreglo para que quede como el siguiente: [“o”, “r”, “b”, “i”].  Cree la función que requiere Pedro. Haga el análisis y luego codifique*/

function formarPalabra(arr) {
    let palabra = ["o", "r", "b", "i"];
    let arrCopy = [...arr]; // Hacemos una copia del arreglo original
  
    for (let char of palabra) {
      let index = arrCopy.indexOf(char);
      if (index === -1) {
        return "No es posible formar la palabra 'orbi'";
      }
  
      arrCopy.splice(index, 1); // Eliminamos el caracter del arreglo
    }
  
    arrCopy.sort(); // Ordenamos el arreglo resultante
  
    console.log("Es posible formar la palabra 'orbi'");
    return arrCopy;
  }
  
  // Ejemplo de uso
  let arreglo = ["b", "p", "s", "z", "o", "b", "a", "w", "r", "i"];
  let resultado = formarPalabra(arreglo);
  console.log(resultado);
  