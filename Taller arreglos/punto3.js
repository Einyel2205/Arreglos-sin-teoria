/* Use splice para hacer las eliminaciones correspondientes:
a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el índice 4 en un sólo llamado
e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un sólo llamado. */
let array1=[1, 2, false];
array1.splice(2,1);
console.log(array1);

let array2=[99, false, 17, 45, 7, "abc", 78];
array2.splice(6,1);
console.log(array2);

let array3=[-1, -55, -89, - 30, 1000];
array3.splice(1,1);
console.log(array3);

let array4=["zxc", 767, 1298, true, false, [3], 1];
array4.splice(1,4);
console.log(array4);

let array5=[34, ["q"], 67, 1, 99, 1/2];
array5.splice(3,1);
console.log(array5);