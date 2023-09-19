// BOLETIN 1

//1. Imprime por pantalla tu nombre.
let miNombre = "Alberto";
let realizarEj1 = document.querySelector("#realizar-ej1");
realizarEj1.onclick = function realizarEjercicio() {
    alert("1. Imprime por pantalla tu nombre.");
    let ej = document.querySelector("#ej1");
    ej.innerHTML = `<p>${miNombre}</p>`;
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``
}

//2. Imprime por pantalla tu nombre y dos apellidos, cada uno en una línea.
let miApellido1 = "Fernández";
let miApellido2 = "Gómez";
let realizarEj2 = document.querySelector("#realizar-ej2");
realizarEj2.onclick = function realizarEjercicio() {
    alert("2. Imprime por pantalla tu nombre y dos apellidos, cada uno en una línea.");
    let ej = document.querySelector("#ej2");
    ej.innerHTML = `<p>${miNombre}</p>` + `<p>${miApellido1}</p>` + `<p>${miApellido2}</p>`;
}
let borrarEj2 = document.querySelector("#borrar-ej2");
borrarEj2.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej2");
    ej.innerHTML = ``
}

//3.a Repite el ejercicio anterior pero imprimiendo todo en la misma línea.
let realizarEj3a = document.querySelector("#realizar-ej3a");
realizarEj3a.onclick = function realizarEjercicio() {
    alert("3.a Repite el ejercicio anterior pero imprimiendo todo en la misma línea.");
    let ej = document.querySelector("#ej3a");
    ej.innerHTML = `<p>${miNombre} ${miApellido1} ${miApellido2}</p>`;
}
let borrarEj3a = document.querySelector("#borrar-ej3a");
borrarEj3a.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3a");
    ej.innerHTML = ``
}

//3.b Repite el ejercicio anterior imprimiendo todo en la misma línea, usando
//tres instrucciones de impresión.
let realizarEj3b = document.querySelector("#realizar-ej3b");
realizarEj3b.onclick = function realizarEjercicio() {
    alert("3.b Repite el ejercicio anterior imprimiendo todo en la misma línea, usando tres instrucciones de impresión.");
    let ej = document.querySelector("#ej3b");
    ej.innerHTML = `${miNombre}`;
    ej.innerHTML += ` ${miApellido1}`;
    ej.innerHTML += ` ${miApellido2}`;
}
let borrarEj3b = document.querySelector("#borrar-ej3b");
borrarEj3b.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3b");
    ej.innerHTML = ``
}

//4. Imprime tu edad.
let miEdad = 20;
let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("4. Imprime tu edad.");
    let ej = document.querySelector("#ej4");
    ej.innerHTML = `<p>${miEdad}</p>`;
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``
}

//5. Imprime el primer digito de tu edad en una línea, y el segundo en otra.
let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Imprime el primer digito de tu edad en una línea, y el segundo en otra.");
    let ej = document.querySelector("#ej5");
    /*for(let i=0; i<"20".length();i++){
        ej.innerHTML += "20".charAt(i);
    }*/
    ej.innerHTML += `<p>2</p>` + `<p>0</p>`;
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``
}

//6. Imprime el primer digito de tu edad. Tras ello y con una nueva instrucción,
//imprime el segundo. Tienen que aparecer ambos en la misma línea.
let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    alert("6. Imprime el primer digito de tu edad. Tras ello y con una nueva instrucción, imprime el segundo. Tienen que aparecer ambos en la misma línea.");
    let ej = document.querySelector("#ej6");
    ej.innerHTML += `2`
    ej.innerHTML += `0`;
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``
}

//7. Imprime al revés tu nombre, de forma que cada letra aparezca en una línea.
//Por ejemplo, en mi caso (Jorge) la salida del programa sería:
//e
//g
//r
//o
//J
let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
    alert("7. Imprime al revés tu nombre, de forma que cada letra aparezca en una línea.");
    let ej = document.querySelector("#ej7");
    /*for(let i=miNombre.length(); i>0; i--){
        ej.innerHTML += miNombre.charAt(i);
    }*/
    ej.innerHTML += `<p>o</p>` + `<p>t</p>` + `<p>r</p>` +
    `<p>e</p>` + `<p>b</p>` + `<p>l</p>` + `<p>A</p>`;
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej7");
    ej.innerHTML = ``
}

//8. Repite lo anterior, pero entre cada letra debe aparecer una línea en blanco.
//Por ejemplo, en mi caso (Jorge) la salida del programa sería:
//e
//
//g
//
//r
//
//o
//
//J
let realizarEj8 = document.querySelector("#realizar-ej8");
realizarEj8.onclick = function realizarEjercicio() {
    alert("8. Repite lo anterior, pero entre cada letra debe aparecer una línea en blanco.");
    let ej = document.querySelector("#ej8");
    /*for(let i=0; i<miNombre.length()*2-1;i++){
        if (i%2!=0){
            ej.innerHTML += `<p>miNombre.charAt(j)</p>`;
        } else {
            ej.innerHTML += `<p></p>`;
        }
    }*/
    ej.innerHTML += `<p>o</p>` + `<p> </p>` + `<p>t</p>` + `<p> </p>` + `<p>r</p>`
    + `<p> </p>` + `<p>e</p>` + `<p> </p>` + `<p>b</p>` + `<p> </p>` + `<p>l</p>` + `<p> </p>` + `<p>A</p>`;
}
let borrarEj8 = document.querySelector("#borrar-ej8");
borrarEj8.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej8");
    ej.innerHTML = ``
}

//9. Imprime por pantalla tu nombre concatenándolo con tu edad, de forma que quede
//un espacio en blanco entre ambos.
let realizarEj9 = document.querySelector("#realizar-ej9");
realizarEj9.onclick = function realizarEjercicio() {
    alert("9. Imprime por pantalla tu nombre concatenándolo con tu edad, de forma que quede un espacio en blanco entre ambos.");
    let ej = document.querySelector("#ej9");
    ej.innerHTML = `<p>${miNombre} ${miEdad}</p>`;
}
let borrarEj9 = document.querySelector("#borrar-ej9");
borrarEj9.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej9");
    ej.innerHTML = ``
}

//10. Imprime por pantalla el número 3 concatenándolo con el número 7. Comprueba
//si tu compañero lo ha hecho igual que tú.
let realizarEj10 = document.querySelector("#realizar-ej10");
realizarEj10.onclick = function realizarEjercicio() {
    alert("10. Imprime por pantalla el número 3 concatenándolo con el número 7. Comprueba si tu compañero lo ha hecho igual que tú.");
    let ej = document.querySelector("#ej10");
    ej.innerHTML = `3` + `7`;
}
let borrarEj10 = document.querySelector("#borrar-ej10");
borrarEj10.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej10");
    ej.innerHTML = ``
}

//11. Imprime por pantalla la cadena "Hola mundo" y a continuación, la cadena
//"Hola\nmundo". ¿Para qué sirve el '\n'? ¿Puede utilizarse varias veces seguidas?
let realizarEj11 = document.querySelector("#realizar-ej11");
realizarEj11.onclick = function realizarEjercicio() {
    alert("11. Imprime por pantalla la cadena 'Hola mundo' y a continuación, la cadena 'Hola\nmundo'. ¿Para qué sirve el '\n'? ¿Puede utilizarse varias veces seguidas?");
    let ej = document.querySelector("#ej11");
    ej.innerHTML = `Hola mundo`;
    ej.innerHTML += `Hola\nmundo`;
    ej.innerHTML += ` en JavaScript, el carácter de salto de línea (\\n\) no funciona con el método "innerHTML"`
}
let borrarEj11 = document.querySelector("#borrar-ej11");
borrarEj11.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej11");
    ej.innerHTML = ``
}

//12. ¿Para qué sirve el operador '+'?
let realizarEj12 = document.querySelector("#realizar-ej12");
realizarEj12.onclick = function realizarEjercicio() {
    alert("12. ¿Para qué sirve el operador '+'?");
    let ej = document.querySelector("#ej12");
    ej.innerHTML = `<p>cadena1` + `cadena2</p>`;
    ej.innerHTML += `<p>3 + 4 = ` + (3+4) + `</p>`;
    ej.innerHTML += ` el operador "+" sirve para sumar datos numéricos y para para concatenar cadenas`
}
let borrarEj12 = document.querySelector("#borrar-ej12");
borrarEj12.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej12");
    ej.innerHTML = ``
}