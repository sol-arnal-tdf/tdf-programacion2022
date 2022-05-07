let num: number = Number(prompt("ingrese un numero : "));

while (num <= 0) {
  num = prompt("error no puede ser 0 ingrese un numero nuevamente : ");
}

if (num % 2 === 0) {
  console.log("el numero " + num + " es par.");
} else {
  console.log("el numero " + num + " es impar.");
}
