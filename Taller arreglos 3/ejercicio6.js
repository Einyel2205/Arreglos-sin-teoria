/*Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
“Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
queden en el arreglo que les corresponde. Use ciclos. */
function ordenarArreglos(valle, quindio) {
    let indices = [];
    for (let i = 0; i < valle.length; i++) {
      indices[i] = i;
    }
    for (let i = 0; i < valle.length - 1; i++) {
      for (let j = i + 1; j < valle.length; j++) {
        if (valle[j].localeCompare(valle[i]) < 0) {
          let temp = indices[i];
          indices[i] = indices[j];
          indices[j] = temp;
        }
      }
    }
    let valleOrdenado = [];
    let quindioOrdenado = [];
    for (let i = 0; i < valle.length; i++) {
      valleOrdenado[i] = valle[indices[i]];
      quindioOrdenado[i] = quindio[indices[i]];
    }
    return {
      valle: valleOrdenado,
      quindio: quindioOrdenado
    };
}
let valle = ["Cali", "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];
let arreglosOrdenados = ordenarArreglos(valle, quindio);
console.log("Valle:", arreglosOrdenados.valle);
console.log("Quindio:", arreglosOrdenados.quindio);