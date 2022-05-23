function llenar_Array1y2_usu(): number {
  for (let ind: number = 0; ind < 6; ind++) {
    numeros1[ind] = Number(prompt("Primer Array, ingrese un numero :"));
  }
  for (let ind: number = 0; ind < 6; ind++) {
    numeros2[ind] = Number(prompt("Segundo Array, ingrese un numero :"));
  }
}
function sumar_Array1y2(): number {
  for (let ind: number = 0; ind < 6; ind++) {
    suma1y2[ind] = numeros1[ind] + numeros2[ind];
  }
}

function mostrar_Sumade1y2(): number {
  for (let ind: number = 0; ind < 6; ind++) {
    console.log(
      "El resultado de la suma de " +
        numeros1[ind] +
        " y " +
        numeros2[ind] +
        " es : " +
        suma1y2[ind]
    );
  }
}
let numeros1: number = new Array(6);
let numeros2: number = new Array(6);
let suma1y2: number = new Array(6);
llenar_Array1y2_usu();
sumar_Array1y2();
mostrar_Sumade1y2();
