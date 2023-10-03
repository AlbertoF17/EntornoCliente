//Programación orientada a eventos

//evento que ocurre cuando el documento se carga al completo
document.addEventListener('DOMContentLoaded', () => console.log("HTML CARGADO"));

//eventos con el mouse
const mainButton = document.querySelector("#mainBttn");  

mainButton.addEventListener("click", () => console.log("Has hecho click"));
mainButton.addEventListener("mouseenter", () => console.log("Has puesto el raton sobre el boton"));
mainButton.addEventListener("mouseout", () => console.log("Has quitado el raton del boton"));
mainButton.addEventListener("mousedown", () => console.log("Has pulsado el boton del raton"));
mainButton.addEventListener("mouseup", () => console.log("Has dejado de pulsar el boton del raton"));
mainButton.addEventListener("dblclick", () => console.log("Has hecho doble click"));

//Eventos sobre los inputs
const subjectInput = document.querySelector("#subject");  

subjectInput.addEventListener("keydown", () => console.log("Has presionado una tecla"));
subjectInput.addEventListener("keyup", () => console.log("Has dejado de presionar una tecla"));
subjectInput.addEventListener("blur", () => console.log("Has quitado el focus del input"));
subjectInput.addEventListener("copy", () => console.log("Has copiado el texto del input"));
subjectInput.addEventListener("paste", () => console.log("Has pegado el texto del input"));
subjectInput.addEventListener("cut", () => console.log("Has cortado el texto del input"));
subjectInput.addEventListener("input", () => console.log("Todos los demas eventos salvo blur"));
subjectInput.addEventListener("input", (evento) => console.log(evento));
subjectInput.addEventListener("input", (evento) => {
    if (evento.target.value === "") {
        alert("El campo no debe estar vacio");
    }
}
);

//Evento sobre submits
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //previene el action por defecto
    console.log(e);
}
);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Validado");
}

formulario.addEventListener("submit", validarFormulario);

function sumarEnteros(a, b) {
    let resultado = a + b;
    console.log(resultado);
}

formulario.addEventListener("submit", () => sumarEnteros(1,2));

//Eventos al hacer scroll
window.addEventListener("scroll", () => {
    console.log("Has hecho scroll a", window.scrollY)

    const parrafo = document.querySelector("#card");
    const ubicacionParrafo = parrafo.getBoundingClientRect();

    if (ubicacionParrafo.top < 570) {
        console.log("El elemento ya esta visible");
    } else {
        console.log("Aun no, da mas scroll");
    }
});

//Prevenir event bubbling
const carta = document.querySelector("#card");
const info = document.querySelector("#info");
const boton = document.querySelector("#boton");


carta.addEventListener("click", () => {
    console.log("Has hecho click en card");
});
info.addEventListener("click", (e) => {
    e.stopPropagation(); //paramos la propagacion y no se ejecutará el click de la carta
    console.log("Has hecho click en info");
});
boton.addEventListener("click", (e) => {
    e.stopPropagation(); //paramos la propagacion y no se ejecutará el click de la info ni de la carta
    console.log("Has hecho click en boton");
});

//Otra forma. Delegation
const carta2 = document.querySelector("#card2");
const info2 = document.querySelector("#info2");
const boton2 = document.querySelector("#boton2");

carta2.addEventListener("click", (e) => {
    if (e.target.id === "card2") {
        console.log("Has hecho click en card con delegation");
    } else if (e.target.id === "info2") {
        console.log("Has hecho click en info con delegation");
    } else if (e.target.id === "boton2") {
        console.log("Has hecho click en boton con delegation");
    }
});

//Agregar evento directamente al elemento
const boton3 = document.querySelector("#boton3");
boton3.onclick = () => console.log("boton 3 presionado");