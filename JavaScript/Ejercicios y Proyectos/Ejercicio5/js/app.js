const nombres = ["jousemarquez", "AlbertoF17", "eXdesy", "usuariozombie", "Hard-Curro", "irecas97"];

function rellenar(array) {
    //1- Guardar el contenedor cuyo id es #container en una variable.
    const contenedor = document.querySelector("#container");
    //2- Iterar con un bucle los elementos del array que recibe como argumento.
    array.forEach(nombre => {
        //3- En cada iteración, se debe crear los siguientes elementos:
        //3a - un elemento DIV cuya clase sea "card border-info mb-3 w-25 h-25".
        let elementoCarta = document.createElement("DIV");
        elementoCarta.className = "card border-info mb-3 w-25 h-25";
        //3b- un elemento DIV cuya clase sea "card-header" y cuyo textContent sea el valor del array en la posición i.
        let elementoHeader = document.createElement("DIV");
        elementoHeader.className = "card-header";
        elementoHeader.textContent = `${nombre}`;
        //3c- un elemento DIV cuya clase sea "card-body text-info d-flex flex-column".
        let elementoBody = document.createElement("DIV");
        elementoBody.className = "card-body text-info d-flex flex-column";
        //3d- un elemento IMG cuya clase sea "card-img-top", cuyo alt sea el valor del array en la posición i y cuyo src sea `https://github.com/${nombre}.png` siendo nombre el valor del array en la posición i.
        let elementoImg = document.createElement("IMG");
        elementoImg.setAttribute("alt", `${nombre}`);
        elementoImg.setAttribute("src", `https://github.com/${nombre}.png`);
        elementoImg.className = "card-img-top";
        //3e- un elemento de tipo A cuyas clases sean "btn btn-primary" y cuyo textContent sea "Ir a su Github", con href que sea `https://github.com/${nombre}` siendo nombre el valor del array en la posición i.
        let elementoA = document.createElement("A");
        elementoA.setAttribute("src", `https://github.com/${nombre}.png`);
        elementoA.className = "btn btn-primary";
        elementoA.textContent = `${nombre}`;
        //3f- meter en el elemento 3c los elementos 3d y 3e.
        elementoBody.appendChild(elementoImg);
        elementoBody.appendChild(elementoA);
        //3g- meter en el elemento 3a los elementos 3b y 3c
        elementoCarta.appendChild(elementoHeader);
        elementoCarta.appendChild(elementoBody);
        //3h- meter en el elemento contenedor del paso 1 al elemento 3a.
        contenedor.appendChild(elementoCarta);
    });
}