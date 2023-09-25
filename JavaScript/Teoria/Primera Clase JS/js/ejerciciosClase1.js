//Dado el array = [3,7,11,8,1,4]
let arrayDeNumeros = [3,7,11,8,1,4];
//1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. La edad debe pedirla por una alerta.
let edad = Number.parseInt(prompt("Introduzca su edad:"));
arrayDeNumeros.forEach((numero) => console.log(numero*edad));
//2) Modificar el valor de cada elemento del array por el resto de dividir cada elemento entre 2.
arrayDeNumeros.forEach((numero) => {
    numero = numero%2;
    console.log(numero);
})

//Dado el string = "Jurado, Alberto, Marcelo, Pablo, Maria"
let stringNombres = "Jurado, Alberto, Marcelo, Pablo, Maria";
//1) Definir un array en cuya cada posición esté cada nombre del string anterior.
let arrayNombres = stringNombres.split(", ");
let arrayNombres2 = stringNombres.split(", ");
console.log(arrayNombres);
//2) Dado el array anterior, mostrar por pantalla en que posición se encuentra la letra a en cada elemento del array.
arrayNombres.forEach((nombre) => console.log(nombre.indexOf('a')));
// 3) Dado el array anterior, cambiar en cada elemento del array anterior la letra a por la e.
arrayNombres.forEach((nombre, index) => {
    arrayNombres[index] = nombre.replace('a', 'e');
});
// 4) Crear una función que dado un array devuelva el array al revés. Crearla como función normal y como función flecha.
//NORMAL
function invertirArrayNormal(array) {
    console.log(array.reverse());
}

//FLECHA
let invertirArrayFlecha = (array) => {
    console.log(array.reverse());
};

invertirArrayNormal(arrayNombres);  
invertirArrayFlecha(arrayNombres);

//Como se llaman las 2 funciones que invierten el array, la función invertirArrayFlecha
//invierte el array previamente invertido por la funcion invertirArrayNormal, por lo que
//devuelve el array original, pudiendo así seguir usándolo en los siguientes ejercicios.

// 5) Dado el array de nombres, poner cada nombre en mayúsculas y al revés.
let arrayNombresInvertidos = [];
arrayNombres2.forEach((nombre) => {
    let nombreInvertido = nombre.split('').reverse().join('').toUpperCase();
    arrayNombresInvertidos.push(nombreInvertido);
});
console.log(arrayNombresInvertidos);

//1)Crea un array de números de 100 posiciones, que contendrá los números del 1 al 100.
//Partiendo del array ya creado y completamente relleno, obtener la suma de todos ellos y la media.
const arrayUnoCien = [];
for (let i = 1; i <= 100; i++) {
    arrayUnoCien.push(i);
}
const suma1 = arrayUnoCien.reduce((acc, num) => acc + num, 0);
const media = suma / arrayUnoCien.length;
console.log("La suma del array es: " + suma1);
console.log("La media del array es: " + media);

//2)Crear un array de enteros donde indicamos por teclado el tamaño del array, rellenamos el array con
//números aleatorios entre 0 y 9, y mostramos por pantalla el valor de cada posición y la suma de todos los valores.
const tamano = parseInt(prompt("Introduce el tamaño del array 1:"));
const arrayEnteros = [];
for (let i = 0; i < tamano; i++) {
    arrayEnteros.push(Math.floor(Math.random() * 10));
}
console.log("Valores del array y suma: [" + arrayEnteros.join(" ") + "]");
const suma2 = arrayEnteros.reduce((acc, num) => acc + num, 0);
console.log("Suma total: " + suma2);

//3)Leer por alerta (o formulario en php) un numero entero y crear un array de ese tamaño, con valores
//aleatorios entre 1 y 300. A continuación, pedir un número entero entre 0 y 9, e imprimir todas las posiciones
//del array que tengan un número acabado en ese dígito. Esos números, además de imprimirlos, almacenarlos en
//un array de salida con el tamaño adecuado.
const tamano2 = parseInt(prompt("Introduce el tamaño del array 2:"));
const arrayEnteros2 = [];
for (let i = 0; i < tamano2; i++) {
    arrayEnteros2.push(Math.floor(Math.random() * 299) + 1);
}

const digito = parseInt(prompt("Introduce un número entre 0 y 9:"));
const numerosTerminadosEnDigito = arrayEnteros2.filter(numero => numero % 10 === digito);
console.log("Números terminados en " + digito + ": " + numerosTerminadosEnDigito.join(" "));

//4)Introduce por alerta(o formulario en php) el número de tu DNI, y vuelve a imprimirlo seguido de la letra.
//Para calcular la letra, cogeremos el resto de dividir nuestro dni entre 23, el resultado debe estar entre 0 y 22.
//Tendrás que crear un array que contenga las posibles letras del DNI.
const dni = prompt("Introduce tu número de DNI:");
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
const indiceLetra = dni % 23;
const letra = letrasDNI[indiceLetra];
console.log("DNI completo: " + dni + letra);
