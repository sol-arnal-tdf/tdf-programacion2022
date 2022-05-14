/*Realice un programa que devuelva el área del triángulo usando 
los siguientes pares de base-altura:
(1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
Implemente un método llamado calcularAreaTriangulo que reciba
dos números por parámetro (uno llamado base y otro altura)
(base*altura)/2 */

let base: number = 1;
let altura: number = 2;

function calcularAreaTriangulo(bas: number, alt: number): number {
  return (bas * alt) / 2;
}

for (let cont = 0; cont <= 7; cont++) {
  console.log(calcularAreaTriangulo(base, altura));

  base += 1;
  altura += 2;
}
