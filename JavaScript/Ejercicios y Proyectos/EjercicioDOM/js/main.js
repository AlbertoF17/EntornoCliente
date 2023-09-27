const body = document.body;
body.style.margin = 0;
body.style.padding = 0;
body.style.fontFamily = "Verdana";
body.style.backgroundColor = "#121212";

const headerObject = document.createElement("header");
headerObject.style.height = "15vh";
headerObject.style.display = "flex";
headerObject.style.flexDirection = "column";
headerObject.style.justifyContent = "center";

const headerH1 = document.createElement("h1");
headerH1.textContent = "Entorno Cliente";
headerH1.style.display = "flex";
headerH1.style.justifyContent = "center";
headerH1.style.color = "white";
headerObject.appendChild(headerH1);

const navigationBar = document.createElement("nav");
const menuList = document.createElement("ul");

menuList.style.listStyle = "none";
menuList.style.padding = "0";
menuList.style.display = "flex";
menuList.style.justifyContent = "space-evenly";

const github = document.createElement("li");
const pagina = document.createElement("li");
const linkedin = document.createElement("li");
const githubLink = document.createElement("a");
const paginaLink = document.createElement("a");
const linkedinLink = document.createElement("a");

githubLink.style.color = "white";
paginaLink.style.color = "white";
linkedinLink.style.color = "white";

githubLink.href = "https://github.com/AlbertoF17";
githubLink.textContent = "GitHub";
paginaLink.href = "https://albertof17.github.io/Portfolio/AlbertoFernandezGomez_Portfolio/";
paginaLink.textContent = "Mi página";
linkedinLink.href = "https://www.linkedin.com/in/alberto-fg/";
linkedinLink.textContent = "LinkedIn";

github.appendChild(githubLink);
pagina.appendChild(paginaLink);
linkedin.appendChild(linkedinLink);
menuList.appendChild(github);
menuList.appendChild(pagina);
menuList.appendChild(linkedin);
navigationBar.appendChild(menuList);
headerObject.appendChild(navigationBar);

const mainObject = document.createElement("main");

mainObject.style.display = "flex";
mainObject.style.justifyContent = "center";
mainObject.style.alignItems = "center";
mainObject.style.minHeight = "65vh";
mainObject.style.padding = "1rem";
mainObject.style.gap = "2.5rem";
mainObject.style.flexWrap = "wrap";

const imagenCartas1 = document.createElement("img");
imagenCartas1.src = "./media/github.png";
imagenCartas1.width = 200;

const imagenCartas2 = document.createElement("img");
imagenCartas2.src = "./media/icono.png";
imagenCartas2.width = 200;

const imagenCartas3 = document.createElement("img");
imagenCartas3.src = "./media/linkedin.png";
imagenCartas3.width = 200;

const imagenCartas4 = document.createElement("img");
imagenCartas4.src = "./media/sorpresa.webp";
imagenCartas4.width = 200;

const carta1 = document.createElement("div");
const tituloCarta1 = document.createElement("h3");
carta1.appendChild(tituloCarta1);
carta1.appendChild(imagenCartas1);

const carta2 = document.createElement("div");
const tituloCarta2 = document.createElement("h3");
carta2.appendChild(tituloCarta2);
carta2.appendChild(imagenCartas2);

const carta3 = document.createElement("div");
const tituloCarta3 = document.createElement("h3");
carta3.appendChild(tituloCarta3);
carta3.appendChild(imagenCartas3);

const carta4 = document.createElement("div");
const tituloCarta4 = document.createElement("h3");
carta4.appendChild(tituloCarta4);
carta4.appendChild(imagenCartas4);


tituloCarta1.textContent = "GitHub";
tituloCarta2.textContent = "Mi Página";
tituloCarta3.textContent = "LinkedIn";
tituloCarta4.textContent = "Proyecto Sorpresa";

carta1.style.width = "17rem";
carta1.style.height = "25rem";
carta1.style.backgroundColor = "#242424";
carta1.style.borderRadius = "2.5rem";
carta1.style.display = "flex";
carta1.style.flexDirection = "column";
carta1.style.alignItems = "center";
carta1.style.color = "white";
carta1.style.gap = "2rem";

carta2.style.width = "17rem";
carta2.style.height = "25rem";
carta2.style.backgroundColor = "#242424";
carta2.style.borderRadius = "2.5rem";
carta2.style.display = "flex";
carta2.style.flexDirection = "column";
carta2.style.alignItems = "center";
carta2.style.color = "white";
carta2.style.gap = "2rem";

carta3.style.width = "17rem";
carta3.style.height = "25rem";
carta3.style.backgroundColor = "#242424";
carta3.style.borderRadius = "2.5rem";
carta3.style.display = "flex";
carta3.style.flexDirection = "column";
carta3.style.alignItems = "center";
carta3.style.color = "white";
carta3.style.gap = "2rem";

carta4.style.width = "17rem";
carta4.style.height = "25rem";
carta4.style.backgroundColor = "#242424";
carta4.style.borderRadius = "2.5rem";
carta4.style.display = "flex";
carta4.style.flexDirection = "column";
carta4.style.alignItems = "center";
carta4.style.color = "white";
carta4.style.gap = "2rem";

const githubIr = document.createElement("a");
const paginaIr = document.createElement("a");
const linkedinIr = document.createElement("a");
const proyectoSorpresaIr = document.createElement("a");

githubIr.href = "https://github.com/AlbertoF17";
githubIr.textContent = "Ir allí";
githubIr.target = "_blank"
githubIr.style.color = "white";
paginaIr.href = "https://albertof17.github.io/Portfolio/AlbertoFernandezGomez_Portfolio/";
paginaIr.textContent = "Ir allí";
paginaIr.target = "_blank"
paginaIr.style.color = "white";
linkedinIr.href = "https://www.linkedin.com/in/alberto-fg/";
linkedinIr.textContent = "Ir allí";
linkedinIr.target = "_blank";
linkedinIr.style.color = "white";
proyectoSorpresaIr.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
proyectoSorpresaIr.textContent = "Ir allí";
proyectoSorpresaIr.target = "_blank";
proyectoSorpresaIr.style.color = "white";

carta1.appendChild(githubIr);
carta2.appendChild(paginaIr);
carta3.appendChild(linkedinIr);
carta4.appendChild(proyectoSorpresaIr);

mainObject.appendChild(carta1);
mainObject.appendChild(carta2);
mainObject.appendChild(carta3);
mainObject.appendChild(carta4);


const footerObject = document.createElement("footer");
footerObject.style.height = "15vh";
footerObject.style.display = "flex";
footerObject.style.justifyContent = "center";
const logo = document.createElement("img");
logo.src = "./media/icono.png";
logo.style.height = "100%"
footerObject.appendChild(logo);

body.appendChild(headerObject);
body.appendChild(mainObject);
body.appendChild(footerObject);