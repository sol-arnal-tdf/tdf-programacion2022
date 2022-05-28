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

function buscar_alum(nombre_buscado: string): void {
  let resultado: number = -1;
  for (let ind: number = 0; ind < cantidad; ind++) {
    if (nAlumnos[ind] === nombre_buscado) {
      mostrar_datos(ind, resultado);
    }
  }
  if (resultado === -1) {
    console.log("no se encontro alumno");
  }
}

function mostrar_datos(ind: number, resultado: number): void {
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

let cantidad: number = Number(
  prompt("ingrese la cantidad de alumnos a procesar : ")
);
let nAlumnos: string = new Array(cantidad);
let nota1: number[] = new Array(cantidad);
let nota2: number[] = new Array(cantidad);
let nota3: number[] = new Array(cantidad);
ingresar_datos();
let nombre_buscado: string = prompt(
  "Ingrese el nombre del alumno a buscar  : "
);
prom_Anual(nombre_buscado);
