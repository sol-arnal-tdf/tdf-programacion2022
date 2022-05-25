/*function llenar_numeros(): void {
  for (let ind: number = 0; ind < long; ind++) {
    numeros1[ind] = Number(prompt("ingrese un numero :"));
  }
}

function voltear_array(): void {
  for (let ind: number = long - 1; ind >= 0; ind--) {
    console.log("los numeros son: ", numeros1[ind]);
  }
}

let long: number = Number(
  prompt("ingrese la cantidad de numeros del arreglo ")
);
let numeros1: number[] = new Array(long);

llenar_numeros();
voltear_array();*/

/*Almacene en un arreglo de dimensión N, 
números (la cantidad es ingresada por el usuario)
Muestre cuántos números son positivos, cuántos son 
negativos y cuántos ceros hay */

function llenar_numeros(): void {
  for (let ind: number = 0; ind < long; ind++) {
    numeros[ind] = Number(prompt("ingrese un numero :"));
  }
}

function pos_neg_0(): void {
  let p: number = 0;
  let n: number = 0;
  for (let ind: number = long - 1; ind >= 0; ind--) {
    if (numeros[ind] === 0) {
      cero++;
    } else {
      if (numeros[ind] > 0) {
        pos++;
      } else {
        neg++;
      }
    }
  }
  for (let ind: number = long - 1; ind >= 0; ind--) {
    if (numeros[ind] > 0) {
      positivo[p] = numeros[ind];
      p++;
    } else {
      negativo[n] = numeros[ind];
      n++;
    }
  }
}
function mostrar_resultados(): void {
  console.log("La cantidad de '0' es de : ", cero);
  console.log("La cantidad de numeros positivos es de : ", pos);
  console.log("La cantidad de numeros negativos es de : ", neg);
  console.log("los numeros positivos dentro del arreglo son: ");
  for (let ind: number = 0; ind < pos; ind++) {
    console.log(positivo[ind]);
  }
  console.log("los numeros negativos dentro del arreglo son: ");
  for (let ind: number = 0; ind < pos; ind++) {
    console.log(negativo[ind]);
  }
}

let long: number = Number(
  prompt("ingrese la cantidad de numeros del arreglo ")
);
let cero: number = 0;
let pos: number = 0;
let neg: number = 0;
let numeros: number[] = new Array(long);
let positivo: number[] = new Array(pos);
let negativo: number[] = new Array(neg);
llenar_numeros();
pos_neg_0();
mostrar_resultados();
