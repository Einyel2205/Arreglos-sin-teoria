/*Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar
Contacto: gangaritah@gmail.com
Programación de software.
Centro de Comercio y Turismo.
Regional Quindío. 2022
Instructor: Germán Alberto Angarita Henao
cuales numeros con consecutivos con otros, p.e. dos a y b son
consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos
porque 20 + 1 = 21. */
let arreglo = [5, 7, 90, 2, 5, 3, 8, 99];

arreglo.forEach((num1) => {
  arreglo.forEach((num2) => {
    if (num1 + 1 === num2) {
      console.log(num1 + " y " + num2 + " son consecutivos.");
    }
  });
});
