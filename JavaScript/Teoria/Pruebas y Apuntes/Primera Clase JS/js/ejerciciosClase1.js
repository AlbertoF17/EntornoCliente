//Dado el array = [3,7,11,8,1,4]
let arrayDeNumeros = [3,7,11,8,1,4];
//1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. La edad debe pedirla por una alerta.
let edad = Number.parseInt(prompt("Introduzca su edad:"));
arrayDeNumeros.forEach((numero) => console.log(numero*edad));
//2) Modificar el valor de cada elemento del array por el resto de dividir cada elemento entre 2.
arrayDeNumeros.forEach((numero) => console.log(numero%2));

//Dado el string = "Jurado, Alberto, Marcelo, Pablo, Maria"
let stringNombres = "Jurado, Alberto, Marcelo, Pablo, Maria";
//1) Definir un array en cuya cada posición esté cada nombre del string anterior.
let arrayNombres = stringNombres.split(", ");
console.log(arrayNombres);
//2) Dado el array anterior, mostrar por pantalla en que posición se encuentra la letra a en cada elemento del array.
arrayNombres.forEach((nombre) => console.log(nombre.indexOf('a')));