/* Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo b. 
b) Agregue el elemento true usando push y verifique el cambio en el arreglo.
c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo. 
d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo.
e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo. */

let array=[1,2,3,4,5,6,7,8,9,10];
array.push(345);
console.log(array);
array.push(true);
console.log(array);
array.push("ADSO");
console.log(array);
array.push(455,78,false);
console.log(array);
array.push("ABcd",true,21);
console.log(array);