import {alumno} from "modulos/Alumno.js";

appDiv = document.querySelector("#appDiv")

fetch('../json/alumnos.json')
.then(response => response.json())
.then( json => {
    console.log(json)
    json.map(item => {
        appDiv.innerHTML += `<div style="border: 2px solid black; padding: 5px">
        <p>Nombre: ${alumno.nombre} ${alumno.apellido}</p>
        <p>DNI: ${alumno.dni}</p>
        <p>Nota Programación: ${alumno.notaProg}</p>
        <p>Nota Sistemas: ${alumno.notaSist}</p>
        <p>Nota Marcas: ${alumno.notaMarc}</p>
        <p>Nota BBDD: ${alumno.notaBbdd}</p>
        <p>Nota Entornos: ${alumno.notaEntornos}</p>
        <p>Nota FOL: ${alumno.notaFol}</p>
        <p>${Alumno.prototype.saludar(alumno.nombre)}</p>
        </div>`
    })
})