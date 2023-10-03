"use strict"; //Para no hacer burradas
//x = 20; esto da error por el modo estricto

//Objeto
const personaje = {
    nombre: "Cazabichos Sami",
    fraseDesafiante: "¡Eh, espera! ¿Por qué tienes tanta prisa?",
    fraseAlPerder: "¡Me rindo! ¡Eres demasiado fuerte!",
    fraseTrasPerder: "¡A veces puedes encontrar cosas en el suelo! ¡Estoy buscando los objetos que se me cayeron!",
    hasCombatidoAntes: false,
    pokemon: ["Weedle"]
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["nombre"]);

//Añadir y borrar propiedad
personaje.imagen = "media/img/cazabichos.webp";
delete personaje.pokemon

console.log(personaje);

//Destructuring
const { fraseAlPerder } = personaje;
console.log(fraseAlPerder);
const { fraseDesafiante, hasCombatidoAntes } = personaje;
console.log(fraseDesafiante);
console.log(hasCombatidoAntes);

//Objeto dentro de objeto
personaje.pokemon = {
    nombre: "Weedle",
    nivel: 9,
    movimientos: ["Disparo demora", "Picotazo venenoso"]
};

console.log(personaje);
console.log(personaje.pokemon);
console.log(personaje.pokemon.nivel);

//Destructuring
const { pokemon: {nombre} } = personaje; //Se crea solo la variable nombre, la variable pokemon NO se crea
console.log(nombre);

//Array de objetos dentro de un objeto que esta dentro de un objeto
personaje.pokemon.movimientos = [
    {
        nombre: "Disparo demora",
        potencia: 0,
        precision: 95,
        pp: 40
    },
    {
        nombre: "Picotazo venenoso",
        potencia: 15,
        precision: 100,
        pp: 35
    }
];

//Si usamos el modo estricto, podemos usar metodos para volver más estricto el lenguaje

//Congelar
Object.freeze(personaje); //A partir de esta linea el objeto no se podra modificar, estara en modo read-only (congelado)
//personaje.imagen = ""; Esto da error por la funcion anterior
//Ver si un objeto esta congelado
console.log(Object.isFrozen(personaje));
///NO SE PUEDE DESCONGELAR


// POR AQUI HAY QUE SEGUIR
const personaje2 = {
    nombre: "Cazabichos Cornelio",
    fraseDesafiante: "¡Nos vimos en el BOSQUE VERDE!",
    fraseAlPerder: "¡Has ganado otra vez!",
    fraseTrasPerder: "¡Hay otros tipos de POKÉMON diferentes a los del bosque!",
    hasCombatidoAntes: false,
    pokemons: [{
        nombre: "Weedle",
        nivel: 14,
        movimientos: [
            {
                nombre: "Disparo demora",
                potencia: 0,
                precision: 95,
                pp: 40
            },
            {
                nombre: "Picotazo venenoso",
                potencia: 15,
                precision: 100,
                pp: 35
            }
        ]
    },
    
    ],
    imagen: "media/img/cazabichos.webp"
};

//Sellar
Object.seal(personaje2); //A partir de esta linea al objeto se le podra modificar sus atributos, pero no añadirlos ni borrarlos
personaje2.hasCombatidoAntes = true;
console.log(personaje2);
console.log(Object.isSealed(personaje2));
///NO SE PUEDE DESSELLAR

//Copiar objeto en otro
const coche1 = {
    marca: "Audi"
};

const coche2 = {...coche1};
coche2.marca = "Mercedes"
console.log(coche1.marca);
console.log(coche2.marca);

//Definir metodos

const coche = {
    marca: "Opel",
    imprimirMarca: function() {
        console.log(`El coche es de la marca ${this.marca}`);
    }
}

coche.imprimirMarca();

//Constructor (Metodo antiguo)
function Coche(marca) {
    this.marca = marca;
}

const coche3 = new Coche("Renault");
console.log(coche3);

//Otras funciones de interes
console.log(Object.keys(personaje)); //Array de claves
console.log(Object.values(personaje)); //Array de valores
console.log(Object.entries(personaje)); //Array de arrays key-value