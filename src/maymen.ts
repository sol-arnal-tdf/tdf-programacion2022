let num: number = Number(prompt("ingrese un numero : "));
let max: number = -999999;
let min: number = 999999;

while (num !== 0) {
  if (num < min) {
    min = num;
  }
  if (num > max) {
    max = num;
  }
  num = Number(prompt("ingrese otro numero : "));
}
console.log("el max es : " + max);
console.log("el min es : " + min);
