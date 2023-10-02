console.log("1) Define una función que reciba un número n y devuelva si es primo o no");
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("2) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si hay algún número primo");
let array1 = [5, 1, 7, 8, 2, 4, 6, 3, 9];
let cont = 0;
array1.forEach(element => {
    if (esPrimo(element)) {
        cont++;
    }
});
console.log("Hay " + cont + " números primos");

console.log("3) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si todos son números primos");
cont = array1.length - 1;
array1.forEach(element => {
    if (esPrimo(element)) {
        cont--;
    }
})
if (cont === 0) {
    console.log("Todos los números son primos");
} else {
    console.log("No todos los números son primos");
}

console.log("4) Dado el array [5,1,7,8,2,4,6,3,9], comprueba en que posición está el primer número primo");
cont = -1;
for (let i = 0; i < array1.length; i++) {
    if (esPrimo(array1[i])) {
        cont = i;
        break;
    }
}

if (cont !== -1) {
    console.log("El primer número primo está en la posición: " + cont);
} else {
    console.log("No se encontraron números primos en el array.");
}

console.log("5) Dado el array [5,1,7,8,2,4,6,3,9], comprueba cual es el primer número primo");
cont = -1;
for (let i = 0; i < array1.length; i++) {
    if (esPrimo(array1[i])) {
        cont = array1[i];
        break;
    }
}
if (cont !== -1) {
    console.log("El primer número primo es el: " + cont);
} else {
    console.log("No se encontraron números primos en el array.");
}

console.log("6) Dado el array [5,1,7,8,2,4,6,3,9], quédate sólo con los números primos");
cont = 0;
let arrayPrimos = [];
array1.forEach(element => {
    if (esPrimo(element)) {
        cont++;
        arrayPrimos.push(element)
    }
});

console.log("El array de sólo los números primos es: " + arrayPrimos);

console.log("7)  Dado el array de números primos, dame el producto de todos los elementos del array");
let producto = 1;
arrayPrimos.forEach(element => {
    producto *= element;
})
console.log("El producto de los elementos del array de números primos es: " + producto);

console.log("8)  Define una función que reciba un String y devuelva si es palíndromo o no");
function esPalindromo(string) {
    string = string.toLowerCase().replace(/ /g, '');
    const stringInvertido = string.split('').reverse().join('');
    return string === stringInvertido;
}

console.log('9) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba si hay algún palíndromo');
let array2 = ["ana", "mesa", "radar", "seres", "folio", "sudoku", "amor a roma", "sol", "mar", "oso", "salas"];
cont = 0;
array2.forEach(element => {
    if (esPalindromo(element)) {
        cont++;
    }
});

if (cont === 0) {
    console.log("No hay ningún palíndromo");
} else {
    console.log("Hay " + cont + " palíndromos");
}

console.log('10) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba si todos son palíndromos');
cont = array2.length - 1;
array2.forEach(element => {
    if (esPalindromo(element)) {
        cont--;
    }
})
if (cont === 0) {
    console.log("Todos los strings del array son palíndromos");
} else {
    console.log("No todos los strings del array son palíndromos");
}

console.log('11) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba en que posición está el primer palíndromo');
cont = -1;
for (let i = 0; i < array2.length; i++) {
    if (esPalindromo(array2[i])) {
        cont = i;
        break;
    }
}

if (cont !== -1) {
    console.log("El primer palíndromo está en la posición: " + cont);
} else {
    console.log("No se encontraron palíndromos en el array.");
}

console.log('12) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba cual es el primer palíndromo');
cont = -1;
for (let i = 0; i < array2.length; i++) {
    if (esPalindromo(array2[i])) {
        cont = array2[i];
        break;
    }
}

if (cont !== -1) {
    console.log("El primer palíndromo es la cadena: " + cont);
} else {
    console.log("No se encontraron palíndromos en el array.");
}

console.log('13) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], quédate sólo con los palíndromos');
let arrayPalindromos = [];
array2.forEach(element => {
    if (esPalindromo(element)) {
        arrayPalindromos.push(element);
    }
});
console.log("El array de palíndromos es: " + arrayPalindromos);

console.log("14)  Dado el array de números palíndromos, dame la concatenación de todos los elementos del array");
let concatenacion = "";
arrayPalindromos.forEach(element => {
    concatenacion += element;
})
console.log("La concatenación del array de palíndromos es: " + concatenacion);

//Otros:
console.log("1) Dado un array de números, verifica si hay algún número negativo");
cont = 0;
arrayNeg = [3, 45, 3, -2, 1, 5, 3];
arrayNeg.forEach(element => {
    if (element < 0) {
        cont++;
    }
});
if (cont > 1) {
    console.log("En el array existen " + cont + " números negativos")
} else if (cont > 0) {
    console.log("En el array existen " + cont + " número negativo")
} else {
    console.log("En el array no existen números negativos")
}

console.log("2) Dado un array de Strings, encuentra el índice del primer array que empiece por la letra 'A'");
cont = -1;
arrayStrings = ["Pablito", "Juaky", "Alberto", "Jouse", "María"];
arrayStrings.forEach(element => {
    if (element[0] === "A") {
        cont++;
    }
});
for (let i = 0; i < arrayStrings.length; i++) {
    if (arrayStrings[i].startsWith("A")) {
        cont = i;
        break;
    }
}
if (cont !== -1) {
    console.log(`El primer elemento que empieza con 'A' está en la posición ${cont}.`);
} else {
    console.log("No se encontró ningún elemento que empiece con 'A' en el array.");
}

console.log("3) Dado un array de números de 3 o más cifras, calcula la suma de las últimas cifras de cada número");
let array3Cifras = [214, 300, 435, 824, 476, 535];
console.log("4) Dado un array de arrays, filtra el array para que sólo queden los arrays de dimensión 5");
function filtrar5D(array, startD = 0) {
    return array.filter(e => {
        if (Array.isArray(e)) {
            return filtrar5D(e, startD + 1);
        }
        return startD === 5;
    });
}

const array6D = [[5], [1, 0, [2, 0, 4, [3, [4, [5, 6]]]]], [3, [0, 5]], [[3, [0, 5]], 8, 9]];

const array5D = filtrar5D(array6D);
console.log(array5D);

console.log("5) Dado un array de Strings, encuentra el primer array de longitud 3");
cont = -1;
arrayStr = ["Pablito", "Juaky", "Alberto", "Ana", "María"];
arrayStr.forEach(element => {
    if (structuredClone(element[0]) === 3) {
        cont = element;
    }
});
for (let i = 0; i < arrayStrings.length; i++) {
    if (arrayStrings[i].startsWith("A")) {
        cont = i;
        break;
    }
}
if (cont !== -1) {
    console.log(`El primer elemento que empieza con 'A' está en la posición ${cont}.`);
} else {
    console.log("No se encontró ningún elemento que empiece con 'A' en el array.");
}

console.log("6) Dado un array de números, verifica que todos los números sean de 2 cifras o más");

