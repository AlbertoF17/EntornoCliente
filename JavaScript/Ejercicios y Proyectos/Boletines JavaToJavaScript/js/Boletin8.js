// BOLETIN 8

// let realizarEj1 = document.querySelector("#realizar-ej1");
// realizarEj1.onclick = function realizarEjercicio() {
//     alert("1. Lee el código de los bucles y, antes de ejecutarlos, piensa cuántas veces se ejecuta el cuerpo de los mismos, anótalo. Después, ejecuta el código y comprueba si el número de iteraciones coincide con las que has pensado.");
//     let ej = document.querySelector("#ej1");
//     ej.innerHTML = `<p>int var=0;</p>
//                     <p>while(var < 10) {</p>
//                     <p>System.out.println(var);</p>
//                     <p>var++;</p>
//                     <p>}</p>`;
//     setTimeout(function() {
//         let numItUsuario = Number.parseInt(prompt("¿Cuántas veces se ejecutará este bucle?"));
//         if (numItUsuario == 10){
//             ej.innerHTML = `<p>CORRECTO</p>`;
//         } else {
//             ej.innerHTML = `<p>ERROR</p>`;
//         }
//     }, 500);

//     ej.innerHTML = `<p>for(int i=20; i>=0; i--) {</p>
//                     <p>System.out.println(i);</p>
//                     <p>}</p>`;
//     setTimeout(function() {
//         let numItUsuario = Number.parseInt(prompt("¿Cuántas veces se ejecutará este bucle?"));
//         if (numItUsuario == 20){
//             ej.innerHTML = `<p>CORRECTO</p>`;
//         } else {
//             ej.innerHTML = `<p>ERROR</p>`;
//         }
//     }, 1000);
// }
// let borrarEj1 = document.querySelector("#borrar-ej1");
// borrarEj1.onclick = function borrarEjercicio() {
//     let ej = document.querySelector("#ej1");
//     ej.innerHTML = ``;
// }

// for(int i=20; i>=0; i--) {
// System.out.println(i);
// }

// int num=15;
// for(int i=0;i<17;i++) {
// System.out.println(num);
// }

// var=30;
// while(var>=0) {
// System.out.println(var);
// var--;
// }

// for(int i=0; i<10; i+=2) {
// System.out.println(i);
// }

// var=70;
// while(var>=0); {
// var--;
// System.out.println(var);
// }

// for(int i=0; i<10;i+=2) {
// System.out.println(i);
// i++;
// }

// let realizarEj2 = document.querySelector("#realizar-ej2");
// realizarEj2.onclick = function realizarEjercicio() {
//     alert("2. Traduce cada bucle for a su correspondiente while, y cada while a su for.");
//     let ej = document.querySelector("#ej2");
//     ej.innerHTML = ``;


// }
// let borrarEj2 = document.querySelector("#borrar-ej2");
// borrarEj2.onclick = function borrarEjercicio() {
//     let ej = document.querySelector("#ej2");
//     ej.innerHTML = ``;
// }

let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    alert("3. Modifica el código para que cada bucle cuente las iteraciones y, una vez haya terminado cada bucle, se imprima el número de iteraciones.");
    let ej = document.querySelector("#ej3");
    //Bucle 1
    let variable1 = 0;
    while(variable1 < 10) {
    variable1++;
    };
    ej.innerHTML = `<p>Bucle 1: ${variable1} iteraciones</p>`;
    //Bucle 2
    let variable2 = 0;
    for(let i=20; i>=0; i--) {
        variable2++;
    };
    ej.innerHTML += `<p>Bucle 2: ${variable2} iteraciones</p>`;
    //Bucle 3
    let variable3 = 15;
    for(let i=0;i<17;i++) {
    variable3++;
    }
    ej.innerHTML += `<p>Bucle 3: ${variable3} iteraciones</p>`;
    //Bucle 4
    let variable4a = 30;
    let variable4b = 0;
    while(variable4a>=0) {
    variable4b++;
    variable4a--;
    }
    ej.innerHTML += `<p>Bucle 4: ${variable4b} iteraciones</p>`;
    //Bucle 5
    let variable5 = 0;
    for(let i=0; i<10; i+=2) {
        variable5++;
    }
    ej.innerHTML += `<p>Bucle 5: ${variable5} iteraciones</p>`;
    //Bucle 6
    let variable6a = 70;
    let variable6b = 0
    while(variable6a>=0); {
    variable6a--;
    variable6b++;
    }
    ej.innerHTML += `<p>Bucle 6: ${variable6b} iteraciones</p>`;
    //Bucle 7
    let variable7 = 0;
    for(let i=0; i<10;i+=2) {
        variable7++;
        i++;
    }
    ej.innerHTML += `<p>Bucle 7: ${variable7} iteraciones</p>`;
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``;
}

//         //25. Modifica el ejercicio anterior para que imprima los primeros números impares.
//         System.out.println("\nEJERCICIO 25");
//         System.out.print("Escriba un numero: ");
//         for (int num7 = sc.nextInt(), cont = 0, veces=0; cont<num7; cont++, veces+=2){
//             System.out.println(veces+1);
//         }

let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("4. Crea un programa que lea un número, e imprima en una misma línea tantos ceros como diga el número.");
    let ej = document.querySelector("#ej4");
    let numCeros = Number.parseInt(prompt("¿Cuántos 0s se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for (let i = 0; i<numCeros; i++){
        ej.innerHTML += `0 `;
    }
    ej.innerHTML += `</p>`;
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``;
}

let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Modifica el ejercicio 4 para que la primera columna siempre imprima un 1.");
    let ej = document.querySelector("#ej5");
    let numCeros = Number.parseInt(prompt("¿Cuántos 0s se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for (let i = 0; i<numCeros; i++){
        if (i==0){
            ej.innerHTML += `1 `;
        } else {
            ej.innerHTML += `0 `;
        }
        
    }
    ej.innerHTML += `</p>`;
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``;
}

let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    alert("6. Modifica el ejercicio 4 para que la última columna siempre imprima un 1.");
    let ej = document.querySelector("#ej6");
    let numCeros = Number.parseInt(prompt("¿Cuántos 0s se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for (let i = 0; i<numCeros; i++){
        if (i==(numCeros-1)){
            ej.innerHTML += `1 `;
        } else {
            ej.innerHTML += `0 `;
        }
        
    }
    ej.innerHTML += `</p>`;
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``;
}

let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
    alert("7. Modifica el ejercicio 4 para que la columna central (o la más cercana en caso de no haber central) siempre imprima un 1.");
    let ej = document.querySelector("#ej7");
    let numCeros = Number.parseInt(prompt("¿Cuántos 0s se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for (let i = 0; i<numCeros; i++){
        if (i==(Math.floor(numCeros/2))){
            ej.innerHTML += `1 `;
        } else {
            ej.innerHTML += `0 `;
        }
        
    }
    ej.innerHTML += `</p>`;
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej7");
    ej.innerHTML = ``;
}

let realizarEj8 = document.querySelector("#realizar-ej8");
realizarEj8.onclick = function realizarEjercicio() {
    alert("8. Crea un programa que lea un número, y repita el ejercicio 4 tantas veces como diga ese número.");
    let ej = document.querySelector("#ej8");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            ej.innerHTML += `0 `;
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj8 = document.querySelector("#borrar-ej8");
borrarEj8.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej8");
    ej.innerHTML = ``;
}

let realizarEj9 = document.querySelector("#realizar-ej9");
realizarEj9.onclick = function realizarEjercicio() {
    alert("9. Modifica el ejercicio 8 para que la primera fila siempre imprima unos.");
    let ej = document.querySelector("#ej9");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == 0){
                ej.innerHTML += `1 `;
            } else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj9 = document.querySelector("#borrar-ej9");
borrarEj9.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej9");
    ej.innerHTML = ``;
}

let realizarEj10 = document.querySelector("#realizar-ej10");
realizarEj10.onclick = function realizarEjercicio() {
    alert("10. Modifica el ejercicio 8 para que la primera columna siempre imprima unos.");
    let ej = document.querySelector("#ej10");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (j == 0){
                ej.innerHTML += `1 `;
            } else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj10 = document.querySelector("#borrar-ej10");
borrarEj10.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej10");
    ej.innerHTML = ``;
}

let realizarEj11 = document.querySelector("#realizar-ej11");
realizarEj11.onclick = function realizarEjercicio() {
    alert("11. Modifica el ejercicio 8 para que la última línea siempre imprima unos.");
    let ej = document.querySelector("#ej11");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == numFilas-1){
                ej.innerHTML += `1 `;
            } else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj11 = document.querySelector("#borrar-ej11");
borrarEj11.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej11");
    ej.innerHTML = ``;
}

let realizarEj12 = document.querySelector("#realizar-ej12");
realizarEj12.onclick = function realizarEjercicio() {
    alert("12. Modifica el ejercicio 8 para que la última columna siempre imprima unos.");
    let ej = document.querySelector("#ej12");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (j == numColumnas-1){
                ej.innerHTML += `1 `;
            } else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj12 = document.querySelector("#borrar-ej12");
borrarEj12.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej12");
    ej.innerHTML = ``;
}

let realizarEj13 = document.querySelector("#realizar-ej13");
realizarEj13.onclick = function realizarEjercicio() {
    alert("13. Modifica el ejercicio 8 para que la primera fila y columna siempre imprima unos.");
    let ej = document.querySelector("#ej13");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == 0 || j == 0){
                ej.innerHTML += `1 `;
            }else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj13 = document.querySelector("#borrar-ej13");
borrarEj13.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej13");
    ej.innerHTML = ``;
}

let realizarEj14 = document.querySelector("#realizar-ej14");
realizarEj14.onclick = function realizarEjercicio() {
    alert("14. Modifica el ejercicio 8 para que la diagonal siempre imprima unos.");
    let ej = document.querySelector("#ej14");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == numFilas-1 || j == numColumnas-1){
                ej.innerHTML += `1 `;
            }else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj14 = document.querySelector("#borrar-ej14");
borrarEj14.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej14");
    ej.innerHTML = ``;
}

let realizarEj15 = document.querySelector("#realizar-ej15");
realizarEj15.onclick = function realizarEjercicio() {
    alert("15. Modifica el ejercicio 8 para que el marco siempre imprima unos.");
    let ej = document.querySelector("#ej15");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == 0 || j == 0 || i == numFilas-1 || j == numColumnas-1){
                ej.innerHTML += `1 `;
            }else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj15 = document.querySelector("#borrar-ej15");
borrarEj15.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej15");
    ej.innerHTML = ``;
}

let realizarEj16 = document.querySelector("#realizar-ej16");
realizarEj16.onclick = function realizarEjercicio() {
    alert("16. Modifica el ejercicio 8 para que la diagonal principal siempre imprima unos.");
    let ej = document.querySelector("#ej16");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == j){
                ej.innerHTML += `1 `;
            }else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj16 = document.querySelector("#borrar-ej16");
borrarEj16.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej16");
    ej.innerHTML = ``;
}

let realizarEj17 = document.querySelector("#realizar-ej17");
realizarEj17.onclick = function realizarEjercicio() {
    alert("17. Leer dos enteros e imprimir una tabla o matriz de tantas filas y columnas como los números leídos. La tabla o matriz solo debe contener ceros.");
    let ej = document.querySelector("#ej17");
    ej.innerHTML = `<p>Realizado en el ejercicio 8</p>`;
}
let borrarEj17 = document.querySelector("#borrar-ej17");
borrarEj17.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej17");
    ej.innerHTML = ``;
}

let realizarEj18 = document.querySelector("#realizar-ej18");
realizarEj18.onclick = function realizarEjercicio() {
    alert("18. Modificar el ejercicio anterior para que contenga la sucesión 1,2,3,4,…, etc, con tantos términos como posiciones tenga la tabla o matriz.");
    let ej = document.querySelector("#ej18");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    let contador = 1;
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            ej.innerHTML += `${contador} `;
            contador++;
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj18 = document.querySelector("#borrar-ej18");
borrarEj18.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej18");
    ej.innerHTML = ``;
}

let realizarEj19 = document.querySelector("#realizar-ej19");
realizarEj19.onclick = function realizarEjercicio() {
    alert("19. Crea un programa que lea un número e imprima dicho número por pantalla siete veces.");
    let ej = document.querySelector("#ej19");
    let num = Number.parseInt(prompt("¿Qué número desea imprimir?"));
    for(let i = 0 ; i<7; i++){
        ej.innerHTML += `<p>${num}</p>`;    
    }
}
let borrarEj19 = document.querySelector("#borrar-ej19");
borrarEj19.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej19");
    ej.innerHTML = ``;
}

let realizarEj20 = document.querySelector("#realizar-ej20");
realizarEj20.onclick = function realizarEjercicio() {
    alert("20. Modifica el programa para que el número se imprima tantas veces como diga el propio número.");
    let ej = document.querySelector("#ej20");
    ej.innerHTML = ``;
    let num = Number.parseInt(prompt("¿Qué número desea imprimir?"));
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${num}</p>`;    
    }
}
let borrarEj20 = document.querySelector("#borrar-ej20");
borrarEj20.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej20");
    ej.innerHTML = ``;
}

let realizarEj21 = document.querySelector("#realizar-ej21");
realizarEj21.onclick = function realizarEjercicio() {
    alert("21. Modifica el programa para que se imprima un carácter leido por teclado tantas veces como diga el propio número.");
    let ej = document.querySelector("#ej21");
    ej.innerHTML = ``;
    let carac = prompt("¿Qué caracter desea imprimir?")
    let num = Number.parseInt(prompt("¿Cuántas veces desea que se imprima?"));
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${carac}</p>`;    
    }
}
let borrarEj21 = document.querySelector("#borrar-ej21");
borrarEj21.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej21");
    ej.innerHTML = ``;
}

let realizarEj22 = document.querySelector("#realizar-ej22");
realizarEj22.onclick = function realizarEjercicio() {
    alert("22. Crea un programa que lea un número, e imprima por pantalla los primeros números positivos.");
    let ej = document.querySelector("#ej22");
    ej.innerHTML = ``;
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${i+1}</p>`;    
    }
}
let borrarEj22 = document.querySelector("#borrar-ej22");
borrarEj22.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej22");
    ej.innerHTML = ``;
}

let realizarEj23 = document.querySelector("#realizar-ej23");
realizarEj23.onclick = function realizarEjercicio() {
    alert("23. Modifica el ejercicio anterior para que se imprima todo en la misma línea.");
    let ej = document.querySelector("#ej23");
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `${i+1} `;    
    }
    ej.innerHTML += `</p>`;
}
let borrarEj23 = document.querySelector("#borrar-ej23");
borrarEj23.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej23");
    ej.innerHTML = ``;
}

let realizarEj24 = document.querySelector("#realizar-ej24");
realizarEj24.onclick = function realizarEjercicio() {
    alert("24. Crea un programa que lea un número, e imprima por pantalla los primeros números pares.");
    let ej = document.querySelector("#ej24");
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${(i+1)*2}</p>`;    
    }
}
let borrarEj24 = document.querySelector("#borrar-ej24");
borrarEj24.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej24");
    ej.innerHTML = ``;
}

let realizarEj25 = document.querySelector("#realizar-ej25");
realizarEj25.onclick = function realizarEjercicio() {
    alert("25. Modifica el ejercicio anterior para que imprima los primeros números impares.");
    let ej = document.querySelector("#ej25");
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    let cont = 1;
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${cont}</p>`;
        cont+=2;
    }
}
let borrarEj25 = document.querySelector("#borrar-ej25");
borrarEj25.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej25");
    ej.innerHTML = ``;
}

let realizarEj26 = document.querySelector("#realizar-ej26");
realizarEj26.onclick = function realizarEjercicio() {
    alert("26. Modifica los dos anteriores para que todo se imprima en la misma línea, pero separando los números por coma en lugar de espacios en blanco.");
    let ej = document.querySelector("#ej26");
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    ej.innerHTML = `<p>Números pares:</p>`;
    ej.innerHTML += `<p>`;
    for(let i = 0 ; i<num; i++){
        if (i == (num-1)){
            ej.innerHTML += `${(i+1)*2}`;
        }else {
            ej.innerHTML += `${(i+1)*2}, `;   
        }
         
    }
    ej.innerHTML += `</p>`;
    ej.innerHTML += `<p>Números impares:</p>`;
    let cont = 1;
    ej.innerHTML += `<p>`;
    for(let i = 0 ; i<num; i++){
        if (i == (num-1)){
            ej.innerHTML += `${cont}`;
        }else {
            ej.innerHTML += `${cont}, `;
        }
        
        cont+=2;
    }
    ej.innerHTML += `</p>`;
}
let borrarEj26 = document.querySelector("#borrar-ej26");
borrarEj26.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej26");
    ej.innerHTML = ``;
}