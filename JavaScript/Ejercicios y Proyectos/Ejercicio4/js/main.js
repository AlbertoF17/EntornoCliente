//CODED BY AlbertoF17

//Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]
const array = ["Joaquin", 1,["Hola","Adios"], true];

//1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.
let cont = 0;
for (let elemento of array){
    if (Array.isArray(elemento)){
        for(let i = 0; i < elemento.length; i++){
            localStorage.setItem("variable" + cont, JSON.stringify(elemento[i]));
            cont++;
        }
    }else{
        localStorage.setItem("variable" + cont, elemento);
        cont++;
    }   
}

//2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage.
//3) Crear un div por cada variable e insertar el valor de dicha variable en el div.
//4) Insertar estos divs en el body del html.
const body = document.querySelector("body");
for (let i = 0; i < cont; i++){
    console.log(localStorage.getItem("variable" + i));
    let div1 = document.createElement("DIV");
    div1.textContent = localStorage.getItem("variable" + i);
    body.appendChild(div1);
}
//He realizado el console.log para que la petción de la variable se muestre por consola.