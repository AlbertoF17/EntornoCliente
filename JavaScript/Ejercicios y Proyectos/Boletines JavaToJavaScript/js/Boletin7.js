// BOLETIN 7

let realizarEj1 = document.querySelector("#realizar-ej1");
realizarEj1.onclick = function realizarEjercicio() {
    alert("1. Leer dos números enteros e imprimir el mayor de ellos.");
    let a = Number.parseInt(prompt("Valor del primer entero:"));
    let b = Number.parseInt(prompt("Valor del segundo entero:")); 
    let ej = document.querySelector("#ej1");
    if (a>b) {
        ej.innerHTML = `<p>El mayor es el primer número: ${a}</p>`;
    } else if (a<b) {
        ej.innerHTML = `<p>El mayor es el segundo número: ${b}</p>`;
    } else {
        ej.innerHTML = `<p>Son iguales: ${a}</p>`;
    }
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``;
}

let realizarEj2 = document.querySelector("#realizar-ej2");
realizarEj2.onclick = function realizarEjercicio() {
    alert("2. Leer un entero y comprobar si es negativo o positivo, imprimiendo por pantalla una frase al respecto. Considere el cero como positivo.");
    let num = Number.parseInt(prompt("Introduzca un numero entero:")); 
    let ej = document.querySelector("#ej2");
    if (num>=0) {
        ej.innerHTML = `<p>El número ${num} es un número positivo</p>`;
    } else {
        ej.innerHTML = `<p>El número ${num} es un número negativo</p>`;
    }
}
let borrarEj2 = document.querySelector("#borrar-ej2");
borrarEj2.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej2");
    ej.innerHTML = ``;
}

let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    alert("3. Modifique el ejercicio anterior para que, en caso de introducir un cero, se imprima por pantalla un mensaje específico.");
    let num = Number.parseInt(prompt("Introduzca un numero entero:")); 
    let ej = document.querySelector("#ej3");
    if (num>0) {
        ej.innerHTML = `<p>El número ${num} es un número positivo</p>`;
    } else if (num==0){
        ej.innerHTML = `<p>El número ${num} es cero</p>`;
    } else {
        ej.innerHTML = `<p>El número ${num} es un número negativo</p>`;
    }
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``;
}

let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("4. Leer una edad y comprobar si la persona es mayor de edad, imprimiendo una frase al respecto. Si es menor, imprimir también un mensaje.");
    let edad = Number.parseInt(prompt("Introduzca su edad:")); 
    let ej = document.querySelector("#ej4");
    if (edad>=18) {
        ej.innerHTML = `<p>Es mayor de edad</p>`;
    } else {
        ej.innerHTML = `<p>Es menor de edad</p>`;
    }
    
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``;
}

let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Modificar el ejercicio anterior para que además se compruebe si es jubilado (tiene más de 67 años), imprimiendo un mensaje al respecto.");
    let edad = Number.parseInt(prompt("Introduzca su edad:")); 
    let ej = document.querySelector("#ej5");
    if (edad>=67) {
        ej.innerHTML = `<p>Es jubilado</p>`;
    } else if (edad>=18) {
        ej.innerHTML = `<p>Es mayor de edad</p>`;
    } else {
        ej.innerHTML = `<p>Es menor de edad</p>`;
    }
    
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``;
}

let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    alert("6. Modificar el ejercicio anterior para que solo se permita una edad válida (0 a 120). En caso de ser válida hará todo lo implementado anteriormente. En caso de ser inválida, se imprimirá un mensaje de error y el programa acabará.");
    let edad = Number.parseInt(prompt("Introduzca su edad:")); 
    let ej = document.querySelector("#ej6");
    if (edad>=0 && edad<=120) {
        if (edad>=67) {
            ej.innerHTML = `<p>Es jubilado</p>`;
        } else if (edad>=18) {
            ej.innerHTML = `<p>Es mayor de edad</p>`;
        } else {
            ej.innerHTML = `<p>Es menor de edad</p>`;
        }
    } else {
        ej.innerHTML = `<p>Error: edad no válida</p>`;
    }    
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``;
}

let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
    alert("7. Leer seis números y comprobar si coinciden con la combinación ganadora de la primitiva (1, 3, 10, 20, 33, 40), imprimiendo un mensaje al respecto.");
    let num1 = Number.parseInt(prompt("Introduzca el primer número de la primitiva:"));
    let num2 = Number.parseInt(prompt("Introduzca el segundo número de la primitiva:"));
    let num3 = Number.parseInt(prompt("Introduzca el tercer número de la primitiva:"));
    let num4 = Number.parseInt(prompt("Introduzca el cuarto número de la primitiva:"));
    let num5 = Number.parseInt(prompt("Introduzca el quinto número de la primitiva:"));
    let num6 = Number.parseInt(prompt("Introduzca el sexto número de la primitiva:"));
    let boolPrimitiva = (num1==1 && num2==3 && num3==10 && num4==20 && num5==33 && num6==40);
    let ej = document.querySelector("#ej7");
    if (boolPrimitiva) {
        ej.innerHTML =  `<p>GANASTE LA PRIMITIVA</p>`;
    } else {
        ej.innerHTML = `<p>Inténtalo otro día</p>`;
    }    
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej7");
    ej.innerHTML = ``;
}

let realizarEj8 = document.querySelector("#realizar-ej8");
realizarEj8.onclick = function realizarEjercicio() {
    alert("8. Modificar el ejercicio anterior para que, al leerlos, se compruebe si todos los números leídos tienen el rango apropiado (entre 1 y 49). Si no lo tienen, imprimir un mensaje de error y el programa acabará.");
    let num1 = Number.parseInt(prompt("Introduzca el primer número de la primitiva:"));
    let num2 = Number.parseInt(prompt("Introduzca el segundo número de la primitiva:"));
    let num3 = Number.parseInt(prompt("Introduzca el tercer número de la primitiva:"));
    let num4 = Number.parseInt(prompt("Introduzca el cuarto número de la primitiva:"));
    let num5 = Number.parseInt(prompt("Introduzca el quinto número de la primitiva:"));
    let num6 = Number.parseInt(prompt("Introduzca el sexto número de la primitiva:"));
    let boolPrimitiva = (num1==1 && num2==3 && num3==10 && num4==20 && num5==33 && num6==40);
    let ej = document.querySelector("#ej8");
    if (num1>=1 && num1<=49 && num2>=1 && num2<=49 && num3>=1 && num3<=49 && num4>=1 && num4<=49 && num5>=1 && num5<=49  && num6>=1 && num6<=49) {
        if (boolPrimitiva) {
            ej.innerHTML =  `<p>GANASTE LA PRIMITIVA</p>`;
        } else {
            ej.innerHTML = `<p>Inténtalo otro día</p>`;
        }
    
    } else {
        ej.innerHTML = `<p>Error: número fuera del rango admitido</p>`;
    } 
}
let borrarEj8 = document.querySelector("#borrar-ej8");
borrarEj8.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej8");
    ej.innerHTML = ``;
}

let realizarEj9 = document.querySelector("#realizar-ej9");
realizarEj9.onclick = function realizarEjercicio() {
    alert("9. Leer por pantalla un entero y comprobar si es par o impar (use el operador módulo %).");
    let parImpar = Number.parseInt(prompt("Introduzca un número:"));
    let ej = document.querySelector("#ej9");
    if (parImpar%2==0) {
        ej.innerHTML = `<p>El número es par</p>`;
    } else {
        ej.innerHTML = `<p>El número es impar</p>`;
    }
}
let borrarEj9 = document.querySelector("#borrar-ej9");
borrarEj9.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej9");
    ej.innerHTML = ``;
}

/*CONTINUAR POR AQUI*/

let realizarEj10 = document.querySelector("#realizar-ej10");
realizarEj10.onclick = function realizarEjercicio() {
    alert("10. Crear un programa que calcule el índice de masa corporal. Lea los datos que sean necesarios, imprima por pantalla el índice, y dependiendo de su valor imprima al usuario un mensaje informativo.");
    let peso = Number.parseInt(prompt("Introduzca su peso en kilogramos:"));
    let altura = Number.parseInt(prompt("Introduzca su altura en metros:"));
    let IMC = (peso/(altura*altura));
    let ej = document.querySelector("#ej10");
    if (IMC<18.5) {
        ej.innerHTML = `Usted tiene bajo peso`;
    } else if (IMC<25) {
        ej.innerHTML = `Usted tiene peso normal`;
    } else if (IMC<30) {
        ej.innerHTML = `Usted tiene sobrepeso`;
    } else {
        ej.innerHTML = `Usted tiene obesidad`;
    }
}
let borrarEj10 = document.querySelector("#borrar-ej10");
borrarEj10.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej10");
    ej.innerHTML = ``;
}


let realizarEj11 = document.querySelector("#realizar-ej11");
realizarEj11.onclick = function realizarEjercicio() {
    alert("11. Leer por pantalla un número entre 1 y 12 e imprimir por pantalla el nombre del mes correspondiente. En caso de leer un número fuera de rango, imprimir por pantalla un mensaje de error.");
    let mes = Number.parseInt(prompt("Introduzca un numero entre el 1 y el 12:"));
    let ej = document.querySelector("#ej11");
    switch (mes) {
        case 1:
            ej.innerHTML = `Enero`;
            break;
        case 2:
            ej.innerHTML = `Febrero`;
            break;
        case 3:
            ej.innerHTML = `Marzo`;
            break;
        case 4:
            ej.innerHTML = `Abril`;
            break;
        case 5:
            ej.innerHTML = `Mayo`;
            break;
        case 6:
            ej.innerHTML = `Junio`;
            break;
        case 7:
            ej.innerHTML = `Julio`;
            break;
        case 8:
            ej.innerHTML = `Agosto`;
            break;
        case 9:
            ej.innerHTML = `Septiembre`;
            break;
        case 10:
            ej.innerHTML = `Octubre`;
            break;
        case 11:
            ej.innerHTML = `Noviembre`;
            break;
        case 12:
            ej.innerHTML = `Diciembre`;
            break;
        default:
            ej.innerHTML = `Numero no valido`;
            break;
    }
}
let borrarEj11 = document.querySelector("#borrar-ej11");
borrarEj11.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej11");
    ej.innerHTML = ``;
}


let realizarEj12 = document.querySelector("#realizar-ej12");
realizarEj12.onclick = function realizarEjercicio() {
    alert("12. Establezca un número entre 0 y 9999, que servirá como contraseña. Puede elegir el que desee. Pida por pantalla un número y si coincide escriba “Contraseña correcta, accediendo al sistema”, en caso contrario escriba “Contraseña incorrecta, cerrando sesión”.");
    let pass = 9412;
    let intentoPass = Number.parseInt(prompt("Introduzca la contraseña (número entre 0 y 9999):", 9412));
    let ej = document.querySelector("#ej12");
    if (intentoPass==pass) {
        ej.innerHTML = `Contraseña correcta, accediendo al sistema`;
    } else {
        ej.innerHTML = `Contraseña incorrecta, cerrando sesión`;
    }
}
let borrarEj12 = document.querySelector("#borrar-ej12");
borrarEj12.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej12");
    ej.innerHTML = ``;
}


let realizarEj13 = document.querySelector("#realizar-ej13");
let precio;
realizarEj13.onclick = function realizarEjercicio() {
    alert("13. Desarrolle un sistema de cálculo de descuentos para una farmacia. Cuando el usuario introduzca un precio, usted deberá aplicar un descuento del 15% a ese valor, e imprimir por pantalla el precio final. Recuerde que debe imprimir el precio final tras aplicar el descuento, no la cantidad que se descuenta.");
    precio = Number.parseInt(prompt("Introduzca el precio del producto:"));
    let ej = document.querySelector("#ej13");
    ej.innerHTML = `<p>El precio sin descuento es: ${precio}€</p><p>El precio con descuento es: ${precio*0.85}€</p>`;
}
let borrarEj13 = document.querySelector("#borrar-ej13");
borrarEj13.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej13");
    ej.innerHTML = ``;
}


let realizarEj14 = document.querySelector("#realizar-ej14");
realizarEj14.onclick = function realizarEjercicio() {
    alert("14. Modifique el anterior para que además se imprima la cantidad que se descuenta.");
    let ej = document.querySelector("#ej14");
    ej.innerHTML = `<p>El precio sin descuento es: ${precio}€</p><p>El precio con descuento es: ${precio*0.85}€</p><p>La cantidad descuentada es: ${precio-precio*0.85}€</p>`;
}
let borrarEj14 = document.querySelector("#borrar-ej14");
borrarEj14.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej14");
    ej.innerHTML = ``;
}


let realizarEj15 = document.querySelector("#realizar-ej15");
realizarEj15.onclick = function realizarEjercicio() {
    alert("15. Diseñe un programa que lea la temperatura en centígrados del día e imprima el tipo de clima de acuerdo a la siguiente tabla.");
    let temp = Number.parseInt(prompt("Introduzca la temperatura en grados centígrados:"));
    let ej = document.querySelector("#ej15");
    if (temp<=10) {
        ej.innerHTML = `El clima es frio`;
    } else if (temp>10 && temp<=20) { // (temp<=20)
        ej.innerHTML = `El clima es nublado`;
    } else if (temp>20 && temp<=30){ // (temp<=30)
        ej.innerHTML = `El clima es caluroso`;
    } else {
        ej.innerHTML = `El clima es tropical`;
    }
}
let borrarEj15 = document.querySelector("#borrar-ej15");
borrarEj15.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej15");
    ej.innerHTML = ``;
}

let realizarEj16 = document.querySelector("#realizar-ej16");
realizarEj16.onclick = function realizarEjercicio() {
    alert("16. Pedir un número entre 0 y 99999 y decir cuántas cifras tiene.");
    let num = Number.parseInt(prompt("Introduzca un numero entre 0 y 99999: "));
    let ej = document.querySelector("#ej16");
    let cont = 1;
    if (num > 9 && num <= 99999) {
    while (num>=10) {
        num = num / 10;
        cont++;
    }
    ej.innerHTML = `<p>Número de ${cont} cifras detectado</p>`;
    } else if (num > 0 && num < 10){
        ej.innerHTML = `<p>Número de ${cont} cifra detectado</p>`;
    } else {
        ej.innerHTML = `<p>Número fuera del rango</p>`;
    }
}
let borrarEj16 = document.querySelector("#borrar-ej16");
borrarEj16.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej16");
    ej.innerHTML = ``;
}

let realizarEj17 = document.querySelector("#realizar-ej17");
realizarEj17.onclick = function realizarEjercicio() {
    alert("17. La universidad ha categorizado las matrículas de acuerdo a la facultad que va a estudiar el postulante. Ingrese por teclado el nombre de la facultad donde va a estudiar, y muestre el importe y la mensualidad.");
    let uni = prompt("Introduzca la universidad: ");
    let ej = document.querySelector("#ej17");
    switch (uni) {
        case "Ing. de Sistemas":
            ej.innerHTML = `<p>Importe: 350€</p><p>Mensualidad: 650€</p>`;
            break;
        case "Derecho":
            ej.innerHTML = `<p>Importe: 300€</p><p>Mensualidad: 550€</p>`;
            break;
        case "Ing. Naviera":
            ej.innerHTML = `<p>Importe: 300€</p><p>Mensualidad: 600€</p>`;
            break;
        case "Ing. Pesquera":
            ej.innerHTML = `<p>Importe: 310€</p><p>Mensualidad: 460€</p>`;
            break;
        case "Contabilidad":
            ej.innerHTML = `<p>Importe: 280€</p><p>Mensualidad: 490€</p>`;
            break;
        case "Administración":
            ej.innerHTML = `<p>Importe: 360€</p><p>Mensualidad: 520€</p>`;
            break;
        default:
            ej.innerHTML = `<p>Esta universidad no consta en nuestra base de datos</p>`;
            break;
    }
}
let borrarEj17 = document.querySelector("#borrar-ej17");
borrarEj17.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej17");
    ej.innerHTML = ``;
}

let realizarEj18 = document.querySelector("#realizar-ej18");
realizarEj18.onclick = function realizarEjercicio() {
    alert("18. Escriba programa para ingresar 4 notas de un alumno, calcular y mostrar su tercera y cuarta tienen 30% de peso cada una.");
    let nota1 = Number.parseInt(prompt("Introduzca la primera nota: "));
    let nota2 = Number.parseInt(prompt("Introduzca la segunda nota: "));
    let nota3 = Number.parseInt(prompt("Introduzca la tercera nota: "));
    let nota4 = Number.parseInt(prompt("Introduzca la cuarta nota: "));
    let ej = document.querySelector("#ej18");
    ej.innerHTML = `<p>Su nota promedio es: ${nota1*0.2 + nota2*0.2 + nota3*0.3 + nota4*0.3}</p>`;
}
let borrarEj18 = document.querySelector("#borrar-ej18");
borrarEj18.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej18");
    ej.innerHTML = ``;
}

let realizarEj19 = document.querySelector("#realizar-ej19");
realizarEj19.onclick = function realizarEjercicio() {
    alert("19. Desarrolle un programa que pida cuantos hombres y mujeres hay en un aula y permita calcular el porcentaje de hombres y mujeres.");
    let numHombres = Number.parseInt(prompt("Introduzca el número de hombres nota: "));
    let numMujeres = Number.parseInt(prompt("Introduzca el número de mujeres nota: "));
    let numtotal = numHombres + numMujeres;
    let ej = document.querySelector("#ej19");
    ej.innerHTML = `<p>El porcentaje de hombres es del ${numHombres*100/numtotal}%</p>
    <p>El porcentaje de mujeres es del ${numMujeres*100/numtotal}%</p>`;
}
let borrarEj19 = document.querySelector("#borrar-ej19");
borrarEj19.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej19");
    ej.innerHTML = ``;
}

let realizarEj20 = document.querySelector("#realizar-ej20");
realizarEj20.onclick = function realizarEjercicio() {
    alert("20. Swapping");
    let swapA = Number.parseInt(prompt("Introduzca el primer número:"));
    let swapB = Number.parseInt(prompt("Introduzca el segundo número:"));
    let swapC = Number.parseInt(prompt("Introduzca el tercer número:"));
    let ej = document.querySelector("#ej20");
    ej.innerHTML = `<p>Valores originales:</p><p>A = ${swapA} | B = ${swapB}</p>`;
    swapC=swapA;
    swapA=swapB;
    swapB=swapC;
    ej.innerHTML += `<p>Valores finales:</p><p>A = ${swapA} | B = ${swapB}</p>`;
}
let borrarEj20 = document.querySelector("#borrar-ej20");
borrarEj20.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej20");
    ej.innerHTML = ``;
}

let realizarEj21 = document.querySelector("#realizar-ej21");
realizarEj21.onclick = function realizarEjercicio() {
    alert("21. Leer por pantalla dos números enteros, e imprimirlos por pantalla en orden creciente.");
    let x = Number.parseInt(prompt("Introduzca el primer número:"));
    let y = Number.parseInt(prompt("Introduzca el segundo número:"));
    let ej = document.querySelector("#ej21");
    if (x>y) {
        ej.innerHTML = `<p>Números en orden creciente:<p></p>${y}, ${x}</p>`;
    } else if (x<y) {
        ej.innerHTML = `<p>Números en orden creciente:<p></p>${x}, ${y}</p>`;
    } else {
        ej.innerHTML = `<p>Son iguales los números ${x} y ${y}</p>`;
    }
}
let borrarEj21 = document.querySelector("#borrar-ej21");
borrarEj21.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej21");
    ej.innerHTML = ``;
}

let realizarEj22 = document.querySelector("#realizar-ej22");
realizarEj22.onclick = function realizarEjercicio() {
    alert("22. Leer por pantalla tres números enteros, e imprimirlos por pantalla en orden creciente.");
    let numA = Number.parseInt(prompt("Introduzca el primer número:"));
    let numB = Number.parseInt(prompt("Introduzca el segundo número:"));
    let numC = Number.parseInt(prompt("Introduzca el tercer número:"));
    let numD;
    let ej = document.querySelector("#ej22");
    if (numA>numC) {
        numD=numA;
        numA=numC;
        numC=numD;
    }
    if (numA>numB) {
        numD=numA;
        numA=numB;
        numB=numD;
    }
    if (numB>numC) {
        numD=numB;
        numB=numC;
        numC=numD;
    }
    ej.innerHTML = `<p>Números en orden creciente:<p></p>${numA}, ${numB}, ${numC}</p>`;
}
let borrarEj22 = document.querySelector("#borrar-ej22");
borrarEj22.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej22");
    ej.innerHTML = ``;
}

let realizarEj23 = document.querySelector("#realizar-ej23");
realizarEj23.onclick = function realizarEjercicio() {
    alert("23. Repetir el ejercicio anterior, e imprimirlos en orden decreciente.");
    let numA = Number.parseInt(prompt("Introduzca el primer número:"));
    let numB = Number.parseInt(prompt("Introduzca el segundo número:"));
    let numC = Number.parseInt(prompt("Introduzca el tercer número:"));
    let numD;
    let ej = document.querySelector("#ej23");
    if (numA>numC) {
        numD=numA;
        numA=numC;
        numC=numD;
    }
    if (numA>numB) {
        numD=numA;
        numA=numB;
        numB=numD;
    }
    if (numB>numC) {
        numD=numB;
        numB=numC;
        numC=numD;
    }
    ej.innerHTML = `<p>Números en orden decreciente:<p></p>${numC}, ${numB}, ${numA}</p>`;
}
let borrarEj23 = document.querySelector("#borrar-ej23");
borrarEj23.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej23");
    ej.innerHTML = ``;
}

let realizarEj24 = document.querySelector("#realizar-ej24");
realizarEj24.onclick = function realizarEjercicio() {
    alert("24. Lea un número por pantalla y determine si es múltiplo de 10.");
    let multDiez = Number.parseInt(prompt("Introduzca un número:"));
    let ej = document.querySelector("#ej24");
    if (multDiez%10==0) {
    ej.innerHTML = `<p>El número ${multDiez} es múltiplo de 10:</p><p>${multDiez}/10 = ${multDiez/10}</p>`;
    } else {
    ej.innerHTML = `<p>El número ${multDiez} NO es múltiplo de 10</p>`;
    }
}
let borrarEj24 = document.querySelector("#borrar-ej24");
borrarEj24.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej24");
    ej.innerHTML = ``;
}

let realizarEj25 = document.querySelector("#realizar-ej25");
realizarEj25.onclick = function realizarEjercicio() {
    alert("25. Leer por pantalla un número de tres cifras, e imprimir cada una de sus cifras en una línea.");
    let tresCifras = Number.parseInt(prompt("Introduzca un número de 3 cifras:"));
    let ej = document.querySelector("#ej25");
    if (tresCifras>=100 && tresCifras<=999) {
        let cifra1 = Math.trunc(tresCifras/100);
        let cifra2 = Math.trunc((tresCifras - cifra1 * 100) / 10);
        let cifra3 = Math.trunc((tresCifras - cifra1 * 100 - cifra2 * 10));
        ej.innerHTML = `<p>${cifra1}</p><p>${cifra2}</p><p>${cifra3}</p>`;
    } else {
        ej.innerHTML = `Número no valido`;
    }
}
let borrarEj25 = document.querySelector("#borrar-ej25");
borrarEj25.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej25");
    ej.innerHTML = ``;
}

let realizarEj26 = document.querySelector("#realizar-ej26");
realizarEj26.onclick = function realizarEjercicio() {
    alert("26. Calculadora Inversa:");
    let operando1 = prompt("Introduzca un número:");
    let operando2 = prompt("Introduzca otro número:");
    let operacion = prompt("Introduzca la operación (sólo puede ser + - * : %):");
    let ej = document.querySelector("#ej26");
    let resultado = `${operando1}${operacion}${operando2}`;
    let solucion = eval(resultado);
    ej.innerHTML = `<p>${operando1} ${operacion} ${operando2} = ${solucion} </p>`;
}
let borrarEj26 = document.querySelector("#borrar-ej26");
borrarEj26.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej26");
    ej.innerHTML = ``;
}

let realizarEj27 = document.querySelector("#realizar-ej27");
realizarEj27.onclick = function realizarEjercicio() {
    alert("27. Lanzando los dados...");
    let dado1 = Math.floor(Math.random()*6)+1;
    let dado2 = Math.floor(Math.random()*6)+1;
    let dado3 = Math.floor(Math.random()*6)+1;
    let ej = document.querySelector("#ej27");
    if (dado1==6 && dado2==6 && dado3==6) {
        ej.innerHTML = `<p>Muy buena suerte</p>`;
    } else if (dado1==6 && dado2==6 || dado1==6 && dado3==6 || dado2==6 && dado3==6) {
        ej.innerHTML = `<p>Buena suerte</p>`;
    } else if (dado1==6 || dado2==6 || dado3==6) {
        ej.innerHTML = `<p>Mala suerte</p>`;
    } else {
        ej.innerHTML = `<p>Muy mala suerte</p>`;
    }
    ej.innerHTML += `<p>Tus dados fueron:</p><p>Dado 1: ${dado1}</p><p>Dado 2: ${dado2}</p><p>Dado 3: ${dado3}</p>`;
}
let borrarEj27 = document.querySelector("#borrar-ej27");
borrarEj27.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej27");
    ej.innerHTML = ``;
}