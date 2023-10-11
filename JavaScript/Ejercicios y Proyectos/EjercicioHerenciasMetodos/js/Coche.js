export class Coche extends Vehículos {
    constructor(marca, modelo, matricula, titular, tipo) {
        super(marca, modelo, matricula, titular);
        this.tipo = tipo;
    }

    static encenderIntermitente(lado) {
        console.log(`Encendiendo intermitente del lado ${lado}}`);
    }
    
    activarLimpiaparabrisas() {
        return "parabrisas limpiado";
    }
}