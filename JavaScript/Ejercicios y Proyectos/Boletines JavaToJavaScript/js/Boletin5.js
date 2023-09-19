// BOLETIN 5


let realizarEj1 = document.querySelector("#realizar-ej1");
realizarEj1.onclick = function realizarEjercicio() {
    alert("1. Lea por pantalla dos números enteros y almacene en una variable el resultado de comprobar si el primero es superior al segundo multiplicado por dos.");
    let x = Number.parseInt(prompt("Valor del primer entero:"));
    let y = Number.parseInt(prompt("Valor del segundo entero:"));
    let bool = (x>y*2); 
    let ej = document.querySelector("#ej1");
    ej.innerHTML = `<p>¿El primero es superior al segundo multiplicado por dos?</p><p>${bool}</p>`;
    if (bool){
        ej.innerHTML += `<p>Sí, el numero ${x} es mayor al número ${y} multiplicado por 2 (${y*2})</p><p>${x}>${y*2}</p>`
    } else {
        ej.innerHTML += `<p>No, el numero ${x} es menor o igual al número ${y} multiplicado por 2 (${y*2})</p><p>${x}<=${y*2}</p>`
    }
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``;
}


let realizarEj2 = document.querySelector("#realizar-ej2");
let edad;
realizarEj2.onclick = function realizarEjercicio() {
    alert("2. Lea por pantalla una edad y almacene en una variable el resultado de comprobar si es mayor de edad.");
    edad = Number.parseInt(prompt("Indique su edad:"));
    let mayoria = edad>=18;
    let ej = document.querySelector("#ej2");
    ej.innerHTML = `<p>¿Es mayor de edad?</p><p>${mayoria}</p>`;
    if (mayoria){
        ej.innerHTML += `<p>Sí, tiene ${edad} años, por tanto es mayor de edad</p>`
    } else {
        ej.innerHTML += `<p>No, tiene ${edad} años, por tanto es menor de edad</p>`
    }
}
let borrarEj2 = document.querySelector("#borrar-ej2");
borrarEj2.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej2");
    ej.innerHTML = ``;
}


let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    alert("3. Repita pero comprobando si es menor de edad.");
    let edad = Number.parseInt(prompt("Indique su edad:"));
    let minoria = edad<18;
    let ej = document.querySelector("#ej3");
    ej.innerHTML = `<p>¿Es menor de edad?</p><p>${minoria}</p>`;
    if (minoria){
        ej.innerHTML += `<p>Sí, tiene ${edad} años, por tanto es menor de edad</p>`
    } else {
        ej.innerHTML += `<p>No, tiene ${edad} años, por tanto es mayor de edad</p>`
    }
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``;
}


let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("4. Lea por pantalla un número entero y almacene en una variable el resultado de comprobar si es par.");
    let par = Number.parseInt(prompt("Escriba un número entero:"));
    let esPar = par%2==0;
    let ej = document.querySelector("#ej4");
    ej.innerHTML = `<p>¿Es par?</p><p>${esPar}</p>`;
    if (esPar){
        ej.innerHTML += `<p>Sí, el número ${par} es un número par</p>`
    } else {
        ej.innerHTML += `<p>No, el número ${par} es un número impar</p>`
    }
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``;
}


let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Repita pero comprobando si es impar.");
    let impar = Number.parseInt(prompt("Escriba un número entero:"));
    let esImpar = impar%2!=0;
    let ej = document.querySelector("#ej5");
    ej.innerHTML = `<p>¿Es impar?</p><p>${esImpar}</p>`;
    if (esImpar){
        ej.innerHTML += `<p>Sí, el número ${impar} es un número impar</p>`
    } else {
        ej.innerHTML += `<p>No, el número ${impar} es un número par</p>`
    }
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``;
}


let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    alert("6. Lea por pantalla un número y compruebe si está comprendido entre 0 y 100, ambos incluidos.");
    let numero = Number.parseInt(prompt("Escriba un número entero:"));
    let rango = numero>=0 && numero<=100;
    let ej = document.querySelector("#ej6");
    ej.innerHTML = `<p>¿Está comprendido entre 0 y 100?</p><p>${rango}</p>`;
    if (rango){
        ej.innerHTML += `<p>Sí, el número ${numero} se encuentra en el rango indicado</p>`
    } else {
        ej.innerHTML += `<p>No, el número ${numero} no se encuentra en el rango indicado</p>`
    }
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``;
}


let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
    alert("7. Lea por pantalla un número y compruebe si es positivo y además impar.");
    let numero = Number.parseInt(prompt("Escriba un número entero:"));
    let positivoImpar = numero>0 && numero%2!=0;
    let ej = document.querySelector("#ej7");
    ej.innerHTML = `<p>¿Es positivo e impar?</p><p>${positivoImpar}</p>`;
    if (positivoImpar){
        ej.innerHTML += `<p>El número ${numero} es positivo e impar`;
    } else {
        if (numero>0){
            ej.innerHTML += `<p>El número ${numero} es positivo pero no es impar`;
        }else if (numero%2!=0) {
            ej.innerHTML += `<p>El número ${numero} es impar pero no es positivo`;
        } else {
            ej.innerHTML += `<p>El número ${numero} no es ni positivo ni impar`;
        }
    }
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej7");
    ej.innerHTML = ``;
}

let realizarEj8 = document.querySelector("#realizar-ej8");
realizarEj8.onclick = function realizarEjercicio() {
    alert("8. Lea por pantalla un numero entero y compruebe si es el 3, el 7 o el 9.");
    let numero = Number.parseInt(prompt("Escriba un número entero:"));
    let numeros = numero==3 || numero==7 || numero==9;
    let ej = document.querySelector("#ej8");
    ej.innerHTML = `<p>¿Es 3, 7 o 9?</p><p>${numeros}</p>`;
    if (numeros){
        ej.innerHTML += `<p>Sí, es el número ${numero}</p>`
    } else {
        ej.innerHTML += `<p>No, es el número ${numero}</p>`
    }
}
let borrarEj8 = document.querySelector("#borrar-ej8");
borrarEj8.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej8");
    ej.innerHTML = ``;
}