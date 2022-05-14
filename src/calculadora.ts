let num1: number = Number(prompt("ingrese el primer numero: "));
let num2: number = Number(prompt("ingrese el segundo numero: "));
let operacion: number = Number(
  prompt("ingrese 1 para sumar y 2 para restar: ")
);
let cont = 0;
function dibujarLinea() {
  let guion: string = "-";
  for (cont = 0; cont <= 5; cont++) {
    guion = guion + "-";
  }
  console.log(guion);
}

if (operacion === 1) {
  dibujarLinea();
  console.log(num1 + num2);
  dibujarLinea();
} else {
  if (operacion === 2) {
    dibujarLinea();
    console.log(num1 - num2);
    dibujarLinea();
  } else {
    console.log("error no es correcta la opcion ");
  }
}
