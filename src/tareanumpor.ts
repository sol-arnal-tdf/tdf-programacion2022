/*Actividad

Leer valores del usuario hasta que introduzca un 0
El usuario puede introducir valores numéricos, tanto positivos como negativos
Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje de positivos respecto del total


       Ejemplo:
                          Ingrese número: 9
                          Ingrese número: 7
                          Ingrese número: -1
                          Ingrese número: 1
                          Ingrese número: 0
                          3 positivos, 75% del total
*/

let num: number = Number(prompt("ingrese un numero : "));
let contador: number = 0;
let contadorPosi: number = 0;

while (num !== 0) {
  if (num > 0) {
    contadorPosi++;
  }
  contador++;

  num = Number(prompt("ingrese otro numero : "));
}
console.log("los numeros positivos son : " + contadorPosi);
console.log(
  "el porcentaje de los numeros positivos dentro del total es de : % " +
    (contadorPosi * 100) / contador
);
