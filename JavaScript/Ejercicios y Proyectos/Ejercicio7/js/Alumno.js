import { Persona } from "./Persona.js";

export class Alumno extends Persona{
  constructor(nombre, apellido, dni, notaProg, notaSist, notaMarc, notaBbdd, notaEntornos, notaFol) {
  super(nombre, apellido, dni);
  this.notaProg = notaProg;
  this.notaSist = notaSist;
  this.notaMarc = notaMarc;
  this.notaBbdd = notaBbdd;
  this.notaEntornos = notaEntornos;
  this.notaFol = notaFol;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}