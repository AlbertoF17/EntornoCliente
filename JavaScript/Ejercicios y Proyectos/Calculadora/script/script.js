let display = document.querySelector("#ans");
let parentesisAbierto = document.querySelector("#parentesis-abierto");
let parentesisCerrado  = document.querySelector("#parentesis-cerrado");
let letraC = document.querySelector("#C");
let letrasCA = document.querySelector("#ClearAll");
let num7 = document.querySelector("#siete");
let num8 = document.querySelector("#ocho");
let num9 = document.querySelector("#nueve");
let opMult = document.querySelector("#multiplicacion");
let num4 = document.querySelector("#cuatro");
let num5 = document.querySelector("#cinco");
let num6 = document.querySelector("#seis");
let opResta = document.querySelector("#resta");
let num1 = document.querySelector("#uno");
let num2 = document.querySelector("#dos");
let num3 = document.querySelector("#tres");
let opSuma = document.querySelector("#suma");
let opDivision = document.querySelector("#division");
let num0 = document.querySelector("#cero");
let puntoDecimal = document.querySelector("#punto");
let opIgual = document.querySelector("#igual");
let operacion = "";
let solucionado = false;

parentesisAbierto.onclick = function muestraBoton(){
    operacion += "(";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
parentesisCerrado.onclick = function muestraBoton(){
    operacion += ")";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
letraC.onclick = function muestraBoton(){
    if (solucionado){
        operacion = "";
    } else{
        operacion = operacion.slice(0, -1);
    }
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
letrasCA.onclick = function muestraBoton(){
    operacion = "";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num7.onclick = function muestraBoton(){
    operacion += "7";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num8.onclick = function muestraBoton(){
    operacion += "8";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num9.onclick = function muestraBoton(){
    operacion += "9";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
opMult.onclick = function muestraBoton(){
    operacion += "*";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num4.onclick = function muestraBoton(){
    operacion += "4";;
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num5.onclick = function muestraBoton(){
    operacion += "5";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num6.onclick = function muestraBoton(){
    operacion += "6";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
opResta.onclick = function muestraBoton(){
    operacion += "-";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num1.onclick = function muestraBoton(){
    operacion += "1";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num2.onclick = function muestraBoton(){
    operacion += "2";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num3.onclick = function muestraBoton(){
    operacion += "3";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
opSuma.onclick = function muestraBoton(){
    operacion += "+";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
opDivision.onclick = function muestraBoton(){
    operacion += "/";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
num0.onclick = function muestraBoton(){
    operacion += "0";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
puntoDecimal.onclick = function muestraBoton(){
    operacion += ".";
    display.innerHTML = `<p></p><p>${operacion}</p>`;
}
opIgual.onclick = function solucion(){
    solucionado = true;
    let resultado = eval(operacion);
    display.innerHTML = `<p>${operacion}</p>`;
    operacion = resultado;
    display.innerHTML += `<p>${operacion}</p>`;
}