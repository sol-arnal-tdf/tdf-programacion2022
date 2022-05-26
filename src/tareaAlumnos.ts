/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los
tres trimestres
Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno 
(ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información*/

function ingresar_datos(): void {
  for (let ind: number = 0; ind < cantidad; ind++) {
    nAlumnos[ind] = prompt("Ingrese el nombre del alumno : ");
    nota1[ind] = Number(prompt("Ingrese la nota N°1 : "));
    nota2[ind] = Number(prompt("Ingrese la nota N°2 : "));
    nota3[ind] = Number(prompt("Ingrese la nota N°3 : "));
  }
}

function prom_Anual(): void {
  for (let ind: number = 0; ind < cantidad; ind++) {
    let resultado: number = 0;
    resultado = (nota1[ind] + nota2[ind] + nota3[ind]) / 3;
    console.log("El promedio del alumno : ", nAlumnos[ind]);
    console.log("es de : ", resultado);

    console.log(
      "El promedio se da en base a la sumatoria de : ",
      nota1[ind],
      " + ",
      nota2[ind],
      " + ",
      nota3[ind],
      "dividido 3 (la cantidad de notas a promediar)"
    );
  }
}
let cantidad: number = Number(
  prompt("ingrese la cantidad de alumnos a procesar : ")
);
let nAlumnos: number = new Array(cantidad);
let nota1: number = new Array(cantidad);
let nota2: number = new Array(cantidad);
let nota3: number = new Array(cantidad);
ingresar_datos();
prom_Anual();
