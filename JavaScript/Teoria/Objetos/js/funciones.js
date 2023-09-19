
//Declaración de objetos
const coche1 = {
    marca: "Audi",
    matricula: "1234ABC",
    color: "rojo",
    seguro: true,
}

console.log(coche1);
console.log(coche1.color);

//Funciones
function imprimirSaludo(){
    console.log("Hola");
}

const imprimirSaludoNombre = function(nombre) {
    console.log("Hola " + nombre);
}

const imprimirSaludo3 = () =>{
    console.log("Hola");
    console.log("Mundo");
}

const imprimirSaludoNombreString = function(nombre) {
    return "Hola " + nombre;
}

//Métodos llamados desde un objeto
//Funcion no llamado desde un objeto (no necesitas instanciar una clase)

function addAge(edad=0){
    let x = imprimirSaludoNombreString(nombre) + " " + edad;
    return x;
}

const resta = (n1=0, n2=0) => n1-n2; //Si está en una línea, es un return