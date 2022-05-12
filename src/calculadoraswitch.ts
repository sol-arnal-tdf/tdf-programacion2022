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
  for (cont = 0; cont <= 5; cont++) {
    guion = guion + guion;
  }
  console.log(guion);
}
switch (operacion) {
  case 1:
    dibujarLinea();
    console.log(
      "el resultado de la suma de " + num1 + " y " + num2 + "es : ",
      num1 + num2
    );
    dibujarLinea();
    break;
  case 2:
    dibujarLinea();
    console.log(
      "el resultado de la resta de " + num1 + " y " + num2 + "es : ",
      num1 - num2
    );
    dibujarLinea();
    break;
  case 3:
    dibujarLinea();
    console.log(
      "el resultado de la divicion de " + num1 + " y " + num2 + "es : ",
      num1 / num2
    );
    dibujarLinea();
    break;
  case 4:
    dibujarLinea();
    console.log(
      "el resultado de la multiplicacion de " + num1 + " y " + num2 + "es : ",
      num1 * num2
    );
    dibujarLinea();
    break;
  default:
    dibujarLinea();
    console.log("opcion ingresada incorrecta.");
    dibujarLinea();
}
