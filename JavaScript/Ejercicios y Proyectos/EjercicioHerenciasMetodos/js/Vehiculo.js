class Vehiculo {
    constructor(marca, modelo, matricula, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.matricula = matricula;
        this.titular = titular;
    }

    static arrancar() {
        console.log("Arrancado");
    }

    acelerar(velocidad) {
        console.log(`Acelerando a ${velocidad} km/h`);
    }

}