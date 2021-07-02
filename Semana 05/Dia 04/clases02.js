
// let gato = {
//     nombre:"Mani",
//     edad:1,
//     raza:"Rescatado",
//     color:"Beige",
//     peso:1,

//     mostrarInfo:() =>{
//         console.log(this);
//     }
// }
// gato.mostrarInfo()

class Animal{
    constructor(nombre,edad,familia,tamanio){
        this.nombre = nombre
        this.edad = edad
        this.familia = familia
        this.tamanio = tamanio
    }
    correr(velocidad){
        console.log(`${this.nombre} puede correr a ${velocidad}`);
    }

    detener(){
        console.log(`${this.nombre} se detuvo`);
    }
    
}

let perro = new Animal("perro",13,"canino","mediano")
console.log(perro); 

class Conejo extends Animal{
    constructor(nombre,edad,familia,tamanio,salto){

        super(nombre,edad,familia,tamanio)
        this.salto = salto
    }
    esconder(){
        console.log(`${this.nombre} se escondio a un salto de ${this.salto} metros por segundo`);
    }
}

let bugs = new Conejo("Bugs Bunny",5,"herviboro","pequenio",20)

console.log(bugs);

bugs.esconder()

perro.correr(10)