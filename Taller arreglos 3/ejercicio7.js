/* Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
“Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
verduras) queden en el arreglo que les corresponde. Use ciclos. */
function ordenarArreglos(arreglo1, arreglo2) {
    let frutas = [];
    let verduras = [];
  
    for (let i = 0; i < arreglo1.length; i++) {
      if (esFruta(arreglo1[i])) {
        frutas.push(arreglo1[i]);
      } else {
        verduras.push(arreglo1[i]);
      }
    }
  
    for (let i = 0; i < arreglo2.length; i++) {
      if (esFruta(arreglo2[i])) {
        frutas.push(arreglo2[i]);
      } else {
        verduras.push(arreglo2[i]);
      }
    }
  
    return {
      frutas: frutas,
      verduras: verduras
    };
  }
  
  function esFruta(elemento) {
    let frutas = ["Manzana", "Banano", "Pera", "Limón"];
    return frutas.includes(elemento);
}
  
let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let arreglosOrdenados = ordenarArreglos(arreglo1, arreglo2);
console.log("Frutas:", arreglosOrdenados.frutas);
console.log("Verduras:", arreglosOrdenados.verduras);
