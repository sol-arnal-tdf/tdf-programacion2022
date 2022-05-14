let num1: number = Number(prompt("ingrese el primer numero: "));
let num2: number = Number(prompt("ingrese el segundo numero: "));
let operacion: number = Number(
  prompt(
    "ingrese 1 para sumar ,2 para restar, 3 para dividir yb 4 para multiplicar "
  )
);
let cont = 0;

function dibujarLinea() {
  let guion: string = "-";
  for (cont = 0; cont <= 20; cont++) {
    guion += "-";
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
function dividir(n1, n2): void {
  console.log(
    "el resultado de la division de " + n1 + " y " + n2 + " es de :" + n1 / n2
  );
}
function multiplicar(n1, n2): void {
  console.log(
    "el resultado de la multiplicacion de " +
      n1 +
      " y " +
      n2 +
      " es de :" +
      n1 * n2
  );
}

switch (operacion) {
  case 1:
    dibujarLinea();
    sumar(num1, num2);
    dibujarLinea();
    break;
  case 2:
    dibujarLinea();
    restar(num1, num2);
    dibujarLinea();
    break;
  case 3:
    dibujarLinea();
    dividir(num1, num2);
    dibujarLinea();
    break;
  case 4:
    dibujarLinea();
    multiplicar(num1, num2);
    dibujarLinea();
    break;
  default:
    dibujarLinea();
    console.log("opcion ingresada incorrecta.");
    dibujarLinea();
}
