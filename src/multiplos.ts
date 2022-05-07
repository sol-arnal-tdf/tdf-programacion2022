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
