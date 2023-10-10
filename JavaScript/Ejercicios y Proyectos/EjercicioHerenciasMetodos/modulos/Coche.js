export class Coche extends Vehículos {
    constructor(marca, modelo, matricula, titular, tipo) {
        super(marca, modelo, matricula, titular);
        this.tipo = tipo;
    }
    
    arrancar() {
        return "coche arrancado";
    }
}