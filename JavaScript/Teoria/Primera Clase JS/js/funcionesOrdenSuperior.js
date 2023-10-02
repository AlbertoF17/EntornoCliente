//EJERCICIO 1
console.log("1) Define una función que reciba un número n y devuelva si es primo o no");
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

//EJERCICIO 2
console.log("2) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si hay algún número primo");
let array1 = [5, 1, 7, 8, 2, 4, 6, 3, 9];
console.log(array1.some(esPrimo) ? "Hay al menos un número primo en el array" : "No hay números primos en el array");

//EJERCICIO 3
console.log("3) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si todos son números primos");
console.log(array1.every(esPrimo) ? "Todos los números son primos en el array" : "No todos los números son primos en el array");

//EJERCICIO 4
console.log("4) Dado el array [5,1,7,8,2,4,6,3,9], comprueba en que posición está el primer número primo");
console.log("El primer número primo está en la posición: " + array1.findIndex(esPrimo));

//EJERCICIO 5
console.log("5) Dado el array [5,1,7,8,2,4,6,3,9], comprueba cual es el primer número primo");
console.log("El primer número primo es: " + array1.find(esPrimo));

//EJERCICIO 6
console.log("6) Dado el array [5,1,7,8,2,4,6,3,9], quédate sólo con los números primos");
let arrayPrimos = array1.filter(esPrimo);
console.log(`El array de sólo los números primos es: ${arrayPrimos}`);

//EJERCICIO 7
console.log("7)  Dado el array de números primos, dame el producto de todos los elementos del array");
let producto = 1;
arrayPrimos.forEach(element => {
    producto *= element;
})
console.log(`El producto de los elementos del array de números primos es: ${producto}`);

//EJERCICIO 8
console.log("8)  Define una función que reciba un String y devuelva si es palíndromo o no");
function esPalindromo(string) {
    string = string.toLowerCase().replace(/\s/g, '');
    const stringInvertido = string.split('').reverse().join('');
    return string === stringInvertido;
}

//EJERCICIO 9
console.log('9) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba si hay algún palíndromo');
let array2 = ["ana", "mesa", "radar", "seres", "folio", "sudoku", "amor a roma", "sol", "mar", "oso", "salas"];
console.log(array2.some(esPalindromo) ? "Existe algún palíndormo":"No hay ningún palíndromo");

//EJERCICIO 10
console.log('10) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba si todos son palíndromos');
console.log(array2.every(esPalindromo) ? "Todos son palíndormos":"No todos son palíndromo");

//EJERCICIO 11
console.log('11) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba en que posición está el primer palíndromo');
console.log("El primer palíndromo está en la posición: " + array2.findIndex(esPalindromo));

//EJERCICIO 12
console.log('12) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba cual es el primer palíndromo');
console.log("El primer palíndromo es: " + array2.find(esPalindromo));

//EJERCICIO 13
console.log('13) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], quédate sólo con los palíndromos');
let arrayPalindromos = array2.filter(esPalindromo);
console.log("El array de palíndromos es: " + arrayPalindromos);

//EJERCICIO 14
console.log("14) Dado el array de números palíndromos, dame la concatenación de todos los elementos del array");
console.log("La concatenación del array de palíndromos es:" + array2.join(''));

//OTROS:
//EJERCICIO 1
console.log("1) Dado un array de números, verifica si hay algún número negativo");
const numerosNegativos = [5, 1, -7, 8, 2, 4, -6, 3, 9];
const hayNegativo = numerosNegativos.some(numero => numero < 0);
console.log(hayNegativo ? "Hay al menos un número negativo en el array." : "No hay números negativos en el array.");

//EJERCICIO 2
console.log("2) Dado un array de Strings, encuentra el índice de la primera cadena que empiece por la letra 'A'");
const palabrasConA = ["manzana", "banana", "pera", "agradable", "azul"];
const indicePalabraConA = palabrasConA.findIndex(palabra => palabra.charAt(0).toUpperCase() === 'A');
console.log(indicePalabraConA !== -1 ? `El primer elemento que comienza con 'A' está en el índice ${indicePalabraConA}.` : "No se encontraron elementos que comiencen con 'A' en el array.");

//EJERCICIO 3
console.log("3) Dado un array de números de 3 o más cifras, calcula la suma de las últimas cifras de cada número");
const numerosGrandes = [123, 456, 789, 321, 654];
const sumaUltimasCifras = numerosGrandes.reduce((suma, numero) => suma + (numero % 10), 0);
console.log("La suma de las últimas cifras es:", sumaUltimasCifras)

//EJERCICIO 4
console.log("4) Dado un array de arrays, filtra el array para que sólo queden los arrays de longitud 5");
const arrayDeArrays = [
    [1, 2, 3, 4, 5],
    ["manzana", "banana", "cereza", "dátiles", "uva"],
    [10, 20, 30, 40],
    ["rojo", "verde", "azul", "amarillo", "morado"],
    [100, 200, 300, 400, 500],
];
const arraysDeDimension5 = arrayDeArrays.filter(subarray => subarray.length === 5);
console.log("Arrays de dimensión 5:", arraysDeDimension5);

//EJERCICIO 5
console.log("5) Dado un array de Strings, encuentra el primer array de longitud 3");
const palabrasLongitud3 = ["manzana", "sol", "mesa", "sol", "luna"];
const primerPalabraLongitud3 = palabrasLongitud3.find(palabra => palabra.length === 3);
console.log(primerPalabraLongitud3 !== undefined ? "El primer array de longitud 3 es: " + primerPalabraLongitud3 : "No se encontró ningún array de longitud 3 en el array.");

//EJERCICIO 6
console.log("6) Dado un array de números, verifica que todos los números sean de 2 cifras o más");
const numerosDosCifrasOMas = [12, 56, 89, 7, 34, 123];
const todosDeDosCifrasOMas = numerosDosCifrasOMas.every(numero => numero >= 10 && numero < 100);
console.log(todosDeDosCifrasOMas ? "Todos los números son de dos cifras o más." : "No todos los números son de dos cifras o más en el array.");