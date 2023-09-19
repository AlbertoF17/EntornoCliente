import {Alumno} from "./Alumno.js";

fetch("json/alumnos.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(alumno => {
      const nuevoAlumno = new Alumno(alumno.nombre, alumno.apellido, alumno.dni, alumno.notaProg,
      alumno.notaSist, alumno.notaMarc, alumno.notaBbdd, alumno.notaEntornos, alumno.notaFol);

      const tarjeta = document.createElement('div');
      tarjeta.classList.add('card');

      const nombre = document.createElement('h2');
      nombre.textContent = nuevoAlumno.nombre;

      const apellido = document.createElement('h2');
      apellido.textContent = nuevoAlumno.apellido;

      const dni = document.createElement('p');
      dni.textContent = `DNI: ${nuevoAlumno.dni}`;

      const tituloNotas = document.createElement('h3');
      tituloNotas.textContent = "Notas:";

      const notaProg = document.createElement('p');
      notaProg.textContent = `Programación: ${nuevoAlumno.notaProg}`;

      const notaSist = document.createElement('p');
      notaSist.textContent = `Sistemas: ${nuevoAlumno.notaSist}`;

      const notaMarc = document.createElement('p');
      notaMarc.textContent = `Marketing: ${nuevoAlumno.notaMarc}`;

      const notaBbdd = document.createElement('p');
      notaBbdd.textContent = `Bases de Datos: ${nuevoAlumno.notaBbdd}`;

      const notaEntornos = document.createElement('p');
      notaEntornos.textContent = `Entornos de Desarrollo: ${nuevoAlumno.notaEntornos}`;

      const notaFol = document.createElement('p');
      notaFol.textContent = `FOL: ${nuevoAlumno.notaFol}`;

      const textoSaludo = document.createElement('h3');
      textoSaludo.textContent = "Saludo: ";

      const saludo = document.createElement('p');
      saludo.textContent = nuevoAlumno.saludar();

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(apellido);
      tarjeta.appendChild(dni);
      tarjeta.appendChild(tituloNotas);
      tarjeta.appendChild(notaProg);
      tarjeta.appendChild(notaSist);
      tarjeta.appendChild(notaMarc);
      tarjeta.appendChild(notaBbdd);
      tarjeta.appendChild(notaEntornos);
      tarjeta.appendChild(notaFol);
      tarjeta.appendChild(textoSaludo);
      tarjeta.appendChild(saludo);

      document.body.appendChild(tarjeta);
    });
  })
  .catch(error => console.error(error));