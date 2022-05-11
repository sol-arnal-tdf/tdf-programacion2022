let num1: number = prompt("ingrese el primer numero: ");
let num2: number = prompt("ingrese el segundo numero: ");
let operacion: number = prompt("ingrese 1 para sumar y 2 para restar: ");
let cont = 0;
function dibujarLinea() {
  let guion: string = "-";
  for (cont = 0; cont <= 5; cont++) {
    guion = guion + guion;
  }
  console.log(guion);
}

function sumar(n1, n2): void {
  console.log(
    "el resultado de la suma de " + n1 + " y " + n2 + " es de :" + (n1 + n2)
  );
}

function restar(n1, n2): void {
  console.log(
    "el resultado de la resta de " + n1 + " y " + n2 + " es de :" + (n1 - n2)
  );
}

if (operacion === 1) {
  dibujarLinea();
  sumar(num1, num2);
  dibujarLinea();
} else {
  if (operacion === 2) {
    dibujarLinea();
    restar(num1, num2);
    dibujarLinea();
  }
}
