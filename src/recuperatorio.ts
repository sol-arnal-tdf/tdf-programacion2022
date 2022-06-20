/*Hacer un programa que simule la compra que hace un cliente en un
supermercado. El cliente va tener que ingresar por teclado la
CANTIDAD de productos que va a llevar, los  que va
a comprar, el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.
Finalizada la compra, el programa va a mPRODUCTOSostrar por pantalla el
detalle de la compra, productos, cantidad, precio unitario y precio
total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led */

function cargaprod(cant: number): void {
  for (let ind: number = 0; ind < cant; ind++) {
    producto[ind] = prompt("ingrese el producto a comprar:");
    precio[ind] = Number(prompt("ingrese el precio :"));
    cantidad[ind] = Number(prompt("ingrese la cantidad:"));
    precFinProd[ind] = precio[ind] * cantidad[ind];
  }
}
function totalCompra(): number {
  let total: number = 0;
  for (let ind: number = 0; ind < cantProd; ind++) {
    total = total + precFinProd[ind];
  }
  return total;
}
function mostrarListado(): void {
  console.log("EL LISTADO DE PRODUCTOS Y SU RESPECTIVO TOTAL ES :");
  for (let ind: number = 0; ind < cantProd; ind++) {
    console.log(
      "Producto : ",
      producto[ind],
      " Precio Unitario: ",
      precio[ind],
      " Cantidad de Productos : ",
      cantidad[ind],
      " Precio Final del Producto: ",
      precFinProd[ind]
    );
  }
  console.log("el total de la compra es : ", totalCompra());
}
function participar(): void {
  if (totalCompra() > 3000) {
    console.log("En base a su monto total de compra: participa por un 0km ");
  } else if (totalCompra() > 2000) {
    console.log(
      "En base a su monto total de compra: participa por una moto 0km "
    );
  } else if (totalCompra() > 1000) {
    console.log(
      "En base a su monto total de compra: participa por una tv led  "
    );
  } else {
    console.log("En base a su monto total de compra: No participa por nada ");
  }
}
let cantProd: number = Number(
  prompt("ingrese la cantidad de productos comprados: ")
);

let producto: string = new Array(cantProd);
let precio: number[] = new Array(cantProd);
let cantidad: number[] = new Array(cantProd);
let precFinProd: number[] = new Array(cantProd);

cargaprod(cantProd);
mostrarListado();
participar();
