let num1: number = Number(prompt("Ingrese un número: "));
let num2: number = Number(prompt("Ingrese otro número: "));

let suma, cambio: number;

suma = 0;

if (num1 > num2) {
  cambio = num1;
  num1 = num2;
  num2 = cambio;
}
for (let inicio: number = num1; inicio <= num2; inicio++) {
  suma = suma + inicio;
}
console.log("El numero es: " + suma);
