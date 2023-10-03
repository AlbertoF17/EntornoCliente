const nombres = ["jousemarquez", "AlbertoF17", "eXdesy", "usuariozombie", "Hard-Curro", "irecas97"];

const contenedor = document.createElement("DIV");
contenedor.className = "container d-flex justify-content-around flex-wrap  gap-3 p-4";
document.body.appendChild(contenedor);

for (let nombre of nombres) {
    const card = document.createElement("DIV");
    card.className = "card border-info mb-3 w-25 h-25";
    const cardHeader = document.createElement("DIV");
    cardHeader.className = "card-header";
    cardHeader.textContent = `@${nombre}`;
    const cardBody = document.createElement("DIV");
    cardBody.className = "card-body text-info d-flex flex-column";
    const cardImg = document.createElement("IMG");
    cardImg.className = "card-img-top";
    cardImg.src = `https://github.com/${nombre}.png`;
    cardImg.alt = `${nombre}`
    const cardButton = document.createElement("A");
    cardButton.className = "btn btn-primary";
    cardButton.textContent = "Ir a su Github"
    cardButton.href = `https://github.com/${nombre}`;
    cardBody.appendChild(cardImg);
    cardBody.appendChild(cardButton);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    contenedor.appendChild(card);
}