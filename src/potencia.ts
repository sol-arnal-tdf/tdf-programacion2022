/*• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.*/
function calculoPotencia(bas: number, exp: number): number {
  if (exp === 0) {
    return 1;
  } else {
    let r: number = 1;
    for (let indice: number = 1; indice <= exp; indice++) {
      r = r * bas;
    }
    return r;
  }
}
let base: number = Number(prompt("ingrese la base : "));
let exponente: number = Number(prompt("ingrese el exponente : "));
let resultado: number = 0;

if (exponente >= 0) {
  resultado = calculoPotencia(base, exponente);
  console.log("el resultado es : ", resultado);
} else {
  console.log("exponente invalido ");
}
