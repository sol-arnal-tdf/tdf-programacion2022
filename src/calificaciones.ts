/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno) */
let nomAlum: string = prompt("ingrese el nombre del alumno: ");
let total: number = 0;

while (nomAlum !== "") {
  let notaPract: number = prompt("ingrese la nota practica: ");
  let notaProblem: number = prompt("ingrese la nota de problemas: ");
  let notaTeor: number = prompt("ingrese la nota teorica: ");

  if ((notaPract >= 0) & (notaPract <= 10)) {
    if ((notaProblem >= 0) & (notaProblem <= 10)) {
      if ((notaTeor >= 0) & (notaTeor <= 10)) {
        total = notaPract * 0.1 + notaProblem * 0.5 + notaTeor * 0.4;
        console.log(
          " El Alumno " +
            nomAlum +
            " tiene un " +
            notaPract +
            " en la parte practica, un " +
            notaProblem +
            " en la parte de problemas y un " +
            notaTeor +
            " en la parte teorica, su nota final es : " +
            total
        );
      } else {
        console.log("error ");
      }
    } else {
      console.log("error ");
    }
  } else {
    console.log("error ");
  }
  nomAlum = prompt("ingrese el nombre del alumno: ");
}
