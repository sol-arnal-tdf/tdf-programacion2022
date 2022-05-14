/*Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero*/

let num: number = prompt("ingrese un numero : ");
let contador: number = 0;
let multi: string = "los multiplos de " + num + " son :";
let nomulti: string = "los numeros que no son multiplos son : ";

for (contador = 0; contador <= 100; contador++) {
  if (contador % num === 0) {
    multi = multi + " , " + contador;
  } else {
    nomulti = nomulti + " , " + contador;
  }
}

console.log(multi);
console.log(nomulti);
