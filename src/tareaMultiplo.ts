/*Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior*/

function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDeDivisores(num: number): Number {
  let multiplo: number = 0;
  for (let cant: number = 0; cant <= num; cant++) {
    if (esMultiplo(num, cant)) {
      multiplo++;
    }
  }
  return multiplo;
}

let numero: number = Number(prompt("ingrese numero  "));
console.log(
  "la cantidad de multiplos de " + numero + " es : ",
  cantidadDeDivisores(numero)
);
