/*
 *
 * Ejercicio 2: Dado un arreglo de personas, retorne el color de cabello 
 * de la persona de mas edad.
 *
 * Una persona es un objeto con los siguientes atributos:
 *    nombres: String
 *    apellidos: String
 *    edad: Number
 *    colorCabello: String
 *
 * Autor: santiago bocanegra
 * Fecha: 09/14/2018
 *
 */

$(document).on('ready',function(){
  $("#Punto2").on('click',prueba);
});

var colorCabello = function(personas) {
  let cantidadPersonas = personas.length;
  let personaMayor = personas[0];
  for (let i = 0; i < cantidadPersonas; i++) {
    if (personaMayor.edad < personas[i].edad) {
      personaMayor = personas[i];
    }
  }
  return personaMayor;
};


// Prueba (No modificar)

var persona1 = {
  nombres: 'Kirk',
  apellidos: 'Hummer',
  edad: 27,
  colorCabello: 'Rubio'
};
var persona2 = {
  nombres: 'Homero',
  apellidos: 'Simpson',
  edad: 30,
  colorCabello: 'Cafe Oscuro'
};
var persona3 = {
  nombres: 'Eric',
  apellidos: 'Cartman',
  edad: 10,
  colorCabello: 'Cafe'
};
var persona4 = {
  nombres: 'Rick',
  apellidos: '-',
  edad: 105,
  colorCabello: 'Azul'
};

var personas1 = [persona1];
var personas2 = [persona1, persona3];
var personas3 = [persona1, persona2, persona3];
var personas4 = [persona3, persona4];
var personas5 = [persona1, persona2, persona3,persona4];

if (colorCabello(personas1).colorCabello === 'Rubio' &&
      colorCabello(personas2).colorCabello === 'Rubio' &&
      colorCabello(personas3).colorCabello === 'Cafe Oscuro' &&
    colorCabello(personas4).colorCabello === 'Azul') {
    console.log('Ejercicio 2 paso el test!');
  } else {
    console.log('Ejercicio 2 no paso el test!');
  }

function prueba() {
    let persona = colorCabello(personas5);
    document.getElementById('resultado2.1').value = persona.nombres;
    document.getElementById('resultado2.2').value = persona.apellidos;
    document.getElementById('resultado2.3').value = persona.edad;
    document.getElementById('resultado2.4').value = persona.colorCabello;

}

