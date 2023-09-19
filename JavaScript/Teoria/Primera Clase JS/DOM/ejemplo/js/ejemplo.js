const btnFlotante = document.querySelector(".btn-flotante");
const header = document.querySelector("header");

btnFlotante.addEventListener("click", () => {
    if (header.className === "oculto") {
        console.log("Haciendo visible");
        header.className = "visible";
    } else {
        console.log("Haciendo invisible");
        header.className = "oculto";
    }

});