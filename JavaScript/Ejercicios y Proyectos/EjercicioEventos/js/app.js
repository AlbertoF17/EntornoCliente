const body = document.body;
const boton = document.querySelector('#generar');
const cardContainer = document.querySelector('.card-container');
body.appendChild(cardContainer);

const Alberto = {
    nombre: "Alberto",
    apellido: "Fernández"
};

const Alicia = {
    nombre: "Alicia",
    apellido: "Hernández"
};

const Antonio = {
    nombre: "Antonio",
    apellido: "Jurado"
};

const Carlos = {
    nombre: "Carlos",
    apellido: "Nomeseelapellido"
};

const Curro = {
    nombre: "Francisco de Paula",
    apellido: "Osuna"
};

const Jouse = {
    nombre: "José Antonio",
    apellido: "Márquez"
};

const Juanbe = {
    nombre: "Juan",
    apellido: "Gavilán"
};

const Marcelo = {
    nombre: "Marcelo",
    apellido: "Herce"
};

const Maria = {
    nombre: "María",
    apellido: "Sisamón"
};

const Miguel = {
    nombre: "Miguel",
    apellido: "Cavero"
};

const Natalia = {
    nombre: "Natalia ",
    apellido: "Domínguez"
};

const Noelia = {
    nombre: "Noelia",
    apellido: "¿?¿?¿?"
};

const Pablo = {
    nombre: "Pablo",
    apellido: "López"
};

let arrayAlumnos = [Alberto, Alicia, Antonio, Carlos, Curro, Jouse, Juanbe, Marcelo, Maria, Miguel, Natalia, Noelia, Pablo];
let arrayNumeros = [];
boton.addEventListener("click", () => {
    let num = 0;
    do {
        num = Math.floor(Math.random() * arrayAlumnos.length);
    } while (arrayNumeros.includes(num));
    arrayNumeros.push(num);
    let alumnoSeleccionado = arrayAlumnos[num];
    let cartaAlumno = document.createElement("div");
    cartaAlumno.className = "card";
    let nombre = document.createElement("h1");
    let apellido = document.createElement("h2");
    nombre.textContent = alumnoSeleccionado.nombre;
    apellido.textContent = alumnoSeleccionado.apellido;
    cartaAlumno.appendChild(nombre);
    cartaAlumno.appendChild(apellido);
    cardContainer.appendChild(cartaAlumno);
});
