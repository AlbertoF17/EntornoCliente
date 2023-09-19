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
let arrayNombres2 = stringNombres.split(", ");
console.log(arrayNombres);
//2) Dado el array anterior, mostrar por pantalla en que posición se encuentra la letra a en cada elemento del array.
arrayNombres.forEach((nombre) => console.log(nombre.indexOf('a')));
// 3) Dado el array anterior, cambiar en cada elemento del array anterior la letra a por la e.
arrayNombres.forEach((nombre) => nombre = nombre.replace('a', 'e'));
console.log(arrayNombres);
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