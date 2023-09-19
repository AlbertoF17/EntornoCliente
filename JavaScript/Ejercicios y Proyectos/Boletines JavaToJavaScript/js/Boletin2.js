// BOLETIN 2

//1. Crear una variable entera e imprimirla por pantalla sin asignarle ningún valor.
//¿Qué se ha impreso?
let realizarEj1 = document.querySelector("#realizar-ej1");
let variable1;
realizarEj1.onclick = function realizarEjercicio() {
    alert("1. Crear una variable entera e imprimirla por pantalla sin asignarle ningún valor. ¿Qué se ha impreso?");
    let ej = document.querySelector("#ej1");
    ej.innerHTML = `<p>let variable1;</p>` + `<p>Se ha impreso: ${variable1}</p>`;
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``
}


//2a. Crear una variable entera con el valor 0. Incrementar su valor en 3 unidades utilizando el operador de suma + y asignación =, e imprimirla por pantalla.
let realizarEj2a = document.querySelector("#realizar-ej2a");
let valor0 = 0;
realizarEj2a.onclick = function realizarEjercicio() {
    alert("2a. Crear una variable entera con el valor 0. Incrementar su valor en 3 unidades utilizando el operador de suma + y asignación =, e imprimirla por pantalla.");
    valor0 += 3;
    let ej = document.querySelector("#ej2a");
    ej.innerHTML = `<p>let valor0 = 0;</p>` + `<p>valor0 += 3;</p>` + `<p>RESULTADO: variable1 = ${valor0}</p>`;
}
let borrarEj2a = document.querySelector("#borrar-ej2a");
borrarEj2a.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej2a");
    ej.innerHTML = ``;
}

//2b. Decrementar su valor en una unidad utilizando el operador de decremento --. Imprimirla por pantalla.
let realizarEj2b = document.querySelector("#realizar-ej2b");
realizarEj2b.onclick = function realizarEjercicio() {
    alert("2b. Decrementar su valor en una unidad utilizando el operador de decremento --. Imprimirla por pantalla.");
    valor0--;
    let ej = document.querySelector("#ej2b");
    ej.innerHTML = `<p>Valor de "valor0": 3</p>` + `<p>valor0--;</p>` + `<p>Valor de "valor0": ${valor0}</p>`;
}
let borrarEj2b = document.querySelector("#borrar-ej2b");
borrarEj2b.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej2b");
    ej.innerHTML = ``;
}

//3. Incrementar su valor en 4 unidades sin utilizar el operador de suma + y asignación =, e imprimirla por pantalla.
let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    alert("3. Incrementar su valor en 4 unidades sin utilizar el operador de suma + y asignación =, e imprimirla por pantalla.");
    let ej = document.querySelector("#ej3");
    ej.innerHTML = `<p>Valor de "valor0": ${valor0}`;
    valor0++;
    valor0++;
    valor0++;
    valor0++;
    ej.innerHTML += `<p>valor0++;</p>` + `<p>valor0++;</p>` + `<p>valor0++;</p>` + `<p>valor0++;</p>` + `<p>Valor de "valor0": ${valor0}</p>`;
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``;
}

//4. Crear otra variable entera y asignarle el valor 48.76.
let var1 = 48.76;
let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("4. Crear otra variable entera y asignarle el valor 48.76.");
    let ej = document.querySelector("#ej4");
    ej.innerHTML = `<p>let var1= ${var1}`;
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``;
}

//5. Modificarla dividiendo por 50 e imprimir el resultado por pantalla.
var1 = var1 / 50;
let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Modificarla dividiendo por 50 e imprimir el resultado por pantalla.");
    let ej = document.querySelector("#ej5");
    ej.innerHTML = `<p>var1 = var1 / 50;</p>` + `<p>var1= ${var1}`;
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``;
}

//6. Modificarla sumándole 1 y multiplicando por 48 e imprimir el resto de dividirla entre 46.
var1 = ((var1 + 1) * 48);
let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    alert("6. Modificarla sumándole 1 y multiplicando por 48 e imprimir el resto de dividirla entre 46.");
    let ej = document.querySelector("#ej6");
    ej.innerHTML = `<p>var1 = ((var1 + 1) * 48);</p>` + `<p>var1%46= ${var1 % 46}`;
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``;
}


//7. Sin modificar el valor de la variable, imprimir por pantalla el resultado de elevarla al cuadrado.
let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
    alert("7. Sin modificar el valor de la variable, imprimir por pantalla el resultado de elevarla al cuadrado.");
    let ej = document.querySelector("#ej7");
    ej.innerHTML = `<p>var1^2= ${var1 * var1}`;
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej7");
    ej.innerHTML = ``;
}


//8. Crear dos variables de tipo float, dándoles un valor inicial e imprimiéndolas por pantalla.
let realizarEj8 = document.querySelector("#realizar-ej8");
let x;
let y;
realizarEj8.onclick = function realizarEjercicio() {
    alert("8. Crear dos variables de tipo float, dándoles un valor inicial e imprimiéndolas por pantalla.");
    x = prompt("Introduzca el primer numero: ");
    y = prompt("Introduzca el segundo numero: ");
    let ej = document.querySelector("#ej8");
    ej.innerHTML = `<p>El primer número vale: ${x}</p><p>El segundo número vale: ${y}</p>`;
}
let borrarEj8 = document.querySelector("#borrar-ej8");
borrarEj8.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej8");
    ej.innerHTML = ``;
}


//9. Imprimir por pantalla el resultado de comprobar si la primera es mayor que la segunda.
let realizarEj9 = document.querySelector("#realizar-ej9");
realizarEj9.onclick = function realizarEjercicio() {
    alert("9. Imprimir por pantalla el resultado de comprobar si la primera es mayor que la segunda.");
    let ej = document.querySelector("#ej9");
    if (x > y) {
        ej.innerHTML = `<p>El primer número es mayor que el segundo</p><p>${x} > ${y}</p><p>Resultado: ${x > y}</p>`;
    } else if (x < y) {
        ej.innerHTML = `<p>El segundo número es mayor que el primero</p><p>${x} < ${y}</p><p>Resultado: ${x > y}`;
    } else {
        ej.innerHTML = `<p>Ambos números son iguales</p><p>${x} = ${y}</p><p>Resultado: ${x > y}`;
    }
}
let borrarEj9 = document.querySelector("#borrar-ej9");
borrarEj9.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej9");
    ej.innerHTML = ``;
}

//10. Cambiar la primera con el valor de la segunda multiplicado por dos, y volver a imprimir por pantalla
//el resultado de la comprobación anterior.
let realizarEj10 = document.querySelector("#realizar-ej10");
realizarEj10.onclick = function realizarEjercicio() {
    alert("10. Cambiar la primera con el valor de la segunda multiplicado por dos, y volver a imprimir por pantalla el resultado de la comprobación anterior.");
    x = y * 2;
    let ej = document.querySelector("#ej10");
    ej.innerHTML = `<p>El primer número vale: ${x}</p><p>El segundo número vale: ${y}</p>`;
    if (x > y) {
        ej.innerHTML = `<p>El primer número es mayor que el segundo</p><p>${x} > ${y}</p><p>Resultado: ${x > y}`;
    } else if (x < y) {
        ej.innerHTML = `<p>El segundo número es mayor que el primero</p><p>${x} < ${y}</p><p>Resultado: ${x > y}`;
    } else {
        ej.innerHTML = `<p>Ambos números son iguales</p><p>${x} = ${y}</p><p>Resultado: ${x > y}`
    }
}
let borrarEj10 = document.querySelector("#borrar-ej10");
borrarEj10.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej10");
    ej.innerHTML = ``;
}

//11. Imprimir por pantalla el resultado de comprobar si la primera es menor o igual que la segunda.
let realizarEj11 = document.querySelector("#realizar-ej11");
realizarEj11.onclick = function realizarEjercicio() {
    alert("11. Imprimir por pantalla el resultado de comprobar si la primera es menor o igual que la segunda.");
    let ej = document.querySelector("#ej11");
    ej.innerHTML = `<p>El primer número vale: ${x}</p><p>El segundo número vale: ${y}</p>`;
    if (x <= y) {
        ej.innerHTML = `<p>El primer número es menor o igual que el segundo.</p><p>${x} <= ${y}</p><p>Resultado: ${x <= y}`;
    } else {
        ej.innerHTML = `<p>El primer número es mayor que el segundo</p><p>${x} > ${y}</p><p>Resultado: ${x <= y}`;
    }
}
let borrarEj11 = document.querySelector("#borrar-ej11");
borrarEj11.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej11");
    ej.innerHTML = ``;
}

//12. Repetir el ejercicio anterior pero almacenando el resultado de la comprobación
//en una variable, e imprimiendo después por pantalla dicha variable.
let realizarEj12 = document.querySelector("#realizar-ej12");
realizarEj12.onclick = function realizarEjercicio() {
    alert("12. Repetir el ejercicio anterior pero almacenando el resultado de la comprobación en una variable, e imprimiendo después por pantalla dicha variable.");
    let menorIgual = x <= y;
    let ej = document.querySelector("#ej12");
    ej.innerHTML = `<p>El primer número vale: ${x}</p><p>El segundo número vale: ${y}</p>`;
    if (menorIgual) {
        ej.innerHTML = `<p>El primer número es menor o igual que el segundo.</p><p>variable "menorIgual" = ${menorIgual}</p>`;
    } else {
        ej.innerHTML = `<p>El primer número es mayor que el segundo</p><p>variable "menorIgual" = ${menorIgual}</p>`;
    }
}
let borrarEj12 = document.querySelector("#borrar-ej12");
borrarEj12.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej12");
    ej.innerHTML = ``;
}