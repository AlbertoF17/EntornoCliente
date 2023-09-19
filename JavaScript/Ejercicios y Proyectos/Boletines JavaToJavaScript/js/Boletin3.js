//BOLETIN 3

//EJERCICIO 1
let realizarEj1 = document.querySelector("#realizar-ej1");
let variable1;
realizarEj1.onclick = function realizarEjercicio() {
    let ej = document.querySelector("#ej1");
    alert("1. Crea una variable de tipo entero y asígnale el valor 10.");
    let var1 = Number.parseInt(prompt("Inserte el valor:", 10));
    alert("2. Imprímela por pantalla.");
    ej.innerHTML += `<p>${var1}</p>`;
    alert("3. Decrementa su valor una vez.");
    var1--;
    alert("4. Imprímela por pantalla.");
    ej.innerHTML += `<p>${var1}</p>`;
    alert("5. Multiplícalo por dos.")
    var1 *= 2;
    alert("6. Réstale cuatro unidades.")
    var1 -= 4;
    alert("7. Imprímela por pantalla.");
    ej.innerHTML += `<p>${var1}</p>`;
    alert("8. Incrementa su valor cuatro veces usando el operador de incremento (++).");
    var1++;
    var1++;
    var1++;
    var1++;
    alert("9. Imprímela por pantalla.");
    ej.innerHTML += `<p>${var1}</p>`;
    alert("10. Crea una segunda variable y asígnale el resultado de sumar una unidad a la primera.");
    let var2 = var1+1;
    alert("11. Imprime las dos variables.");
    ej.innerHTML += `<p>${var1}</p>` + `<p>${var2}</p>`;
    alert("12. Divide la segunda entre dos.");
    var2 /= 2;
    alert("13. Imprime las dos variables y comprueba si el resultado es el correcto comparando con otros compañeros.");
    ej.innerHTML += `<p>${var1}</p>` + `<p>${var2}</p>`;
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``
}


// EJERCICIO 2
//Desarrollar un algoritmo para calcular el área de un rectángulo, cuya fórmula es base x altura.
//Para ello:
let realizarEj2 = document.querySelector("#realizar-ej2");
realizarEj2.onclick = function realizarEjercicio() {
    let ej = document.querySelector("#ej2");
    alert("1. Cree una variable para almacenar el valor de la base, y asigne un valor.");
    let base = Number.parseInt(prompt("Valor de la base:"));
    alert("2. Cree una variable para almacenar el valor de la altura, y asigne un valor.");
    let altura = Number.parseInt(prompt("Valor de la altura:"));
    alert("3. Cree una variable para almacenar el área, y utilice la fórmula anterior para asignarle el valor adecuado.");
    let area = (base*altura)/2; //Para realizar el ejercicio usando una variable (después no se usa)
    alert("4. Imprima por pantalla el área, utilizando una instrucción println (innerHTML en JavaScript).");
    ej.innerHTML = `<p>El área del rectángulo de base ${base} y de altura ${altura} es: ${(base*altura)/2} unidades cuadradas</p>`;
}
let borrarEj2 = document.querySelector("#borrar-ej2");
borrarEj2.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej2");
    ej.innerHTML = ``
}


//EJERCICIO 3
//Desarrollar un algoritmo para convertir de euros a dólares teniendo en cuenta que un euro son
//1.16 dólares. Para ello:
let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    let ej = document.querySelector("#ej3");
    alert("1. Cree una variable para almacenar el factor de conversión (1.16).");
    let factor = 1.16;//Para realizar el ejercicio usando una variable (después no se usa)
    alert("2. Cree una variable para almacenar la cantidad de euros (no asigne ningún valor aún).");
    let euros;
    alert("3. Utilice una instrucción de asignación para darle un valor a la variable anterior.");
    euros = prompt("Valor en euros:");
    alert("4. Cree una variable para almacenar la cantidad de dólares, y asigne el resultado de multiplicar el factor de conversión por la cantidad de euros.");
    let dolares = euros*factor;
    alert("5. Imprima por pantalla el resultado, utilizando una instrucción println.");
    ej.innerHTML = `<p>${euros} euros, son ${euros*1.16} dólares</p>`
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``
}


//EJERCICIO 4
//Modifique el ejercicio 2 para ahorrarnos la creación de la variable del área. Para ello:
//elimine dicha variable, y ponga en la instrucción println la fórmula del área directamente.
let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("Modifique el ejercicio 2 para ahorrarnos la creación de la variable del área.");
    let ej = document.querySelector("#ej4");
    ej.innerHTML = `<p>Hecho :)</p>`
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``
}


//EJERCICIO 5
//Modifique el ejercicio 3 para ahorrarnos la creación de la variable del factor de conversión.
let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("Modifique el ejercicio 3 para ahorrarnos la creación de la variable del factor de conversión.");
    let ej = document.querySelector("#ej5");
    ej.innerHTML = `<p>Hecho :)</p>`
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``
}


//EJERCICIO 6
let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    let ej = document.querySelector("#ej6");
    alert("1. Cree una variable de tipo entero y asigne el valor 3.");
    let x = 3;
    alert("2. Decremente su valor tres veces con el operador de decremento (- -).");
    x--;
    x--;
    x--;
    alert("3. Incremente su valor 6 unidades con el operador de suma simplificada (+=).");
    x += 6;
    alert("5. Duplique su valor como desee.");
    x *= 2;
    alert("6. Utilice el operador módulo (%) para comprobar el resto de dividir la variable entre 2, imprimiendo por pantalla el resultado.");
    ej.innerHTML = `<p>La variable creada "x" será par si el resultado de realizar la operacion x%2 da 0, sino, el resultado será 1 y por tanto "x" es impar, en este caso: ${x%2}</p>`
    alert("7. ¿Cómo se puede comprobar si un número es par o impar?");
    if (x%2 == 0) {
        ej.innerHTML += `<p>Por tanto, x es par: ${x}</p>`;
    }else {
        ej.innerHTML += `<p>Por tanto, x es impar: ${x}</p>`;
    }
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``
}