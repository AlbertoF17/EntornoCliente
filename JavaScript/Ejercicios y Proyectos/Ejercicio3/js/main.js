//1) Eliminar el primer elemento hijo desde el padre.
const elementoPadre = document.querySelector("#cardContainer");
elementoPadre.removeChild(elementoPadre.firstElementChild);

//2) Eliminar, desde él mismo, el elemento cuya clase es "cards redClass".
const elementoRedClass = document.querySelector(".cards.redClass")
elementoRedClass.remove();

//3) Crear un elemento h1 con vuestro nombre.
const titulo = document.createElement("H1");
titulo.textContent = "Alberto";

//4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
const enlace = document.createElement("A");
enlace.textContent = "Vedruna";
enlace.setAttribute("href", "https://vedrunasevilla.org/");
enlace.setAttribute("target", "_blank"); //extra para que no se vaya de la página    

//5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
const boton = document.createElement("BUTTON");
boton.setAttribute("id","botonJoker");
boton.textContent = "boton";

//6) Crear un elemento div cuya clase sea "cards greenClass".
const divCarta = document.createElement("DIV");
divCarta.className = "cards greenClass";

//7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente.
divCarta.appendChild(titulo);
divCarta.appendChild(enlace);
divCarta.appendChild(boton);

//8) Añadir a cardContainer el div del apartado anterior.
elementoPadre.appendChild(divCarta);
