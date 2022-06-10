/*Dados estos 5 arreglos que representan las ventas semanales del primer trimentre,
corresspondientes a 5 vendedores de la empresa: Camila, Franco, Sofia, Matias y Agustina,
respectivamente.
vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]
vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]

Escribir un programa que permita determinar:Para cada vendedor mostrar su nombre y
1- su venta maxima indicando semana y mes de la misma.
2- su venta minima indicando semana y mes de la misma.
3- su promedio semanal de ventas.
4- su promedio mensualde ventas.

Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma demontos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestreTenga en cuenta que cada valor en 
los arreglos es la venta de una semana, y que cuatro semanas forman un mes
*/

let vendedor1: number = new Array(12);
vendedor1 = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number = new Array(12);
vendedor2 = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number = new Array(12);
vendedor3 = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number = new Array(12);
vendedor4 = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number = new Array(12);
vendedor5 = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let nomVen: string = prompt("ingrese el nombre del vendedor : ");
function semdelMes(
  array: number,
  may: number,
  inicio: number,
  final: number
): number {
  let lugArray: number = 0;
  let mayor: number = may;
  for (let indice: number = inicio; indice <= final; indice++) {
    if (array[indice] === mayor) {
      lugArray = indice;
    }
  }
  return lugArray;
}

function venMaxVendedor(vendedor): void {
  console.log(
    "semana con venta mayor del mes 1 es :",
    semana(
      semdelMes(
        vendedor,
        Math.max(vendedor[0], vendedor[1], vendedor[2], vendedor[3]),
        0,
        3
      )
    )
  );
  console.log(
    "semana con venta mayor del mes 2 es :",
    semana(
      semdelMes(
        vendedor,
        Math.max(vendedor[4], vendedor[5], vendedor[6], vendedor[7]),
        4,
        7
      )
    )
  );
  console.log(
    "semana con venta mayor del mes 3 es :",
    semana(
      semdelMes(
        vendedor,
        Math.max(vendedor[8], vendedor[9], vendedor[10], vendedor[11]),
        8,
        11
      )
    )
  );
}
function semMindelMes(
  array: number,
  min: number,
  inicio: number,
  final: number
): number {
  let lugArray: number = 0;
  let minimo: number = min;
  for (let indice: number = inicio; indice <= final; indice++) {
    if (array[indice] === minimo) {
      lugArray = indice;
    }
  }
  return lugArray;
}

function venMinVendedor(vendedor): void {
  console.log(
    "semana con venta minima del mes 1 es :",
    semana(
      semMindelMes(
        vendedor,
        Math.min(vendedor[0], vendedor[1], vendedor[2], vendedor[3]),
        0,
        3
      )
    )
  );
  console.log(
    "semana con venta minima del mes 2 es :",
    semana(
      semMindelMes(
        vendedor,
        Math.min(vendedor[4], vendedor[5], vendedor[6], vendedor[7]),
        4,
        7
      )
    )
  );
  console.log(
    "semana con venta minima del mes 3 es :",
    semana(
      semMindelMes(
        vendedor,
        Math.min(vendedor[8], vendedor[9], vendedor[10], vendedor[11]),
        8,
        11
      )
    )
  );
}

function venPromSemVendedor(vendedor): void {
  let suma: number = 0;
  for (let ind: number = 0; ind < 12; ind++) {
    suma = suma + vendedor[ind];
  }
  console.log("el promedio semanal es de : $ ", suma / 12);
}

function venPromMensVendedor(vendedor): void {
  let suma1: number = 0;
  let suma2: number = 0;
  let suma3: number = 0;
  suma1 = vendedor[0] + vendedor[1] + vendedor[2] + vendedor[3];
  suma2 = vendedor[4] + vendedor[5] + vendedor[6] + vendedor[7];
  suma3 = vendedor[8] + vendedor[9] + vendedor[10] + vendedor[11];
  console.log("el promedio del mes 1 es de : $ ", suma1 / 4);
  console.log("el promedio del mes 2 es de : $ ", suma2 / 4);
  console.log("el promedio del mes 3 es de : $ ", suma3 / 4);
}
function semana(num): number {
  if (num === 0 || num === 4 || num === 8) {
    return 1;
  }
  if (num === 1 || num === 5 || num === 9) {
    return 2;
  }
  if (num === 2 || num === 6 || num === 10) {
    return 3;
  }
  if (num === 3 || num === 7 || num === 11) {
    return 4;
  }
}
switch (nomVen) {
  case "Camila":
    console.log(" Vendedor: Camila ");
    venMaxVendedor(vendedor1);
    venMinVendedor(vendedor1);
    venPromSemVendedor(vendedor1);
    venPromMensVendedor(vendedor1);
    break;
  case "Franco":
    console.log(" Vendedor: Franco ");
    venMaxVendedor(vendedor2);
    venMinVendedor(vendedor2);
    venPromSemVendedor(vendedor2);
    venPromMensVendedor(vendedor2);
    break;
  case "Sofia":
    console.log(" Vendedor: Sofia ");
    venMaxVendedor(vendedor3);
    venMinVendedor(vendedor3);
    venPromSemVendedor(vendedor3);
    venPromMensVendedor(vendedor3);
    break;
  case "Matias":
    console.log(" Vendedor: Matias ");
    venMaxVendedor(vendedor4);
    venMinVendedor(vendedor4);
    venPromSemVendedor(vendedor4);
    venPromMensVendedor(vendedor4);
    break;
  case "Agustina":
    console.log(" Vendedor: Agustina ");
    venMaxVendedor(vendedor5);
    venMinVendedor(vendedor5);
    venPromSemVendedor(vendedor5);
    venPromMensVendedor(vendedor5);
    break;
}
