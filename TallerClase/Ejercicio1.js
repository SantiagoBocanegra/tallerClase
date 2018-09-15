/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor: santiago bocanegra
 * Fecha: 09/14/2018
 *
 */
$(document).on('ready',function(){
	$("#Punto1").on('click',sumar);
});

function arraySum (array){
  let numeroElementos = array.length;
  let sumaTotal = 0;
  for (let i=0; i < numeroElementos; i++) {
    let numero = array[i];
    sumaTotal = numero + sumaTotal;
  }
  return sumaTotal;
}
let a = [7, 6, 5, 4, 3];
let b = [-3, -4, -5, -6, -7];
let c = [33];
if (arraySum(a) === 25 && arraySum(b) === -25 && arraySum(c) === 33) {
		console.log('Ejercicio 1 paso la prueba!');
	} else {
		console.log('Ejercicio 1 no paso la prueba!');
	}
function sumar() {
	if (arraySum(a) === 25 && arraySum(b) === -25 && arraySum(c) === 33) {
		document.getElementById('resultado1').value = arraySum(a);
		document.getElementById('resultado2').value = arraySum(b);
		document.getElementById('resultado3').value = arraySum(c);
	}
}

