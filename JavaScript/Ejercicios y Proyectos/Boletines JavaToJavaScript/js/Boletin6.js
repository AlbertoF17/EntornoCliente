// BOLETIN 6

let realizarEj1 = document.querySelector("#realizar-ej1");
realizarEj1.onclick = function realizarEjercicio() {
        alert("1. Crea un algoritmo que imprima por pantalla la tabla de la verdad (truth table) de la operación lógica NOT.");
        let ej = document.querySelector("#ej1");
        ej.innerHTML = `<p>Tabla de la operacion lógica NOT</p><p>*****A*****|*****!A*****</p>
    <p>***Entrada**|***Salida***</p><p>*** ${true} ****|*** ${!true} ***</p><p>*** ${false} ****|*** ${!false} ***</p>`;
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej1");
        ej.innerHTML = ``;
}

let realizarEj2 = document.querySelector("#realizar-ej2");
realizarEj2.onclick = function realizarEjercicio() {
        alert("2. Repita el ejercicio anterior para la operación lógica AND.");
        let ej = document.querySelector("#ej2");
        ej.innerHTML = `<p>Tabla de la operacion lógica AND</p><p>*****A****&&*****B*****</p>
    <p>***Entrada**|***Salida***</p><p>${false}&&${false} *|*** ${false && false} ***</p><p>${false}&&${true} *|*** ${false && true} ***</p>
    <p>${true}&&${false} *|*** ${true && false} ***</p><p>${true}&&${true} *|*** ${true && true} ***</p>`;
}
let borrarEj2 = document.querySelector("#borrar-ej2");
borrarEj2.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej2");
        ej.innerHTML = ``;
}

let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
        alert("3. Repita el ejercicio anterior para la operación lógica OR.");
        let ej = document.querySelector("#ej3");
        ej.innerHTML = `<p>Tabla de la operacion lógica OR</p><p>*****A****||*****B*****</p>
    <p>***Entrada**|***Salida***</p><p>*${false}||${false} *|*** ${false || false} ***</p><p>*${false}||${true} *|*** ${false || true} ***</p>
    <p>*${true}||${false} *|*** ${true || false} ***</p><p>**${true}||${true} *|*** ${true || true} ***</p>`;
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej3");
        ej.innerHTML = ``;
}

let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
        alert("4. Evalúe mentalmente las siguientes operaciones Booleanas y compruebe posteriormente en Java su resultado, almacenándolas en una variable booleana e imprimiéndolas por pantalla.");
        let ej = document.querySelector("#ej4");
        ej.innerHTML = `<p>a) NO CIERTO Y NO VERDADERO</p><p>!true && true = ${!true && true}</p><br>
        <p>b) NO FALSO Y NO VERDADERO</p><p>!false && true = ${!false && true}</p><br>
        <p>c) VERDADERO Y NO VERDADERO O NO FALSO</p><p>true && !true || !false = ${true && !true || !false}</p><br>
        <p>d) VERDADERO Y (NO VERDADERO O NO FALSO)</p><p>true && (!true || !false) = ${true && (!true || !false)}</p><br>
        <p>e) VERDADERO Y (NO VERDADERO O FALSO)</p><p>true && (!true || false) = ${true && (!true || false)}</p><br>
        <p>f) FALSO O FALSO O NO FALSO</p><p>false || false || !false = ${false || false || !false}</p><br>
        <p>g) NO (FALSO O FALSO O NO FALSO)</p><p>!(false || false || !false) = ${!(false || false || !false)}</p><br>
        <p>h) NO(FALSO Y FALSO)Y(NO FALSO Y NO FALSO) Y NO NO VERDADERO</p><p>!(false && false) && (!fasle && !false) && !!true = ${!(false && false) && (!false && !false) && !!true}</p><br>
        <p>i) NO NO NO NO NO NO NO NO FALSO</p><p>!!!!!!!!false = ${!!!!!!!!false}</p><br>
        <p>j) FALSO O NO NO FALSO O VERDADERO Y FALSO</p><p>false || !!false || true && false = ${false || !!false || true && false}</p>`;
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej4");
        ej.innerHTML = ``;
}

let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
        alert("5. En base a los resultados anteriores, ¿cuál es la precedencia de los operadores lógicos? Si aún no está clara, ponga un ejemplo que no utilice paréntesis para saber cuál de las tres operaciones se ejecuta con preferencia sobre las demás.");
        let ej = document.querySelector("#ej5");
        ej.innerHTML = `<p>La preferencia de los operadores usados anteriormente la tiene el operador NOT, luego el AND y por último el OR</p>`;
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej5");
        ej.innerHTML = ``;
}

let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
        alert("6. Cree un programa que compruebe si un número es mayor que 100, e imprima por pantalla verdadero o falso.");
        let ej = document.querySelector("#ej6");
        let num = Number.parseInt(prompt("Escriba un número"));
        ej.innerHTML = `<p>El número es: ${num}</p><p>¿Es un número mayor que 100? ${num > 100}</p>`;
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej6");
        ej.innerHTML = ``;
}

let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
        alert("7. Modifique el ejercicio anterior para que compruebe si es mayor que 100 y menor que 200.");
        let ej = document.querySelector("#ej7");
        let num = Number.parseInt(prompt("Escriba un número"));
        ej.innerHTML = `<p>El número es: ${num}</p><p>¿Es un número entre 100 y 200? ${num > 100 && num < 200}</p>`;
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej7");
        ej.innerHTML = ``;
}

let realizarEj8 = document.querySelector("#realizar-ej8");
realizarEj8.onclick = function realizarEjercicio() {
        alert("8. Cree un programa que reciba una nota con decimales, e imprima por pantalla si el alumno ha aprobado.");
        let ej = document.querySelector("#ej8");
        let nota = Number.parseFloat(prompt("Escriba la nota del alumno"));
        ej.innerHTML = `<p>La nota es es: ${nota}</p><p>¿El alumno ha aprobado? ${nota >= 5.0}</p>`;
}
let borrarEj8 = document.querySelector("#borrar-ej8");
borrarEj8.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej8");
        ej.innerHTML = ``;
}

let realizarEj9 = document.querySelector("#realizar-ej9");
realizarEj9.onclick = function realizarEjercicio() {
        alert("9. Compruebe si el alumno ha suspendido.");
        let ej = document.querySelector("#ej9");
        let nota = Number.parseFloat(prompt("Escriba la nota del alumno"));
        ej.innerHTML = `<p>La nota es es: ${nota}</p><p>¿El alumno ha suspendido? ${nota < 5.0}</p>`;
}
let borrarEj9 = document.querySelector("#borrar-ej9");
borrarEj9.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej9");
        ej.innerHTML = ``;
}

let realizarEj10 = document.querySelector("#realizar-ej10");
realizarEj10.onclick = function realizarEjercicio() {
        alert("10. Compruebe si el alumno ha sacado matricula (nota superior a 10).");
        let ej = document.querySelector("#ej10");
        let nota = Number.parseFloat(prompt("Escriba la nota del alumno"));
        ej.innerHTML = `<p>La nota es es: ${nota}</p><p>¿El alumno ha sacado matrícula? ${nota > 10.0}</p>`;
}
let borrarEj10 = document.querySelector("#borrar-ej10");
borrarEj10.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej10");
        ej.innerHTML = ``;
}

let realizarEj11 = document.querySelector("#realizar-ej11");
realizarEj11.onclick = function realizarEjercicio() {
        alert("11. Cree un programa que reciba un número entero y compruebe si es par.");
        let ej = document.querySelector("#ej11");
        let num = Number.parseInt(prompt("Escriba un número"));
        ej.innerHTML = `<p>El número es: ${num}</p><p>¿Es par? ${num % 2 == 0}</p>`;
}
let borrarEj11 = document.querySelector("#borrar-ej11");
borrarEj11.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej11");
        ej.innerHTML = ``;
}

let realizarEj12 = document.querySelector("#realizar-ej12");
realizarEj12.onclick = function realizarEjercicio() {
        alert("12. Compruebe si es impar.");
        let ej = document.querySelector("#ej12");
        let num = Number.parseInt(prompt("Escriba un número"));
        ej.innerHTML = `<p>El número es: ${num}</p><p>¿Es impar? ${!num % 2 == 0}</p>`;
}
let borrarEj12 = document.querySelector("#borrar-ej12");
borrarEj12.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej12");
        ej.innerHTML = ``;
}

let realizarEj13 = document.querySelector("#realizar-ej13");
realizarEj13.onclick = function realizarEjercicio() {
        alert("13. Compruebe si es múltiplo de 10.");
        let ej = document.querySelector("#ej13");
        let num = Number.parseInt(prompt("Escriba un número"));
        ej.innerHTML = `<p>El número es: ${num}</p><p>¿Es múltiplo de 10? ${num % 10 == 0}</p>`;
}
let borrarEj13 = document.querySelector("#borrar-ej13");
borrarEj13.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej13");
        ej.innerHTML = ``;
}

let realizarEj14 = document.querySelector("#realizar-ej14");
realizarEj14.onclick = function realizarEjercicio() {
        alert("4. Compruebe si es divisible entre 31.");
        let ej = document.querySelector("#ej14");
        let num = Number.parseInt(prompt("Escriba un número"));
        ej.innerHTML = `<p>El número es: ${num}</p><p>¿Es divisible entre 31? ${num % 31 == 0}</p>`;
}
let borrarEj14 = document.querySelector("#borrar-ej14");
borrarEj14.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej14");
        ej.innerHTML = ``;
}

let realizarEj15 = document.querySelector("#realizar-ej15");
realizarEj15.onclick = function realizarEjercicio() {
        alert("15. Cree un programa que reciba un número con decimales (salario) y un número entero entre 0 y 100 (porcentaje), e imprima por pantalla el nuevo salario resultante de aplicar la subida de salario correspondiente.");
        let ej = document.querySelector("#ej15");
        let salario = Number.parseFloat(prompt("Escriba su salario"));
        let porcentaje = Number.parseInt(prompt("Escriba el porcentaje de subida"));
        ej.innerHTML = `<p>El antiguo salario es ${salario}</p><p>El nuevo salario es ${salario * (1 + (porcentaje / 100))}</p>`;
}
let borrarEj15 = document.querySelector("#borrar-ej15");
borrarEj15.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej15");
        ej.innerHTML = ``;
}

let realizarEj16 = document.querySelector("#realizar-ej16");
realizarEj16.onclick = function realizarEjercicio() {
        alert("16. Repita pero aplicando una bajada de salario.");
        let ej = document.querySelector("#ej16");
        let salario = Number.parseFloat(prompt("Escriba su salario"));
        let porcentaje = Number.parseInt(prompt("Escriba el porcentaje de bajada"));
        ej.innerHTML = `<p>El antiguo salario es ${salario}</p><p>El nuevo salario es ${salario * (1 - (porcentaje / 100))}</p>`;
}
let borrarEj16 = document.querySelector("#borrar-ej16");
borrarEj16.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej16");
        ej.innerHTML = ``;
}

let realizarEj17 = document.querySelector("#realizar-ej17");
realizarEj17.onclick = function realizarEjercicio() {
        alert("17. Busque por internet información sobre que condiciones lógicas debe cumplir un año para ser bisiesto. Cuando las encuentre, cree un programa que almacene un año en una variable entera, y luego cree un booleano que almacene el resultado de esa condición lógica sobre la variable entera. Imprima por pantalla el resultado.");
        let ej = document.querySelector("#ej17");
        let anyo = Number.parseInt(prompt("Escriba un año"));
        ej.innerHTML = `<p>¿El año ${anyo} es bisiesto? ${anyo%4==0}</p>`;
}
let borrarEj17 = document.querySelector("#borrar-ej17");
borrarEj17.onclick = function borrarEjercicio() {
        let ej = document.querySelector("#ej17");
        ej.innerHTML = ``;
}